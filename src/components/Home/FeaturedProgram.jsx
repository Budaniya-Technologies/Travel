"use client";
import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { apiGet } from "../../../Utils/http";
import Link from "next/link";

const getAllPackage = `apiUser/v1/frontend/getAllPackage?websiteId=${process.env.NEXT_PUBLIC_WEBSITE_ID}`;

/* ========== NEW: BACKGROUND IMAGES ARRAY (MAPPING OBJECT) ========== */
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

// const travelPackages = [
//   {
//     id: 1,
//     title: "Romantic Paris Getaway",
//     image: "/slider1.png",
//     description: "Explore the city of love with guided tours and fine dining.",
//     location: "Paris, France",
//     duration: "7 Days / 6 Nights",
//     amount: "1,499",
//   },
//   {
//     id: 2,
//     title: "Adventure in the Alps",
//     image: "/slider2.jpg",
//     description: "Experience thrilling hikes, skiing, and breathtaking views.",
//     location: "Swiss Alps, Switzerland",
//     duration: "10 Days / 9 Nights",
//     amount: "2,299",
//   },
//   {
//     id: 3,
//     title: "Tropical Bali Escape",
//     image: "/slider3.png",
//     description: "Relax on pristine beaches and enjoy Bali's rich culture.",
//     location: "Bali, Indonesia",
//     duration: "6 Days / 5 Nights",
//     amount: "999",
//   },
//   {
//     id: 4,
//     title: "Safari in Kenya",
//     image: "/slider4.webp",
//     description: "Witness the Big Five on an unforgettable African safari.",
//     location: "Maasai Mara, Kenya",
//     duration: "8 Days / 7 Nights",
//     amount: "1,899",
//   },
//   {
//     id: 5,
//     title: "Discover Japan",
//     image: "/slider.png",
//     description: "Explore temples, cherry blossoms, and modern Tokyo life.",
//     location: "Tokyo, Kyoto, Japan",
//     duration: "12 Days / 11 Nights",
//     amount: "2,799",
//   },
// ];

const FeaturedProgram = () => {
  const swiperRef = useRef(null);

  /* ========== AUTO BACKGROUND CHANGE LOGIC ========== */
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
      .catch(() => {
        setError("Failed to load packages.");
      })
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) =>
        prev === backgroundImages.length - 1 ? 0 : prev + 1,
      );
    }, 4000); // change every 4 seconds

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
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative max-w-[1440px] mx-auto px-6 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* LEFT SIDE HEADING + DESCRIPTION */}
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

          {/* RIGHT SIDE: SWIPER */}
          <div className="relative">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="absolute -left-6 top-1/2 z-10 bg-white text-black p-3 rounded-full shadow-md"
            >
              <FaChevronLeft />
            </button>

            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="absolute -right-6 top-1/2 z-10 bg-white text-black p-3 rounded-full shadow-md"
            >
              <FaChevronRight />
            </button>

            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={25}
              loop={true}
              autoplay={{ delay: 3500 }}
              pagination={{ clickable: true }}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              breakpoints={{
                320: { slidesPerView: 1 },
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 2 },
              }}
            >
              {packageData.map((pkg) => (
                <SwiperSlide key={pkg.id}>
                  <div className="bg-white/90 backdrop-blur-lg rounded-2xl overflow-hidden shadow-xl hover:-translate-y-2 transition">
                    <div className="relative h-60">
                      <img
                        src={pkg.image}
                        alt={pkg.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                      <h3 className="absolute bottom-4 left-4 text-white text-xl font-bold">
                        {pkg.title}
                      </h3>
                    </div>

                    <div className="p-5 space-y-2">
                      <p className="text-gray-600 text-sm">{pkg.description}</p>

                      <p className="text-blue-700 font-medium">
                        📍 {pkg.pickUpPoint} - {pkg.dropPoint}
                      </p>

                      <p className="text-gray-500 text-sm">⏳ {pkg.duration}</p>

                      <p className="text-lg font-bold text-green-600">
                        ₹ {pkg.price}
                      </p>

                      <div className="flex gap-3 mt-3">
                        <button className="flex-1 bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700">
                          Book Now
                        </button>

                        <Link href={`/all-packages/${pkg.slug}`}>
                          <button className="flex-1 border border-indigo-600 text-indigo-600 py-2 rounded-lg hover:bg-indigo-600 hover:text-white">
                            Details
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
