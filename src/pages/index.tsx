import React from 'react'
import { Link as ScrollLink } from 'react-scroll'

import Layout from '../components/layout'
import NavbarLight from '../components/navbar-light'
import About from '../components/about'
import Services from '../components/services'
import Mission from '../components/mission'
import Client from '../components/client'
import Offer from '../components/offer'
import Contact from '../components/contact'
import Footer from '../components/footer'

import ab1 from '../assets/images/ab1.jpg'
import ab3 from '../assets/images/ab3.jpg'
import ab4 from '../assets/images/ab4.jpg'
import ab5 from '../assets/images/ab5.jpg'
import ab6 from '../assets/images/ab6.jpg'
import ab7 from '../assets/images/ab7.jpg'
import favIcon from '../assets/images/favicon.png'

const cascadeImages = [
  { src: ab1, top: '0%', start: '0%', rotate: '-5deg', z: 60 },
  { src: ab3, top: '10%', start: '10%', rotate: '3deg', z: 50 },
  { src: ab4, top: '20%', start: '20%', rotate: '-3deg', z: 40 },
  { src: ab5, top: '30%', start: '30%', rotate: '4deg', z: 30 },
  { src: ab6, top: '40%', start: '40%', rotate: '-2deg', z: 20 },
  { src: ab7, top: '50%', start: '50%', rotate: '5deg', z: 10 },
]

export default function IndexHome() {
  return (
    <Layout>
      <NavbarLight />

      <section
        id="home"
        className="relative bg-cream-50 dark:bg-slate-900 pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-32 -end-32 w-[520px] h-[520px] rounded-full bg-teal-500/10 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 -start-24 w-[360px] h-[360px] rounded-full bg-cream-100 blur-2xl opacity-70"
        />

        <div className="container relative">
          <div className="grid lg:grid-cols-12 grid-cols-1 items-center gap-10 lg:gap-16">
            <div className="lg:col-span-7">
              <span className="inline-flex items-center text-xs font-semibold tracking-[0.18em] uppercase text-teal-600">
                <span className="inline-block w-6 h-px bg-teal-600 me-3"></span>
                A global talent agency
              </span>

              <h1 className="font-fraunces font-medium text-4xl md:text-5xl lg:text-6xl text-clay-700 dark:text-white leading-[1.1] tracking-tight mt-5">
                Where world-class talent meets the work that matters.
              </h1>

              <p className="mt-6 text-lg text-clay-500 dark:text-white/70 max-w-[58ch] leading-[1.75]">
                Comb connects skilled engineers with U.S. clients navigating life's pivots and career disruptions. We build long-term partnerships rooted in transparency, fair pay, and meaningful work — wherever in the world you are.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <ScrollLink
                  to="contact"
                  smooth
                  duration={500}
                  className="h-12 px-7 inline-flex items-center justify-center rounded-full bg-teal-500 hover:bg-teal-600 text-white font-medium cursor-pointer transition-colors shadow-sm"
                >
                  Start a conversation
                </ScrollLink>
                <ScrollLink
                  to="about"
                  smooth
                  duration={500}
                  className="h-12 px-2 inline-flex items-center justify-center text-clay-700 dark:text-white font-medium cursor-pointer hover:text-teal-600 transition-colors"
                >
                  How we work
                  <i className="mdi mdi-arrow-right ms-1.5"></i>
                </ScrollLink>
              </div>

              <dl className="mt-12 grid grid-cols-3 gap-6 max-w-md">
                <div>
                  <dt className="font-fraunces text-3xl font-medium text-clay-700 dark:text-white">15+</dt>
                  <dd className="mt-1 text-sm text-clay-500 dark:text-white/60">Years building teams</dd>
                </div>
                <div>
                  <dt className="font-fraunces text-3xl font-medium text-clay-700 dark:text-white">200+</dt>
                  <dd className="mt-1 text-sm text-clay-500 dark:text-white/60">Engineers in network</dd>
                </div>
                <div>
                  <dt className="font-fraunces text-3xl font-medium text-clay-700 dark:text-white">100%</dt>
                  <dd className="mt-1 text-sm text-clay-500 dark:text-white/60">Equal pay, anywhere</dd>
                </div>
              </dl>
            </div>

            <div className="lg:col-span-5">
              <div className="relative w-full aspect-[4/5] max-w-md mx-auto">
                {cascadeImages.map((img, i) => (
                  <img
                    key={i}
                    src={img.src}
                    alt=""
                    style={{
                      top: img.top,
                      insetInlineStart: img.start,
                      transform: `rotate(${img.rotate})`,
                      zIndex: img.z,
                    }}
                    className="absolute w-1/2 h-auto rounded-2xl shadow-lg ring-1 ring-cream-200 dark:ring-gray-700 object-cover transition-transform duration-300 hover:-translate-y-1"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <About />
      <Services />
      <Mission />
      <Client />
      <Offer />
      <Contact />
      <Footer />
    </Layout>
  )
}

export function Head() {
  return (
    <>
      <html lang="en" className="light scroll-smooth" dir="ltr" />
      <body className="font-libre-franklin text-clay-700 dark:text-white dark:bg-slate-900 bg-cream-50" />
      <title>Comb — Connect Clients with Global Talent</title>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/7.4.47/css/materialdesignicons.min.css"
        integrity="sha512-/k658G6UsCvbkGRB3vPXpsPHgWeduJwiWGPCGS14IQw3xpr63AEMdA8nMYG2gmYkXitQxDTn6iiK/2fD4T87qA=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />
      <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.8/css/line.css" />
      <link href={favIcon} rel="shortcut icon" />
    </>
  )
}
