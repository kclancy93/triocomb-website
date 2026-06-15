import React from 'react'
import { servicesData } from '../data/data'

export default function Services() {
    return (
        <section className="relative md:py-28 py-20 bg-cream-50 dark:bg-slate-800" id="services">
            <div className="container relative">
                <div className="grid grid-cols-1 pb-12 max-w-2xl mx-auto text-center">
                    <span className="inline-flex items-center justify-center text-xs font-semibold tracking-[0.18em] uppercase text-teal-600">
                        <span className="inline-block w-6 h-px bg-teal-600 me-3"></span>
                        What we do
                        <span className="inline-block w-6 h-px bg-teal-600 ms-3"></span>
                    </span>

                    <h2 className="font-fraunces font-medium text-3xl lg:text-5xl text-clay-700 dark:text-white leading-[1.15] tracking-tight mt-5">
                        Services that hold the work together.
                    </h2>

                    <p className="text-lg text-clay-500 dark:text-white/70 leading-[1.75] mt-5">
                        Smooth collaboration, stress-free workflows, successful outcomes — for both the engineers we represent and the clients they work with.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
                    {servicesData.map((item, index) => {
                        const Icon = item.icon
                        return (
                            <div
                                key={index + 'service-item'}
                                className="group relative bg-white dark:bg-slate-900 border border-cream-200 dark:border-gray-700 rounded-3xl p-8 lg:p-10 transition-shadow hover:shadow-md"
                            >
                                <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-teal-500/10 text-teal-600 dark:text-teal-400 group-hover:bg-teal-500/15 transition-colors">
                                    <Icon className="size-6"></Icon>
                                </div>

                                <h3 className="mt-6 font-fraunces text-2xl font-medium text-clay-700 dark:text-white">
                                    {item.title}
                                </h3>

                                <p className="mt-3 text-clay-500 dark:text-white/70 leading-relaxed max-w-md">
                                    {item.desc}
                                </p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
