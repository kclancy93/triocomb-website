import React from 'react'
import '../assets/css/output.css'
import BackToTop from './back-to-top'

export default function Layout({children}:{children:any}) {
  return (
    <div>
        {children}
        <BackToTop/>
    </div>
  )
}
