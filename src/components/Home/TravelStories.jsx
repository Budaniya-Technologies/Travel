"use client";

import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const stories = [
  {
    id: 1,
    title: "Exploring the Swiss Alps",
    desc: "A breathtaking journey through snow-capped mountains.",
    img: "/slider.png",
  },
  {
    id: 2,
    title: "Romantic Paris Getaway",
    desc: "Discover love in the city of lights and culture.",
    img: "/slider1.png",
  },
  {
    id: 3,
    title: "Desert Adventures in Dubai",
    desc: "Experience luxury and thrill in the golden sands.",
    img: "/slider2.jpg",
  },
  {
    id: 4,
    title: "Peaceful Bali Retreat",
    desc: "Reconnect with nature and inner peace in Bali.",
    img: "/slider3.png",
  },
  {
    id: 5,
    title: "New York City Lights",
    desc: "The bustling life of the city that never sleeps.",
    img: "/slider4.webp",
  },
];

const TravelStories = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false, // hides default arrows for mobile-friendly design
    responsive: [
      {
        breakpoint: 1280,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-blue-600 mb-10">
          Our Latest Travel Stories
        </h2>

        {/* Slider */}
        <Slider {...settings}>
          {stories.map((story) => (
            <div key={story.id} className="px-2 sm:px-3">
              <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300">
                
                {/* Image */}
                <div className="relative w-full h-56 sm:h-64 md:h-72 lg:h-80">
                  <Image
                    src={story.img}
                    alt={story.title}
                    fill
                    className="object-cover rounded-t-2xl"
                  />
                </div>

                {/* Content */}
                <div className="p-4 sm:p-5 md:p-6">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800">
                    {story.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 mt-2">
                    {story.desc}
                  </p>
                  <button className="mt-4 px-5 py-2 sm:py-3 text-sm sm:text-base bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-xl shadow hover:opacity-90 transition">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default TravelStories;
