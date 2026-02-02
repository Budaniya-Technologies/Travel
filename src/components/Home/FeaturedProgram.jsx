"use client";
import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/grid"; // Import Grid styles
import { Pagination, Autoplay, Grid } from "swiper/modules"; // Import Grid module
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { apiGet } from "../../../Utils/http";
import Link from "next/link";

const getAllPackage = `apiUser/v1/frontend/getAllPackage?websiteId=${process.env.NEXT_PUBLIC_WEBSITE_ID}`;

const backgroundImages = [
  {
    id: 1,
    bg: "https://i.pinimg.com/736x/3f/11/30/3f11304b704850cb6ad8e27e6a3a56cb.jpg",
  },
  {
    id: 2,
    bg: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1920&q=80",
  },
  {
    id: 3,
    bg: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1920&q=80",
  },
];

const FeaturedProgram = () => {
  const swiperRef = useRef(null);
  const [bgIndex, setBgIndex] = useState(0);
  const [packageData, setPackageData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    apiGet(getAllPackage)
      .then((response) => {
        if (response?.status === 200 && Array.isArray(response?.data?.data)) {
          setPackageData(response.data.data);
        } else {
          setError("No packages available.");
        }
      })
      .catch(() => setError("Failed to load packages."))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) =>
        prev === backgroundImages.length - 1 ? 0 : prev + 1,
      );
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="relative py-16 transition-all duration-1000"
      style={{
        backgroundImage: `url('${backgroundImages[bgIndex].bg}')`,
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-black/60 pointer-events-none"></div>

      <div className="relative max-w-[1440px] mx-auto px-6 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="text-white space-y-4">
            <span className="text-cyan-400 tracking-widest uppercase text-sm">
              Exclusive Travel Experiences
            </span>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Discover Your Next <br /> Dream Destination
            </h2>
            <p className="text-gray-200 max-w-lg">
              Handpicked luxury and adventure travel packages crafted for
              unforgettable memories. From romantic escapes to thrilling
              expeditions, we bring the world closer to you.
            </p>
            <div className="flex gap-4 mt-4">
              <Link href="/all-packages">
                <button className="px-6 py-3 bg-cyan-500 text-black font-semibold rounded-full hover:bg-cyan-400 transition">
                  View All Packages
                </button>
              </Link>
              <Link href="/contact">
                <button className="px-6 py-3 border border-white text-white rounded-full hover:bg-white hover:text-black transition">
                  Enquire Now
                </button>
              </Link>
            </div>
          </div>

          <div className="relative featured-swiper-container">
            <Swiper
              modules={[Pagination, Autoplay, Grid]} // Added Grid module
              spaceBetween={15} // Reduced space for mobile fitting
              loop={false} // Loop must be false when using Swiper Grid
              autoplay={{ delay: 3500 }}
              pagination={{ clickable: true }}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              breakpoints={{
                // Mobile: 2 columns, 2 rows
                320: {
                  slidesPerView: 2,
                  grid: { rows: 2, fill: "row" },
                },
                // Tablet/Desktop: 2 columns, 1 row
                1024: {
                  slidesPerView: 2,
                  grid: { rows: 1 },
                },
              }}
              className="pb-12"
            >
              {packageData.map((pkg) => (
                <SwiperSlide key={pkg.id}>
                  <div className="bg-white/90 backdrop-blur-lg rounded-xl overflow-hidden shadow-xl hover:-translate-y-1 transition h-full flex flex-col">
                    <div className="relative h-32 md:h-60">
                      {" "}
                      {/* Reduced height for mobile */}
                      <img
                        src={pkg.image}
                        alt={pkg.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                      <h3 className="absolute bottom-2 left-2 text-white text-xs md:text-xl font-bold line-clamp-1">
                        {pkg.title}
                      </h3>
                    </div>

                    <div className="p-3 md:p-5 space-y-1 md:space-y-2 flex-grow">
                      <p className="text-gray-600 text-[10px] md:text-sm line-clamp-2">
                        {pkg.description}
                      </p>
                      <p className="text-blue-700 font-medium text-[10px] md:text-base truncate">
                        📍 {pkg.pickUpPoint}
                      </p>
                      <p className="text-lg font-bold text-green-600 text-sm md:text-lg">
                        ₹{pkg.price}
                      </p>
                      <div className="flex flex-col sm:flex-row gap-2 mt-2">
                        <Link
                          href={`/all-packages/${pkg.slug}`}
                          className="flex-1"
                        >
                          <button className="w-full bg-indigo-600 text-white py-1.5 md:py-2 rounded-lg text-[10px] md:text-sm hover:bg-indigo-700">
                            Book
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProgram;
