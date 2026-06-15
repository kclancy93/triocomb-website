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
        className="relative isolate bg-cream-50 dark:bg-slate-900 pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-40 -end-40 w-[640px] h-[640px] rounded-full bg-gradient-to-br from-teal-400/20 via-teal-500/10 to-transparent blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 -start-32 w-[420px] h-[420px] rounded-full bg-gradient-to-tr from-amber-200/40 via-cream-100 to-transparent blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.035] mix-blend-multiply"
          style={{ backgroundImage: "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.7'/></svg>\")" }}
        />

        <div className="container relative">
          <div className="grid lg:grid-cols-12 grid-cols-1 items-center gap-10 lg:gap-16">
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-3 text-xs font-semibold tracking-[0.22em] uppercase text-teal-600">
                <span className="inline-block w-8 h-px bg-teal-600"></span>
                A global talent agency
                <span className="text-teal-500/60">✦</span>
              </span>

              <h1 className="font-fraunces font-medium text-5xl md:text-6xl lg:text-[5.25rem] text-clay-700 dark:text-white leading-[1.05] tracking-tight mt-6">
                Where world-class talent meets the work{' '}
                <span className="relative inline-block italic font-normal text-teal-600">
                  that matters
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 200 12"
                    preserveAspectRatio="none"
                    className="absolute left-0 -bottom-2 w-full h-3 text-teal-500/60"
                  >
                    <path d="M2 8 Q 50 1, 100 6 T 198 5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                  </svg>
                </span>
                .
              </h1>

              <p className="mt-8 text-lg text-clay-500 dark:text-white/70 max-w-[58ch] leading-[1.75]">
                Comb connects skilled engineers with U.S. clients navigating life's pivots and career disruptions. We build long-term partnerships rooted in transparency, fair pay, and meaningful work — wherever in the world you are.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-3">
                <ScrollLink
                  to="contact"
                  smooth
                  duration={500}
                  className="group h-12 px-7 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-br from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white font-medium cursor-pointer shadow-lg shadow-teal-500/25 hover:shadow-xl hover:shadow-teal-500/35 hover:-translate-y-0.5 transition-all duration-300"
                >
                  Start a conversation
                  <i className="mdi mdi-arrow-right transition-transform duration-300 group-hover:translate-x-1"></i>
                </ScrollLink>
                <ScrollLink
                  to="about"
                  smooth
                  duration={500}
                  className="group h-12 px-5 inline-flex items-center justify-center gap-2 rounded-full border border-clay-700/15 dark:border-white/15 text-clay-700 dark:text-white font-medium cursor-pointer hover:border-teal-600 hover:text-teal-600 transition-colors"
                >
                  How we work
                </ScrollLink>
              </div>

              <dl className="mt-14 flex items-stretch max-w-lg divide-x divide-cream-200 dark:divide-gray-700">
                <div className="pe-6">
                  <dt className="font-fraunces text-4xl font-medium text-clay-700 dark:text-white leading-none">15<span className="text-teal-600">+</span></dt>
                  <dd className="mt-2 text-xs uppercase tracking-[0.15em] text-clay-500 dark:text-white/60">Years building teams</dd>
                </div>
                <div className="px-6">
                  <dt className="font-fraunces text-4xl font-medium text-clay-700 dark:text-white leading-none">200<span className="text-teal-600">+</span></dt>
                  <dd className="mt-2 text-xs uppercase tracking-[0.15em] text-clay-500 dark:text-white/60">Engineers in network</dd>
                </div>
                <div className="ps-6">
                  <dt className="font-fraunces text-4xl font-medium text-clay-700 dark:text-white leading-none">100<span className="text-teal-600">%</span></dt>
                  <dd className="mt-2 text-xs uppercase tracking-[0.15em] text-clay-500 dark:text-white/60">Equal pay, anywhere</dd>
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
