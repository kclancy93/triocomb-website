import React from 'react'
import { offerData } from '../data/data'

interface OfferData {
    image: string;
    title: string;
    desc: string;
}

export default function Offer() {
    return (
        <section className="relative md:py-28 py-20 bg-white dark:bg-slate-900" id="offer">
            <div className="container relative">
                <div className="grid grid-cols-1 pb-12 max-w-2xl mx-auto text-center">
                    <span className="inline-flex items-center justify-center text-xs font-semibold tracking-[0.18em] uppercase text-teal-600">
                        <span className="inline-block w-6 h-px bg-teal-600 me-3"></span>
                        What we offer
                        <span className="inline-block w-6 h-px bg-teal-600 ms-3"></span>
                    </span>

                    <h2 className="font-fraunces font-medium text-3xl lg:text-5xl text-clay-700 dark:text-white leading-[1.15] tracking-tight mt-5">
                        A collaborative environment where everyone scales.
                    </h2>

                    <p className="text-lg text-clay-500 dark:text-white/70 leading-[1.75] mt-5">
                        We foster trust, flexibility, and opportunity — so global engineers can thrive and clients can grow with confidence.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 mt-6 gap-8 lg:gap-10">
                    {offerData.map((item: OfferData, index: number) => (
                        <article className="group" key={index + 'offer-item'}>
                            <div className="relative overflow-hidden rounded-3xl bg-cream-100">
                                <img
                                    src={item.image}
                                    className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                                    alt=""
                                />
                                <div className="absolute inset-0 bg-teal-500/0 group-hover:bg-teal-500/10 transition-colors duration-500" />
                            </div>

                            <div className="mt-6">
                                <h3 className="font-fraunces text-2xl font-medium text-clay-700 dark:text-white">
                                    {item.title}
                                </h3>
                                <p className="text-clay-500 dark:text-white/70 leading-relaxed mt-3 max-w-prose">
                                    {item.desc}
                                </p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}
