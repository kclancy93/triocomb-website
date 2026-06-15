import { Link } from 'gatsby'
import React from 'react'
import logo from '../assets/images/logo-light.png'
import { FiDribbble, FiPhoneCall, FiInstagram, FiLinkedin, FiMail, FiShoppingCart, FiTwitter } from 'react-icons/fi'

export default function Footer() {
    return (
        <footer className="footer bg-slate-800 dark:bg-gray-900 relative text-gray-200 dark:text-gray-200">
            <div className="py-[30px] px-0 border-t border-slate-800">
                <div className="container relative text-center">
                    <div className="grid lg:grid-cols-14 md:grid-cols-3 grid-cols-1 items-center">
                        <div className="lg:col-span-2 md:text-start text-center">
                            <Link to="#" className="text-[22px] focus:outline-none">
                                <img src={logo} className="mx-auto md:me-auto md:ms-0" alt="" />
                            </Link>
                        </div>

                        <div className="lg:col-span-6 text-center mt-6 md:mt-0">
                            <p className="mb-0">© {new Date().getFullYear()} Comb Inc. Design & Develop with <i className="mdi mdi-heart text-red-600"></i> by <a href="#" target="_blank" className="text-reset">Comb Devs</a>.</p>
                        </div>

                        <div className="subcribe-form lg:col-span-5">
                            <form className="relative max-w-xl mx-auto">
                                <input type="email" id="emailid" name="email" className="py-4 pe-40 ps-6 w-full h-[50px] outline-none text-white dark:text-white rounded-full bg-white/[0.05] dark:bg-white/[0.05] dark:shadow-gray-800 border border-white/50" placeholder="Email..." />
                                <button type="submit" className="px-6 tracking-wide inline-flex items-center justify-center font-medium absolute top-[2px] end-[3px] h-[46px] bg-teal-500 text-white rounded-full border border-white">Subscribe Now</button>
                            </form>
                        </div>

                        <ul className="lg:col-span-1 list-none md:text-end text-center mt-6 md:mt-0">
                            <li className="inline mx-[2px]"><a href="tel:+15133995139" target="_blank" className="size-8 inline-flex justify-center items-center border border-gray-700 dark:border-gray-800 rounded-md hover:border-teal-500 dark:hover:border-teal-500 hover:bg-teal-500 dark:hover:bg-teal-500"><FiPhoneCall className="size-4 align-middle" title="phone" /></a></li>
                            <li className="inline mx-[2px]"><a href="mailto:support@triocomb.com" className="size-8 inline-flex justify-center items-center border border-gray-700 dark:border-gray-800 rounded-md hover:border-teal-500 dark:hover:border-teal-500 hover:bg-teal-500 dark:hover:bg-teal-500"><FiMail className="size-4 align-middle" title="email"></FiMail></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}
