import CarouselSlides from "@/components/CarouselSlides";
import CarousselContainer from "@/components/CarousselContainer";
import EventsSection from "@/components/events_section/EventsSection";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      {/* <CarousselContainer /> */}
      <CarouselSlides />
      <EventsSection />
    </>
  );
}
