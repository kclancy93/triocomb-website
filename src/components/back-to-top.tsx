import React, { useCallback, useEffect, useState } from 'react'

export default function BackToTop() {
    const [scroll, setScroll] = useState<boolean>(false)

    const handleScroll = useCallback(() => {
        if (typeof window !== 'undefined') {
            setScroll(window.scrollY > 50)
        }
    }, [])

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', handleScroll)
            return () => {
                window.removeEventListener('scroll', handleScroll)
            }
        }
    }, [handleScroll])

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

    return (
        <button
            type="button"
            onClick={scrollToTop}
            aria-label="Back to top"
            className={`fixed bottom-6 end-6 z-10 h-11 w-11 rounded-full bg-clay-900 text-white text-lg shadow-md transition-all duration-300 hover:bg-teal-500 hover:-translate-y-0.5 flex items-center justify-center ${scroll ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        >
            <i className="uil uil-arrow-up"></i>
        </button>
    )
}
