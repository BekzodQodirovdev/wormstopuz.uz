import type { Metadata } from 'next'
import Header from '../../components/Header'
import OrderForm from '../../components/OrderForm'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Гижжалар ва паразитлар — кўзга кўринмас, лекин жуда хавфли душман',
  description: 'Уларни 3 кунда йўқ қилса бўлади',
}

export default function NewsPage() {
  return (
    <>
      <Header />
      
      <main className="bg-white">
        {/* Fixed Header Button */}
        <a 
          href="#contact" 
          className="fixed top-4 right-4 z-50 bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors shadow-lg text-sm md:text-base"
        >
          Буюртманома қолдириш (-77% чегирма)
        </a>

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
                src="/doctor.jpg" 
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

            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
                Оддий дори воситалари етарли эмас
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Дорихоналарда сотиладиган кўплаб дорилар паразитларни фақат вақтинча фалаж қилади. Улар танадан чиқмайди, ёки фақат айрим турларига таъсир қилади. Шунинг учун сизга организмни тўлиқ тозаловчи, иммунитетни тикловчи ва қайта зарарланишдан ҳимоя қилувчи восита керак.
              </p>
              <p className="text-gray-700 mt-4">
                Шу сабабли беморларга табиий ва самарали восита – <strong className="text-red-600">Wormstop</strong>ни тавсия қиламиз
              </p>
            </section>

            {/* Product Section */}
            <section className="bg-gradient-to-br from-red-50 to-orange-50 rounded-lg p-8 my-12">
              <h2 className="text-3xl font-bold text-center mb-6 text-gray-900">
                Паразитларга қарши янги авлод воситаси
              </h2>
              <div className="text-center">
                <a href="#contact">
                  <img 
                    src="/product.png" 
                    alt="Wormstop" 
                    className="mx-auto w-64 mb-6 hover:scale-105 transition-transform"
                  />
                </a>
                <a 
                  href="#contact" 
                  className="inline-block bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-700 transition-colors shadow-lg"
                >
                  Буюртма бериш
                </a>
              </div>

              <div className="mt-8">
                <p className="font-bold text-lg mb-4">Wormstop бу:</p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 text-xl">✓</span>
                    Табиий махсулот, аллергия ва ножўя таъсирларга сабаб бўлмайди
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 text-xl">✓</span>
                    Барча турдаги паразитлар ва уларнинг тухумларини чиқариб ташлайди
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 text-xl">✓</span>
                    Папиллома ва бошқа тошмалардан халос қилади
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 text-xl">✓</span>
                    Иммунитетни мустаҳкамлайди
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 text-xl">✓</span>
                    Оғиздаги ёқимсиз ҳидни бартараф этади
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 text-xl">✓</span>
                    3 ёшдан бошлаб истеъмол қилиш мумкин
                  </li>
                </ul>
              </div>
            </section>

            <section className="bg-red-50 border-2 border-red-600 rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-4 text-red-600 text-center">
                Фақат бугун — Wormstop учун 77% чегирма!
              </h2>
              <p className="text-gray-700 text-center">
                Акция муддати чекланган. Бу имкониятни бой берманг!
              </p>
            </section>
          </div>
        </article>

        {/* Order Section */}
        <section id="contact" className="py-16 bg-gray-50">
          <div className="max-w-3xl mx-auto px-4">
            <OrderForm />
          </div>
        </section>

        {/* Back Button */}
        <div className="text-center py-12">
          <Link 
            href="/" 
            className="inline-block bg-gray-200 text-gray-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
          >
            Асосий саҳифага қайтиш
          </Link>
        </div>
      </main>
    </>
  )
}
