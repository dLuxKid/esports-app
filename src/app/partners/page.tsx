"use client"
import PartnerBox from '@/components/Partner/PartnerBox'
import React from 'react'

export default function page() {
  return (
    <section className='p-0'>
        <div className="flex">
            <div className="bg-slate-700 w-3/5">
                <h1 className="font-bold text-6xl text-white p-14">Our casters</h1>
            </div>
            <div className="bg-slate-400 w-2/5"/>
        </div>
        <section className="flex flex-col space-y-20 items-center p-48">
            <PartnerBox name='Joshua' align='left'/>
            <PartnerBox name='Marvelous' align='right'/>
            <PartnerBox name='Fabian' align='left'/>
            <PartnerBox name='Marko' align='right'/>
        </section>
    </section>
  )
}
