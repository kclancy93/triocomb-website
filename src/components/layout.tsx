import React from 'react'
import '../assets/css/output.css'
import Switcher from './switcher'
import BackToTop from './back-to-top'

export default function Layout({children}:{children:any}) {
  return (
    <div>
        <main>
            {children}
            <Switcher/>
            <BackToTop/>
        </main>
    </div>
  )
}
