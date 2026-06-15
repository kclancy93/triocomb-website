import React, { useState } from 'react'
import { Link } from 'gatsby';

import Layout from '../components/layout'
import NavbarLight from '../components/navbar-light'
import About from '../components/about';
import Services from '../components/services';
import Tab from '../components/mission';
import Cta from '../components/cta';
import Client from '../components/client';
import Pricing from '../components/pricing';
import Offer from '../components/offer';
import Contact from '../components/contact';
import Footer from '../components/footer';

import favIcon from '../assets/images/favicon.png'

import ModalVideo from 'react-modal-video';
import '../../node_modules/react-modal-video/css/modal-video.css'

export default function IndexTwo() {
  const [isOpen, setOpen] = useState(false);
  return (
    <Layout>
      <NavbarLight/>

      <section className="relative table w-full py-36 lg:py-64 overflow-hidden" id="home">
          <div className="absolute inset-0 overflow-hidden">
              <div className="absolute image-wrap -top-[350px] -bottom-[350px] -start-[100px] -end-[100px] min-w-full w-auto min-h-full h-auto overflow-hidden m-auto bg-[url('../../assets/images/bg/1.jpg')] bg-no-repeat bg-center bg-cover"></div>
          </div>
          <div className="absolute inset-0 bg-slate-900/70"></div>

          <div className="container relative">
              <div className="grid grid-cols-1 text-center">
                  <div className="text-center">
                      <Link to="#!" onClick={() => setOpen(true)} className="lightbox size-20 rounded-full shadow-lg dark:shadow-gray-700 inline-flex items-center justify-center bg-white dark:bg-slate-900 text-teal-500 dark:text-white">
                          <i className="mdi mdi-play inline-flex items-center justify-center text-2xl"></i>
                      </Link>
                  </div>

                  <h4 className="text-white font-semibold lg:leading-normal leading-normal tracking-wide text-4xl lg:text-5xl my-5">We Collaboration Easy & Fast</h4>
              
                  <p className="text-white/70 text-lg max-w-xl mx-auto">This is just a simple text made for this unique and awesome template, you can replace it with any text.</p>
              
                  <div className="relative mt-8">
                      <Link to="" className="h-10 px-6 tracking-wide inline-flex items-center justify-center font-medium rounded-md bg-teal-500 text-white">Get Started</Link>
                  </div>
              </div>
          </div>
      </section>
      <div className="relative">
          <div className="absolute block w-full h-auto bottom-[25px] z-1 start-0">
              <Link to="#about"><i className="mdi mdi-arrow-down absolute top-0 start-0 end-0 text-center inline-flex items-center justify-center rounded-full bg-white dark:bg-slate-900 h-12 w-12 mx-auto shadow-md dark:shadow-gray-800"></i></Link>
          </div>

          <div className="shape absolute sm:-bottom-px -bottom-[2px] start-0 end-0 overflow-hidden text-white dark:text-slate-900">
              <svg className="w-full h-auto scale-[2.0] origin-top" viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
              </svg>
          </div>
      </div>

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