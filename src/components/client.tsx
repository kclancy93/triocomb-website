import React, { useEffect, useState } from 'react'
import { clientData } from '../data/data'

const TinySlider = React.lazy(() =>
    // @ts-ignore
    import("tiny-slider-react"), { ssr: false }
)
import '../../node_modules/tiny-slider/dist/tiny-slider.css'

interface ClientData {
    image: string;
    name: string;
    position: string;
    desc: string;
    rate: string[];
}

const settings = {
    container: '.tiny-three-item',
    controls: false,
    mouseDrag: true,
    loop: true,
    rewind: true,
    autoplay: true,
    autoplayButtonOutput: false,
    autoplayTimeout: 5000,
    navPosition: 'bottom',
    speed: 600,
    gutter: 24,
    responsive: {
        992: { items: 2 },
        767: { items: 2 },
        320: { items: 1 },
    },
}

function TestimonialCard({ item }: { item: ClientData }) {
    return (
        <div className="h-full bg-cream-50 dark:bg-slate-800 border border-cream-200 dark:border-gray-700 rounded-3xl p-8 flex flex-col">
            <i className="mdi mdi-format-quote-open mdi-36px text-teal-500/70 leading-none"></i>

            <p className="mt-2 flex-1 font-fraunces italic text-lg leading-[1.55] text-clay-700 dark:text-white">
                {item.desc.replace(/^"\s*|\s*"$/g, '').replace(/^"|"$/g, '')}
            </p>

            <div className="mt-6 flex items-center gap-4 pt-6 border-t border-cream-200 dark:border-gray-700">
                <img src={item.image} className="size-12 rounded-full object-cover" alt="" />
                <div className="flex-1">
                    <h6 className="font-medium text-clay-700 dark:text-white">{item.name}</h6>
                    <span className="text-sm text-clay-500 dark:text-white/60">{item.position}</span>
                </div>
                <ul className="list-none text-amber-400 text-sm flex">
                    {item.rate.map((el, i) => (
                        <li key={i + 'rate-item'}><i className={el}></i></li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default function Client() {
    const [mounted, setMounted] = useState(false)
    useEffect(() => setMounted(true), [])

    return (
        <section className="relative md:py-28 py-20 bg-cream-100 dark:bg-slate-800" id="review">
            <div className="container relative">
                <div className="grid grid-cols-1 pb-14 max-w-2xl mx-auto text-center">
                    <span className="inline-flex items-center justify-center gap-3">
                        <span className="inline-block w-6 h-px bg-teal-600"></span>
                        <span className="text-xs font-semibold tracking-[0.22em] uppercase text-teal-600">Testimonials</span>
                    </span>

                    <h2 className="font-fraunces font-medium text-3xl lg:text-5xl text-clay-700 dark:text-white leading-[1.15] tracking-tight mt-5">
                        Partnerships{' '}
                        <span className="italic font-normal text-teal-600">that last</span>.
                    </h2>

                    <p className="text-lg text-clay-500 dark:text-white/70 leading-[1.75] mt-5">
                        Our clients trust us to deliver engineers who meet expectations and often exceed them — through smooth collaboration, reliable results, and transparent communication.
                    </p>
                </div>

                <div className="grid grid-cols-1 mt-6">
                    {!mounted ? (
                        <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
                            {clientData.slice(0, 2).map((item, i) => (
                                <TestimonialCard key={i + 'static-client'} item={item} />
                            ))}
                        </div>
                    ) : (
                        <div className="tiny-three-item">
                            <TinySlider settings={settings}>
                                {clientData.map((item: ClientData, index: number) => (
                                    <div className="tiny-slide pb-4" key={index + 'client-item'}>
                                        <TestimonialCard item={item} />
                                    </div>
                                ))}
                            </TinySlider>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}
