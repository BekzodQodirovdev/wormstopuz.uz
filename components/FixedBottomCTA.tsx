'use client'

import { useState, useEffect } from 'react'

export default function FixedBottomCTA() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 300px
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div 
      className={`fixed bottom-0 left-0 right-0 z-50 transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      {/* Gradient shadow at top */}
      <div className="absolute -top-6 left-0 right-0 h-6 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
      
      {/* Main CTA bar */}
      <div className="bg-gradient-to-r from-green-600 via-green-500 to-green-600 py-3 shadow-[0_-4px_20px_rgba(0,0,0,0.3)]">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          {/* Left side - Price info */}
          <div className="text-white text-sm">
            <div className="flex items-center gap-2">
              <span className="line-through text-white hidden sm:inline">99.000 сўм</span>
              <span className="font-bold">22.000 сўм</span>
            </div>
          </div>
          
          {/* Right side - CTA button */}
          <a 
            href="#contact"
            className="bg-yellow-400 hover:bg-yellow-300 text-green-800 px-4 sm:px-6 py-2.5 rounded-lg font-bold text-sm transition-all shadow-lg hover:shadow-xl whitespace-nowrap"
            aria-label="Order now"
          >
            Буюртма бериш
          </a>
        </div>
      </div>
    </div>
  )
}
