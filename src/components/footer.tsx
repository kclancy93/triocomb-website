import { Link } from 'gatsby'
import { Link as ScrollLink } from 'react-scroll'
import React from 'react'
import logo from '../assets/images/logo-light.png'
import { FiPhoneCall, FiMail } from 'react-icons/fi'

const footerLinks = [
    { to: 'about', label: 'About' },
    { to: 'services', label: 'Services' },
    { to: 'mission', label: 'Mission' },
    { to: 'review', label: 'Testimonials' },
    { to: 'contact', label: 'Contact' },
]

export default function Footer() {
    return (
        <footer className="footer bg-clay-900 dark:bg-black text-white/70">
            <div className="container py-16 lg:py-20">
                <div className="grid lg:grid-cols-12 md:grid-cols-2 grid-cols-1 gap-10">
                    <div className="lg:col-span-5">
                        <Link to="/" className="inline-block">
                            <img src={logo} className="h-9 w-auto" alt="Comb" />
                        </Link>
                        <p className="mt-5 max-w-sm leading-relaxed text-white/60">
                            A global talent agency connecting skilled engineers with U.S. clients — built on transparency, fair pay, and meaningful work.
                        </p>

                        <ul className="mt-6 flex items-center gap-2">
                            <li>
                                <a
                                    href="tel:+15133995139"
                                    className="size-10 inline-flex items-center justify-center rounded-full bg-white/5 hover:bg-teal-500 text-white transition-colors"
                                    aria-label="Call us"
                                >
                                    <FiPhoneCall className="size-4" />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="mailto:support@triocomb.com"
                                    className="size-10 inline-flex items-center justify-center rounded-full bg-white/5 hover:bg-teal-500 text-white transition-colors"
                                    aria-label="Email us"
                                >
                                    <FiMail className="size-4" />
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="lg:col-span-3">
                        <h4 className="font-fraunces text-lg text-white">Site</h4>
                        <ul className="mt-5 space-y-3">
                            {footerLinks.map(item => (
                                <li key={item.to}>
                                    <ScrollLink
                                        to={item.to}
                                        smooth
                                        duration={500}
                                        className="text-white/70 hover:text-teal-400 cursor-pointer transition-colors"
                                    >
                                        {item.label}
                                    </ScrollLink>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="lg:col-span-4">
                        <h4 className="font-fraunces text-lg text-white">Stay in touch</h4>
                        <p className="mt-3 text-white/60 leading-relaxed">
                            Occasional updates from the Comb team. No spam.
                        </p>
                        <form className="mt-5 relative max-w-md">
                            <input
                                type="email"
                                name="email"
                                className="w-full h-12 ps-5 pe-32 rounded-full bg-white/5 text-white placeholder:text-white/40 border border-white/15 focus:border-teal-400 focus:ring-4 focus:ring-teal-500/15 outline-none transition"
                                placeholder="you@company.com"
                            />
                            <button
                                type="submit"
                                className="absolute end-1.5 top-1.5 h-9 px-5 inline-flex items-center justify-center rounded-full bg-gradient-to-br from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white text-sm font-medium shadow-md shadow-teal-500/25 transition-all duration-300"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                <div className="mt-14 pt-8 border-t border-white/10 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-sm text-white/50">
                    <p>© {new Date().getFullYear()} Comb Inc. All rights reserved.</p>
                    <p className="flex items-center gap-2">
                        <span>Made with</span>
                        <i className="mdi mdi-heart text-teal-400"></i>
                        <span>by the Comb team</span>
                    </p>
                </div>
            </div>
        </footer>
    )
}
