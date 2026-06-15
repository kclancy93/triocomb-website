import React, { useState } from 'react'
import blog1 from '../assets/images/blog/01.png'
import blog2 from '../assets/images/blog/02.png'
import blog3 from '../assets/images/blog/03.jpg'
import { Link } from 'gatsby'

export default function Mission() {
  let [activeMission, setActiveMission] = useState<number>(1)
  return (
    <section className="realtive md:py-24 py-16">
      <div className="container relative">
        <div className="grid grid-cols-1 pb-6 text-center">
          <h3 className="font-semibold text-2xl leading-normal mb-4">Our Company Mission</h3>
          <p className="text-slate-400 max-w-xl mx-auto">Comb Inc. connects talented international engineers with U.S. professionals facing financial hardship or life disruptions. Our mission is to create fair, flexible, and supportive career opportunities for both groups, ensuring meaningful work and equal compensation—wherever they are in the world.</p>                </div>

        <div className="grid md:grid-cols-12 grid-cols-1 mt-6 gap-6">
          <div className="lg:col-span-3 md:col-span-5">
            <div className="sticky top-20">
              <ul className="flex-column p-6 bg-white dark:bg-slate-900 shadow-sm dark:shadow-gray-700 rounded-md" id="myTab" data-tabs-toggle="#myTabContent" role="tablist">
                <li role="presentation">
                  <button onClick={() => setActiveMission(1)} className={`px-4 py-2 text-start text-base font-medium rounded-md w-full hover:text-teal-500 duration-500 ${activeMission === 1 ? 'text-white bg-teal-500 hover:text-white' : ''}`}>
                    <span className="text-lg mt-2 block">Empowering Communities and Professionals</span>
                  </button>
                </li>
                <li role="presentation">
                  <button onClick={() => setActiveMission(2)} className={`px-4 py-2 my-6 text-start text-base font-medium rounded-md w-full hover:text-teal-500 duration-500 ${activeMission === 2 ? 'text-white bg-teal-500 hover:text-white' : ''}`}>
                    <span className="text-lg mt-2 block">Support Global Engineers Through Opportunity</span>
                  </button>
                </li>
                <li role="presentation">
                  <button onClick={() => setActiveMission(3)} className={`px-4 py-2 text-start text-base font-medium rounded-md w-full hover:text-teal-500 duration-500 ${activeMission === 3 ? 'text-white bg-teal-500 hover:text-white' : ''}`}>
                    <span className="text-lg mt-2 block">Equal Work, Equal Pay Across The World</span>
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div className="lg:col-span-8 md:col-span-7">
            <div id="myTabContent" className="p-6 bg-white dark:bg-slate-900 shadow-sm dark:shadow-gray-700 rounded-md">
              {activeMission === 1 &&
                <div className="">
                  <img src={blog1} className="shadow-sm dark:shadow-gray-700 rounded-md w-full min-h-500px max-h-500px" alt="" />
                  <div className="mt-6">
                    <h5 className="text-lg font-medium">Empowering Communities and Professionals</h5>
                    <p className="text-slate-400 mt-4">Our platform enables engineers worldwide to access U.S. job markets, offering career continuity during life's uncertainties.</p>
                    <div className="mt-4">
                      <Link to="" className="text-teal-500">Read More <i className="mdi mdi-chevron-right align-middle"></i></Link>
                    </div>
                  </div>
                </div>
              }
              {
                activeMission === 2 &&
                <div>
                  <img src={blog2} className="shadow-sm dark:shadow-gray-700 rounded-md w-full min-h-500px max-h-500px" alt="" />
                  <div className="mt-6">
                    <h5 className="text-lg font-medium">Support Global Engineers Through Opportunity</h5>
                    <p className="text-slate-400 mt-4">We enables engineers worldwide to access U.S. job markets, offering career continuity during life's uncertainties.</p>
                    <div className="mt-4">
                      <Link to="" className="text-teal-500">Read More <i className="mdi mdi-chevron-right align-middle"></i></Link>
                    </div>
                  </div>
                </div>
              }
              {
                activeMission === 3 &&
                <div>
                  <img src={blog3} className="shadow-sm dark:shadow-gray-700 rounded-md w-full min-h-500px max-h-500px" alt="" />
                  <div className="mt-6">
                    <h5 className="text-lg font-medium">Equal Work, Equal Pay Across The World</h5>
                    <p className="text-slate-400 mt-4">We ensure global engineers are fairly compensated at U.S. standards, based on experience—not location.</p>
                    <div className="mt-4">
                      <Link to="" className="text-teal-500">Read More <i className="mdi mdi-chevron-right align-middle"></i></Link>
                    </div>
                  </div>
                </div>
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
