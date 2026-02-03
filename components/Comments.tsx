'use client'

import VoiceMessage from './VoiceMessage'

interface Comment {
  name: string
  avatar: string
  text: string
  audio?: string
  duration?: string
  image?: string
  time: string
}

export default function Comments() {
  const comments: Comment[] = [
    {
      name: "Азиза Муродова",
      avatar: "/photos/o25m.jpg",
      text: "Доктор Коэн интервьюсини ўқиб таъсирландим. Менда ҳам папилломалар бор эди, ҳеч нарса кетказмасди. Мана шу воситани ичганимдан кейин 2 ҳафтада тўкилиб тушди! Раҳмат!",
      time: "Бугун"
    },
    {
       name: "Рустам Каримов",
       avatar: "/photos/1.jpg",
       text: "Европа технологияси деганига қизиқиб олдим. Ростдан ҳам сифатли экан. Энг муҳими — кимёвий дорилар каби ошқозонни оғритмас экан. Профилактика учун зўр.",
      time: "Бугун"
    },
    {
      name: "Робия",
      avatar: "/photos/nophoto.jpeg",
      audio: "/media/1.mp3",
      duration: "0:42",
      text: "Юзимни кўрсатишга уяламан, лекин овозимни ёзиб олсангиз майли. Тўғриси, аввалига ишонмагандим. Лекин 3-кундан бошлаб ичимдан нималар тушганини кўриб даҳшатга тушдим. Мана шу майда гижжалар мени йиллаб қийнаган экан. Ҳозир енгилман, жудаям хурсандман.",
      time: "Кеча"
    },
    {
      name: "Замира опа",
      avatar: "/photos/nophoto.jpeg",
      audio: "/media/2.mp3",
      duration: "0:15",
      text: "Ўғлим 10 ёшда, жуда озғин, иштаҳаси йўқ эди. Доктор тавсияси билан Wormstop бердим. Ишонмайсиз, эрталаб тувакда гижжаларни кўриб ўзим қўрқиб кетдим. Боламни рангига қон кирди, иштаҳаси очилиб қолди ҳозир.",
      time: "Кеча"
    },
    {
      name: "Отабек",
      avatar: "/photos/nophoto.jpeg",
      audio: "/media/4.mp3",
      duration: "0:28",
      text: "Фарзандларим учун олгандим. 5-кунга келиб катта натижа кўрдик. Энг қизиғи, кичик қизимдаги оқ доғлар ҳам йўқолишни бошлади. Буни ҳаммага тавсия қиламан, ҳақиқатдан ёрдам бераркан.",
      time: "27.01.2025"
    },
    {
      name: "Сарвар",
      avatar: "/photos/20.jpg",
       text: "Мен ҳайрон қолдим, оддий гиёҳлардан шунчалик натижа бўлади деб ўйламагандим. Қиммат дорилардан кўра минг марта яхши экан.",
       time: "26.01.2025"
    },
    {
      name: "Султон Амиров",
      avatar: "/photos/2.jpg",
      text: "Ичакларимда доим дам бўларди, овқат ҳазм бўлиши қийин эди. 10 кун ичдим, ҳозир соатдек ишлаяпти ҳаммаси. Енгилликни ҳис қилиш қанчалик ёқимли!",
      time: "13.01.2025"
    },
    {
      name: "Малика Азизова",
      avatar: "/photos/21.jpg",
      text: "Турмуш ўртоғим билан бирга қабул қилдик. У кишининг уйқуси яхшиланди, мени эса бош оғриқларим қолди. Паразитлар шунча касалликка сабаб бўлишини билмаган эканмиз.",
      time: "11.01.2025"
    }
  ]

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Шарҳлар</h2>
          <div className="w-20 h-1 bg-green-600"></div>
          <p className="text-gray-500 mt-2">
            Сўнгги 24 соат ичида 14 та янги шарҳ қолдирилди
          </p>
        </div>

        {/* Comments List */}
        <div className="space-y-4">
          {comments.map((comment, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex gap-4">
                {/* Avatar */}
                <div className="flex-shrink-0">
                  <img 
                    src={comment.avatar} 
                    alt={comment.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-1">
                    {comment.name}
                  </h3>

                  {/* Audio Player */}
                  {comment.audio && (
                    <div className="mb-3">
                      <VoiceMessage src={comment.audio} duration={comment.duration || "0:30"} />
                    </div>
                  )}

                  {/* Text */}
                  {comment.text && (
                    <p className="text-gray-700 text-sm leading-relaxed mb-2">
                      {comment.text}
                    </p>
                  )}

                  {/* Image */}
                  {comment.image && (
                    <div className="mt-3 mb-2">
                      <img 
                        src={comment.image} 
                        alt="Натижа"
                        className="rounded-lg max-w-xs shadow-md"
                      />
                    </div>
                  )}

                  {/* Time */}
                  <p className="text-xs text-gray-500 mt-2">
                    {comment.time}
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
