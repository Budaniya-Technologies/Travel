"use client";
import React, { useState, useRef } from "react";

export default function Login() {
  const [activeSlide, setActiveSlide] = useState(0);
  const sliderRef = useRef(null);

  const goToSlide = (index) => {
    const width = sliderRef.current.offsetWidth;
    sliderRef.current.style.transform = `translateX(-${width * index}px)`;
    setActiveSlide(index);
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-sky-100 via-white to-orange-100 flex items-center overflow-hidden">
      <div className="container px-4 sm:px-6 mx-auto mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap items-center">

            {/* RIGHT – LOGIN FORM (FIRST ON MOBILE) */}
            <div className="w-full lg:w-1/2 xl:w-2/5 order-1 lg:order-2 ">
              <div className="max-w-md mx-auto bg-white/90 backdrop-blur-xl border border-gray-200 rounded-[2rem] shadow-xl p-6 sm:p-8 lg:p-10 " >
                <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2 text-center lg:text-left">
                  Welcome Back 🌍
                </h3>
                <p className="text-gray-600 mb-8 text-center lg:text-left">
                  Sign in to continue your journey.
                </p>

                <div className="flex items-center mb-6">
                  <div className="flex-1 h-px bg-gray-300" />
                  <span className="px-3 text-xs text-gray-500 font-semibold">
                    OR
                  </span>
                  <div className="flex-1 h-px bg-gray-300" />
                </div>

                <form>
                  <div className="mb-5">
                    <label className="block text-sm font-semibold mb-1 text-black">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="you@yatrakarotrevals.com"
                      className="w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-orange-400 focus:outline-none"
                    />
                  </div>

                  <div className="mb-6">
                    <div className="flex justify-between mb-1 text-black">
                      <label className="text-sm font-semibold">
                        Password
                      </label>
                      <a className="text-xs text-orange-600 hover:underline">
                        Forgot?
                      </a>
                    </div>
                    <input
                      type="password"
                      placeholder="••••••••"
                      className="w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-orange-400 focus:outline-none"
                    />
                  </div>

                  <button className="w-full py-3 rounded-full bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold shadow-lg active:scale-95 transition">
                    Sign In
                  </button>

                  <p className="text-center text-sm text-gray-600 mt-6">
                    New to Yatrakarotrevals?
                    <a className="ml-1 text-orange-600 font-semibold hover:underline">
                      Create account
                    </a>
                  </p>
                </form>
              </div>
            </div>

            {/* LEFT – SLIDER (SECOND ON MOBILE) */}
            <div className="w-full lg:w-1/2 xl:w-3/5 mt-12 lg:mt-0 order-2 lg:order-1">
              <div className="relative h-[380px] sm:h-[450px] lg:h-[520px] rounded-[2rem] overflow-hidden shadow-2xl">
                <img
                  className="absolute inset-0 w-full h-full object-cover"
                  src="https://i.pinimg.com/736x/47/2a/dd/472add28786aa328599861a37a1371ab.jpg"
                  alt="Travel"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/40 to-transparent" />

                <div className="absolute bottom-0 left-0 w-full p-4 sm:p-6 lg:p-10">
                  <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-5 sm:p-7 text-white">
                    <div className="overflow-hidden">
                      <div
                        ref={sliderRef}
                        className="flex transition-transform duration-500 ease-in-out"
                      >
                        {[
                          {
                            title: "Explore the World",
                            text:
                              "Discover breathtaking destinations with Yatrakarotrevals."
                          },
                          {
                            title: "Hassle-Free Travel",
                            text:
                              "Bookings, planning, and experiences—all handled for you."
                          },
                          {
                            title: "Memories for Life",
                            text:
                              "Curated journeys that stay with you forever."
                          }
                        ].map((slide, i) => (
                          <div
                            key={i}
                            className="w-full flex-shrink-0 pr-4 text-center lg:text-left"
                          >
                            <h4 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2">
                              {slide.title}
                            </h4>
                            <p className="text-sm sm:text-base lg:text-lg text-white/90">
                              {slide.text}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex justify-center lg:justify-start mt-5 space-x-2">
                      {[0, 1, 2].map((i) => (
                        <button
                          key={i}
                          onClick={() => goToSlide(i)}
                          className={`h-1.5 w-7 rounded-full transition-all ${
                            activeSlide === i
                              ? "bg-orange-400"
                              : "bg-white/40 hover:bg-white"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
