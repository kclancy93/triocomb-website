import React, { useState } from 'react'
import logoDark from '../assets/images/logo-dark.png'
import logoLight from '../assets/images/logo-light.png'
import { Link } from 'gatsby'
import { Link as ScrollLink } from 'react-scroll'

export default function NavbarLight() {
    const [menu, setMenu] = useState<boolean>(false)

    const navItems = [
        { to: 'home', label: 'Home' },
        { to: 'about', label: 'About' },
        { to: 'services', label: 'Services' },
        { to: 'mission', label: 'Mission' },
        { to: 'review', label: 'Reviews' },
    ]

    const pillClasses = [
        'inline-flex h-14 md:h-16 items-center gap-6 md:gap-8',
        'rounded-full border px-2 pl-4 md:px-3 md:pl-5',
        'border-[#e8e8ee]/40 dark:border-white/10',
        'bg-white/40 dark:bg-slate-900/40',
        'backdrop-blur-xl transition-all duration-300',
        'shadow-[0_2px_8px_-2px_#1118270f,0_4px_16px_-4px_#1118270a]',
    ].join(' ')

    return (
        <header className="fixed inset-x-0 top-3 z-[100] px-4 flex justify-center">
            <div className={pillClasses}>
                <Link className="inline-flex items-center" to="/" aria-label="Comb home">
                    <img src={logoLight} className="inline-block dark:hidden" width={120} alt="Comb" />
                    <img src={logoDark} className="hidden dark:inline-block" width={120} alt="Comb" />
                </Link>

                <nav aria-label="Primary" className="hidden lg_992:flex items-center gap-1">
                    {navItems.map(item => (
                        <ScrollLink
                            key={item.to}
                            to={item.to}
                            spy={true}
                            smooth={true}
                            duration={500}
                            activeClass="bg-cream-100 text-clay-700 dark:bg-white/10 dark:text-white"
                            className="inline-flex items-center cursor-pointer rounded-full px-4 py-2 text-sm font-medium text-clay-500 hover:bg-cream-100 hover:text-clay-700 dark:text-white/70 dark:hover:bg-white/10 dark:hover:text-white transition-colors"
                        >
                            {item.label}
                        </ScrollLink>
                    ))}
                </nav>

                <div className="flex items-center gap-2">
                    <ScrollLink
                        to="contact"
                        spy={true}
                        smooth={true}
                        duration={500}
                        className="group hidden lg_992:inline-flex h-10 px-5 items-center justify-center gap-2 rounded-full bg-gradient-to-br from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white text-sm font-medium cursor-pointer shadow-md shadow-teal-500/25 hover:shadow-lg hover:shadow-teal-500/35 transition-all duration-300"
                    >
                        Talk to us
                        <i className="mdi mdi-arrow-right transition-transform duration-300 group-hover:translate-x-1"></i>
                    </ScrollLink>
                    <button
                        onClick={(e) => { e.preventDefault(); setMenu(!menu) }}
                        type="button"
                        className="inline-flex items-center justify-center h-10 w-10 rounded-full text-clay-700 dark:text-white hover:bg-cream-100 dark:hover:bg-white/10 lg_992:hidden transition-colors"
                        aria-controls="mobile-menu"
                        aria-expanded={menu}
                    >
                        <span className="sr-only">Navigation Menu</span>
                        <i className={`mdi text-[22px] ${menu ? 'mdi-close' : 'mdi-menu'}`}></i>
                    </button>
                </div>
            </div>

            <div
                id="mobile-menu"
                className={`lg_992:hidden absolute left-4 right-4 top-full mt-2 rounded-2xl border border-[#e8e8ee]/40 dark:border-white/10 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl shadow-[0_2px_8px_-2px_#1118270f,0_4px_16px_-4px_#1118270a] overflow-hidden transition-all duration-300 ${menu ? 'opacity-100 max-h-[480px]' : 'opacity-0 max-h-0 pointer-events-none'}`}
            >
                <ul className="flex flex-col py-2">
                    {navItems.map(item => (
                        <li key={item.to}>
                            <ScrollLink
                                to={item.to}
                                spy={true}
                                smooth={true}
                                duration={500}
                                onClick={() => setMenu(false)}
                                activeClass="text-teal-600 dark:text-teal-400"
                                className="block cursor-pointer px-5 py-3 text-sm font-medium text-clay-700 dark:text-white/80 hover:bg-cream-100 dark:hover:bg-white/10 transition-colors"
                            >
                                {item.label}
                            </ScrollLink>
                        </li>
                    ))}
                    <li className="px-3 py-2">
                        <ScrollLink
                            to="contact"
                            spy={true}
                            smooth={true}
                            duration={500}
                            onClick={() => setMenu(false)}
                            className="group flex h-11 px-5 items-center justify-center gap-2 rounded-full bg-gradient-to-br from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white text-sm font-medium cursor-pointer shadow-md shadow-teal-500/25 transition-all duration-300"
                        >
                            Talk to us
                            <i className="mdi mdi-arrow-right transition-transform duration-300 group-hover:translate-x-1"></i>
                        </ScrollLink>
                    </li>
                </ul>
            </div>
        </header>
    )
}
