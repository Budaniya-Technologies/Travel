"use client";
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
              eros at lacus feugiat hendrerit sed ut tortor. Suspendisse et
              magna quis elit efficitur consequat. Mauris eleifend velit a
              pretium iaculis. Donec sagittis velit et magna euismod, vel
              aliquet nulla malesuada. Nunc pharetra massa lectus, a fermentum
              arcu volutpat vel.
            </p>
          </div>

          {/* Right Image */}
          <div className="mt-12 md:mt-0">
          <button
  type="button"
  className="px-8 py-4 rounded-full font-semibold text-white 
  bg-blue-600 hover:bg-blue-500 transition-all duration-300
  shadow-md hover:shadow-lg"
>
  View All Popular Packages
</button>


          </div>
        </div>
      </div>
    </section>
  );
}
