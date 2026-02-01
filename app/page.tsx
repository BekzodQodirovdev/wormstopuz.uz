import type { Metadata } from 'next'
import Header from '../components/Header'
import OrderForm from '../components/OrderForm'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Wormstop - Институт паразитологии',
  description: 'Теперь у любого есть возможность ПОЛНОСТЬЮ избавиться от ПАПИЛЛОМ',
}

export default function Home() {
  return (
    <>
      <Header />
      
      <main className="bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-red-50 to-white py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 leading-tight">
              ИЧАКЛАРДАГИ ПАРАЗИТ ВА ГИЖЖАЛАР САБАБЛИ!<br />
              БУ <span className="text-red-600">"ҚОТИЛЛАР"</span>НИ ЙЎҚ ҚИЛАМИЗ!
            </h1>
            
            <div className="max-w-4xl mx-auto">
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-8">
                <p className="text-gray-800 leading-relaxed">
                  <strong>Таҳририятдан:</strong> Статистика маълумотларига кўра, 1 миллиарддан зиёд киши ОПВ (одам папилломаси вируси) билан зарарланган! Сиз паразитлар ўлжасига айланганингизни пайқамай қолишингиз мумкин.
                </p>
              </div>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Тиббий паразитология ва тропик тиббиёт институтида инсон танасида папилломалар пайдо бўлишининг янги сабабини аниқлашди: бу паразитлар билан зарарланишдир. Яқинда якунланган тадқиқот маълумотларига биноан, паразитлар ҳаётий фаолияти маҳсулотлари заҳарли бўлиб, ошқозонда чиритувчи бактериялар ривожланиши учун қулай муҳит яратади.
              </p>

              <p className="text-lg text-gray-700 mb-8">
                Бугун шу хусусда РФ Паразитология Институти раҳбари Наиля Тагиева билан суҳбатлашамиз.
              </p>
            </div>
          </div>
        </section>

        {/* Doctor Profile */}
        <section className="py-12 bg-gray-100">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-center mb-6">Наиля Тагиева</h2>
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="md:w-1/3">
                  <img 
                    src="/photos/ichilov-doctor.jpg"
                    alt="Наиля Тагиева" 
                    className="rounded-lg shadow-md w-full"
                  />
                </div>
                <div className="md:w-2/3">
                  <p className="text-gray-700 leading-relaxed">
                    Доцент, тиббиёт фанлари номзоди - Е.И. Марциновский номли Тиббий паразитология ва тропик тиббиёт илмий-тадқиқот институтининг раҳбари. Молекуляр паразитологияга оид 60 дан зиёд илмий асар муаллифи.
                  </p>
                  <p className="text-gray-600 mt-4">
                    <strong>Иш тажрибаси:</strong> 21 йил
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Interview Content */}
        <section className="py-12">
          <div className="max-w-4xl mx-auto px-4">
            <div className="space-y-8">
              <div>
                <p className="text-lg font-semibold text-gray-900 mb-3">
                  — Наиля Тагиева, ассалому алайкум! Бош саволдан бошласам. Россия аҳолининг паразитлар билан зарарланиши бўйича биринчи ўринда турадими?
                </p>
                <p className="text-gray-700 leading-relaxed">
                  — Ҳа. Бунга ёмон экология, маъмурлар фаолиятсизлиги ва одамлар дардига бепарволик сабаб бўлмоқда.
                </p>
              </div>

              <div>
                <p className="text-lg font-semibold text-gray-900 mb-3">
                  — Наиля Тагиева, паразитлар билан зарарланиш ва оғиздан ёқимсиз ҳид келиши ўртасидаги боғлиқликка оид тадқиқот маълумотлари аниқми?
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  — Наиля Тагиева: Сўнгги изланишлар кўрсатишича, ошқозон ва жигар билан муаммолар ҳам оғиздан ёмон ҳид келишига сабаб бўларкан. Олимлар яна шуниям маълум қилишдики, бундай оддий симптомни назар-писанд қилмаслик ярамайди. Паразитлар билан зарарланиш деярли барча оғир касалликларни чақиради.
                </p>
                
                <div className="text-center my-6">
                  <img 
                    src="/photos/014.jpg" 
                    alt="Паразитлар" 
                    className="mx-auto w-full md:w-3/4 rounded-lg shadow-md"
                  />
                </div>
              </div>

              <div className="bg-red-50 border-l-4 border-red-600 p-6 my-8">
                <p className="text-gray-800 leading-relaxed">
                  Шахсан ўзим институтимиз тадқиқотларига тўла-тўкис ишонаман. Баданга тошган папилломалар жиддий касалликка айланади. <strong>Ўлимларнинг 92 фоизи паразитлар билан боғлиқ.</strong> "Табиий ўлимлар"нинг аксарияти - вужудимиздаги аъзолар ичида паразитлар фаолияти оқибатидир.
                </p>
              </div>

              <div>
                <p className="text-lg font-semibold text-gray-900 mb-3">
                  — Одатда паразит деганда оддий гижжаларни назарда тутишади, уларнинг папилломалар пайдо бўлишига ва ҳатто инсон ўлимига қандай дахли бор?
                </p>
                <p className="text-gray-700 leading-relaxed">
                  — Аслини олганда, инсон паразитлари - фақат гижжалар деб ҳисоблаш катта хато. Турли аъзоларда яшайдиган турли-туман паразитлар сони беҳисоб. Қолаверса, гижжалар ҳам, аниқроғи - гельминтлар ўта хавфли. Улар ичакларга шикаст етказиб, уларнинг чиришига ва алал-оқибат ўлимга олиб келади.
                </p>
              </div>

              {/* Medical Warning Images Section */}
              <div className="bg-gray-50 rounded-lg p-6 my-8">
                <p className="text-center text-gray-700 font-semibold mb-6">
                  Сурат марказида: одамга чувалчанг-паразитдан ўтган хавфли ўсма ҳужайралари
                </p>
                
                <div className="mb-8 text-center">
                  <img 
                    src="/photos/006.jpg" 
                    alt="Паразит ўсма ҳужайралари" 
                    className="mx-auto w-full md:w-1/2 rounded-lg shadow-md"
                  />
                </div>

                <p className="text-gray-700 text-sm text-center mb-8 italic">
                  Яна бир кенг тарқалган ҳолат - инсон миясининг паразитлар билан зарарланишидир. Бу эса неврозларга, тез чарчашга, тажангликка ва кайфиятнинг кескин ўзгаришига олиб келади.
                </p>

                <p className="text-gray-600 text-sm text-center mb-4">
                  Биз ёришларга оид фотоархив юритяпмиз, бунда аъзолардаги паразитлар аниқланган. <strong className="text-red-600">(Диққат! 18+)</strong>
                </p>

                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <p className="text-center font-semibold text-sm mb-3">
                      Одамнинг олиб ташланган ўт қопидаги чувалчанглар:
                    </p>
                    <img 
                      src="/photos/007.jpg" 
                      alt="Ўт қопидаги чувалчанглар" 
                      className="w-full rounded-lg shadow-md"
                    />
                  </div>

                  <div>
                    <p className="text-center font-semibold text-sm mb-3">
                      Одам бош миясидаги саратон ўсмасини чақирган паразитлар:
                    </p>
                    <img 
                      src="/photos/008.jpg" 
                      alt="Миядаги паразитлар" 
                      className="w-full rounded-lg shadow-md"
                    />
                  </div>

                  <div>
                    <p className="text-center font-semibold text-sm mb-3">
                      Юрак тўхташига олиб келган чувалчанглар:
                    </p>
                    <img 
                      src="/photos/009.jpg" 
                      alt="Юракдаги чувалчанглар" 
                      className="w-full rounded-lg shadow-md"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Order Form Section */}
        <section id="order" className="py-16 bg-gray-50">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">
              Ҳозироқ буюртма бериш
            </h2>
            <OrderForm />
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-red-600 to-red-700 py-16">
          <div className="max-w-4xl mx-auto px-4 text-center text-white">
            <h2 className="text-4xl font-bold mb-4">
              Бугун ўз соғлиғингизни ўзгартиринг!
            </h2>
            <p className="text-xl mb-8">
              Миллионлаб одамлар Wormstop ёрдамида паразитлардан қутулди
            </p>
            <a 
              href="#order" 
              className="inline-block bg-white text-red-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
            >
              Ҳозироқ буюртма бериш
            </a>
          </div>
        </section>
      </main>
    </>
  )
}
