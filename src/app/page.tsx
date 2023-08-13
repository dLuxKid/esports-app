
// components
import CarouselSection from "@/components/CarouselSection/CarouselSection";
import CurrentNews from "@/components/CurrentNews/CurrentNews";
import RulesSection from "@/components/RulesSection/RulesSection";
import Tournament from "@/components/TournamentSection/Tournament";


export default function Home() {

  return (
    <main>
      <CarouselSection />
      <Tournament />
      <CurrentNews />
      <RulesSection />
    </main>
  );
}

