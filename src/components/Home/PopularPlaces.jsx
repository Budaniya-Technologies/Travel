"use client";
import React from "react";
// import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const places = [
  {
    id: 1,
    title: "Taj Mahal, Agra",
    img: "https://www.indiaincredible.co.in/public/cache/9477tajmahal_1280_x_550.webp",
  },
  {
    id: 2,
    title: "Jaipur, Rajasthan",
    img: "https://cdn.triptotemples.com/75671.png",
  },
  {
    id: 3,
    title: "Varanasi, Uttar Pradesh",
    img: "https://www.tripsavvy.com/thmb/Ajy3r-RV1ePYMzE2BHUMm9PDjhE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-499619311-6ed67e3db89248bc97942574a4f8e8d6.jpg",
  },
  {
    id: 4,
    title: "Kerala Backwaters",
    img: "https://images.unsplash.com/photo-1558431382-27e303142255",
  },
  {
    id: 5,
    title: "Himalayas, Himachal Pradesh",
    img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
  },
  {
    id: 6,
    title: "Goa Beaches",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
  },
];

const PopularPlacesSlider = () => {
  return (
    <section className="py-8 md:py-12 bg-gray-100">
      {/* <motion.h2
        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-center mb-8 md:mb-12 text-yellow-900 relative"
        initial={{ y: -50, rotateX: 20, opacity: 0, scale: 0.9 }}
        animate={{ y: 0, rotateX: 0, opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 120, damping: 12 }}
        whileHover={{
          rotateX: -10,
          rotateY: 10,
          scale: 1.08,
          textShadow: "0px 0px 15px rgba(59, 130, 246, 0.7)",
          transition: { duration: 0.5 },
        }}
        style={{ perspective: 1200 }}
      >
        Explore the Wonders of <span className="text-blue-600">India</span>
      </motion.h2> */}

      <h2 className="text-3xl font-bold text-center mb-10 text-blue-700">
        Explore the Wonders of India
      </h2>

      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={16}
        slidesPerView={1}
        navigation
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 12 },
          640: { slidesPerView: 2, spaceBetween: 16 },
          768: { slidesPerView: 3, spaceBetween: 20 },
          1024: { slidesPerView: 4, spaceBetween: 24 },
        }}
        className="max-w-[95%] mx-auto"
      >
        {places.map((place) => (
          <SwiperSlide key={place.id} className="flex justify-center">
            <div className="relative w-full h-56 sm:h-64 md:h-72 lg:h-80 rounded-xl overflow-hidden shadow-lg group">
              <img
                src={place.img}
                alt={place.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition duration-300"></div>
              <h3 className="absolute top-3 sm:top-4 left-3 sm:left-4 text-sm sm:text-lg md:text-xl font-semibold text-white drop-shadow-lg">
                {place.title}
              </h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default PopularPlacesSlider;
