"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import Link from "next/link";


const slides = [
  {
    id: 1,
    badge: "✨ Discover Your Next Adventure",
    title: "Explore",
    highlight: "The World",
    bg: "/11.jpg",
  },
  {
    id: 2,
    badge: "🌴 Luxury Travel Experience",
    title: "Plan",
    highlight: "Your Journey",
    bg: "/3.jpg",
  },
  {
    id: 3,
    badge: "✈️ Seamless Travel Solutions",
    title: "Discover",
    highlight: "New Places",
    bg: "/8.jpg",
  },
  {
    id: 4,
    badge: "🏔️ Nature & Serenity",
    title: "Feel",
    highlight: "The Escape",
    bg: "/4.jpg",
  },
  {
    id: 5,
    badge: "🏖️ Beachside Bliss",
    title: "Relax",
    highlight: "By The Sea",
    bg: "/9.jpg",
  },
  {
    id: 6,
    badge: "🌄 Mountain Adventures",
    title: "Climb",
    highlight: "New Heights",
    bg: "/10.jpg",
  },
  {
    id: 7,
    badge: "🏕️ Outdoor Escapes",
    title: "Camp",
    highlight: "Under Stars",
    bg: "/5.jpg",
  },
  {
    id: 8,
    badge: "🌍 Cultural Journeys",
    title: "Experience",
    highlight: "True Traditions",
    bg: "/7.jpg",
  },
];


export default function TravelHero() {
  return (
    <section className="relative w-full overflow-hidden text-white">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        loop
        speed={1400}
        autoplay={{ delay: 6500, disableOnInteraction: false }}
        className="w-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            {/* Background */}
            <div
              className="absolute inset-0 bg-cover bg-center scale-110 transition-transform duration-[4000ms]"
              style={{ backgroundImage: `url(${slide.bg})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-black/10" />
            </div>

            {/* Content */}
            <div className="relative z-10 min-h-screen flex items-center">
              <div className="container mx-auto px-6 lg:px-12">
                <div className="max-w-2xl">
                  {/* Badge */}
                  <span className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-sm font-medium text-white">
                    {slide.badge}
                  </span>

                  {/* Heading */}
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight mb-6">
                    {slide.title} <br />
                    <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-emerald-400 bg-clip-text text-transparent">
                      {slide.highlight}
                    </span>
                  </h1>

                  {/* Description */}
                  <p className="text-lg sm:text-xl text-gray-200 max-w-xl mb-10 leading-relaxed">
                    Craft unforgettable journeys with curated destinations,
                    premium experiences, and seamless travel planning — all in
                    one place.
                  </p>

                  {/* Actions */}
                  <div className="flex flex-wrap items-center gap-4">
                    <button className="group relative px-8 py-4 rounded-full bg-blue-600 font-semibold transition-all hover:bg-blue-500 active:scale-95">
                      <Link href="/contact">
                      <span className="flex items-center gap-2">
                        Plan My Trip
                        <svg
                          className="w-5 h-5 transition-transform group-hover:translate-x-1"
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
                      </Link>
                      
                    </button>

                    <Link href="/all-packages">
                      <button className="px-8 py-4 rounded-full border border-white/30 bg-white/10 backdrop-blur-md font-medium transition hover:bg-white/20">
                        View Packages
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Bottom Shape */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          className="w-full h-[110px]"
          preserveAspectRatio="none"
        >
          <path
            d="M0 120H1440V0C1440 0 1140 120 720 120C300 120 0 0 0 0V120Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
