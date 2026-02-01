'use client'

import { useState, useEffect } from 'react'

export default function OrderForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '+998',
    region: ''
  })
  
  const [timer, setTimer] = useState(600) // 10 minutes

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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    alert('Буюртма қабул қилинди! Оператор тез орада сиз билан боғланади.')
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
    <div className="bg-gray-100 rounded-lg shadow-lg p-6 md:p-8 relative">
      {/* Sale Badge */}
      <div className="absolute -top-4 -right-4 bg-red-600 text-white rounded-full w-20 h-20 flex items-center justify-center transform rotate-12 shadow-lg">
        <div className="text-center">
          <div className="text-2xl font-bold">-77%</div>
          <div className="text-xs">ЧЕГИРМА</div>
        </div>
      </div>

      {/* Form Header */}
      <h2 className="text-2xl font-bold text-center mb-2 uppercase">
        Расмий буюртма шакли
      </h2>
      
      {/* Product Image */}
      <div className="text-center mb-6">
        <img 
          src="/product.png" 
          alt="Wormstop" 
          className="mx-auto w-48 md:w-64"
        />
      </div>

      {/* Price Info */}
      <div className="bg-white rounded-lg p-4 mb-6 text-center">
        <div className="flex justify-between items-center mb-2">
          <span className="text-gray-600">Эски нарх:</span>
          <span className="text-gray-400 line-through text-lg">104, 348 сўм</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-900 font-semibold">Янги нарх:</span>
          <span className="text-red-600 text-3xl font-bold">24,000 сўм</span>
        </div>
        <p className="text-xs text-yellow-600 mt-2">Кунлик доза</p>
      </div>

      {/* Timer */}
      <div className="bg-yellow-100 border-2 border-yellow-500 rounded-lg p-4 mb-6 text-center">
        <p className="font-bold mb-2">
          Маҳсулотни олиш учун қолган вақт:
        </p>
        <div className="text-3xl font-bold text-red-600 tabular-nums">
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
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
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
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
          />
        </div>

        <div>
          <label htmlFor="region" className="block text-sm font-medium text-gray-700 mb-1">
            Давлат
          </label>
          <select
            id="region"
            name="region"
            value={formData.region}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent bg-white"
          >
            <option value="">-- Танланг --</option>
            <option value="UZ">Ўзбекистон</option>
            <option value="BG">Болгария</option>
            <option value="CY">Кипр</option>
            <option value="GR">Греция</option>
            <option value="IT">Италия</option>
            <option value="PT">Португалия</option>
          </select>
        </div>

        <button 
          type="submit" 
          className="w-full bg-red-600 text-white py-4 rounded-lg text-lg font-bold hover:bg-red-700 transition-colors shadow-lg uppercase"
        >
          Юбориш
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
