import React, { useState } from 'react'
import blog1 from '../assets/images/blog/01.png'
import blog2 from '../assets/images/blog/02.png'
import blog3 from '../assets/images/blog/03.jpg'

const missionTabs = [
    {
        id: 1,
        label: 'Empower communities & professionals',
        title: 'Empowering communities and professionals',
        body: "Our platform opens U.S. job markets to engineers everywhere, giving them career continuity through life's uncertainties — and giving clients a steady, trusted bench when they need it most.",
        image: blog1,
    },
    {
        id: 2,
        label: 'Support global engineers',
        title: 'Support global engineers through opportunity',
        body: "We help engineers worldwide land roles that grow their craft, not just their resume. Real projects, real teams, real impact — across web, mobile, and cloud.",
        image: blog2,
    },
    {
        id: 3,
        label: 'Equal work, equal pay',
        title: 'Equal work, equal pay — anywhere',
        body: "We pay global engineers at U.S. rates, based on experience — not location. Talent isn't bound by geography, and compensation shouldn't be either.",
        image: blog3,
    },
]

export default function Mission() {
    const [active, setActive] = useState<number>(1)
    const current = missionTabs.find(t => t.id === active) ?? missionTabs[0]

    return (
        <section className="relative md:py-28 py-20 bg-white dark:bg-slate-900" id="mission">
            <div className="container relative">
                <div className="grid grid-cols-1 pb-14 max-w-2xl mx-auto text-center">
                    <span className="inline-flex items-center justify-center gap-3">
                        <span className="font-fraunces italic text-base text-clay-500 dark:text-white/60">No. 03</span>
                        <span className="inline-block w-6 h-px bg-teal-600"></span>
                        <span className="text-xs font-semibold tracking-[0.22em] uppercase text-teal-600">Our mission</span>
                    </span>

                    <h2 className="font-fraunces font-medium text-3xl lg:text-5xl text-clay-700 dark:text-white leading-[1.15] tracking-tight mt-5">
                        Fair, flexible,{' '}
                        <span className="italic font-normal text-teal-600">supportive</span>{' '}
                        — wherever the work happens.
                    </h2>

                    <p className="text-lg text-clay-500 dark:text-white/70 leading-[1.75] mt-5">
                        Comb connects international engineers with U.S. professionals navigating financial hardship or life disruptions — building meaningful work with equal compensation, anywhere in the world.
                    </p>
                </div>

                <div className="grid md:grid-cols-12 grid-cols-1 mt-6 gap-10">
                    <div className="lg:col-span-4 md:col-span-5">
                        <div className="sticky top-28">
                            <ul role="tablist" className="space-y-1">
                                {missionTabs.map(tab => {
                                    const isActive = tab.id === active
                                    return (
                                        <li key={tab.id} role="presentation">
                                            <button
                                                type="button"
                                                role="tab"
                                                aria-selected={isActive}
                                                onClick={() => setActive(tab.id)}
                                                className={`w-full text-start py-4 ps-5 pe-4 border-s-2 transition-colors ${
                                                    isActive
                                                        ? 'border-teal-500 text-clay-700 dark:text-white'
                                                        : 'border-cream-200 dark:border-gray-700 text-clay-500 dark:text-white/60 hover:text-clay-700 dark:hover:text-white'
                                                }`}
                                            >
                                                <span className="font-fraunces text-xl font-medium block leading-snug">
                                                    {tab.label}
                                                </span>
                                            </button>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>

                    <div className="lg:col-span-8 md:col-span-7">
                        <div className="bg-cream-100 dark:bg-slate-800 rounded-3xl p-6 md:p-10">
                            <img
                                src={current.image}
                                className="rounded-2xl w-full h-auto aspect-[16/10] object-cover"
                                alt=""
                            />
                            <div className="mt-8">
                                <h3 className="font-fraunces text-2xl md:text-3xl font-medium text-clay-700 dark:text-white leading-snug">
                                    {current.title}
                                </h3>
                                <p className="mt-4 text-lg text-clay-500 dark:text-white/70 leading-[1.75]">
                                    {current.body}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
