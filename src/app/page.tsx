"use client"

// HOC component
import withoutAuth from "@/HOC/withoutAuth"
// components
import CarouselSection from "@/components/CarouselSection/CarouselSection";


function Home() {

  return (
    <main>
      <CarouselSection />
    </main>
  );
}

export default withoutAuth(Home)