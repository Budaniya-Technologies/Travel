"use client";

import React from "react";
import { FaStar, FaRegStar, FaQuoteLeft } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Sample testimonials
const testimonials = [
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
    name: "Sheila Mahoney",
    img: "/profile.png",
    feedback:
      "India Travel smoothly arranged a lovely 10 day trip for my husband and me to the 25th annual Hornbill Festival in Nagaland, India.",
    rating: 5,
  },
  {
    id: 5,
    name: "Annette Krause-Thiel",
    img: "/profile.png",
    feedback:
      'It was our first visit in India. Shikhar travels organized our trip “golden triangle” perfectly. It was a good choice of places and hotels.',
    rating: 4,
  },
  {
    id: 6,
    name: "Deepak Kalyan",
    img: "/profile.png",
    feedback:
      "We took a tour of Northern India through India Travels in 2023. It was memorable. India travel team of Meenakshi, Vikas and Devesh.",
    rating: 5,
  },
];

const HappyCustomers = () => {
  return (
    <div className="py-10 px-6 sm:px-10 lg:px-20 bg-gray-50">
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-12">
        {/* Left Side Heading & Description */}
        <div className="lg:w-1/3 mb-8 lg:mb-0">
          <h2 className="text-4xl sm:text-3xl font-bold text-blue-700 mb-4 leading-[35px]">
            🌟 Happy Customers,<br/> Happy Memories🌟 
          </h2>
          <p className="text-gray-600 text-md leading-[20px]">
            Our clients’ smiles are our biggest reward. Here’s what some of them
            have shared about their unforgettable experiences with us.
          </p>
        </div>

        {/* Right Side Cards */}
        <div className="lg:w-2/3">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000 }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 2 },
              // 1280: { slidesPerView: 3 },
            }}
            className="px-2"
          >
            {testimonials.map((t) => (
              <SwiperSlide key={t.id}>
                <div className="bg-gradient-to-r from-blue-50 to-white rounded-2xl shadow-lg p-6 flex flex-col justify-between h-full hover:shadow-2xl transition-all duration-300">
                  {/* Quote Icon */}
                  <div className="text-blue-200 text-4xl mb-4">
                    <FaQuoteLeft />
                  </div>

                  {/* Feedback */}
                  <p className="text-gray-700 text-sm mb-6">{t.feedback}</p>

                  {/* Customer Info */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <img
                        src={t.img}
                        alt={t.name}
                        className="w-12 h-12 rounded-full object-cover mr-3 border-2 border-blue-100"
                      />
                      <h4 className="text-gray-800 font-semibold">{t.name}</h4>
                    </div>

                    {/* Rating */}
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((i) =>
                        i <= t.rating ? (
                          <FaStar
                            key={i}
                            className="text-yellow-400 w-4 h-4 mr-1"
                          />
                        ) : (
                          <FaRegStar
                            key={i}
                            className="text-yellow-400 w-4 h-4 mr-1"
                          />
                        )
                      )}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default HappyCustomers;
