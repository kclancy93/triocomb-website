import React, { useState } from 'react'
import emailjs from '@emailjs/browser'

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

        const serviceId = process.env.GATSBY_SERVICE_ID?.trim()
        const templateId = process.env.GATSBY_TEMPLATE_ID?.trim()
        const publicKey = process.env.GATSBY_PUBLIC_KEY?.trim()

        if (!serviceId || !templateId || !publicKey) {
            setError('Email service is not configured. Please try again later.')
            setLoading(false)
            return
        }

        const timestampInput = form.querySelector('#time') as HTMLInputElement
        timestampInput.value = new Date().toISOString()

        try {
            await emailjs.sendForm(serviceId, templateId, form, publicKey)
            setSuccess(true)
            form.reset()
        } catch (err) {
            console.error('EmailJS sendForm failed:', err)
            setError('Failed to send message. Please try again later.')
        } finally {
            setLoading(false)
        }
    }

    const inputClass = "mt-2 w-full h-12 px-4 rounded-xl border border-cream-200 bg-white dark:bg-slate-900 dark:border-gray-700 dark:text-white text-clay-700 focus:border-teal-500 focus:ring-4 focus:ring-teal-500/15 outline-none transition"

    return (
        <section className="relative md:py-28 py-20 bg-cream-50 dark:bg-slate-800" id="contact">
            <div className="container relative">
                <div className="grid grid-cols-1 pb-14 max-w-2xl mx-auto text-center">
                    <span className="inline-flex items-center justify-center gap-3">
                        <span className="inline-block w-6 h-px bg-teal-600"></span>
                        <span className="text-xs font-semibold tracking-[0.22em] uppercase text-teal-600">Get in touch</span>
                    </span>

                    <h2 className="font-fraunces font-medium text-3xl lg:text-5xl text-clay-700 dark:text-white leading-[1.15] tracking-tight mt-5">
                        Let's{' '}
                        <span className="italic font-normal text-teal-600">talk</span>{' '}
                        about your project.
                    </h2>

                    <p className="text-lg text-clay-500 dark:text-white/70 leading-[1.75] mt-5">
                        Whether you're a client looking to scale your team or an engineer ready to take on new work — drop us a note. We read every message.
                    </p>
                </div>

                <div className="grid lg:grid-cols-12 grid-cols-1 items-start gap-8">
                    <div className="lg:col-span-5">
                        <div className="bg-clay-900 text-white rounded-3xl p-8 lg:p-10 h-full">
                            <h3 className="font-fraunces text-2xl font-medium !text-white">
                                Reach us directly
                            </h3>
                            <p className="mt-3 text-white/80 leading-relaxed">
                                We typically reply within one business day. For urgent matters, email us — it's the fastest path to a human.
                            </p>

                            <ul className="mt-8 space-y-6">
                                <li className="flex items-start gap-4">
                                    <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/10 text-teal-400 shrink-0">
                                        <i className="mdi mdi-email-outline text-xl"></i>
                                    </span>
                                    <div>
                                        <div className="text-xs text-white/60 uppercase tracking-[0.18em] font-medium">Email</div>
                                        <a href="mailto:support@triocomb.com" className="block mt-1 text-white hover:text-teal-400 transition-colors">
                                            support@triocomb.com
                                        </a>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/10 text-teal-400 shrink-0">
                                        <i className="mdi mdi-phone-outline text-xl"></i>
                                    </span>
                                    <div>
                                        <div className="text-xs text-white/60 uppercase tracking-[0.18em] font-medium">Phone</div>
                                        <a href="tel:+15133995139" className="block mt-1 text-white hover:text-teal-400 transition-colors">
                                            +1 (513) 399-5139
                                        </a>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/10 text-teal-400 shrink-0">
                                        <i className="mdi mdi-clock-outline text-xl"></i>
                                    </span>
                                    <div>
                                        <div className="text-xs text-white/60 uppercase tracking-[0.18em] font-medium">Response time</div>
                                        <span className="block mt-1 text-white">Within 1 business day</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="lg:col-span-7">
                        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-cream-200 dark:border-gray-700 p-6 md:p-8 lg:p-10">
                            <form onSubmit={handleSubmit} noValidate>
                                <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
                                    <div>
                                        <label htmlFor="name" className="text-sm font-medium text-clay-700 dark:text-white">Your name</label>
                                        <input name="name" id="name" type="text" className={inputClass} placeholder="Jane Doe" />
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="text-sm font-medium text-clay-700 dark:text-white">Your email</label>
                                        <input name="email" id="email" type="email" className={inputClass} placeholder="you@company.com" />
                                    </div>

                                    <div className="lg:col-span-2">
                                        <label htmlFor="subject" className="text-sm font-medium text-clay-700 dark:text-white">Subject</label>
                                        <input name="subject" id="subject" className={inputClass} placeholder="What's this about?" />
                                    </div>

                                    <div className="lg:col-span-2">
                                        <label htmlFor="message" className="text-sm font-medium text-clay-700 dark:text-white">Your message</label>
                                        <textarea name="message" id="message" className="mt-2 w-full px-4 py-3 h-36 rounded-xl border border-cream-200 bg-white dark:bg-slate-900 dark:border-gray-700 dark:text-white text-clay-700 focus:border-teal-500 focus:ring-4 focus:ring-teal-500/15 outline-none transition resize-y leading-relaxed" placeholder="Tell us a little about what you're working on..."></textarea>
                                    </div>

                                    <input type="hidden" name="time" id="time" />
                                </div>

                                {error && (
                                    <p className="mt-4 text-sm text-red-600 bg-red-50 dark:bg-red-950/30 rounded-lg px-4 py-3">
                                        {error}
                                    </p>
                                )}
                                {success && (
                                    <p className="mt-4 text-sm text-emerald-700 bg-emerald-50 dark:bg-emerald-950/30 rounded-lg px-4 py-3">
                                        Thanks — your message is on its way. We'll be in touch soon.
                                    </p>
                                )}

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="group mt-6 h-12 px-8 inline-flex items-center justify-center gap-2 font-medium rounded-full bg-gradient-to-br from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white shadow-md shadow-teal-500/25 hover:shadow-lg hover:shadow-teal-500/35 hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                                >
                                    {loading ? 'Sending…' : (<>Send message<i className="mdi mdi-arrow-right transition-transform duration-300 group-hover:translate-x-1"></i></>)}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
