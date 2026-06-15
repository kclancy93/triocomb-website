import React, { useCallback, useEffect, useState } from 'react'
import logoDark from '../assets/images/logo-dark.png'
import logoLight from '../assets/images/logo-light.png'
import { Link } from 'gatsby'
import { Link as Link1 } from 'react-scroll'

export default function NavbarLight() {
    const [scroll, setScroll] = useState<boolean>(false)
    const [menu, setMenu] = useState<boolean>(false)

    const handleScroll = useCallback(() => {
        if (typeof window !== 'undefined') {
            setScroll(window.scrollY > 50)
        }
    }, [])

    useEffect(() => {
        window.scrollTo(0, 0)
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', handleScroll)
            return () => {
                window.removeEventListener('scroll', handleScroll)
            }
        }
    }, [handleScroll])

    const navItems = [
        { to: 'home', label: 'Home' },
        { to: 'about', label: 'About' },
        { to: 'services', label: 'Services' },
        { to: 'mission', label: 'Mission' },
        { to: 'review', label: 'Reviews' },
    ]

    return (
        <nav className={`navbar ${scroll ? 'is-sticky' : ''}`} id="navbar">
            <div className="container relative flex flex-wrap items-center justify-between">
                <Link className="navbar-brand md:me-8" to="/">
                    <img src={logoLight} className="inline-block dark:hidden" width={140} alt="Comb" />
                    <img src={logoDark} className="hidden dark:inline-block" width={140} alt="Comb" />
                </Link>

                <div className="nav-icons flex items-center lg_992:order-2 ms-auto">
                    <Link1
                        to="contact"
                        spy={true}
                        smooth={true}
                        duration={500}
                        className="hidden lg_992:inline-flex h-10 px-5 items-center justify-center rounded-full bg-clay-900 hover:bg-teal-500 text-white text-sm font-medium cursor-pointer transition-colors"
                    >
                        Talk to us
                    </Link1>
                    <button
                        onClick={(e) => { e.preventDefault(); setMenu(!menu) }}
                        data-collapse="menu-collapse"
                        type="button"
                        className="collapse-btn inline-flex items-center ms-3 text-clay-700 dark:text-white lg_992:hidden"
                        aria-controls="menu-collapse"
                        aria-expanded={menu}
                    >
                        <span className="sr-only">Navigation Menu</span>
                        <i className="mdi mdi-menu text-[24px]"></i>
                    </button>
                </div>

                <div className={`navigation lg_992:order-1 lg_992:flex !mx-auto ${menu ? '' : 'hidden'}`} id="menu-collapse">
                    <ul className="navbar-nav nav-light sidebar-nav" id="navbar-navlist">
                        {navItems.map(item => (
                            <li key={item.to} className="nav-item">
                                <Link1
                                    className="nav-link cursor-pointer"
                                    activeClass="active"
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                    to={item.to}
                                >
                                    {item.label}
                                </Link1>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    )
}
