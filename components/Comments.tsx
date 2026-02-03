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
      name: "Робия",
      avatar: "/photos/nophoto.jpeg",
      audio: "/media/1.mp3",
      text: "2–3 кунда майда гижжалар туша бошлади. Ҳозир ўзимни енгил ҳис қиляпман.",
      time: "Бугун"
    },
    {
      name: "Тургунова Замира",
      avatar: "/photos/nophoto.jpeg",
      audio: "/media/2.mp3",
      text: "10 кунда 10 ёшли фарзандимдаги майда гижжалардан халос бўлдик. Иштаҳаси ҳам яхшиланди.",
      time: "Бугун"
    },
    {
      name: "Холбека",
      avatar: "/photos/nophoto.jpeg",
      audio: "/media/3.mp3",
      text: "Мижозимизнинг асаблари жойига келди, уйқуси ҳам яхшиланди.",
      time: "Бугун"
    },
    {
      name: "Мадина",
      avatar: "/photos/nophoto.jpeg",
      audio: "/media/4.mp3",
      text: "Фарзандларимда 5-кундан бошлаб гижжалар кўп миқдорда туша бошлади.",
      time: "Кеча"
    },
    {
      name: "Хуснора",
      avatar: "/photos/nophoto.jpeg",
      audio: "/media/5.mp3",
      text: "1 ҳафтада фарзандларимнинг иштаҳаси очилди, овқатга қизиқиши қайтди.",
      time: "Кеча"
    },
    {
      name: "Акбар",
      avatar: "/photos/nophoto.jpeg",
      audio: "/media/6.mp3",
      text: "Wormstopдан 7 кунда оқ доғлар кетди.",
      time: "Кеча"
    },
    {
      name: "Замира",
      avatar: "/photos/nophoto.jpeg",
      audio: "/media/7.mp3",
      text: "15 кунда фарзандларимда инжиқлик кетиб, иштаҳалари очилди.",
      time: "27.01.2025"
    },
    {
      name: "Гулрух Жуманиезова",
      avatar: "/photos/nophoto.jpeg",
      audio: "/media/8.mp3",
      text: "Аудио шарҳда ўз тажрибаси билан ўртоқлашди.",
      time: "26.01.2025"
    },
    {
      name: "Наргиза",
      avatar: "/photos/nophoto.jpeg",
      audio: "/media/9.mp3",
      text: "Аудио шарҳда натижаларини қисқача баён қилди.",
      time: "26.01.2025"
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
