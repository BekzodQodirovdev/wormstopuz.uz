'use client'

import VoiceMessage from './VoiceMessage'

interface Testimonial {
  name: string
  avatar: string
  audio?: string
  duration?: string
  text: string
}

export default function NewsTestimonials() {
  const testimonials: Testimonial[] = [
    {
      name: "Зулайхо",
      avatar: "/photos/nophoto.jpeg",
      audio: "/newsmedia/1.mp3",
      text: "Беморимиз фарзандларида қорин оғриқлари, оғиз ҳидланиши, бош оғриқлари, кўзда ёшланиш каби муаммолар бор эди. Гижжа билан боғлиқ муаммо эканини тушунтириб, Wormstop муолажасини бердик. 1-куннинг ўзидаёқ гельминтлар тўкилишни бошлади."
    },
    {
      name: "Замира",
      avatar: "/photos/nophoto.jpeg",
      audio: "/newsmedia/2.mp3",
      text: "Усмир ва кичик ёшли фарзандларимда даволаш ишлари олиб бордик. Ўсмир ёшдаги қизимда кузатилаётган баъзи муаммолар бор эди, ҳозир йўқ 😊"
    },
    {
      name: "Отабек",
      avatar: "/photos/nophoto.jpeg",
      audio: "/newsmedia/3.mp3",
      text: "Фарғона шаҳридан беморимиз Wormstop капсулалари ёрдамида гижжадан қутулишга муваффақ бўлди. Бўйин-қўлтиқ остидаги папилломалар, оғизда ҳидланиш, қувватсизлик бор эди. Ҳозир папилломалар йўқолди, қувват тикланди, нохуш ҳидлар кетди."
    },
    {
      name: "Робина",
      avatar: "/photos/nophoto.jpeg",
      audio: "/newsmedia/4.mp3",
      text: "1–3 кун орасида ҳолати тиклана бошлади, натижалар кўрина бошлади."
    },
    {
      name: "Тохтоғон",
      avatar: "/photos/nophoto.jpeg",
      audio: "/newsmedia/5.mp3",
      text: "Фарзандларида иштаҳа муаммоси, юзда оқ доғлар, тошмалар, инжиқлик ва холсизлик бор эди. Бир курснинг ўзида тўлақонли даволаниб, 100% натижага эришдилар."
    },
    {
      name: "Зохида",
      avatar: "/photos/nophoto.jpeg",
      audio: "/newsmedia/6.mp3",
      text: "Тошкент вилояти, Оқ Қўрғон туманидан беморимиз Wormstop капсулалари ва wormprojunior сиропи ёрдамида фарзандларини гижжадан қутқарди. Юзда оқ доғлар, иштаҳа йўқлиги, жусса кичиклиги бор эди. Ҳозир юзлари тўлишди, овқат еяптишмоқда, тошмалар йўқолди, бўйлари ўсди."
    },
    {
      name: "Юлдуз",
      avatar: "/photos/nophoto.jpeg",
      audio: "/newsmedia/7.mp3",
      text: "Самарқанд вилоятидан Юлдуз опамиз неваралари учун Wormstop капсуласини олган эдилар. Аскарида ва лямблия паразитлари, озғинлик, иштаҳа пастлиги, инжиқлик, холсизлик, оқ доғлар ва киндик атрофида оғриқлар бор эди. Қисқа фурсатда яхши натижага эришдилар."
    }
  ]

  return (
    <section id="reviews" className="py-12 bg-white overflow-x-hidden">
      <div className="max-w-5xl mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Изоҳлар ва натижалар
          </h2>
          <div className="w-20 h-1 bg-green-600"></div>
        </div>

        {/* Testimonials Grid */}
        <div className="space-y-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-gray-50 rounded-lg p-4 md:p-6 border border-gray-200 hover:shadow-lg transition-shadow overflow-hidden"
            >
              <div className="flex gap-3 md:gap-4">
                {/* Avatar */}
                <div className="flex-shrink-0">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-12 h-12 md:w-16 md:h-16 rounded-full object-cover border-2 border-green-100"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0 overflow-hidden">
                  <h3 className="font-bold text-base md:text-lg text-gray-900 mb-2 md:mb-3">
                    {testimonial.name}
                  </h3>

                  {/* Audio Player - Using VoiceMessage Component */}
                  {testimonial.audio && (
                    <div className="mb-3 md:mb-4 max-w-full overflow-hidden">
                      <VoiceMessage src={testimonial.audio} duration={testimonial.duration || "0:30"} />
                    </div>
                  )}

                  {/* Text */}
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed break-words overflow-wrap-anywhere">
                    {testimonial.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
