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
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-5">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900">
              Explore Our Best <span className="text-orange-600">Packages</span>
            </h2>

            <p className="mt-2 text-sm sm:text-base text-gray-600 max-w-2xl">
              Handpicked travel packages designed for comfort, adventure, and
              unforgettable experiences.
            </p>

            {/* Decorative underline */}
            <div className="mt-4 h-1 w-20 bg-orange-600 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {packageData.map((pkg) => (
              <Link
                key={pkg.slug}
                href={`/package/${pkg.slug}`}
                className="group"
              >
                <div className="bg-white/90 backdrop-blur-lg rounded-2xl overflow-hidden shadow-xl hover:-translate-y-2 transition">
                  <div className="relative h-60">
                    <img
                      src={pkg.image}
                      alt={pkg.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
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
                      ₹ {pkg.price} /-
                    </p>

                    <div className="flex gap-3 mt-3">
                      <button className="flex-1 bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700">
                        Book Now
                      </button>
                      <Link key={pkg.slug} href={`/all-packages/${pkg.slug}`}>
                      <button className="flex-1 border border-indigo-600 text-indigo-600 py-2 rounded-lg hover:bg-indigo-600 hover:text-white">
                        Details
                      </button>
                      </Link>
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
