'use client'

// components
import Banner from '@/components/HeadBanner/Banner'
import PartnerBox from '@/components/Partner/PartnerBox'


export default function page() {
  return (
    <>
      <Banner text='Our Casters' />
      <section className="flex flex-col space-y-20 items-center p-[10%]">
        <PartnerBox name='Joshua' align='left' />
        <PartnerBox name='Marvelous' align='right' />
        <PartnerBox name='Fabian' align='left' />
        <PartnerBox name='Marko' align='right' />
      </section>
    </>
  )
}
