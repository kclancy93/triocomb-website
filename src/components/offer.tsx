import React from 'react'
import { offerData } from '../data/data'
import { Link } from 'gatsby'

interface OfferData{
    image: string;
    title: string;
    desc: string;
}

export default function Offer() {
  return (
    <section className="relative md:py-24 py-16" id="offer">
        <div className="container relative">
            <div className="grid grid-cols-1 pb-6 text-center">
                <h3 className="font-semibold text-2xl leading-normal mb-4">What We Offer</h3>
                <p className="text-slate-400 max-w-xl mx-auto">We offer a collaborative environment where global talents can thrive and clients can scale with confidence. By fostering trust, flexibility, and opportunity, we create impactful partnerships that deliver real results-for everyone involved.</p>
            </div>

            <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 mt-6 gap-6">
                {offerData.map((item:OfferData, index:number)=>( 
                    <div className="group relative overflow-hidden" key={index+'offer-item'}>
                        <div className="relative overflow-hidden rounded-md shadow-sm dark:shadow-gray-800">
                            <img src={item.image} className="group-hover:scale-110 duration-500 min-h-[365px] max-h-[450px] w-full object-cover" alt=""/>
                        </div>

                        <div className="mt-6">
                            <Link to="" className="title text-lg font-semibold hover:text-teal-500 duration-500 ease-in-out">{item.title}</Link>
                            <p className="text-slate-400 mt-2">{item.desc}</p>

                            <div className="mt-3">
                                <Link to="" className="text-teal-500">Read More <i className="mdi mdi-chevron-right align-middle"></i></Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}
