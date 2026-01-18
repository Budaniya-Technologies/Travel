"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const slides = [
  {
    id: 1,
    badge: "✨ Discover Your Next Adventure",
    title: "Explore",
    highlight: "The World",
    bg: "https://i.pinimg.com/1200x/8c/aa/96/8caa968e1b2cdba9375dbc3c881e66b9.jpg",
  },
  {
    id: 2,
    badge: "🌴 Luxury Travel Experience",
    title: "Plan",
    highlight: "Your Journey",
    bg: "https://i.pinimg.com/736x/fa/01/d8/fa01d8991fc8953feb71750370a7d219.jpg",
  },
  {
    id: 3,
    badge: "✈️ Seamless Travel Solutions",
    title: "Discover",
    highlight: "New Places",
    bg: "https://i.pinimg.com/736x/6d/b6/82/6db6823b78ce179383aed77e0de29dd5.jpg",
  },
   {
    id: 4,
    badge: "✈️ Seamless Travel Solutions",
    title: "Discover",
    highlight: "New Places",
    bg: "https://i.pinimg.com/736x/23/bc/01/23bc0131b8ae332e29be3b06570c1d8d.jpg",
  },
];

const travelEssentials = [
  {
    id: 1,
    text: "Curated Global Destinations",
    color: "text-blue-400",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    ),
  },
  {
    id: 2,
    text: "24/7 Concierge Support",
    color: "text-amber-400",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
      />
    ),
  },
  {
    id: 3,
    text: "Seamless Logistics & Visas",
    color: "text-emerald-400",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
      />
    ),
  },
];

export default function TravelHero() {
  return (
    <section className="relative text-white overflow-hidden font-sans">
      <Swiper
        modules={[Autoplay]}
        loop={true}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        speed={1200}
        className="w-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            {/* Background */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 scale-105"
              style={{ backgroundImage: `url('${slide.bg}')` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
            </div>

            <div className="container mx-auto lg:px-12 px-5 py-24 md:py-32 relative z-10 lg:min-h-[90vh] flex items-center">
              <div className="flex flex-col md:flex-row items-center justify-between w-full">
                {/* LEFT CONTENT */}
                <div className="w-full md:w-1/2 mb-12 md:mb-0">
                  <span className="inline-block py-1 px-3 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-sm font-medium mb-6 backdrop-blur-sm">
                    {slide.badge}
                  </span>

                  <h1 className="text-6xl md:text-6xl font-extrabold mb-6 leading-[50px] tracking-tight">
                    {slide.title}
                    <br />
                    <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-emerald-400 inline-block text-transparent bg-clip-text">
                      {slide.highlight}
                    </span>
                  </h1>

                  <p className="text-xl mb-3 text-gray-200 max-w-lg leading-[30px]">
                    Crafting unforgettable journeys with tailor-made itineraries,
                    expert local guides, and premium travel essentials.
                  </p>

                  <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                    <button className="group relative w-full sm:w-auto px-8 py-4 overflow-hidden rounded-full bg-blue-600 font-bold transition-all hover:bg-blue-500 active:scale-95">
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        Plan My Trip
                        <svg
                          className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      </span>
                    </button>

                    <button className="px-8 py-4 rounded-full border border-white/30 bg-white/10 backdrop-blur-md text-white font-semibold hover:bg-white/20 transition-all">
                      View Packages
                    </button>
                  </div>
                </div>

                {/* RIGHT CARD */}
                <div className="w-full md:w-[400px]">
                  <div className="bg-black/30 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                    <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
                      Travel Essentials
                      <span className="h-1 w-12 bg-blue-500 rounded-full"></span>
                    </h2>

                    <ul className="space-y-8">
                      {travelEssentials.map((item) => (
                        <li key={item.id} className="flex items-start group">
                          <div
                            className={`p-3 rounded-2xl bg-white/5 mr-4 group-hover:scale-110 transition-transform duration-300 ${item.color}`}
                          >
                            <svg
                              className="w-6 h-6"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              {item.icon}
                            </svg>
                          </div>

                          <div>
                            <span className="block text-lg font-medium text-white group-hover:text-blue-300 transition-colors">
                              {item.text}
                            </span>
                            <p className="text-sm text-gray-400 mt-1">
                              Experience hassle-free exploration.
                            </p>
                          </div>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-8 pt-8 border-t border-white/10">
                      <p className="text-xs text-gray-400 uppercase tracking-widest text-center font-bold">
                        Trusted by 10k+ Travelers
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0 leading-none">
        <svg
          className="w-full h-[100px]"
          preserveAspectRatio="none"
          viewBox="0 0 1440 120"
          fill="none"
        >
          <path
            d="M0 120L1440 120V0C1440 0 1140 120 720 120C300 120 0 0 0 0V120Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
