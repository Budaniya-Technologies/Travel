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
          {/* LEFT CONTENT */}
          <div className="lg:col-span-2 space-y-10">
            {/* Rounded Info Cards */}
           <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
  {[
    {
      icon: <MapPin size={22} />,
      label: "Route",
      value: `${pkg.pickUpPoint} → ${pkg.dropPoint}`,
      color: "from-indigo-500 to-cyan-500",
    },
    {
      icon: <Clock size={22} />,
      label: "Duration",
      value: pkg.duration,
      color: "from-emerald-500 to-teal-500",
    },
    {
      icon: <FileText size={22} />,
      label: "Itinerary",
      value: "Download PDF",
      color: "from-orange-500 to-pink-500",
      link: pkg.pdf,
    },
  ].map((item, i) => (
    <div
      key={i}
      className="flex flex-col items-center text-center space-y-2 group"
    >
      {/* Floating Icon */}
      <div
        className={`w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-br ${item.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
      >
        {item.icon}
      </div>

      {/* Label */}
      <p className="text-xs uppercase tracking-widest text-slate-400 font-semibold">
        {item.label}
      </p>

      {/* Value */}
      {item.link ? (
        <a
          href={item.link}
          target="_blank"
          className="text-sm font-bold text-indigo-600 hover:underline"
        >
          {item.value}
        </a>
      ) : (
        <p className="text-sm font-bold text-slate-800">
          {item.value}
        </p>
      )}
    </div>
  ))}
</div>


            {/* About Content */}
            <div className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-xl border border-slate-100">
              <h2 className="text-2xl font-extrabold text-slate-900 mb-6 flex items-center gap-2">
                About this Journey
              </h2>

              {pkg.slugContent ? (
                <div
                  className="text-black prose prose-slate max-w-none prose-headings:font-bold prose-p:text-slate-600"
                  dangerouslySetInnerHTML={{ __html: pkg.slugContent }}
                />
              ) : (
                <p className="text-black italic">
                  No additional details provided.
                </p>
              )}
            </div>
          </div>

          {/* RIGHT SIDEBAR */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 bg-white rounded-[2.5rem] shadow-2xl border border-slate-100 p-8">
              {/* Price Badge */}
              <div className="flex justify-between items-center mb-6">
                <div>
                  <p className="text-xs uppercase text-slate-400 font-semibold">
                    Starting From
                  </p>
                  <h3 className="text-4xl font-black text-indigo-600">
                    ₹{pkg.price}
                  </h3>
                  <p className="text-xs text-slate-400">per person</p>
                </div>

                <span className="px-3 py-1 rounded-full text-xs font-bold bg-green-100 text-green-700">
                  Available
                </span>
              </div>

              {/* Features */}
              <div className="space-y-4 mb-8">
                {[
                  "Free Cancellation (48h)",
                  "Instant Confirmation",
                  "24/7 Support",
                ].map((text, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 text-sm text-slate-600"
                  >
                    <div className="w-7 h-7 rounded-full bg-green-100 flex items-center justify-center">
                      <CheckCircle size={16} className="text-green-600" />
                    </div>
                    {text}
                  </div>
                ))}
              </div>

              {/* CTA */}
              <button className="w-full py-4 bg-gradient-to-r from-indigo-600 to-cyan-600 hover:brightness-110 text-white font-bold rounded-full shadow-xl transition active:scale-95">
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
