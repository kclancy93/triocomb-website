import { Link as ScrollLink } from 'react-scroll'
import React from 'react'
import aboutImg from '../assets/images/about.jpg'
import CountUp from 'react-countup'

export default function About() {
    return (
        <section className="relative md:py-28 py-20 bg-white dark:bg-slate-900" id="about">
            <div className="container relative">
                <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-12">
                    <div className="md:col-span-6">
                        <div className="relative lg:me-12">
                            <img
                                src={aboutImg}
                                className="rounded-full w-full h-auto shadow-md"
                                alt="Comb team collaborating"
                            />
                            <div className="absolute top-1/2 -translate-y-1/2 start-0 end-0 mx-auto size-56 flex items-center justify-center bg-cream-50 dark:bg-slate-800 rounded-full shadow-md">
                                <div className="text-center">
                                    <span className="block text-teal-600 leading-none">
                                        <CountUp
                                            className="font-fraunces font-medium text-6xl"
                                            end={15}
                                        />
                                        <span className="font-fraunces font-medium text-6xl">+</span>
                                    </span>
                                    <span className="block mt-2 text-sm font-medium text-clay-500 dark:text-white/70 leading-snug">
                                        Years building<br />global teams
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="md:col-span-6">
                        <div className="lg:ms-6">
                            <span className="inline-flex items-center text-xs font-semibold tracking-[0.18em] uppercase text-teal-600">
                                <span className="inline-block w-6 h-px bg-teal-600 me-3"></span>
                                Who we are
                            </span>

                            <h2 className="font-fraunces font-medium text-3xl lg:text-5xl text-clay-700 dark:text-white leading-[1.15] tracking-tight mt-5">
                                A talent agency for the moments work gets complicated.
                            </h2>

                            <p className="text-lg text-clay-500 dark:text-white/70 leading-[1.75] mt-6 max-w-[58ch]">
                                We connect brilliant engineers with companies that need steady hands during pivots, transitions, and growth. Tap into a global network where you can ship high-impact products, collaborate with forward-thinking teams, and grow a career anywhere.
                            </p>

                            <p className="text-lg text-clay-500 dark:text-white/70 leading-[1.75] mt-4 max-w-[58ch]">
                                Whether you're stepping in to keep a project on track or leading a new build across web, mobile, or cloud — Comb makes it easy to connect, work, and succeed.
                            </p>

                            <div className="mt-8 flex flex-wrap items-center gap-4">
                                <ScrollLink
                                    to="services"
                                    smooth
                                    duration={500}
                                    className="h-11 px-6 inline-flex items-center justify-center rounded-full bg-teal-500 hover:bg-teal-600 text-white text-sm font-medium cursor-pointer transition-colors"
                                >
                                    See what we do
                                </ScrollLink>
                                <ScrollLink
                                    to="contact"
                                    smooth
                                    duration={500}
                                    className="text-clay-700 dark:text-white text-sm font-medium hover:text-teal-600 cursor-pointer transition-colors inline-flex items-center"
                                >
                                    Get in touch
                                    <i className="mdi mdi-arrow-right ms-1.5"></i>
                                </ScrollLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
