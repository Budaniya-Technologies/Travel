"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const slides = [
  {
    id: 1,
    image: "/slider.png",
    title: "Explore the World 🌍",
    subtitle: "Find your next destination and make memories.",
  },
  {
    id: 2,
    image: "/slider1.png",
    title: "Adventure Awaits 🏞️",
    subtitle: "Discover hidden gems around the globe.",
  },
  {
    id: 3,
    image: "/slider2.jpg",
    title: "Travel in Comfort ✈️",
    subtitle: "Book flights, hotels, and trips with ease.",
  },
  {
    id: 4,
    image: "/slider3.png",
    title: "Cultural Wonders 🕌",
    subtitle: "Experience traditions and stories across the world.",
  },
  {
    id: 5,
    image: "/slider4.webp",
    title: "Luxury Getaways 🏝️",
    subtitle: "Indulge in premium experiences and relaxation.",
  },
];

export default function HeroSlider() {
  return (
    <section className="w-full mt-15">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 8000,
          disableOnInteraction: false,
        }}
        speed={2000}
        pagination={{ clickable: true }}
        navigation
        className="w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="h-[50vh] md:h-[100vh] w-full bg-cover bg-center flex flex-col justify-center items-center text-white text-center px-4"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <motion.h1
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-2xl md:text-6xl font-bold mb-4 drop-shadow-lg"
              >
                {slide.title}
              </motion.h1>
              <p className="text-xs md:text-lg mb-6 max-w-2xl drop-shadow-md">
                {slide.subtitle}
              </p>
              <div className="flex justify-center gap-3">
                <button className="px-4 py-2 md:px-6 md:py-3 bg-pink-400 text-white font-semibold rounded-lg transition">
                  Contact
                </button>
                <button className="px-4 py-2 md:px-6 md:py-3 bg-yellow-400 text-white font-semibold rounded-lg transition">
                  Package
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
