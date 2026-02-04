import type { Metadata } from 'next'
import Header from '../../components/Header'
import OrderForm from '../../components/OrderForm'
import NewsTestimonials from '../../components/NewsTestimonials'
import Certificates from '../../components/Certificates'
import Link from 'next/link'
import PromoPopup from '../../components/PromoPopup'
import FixedBottomCTA from '../../components/FixedBottomCTA'
import { StickyScrollWrapper } from '../../components/story/StickyScrollWrapper'
import { Suspense } from 'react'

export const metadata: Metadata = {
  title: 'Гижжалар ва паразитлар — кўзга кўринмас, лекин жуда хавфли душман',
}

export default function NewsPage() {
  return (
    <>
      <Header />
      
      {/* Promo Popup - shows after 15 seconds */}
      <PromoPopup />
      
      {/* Fixed Bottom CTA - shows after scrolling */}
      <FixedBottomCTA />
      
      <main className="bg-white pb-16">

        <article className="w-full max-w-[1400px] mx-auto px-4 py-8 md:py-12">
          {/* Article Header */}
          <div className="max-w-4xl mx-auto text-center mb-12 md:mb-20">
            <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
              Гижжалар ва паразитлар — кўзга кўринмас, лекин жуда хавфли душман.
            </h1>
          </div>

          {/* Main Visual Story Content */}
          <StickyScrollWrapper />

        </article>

        {/* Order Form */}
        <section id="contact" className="py-12 bg-gray-50 border-t border-gray-200">
          <div className="max-w-2xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">Мутахассис билан боғланиш</h2>
            <Suspense fallback={<div className="h-96 bg-gray-50 rounded-lg animate-pulse" />}>
              <OrderForm />
            </Suspense>
            <Certificates className="mt-6" />
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Эътиборсиз қолдирманг — бу сизнинг соғлиғингиз ҳақида
            </h2>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed opacity-90">
              <strong>Wormstop</strong> — Бу оддий маҳсулот эмас, бу соғлиғингизни ҳимоя қилувчи табиий қалқон. Фарзандларингиз, ўзингиз ва яқинларингиз учун тўғри қарорни қабул қилинг.
            </p>
            <div className="inline-block bg-white text-blue-700 px-8 py-4 rounded-full font-bold text-xl shadow-lg hover:bg-gray-100 transition-transform hover:scale-105 cursor-pointer">
              <a href="#contact">Ҳозироқ ариза қолдиринг</a>
            </div>

          </div>
        </section>

        {/* Testimonials */}
        <NewsTestimonials />

        {/* Back to Home */}
        <div className="text-center py-12 bg-white">
          <Link 
            href="/" 
            className="text-gray-500 hover:text-green-600 font-semibold text-lg transition-colors border-b-2 border-transparent hover:border-green-600 pb-1"
          >
            ← Бош саҳифага қайтиш
          </Link>
        </div>
      </main>
    </>
  )
}
