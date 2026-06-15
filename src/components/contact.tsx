import React, { useState } from 'react'
import emailjs from '@emailjs/browser'
import contact from '../assets/images/contact.svg'

export default function Contact() {
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState('')

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setLoading(true)
        setError('')
        setSuccess(false)

        const form = e.currentTarget
        const name = form.name.value.trim()
        const email = form.email.value.trim()
        const subject = form.subject.value.trim()
        const message = form.message.value.trim()

        if (!name || !email || !subject || !message) {
            setError('Please fill in all fields')
            setLoading(false)
            return
        }
        
        const timestampInput = e.currentTarget.querySelector('#time') as HTMLInputElement
        timestampInput.value = new Date().toISOString()

        try {
            
            await emailjs.sendForm(
                process.env.GATSBY_SERVICE_ID,
                process.env.GATSBY_TEMPLATE_ID,
                e.currentTarget,
                process.env.GATSBY_PUBLIC_KEY
            )
            setSuccess(true);
            (e.target as HTMLFormElement).reset()
        } catch (err) {
            setError('Failed to send message. Please try again later.')
        } finally {
            setLoading(false)
        }
    }

    return (
        <section className="relative lg:py-24 py-16 bg-slate-50 dark:bg-slate-800" id="contact">
            <div className="container relative">
                <div className="grid grid-cols-1 pb-6 text-center">
                    <h3 className="font-semibold text-2xl leading-normal mb-4">Get in touch </h3>

                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">We're always excited to connect with talents and forward-thinking clients. <br />Please reach out to us using the form below, and we'll get back to you as soon as possible.</p>
                </div>

                <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-6">
                    <div className="lg:col-span-7 md:col-span-6">
                        <img src={contact} alt="" />
                    </div>

                    <div className="lg:col-span-5 md:col-span-6">
                        <div className="lg:ms-5">
                            <div className="bg-white dark:bg-slate-900 rounded-md shadow-sm dark:shadow-gray-700 p-6">
                                <form onSubmit={handleSubmit}>
                                    <div className="grid lg:grid-cols-12 grid-cols-1 gap-3">
                                        <div className="lg:col-span-6">
                                            <label htmlFor="name" className="font-semibold">Your Name:</label>
                                            <input name="name" id="name" type="text" className="mt-2 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0" placeholder="Name :" />
                                        </div>

                                        <div className="lg:col-span-6">
                                            <label htmlFor="email" className="font-semibold">Your Email:</label>
                                            <input name="email" id="email" type="email" className="mt-2 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0" placeholder="Email :" />
                                        </div>

                                        <div className="lg:col-span-12">
                                            <label htmlFor="subject" className="font-semibold">Your Question:</label>
                                            <input name="subject" id="subject" className="mt-2 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0" placeholder="Subject :" />
                                        </div>

                                        <div className="lg:col-span-12">
                                            <label htmlFor="message" className="font-semibold">Your Comment:</label>
                                            <textarea name="message" id="message" className="mt-2 w-full py-2 px-3 h-28 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0" placeholder="Message :"></textarea>
                                        </div>

                                        <input 
                                            type="hidden" 
                                            name="time" 
                                            id="time"
                                        />
                                    </div>
                                    {error && <p className="text-red-500 mt-2">{error}</p>}
                                    {success && <p className="text-green-500 mt-2">Message sent successfully!</p>}
                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className="h-10 px-6 tracking-wide inline-flex items-center justify-center font-medium rounded-md bg-teal-500 text-white mt-2 disabled:opacity-50"
                                    >
                                        {loading ? 'Sending...' : 'Send Message'}
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
