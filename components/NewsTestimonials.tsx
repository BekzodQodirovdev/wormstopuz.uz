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
      name: "Робия",
      avatar: "/photos/nophoto.jpeg",
      audio: "/media/1.mp3",
      duration: "0:42",
      text: "Юзимни кўрсатишга уяламан, лекин овозимни ёзиб олсангиз майли. Тўғриси, аввалига ишонмагандим. Лекин 3-кундан бошлаб ичимдан нималар тушганини кўриб даҳшатга тушдим. Мана шу майда гижжалар мени йиллаб қийнаган экан. Ҳозир енгилман, жудаям хурсандман."
    },
    {
      name: "Замира опа",
      avatar: "/photos/nophoto.jpeg",
      audio: "/media/2.mp3",
      duration: "0:15",
      text: "Ўғлим 10 ёшда, жуда озғин, иштаҳаси йўқ эди. Доктор тавсияси билан Wormstop бердим. Ишонмайсиз, эрталаб тувакда гижжаларни кўриб ўзим қўрқиб кетдим. Боламни рангига қон кирди, иштаҳаси очилиб қолди ҳозир."
    },
    {
      name: "Отабек",
      avatar: "/photos/nophoto.jpeg",
      audio: "/media/4.mp3",
      duration: "0:28",
      text: "Фарзандларим учун олгандим. 5-кунга келиб катта натижа кўрдик. Энг қизиғи, кичик қизимдаги оқ доғлар ҳам йўқолишни бошлади. Буни ҳаммага тавсия қиламан, ҳақиқатдан ёрдам бераркан."
    },
    {
      name: "Малика Аҳмедова",
      avatar: "/photos/o25m.jpg",
      text: "Мен ўзим врачман, лекин кимёвий дорилардан кўра табиий воситаларни маъқул кўраман. Таркибини ўрганиб чиқдим — жуда кучли формула. Уй шароитида жигар ва ичакларни тозалаш учун энг яхши ечим."
    },
    {
      name: "Сардор",
      avatar: "/photos/1.jpg",
      text: "Юзимдаги тошмалар кетмаётганди. Дерматолог бу ичакдан дегани учун шуни ичиб кўрдим. 1 курсдан кейин юзим тозаланди! Ҳайрон қоларли даражада тез таъсир қилди."
    },
    {
      name: "Нодира",
      avatar: "/photos/20.jpg",
      text: "Оиламиз билан профилактика учун ичдик. Эримда сурункали чарчоқ бор эди, ҳозир энергияси жуда яхши. Ўзим ҳам анча енгил тортдим. Нархи ҳам чўнтакбоп экан."
    }
  ]

  return (
    <section id="reviews" className="py-12 bg-white">
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
              className="bg-gray-50 rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow"
            >
              <div className="flex gap-4">
                {/* Avatar */}
                <div className="flex-shrink-0">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-green-100"
                  />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="font-bold text-lg text-gray-900 mb-3">
                    {testimonial.name}
                  </h3>

                  {/* Audio Player - Using VoiceMessage Component */}
                  {testimonial.audio && (
                    <div className="mb-4">
                      <VoiceMessage src={testimonial.audio} duration={testimonial.duration || "0:30"} />
                    </div>
                  )}

                  {/* Text */}
                  <p className="text-gray-700 leading-relaxed">
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
