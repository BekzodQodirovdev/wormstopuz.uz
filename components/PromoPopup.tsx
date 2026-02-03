'use client'

import { useState, useEffect } from 'react'

export default function PromoPopup() {
  const [isVisible, setIsVisible] = useState(false)
  const [hasShown, setHasShown] = useState(false)

  useEffect(() => {
    // Check if popup was already shown in this session
    const alreadyShown = sessionStorage.getItem('promoPopupShown')
    if (alreadyShown) {
      setHasShown(true)
      return
    }

    // Show popup after 15 seconds
    const timer = setTimeout(() => {
      setIsVisible(true)
      setHasShown(true)
      sessionStorage.setItem('promoPopupShown', 'true')
    }, 15000) // 15 seconds

    return () => clearTimeout(timer)
  }, [])

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isVisible])

  const handleClose = () => {
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4"
      onClick={handleClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm animate-fadeIn" />
      
      {/* Modal Content */}
      <div 
        className="relative bg-gradient-to-br from-green-600 via-green-700 to-green-800 rounded-xl sm:rounded-2xl max-w-[calc(100vw-24px)] sm:max-w-md w-full shadow-2xl border border-green-400/30 animate-scaleIn overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button 
          onClick={handleClose}
          className="absolute top-2 right-2 sm:top-3 sm:right-3 text-white/70 hover:text-white transition-colors z-10 bg-black/20 rounded-full p-1"
          aria-label="Close popup"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Decorative circles - smaller on mobile */}
        <div className="absolute -top-8 -right-8 w-24 h-24 sm:w-32 sm:h-32 bg-yellow-400/20 rounded-full blur-xl" />
        <div className="absolute -bottom-8 -left-8 w-28 h-28 sm:w-40 sm:h-40 bg-orange-400/20 rounded-full blur-xl" />

        {/* Content */}
        <div className="relative p-4 sm:p-6 text-center text-white">
          {/* Badge */}
          <div className="inline-block bg-yellow-400 text-green-800 px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-bold mb-3 sm:mb-4 animate-pulse">
            🔥 ЧЕКЛАНГАН ТАКЛИФ
          </div>

          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3">
            Фақат бугун!
          </h2>
          
          <div className="text-4xl sm:text-5xl md:text-6xl font-black mb-1 sm:mb-2 text-yellow-300 drop-shadow-lg">
            -77%
          </div>
          
          <p className="text-sm sm:text-lg mb-2 text-white/90">
            WORMSTOP учун махсус чегирма
          </p>

          <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4 flex-wrap">
            <span className="text-white/60 line-through text-sm sm:text-lg">104,348 сўм</span>
            <span className="text-xl sm:text-2xl font-bold text-yellow-300">24,000 сўм</span>
          </div>

          <p className="text-xs sm:text-sm text-white/80 mb-4 sm:mb-6 px-2">
            Акция муддати чекланган. Бепул етказиб бериш + олгандан кейин тўлов!
          </p>

          {/* CTA Button */}
          <a 
            href="#contact"
            onClick={handleClose}
            className="block w-full bg-yellow-400 hover:bg-yellow-300 text-green-800 py-3 sm:py-4 rounded-lg sm:rounded-xl font-bold text-base sm:text-lg transition-all shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
          >
            Ҳозироқ буюртма бериш →
          </a>

          <p className="text-[10px] sm:text-xs text-white/60 mt-3 sm:mt-4">
            *Тўлов фақат маҳсулотни олгандан кейин
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleIn {
          from { 
            opacity: 0; 
            transform: scale(0.9) translateY(20px); 
          }
          to { 
            opacity: 1; 
            transform: scale(1) translateY(0); 
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        .animate-scaleIn {
          animation: scaleIn 0.4s ease-out;
        }
      `}</style>
    </div>
  )
}
