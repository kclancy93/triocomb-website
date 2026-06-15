import * as React from "react"
import { Link, type HeadFC, type PageProps } from "gatsby"

import Layout from "../components/layout"
import NavbarDark from "../components/navbar-dark"
import About from "../components/about"
import Services from "../components/services"
import Tab from "../components/mission"
import Cta from "../components/cta"
import Client from "../components/client"
import Pricing from "../components/pricing"
import Offer from "../components/offer"
import Contact from "../components/contact"
import Footer from "../components/footer"

import hero from "../assets/images/design-team.svg"
import favIcon from '../assets/images/favicon.png'

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <NavbarDark/>

        <section className="relative overflow-hidden md:py-48 py-40 bg-teal-500/5 dark:bg-teal-500/20" id="home">
            <div className="container relative mt-8">
                <div className="grid md:grid-cols-2 grid-cols-1 gap-6 items-center">
                    <div>
                        <h1 className="font-semibold lg:leading-normal leading-normal tracking-wide text-4xl lg:text-5xl mb-5">Connect Clients with Talents</h1>
                        <p className="text-slate-400 text-lg max-w-xl">We are a bridge between Clients and Talents, focused on transparent, ethical, developer-focused collaboration.</p>
                        <div className="mt-6">
                            <Link to="" className="h-10 px-6 tracking-wide inline-flex items-center justify-center font-medium rounded-md bg-teal-500 text-white">Contact Us <i className="mdi mdi-chevron-right ms-1"></i></Link>
                        </div>
                    </div>

                    <div className="lg:ms-8">
                        <div className="relative">
                            <img src={hero} className="relative top-16" alt=""/>
                            <div className="overflow-hidden absolute md:size-[500px] size-[400px] bg-gradient-to-tl to-teal-500/20 via-teal-500/70 from-teal-500 bottom-1/2 translate-y-1/2 md:start-0 start-1/2 ltr:md:translate-x-0 ltr:-translate-x-1/2 rtl:md:translate-x-0 rtl:translate-x-1/2 -z-1 shadow-md shadow-teal-500/10 rounded-full"></div>
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
    </Layout>
  )
}

export default IndexPage

export function Head(){
    return(
      <>
        <html lang="en" className="light scroll-smooth" dir="ltr"/>
        <body className="font-libre-franklin text-slate-900 dark:text-white dark:bg-slate-900"/>
        <title>Comb - Global Talent Agency</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/7.4.47/css/materialdesignicons.min.css" integrity="sha512-/k658G6UsCvbkGRB3vPXpsPHgWeduJwiWGPCGS14IQw3xpr63AEMdA8nMYG2gmYkXitQxDTn6iiK/2fD4T87qA==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
        <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.8/css/line.css"></link>
        <link href={favIcon} rel="shortcut icon"></link>
      </>
    )
  }
