"use client";
import Link from "next/link";
import React from "react";

export default function AboutIntro() {
  return (
    <section className="bg-gray-100">
      <div className="container mx-auto py-10 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          {/* Left Content */}
          <div className="max-w-lg">
            <h2 className="text-xl font-extrabold text-red-500 sm:text-2xl">
              Rajasthan Tour Package
            </h2>

            <p className="mt-2 text-gray-600 text-md leading-[20px]">
              Based in Rajasthan, YatraKaroTravels delivers thoughtfully crafted
              travel projects and tour packages that combine comfort, culture,
              and adventure. Our focus is on providing seamless planning,
              high-quality services, and memorable journeys tailored to meet
              every traveler’s expectations.
            </p>
          </div>

          {/* Right Image */}
          <div className="mt-12 md:mt-0">
            <Link href="/all-packages">
              "
              <button
                type="button"
                className="px-8 py-4 rounded-full font-semibold text-white 
  bg-blue-600 hover:bg-blue-500 transition-all duration-300
  shadow-md hover:shadow-lg"
              >
                View All Popular Packages
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
