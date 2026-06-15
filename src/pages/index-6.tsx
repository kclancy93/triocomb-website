import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import NavbarLight from '../components/navbar-light'
import About from '../components/about'
import Services from '../components/services'
import Tab from '../components/mission'
import Cta from '../components/cta'
import Client from '../components/client'
import Pricing from '../components/pricing'
import Offer from '../components/offer'
import Contact from '../components/contact'
import Footer from '../components/footer'

import aboutImg from '../assets/images/home.png'
import favIcon from '../assets/images/favicon.png'

export default function IndexSix() {
  return (
    <Layout>
      <NavbarLight/>
        <section className="relative md:h-screen md:py-0 py-36 items-center overflow-hidden bg-gradient-to-t to-teal-600 via-teal-600/50 from-transparent" id="home">
          <div className="container relative">
              <div className="grid grid-cols-1 md:mt-48 mt-10 text-center">
                  <h4 className="font-bold lg:leading-normal leading-normal tracking-wide text-4xl lg:text-5xl capitalize text-white mb-5">Get powerful <br/> solutions for your business</h4>
                  <p className="text-white/70 text-lg max-w-xl mx-auto">This is just a simple text made for this unique and awesome template, you can replace it with any text.</p>

                  <div className="subcribe-form mt-6 mb-3">
                      <form className="relative max-w-xl mx-auto">
                          <input type="email" id="emailid" name="email" className="py-4 pe-40 ps-6 w-full h-[50px] outline-none text-slate-900 dark:text-white rounded-full bg-white/60 dark:bg-slate-900/60 shadow-sm dark:shadow-gray-800" placeholder="yourname@domain.com"/>
                          <button type="submit" className="px-6 tracking-wide inline-flex items-center justify-center font-medium absolute top-[2px] end-[3px] h-[46px] bg-teal-500 text-white rounded-full">Subscribe Now</button>
                      </form>
                  </div>

                  <span className="text-white font-medium">Looking for help? <Link to="" className="text-white underline">Get in touch with us</Link></span>

                  <div className="overflow-hidden mt-8">
                      <img src={aboutImg} alt=""/>
                  </div>
              </div>
          </div>
        </section>

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