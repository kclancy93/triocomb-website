import React from 'react'

import about1 from '../assets/images/ab1.jpg'
import about2 from '../assets/images/about2.jpg'
import about3 from '../assets/images/ab3.jpg'
import about4 from '../assets/images/ab4.jpg'
import about5 from '../assets/images/ab5.jpg'
import about6 from '../assets/images/ab6.jpg'
import about7 from '../assets/images/ab7.jpg'
import favIcon from '../assets/images/favicon.png'

import NavbarDark from '../components/navbar-dark'
import Layout from '../components/layout'
import Partner from '../components/partner'
import About from '../components/about'
import Services from '../components/services'
import Tab from '../components/mission'
import Cta from '../components/cta'
import Client from '../components/client'
import Pricing from '../components/pricing'
import Offer from '../components/offer'
import Contact from '../components/contact'
import Footer from '../components/footer'

export default function IndexFour() {
  return (
    <Layout>
      <NavbarDark/>
        <section className="relative md:pt-44 py-36 bg-slate-50 dark:bg-slate-800" id="home">
          <div className="container relative">
              <div className="grid grid-cols-1 justify-center text-center">
                  <div className="">
                      <h1 className="font-bold lg:leading-normal leading-normal tracking-wide text-4xl lg:text-5xl capitalize mb-5">Grow Sales with Our <br/> Strategy First Approach</h1>
                      <p className="text-slate-400 text-lg max-w-xl mx-auto">This is just a simple text made for this unique and awesome template, you can replace it with any text.</p>
                  
                      <div className="subcribe-form mt-6 mb-3">
                          <form className="relative max-w-xl mx-auto">
                              <input type="email" id="emailid" name="email" className="py-4 pe-40 ps-6 w-full h-[50px] outline-none text-slate-900 dark:text-white rounded-full bg-white/60 dark:bg-slate-900/60 shadow-sm dark:shadow-gray-800" placeholder="yourname@domain.com"/>
                              <button type="submit" className="px-6 tracking-wide inline-flex items-center justify-center font-medium absolute top-[2px] end-[3px] h-[46px] bg-teal-500 text-white rounded-full">Subscribe Now</button>
                          </form>
                      </div>

                      <span className="font-medium">Looking for help? <a href="" className="text-teal-500">Get in touch with us</a></span>
                  </div>

                  <div className="grid lg:grid-cols-12 md:grid-cols-3 grid-cols-1 lg:gap-4 gap-2 mx-auto mt-8 items-center">
                      <div className="lg:col-span-4">
                          <div className="grid grid-cols-2 gap-4 items-center">
                              <div className="">
                                  <div className="grid grid-cols-1 gap-4">
                                      <img src={about1} className="shadow-sm rounded-lg" alt=""/>
                                  </div>
                              </div>
  
                              <div className="">
                                  <div className="grid grid-cols-1 gap-4">
                                      <img src={about3} className="shadow-sm rounded-lg" alt=""/>
                                      <img src={about4} className="shadow-sm rounded-lg" alt=""/>
                                  </div>
                              </div>
                          </div>
                      </div>

                      <div className="lg:col-span-4">
                          <img src={about7} className="shadow-sm rounded-lg" alt=""/>
                      </div>

                      <div className="lg:col-span-4">
                          <div className="grid grid-cols-2 gap-4 items-center">
                              <div className="">
                                  <div className="grid grid-cols-1 gap-4">
                                      <img src={about6} className="shadow-sm rounded-lg" alt=""/>
                                      <img src={about5} className="shadow-sm rounded-lg" alt=""/>
                                  </div>
                              </div>
  
                              <div className="">
                                  <div className="grid grid-cols-1 gap-4">
                                      <img src={about2} className="shadow-sm rounded-lg" alt=""/>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
      <Partner/>
       <About/>
      <Services/>
      <Tab/>
      <Cta/>
      <Client/>
      <Offer/>
      <Contact/>
      <Footer/>
    </Layout>
  )
}

export function Head(){
    return(
      <>
        <html lang="en" className="light scroll-smooth" dir="ltr"/>
        <body className="font-libre-franklin text-slate-900 dark:text-white dark:bg-slate-900"/>
        <title>Upcover - Gatsby Business Landing Page Template</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/7.4.47/css/materialdesignicons.min.css" integrity="sha512-/k658G6UsCvbkGRB3vPXpsPHgWeduJwiWGPCGS14IQw3xpr63AEMdA8nMYG2gmYkXitQxDTn6iiK/2fD4T87qA==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
        <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.8/css/line.css"></link>
        <link href={favIcon} rel="shortcut icon"></link>
      </>
    )
  }
