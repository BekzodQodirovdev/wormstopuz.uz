"use client"

import { useEffect, useState } from 'react'

type Variant = 'light' | 'dark'

const certificates = [
  { id: '1', label: 'Сертификат 1', href: '/sertificate/product1.pdf' },
  { id: '2', label: 'Сертификат 2', href: '/sertificate/product2.pdf' }
]

export default function Certificates({ variant = 'light', className = '' }: { variant?: Variant; className?: string }) {
  const [active, setActive] = useState<(typeof certificates)[number] | null>(null)

  useEffect(() => {
    if (!active) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previousOverflow || 'unset'
    }
  }, [active])

  const labelClass = variant === 'dark' ? 'text-white/90' : 'text-gray-700'
  const buttonClass =
    variant === 'dark'
      ? 'border-white/50 bg-white/10 text-white hover:bg-white/20'
      : 'border-gray-300 bg-white text-gray-700 hover:bg-gray-50'

  return (
    <div className={`flex flex-col items-center gap-3 ${className}`}>
      <p className={`text-sm font-semibold ${labelClass}`}>Сертификатлар</p>
      <div className="flex flex-wrap justify-center gap-3">
        {certificates.map((cert) => (
          <button
            key={cert.id}
            type="button"
            onClick={() => setActive(cert)}
            className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium shadow-sm transition-colors ${buttonClass}`}
          >
            {cert.label}
          </button>
        ))}
      </div>

      {active && (
        <div
          className="fixed inset-0 z-[110] flex items-center justify-center p-4"
          onClick={() => setActive(null)}
          role="dialog"
          aria-modal="true"
        >
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
          <div
            className="relative w-full max-w-5xl h-[85vh] bg-white rounded-xl shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActive(null)}
              className="absolute top-3 right-3 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full bg-black/10 text-gray-700 hover:bg-black/20"
              aria-label="Yopish"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <iframe
              src={active.href}
              title={active.label}
              className="h-full w-full"
            />
          </div>
        </div>
      )}
    </div>
  )
}
