import type { Metadata } from 'next'
import HomeContent from '../../components/HomeContent'
import StopSaver from '../../components/StopSaver'

export const metadata: Metadata = {
  title: 'Wormstop - Дунёвий Паразитология Маркази',
  description: 'Шошилинч хабар: Паразитлардан бутунлай халос қилувчи янги восита.',
}

export default function DynamicPage({ params }: { params: { slug: string } }) {
  return (
    <>
      <StopSaver stop={params.slug} />
      <HomeContent />
    </>
  )
}
