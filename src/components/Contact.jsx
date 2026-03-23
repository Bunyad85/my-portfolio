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
        <section id='contact' className='flex min-h-[70vh] w-full items-center justify-center px-0 py-16 sm:px-2 sm:py-20'>
            <div className='flex w-full max-w-3xl flex-col gap-5 overflow-hidden rounded-[24px] border border-white/10 bg-black/40 p-4 text-white shadow-2xl shadow-indigo-950 backdrop-blur-sm sm:gap-8 sm:rounded-[28px] sm:p-6 md:rounded-3xl md:p-12'>
                <div className='space-y-3 text-center sm:space-y-4'>
                    <h1 className='text-4xl md:text-7xl'>
                        <span className='bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent'>Get in Touch</span>
                    </h1>
                    <p className='mx-auto max-w-xl break-words text-sm font-medium leading-6 text-gray-400 sm:text-base md:text-lg'>
                        Send a message…
                    </p>
                </div>

                <form onSubmit={handleSubmit} className='grid gap-3 sm:gap-4'>
                    <div className='grid gap-3 md:grid-cols-2 sm:gap-4'>
                        <label className='grid gap-1.5 text-xs text-gray-300 sm:gap-2 sm:text-sm'>
                            Name
                            <input
                                type='text'
                                name='name'
                                value={formData.name}
                                onChange={handleChange}
                                placeholder='Your name'
                                required
                                autoComplete='name'
                                className='min-w-0 rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-white outline-none transition focus:border-indigo-500 focus:bg-white/10 sm:rounded-2xl sm:px-5 sm:py-4 sm:text-base'
                            />
                        </label>
                        <label className='grid gap-1.5 text-xs text-gray-300 sm:gap-2 sm:text-sm'>
                            Email
                            <input
                                type='email'
                                name='email'
                                value={formData.email}
                                onChange={handleChange}
                                placeholder='Your email'
                                required
                                autoComplete='email'
                                className='min-w-0 rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-white outline-none transition focus:border-indigo-500 focus:bg-white/10 sm:rounded-2xl sm:px-5 sm:py-4 sm:text-base'
                            />
                        </label>
                    </div>

                    <div className='hidden' aria-hidden='true'>
                        <label className='grid gap-1.5 text-xs text-gray-300 sm:gap-2 sm:text-sm'>
                            Company
                            <input
                                type='text'
                                name='company'
                                value={formData.company}
                                onChange={handleChange}
                                tabIndex='-1'
                                autoComplete='off'
                                className='rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-white outline-none transition sm:rounded-2xl sm:px-5 sm:py-4 sm:text-base'
                            />
                        </label>
                    </div>

                    <label className='grid gap-1.5 text-xs text-gray-300 sm:gap-2 sm:text-sm'>
                        Message
                        <textarea
                            name='message'
                            value={formData.message}
                            onChange={handleChange}
                            placeholder='Tell me about your project or idea'
                            required
                            rows='6'
                            className='min-h-28 resize-none rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-white outline-none transition focus:border-indigo-500 focus:bg-white/10 sm:min-h-36 sm:rounded-2xl sm:px-5 sm:py-4 sm:text-base'
                        />
                    </label>

                    <button
                        type='submit'
                        disabled={isSubmitting}
                        className='w-full rounded-lg border border-indigo-600 bg-black px-4 py-2.5 text-sm font-bold text-white shadow-lg shadow-indigo-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-600 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0 sm:rounded-2xl sm:px-5 sm:py-4 sm:text-lg'
                    >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                </form>

                {status.message && (
                    <p className={`break-words rounded-xl border px-4 py-3 text-sm leading-6 sm:rounded-2xl md:text-base ${status.type === 'success'
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
