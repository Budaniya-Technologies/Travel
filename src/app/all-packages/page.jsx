"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { apiGet } from "../../../Utils/http";
import { motion } from "framer-motion";

const getAllPackage = `apiUser/v1/frontend/getAllPackage?websiteId=${process.env.NEXT_PUBLIC_WEBSITE_ID}`;
const headingText = "Explore Our Best Packages";

export default function AllPackage() {
  const [packageData, setPackageData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  /* ================= FETCH PACKAGES ================= */
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

  /* ================= STATES ================= */
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500">
        Loading packages...
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500">
        {error}
      </div>
    );
  }

  /* ================= UI ================= */
  return (
    <>
      {/* ================= HERO BANNER ================= */}
      <section className="relative h-[70vh] w-full ">
        <img
          src="https://i.pinimg.com/736x/a1/03/1d/a1031da3541abc623099eef22c00afc0.jpg" // 🔥 Replace with your banner image
          alt="Travel Packages"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Discover Amazing Travel Packages
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl">
            Handpicked tours, unforgettable experiences, and the best prices for
            your next journey.
          </p>
        </div>
      </section>
     {/* ================= PACKAGES SECTION ================= */}
      <section className="py-8 md:py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-3 sm:px-4">
          <div className="mb-6 px-1">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight">
              Explore Our Best <span className="text-orange-600">Packages</span>
            </h2>

            <p className="mt-2 text-xs sm:text-base text-gray-600 max-w-2xl">
              Handpicked travel packages designed for comfort and adventure.
            </p>

            <div className="mt-3 h-1 w-16 bg-orange-600 rounded-full"></div>
          </div>

          {/* Grid updated: grid-cols-2 for mobile (small screens) */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
            {packageData.map((pkg) => (
              <Link
                key={pkg.slug}
                href={`/all-packages/${pkg.slug}`}
                className="group flex"
              >
                <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col w-full">
                  {/* Reduced height for mobile to keep the 2-column view balanced */}
                  <div className="relative h-32 sm:h-48 md:h-60">
                    <img
                      src={pkg.image}
                      alt={pkg.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <h3 className="absolute bottom-2 left-2 right-2 text-white text-xs sm:text-lg font-bold line-clamp-1">
                      {pkg.title}
                    </h3>
                  </div>

                  <div className="p-3 sm:p-5 flex flex-col flex-grow space-y-1 sm:space-y-2">
                    {/* Description hidden on very small mobile to save space, visible on sm+ */}
                    <p className="text-gray-600 text-[10px] sm:text-sm line-clamp-2 hidden sm:block">
                      {pkg.description?.split(" ").slice(0, 8).join(" ")}...
                    </p>

                    <p className="text-blue-700 font-medium text-[10px] sm:text-sm truncate">
                      📍 {pkg.pickUpPoint}
                    </p>

                    <div className="flex justify-between items-center">
                      <p className="text-gray-500 text-[10px] sm:text-sm">⏳ {pkg.duration}</p>
                    </div>

                    <p className="text-sm sm:text-lg font-bold text-green-600">
                      ₹{pkg.price}
                    </p>

                    {/* Stacked buttons for mobile, side-by-side for desktop */}
                    <div className="flex flex-col sm:flex-row gap-1.5 sm:gap-3 mt-auto pt-2">
                        <button className="w-full bg-indigo-600 text-white py-1.5 sm:py-2 rounded-lg text-[10px] sm:text-sm font-semibold hover:bg-indigo-700">
                          Book
                        </button>
                        <button className="w-full border border-indigo-600 text-indigo-600 py-1.5 sm:py-2 rounded-lg text-[10px] sm:text-sm font-semibold hover:bg-indigo-600 hover:text-white">
                          Details
                        </button>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
