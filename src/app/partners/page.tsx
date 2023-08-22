'use client'

// components
import Banner from '@/components/HeadBanner/Banner'
import PartnerBox from '@/components/Partner/PartnerBox'
// data
import { streamersData } from '@/data/streamerData'


export default function page() {
  return (
    <>
      <Banner text='Our Casters' />
      <section className="flex flex-col gap-12">
        {streamersData.map((item) => (<PartnerBox key={item.id} item={item} />))}
      </section>
    </>
  )
}
