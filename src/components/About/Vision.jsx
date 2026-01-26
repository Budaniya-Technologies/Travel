"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";

const data = [
  {
    id: 1,
    title: "Our Vision",
    color: "text-orange-600",
    link: "/learn",
    text: `To become India’s leading brand that is a trusted and inspiring travel partner for discoveries. 
    Our Indian travel agency focuses on delivering authentic, immersive, and memorable experiences that 
    showcase the culture and soul of God’s Own Country. We aim to redefine the way that India is explored.`,
  },
  {
    id: 2,
    title: "Our Mission",
    color: "text-orange-700",
    link: "/reference/react",
    text: `To provide an authentic and customised travel experience across India. We carry the risks and 
    challenges of travellers to ensure a smooth, comfortable, and luxurious journey. Our YatraKaro travel 
    agency provides unparalleled support to every customer at every step of their travel.`,
  },
];

const Vision = () => {
  const sliderRef = useRef(null);

  // ---- AUTO SLIDER ONLY ON MOBILE ----
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let interval = setInterval(() => {
      if (window.innerWidth < 1024) {
        slider.scrollBy({ left: 300, behavior: "smooth" });

        // Reset to start when end reached
        if (
          slider.scrollLeft + slider.clientWidth >=
          slider.scrollWidth - 50
        ) {
          setTimeout(() => {
            slider.scrollTo({ left: 0, behavior: "smooth" });
          }, 600);
        }
      }
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="my-8 sm:my-10 p-6">
      {/* MOBILE SLIDER */}
      <div
        ref={sliderRef}
        className="lg:hidden flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide"
      >
        {data.map((item) => (
          <div
            key={item.id}
            className="min-w-[90%] snap-center bg-white shadow rounded-lg p-6"
          >
            <h4 className={`font-bold text-2xl leading-tight ${item.color}`}>
              {item.title}
            </h4>
            <hr className="my-2" />

            <p className="my-4 text-black/90">{item.text}</p>

            <Link
              href={item.link}
              className="inline-flex font-bold items-center bg-link text-gray-700 text-base rounded-lg py-1.5"
            >
              Read More
            </Link>
          </div>
        ))}
      </div>

      {/* DESKTOP GRID (Your same layout) */}
      <div className="hidden lg:grid grid-cols-2 gap-x-8 gap-y-4">
        {data.map((item) => (
          <div key={item.id} className="flex flex-col justify-center">
            <div className="flex flex-col h-full shadow justify-between rounded-lg pb-8 p-6 xl:p-8 mt-3 bg-gray-50">
              <div>
                <h4
                  className={`font-bold text-2xl leading-tight ${item.color}`}
                >
                  {item.title}
                </h4>
                <hr />

                <div className="my-4 text-black/90">
                  <p>{item.text}</p>
                </div>
              </div>

              <div>
                {/* <Link
                  href={item.link}
                  className="mt-1 inline-flex font-bold items-center bg-link text-gray-700 text-base rounded-lg py-1.5"
                >
                  Read More
                </Link> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Vision;
