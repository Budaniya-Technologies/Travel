"use client";

import { useEffect, useState, useRef } from "react";

const slides = [
  {
    title: "Water Diving At Goa",
    description:
      "Experience the thrill of scuba diving in Goa’s crystal-clear waters, exploring vibrant marine life and unforgettable underwater adventures.",
    image:
      "https://r4.wallpaperflare.com/wallpaper/617/792/1005/fish-landscape-the-ocean-stay-wallpaper-679fe2349f35ff7a7f820431b191e785.jpg",
  },
  {
    title: "Beautiful Architect of Jaipur",
    description:
      "Discover Jaipur’s royal architecture, where majestic forts, grand palaces, and rich heritage reflect the timeless beauty of Rajasthan.",
    image:
      "https://r4.wallpaperflare.com/wallpaper/484/985/153/jodhpur-rajasthan-india-wallpaper-8b16dced9341dfe925543b393d9c2c50.jpg",
  },
  {
    title: "Camel Ride At Jaisalmer",
    description:
      "Enjoy a magical camel ride across the golden Thar Desert, witnessing stunning sunsets and the cultural charm of Jaisalmer.",
    image:
      "https://r4.wallpaperflare.com/wallpaper/446/515/798/india-silhouette-camel-caravan-wallpaper-9940889d218addbb7607f83fe0b1c69d.jpg",
  },
  {
    title: "Mountain Nature Escape",
    description:
      "Relax amidst serene mountains, flowing rivers, and lush greenery—perfect for nature lovers seeking peace and adventure.",
    image:
      "https://r4.wallpaperflare.com/wallpaper/537/664/855/nature-water-mountains-trees-wallpaper-4b69c27222a40f0cc99fe78e7d65fe3e.jpg",
  },
];


export default function BlogHero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      if (autoplay) {
        nextSlide();
      }
    }, 5000);

    return () => clearInterval(intervalRef.current);
  }, [autoplay, currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const replaceBrokenImage = (e) => {
    const fallbacks = [
      "https://picsum.photos/id/1018/1920/1080",
      "https://picsum.photos/id/1015/1920/1080",
      "https://picsum.photos/id/1019/1920/1080",
    ];
    e.target.src = fallbacks[currentSlide % fallbacks.length];
  };

  return (
    <section
      className="relative overflow-hidden"
      onMouseEnter={() => setAutoplay(false)}
      onMouseLeave={() => setAutoplay(true)}
    >
      <div className="relative h-[80vh] min-h-[500px]">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-700 ease-in-out ${
              currentSlide === index
                ? "opacity-100 scale-100"
                : "opacity-0 scale-105 pointer-events-none"
            }`}
          >
            {/* Background Image */}
            <div className="absolute inset-0 bg-gray-900">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover opacity-80"
                onError={replaceBrokenImage}
                loading="lazy"
              />
            </div>

            {/* Content */}
            <div className="container mx-auto px-6 h-full flex items-center relative z-10">
              <div
                className={`max-w-2xl text-white transition-all duration-700 delay-200 ${
                  currentSlide === index
                    ? "translate-x-0 opacity-100"
                    : "translate-x-10 opacity-0"
                }`}
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-2">
                  {slide.title}
                </h2>
                <p className="text-xl md:text-2xl mb-8">
                  {slide.description}
                </p>
              </div>
            </div>
          </div>
        ))}

        {/* Prev Button */}
        {/* <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/10 hover:bg-black/70 text-white rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center z-20"
        >
          ❮
        </button> */}

        {/* Next Button */}
        {/* <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/10 hover:bg-black/70 text-white rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center z-20"
        >
          ❯
        </button> */}

        {/* Dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 md:h-3 rounded-full transition-all ${
                currentSlide === index
                  ? "bg-white w-6"
                  : "bg-white/50 w-3"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
