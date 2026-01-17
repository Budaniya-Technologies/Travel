"use client";
import Link from "next/link";
import React from "react";

const destinations = [
  {
    id: 1,
    slug: "taj-mahal", // 👈 added slug
    name: "Taj Mahal, Agra",
    image: "/slider1.png",
    description: "An ivory-white marble mausoleum and symbol of eternal love.",
  },
  {
    id: 2,
    slug: "jaipur",
    name: "Jaipur, Rajasthan",
    image: "/slider3.png",
    description: "The Pink City known for its forts, palaces, and vibrant culture.",
  },
  {
    id: 3,
    slug: "kerala",
    name: "Kerala Backwaters",
    image: "/slider2.jpg",
    description: "A network of serene canals, lagoons, and houseboats.",
  },
  {
    id: 4,
    slug: "goa",
    name: "Goa Beaches",
    image: "/slider.png",
    description: "Golden beaches, nightlife, and Portuguese heritage.",
  },
  {
    id: 5,
    slug: "leh-ladakh",
    name: "Leh-Ladakh",
    image: "/slider4.webp",
    description: "A high-desert region with monasteries and scenic mountain passes.",
  },
];

const DestinationsList = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10 text-indigo-600">
          Best Tour Destination of India
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {destinations.map((place) => (
            <Link key={place.slug} href={`/Destination/${place.slug}`}>
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                <img
                  src={place.image}
                  alt={place.name}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {place.name}
                  </h3>
                  <p className="text-gray-600 text-sm mt-2">
                    {place.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DestinationsList;
