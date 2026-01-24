"use client";
import React, { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

const PopularPlaces = () => {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!scrollRef.current) return;

      if (canScrollRight) {
        scroll("right");
      } else {
        scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
      }
    }, 3000); // 3 seconds

    return () => clearInterval(interval);
  }, [canScrollRight]);

  const categories = [
    {
      id: 1,
      title: "Karala Tour",
      price: " /-",
      img: "https://i.pinimg.com/736x/31/bc/84/31bc84e0fa95c63cffe8a77f39d3e894.jpg",
      link: "#",
    },
    {
      id: 2,
      title: "Jaisalmer",
      price: "/-",
      img: "https://i.pinimg.com/1200x/97/cb/8f/97cb8f1f5022d5a38ce14e89935911c4.jpg",
      link: "#",
    },
    {
      id: 3,
      title: "Goa Beech",
      price: "/-",
      img: "https://i.pinimg.com/1200x/60/37/9a/60379a968deddaa202abffc3b2f02215.jpg",
      link: "#",
    },
    {
      id: 4,
      title: "Manali",
      price: "/-",
      img: "https://i.pinimg.com/1200x/27/90/8e/27908e1df16216f2530124965f59cdf8.jpg",
      link: "#",
    },
  ];

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.8;
      const scrollTo =
        direction === "left"
          ? scrollLeft - scrollAmount
          : scrollLeft + scrollAmount;

      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  return (
    // Reduced px-20 to px-4 on mobile for better space usage
    <section className="max-w-[1440px] mx-auto px-4 md:px-20 py-2 md:py-9">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start lg:items-center">
        {/* LEFT SIDE: Heading Content */}
        <div className="w-full lg:w-3/5 space-y-4 md:space-y-2">
          <span className="text-red-500 font-semibold tracking-widest uppercase text-xs md:text-sm">
            Curated Collections
          </span>
          {/* Fixed mobile text size to be readable but modern */}
          <h2 className="text-3xl md:text-3xl font-serif text-gray-900 leading-lose">
            Popular Travel Destinations
          </h2>

          <div className="flex flex-wrap gap-3 pt-2">
            <Link href="/all-packages">
            <button className="px-5 py-2 rounded-full bg-red-500 text-white text-sm font-semibold hover:bg-red-600 transition">
              View All 
            </button>
            </Link>
          </div>

          <p className="text-gray-600 text-base md:text-lg max-w-md">
            Explore our latest arrivals across
            <br className="hidden md:block" /> fashion and lifestyle.
          </p>

          {/* Custom Navigation for Desktop */}
          <div className="hidden lg:flex gap-4 pt-4">
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className={`p-3 rounded-full border transition-all ${
                !canScrollLeft
                  ? "border-gray-200 text-gray-300"
                  : "border-black text-black hover:bg-black hover:text-white"
              }`}
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className={`p-3 rounded-full border transition-all ${
                !canScrollRight
                  ? "border-gray-200 text-gray-300"
                  : "border-black text-black hover:bg-black hover:text-white"
              }`}
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* RIGHT SIDE: Slider */}
        <div className="w-full lg:w-4/5 relative group">
          <div
            ref={scrollRef}
            onScroll={checkScroll}
            className="flex overflow-x-auto gap-3 md:gap-6 scrollbar-hide snap-x snap-mandatory pb-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {categories.map((item) => (
              <div
                key={item.id}
                className="flex-none w-[calc(50%-6px)] md:w-[320px] snap-start"
              >
                <div className="relative h-[250px] md:h-[380px] w-full overflow-hidden group/card rounded-xl shadow-lg">
                  {/* Image */}
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110"
                  />

                  {/* Dark travel overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-100" />

                  {/* TOP HEADING ON IMAGE */}
                  <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full">
                    <span className="text-white text-xs font-semibold tracking-wide">
                      🌍 Travel Destination
                    </span>
                  </div>

                  {/* Bottom Content Box */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-white/95 backdrop-blur-md rounded-t-xl">
                    <h3 className="text-lg font-bold text-gray-900 truncate">
                      {item.title}
                    </h3>

                    <p className="text-gray-600 text-xs mb-3">
                      Starting from ₹{item.price}
                    </p>

                    {/* TWO BUTTONS */}
                    <div className="flex gap-2">
                      

                      <button className="flex-1 text-xs py-2 rounded-lg border border-blue-600 text-blue-600 font-semibold hover:bg-blue-50 transition">
                        Enquiry Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Arrows - Simplified */}
          <div className="flex lg:hidden justify-center gap-4 mt-4">
            <button
              onClick={() => scroll("left")}
              className={`p-2 border rounded-full ${
                !canScrollLeft ? "opacity-30" : "opacity-100"
              }`}
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => scroll("right")}
              className={`p-2 border rounded-full ${
                !canScrollRight ? "opacity-30" : "opacity-100"
              }`}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularPlaces;
