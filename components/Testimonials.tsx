'use client'

interface Testimonial {
  name: string
  location: string
  audio: string
  text: string
  initial: string
}

export default function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      name: "Зулайхо",
      location: "Тошкент",
      audio: "/media/1.mp3",
      text: "Беморимиз фарзандларида қоринда оғриқлар, оғиз ҳидланиши, бош оғриқлари, кўзда ёшланиш каби муаммолар билан мурожаат қилган эдилар. фарзандларида гижжа билан боғлиқ муаммолар борлигини тушунтирган ҳолда Wormstop муолажасидан чиқариб берган эдик. 1-куннинг ўзидаёқ гельминтлар тўкилишни бошлади",
      initial: "З"
    },
    {
      name: "Замира",
      location: "Самарқанд",
      audio: "/media/7.mp3",
      text: "Ўсмир ёшли ва кичик ёшли фарзандларида даволаш ишлари олиб борилмоқда. Ўсмир ёшдаги фарзандларидаги (қиз бола) кузатилаётган баъзи муаммолар бор эди. Энди эса йўқ 😊",
      initial: "З"
    },
    {
      name: "Отабек",
      location: "Фарғона шаҳри",
      audio: "/media/2.mp3",
      text: "📍Фарғона шаҳридан беморимиз Wormstop капсулалари ёрдамида гижжадан қутулишга муваффақ бўлди! Папилломалар йўқолди, тоғни талқон қиладиган қувват тикланди, оғиздаги нохуш ҳидлар йўқолди",
      initial: "О"
    }
  ]

  return (
    <section className="py-12 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">
          Изоҳлар ва натижалар
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Ҳақиқий беморлар тажрибаси
        </p>
        
        <div className="space-y-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-gray-50 rounded-lg p-6 border border-gray-200 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center text-red-600 font-bold text-xl flex-shrink-0">
                  {testimonial.initial}
                </div>
                
                <div className="flex-1">
                  <div className="font-semibold text-gray-900 mb-1">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-600 mb-3">
                    {testimonial.location}
                  </div>
                  
                  <audio 
                    controls 
                    preload="metadata" 
                    className="w-full mb-4 h-10"
                  >
                    <source src={testimonial.audio} type="audio/mpeg" />
                    Your browser does not support the audio element.
                  </audio>
                  
                  <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
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
