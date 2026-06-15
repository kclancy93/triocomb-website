import React from 'react'
import { partnerData } from '../data/data'

export default function Partner() {
  return (
    <section className="py-6 border-b border-gray-100 dark:border-gray-700">
    <div className="container relative">
        <div className="grid md:grid-cols-6 grid-cols-2 justify-center gap-[30px]">
            {partnerData.map((item)=>( 
                <div className="mx-auto py-4">
                    <img src={item} className="h-6" alt=""/>
                </div>
            ))}
        </div>
    </div>
</section>
  )
}
