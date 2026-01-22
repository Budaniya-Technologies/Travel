"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { apiGet } from "../../../Utils/http";

const getAllPackage = `apiUser/v1/frontend/getAllPackage?websiteId=${process.env.NEXT_PUBLIC_WEBSITE_ID}`;

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
    <section className="py-12 bg-gray-50 mt-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10 text-indigo-600">
          Explore Our Best Packages
        </h2>

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

                    <Link href={`/package/${pkg.slug}`}>
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
  );
}
