"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import Link from "next/link";

const travelData = [
  {
    id: 1,

    img: "https://i.pinimg.com/736x/1d/5f/ed/1d5fed055e5359ebe013afa1ea73a2d7.jpg",

    title: "Rajathan's PinkCity (Jaipur)",

    subtitle: "Luxury Amer Fort",

    span: "md:col-span-2 md:row-span-2",

    height: "h-[400px] md:h-full",
  },

  {
    id: 2,

    img: "https://i.pinimg.com/1200x/ee/b0/e2/eeb0e2cf9bca4cc42bc7ef79eb4ef6d1.jpg",

    title: "Udaipur",

    subtitle: "blue city of India",

    span: "md:col-span-1 md:row-span-1",

    height: "h-48 md:h-64",
  },

  {
    id: 3,

    img: "https://i.pinimg.com/1200x/36/d8/74/36d874809e17991213e45b57645f91fd.jpg",

    title: "Shimla",

    subtitle: "Himachal Pradesh",

    span: "md:col-span-1 md:row-span-1",

    height: "h-48 md:h-64",
  },

  {
    id: 4,

    img: "https://i.pinimg.com/1200x/15/e0/e3/15e0e3401dc11124cabdb7d84923d09f.jpg",

    title: "Ladakh",

    subtitle: "North India ",

    span: "md:col-span-2 md:row-span-1",

    height: "h-48 md:h-64",
  },

  {
    id: 5,

    img: "https://i.pinimg.com/736x/d2/32/5a/d2325a2c72ac051d39c2b47ac5cc190d.jpg",

    title: "Varanasi, Uttar Pardash",

    subtitle: "Ancient Traditions",

    span: "md:col-span-1 md:row-span-2",

    height: "h-[400px] md:h-full",
  },

  {
    id: 6,

    img: "https://i.pinimg.com/1200x/7c/36/7f/7c367f3b73b2b93604219530631e271b.jpg",

    title: "Goa ",

    subtitle: "Tropical Paradise",

    span: "md:col-span-1 md:row-span-1",

    height: "h-48 md:h-64",
  },

  {
    id: 7,

    img: "https://i.pinimg.com/736x/12/bc/0c/12bc0cc4ceb069a5a378efaaa4e87a48.jpg",

    title: "Lakshadweep",

    subtitle: "Indian Island",

    span: "md:col-span-2 md:row-span-1",

    height: "h-48 md:h-64",
  },

  {
    id: 8,

    img: "https://i.pinimg.com/736x/96/9e/61/969e61296dd24a8a6ed9a5dcb611e24a.jpg",

    title: "Kashmir, India ",

    subtitle: "Tropical Paradise",

    span: "md:col-span-1 md:row-span-1",

    height: "h-48 md:h-64",
  },

  {
    id: 9,

    img: "https://i.pinimg.com/1200x/19/94/4b/19944b8bc32bd4705c81400242c80e26.jpg",

    title: "Adiyogi, Chikkaballapur ",

    subtitle: "near Coimbatore, Tamil Nadu",

    span: "md:col-span-2 md:row-span-1",

    height: "h-48 md:h-64",
  },
];

export default function CraftsSection() {
  const swiperRef = useRef(null);

  return (
    <div className="bg-slate-50 py-16">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Heading */}
        <div className="mb-12 flex flex-col items-center justify-between gap-4 md:flex-row md:items-end">
          <div>
            <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-indigo-600">
              Curated Destinations
            </h2>
            <p className="mt-2 text-4xl font-serif font-medium text-slate-900 md:text-5xl">
              Discover <span className="italic">Incredible India</span>
            </p>
          </div>
          <Link href="/all-packages">
          <button className="hidden rounded-full border border-black-300 px-6 py-2 text-sm font-semibold transition-colors text-amber-900 hover:bg-slate-900 hover:text-white lg:block">
            View All Places
          </button>
          </Link>
        </div>

        {/* Desktop Grid */}
        <div className="hidden lg:grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-[repeat(2,300px)]">
          {travelData.map((item) => (
            <div
              key={item.id}
              className={`group relative h-64 w-full overflow-hidden rounded-3xl bg-slate-200 transition-all duration-500 lg:h-full ${item.span}`}
            >
              <img
                src={item.img}
                alt={item.title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-indigo-300 opacity-0 transition-all duration-500 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0">
                  {item.subtitle}
                </span>
                <h3 className="mt-1 text-xl font-bold md:text-2xl">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Swiper */}
        <div className="lg:hidden">
          <Swiper
            modules={[Pagination, Autoplay]}
            slidesPerView={1}
            spaceBetween={15}
            loop={true}
            autoplay={{ delay: 3000 }}
            pagination={{ clickable: true }}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
          >
            {travelData.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="group relative w-full overflow-hidden rounded-3xl bg-slate-200">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="absolute bottom-0 left-0 p-6 text-white">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-indigo-300 opacity-0 transition-all duration-500 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0">
                      {item.subtitle}
                    </span>
                    <h3 className="mt-1 text-xl font-bold">{item.title}</h3>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
