import React, { useState } from 'react'
import { Link } from 'gatsby';

import Layout from '../components/layout'
import NavbarDark from '../components/navbar-dark'
import About from '../components/about';
import Services from '../components/services';
import Tab from '../components/mission';
import Cta from '../components/cta';
import Client from '../components/client';
import Pricing from '../components/pricing';
import Offer from '../components/offer';
import Contact from '../components/contact';
import Footer from '../components/footer';

import CountUp from 'react-countup';

import { FiMonitor } from 'react-icons/fi';
import ModalVideo from 'react-modal-video';
import '../../node_modules/react-modal-video/css/modal-video.css'

import aboutImg from '../assets/images/about2.jpg'
import favIcon from '../assets/images/favicon.png'

export default function IndexThree() {
  const [isOpen, setOpen] = useState(false);
  return (
    <Layout>
      <NavbarDark/>

      <section className="relative flex items-center md:h-screen py-36 bg-[url('../../assets/images/bg/2.png')] bg-no-repeat bg-center bg-cover" id="home">
        <div className="container relative">
            <div className="grid lg:grid-cols-12 md:grid-cols-2 grid-cols-1 items-center mt-6 gap-6 relative">
                <div className="lg:col-span-7 md:me-6">
                    <h4 className="font-semibold lg:leading-normal leading-normal tracking-wide text-4xl lg:text-5xl mb-5">Revolutionizing Your <span className="text-teal-500 font-bold">Business</span> with Upcover</h4>
                    <p className="text-slate-400 text-lg max-w-xl">This is just a simple text made for this unique and awesome template, you can replace it with any text.</p>
                
                    <div className="relative mt-6 space-x-1">
                        <Link to="" className="h-10 px-6 tracking-wide inline-flex items-center justify-center font-medium rounded-md bg-teal-500 text-white">Get Started</Link>
                        <Link to="#!" onClick={() => setOpen(true)} className="size-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center bg-teal-500 text-white rounded-full lightbox"><i className="mdi mdi-play text-xl align-middle"></i></Link><small className="text-sm font-medium uppercase align-middle ms-2">Watch Now</small>
                    </div>
                </div>

                <div className="lg:col-span-5">
                    <div className="relative">
                        <img src={aboutImg} className="mx-auto rounded-[150px] rounded-br-2xl shadow-sm dark:shadow-gray-700 w-[90%]" alt=""/>

                        <div className="overflow-hidden after:content-[''] after:absolute after:h-10 after:w-10 after:bg-teal-500/20 after:top-0 after:start-0 after:-z-1 after:rounded-lg after:animate-[spin_10s_linear_infinite]"></div>
                    
                        <div className="absolute flex justify-between items-center bottom-16 md:-start-10 -start-5 p-4 rounded-lg shadow-md dark:shadow-gray-800 bg-white dark:bg-slate-900 w-60 m-3">
                            <div className="flex items-center">
                                <div className="flex items-center justify-center h-[65px] min-w-[65px] bg-teal-500/5 text-teal-500 text-center rounded-full me-3">
                                    <FiMonitor className="h-6 w-6"/>
                                </div>
                                <div className="flex-1">
                                    <span className="text-slate-400">Visitor</span>
                                    <p className="text-xl font-bold"><CountUp className="counter-value" end={4589}/></p>
                                </div>
                            </div>

                            <span className="text-red-600"><i className="uil uil-chart-down"></i> 0.5%</span>
                        </div>

                        <div className="absolute top-16 md:-end-10 -end-5 p-4 rounded-lg shadow-md dark:shadow-gray-800 bg-white dark:bg-slate-900 w-48 m-3">
                            <h5 className="text-lg font-semibold mb-3">Manage Software</h5>
                            <div className="flex justify-between mt-3 mb-2">
                                <span className="text-slate-400">Progress</span>
                                <span className="text-slate-400">84%</span>
                            </div>
                            <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-[6px]">
                                <div className="bg-teal-500 h-[6px] rounded-full" style={{width:'84%'}}></div>
                            </div>
                        </div>
                    </div>
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
      <ModalVideo
          channel="youtube"
          youtube={{ mute: 0, autoplay: 0 }}
          isOpen={isOpen}
          videoId="S_CGed6E610"
          onClose={() => setOpen(false)} 
      />
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
