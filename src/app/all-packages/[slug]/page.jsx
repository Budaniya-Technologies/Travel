"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { apiGet } from "../../../../Utils/http";

export default function PackageDetails() {
  const { slug } = useParams();

  const [pkg, setPkg] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  /* ================= FETCH PACKAGE DETAILS ================= */
  useEffect(() => {
    if (!slug) return;

    apiGet(
      `/apiUser/v1/frontend/getPackage/${slug}?websiteId=${process.env.NEXT_PUBLIC_WEBSITE_ID}`
    )
      .then((res) => {
        if (
          res?.status === 200 &&
          Array.isArray(res?.data?.data) &&
          res.data.data.length > 0
        ) {
          setPkg(res.data.data[0]); // ✅ take first object
        } else {
          setError("Package not found");
        }
      })
      .catch(() => setError("Failed to load package details"))
      .finally(() => setLoading(false));
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading package...
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
      {/* ================= HERO SECTION ================= */}
      <section className="relative h-[80vh] w-full">
        <img
          src={pkg.image}
          alt={pkg.title}
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Title on Image */}
        <div className="relative z-10 h-full flex flex-col justify-center max-w-7xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {pkg.title}
          </h1>

          <p className="text-lg text-gray-200 max-w-2xl">
            {pkg.description}
          </p>
        </div>
      </section>


          
          {/* LEFT CONTENT */}
          <div className="p-8">
            <h2 className="text-2xl text-gray-900 font-bold mb-4">Package Details</h2>

            <ul className="space-y-3 text-gray-700">
              <li>📍 <b>Route:</b> {pkg.pickUpPoint} → {pkg.dropPoint}</li>
              <li>⏳ <b>Duration:</b> {pkg.duration}</li>
              <li>📄 <b>PDF:</b>{" "}
                <a
                  href={pkg.pdf}
                  target="_blank"
                  className="text-indigo-600 underline"
                >
                  View Details
                </a>
              </li>
            </ul>

            {/* HTML Content */}
            {pkg.slugContent && (
              <div className="mt-6">
                <h3 className="text-xl text-gray-900 font-semibold mb-2">
                  About this package
                </h3>

                <div
                  className="prose max-w-none text-gray-700"
                  dangerouslySetInnerHTML={{
                    __html: pkg.slugContent,
                  }}
                />
              </div>
            )}
          </div>

          {/* RIGHT PRICE CARD */}
          <div className="bg-white rounded-2xl p-6 shadow h-fit">
            <p className="text-gray-500 text-sm">Starting from</p>

            <p className="text-3xl font-bold text-green-600 mt-1">
              ₹ {pkg.price}
            </p>

            <button className="mt-6 bg-indigo-600 text-white p-2 rounded-md hover:bg-indigo-700 transition">
              Book Now
            </button>
          </div>
    </>
  );
}
