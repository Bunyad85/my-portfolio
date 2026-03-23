import React, { useState } from 'react'

const initialForm = {
    name: '',
    email: '',
    message: '',
    company: '',
}

const Contact = () => {
    const [formData, setFormData] = useState(initialForm)
    const [status, setStatus] = useState({ type: '', message: '' })
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleChange = (event) => {
        const { name, value } = event.target
        setFormData((current) => ({
            ...current,
            [name]: value,
        }))
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        setStatus({ type: '', message: '' })

        if (formData.company.trim()) {
            setStatus({
                type: 'success',
                message: 'Message sent successfully.',
            })
            setFormData(initialForm)
            return
        }

        setIsSubmitting(true)

        try {
            const response = await fetch('https://formsubmit.co/ajax/bunyad-seferov@mail.ru', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                    company: formData.company,
                    _subject: 'New portfolio contact message',
                    _captcha: 'false',
                    _template: 'table',
                }),
            })

            const result = await response.json()

            if (!response.ok || result.success !== 'true') {
                throw new Error('Request failed')
            }

            setStatus({
                type: 'success',
                message: 'Message sent successfully. Check your inbox for the FormSubmit activation email if this is the first submission.',
            })
            setFormData(initialForm)
        } catch (error) {
            setStatus({
                type: 'error',
                message: 'Message could not be sent right now. Please try again shortly.',
            })
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <section id='contact' className='flex min-h-[70vh] w-full items-center justify-center px-4 py-20'>
            <div className='flex w-full max-w-3xl flex-col gap-8 rounded-3xl border border-white/10 bg-black/40 p-8 text-white shadow-2xl shadow-indigo-950 backdrop-blur-sm md:p-12'>
                <div className='space-y-4 text-center'>
                    <h1 className='text-5xl md:text-7xl'>
                        <span className='bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent'>Get in Touch</span>
                    </h1>
                    <p className='text-base font-medium text-gray-400 md:text-lg'>
                        Send a direct message from the website. It will be forwarded to `bunyad-seferov@mail.ru`.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className='grid gap-4'>
                    <div className='grid gap-4 md:grid-cols-2'>
                        <label className='grid gap-2 text-sm text-gray-300'>
                            Name
                            <input
                                type='text'
                                name='name'
                                value={formData.name}
                                onChange={handleChange}
                                placeholder='Your name'
                                required
                                autoComplete='name'
                                className='rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-base text-white outline-none transition focus:border-indigo-500 focus:bg-white/10'
                            />
                        </label>
                        <label className='grid gap-2 text-sm text-gray-300'>
                            Email
                            <input
                                type='email'
                                name='email'
                                value={formData.email}
                                onChange={handleChange}
                                placeholder='Your email'
                                required
                                autoComplete='email'
                                className='rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-base text-white outline-none transition focus:border-indigo-500 focus:bg-white/10'
                            />
                        </label>
                    </div>

                    <div className='hidden' aria-hidden='true'>
                        <label className='grid gap-2 text-sm text-gray-300'>
                            Company
                            <input
                                type='text'
                                name='company'
                                value={formData.company}
                                onChange={handleChange}
                                tabIndex='-1'
                                autoComplete='off'
                                className='rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-base text-white outline-none transition'
                            />
                        </label>
                    </div>

                    <label className='grid gap-2 text-sm text-gray-300'>
                        Message
                        <textarea
                            name='message'
                            value={formData.message}
                            onChange={handleChange}
                            placeholder='Tell me about your project or idea'
                            required
                            rows='6'
                            className='resize-none rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-base text-white outline-none transition focus:border-indigo-500 focus:bg-white/10'
                        />
                    </label>

                    <button
                        type='submit'
                        disabled={isSubmitting}
                        className='rounded-2xl border border-indigo-600 bg-black px-5 py-4 text-lg font-bold text-white shadow-lg shadow-indigo-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-600 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0'
                    >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                </form>

                {status.message && (
                    <p className={`rounded-2xl border px-4 py-3 text-sm md:text-base ${status.type === 'success'
                        ? 'border-green-500/30 bg-green-500/10 text-green-300'
                        : 'border-red-500/30 bg-red-500/10 text-red-300'
                        }`}>
                        {status.message}
                    </p>
                )}
            </div>
        </section>
    )
}

export default Contact
