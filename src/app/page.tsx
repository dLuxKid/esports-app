// components
import CarouselSection from "@/components/CarouselSection/CarouselSection";
import CurrentNews from "@/components/CurrentNews/CurrentNews";
import RulesSection from "@/components/RulesSection/RulesSection";
import Tournament from "@/components/TournamentSection/Tournament";
// images
import codmlogo from '@/assets/codmLogo.png'
import appLogo from '@/assets/logo-transparent-png.png'
// next imports
import Image from "next/image";


export default function Home() {

  return (
    <main>
      <CarouselSection />
      <Tournament />
      <CurrentNews />
      <RulesSection />
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

