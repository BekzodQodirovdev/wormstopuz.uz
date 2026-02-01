'use client'

import { useState } from 'react'

interface FAQItem {
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    question: "Курс қанча давом этади?",
    answer: "Wormstop курси одатда 30 кун давом этади. Бироқ кўплаб беморлар биринчи 7-10 кунда яхшиланишларни сезадилар."
  },
  {
    question: "Қандайдир ножўя таъсирлар борми?",
    answer: "Йўқ, Wormstop тўлиқ табиий ўсимлик экстрактларидан тайёрланган. У ножўя таъсирларга сабаб бўлмайди ва аллергик реакциялар деярли учрамайди."
  },
  {
    question: "Болалар учун хавфсизми?",
    answer: "Ҳа, Wormstop 3 ёшдан катта болалар учун тўлиқ хавфсиз. Болалар дозасини аниқлаштириш учун врачга мурожаат қилинг."
  },
  {
    question: "Тўловни қандай амалга оширишим мумкин?",
    answer: "Тўлов нақд пул билан маҳсулотни олганингизда амалга оширилади. Биз бепул етказиб беришни таклиф қиламиз."
  }
]

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
      <h2 className="text-3xl font-bold text-center mb-8">
        Кўп бериладиган саволлар
      </h2>
      
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            className={`border rounded-lg overflow-hidden transition-all ${
              activeIndex === index ? 'border-red-500 shadow-md' : 'border-gray-200'
            }`}
          >
            <button
              onClick={() => toggle(index)}
              className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
            >
              <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
              <span className="text-red-600 text-xl flex-shrink-0">
                {activeIndex === index ? '−' : '+'}
              </span>
            </button>
            
            {activeIndex === index && (
              <div className="px-6 pb-4 text-gray-700 leading-relaxed animate-fadeIn">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
