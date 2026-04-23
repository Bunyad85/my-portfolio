import React, { useState } from "react";

const initialForm = {
    name: "",
    email: "",
    message: "",
    company: "",
};

const Contact = () => {
    const [formData, setFormData] = useState(initialForm);
    const [status, setStatus] = useState({ type: "", message: "" });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus({ type: "", message: "" });

        // 🤖 bot protection (honeypot)
        if (formData.company.trim()) return;

        setIsSubmitting(true);

        try {
            const res = await fetch(
                "https://formsubmit.co/ajax/bunyad-seferov@mail.ru",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                    },
                    body: JSON.stringify({
                        name: formData.name,
                        email: formData.email,
                        message: formData.message,
                        _subject: "New portfolio contact message",
                        _captcha: "false",
                        _template: "table",
                    }),
                }
            );

            if (!res.ok) throw new Error("Request failed");

            setStatus({
                type: "success",
                message: "Message sent successfully 🚀",
            });

            setFormData(initialForm);
        } catch (err) {
            setStatus({
                type: "error",
                message: "Message could not be sent. Try again.",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section
            id="contact"
            className="flex min-h-[70vh] w-full items-center justify-center px-0 py-16"
        >
            <div className="w-full max-w-3xl rounded-3xl border border-white/10 bg-black/40 p-6 text-white backdrop-blur-sm md:p-12">

                {/* TITLE */}
                <div className="text-center mb-8">
                    <h1 className="text-4xl md:text-6xl">
                        <span className="bg-gradient-to-r from-cyan-500 to-blue-700 bg-clip-text text-transparent">
                            Get in Touch
                        </span>
                    </h1>
                    <p className="text-gray-400 mt-2">
                        Send a message about your project
                    </p>
                </div>

                {/* FORM */}
                <form onSubmit={handleSubmit} className="grid gap-4">

                    <div className="grid md:grid-cols-2 gap-4">
                        <input
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Name"
                            required
                            className="p-3 rounded-xl bg-white/5 border border-white/10"
                        />

                        <input
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Email"
                            required
                            className="p-3 rounded-xl bg-white/5 border border-white/10"
                        />
                    </div>

                    {/* HONEYPOT (hidden) */}
                    <input
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="hidden"
                    />

                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Message"
                        rows={6}
                        required
                        className="p-3 rounded-xl bg-white/5 border border-white/10"
                    />

                    <button
                        disabled={isSubmitting}
                        type="submit"
                        className="p-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-700 hover:from-cyan-400 hover:to-blue-600 transition disabled:opacity-50"
                    >
                        {isSubmitting ? "Sending..." : "Send Message"}
                    </button>
                </form>

                {/* STATUS */}
                {status.message && (
                    <p
                        className={`mt-4 text-sm ${status.type === "success"
                            ? "text-green-400"
                            : "text-red-400"
                            }`}
                    >
                        {status.message}
                    </p>
                )}
            </div>
        </section>
    );
};

export default Contact;