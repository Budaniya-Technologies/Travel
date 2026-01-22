"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const BlogDetails2 = () => {
  // Blog content
  const blogContent = [
    "Jaipur, famously known as the Pink City of India, is a vibrant blend of royal heritage, rich culture, and architectural brilliance. From majestic forts to colorful bazaars, the city offers an unforgettable travel experience.",
    "The city is home to iconic landmarks such as Hawa Mahal, Amer Fort, City Palace, and Jantar Mantar. Each monument reflects the grandeur of Rajputana history and timeless craftsmanship.",
    "Jaipur is also a paradise for food lovers and shoppers. Traditional Rajasthani dishes like Dal Baati Churma and Ghewar, along with handcrafted jewelry and textiles, make the city a cultural treasure.",
  ];

  // Travel guides
  const travelGuides = [
    { title: "Top Places to Visit in Jaipur", href: "#" },
    { title: "Best Time to Visit Jaipur", href: "#" },
    { title: "Jaipur Local Food Guide", href: "#" },
    { title: "Shopping Markets in Jaipur", href: "#" },
  ];

  // Popular destinations
  const destinations = [
    { name: "Amer Fort", href: "#" },
    { name: "Hawa Mahal", href: "#" },
    { name: "City Palace", href: "#" },
    { name: "Jantar Mantar", href: "#" },
  ];

  return (
    <div className="flex flex-col bg-white">
      {/* ================= HEADER ================= */}
      
      <div className="relative py-14">
        {/* Background Image */}
        <Image
           src="https://i.pinimg.com/1200x/e1/b9/19/e1b919d24ae7f6ec979f809f2790054a.jpg"
          alt="Jaipur City Background"
          fill
          priority
          className="object-cover"
        />

        {/* Orange Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-orange-800/90 to-orange-300/80"></div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto pt-16 px-10 text-white">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">
            Explore Jaipur – The Royal Pink City
          </h1>
          <p className="text-sm opacity-90">Travel Guide • Rajasthan • India</p>
        </div>
      </div>
      {/* ================= CONTENT ================= */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row gap-10">
          {/* ===== Main Blog ===== */}
          <div className="w-full md:w-3/4">
            <div className="relative w-full h-[420px] mb-8 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="https://i.pinimg.com/1200x/e1/b9/19/e1b919d24ae7f6ec979f809f2790054a.jpg"
                alt="Jaipur City"
                fill
                className="object-cover"
              />
            </div>

            {/* Travel Info Badges */}
            <div className="flex flex-wrap gap-3 mb-6">
              {[
                "📍 Rajasthan, India",
                "🗓 Best Time: Oct – Mar",
                "🎨 Culture & Heritage",
              ].map((item, index) => (
                <span
                  key={index}
                  className="bg-orange-100 text-orange-700 px-4 py-1 rounded-full text-sm font-medium"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="text-black max-w-none prose-lg prose-orange">
              {blogContent.map((para, index) => (
                <p key={index}>{para}</p>
              ))}
            </div>
          </div>

          {/* ===== Sidebar ===== */}
          <aside className="w-full md:w-1/4 space-y-6">
            {/* Travel Guides */}
            <div className="bg-orange-50 p-6 rounded-2xl shadow-sm">
              <h2 className="text-lg font-bold text-orange-600 mb-4">
                Travel Guides
              </h2>
              <ul className="space-y-3 text-sm">
                {travelGuides.map((guide, index) => (
                  <li key={index}>
                    <Link
                      href={guide.href}
                      className="text-gray-700 hover:text-orange-500 transition"
                    >
                      {guide.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Popular Destinations */}
            <div className="bg-orange-50 p-6 rounded-2xl shadow-sm">
              <h2 className="text-lg font-bold text-orange-600 mb-4">
                Popular Places
              </h2>
              <ul className="space-y-3 text-sm">
                {destinations.map((place, index) => (
                  <li key={index}>
                    <Link
                      href={place.href}
                      className="text-gray-700 hover:text-orange-500 transition"
                    >
                      {place.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails2;
