"use client";
import Image from "next/image";
import Link from "next/link";

const tourPackages = [
  {
    id: 1,
    name: "Taj Mahal & Agra Tour",
    image: "/slider3.png",
    description: "Explore the iconic Taj Mahal and Mughal heritage sites.",
    slug: "taj-mahal-agra",
  },
  {
    id: 2,
    name: "Golden Triangle Tour",
    image: "/slider4.webp",
    description: "Delhi, Agra & Jaipur – Experience the heart of India.",
    slug: "golden-triangle",
  },
  {
    id: 3,
    name: "Kerala Backwaters",
    image: "/slider.png",
    description: "Houseboat stay and serene backwaters in Kerala.",
    slug: "kerala-backwaters",
  },
  {
    id: 4,
    name: "Rajasthan Palace Tour",
    image: "/slider1.png",
    description: "Visit Jaipur, Udaipur & Jodhpur palaces in luxury.",
    slug: "rajasthan-palaces",
  },
];

export default function AllPackage() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10 text-indigo-600">
          Explore Our Best India Tour Packages
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {tourPackages.map((pkg) => (
            <Link key={pkg.slug} href={`/package/${pkg.slug}`}>
              <div className="rounded-2xl overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300 shadow-lg">
                {/* Image with overlay */}
                <div className="relative h-64 w-full">
                  <Image
                    src={pkg.image}
                    alt={pkg.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <h3 className="text-white text-xl font-bold text-center px-2">
                      {pkg.name}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <div className="p-4">
                  <p className="text-gray-600 text-sm">{pkg.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
