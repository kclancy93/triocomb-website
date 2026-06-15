import { Link } from 'gatsby'
import React, { useCallback, useEffect, useState } from 'react'

export default function BackToTop() {
    let [scroll, setScroll] = useState<Boolean>(false)

    const handleScroll = useCallback(() => {
        if (typeof window !== 'undefined'){
            setScroll(window.scrollY > 50);
        }
        }, []);

    useEffect(() => {
    if (typeof window !== 'undefined'){

        window.addEventListener('scroll', handleScroll);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }
    
    }, [handleScroll]);

    const scrollToTop = () =>{
        window.scrollTo(0,0)
    }

  return (
    
    <Link to="" onClick={(e) =>{e.preventDefault(); scrollToTop()}} id="back-to-top" className={`fixed text-lg rounded-full z-10 bottom-5 end-5 h-9 w-9 text-center bg-teal-600 text-white leading-9 flex items-center justify-center ${scroll ? '' : 'hidden'}`} style={{bottom:'20px', right:'20px'}}><i className="uil uil-arrow-up"></i></Link>
  )
}