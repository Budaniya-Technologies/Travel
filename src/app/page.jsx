import AboutIntro from "@/components/About/AboutInto";
import AboutUs from "@/components/About/AboutUs";
import FaqSection from "@/components/FaqSection/FaqSection";
import CraftsSection from "@/components/Home/CraftsSection";
import FeaturedProgram from "@/components/Home/FeaturedProgram";
import HappyCustomers from "@/components/Home/HappyCustomers";
import Hero from "@/components/Home/Hero";
import PopularPlaces from "@/components/Home/PopularPlaces";
import TravelSearch from "@/components/Home/TravelSearch";
import TravelStories from "@/components/Home/TravelStories";


export default function Home() {
  return (
    <>
    <Hero/>
    <AboutIntro />
    <PopularPlaces/>
    <AboutUs />
    <FeaturedProgram/>
    <CraftsSection/>
    <TravelStories/>
    <HappyCustomers/>
    <TravelSearch/>
    <FaqSection />
    </>
  );
}