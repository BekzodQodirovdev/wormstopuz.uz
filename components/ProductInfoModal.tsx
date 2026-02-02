'use client'

import { useState, useEffect } from 'react'

interface ProductInfoModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ProductInfoModal({ isOpen, onClose }: ProductInfoModalProps) {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
      
      {/* Modal Content */}
      <div 
        className="relative bg-gradient-to-b from-[#0a1628] to-[#0d2035] rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-cyan-500/30"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors z-10"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Header with Logo */}
        <div className="p-6 pb-4 border-b border-cyan-500/20">
          <h2 className="text-3xl font-bold text-white tracking-wide">
            WORMST<span className="text-cyan-400">●</span>P
          </h2>
          <div className="mt-3 text-cyan-300/80 text-sm space-y-1">
            <p>Саримсоқ пиёз қуруқ концентрати</p>
            <p>Ковоқ данаклари қуруқ концентрати</p>
            <p>Тансй ўти қуруқ концентрати</p>
            <p>Анчик шувоқ қуруқ концентрати</p>
            <p>Сабзи қуруқ концентрати</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="p-6 space-y-6 text-white/90 text-sm leading-relaxed">
          {/* Foydali xususiyatlari */}
          <section>
            <h3 className="text-cyan-400 font-semibold text-base mb-3 border-b border-cyan-500/30 pb-2">
              Фойдали хусусиятлари
            </h3>
            <p className="mb-3">
              Wormstop капсулалари паразитлар (lyamblioz, gimenolepidoz, ostritsa, askarida) 
              гельминтларга қарши концентратлар таркибидаги аллицин билан биргаликда унинг 
              организмдаги синтези учун зарур бўлган компонент аллин ҳам мавжуд. Wormstop 
              капсулалари ичак паразитларининг кўпайиш жараёнларини қийинлаштиради ва 
              уларнинг туҳумлари қобиғини зарарлайди, бунинг натижасида паразитларга қарши 
              таъсир кузатилади. Лентасимон қуртларга қарши самарали ёрдам беради.
            </p>
            <p className="mb-3">
              Бундан ташқари қовоқ даналари ва Тансй ўти қуруқ концентратлари паразитларнинг 
              ҳаракатланиш фаоллигини ўзгартиради, ана шунда мушаклар бўшашишни чақиради 
              ва кейин мушаклар контрактурасига сабаб бўлади. Шу билан бирга, перисталтик 
              туҳнлиқдан сабабли гельминт ташқарига чиқарилади.
            </p>
            <p className="mb-3">
              Саримсоқ пиёз қуруқ концентрати таркибида паразит ва бактерияларданхимор 
              қилувчи моддалар — фитонсидлар мавжуд бўлганлиги сабабли бактерицид, 
              антипаразитар ва замбуруғларга қарши таъсир қилади.
            </p>
            <p className="mb-3">
              Анчик шувоқ қуруқ концентрати меъда ичак йўли ишини нормантириб, ўт 
              ажралишини ва меъда ости бези функсиясини кучайтиради, овқат ҳазмини 
              яхшилайди. Овқат таркибидаги зарарли бактерия ва замбуруғларни ўлдириб, 
              аллергияинча қарши таъсир кўрсатади, маркааий нерв системасини кўзғатиб, юрак 
              ишиши юлни кенгайтиради.
            </p>
            <p>
              Сабзи қуруқ концентрати таркибида жудаям кўп миқдорда витаминлар (Б, Д, 
              каротин, флавоноидлар, пролин, синк, селен, фосфор) бор. Сабзи қуруқ концентратининг 
              калорийсининг пастлиги сабаб ҳам сабзи жуда фойдали бўлиб соч, тирноқ ва 
              тишларни мустаҳхам қилади, терини эса тиниқлаштиради. Сабзи таркибида кўплгна 
              антиоксидантлар мавжуд бўлиб, улар организм ёшлигини сақлаб қолиб, иммунитетни 
              ҳам мустаҳкамлайди.
            </p>
            <p className="mt-3">
              Сабзи қуруқ концентрати саримсоқ, пиёз, қовоқ даналари, тансй, анчик шувоқ қуруқ 
              концентрати билан қўшилганда паразитлардан даволақ қолмй, организмни 
              жудаям яхши яхвохлантиради.
            </p>
          </section>

          {/* Қўллаш бўйича тавсиялар */}
          <section>
            <h3 className="text-cyan-400 font-semibold text-base mb-3 border-b border-cyan-500/30 pb-2">
              Қўллаш бўйича тавсиялар
            </h3>
            <p>Ичак инфексияпари профилактикаси.</p>
          </section>

          {/* Қарши кўрсатмалар */}
          <section>
            <h3 className="text-cyan-400 font-semibold text-base mb-3 border-b border-cyan-500/30 pb-2">
              Қарши кўрсатмалар
            </h3>
            <p>Таркибий компонентларга индивидуал ношушлик.</p>
            <p>Қабул қилишдан олдин мутахассис билан маслаҳатлашиш тавсия этилади</p>
          </section>

          {/* Муҳим кўрсатмалар */}
          <section>
            <h3 className="text-cyan-400 font-semibold text-base mb-3 border-b border-cyan-500/30 pb-2">
              <span className="underline">Муҳим кўрсатмалар</span>
            </h3>
            <p className="text-yellow-400/90">Дори воситаси эмас</p>
          </section>

          {/* Composition Info */}
          <section className="bg-cyan-500/10 rounded-lg p-4 border border-cyan-500/20">
            <h4 className="text-cyan-400 font-semibold mb-2">Таркиби:</h4>
            <ul className="space-y-1 text-sm">
              <li>• Саримсоқ пиёз қуруқ концентрати</li>
              <li>• Ковоқ данаклари қуруқ концентрати</li>
              <li>• Тансй ўти қуруқ концентрати</li>
              <li>• Анчик шувоқ қуруқ концентрати</li>
              <li>• Сабзи қуруқ концентрати</li>
            </ul>
          </section>
        </div>

        {/* Footer */}
        <div className="p-6 pt-0">
          <a 
            href="#contact"
            onClick={onClose}
            className="block w-full bg-gradient-to-r from-red-600 to-red-500 text-white py-4 rounded-lg font-bold text-lg text-center hover:from-red-700 hover:to-red-600 transition-all shadow-lg"
          >
            Буюртма бериш
          </a>
        </div>
      </div>
    </div>
  )
}
