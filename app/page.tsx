import type { Metadata } from 'next'
import Header from '../components/Header'
import OrderForm from '../components/OrderForm'
import Comments from '../components/Comments'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Wormstop - Дунёвий Паразитология Маркази',
  description: 'Шошилинч хабар: Паразитлардан бутунлай халос қилувчи янги восита.',
}

export default function Home() {
  return (
    <>
      <Header />
      
      <main className="bg-[#f8f9fa] font-sans text-gray-800">
        
        {/* Main Content Layout with Sidebar */}
        <div className="max-w-7xl mx-auto px-4 py-8 md:flex gap-8">
          
          {/* LEFT COLUMN: Main Article */}
          <div className="md:w-3/4">
            
            {/* Article Header */}
            <article className="bg-white p-6 md:p-10 shadow-sm rounded-xl mb-8 border border-gray-100">
              <div className="flex items-center gap-3 mb-4 text-xs font-bold text-green-700 uppercase tracking-widest">
                <span className="bg-green-100 px-2 py-1 rounded">Жаҳон Тиббиёти</span>
              </div>

              <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
                "ПАПИЛЛОМАЛАР — БУ ЎЛИМ БЕЛГИСИ!" — РОССИЯЛИК ОЛИМ ДАҲШАТЛИ ҲАҚИҚАТНИ ОШКОР ҚИЛДИ
              </h1>
              
              <div className="flex items-center gap-4 mb-8 border-b pb-6">
                <img src="/photos/kamola_yusupova.jpeg" alt="Author" className="w-12 h-12 rounded-full border-2 border-green-500 p-0.5 object-cover bg-gray-200" />
                <div>
                  <p className="font-bold text-gray-900 text-sm">Kamola Yusupova</p>
                </div>
              </div>

              {/* EDITOR NOTE */}
              <div className="bg-gray-50 p-6 rounded-lg mb-8 italic text-gray-700 border-l-4 border-gray-400">
                <p>
                  <strong className="text-gray-900 not-italic block mb-2">Таҳририятдан:</strong> 
                  Папиллома вируси (ОПВ) ва паразитлар ўртасидаги боғлиқлик илк бор исботланди. Бугун студиямизда жаҳонга машҳур паразитолог, Женева Паразитология Институти раҳбари — Kamola Yusupova. У нима учун дорихонадаги дорилар энди таъсир қилмаслигини тушунтириб беради.
                </p>
              </div>

              {/* INTERVIEW CONTENT */}
              <div className="prose prose-lg max-w-none text-gray-800">
                
                {/* Q1 */}
                <p className="font-bold text-gray-900 text-xl pl-4 mb-4 border-l-4 border-green-500">
                  — Доктор Kamola Yusupova, хуш келибсиз. Нега айнан ҳозир паразитлар мавзуси бунчалик долзарб бўлиб қолди?
                </p>
                <p>
                  — Раҳмат. Гап шундаки, кўпчилик ўзини "соғломман" деб ўйлайди, лекин аслида уларнинг ичида "қотиллар" яшаяпти. Бизнинг сўнгги тадқиқотларимиз шуни кўрсатдики, <span className="bg-green-100 px-1 font-semibold">инсон ўлимларининг 92% и у ёки бу шаклда паразитлар билан зарарланишга бориб тақалади.</span>
                </p>
                <p className="mb-6">
                  Бу нафақат гижжалар, балки юрак, жигар, ҳатто мияда яшовчи микро-организмлардир. Одамлар юрак хуружи ёки инсультдан ўлдим деб ўйлашади, аслида эса сабаб — йиллар давомида аъзоларни емирган паразитлардир.
                </p>

                {/* PLACEHOLDER: SHOCKING STATS */}
                {/* SHOCKING STATS IMAGE */}
                <div className="my-8" role="region" aria-label="Statistics showing 92% of deaths linked to parasites">
                  <img 
                    src="/photos/stats_graph.png" 
                    alt="Статистика: 92% ўлим ҳолатлари паразитлар билан боғлиқ" 
                    className="w-full rounded-lg shadow-md border border-gray-200"
                  />
                  <p className="text-center text-sm text-gray-500 mt-2 italic">
                    Жаҳон соғлиқни сақлаш ташкилотининг сўнгги маълумотлари
                  </p>
                </div>

                <p>
                  Агар эътибор берсангиз, ҳозир онкология марказлари тўлиб тошган. Бунинг асл сабаби нима? Ичакда йиллар давомида йиғилиб қолган ва қонга сўрилиб турган паразит токсинлари! Улар ҳужайраларни заҳарлайди ва ўсимталар пайдо бўлишига олиб келади.
                </p>

                {/* Q2 */}
                <p className="font-bold text-gray-900 text-xl pl-4 mb-4 border-l-4 border-green-500">
                   — Кўпчилик "паразит" деганда оддий гижжаларни тушунади. Бу қанчалик тўғри?
                </p>
                <p>
                  — Бу энг катта хато! Гижжалар — бу айсбергнинг учи холос. Паразитлар қон томирларини тўсиб қўяди, юрак хуружига (инфаркт), жигар циррозига ва ҳатто саратонга (рак) олиб келади.
                </p>
                <p>
                  Масалан, терингиздаги **ПАПИЛЛОМАЛАР** — бу шунчаки косметик нуқсон эмас. Бу танангизнинг: "Мен зарарландим! Ёрдам беринг!" деган қичқириғидир. 
                </p>

                {/* PLACEHOLDER: PAPILLOMA EXAMPLES */}
                {/* PAPILLOMA EXAMPLES IMAGE */}
                <div className="my-8" role="region" aria-label="Warning signs: Papillomas on skin">
                  <img 
                    src="/photos/papilloma_warning.png" 
                    alt="Папилломалар — хавфли белги" 
                    className="w-full rounded-lg shadow-md border border-gray-200"
                  />
                  <p className="text-center text-sm text-gray-500 mt-2 italic">
                    Агар танангизда шундай ўсимталар бўлса, дарҳол чора кўринг!
                  </p>
                </div>

                <p>
                   Агар сизнинг бўйнингиз ёки қўлтиғингизда папилломалар бўлса, демак ичакларингизда allaqachon минглаб паразитлар кўпаймоқда. Улар ҳар куни минглаб тухум қўяди ва аъзоларингизни ич-ичидан ейишни бошлайди.
                </p>

                {/* Q3 */}
                <p className="font-bold text-gray-900 text-xl pl-4 mb-4 border-l-4 border-green-500">
                  — Даҳшат! Хўш, бундан қандай ҳимояланиш мумкин? Дорихоналарда дорилар кўпку? Нега айнан Wormstop ни тавсия қиляпсиз?
                </p>
                <p>
                   — Дорихонадаги воситаларга келсак... Уларнинг кўпи эскирган ёки фақат жигарни заҳарлайди. Биз европада аллақачон кимёвий "бомба"лардан воз кечганмиз.
                </p>
                <p>
                  Ҳозирда Женева институти ва маҳаллий олимлар томонидан тасдиқланган табиий комплекс — бу <strong>Wormstop</strong>.
                </p>
                <p>
                  Бизнинг мақсадимиз кимёвий заҳарларсиз, фақат табиий гиёҳлар кучи билан паразитларни йўқ қилиш эди.
                </p>
                <p>
                  Ва биз буни уддаладик. <strong>Wormstop</strong> — бу Швейцария ва Ўзбекистон олимларининг ҳамкорликдаги инқилобий ишланмаси.
                </p>

                 {/* PLACEHOLDER: PRODUCT HERO */}
                 {/* Product Image removed as per request - Text content updated below */}
                
                <div className="bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-xl border border-green-200 my-8 shadow-sm">
                  <h3 className="font-extrabold text-2xl text-green-800 mb-4 text-center">Wormstop нега бунчалик самарали?</h3>
                  <ul className="space-y-4 text-lg">
                    <li className="flex items-start gap-3">
                        <span className="flex-shrink-0 bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center font-bold">✓</span>
                        <span><strong>Кучли таркиб:</strong> Саримсоқ пиёз, Қовоқ уруғлари, Тансий ўти, Аччиқ шувоқ ва Сабзи экстрактлари.</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="flex-shrink-0 bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center font-bold">✓</span>
                        <span><strong>Фаллажлайди ва ҳайдайди:</strong> Қовоқ ва Тансий паразитларни фалажлайди, ичаклар перисталтикаси эса уларни ташқарига чиқариб ташлайди.</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="flex-shrink-0 bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center font-bold">✓</span>
                        <span><strong>Тухум қобиғини бузади:</strong> Саримсоқ таркибидаги аллитсин ва шувоқ паразит тухумларини йўқ қилади.</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="flex-shrink-0 bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center font-bold">✓</span>
                        <span><strong>Витамин ва Иммунитет:</strong> Сабзи концентрати (B, D витаминлари) организмни тиклайди, соч ва тирноқларни мустаҳкамлайди.</span>
                    </li>
                  </ul>
                </div>

                <p>
                  Клиник синовларда 5000 дан ортиқ бемор қатнашди. Натижалар шунчалик ҳайратланарли эдики, кўпчилик шифокорлар аввалига ишонишмади. Лекин таҳлиллар ёлғон гапирмайди: <strong>98% ҳолатда паразитлар бутунлай йўқолди</strong>, қолган 2% да эса сезиларли камайиш кузатилди.
                </p>

                {/* BEFORE / AFTER SECTION */}
                <div className="my-10">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Сўзлардан кўра, натижаларни кўринг:</h3>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Before */}
                    <div className="bg-gray-50 p-3 rounded-xl border border-gray-200">
                      <div className="relative mb-3">
                         <span className="absolute top-2 left-2 bg-gray-600 text-white text-xs font-bold px-2 py-1 rounded">ДАВОЛАНИШДАН ОЛДИН</span>
                         {/* Generated Image */}
                         <img src="/photos/before_treatment.png" alt="Даволанишдан олдин" className="w-full h-64 object-cover rounded-lg grayscale filter" />
                      </div>
                      <p className="text-sm text-gray-700 font-medium">
                        Бемор 45 ёшда. Доимий чарчоқ, теридаги папилломалар ва кўз остидаги қора доғлар.
                      </p>
                    </div>

                    {/* After */}
                    <div className="bg-green-50 p-3 rounded-xl border border-green-100">
                      <div className="relative mb-3">
                         <span className="absolute top-2 left-2 bg-green-600 text-white text-xs font-bold px-2 py-1 rounded">30 КУНДАН КЕЙИН</span>
                         {/* Generated Image */}
                         <img src="/photos/after_treatment.png" alt="Даволанишдан кейин" className="w-full h-64 object-cover rounded-lg" />
                      </div>
                      <p className="text-sm text-gray-700 font-medium">
                        Айни шу бемор. Тери тозаланган, папилломалар тўкилиб тушди. Энергияси тикланди.
                      </p>
                    </div>
                  </div>
                </div>

                {/* PLACEHOLDER: MORE RESULTS */}
                {/* SOCIAL PROOF / REVIEWS IMAGE */}
                <div className="my-8" role="region" aria-label="Positive customer reviews">
                  <img 
                    src="/photos/social_proof.png" 
                    alt="Мижозларнинг ижобий фикрлари" 
                    className="w-full rounded-lg shadow-md border border-gray-200"
                  />
                  <p className="text-center text-sm text-gray-500 mt-2 italic">
                    Бизнинг мижозларимиз натижалардан мамнун
                  </p>
                </div>


                <p className="font-bold text-gray-900 text-xl pl-4 mb-4 border-l-4 border-green-500">
                  — Wormstop'ни қаердан олиш мумкин? Уни Ўзбекистонда топиш қийин деб эшитдим.
                </p>
                <p>
                  — Тўғри, бу восита экспорт учун чекланган. Дорихоналар бундай самарали воситани сотишни хоҳлашмайди, чунки агар одамлар бир мартада табиий йўл билан тузалса, ким кейин қиммат ва фойдасиз "химия"ни сотиб олади?
                </p>
                <p>
                  Лекин биз халқ учун ҳаракат қилдик. Махсус давлат дастури доирасида биз чекланган партияни олиб келдик.
                </p>
                
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-8">
                   <h4 className="text-red-700 font-bold text-xl mb-2">⚠ ШОШИЛИНГ! ОМБОРДА ОЗ ҚОЛДИ!</h4>
                   <p className="text-gray-800">
                     Ҳозирда талаб жуда юқори. Ҳар соатда 100 дан ортиқ буюртма тушмоқда. Агар соғлиғингиз сиз учун муҳим бўлса, ҳозироқ ҳаракат қилинг.
                   </p>
                </div>

                <p>
                  Орқага сурманг. Ҳозироқ <span className="text-green-700 font-bold">РАСМИЙ БУЮРТМА ШАКЛИНИ</span> тўлдиринг. Мутахассисларимиз сизга бепул маслаҳат беришади ва уйингизгача етказиб беришни ташкиллаштиришади. Тўловни эса маҳсулотни қўлингизга олгандан кейин қиласиз!
                </p>

              </div>
              
              {/* ORDER FORM IN ARTICLE */}
              <div id="order" className="mt-12 container mx-auto bg-white rounded-xl p-4 md:p-8 border border-gray-200 shadow-sm" role="region" aria-labelledby="order-form-heading">
                <div className="text-center mb-6">
                  <h3 id="order-form-heading" className="text-2xl font-bold text-green-700">РАСМИЙ БУЮРТМА ОЙНАСИ</h3>
                  <p className="text-sm text-gray-600">Швейцария сифати. Ўзбекистон бўйлаб етказиб бериш.</p>
                  
                  {/* Trust Badges */}
                  <div className="flex justify-center gap-6 my-6">
                    <img src="/photos/badge_swiss.png" alt="Swiss Quality Formula" className="h-20 w-auto drop-shadow-md hover:scale-105 transition-transform" />
                    <img src="/photos/badge_guarantee.png" alt="100% Quality Guaranteed" className="h-20 w-auto drop-shadow-md hover:scale-105 transition-transform" />
                  </div>
                </div>
                <OrderForm />
              </div>

            </article>

            {/* Comments below article */}
            <Comments />

          </div>


          {/* RIGHT COLUMN: Sidebar (Desktop) */}
          <aside className="hidden md:block w-1/4 space-y-8 sticky top-24 self-start h-fit">
            
            {/* Author Card */}
            <div className="bg-white p-6 shadow-sm rounded-lg border">
              <h4 className="font-bold text-gray-900 mb-4 border-b pb-2">Мутахассис ҳақида</h4>
              <img src="/photos/kamola_yusupova.jpeg" className="w-full rounded mb-4 bg-gray-200 h-48 object-cover" alt="Dr Cohen" />
              <h5 className="font-bold text-lg">Kamola Yusupova</h5>
              <p className="text-xs text-gray-500 mb-2">t.f.d., профессор</p>
              <p className="text-sm text-gray-600 leading-relaxed">
                30 йиллик тажрибага эга паразитолог. Европа Иттифоқининг "Соғлом миллат" мукофоти совриндори.
              </p>
            </div>

            {/* Trending Articles */}
            <div className="bg-white p-6 shadow-sm rounded-lg border">
              <h4 className="font-bold text-gray-900 mb-4 border-b pb-2">Кўп ўқилган</h4>
              <ul className="space-y-4">
                <li className="flex gap-2">
                  <div className="text-2xl font-bold text-gray-200">1</div>
                  <p className="text-sm font-semibold hover:text-green-600 cursor-pointer">Бўғим оғриқлари — бу туз эмас, паразитлар!</p>
                </li>
                <li className="flex gap-2">
                  <div className="text-2xl font-bold text-gray-200">2</div>
                  <p className="text-sm font-semibold hover:text-green-600 cursor-pointer">Жигарни уй шароитида қандай тозалаш мумкин?</p>
                </li>
                 <li className="flex gap-2">
                  <div className="text-2xl font-bold text-gray-200">3</div>
                  <p className="text-sm font-semibold hover:text-green-600 cursor-pointer">Бош оғриғи ва гижжалар: боғлиқлик борми?</p>
                </li>
              </ul>
            </div>

             {/* Ad Space Placeholder */}
             <div className="bg-gray-800 p-6 rounded-lg text-white text-center">
               <h3 className="font-bold text-xl mb-2">Wormstop</h3>
               <p className="text-sm mb-4">№1 восита</p>
               <a href="#order" className="inline-block bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded font-bold text-sm transition-colors" aria-label="Order Wormstop">Самарали ечим</a>
             </div>

          </aside>

        </div>

        {/* Mobile Sticky CTA */}
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-3 md:hidden z-50 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] flex items-center justify-between">
            <div className="text-xs">
              <div className="font-bold text-green-700">22.000 сўм</div>
              <div className="text-gray-500">Шошилинг!</div>
            </div>
           <a href="#order" className="bg-green-600 hover:bg-green-700 text-white px-8 py-2 rounded-full font-bold shadow-lg transition-colors" aria-label="Order now">
             БУЮРТМА
           </a>
        </div>

      </main>
    </>
  )
}
