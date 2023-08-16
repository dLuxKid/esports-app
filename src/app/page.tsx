// components
import CarouselSection from "@/components/CarouselSection/CarouselSection";
import Tournament from "@/components/TournamentSection/Tournament";
// images
import codmlogo from '@/assets/codmLogo.png'
import appLogo from '@/assets/logo-transparent-png.png'
// next imports
import Image from "next/image";
import Link from "next/link";


export default function Home() {

  return (
    <main>
      <CarouselSection />
      <Tournament />
      <section className="flex-between bg-pry-black">
        <div className="flex-start flex-col gap-6 w-2/5">
          <h1 className="header-text text-pry-white">Current News</h1>
          <p className="body-text text-pry-white">Explore the dynamic universe of Call of Duty: Mobile (CODM) on our blog! From action-packed multiplayer clashes to intense battle royale encounters, our posts delve into the heart of mobile gaming excitement. Uncover tips, updates, and strategies to enhance your CODM experience. Join us as we navigate this thrilling virtual battlefield together!</p>
          <div>
            <a href="https://www.callofduty.com/blog" target="_blank" rel="noopener">
              <button type="button" className="btn white-btn">All news</button>
            </a>
          </div>
        </div>
        <div className="w-1/2 flex flex-wrap gap-4">
          <div className="w-[48%]">
            <a href="https://www.callofduty.com/blog/2023/07/call-of-duty-mobile-season-7-2023-heat-wave-maps-modes-themed-event" target="_blank" rel="noopener noreferrer">
              <img src="https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/blog/hero/codm/CODM-7-HEAT-WAVE-TOUT.jpg" alt="blog image" />
              <p className="body-text text-pry-white">It’s a Scorching Summer in Call of Duty: Mobile Season 7 — Heat Wave</p>
            </a>
          </div>
          <div className="w-[48%]">
            <a href="https://www.callofduty.com/blog/2023/06/call-of-duty-mobile-season-6-2023-templars-oath-maps-modes-themed-event" target="_blank" rel="noopener noreferrer">
              <img src="https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/blog/hero/codm/CODM-S6-TOUT.jpg" alt="blog image" />
              <p className="body-text text-pry-white">The King Returns in Call of Duty: Mobile Season 6 — Templar’s Oath</p>
            </a>
          </div>
          <div>
            <a href="https://www.callofduty.com/blog/2023/08/call-of-duty-modern-warfare-II-to-modern-warfare-III-carry-forward" target="_blank" rel="noopener noreferrer">
              <img src="https://imgs.callofduty.com/content/dam/atvi/callofduty/cod-touchui/blog/hero/mwii/MWIII-REVEAL-CARRYFORWARD-TOUT-TXT.jpg" alt="blog image" />
              <p className="body-text text-pry-white">Call of Duty: Modern Warfare II and Call of Duty: Modern Warfare III. Carry Forward Content: Your Questions Answered</p>
            </a>
          </div>
        </div>
      </section>
      <section>
        <div className='flex-center max-w-2xl mx-auto flex-col gap-6'>
          <h1 className='header-text leading-5 text-black'>The set of rules</h1>
          <p className='body-text text-black'>These rules provide a comprehensive framework to ensure the smooth operation of Call of Duty Mobile esports competitions. It's important to adapt and customize these guidelines to fit the specific needs and nature of your esports tournaments while maintaining the principles of fair play, competitive spirit, and player engagement.</p>
          <div>
            <Link href={'/rules'}>
              <button type='button' className='btn black-btn'>All rules</button>
            </Link>
          </div>
        </div>
        <div className='p-[5%] flex-between bg-pry-green mt-24 gap-6'>
          <h1 className='title-text text-white max-w-md'>You have a problem or a question?</h1>
          <p className='body-text text-white max-w-xs'>Hello there! Do you have any questions or are you facing any issues? Feel free to let us know, and we'll be glad to help you out.</p>
          <div>
            <button type='button' className="btn white-btn">discord</button>
          </div>
        </div>
      </section>
      <div className=" px-[5%] py-[2.5%] flex-between gap-4 bg-pry-grey">
        <div className="w-1/5">
          <Image src={codmlogo} alt="codm logo" className="object-fill object-center max-h-32" />
        </div>
        <div className="w-1/5">
          <Image src={appLogo} alt="codm logo" className="object-fill object-center max-h-32" />
        </div>
        <div className="w-1/5">
          <Image src={codmlogo} alt="codm logo" className="object-fill object-center max-h-32" />
        </div>
        <div className="w-1/5">
          <Image src={appLogo} alt="codm logo" className="object-fill object-center max-h-32" />
        </div>
      </div>
    </main>
  );
}

