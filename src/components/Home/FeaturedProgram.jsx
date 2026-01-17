"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const travelPackages = [
  {
    id: 1,
    title: "Romantic Paris Getaway",
    image: "/slider1.png",
    description: "Explore the city of love with guided tours and fine dining.",
    location: "Paris, France",
    duration: "7 Days / 6 Nights",
    amount: "$1,499",
  },
  {
    id: 2,
    title: "Adventure in the Alps",
    image: "/slider2.jpg",
    description: "Experience thrilling hikes, skiing, and breathtaking views.",
    location: "Swiss Alps, Switzerland",
    duration: "10 Days / 9 Nights",
    amount: "$2,299",
  },
  {
    id: 3,
    title: "Tropical Bali Escape",
    image: "/slider3.png",
    description: "Relax on pristine beaches and enjoy Bali's rich culture.",
    location: "Bali, Indonesia",
    duration: "6 Days / 5 Nights",
    amount: "$999",
  },
  {
    id: 4,
    title: "Safari in Kenya",
    image: "/slider4.webp",
    description: "Witness the Big Five on an unforgettable African safari.",
    location: "Maasai Mara, Kenya",
    duration: "8 Days / 7 Nights",
    amount: "$1,899",
  },
  {
    id: 5,
    title: "Discover Japan",
    image: "/slider.png",
    description: "Explore temples, cherry blossoms, and modern Tokyo life.",
    location: "Tokyo, Kyoto, Japan",
    duration: "12 Days / 11 Nights",
    amount: "$2,799",
  },
];

const FeaturedProgram = () => {
  const swiperRef = useRef(null);

  return (
    <div className="px-10 swip bg-gradient-to-r from-blue-100 via-white to-blue-50 relative">
      <h2 className="text-3xl font-bold text-center mb-10 text-blue-700">
        🌍 Featured Programs of the Month
      </h2>

      {/* Custom Navigation */}
      <button
        aria-label="Previous Slide"
        onClick={() => swiperRef.current?.slidePrev()}
        className="absolute left-4 md:left-10 top-1/2 z-10 -translate-y-1/2 bg-white shadow-md p-3 rounded-full hover:bg-indigo-600 hover:text-white transition"
      >
        <FaChevronLeft size={18} />
      </button>
      <button
        aria-label="Next Slide"
        onClick={() => swiperRef.current?.slideNext()}
        className="absolute right-4 md:right-10 top-1/2 z-10 -translate-y-1/2 bg-white shadow-md p-3 rounded-full hover:bg-indigo-600 hover:text-white transition"
      >
        <FaChevronRight size={18} />
      </button>

      {/* Swiper */}
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        loop={true}
        autoplay={{ delay: 3500 }}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        breakpoints={{
          320: { slidesPerView: 1 }, 
          640: { slidesPerView: 2 }, 
          1024: { slidesPerView: 4 }, 
          1280: { slidesPerView: 4 }, 
        }}
        className="px-6 md:px-12"
      >
        {travelPackages.map((pkg) => (
          <SwiperSlide key={pkg.id}>
            <div className=" bg-white/90 backdrop-blur-lg rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2">
              {/* Image + Title Overlay */}
              <div className="relative">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                <h3 className="absolute bottom-3 left-3 text-white text-lg font-bold drop-shadow-lg">
                  {pkg.title}
                </h3>
              </div>

              {/* Content */}
              <div className="p-4">
                <p className="text-gray-600 text-sm">{pkg.description}</p>
                <p className="text-blue-700 font-medium mt-2">📍 {pkg.location}</p>
                <p className="text-gray-500 text-sm">⏳ {pkg.duration}</p>
                <p className="text-lg font-bold text-green-600 mt-2">
                  {pkg.amount}
                </p>
                <button className="mt-3 w-full bg-indigo-600 text-white py-2 rounded-xl hover:bg-indigo-700 transition">
                  Book Now
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FeaturedProgram;
