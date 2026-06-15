import React from 'react'
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

export default function Client() {
    const settings = {
        container: '.tiny-three-item',
        controls: false,
        mouseDrag: true,
        loop: true,
        rewind: true,
        autoplay: true,
        autoplayButtonOutput: false,
        autoplayTimeout: 3000,
        navPosition: "bottom",
        speed: 400,
        gutter: 12,
        responsive: {
            992: {
                items: 3
            },

            767: {
                items: 2
            },

            320: {
                items: 1
            },
        },
    };
    if (typeof window !== 'undefined') {
        return (
            <section className="relative md:py-24 py-16 bg-slate-50" id="review">
                <div className="container relative">
                    <div className="grid grid-cols-1 pb-6 text-center">
                        <h3 className="font-semibold text-2xl leading-normal mb-4">What Our Users Say</h3>
                        <p className="text-slate-400 max-w-xl mx-auto">Our clients trust us to deliver talented engineers who not only meet expectations—but often exceed them. Through smooth collaboration, reliable results, and transparent communication, we’ve built partnerships that last.</p>
                    </div>

                    <div className="grid grid-cols-1 mt-6">
                        <div className="tiny-three-item">
                            <TinySlider settings={settings}>
                                {clientData.map((item: ClientData, index: number) => (
                                    <div className="tiny-slide text-center" key={index + 'client-item'}>
                                        <div className="cursor-e-resize">
                                            <div className="h-[400px] content relative rounded shadow-sm dark:shadow-gray-700 m-2 p-6 bg-white dark:bg-slate-900 before:content-[''] before:absolute before:start-1/2 before:-bottom-[4px] before:box-border before:border-8 before:rotate-[45deg] before:border-t-transparent before:border-e-white dark:before:border-e-slate-900 before:border-b-white dark:before:border-b-slate-900 before:border-s-transparent before:shadow-testi dark:before:shadow-gray-700 before:origin-top-left">
                                                <i className="mdi mdi-format-quote-open mdi-48px text-teal-500"></i>
                                                <p className="text-slate-400 min-h-[245px]">{item.desc}</p>
                                                <ul className="list-none mb-0 text-amber-400 mt-3">
                                                    {item.rate.map((el, index: number) => (
                                                        <li className="inline" key={index + 'rate-item'}><i className={el}></i></li>
                                                    ))}
                                                </ul>
                                            </div>

                                            <div className="text-center mt-5">
                                                <img src={item.image} className="size-14 rounded-full shadow-md dark:shadow-gray-700 mx-auto" alt="" />
                                                <h6 className="mt-2 font-semibold">{item.name}</h6>
                                                <span className="text-slate-400 text-sm">{item.position}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </TinySlider>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
