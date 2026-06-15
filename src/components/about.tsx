import { Link } from 'gatsby'
import React from 'react'
import aboutImg from '../assets/images/about.jpg'
import CountUp from 'react-countup';

export default function About() {
  return (
        <section className="relative md:py-24 py-16">
            <div className="container relative">
                <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-6">
                    <div className="md:col-span-6">
                        <div className="lg:me-8">
                            <div className="relative">
                                <img src={aboutImg} className="rounded-full shadow-sm dark:shadow-gray-700" alt=""/>
                                <div className="absolute top-1/2 -translate-y-1/2 start-0 end-0 mx-auto size-56 flex justify-center items-center bg-white dark:bg-slate-900 rounded-full shadow-sm dark:shadow-gray-700">
                                    <div className="text-center">
                                        <span className="text-teal-500 text-2xl font-semibold mb-0 block"><CountUp className="font-libre-franklin counter-value text-6xl font-semibold" end={15}/>+</span>
                                        <span className="font-semibold block mt-2">Years <br/> Experience</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="md:col-span-6">
                        <div className="lg:ms-8">
                            <h6 className="text-teal-500 text-4xl font-semibold uppercase mb-2">Who Are We?</h6>
                            <h3 className="font-semibold text-2xl leading-normal mb-4">We're a talent agency that connects talents with clients who are facing unexpected personal or professional challenges.</h3>
                            <p className="text-slate-400 max-w-xl mb-6">We connect brilliant talents with real opportunities, and help them grow their careers. Tap into a world where you can build high-impact products, collaborate with forward-thinking companies, and grow your career anywhere. <br/> <br/> Secure meaningful, long-term roles, get competitive pay, sharpen your technical edge, and join a global community that's always evolving with you. No barriers, just pure potential-unlocked. Whether you're stepping in to keep projects on track, or leading innovations across web, mobile, or cloud - Comb makes it easy to connect, work, and succeed.</p>
                            <Link to="" className="h-10 px-6 tracking-wide inline-flex items-center justify-center font-medium rounded-md bg-teal-500 text-white">Read More <i className="mdi mdi-chevron-right align-middle ms-0.5"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}
