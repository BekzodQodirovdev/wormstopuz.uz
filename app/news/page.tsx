import type { Metadata } from 'next'
import Header from '../../components/Header'
import OrderForm from '../../components/OrderForm'
import NewsTestimonials from '../../components/NewsTestimonials'
import Link from 'next/link'
import PromoPopup from '../../components/PromoPopup'
import FixedBottomCTA from '../../components/FixedBottomCTA'

export const metadata: Metadata = {
  title: 'Гижжалар ва паразитлар — кўзга кўринмас, лекин жуда хавфли душман',
  description: 'Уларни 3 кунда йўқ қилса бўлади',
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

        <article className="max-w-4xl mx-auto px-4 py-12">
          {/* Article Header */}
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-4 leading-tight">
            Гижжалар ва паразитлар — кўзга кўринмас, лекин жуда хавфли душман. Уларни 3 кунда йўқ қилса бўлади
          </h1>
          
          <p className="text-center text-gray-600 mb-8">
            <strong>Муаллиф:</strong> Нодира Абдуллаева
          </p>

          {/* Main Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6">
              Кўпчилик паразитларни оддий "ичакдаги гижжалар" деб ҳисоблайди. Аммо аслида улар анча кўп ва жиддий муаммоларни келтириб чиқаради. Статистикага кўра, бугунги кунда дунё аҳолисининг ярми — яъни тахминан 5 миллиард одам танасида паразитлар билан яшамоқда. Энг хавфлиси — ахолининг кўпчилиги бундан умуман бехабар.
            </p>

            {/* Video 1 */}
            <div className="my-8 rounded-lg overflow-hidden shadow-lg">
              <video 
                loop 
                muted 
                autoPlay 
                playsInline 
                preload="auto" 
                className="w-full"
              >
                <source src="/videos/1.mp4" type="video/mp4" />
                Браузерингиз видеони қўллаб-қувватламайди.
              </video>
            </div>

            <p className="text-gray-700 leading-relaxed mb-8">
              Доктор Нодира Абдуллаева айтишларича, инсон ўз танасида гижжа ёки бошқа паразитлар борлигини йиллар давомида сезмаслиги мумкин. Улар аста-секинлик билан иммунитетни заифлаштиради, ички аъзолар фаолиятини бузади ва охир-оқибат оғир хасталикларга сабаб бўлади.
            </p>
          </div>

          {/* Doctor Profile Card */}
          <div className="bg-gray-100 rounded-lg p-6 my-8">
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <img 
                src="/photos/nodira-doctor.jpg" 
                alt="Нодира Абдуллаева" 
                className="w-32 h-32 rounded-full object-cover shadow-lg"
              />
              <div>
                <h3 className="text-2xl font-bold mb-2">Нодира Абдуллаева</h3>
                <p className="text-gray-700">
                  26 йиллик амалиёт тажрибасига эга тиббиёт ва биология фанлари номзоди. Wormstop маҳсулоти асосчиси ва раҳбари. Паразитология соҳасида қатор илмий тадқиқотлар олиб борган мутахассис
                </p>
              </div>
            </div>
          </div>

          {/* Article Sections */}
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
                Гижжани хавфи каттами?
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Паразитлар фақатгина ичакдаги гижжалар билан чекланмайди — улар жигар, мия, ўпка, қон томирлари ва ошқозонда ҳам яшайди. Бу кўринмас хатарлар саратон, юрак хасталиклари, руҳий бузилишлар ва ҳатто ўлимгача олиб бориши мумкин. Мутахассислар таъкидлашича, ҳар бир инсон танасида паразитлар мавжуд бўлиш эҳтимоли 97–98% ни ташкил этади
              </p>

              {/* Video 2 */}
              <div className="my-8 rounded-lg overflow-hidden shadow-lg">
                <video 
                  loop 
                  muted 
                  autoPlay 
                  playsInline 
                  preload="auto" 
                  className="w-full"
                >
                  <source src="/videos/2.mp4" type="video/mp4" />
                  Браузерингиз видеони қўллаб-қувватламайди.
                </video>
              </div>
            </section>

            <section className="bg-yellow-50 border-l-4 border-yellow-500 p-6 my-8">
              <h3 className="text-xl font-bold mb-4">Болаларда энг кўп учрайдиган белгилар</h3>
              <p className="text-gray-700 mb-4">
                Айнан болалар паразитлар таъсирига нисбатан энг заиф қатлам ҳисобланади. Агар фарзандингизда қуйидаги ҳолатлар кузатилаётган бўлса, жиддий эътибор беринг:
              </p>

              {/* Children Image */}
              <div className="my-6">
                <img 
                  src="/photos/bolalar_img.jpg" 
                  alt="Болалардаги аломатлар" 
                  className="mx-auto w-full md:w-11/12 rounded-lg shadow-md"
                />
              </div>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  Доимий иштахасизлик
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  Тананинг озиб кетиши
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  Оғиздан ёқимсиз ҳид келиши
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  Тишларни ғичирлатиш (асосан тунги пайтда)
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  Терда тошмалар, қичишиш
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  Тез-тез шамоллаш
                </li>
              </ul>
              <p className="text-gray-600 text-sm mt-4">
                Бу каби аломатлар кўпинча оддий касаллик деб қабул қилинади. Лекин паразитлар ҳақида ўйламайди ва муаммо тобора кучайиб бораверади.
              </p>
            </section>

            {/* Video 3 */}
            <div className="my-8 rounded-lg overflow-hidden shadow-lg">
              <video 
                loop 
                muted 
                autoPlay 
                playsInline 
                preload="auto" 
                className="w-full"
              >
                <source src="/videos/3.mp4" type="video/mp4" />
                Браузерингиз видеони қўллаб-қувватламайди.
              </video>
            </div>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
                Катталар учун ҳам бефарқ бўлмаслик керак
              </h2>
              <p className="text-gray-700 mb-4">Катталарда ҳам паразитлар ўзини турлича намоён қилади:</p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  Танадаги папилломалар ва сигаллар
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  Доимий чарчоқ, уйқусизлик
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  Оғиздан ёқимсиз ҳид
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  Терда аллергик тошмалар
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  Депрессия, тушкунлик
                </li>
              </ul>
              <p className="text-gray-700 mt-4">
                Бунинг барчаси танангизда яширинча яшаб турган паразитларнинг оқибати бўлиши мумкин.
              </p>
            </section>

            <section className="bg-red-50 border-l-4 border-red-600 p-6 my-8">
              <h3 className="text-xl font-bold mb-3">Дорихоналар ҳамма вақт ёрдам бера олмайди</h3>
              <p className="text-gray-700 mb-4">
                Дорихоналарда сотиладиган кўплаб дорилар паразитларни фақат вақтинча фалаж қилади. Улар танадан чиқмайди, ёки фақат айрим турларига таъсир қилади. Лекин ҳар куни янги турдаги паразитлар пайдо бўлмоқда ва уларни тўлиқ йўқотиш учун комплекс ёндошув керак.
              </p>
              <p className="text-gray-700">
                Шунинг учун сизга организмни тўлиқ тозаловчи, иммунитетни тикловчи ва қайта зарарланишдан ҳимоя қилувчи восита керак. Шу сабабли беморларга табиий ва самарали восита – <strong>Wormstop</strong>ни тавсия қиламиз.
              </p>
            </section>

            {/* Product Section */}
            <section className="py-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900 text-center">
                Паразитларга қарши янги авлод воситаси
              </h2>
              
              <div className="text-center mb-6">
                <a href="#contact">
                  <img 
                    src="/product.png" 
                    alt="Wormstop" 
                    className="mx-auto w-64 md:w-80"
                  />
                </a>
              </div>

              <div className="text-center mb-8">
                <a 
                  href="#contact" 
                  className="inline-block bg-red-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-red-700 transition-colors"
                >
                  Буюртма бериш
                </a>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold mb-4">Wormstop бу:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 text-xl flex-shrink-0">✓</span>
                    <span className="text-gray-700">Бу табиий маҳсулот, аллергия ва ножўя таъсирларга сабаб бўлмайди</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 text-xl flex-shrink-0">✓</span>
                    <span className="text-gray-700">Барча турдаги паразитлар ва уларнинг тухумларини танадаги барча аъзолардан чиқариб ташлайди</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 text-xl flex-shrink-0">✓</span>
                    <span className="text-gray-700">Папиллома ва бошқа тошмалардан халос қилади</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 text-xl flex-shrink-0">✓</span>
                    <span className="text-gray-700">Иммунитетни мустаҳкамлайди</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 text-xl flex-shrink-0">✓</span>
                    <span className="text-gray-700">Оғиздаги ёқимсиз ҳидни бартараф этади</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 text-xl flex-shrink-0">✓</span>
                    <span className="text-gray-700">3 ёшдан бошлаб истемол қилиш мумкин</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 text-xl flex-shrink-0">✓</span>
                    <span className="text-gray-700">Болалар ва катталар учун хавфсиз ва самарали восита</span>
                  </li>
                </ul>
                <p className="mt-6 text-gray-700 font-semibold">
                  Wormstop нафақат даволайди, балки организмни ҳимоя қилади. Уни профилактика мақсадида ҳам қабул қилиш мумкин.
                </p>
              </div>
            </section>

            {/* Urgency Section */}
            <section className="bg-yellow-50 border-2 border-yellow-400 rounded-lg p-6 my-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">
                Нега айнан ҳозир буюртма бериш керак?
              </h2>
              <p className="text-gray-700 mb-6">
                Паразитлар сиз, фарзандингиз ёки яқинларингиз танасида бўлиши мумкин. Улар ҳар куни кўпаймоқда. Агар ҳозир чора кўрилмаса, уларни йўқотиш кеч бўлиши мумкин. Ва бу жиддий касалликларга олиб келади.
              </p>

              <h3 className="text-xl font-bold mb-4 text-red-700">
                Фақат бугун — Wormstop учун 77% чегирма!
              </h3>
              <p className="text-gray-700 mb-4">
                Акция муддати чекланган. Бу имкониятни бой берманг. Буюртма бериш учун исм ва телефон рақамни қолдирсангиз кифоя:
              </p>

              <ol className="list-decimal list-inside space-y-2 text-gray-700 mb-4">
                <li>Сайтдаги шаклни тўлдиринг</li>
                <li>Мутахассисимиз сиз билан боғланади</li>
                <li>Маҳсулот уйингизгача мутлақо бепул етказиб берилади</li>
                <li>Тўловни фақат товарни олганингиздан кейин амалга оширасиз</li>
              </ol>

              <div className="bg-white border-2 border-red-500 rounded-lg p-4 text-center">
                <p className="text-gray-900">
                  <strong className="text-red-600">Wormstop учун акция фақат бугун!</strong><br />
                  Оригинал Wormstop препаратига фақат шу расмий сайт орқали буюртма беринг
                </p>
              </div>
            </section>
          </div>
        </article>

        {/* Order Form */}
        <section id="contact" className="py-12 bg-gray-50">
          <div className="max-w-2xl mx-auto px-4">
            <OrderForm />
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-12 bg-gradient-to-r from-red-600 to-red-700">
          <div className="max-w-4xl mx-auto px-4 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              Эътиборсиз қолдирманг — бу сизнинг соғлиғингиз ҳақида
            </h2>
            <p className="text-xl mb-6">
              <strong>Wormstop</strong> — бу оддий дори эмас, бу соғлиғингизни ҳимоя қилувчи табиий қалқон. Фарзандларингиз, ўзингиз ва яқинларингиз учун тўғри қарорни қабул қилинг.
            </p>
            <p className="text-2xl font-bold">
              Ҳозироқ ариза қолдиринг. Эрта бўлиб қолмасин.
            </p>
          </div>
        </section>

        {/* Testimonials */}
        <NewsTestimonials />

        {/* Back to Home */}
        <div className="text-center py-8 bg-white">
          <Link 
            href="/" 
            className="text-red-600 hover:text-red-700 font-semibold text-lg"
          >
            ← Бош саҳифага қайтиш
          </Link>
        </div>
      </main>
    </>
  )
}
