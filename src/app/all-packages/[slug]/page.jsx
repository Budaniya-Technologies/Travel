"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { apiGet } from "../../../../Utils/http";
import { MapPin, Clock, FileText, CheckCircle } from "lucide-react"; // Suggested icons

export default function PackageDetails() {
  const { slug } = useParams();

  const [pkg, setPkg] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  /* ================= FETCH PACKAGE DETAILS ================= */
  useEffect(() => {
    if (!slug) return;

    apiGet(
      `/apiUser/v1/frontend/getPackage/${slug}?websiteId=${process.env.NEXT_PUBLIC_WEBSITE_ID}`,
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
    <div className="bg-slate-50 min-h-screen">
      {/* ================= HERO SECTION ================= */}
      <section className="relative h-[70vh] w-full overflow-hidden">
        <img
          src={pkg.image}
          alt={pkg.title}
          className="absolute inset-0 w-full h-full object-cover scale-105 transition-transform duration-700 hover:scale-100"
        />
        {/* Gradient Overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />

        <div className="absolute bottom-0 w-full pb-16">
          <div className="max-w-7xl mx-auto px-6">
            <span className="px-3 py-1 bg-indigo-600 text-white text-xs font-bold uppercase tracking-widest rounded-full mb-4 inline-block">
              Premium Package
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 drop-shadow-md">
              {pkg.title}
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-3xl leading-relaxed">
              {pkg.description}
            </p>
          </div>
        </div>
      </section>

      {/* ================= CONTENT SECTION ================= */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* LEFT CONTENT (2/3 width) */}
          <div className="lg:col-span-2 space-y-10">
            {/* Quick Info Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-4">
                <div className="p-3 bg-indigo-50 text-indigo-600 rounded-xl">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase font-semibold">
                    Route
                  </p>
                  <p className="text-sm font-bold text-slate-800">
                    {pkg.pickUpPoint} → {pkg.dropPoint}
                  </p>
                </div>
              </div>
              <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-4">
                <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl">
                  <Clock size={24} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase font-semibold">
                    Duration
                  </p>
                  <p className="text-sm font-bold text-slate-800">
                    {pkg.duration}
                  </p>
                </div>
              </div>
              <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-4 text-indigo-600">
                <div className="p-3 bg-slate-50 text-slate-600 rounded-xl">
                  <FileText size={24} />
                </div>
                <a
                  href={pkg.pdf}
                  target="_blank"
                  className="text-sm font-bold hover:underline"
                >
                  Download Itinerary
                </a>
              </div>
            </div>

            {/* Main Content Area */}
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-slate-100">
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                About this Journey
              </h2>
              {pkg.slugContent ? (
                <div
                  className="text-slate-900 prose prose-slate max-w-none prose-headings:font-bold prose-p:text-slate-600"
                  dangerouslySetInnerHTML={{ __html: pkg.slugContent }}
                />
              ) : (
                <p className="text-slate-500 italic">
                  No additional details provided.
                </p>
              )}
            </div>
          </div>

          {/* RIGHT SIDEBAR (1/3 width) */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 p-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <p className="text-slate-500 text-sm font-medium">
                    Best Price
                  </p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-black text-slate-900">
                      ₹{pkg.price}
                    </span>
                    <span className="text-slate-400 text-sm">/ person</span>
                  </div>
                </div>
                <div className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-bold">
                  AVAILABLE
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 text-sm text-slate-600">
                  <CheckCircle size={18} className="text-green-500" />
                  <span>Free Cancellation (48h)</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-600">
                  <CheckCircle size={18} className="text-green-500" />
                  <span>Instant Confirmation</span>
                </div>
              </div>

              <button className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-2xl shadow-lg shadow-indigo-200 transition-all active:scale-95">
                Book This Experience
              </button>

              <p className="text-center text-xs text-slate-400 mt-4">
                No extra taxes or booking fees.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
    // <>
    //   {/* ================= HERO SECTION ================= */}
    //   <section className="relative h-[80vh] w-full">
    //     <img
    //       src={pkg.image}
    //       alt={pkg.title}
    //       className="absolute inset-0 w-full h-full object-cover"
    //     />

    //     {/* Overlay */}
    //     <div className="absolute inset-0 bg-black/60" />

    //     {/* Title on Image */}
    //     <div className="relative z-10 h-full flex flex-col justify-center max-w-7xl mx-auto px-6">
    //       <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
    //         {pkg.title}
    //       </h1>

    //       <p className="text-lg text-gray-200 max-w-2xl">
    //         {pkg.description}
    //       </p>
    //     </div>
    //   </section>

    //       {/* LEFT CONTENT */}
    //       <div className="p-8">
    //         <h2 className="text-2xl text-gray-900 font-bold mb-4">Package Details</h2>

    //         <ul className="space-y-3 text-gray-700">
    //           <li>📍 <b>Route:</b> {pkg.pickUpPoint} → {pkg.dropPoint}</li>
    //           <li>⏳ <b>Duration:</b> {pkg.duration}</li>
    //           <li>📄 <b>PDF:</b>{" "}
    //             <a
    //               href={pkg.pdf}
    //               target="_blank"
    //               className="text-indigo-600 underline"
    //             >
    //               View Details
    //             </a>
    //           </li>
    //         </ul>

    //         {/* HTML Content */}
    //         {pkg.slugContent && (
    //           <div className="mt-6">
    //             <h3 className="text-xl text-gray-900 font-semibold mb-2">
    //               About this package
    //             </h3>

    //             <div
    //               className="prose max-w-none text-gray-700"
    //               dangerouslySetInnerHTML={{
    //                 __html: pkg.slugContent,
    //               }}
    //             />
    //           </div>
    //         )}
    //       </div>

    //       {/* RIGHT PRICE CARD */}
    //       <div className="bg-white rounded-2xl p-6 shadow h-fit">
    //         <p className="text-gray-500 text-sm">Starting from</p>

    //         <p className="text-3xl font-bold text-green-600 mt-1">
    //           ₹ {pkg.price}
    //         </p>

    //         <button className="mt-6 bg-indigo-600 text-white p-2 rounded-md hover:bg-indigo-700 transition">
    //           Book Now
    //         </button>
    //       </div>
    // </>
  );
}
