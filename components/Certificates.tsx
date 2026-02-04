"use client"


const certificates = [
  { id: '1', label: 'Сертификат 1', href: '/sertificate/product1.pdf' },
  { id: '2', label: 'Сертификат 2', href: '/sertificate/product2.pdf' }
]

export default function Certificates({ variant = 'light', className = '' }: { variant?: 'light' | 'dark'; className?: string }) {
  const labelClass = variant === 'dark' ? 'text-white/90' : 'text-gray-700'

  return (
    <div className={`flex flex-col items-center gap-3 w-full ${className}`}>
      <p className={`text-sm font-semibold ${labelClass}`}>Сертификатлар</p>
      
      <div className="grid grid-cols-2 gap-3 w-full max-w-2xl">
        {certificates.map((cert) => (
          <div key={cert.id} className="relative aspect-[3/4] w-full bg-gray-100 rounded-lg overflow-hidden border border-gray-200 shadow-sm group">
            <iframe
              src={`${cert.href}#toolbar=0&navpanes=0&scrollbar=0&view=Fit`}
              title={cert.label}
              className="absolute inset-0 w-full h-full"
              style={{ border: 'none', overflow: 'hidden' }}
              scrolling="no"
              loading="lazy"
            />
            {/* Optional: Overlay to allow clicking to open in full if needed, or just let them read directly */}
            <a 
              href={cert.href} 
              target="_blank" 
              rel="noopener noreferrer"
              className="absolute top-2 right-2 p-2 bg-white/80 rounded-full shadow-sm hover:bg-white transition-colors opacity-0 group-hover:opacity-100"
              title="Kattalashtirish"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-700">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h-4.5m4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
              </svg>
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}
