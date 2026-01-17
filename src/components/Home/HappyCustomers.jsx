"use client";

import React from "react";
import { FaStar, FaRegStar, FaQuoteLeft } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Sample testimonials
const testimonials  = [
  {
    id: 1,
    name: "Sheila Mahoney",
    img: "/profile.png",
    feedback:
      "India Travel smoothly arranged a lovely 10 day trip for my husband and me to the 25th annual Hornbill Festival in Nagaland, India.",
    rating: 5,
  },
  {
    id: 2,
    name: "Annette Krause-Thiel",
    img: "/profile.png",
    feedback:
      'It was our first visit in India. Shikhar travels organized our trip “golden triangle” perfectly. It was a good choice of places and hotels.',
    rating: 4,
  },
  {
    id: 3,
    name: "Deepak Kalyan",
    img: "/profile.png",
    feedback:
      "We took a tour of Northern India through India Travels in 2023. It was memorable. India travel team of Meenakshi, Vikas and Devesh.",
    rating: 5,
  },
  {
    id: 4,
    name: "Deepak Kalyan",
    img: "/profile.png",
    feedback:
      "We took a tour of Northern India through India Travels in 2023. It was memorable. India travel team of Meenakshi, Vikas and Devesh.",
    rating: 5,
  },
  {
    id: 5,
    name: "Deepak Kalyan",
    img: "/profile.png",
    feedback:
      "We took a tour of Northern India through India Travels in 2023. It was memorable. India travel team of Meenakshi, Vikas and Devesh.",
    rating: 5,
  },

  
];

const HappyCustomers = () => {
  return (
    <div className="py-12 bg-white px-10">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-blue-700 mb-4">
        🌟 A Legacy of Happy Customers
      </h2>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
        We take pride in creating memorable experiences and delivering top-notch services to our clients over the years.
      </p>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
          1536: { slidesPerView: 6 },
        }}
        className="px-4"
      >
        {testimonials.map((t) => (
          <SwiperSlide key={t.id}>
            <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-xl transition">
              <div className="text-gray-300 text-3xl mb-3">
                <FaQuoteLeft />
              </div>
              <p className="text-gray-600 text-sm mb-4">{t.feedback}</p>
              <div className="flex items-center mb-2">
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover mr-2"
                />
                <h3 className="text-red-500 font-semibold text-sm">{t.name}</h3>
              </div>
              <div className="flex">
                {[1, 2, 3, 4, 5].map((i) =>
                  i <= t.rating ? (
                    <FaStar key={i} className="text-yellow-400 w-4 h-4 mr-1" />
                  ) : (
                    <FaRegStar key={i} className="text-yellow-400 w-4 h-4 mr-1" />
                  )
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HappyCustomers;
