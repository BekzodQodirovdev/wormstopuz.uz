'use client'

interface Comment {
  name: string
  avatar: string
  text: string
  audio?: string
  image?: string
  time: string
}

export default function Comments() {
  const comments: Comment[] = [
    {
      name: "Робия",
      avatar: "/photos/nophoto.jpeg",
      audio: "/media/1.mp3",
      text: "2-3 Кунда майда гижжалар тушди",
      time: "28.01.2025"
    },
    {
      name: "Тургунова Замира",
      avatar: "/photos/nophoto.jpeg",
      audio: "/media/2.mp3",
      text: "10 Кунда 10 йошли фарзандларида майда гижжалардан халос бўлишди",
      time: "28.01.2025"
    },
    {
      name: "Холбека",
      avatar: "/photos/nophoto.jpeg",
      audio: "/media/3.mp3",
      text: "Мижозимизни Асаблари жойига келган",
      time: "27.01.2025"
    },
    {
      name: "Мадина",
      avatar: "/photos/nophoto.jpeg",
      audio: "/media/4.mp3",
      text: "Фарзандларида 5 чи кунда гижжалар кўпчисида тушган",
      time: "27.01.2025"
    },
    {
      name: "Хуснора",
      avatar: "/photos/nophoto.jpeg",
      audio: "/media/5.mp3",
      text: "1 хафтада фарзандларини иштахалари очилди",
      time: "27.01.2025"
    },
    {
      name: "Акбар",
      avatar: "/photos/nophoto.jpeg",
      audio: "/media/6.mp3",
      text: "Wormstop махсулот идан 7 кунда ок доғлари кетди",
      time: "26.01.2025"
    },
    {
      name: "Замира",
      avatar: "/photos/nophoto.jpeg",
      audio: "/media/7.mp3",
      text: "Фарзандларида 15 кунда инжикли лари кетиб иштахалари очилди",
      time: "26.01.2025"
    },
    {
      name: "Гулрух Жуманиезова",
      avatar: "/photos/nophoto.jpeg",
      audio: "/media/8.mp3",
      text: "",
      time: "25.01.2025"
    },
    {
      name: "Наргиза",
      avatar: "/photos/nophoto.jpeg",
      audio: "/media/9.mp3",
      text: "",
      time: "25.01.2025"
    },
    {
      name: "Саййора",
      avatar: "/photos/101.jpg",
      text: "Бу воситага буюртма бердим. Бўйним ва қўлтиғимда папилломалар кўп эди. Бешинчи куниёқ улар камайганини сездим. Шу билан бирга, ошқозон фаолияти яхшиланди. Энди профилактика мақсадида курсни ҳар 3 ойда такрорлаб турибман.",
      time: "24.01.2025"
    },
    {
      name: "Дилноза Вафоева",
      avatar: "/photos/89.jpg",
      text: "Ўзимга Wormstop буюртирдим, иккинчи куни келтириб беришди. Бўйнимда папилломалар роса кўп эди. Қабул қилувдим, ичакларимдан шунақа нарсалар чиқдики... Шу аҳволда қандоқ яшаган эканман-а?",
      image: "/photos/sd.jpg",
      time: "23.01.2025"
    },
    {
      name: "Азиза Қодиралиева",
      avatar: "/photos/88.jpg",
      text: "Менда бахтсизлик юз берди, боламнинг тувагида оқ чувалчанглар ғимирлаб юрганини кўрдим. Бир дугонам Wormstopни маслаҳат берди, мен дарҳол расмий сайтда буюртирдим ва биз оиламиз билан бир курс қабул қилдик. Кейин гижжаларга таҳлил топширдик. Ҳеч нима аниқланмади! Яъни, Wormstop бизни бутунлай даволади.",
      image: "/photos/011.jpg",
      time: "22.01.2025"
    },
    {
      name: "Фарид Раҳимов",
      avatar: "/photos/1.jpg",
      text: "Wormstop ичишни бошлаганимда, бундай самара беради, деб ўйламаган эдим. Қорин оғриқлари ўтиб кетди, нафас сиқмай қўйди, папилломалар йўқолди. Энди 53 ёш бўлсам-да 30 ёшли йигитлардан қолишмайман.",
      time: "21.01.2025"
    },
    {
      name: "Васила Султонова",
      avatar: "/photos/80.jpg",
      text: "Мен Wormstop қабул қилдим. Самараси ажойиб. Ўзимни ёш ва соғлом ҳис этдим. Иммунитетим яхшиланди, курсни қабул қилганимдан кейин ўтган 8 ой ичида бирон марта касал бўлмадим.",
      time: "20.01.2025"
    },
    {
      name: "Умида Абдуллаева",
      avatar: "/photos/82.jpg",
      text: "Яқинда одам паразитлари ҳақида биринчи каналдан кўрсатув кўргандим. Унда мана шу восита ҳақида айтишди.",
      time: "19.01.2025"
    },
    {
      name: "Бахтиёр Йўлдошев",
      avatar: "/photos/87.jpg",
      text: "Мен ҳам буюртирдим. Бир ҳафта давомида келтириб берамиз, деб ваъда беришди.",
      time: "18.01.2025"
    },
    {
      name: "Ботир Эргашев",
      avatar: "/photos/86.jpg",
      text: "Кўпдан бери бош оғриши ва баданимдаги папилломалардан азият чекаман. Wormstopни икки ҳафта ичувдим, ўтиб кетди.",
      time: "17.01.2025"
    },
    {
      name: "Сабина",
      avatar: "/photos/85.jpg",
      text: "Бувим паразитларни шувоқ ёрдамида чиқаришни ўргатди. Wormstopга буюртма бердим, энди ортиқлар билан муаммоим йўқ. Нархи арзон, қабул қилиш ҳам қулайроқ.",
      time: "16.01.2025"
    },
    {
      name: "Лола Ахмедова",
      avatar: "/photos/o25m.jpg",
      text: "Жуда қизиқ суҳбатингиз учун ташаккур! Одамларнинг кўзини очяпсизлар!",
      time: "15.01.2025"
    },
    {
      name: "Нигина Хайратова",
      avatar: "/photos/o16.jpg",
      text: "Нега Интернетда сотиляпти?",
      time: "14.01.2025"
    },
    {
      name: "Султон Амиров",
      avatar: "/photos/2.jpg",
      text: "Тавсияларга қўшиламан. Қабул қилганимда ичимдан шунақа нарсалар чиқдики, қўрқиб кетиб, пойтахтга сурвордим. Wormstop бўлмаганда борми, улар мени 2-3 йилдаёқ ўлдириб юборишарди.",
      time: "13.01.2025"
    },
    {
      name: "Хасан Лазизов",
      avatar: "/photos/20.jpg",
      text: "Мен буюртиргандим, курьер олиб келди, мен ҳаммасини текшириб, кейин пулини тўладим.",
      time: "12.01.2025"
    },
    {
      name: "Малика Азизова",
      avatar: "/photos/21.jpg",
      text: "Зўр восита. Эрим билан ичувдик, иккаламизнинг аҳволимиз сезиларли яхшиланди. Паразитлардан халос бўлганингда ўзингни бошқача ҳис этасан.",
      time: "11.01.2025"
    },
    {
      name: "Камила Рустамова",
      avatar: "/photos/o23.jpg",
      text: "Фикрномаларни ўқидим ва олиш керак, деган фикрга келдим. 22,000 UZS нархда сотилаётганидан фойдаланиб буюртма берайчи...",
      time: "10.01.2025"
    },
    {
      name: "Зухра Комронова",
      avatar: "/photos/o21.jpg",
      text: "Мендаям шунақа бўлган, доим ҳолсизланардим, папилломалар қийнаб қўйганди, шундай бир пайтда Wormstop учраб қолди. Бу мўъжизакор восита!",
      time: "09.01.2025"
    },
    {
      name: "Немат",
      avatar: "/photos/4.jpg",
      text: "Раҳмат. Тозаланиш керак. Бу ишни ҳеч қачон қилмагандим, аммо ҳозир паразитларсиз янада соғлом бўламан, деган фикрга келдим:)",
      time: "08.01.2025"
    }
  ]

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Шарҳлар</h2>
          <div className="w-20 h-1 bg-red-600"></div>
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
                      <audio 
                        controls 
                        preload="metadata"
                        className="w-full max-w-md h-10"
                      >
                        <source src={comment.audio} type="audio/mpeg" />
                        Браузерингиз аудио қўллаб-қувватламайди.
                      </audio>
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
