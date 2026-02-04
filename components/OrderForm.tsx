'use client'

import { useState, useEffect } from 'react'
import ProductInfoModal from './ProductInfoModal'

export default function OrderForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '+998'
  })
  
  const [timer, setTimer] = useState(600) // 10 minutes
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null
    message: string
  }>({ type: null, message: '' })

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0))
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: '' })

    try {
      const response = await fetch('/api/send-order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Xatolik yuz berdi')
      }

      setSubmitStatus({
        type: 'success',
        message: 'Буюртма қабул қилинди! Оператор тез орада сиз билан боғланади.',
      })

      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({ name: '', phone: '+998' })
        setSubmitStatus({ type: null, message: '' })
      }, 3000)

    } catch (error) {
      console.error('Forma yuborishda xatolik:', error)
      setSubmitStatus({
        type: 'error',
        message: error instanceof Error ? error.message : 'Хатолик юз берди. Илтимос, қайта уриниб кўринг.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    if (value.startsWith('+998')) {
      setFormData({ ...formData, phone: value })
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  return (
    <div className="bg-gray-100 rounded-lg shadow-lg p-6 md:p-8 relative overflow-hidden">
      {/* Sale Badge */}
      <div className="absolute -top-2 right-2 md:-top-4 md:-right-4 bg-yellow-400 text-green-800 rounded-full w-16 h-16 md:w-20 md:h-20 flex items-center justify-center transform rotate-12 shadow-lg">
        <div className="text-center leading-tight">
          <div className="text-[10px] md:text-xs line-through text-green-900/70">99.000 сўм</div>
          <div className="text-sm md:text-base font-bold">22.000 сўм</div>
        </div>
      </div>

      {/* Form Header */}
      <h2 className="text-2xl font-bold text-center mb-2 uppercase">
        Расмий буюртма шакли
      </h2>
      
      {/* Product Image */}
      <div className="text-center mb-4">
        <button 
          onClick={() => setIsModalOpen(true)}
          className="cursor-pointer hover:scale-105 transition-transform focus:outline-none"
        >
          <img 
            src="/product.png" 
            alt="Wormstop" 
            className="mx-auto w-48 md:w-64"
          />
        </button>
        <button
          onClick={() => setIsModalOpen(true)}
          className="mt-2 text-sm text-green-600 hover:text-green-700 font-medium underline underline-offset-2"
        >
          📋 Батафсил маълумот
        </button>
      </div>

      {/* Product Info Modal */}
      <ProductInfoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* Price Info */}
      <div className="bg-white rounded-lg p-4 mb-6 text-center">
        <div className="flex justify-between items-center mb-2">
          <span className="text-gray-600">Эски нарх:</span>
          <span className="text-gray-400 line-through text-lg">99.000 сўм</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-900 font-semibold">Янги нарх:</span>
          <span className="text-green-600 text-3xl font-bold">22.000 сўм</span>
        </div>
      </div>

      {/* Timer */}
      <div className="bg-yellow-100 border-2 border-yellow-500 rounded-lg p-4 mb-6 text-center">
        <p className="font-bold mb-2">
          Маҳсулотни олиш учун қолган вақт:
        </p>
        <div className="text-3xl font-bold text-green-600 tabular-nums">
          {formatTime(timer)}
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Исмингиз
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Исмингизни киритинг"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Телефон рақами
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handlePhoneChange}
            required
            pattern="\+998\d{9}"
            maxLength={13}
            placeholder="+998 XX XXX XX XX"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
        </div>


        {/* Status Messages */}
        {submitStatus.type && (
          <div 
            className={`p-4 rounded-lg mb-4 text-center ${
              submitStatus.type === 'success' 
                ? 'bg-green-50 border-2 border-green-500 text-green-700' 
                : 'bg-red-50 border-2 border-red-500 text-red-700'
            }`}
          >
            <p className="font-semibold">
              {submitStatus.type === 'success' ? '✅' : '❌'} {submitStatus.message}
            </p>
          </div>
        )}

        <button 
          type="submit" 
          disabled={isSubmitting}
          className={`w-full py-4 rounded-lg text-lg font-bold transition-all shadow-lg uppercase ${
            isSubmitting 
              ? 'bg-gray-400 cursor-not-allowed' 
              : 'bg-green-600 text-white hover:bg-green-700'
          }`}
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Юборилмоқда...
            </span>
          ) : (
            'Юбориш'
          )}
        </button>

        <p className="text-xs text-center text-gray-500 mt-4">
          *акция фақат тўлиқ курс буюртма қилинганда амал қилади
        </p>
        
        <p className="text-xs text-center text-gray-600 mt-2">
          (агар сиз белгиланган вақт ичида шаклни тўлдирмасангиз, чегирма бекор қилинади ва захира бошқа шахсга ўтади, чунки маҳсулот жуда кам қолган)
        </p>
      </form>
    </div>
  )
}
