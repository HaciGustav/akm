import CarouselSlides from "@/components/CarouselSlides";
import CarousselContainer from "@/components/CarousselContainer";
import EventsSection from "@/components/events_section/EventsSection";
import useApiCalls from "@/hooks/useApiCalls";
import { setSessionValidity } from "@/redux/slices/settingsSlice";
import { isSessionValid } from "@/utils/authentication";
import { Inter } from "next/font/google";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();

  const dispatch = useDispatch();

  useEffect(() => {
    if (isSessionValid()) {
      dispatch(setSessionValidity({ isValid: true }));
    } else {
      dispatch(setSessionValidity({ isValid: false }));
    }
  }, []);

  return (
    <>
      {/* <CarousselContainer /> */}
      <CarouselSlides />
      <EventsSection />
    </>
  );
}
