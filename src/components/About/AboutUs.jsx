import React from 'react';
import { FaCheckCircle } from "react-icons/fa";

const AboutUs = () => {
  return (
    <section className="relative overflow-hidden bg-white py-16 lg:py-10">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col items-center gap-16 lg:flex-row">
          
          {/* Left Side: Aesthetic Image Grid - HIDDEN ON MOBILE */}
          <div className="hidden w-full grid-cols-2 gap-4 lg:grid lg:w-1/2">
            <div className="space-y-4">
              <div className="overflow-hidden rounded-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80" 
                  alt="Tropical Beach" 
                  className="h-64 w-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="overflow-hidden rounded-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80" 
                  alt="Mountain Peak" 
                  className="h-80 w-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="overflow-hidden rounded-2xl border border-slate-100">
                <img 
                  src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80" 
                  alt="Boats on Lake" 
                  className="h-80 w-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="overflow-hidden rounded-2xl bg-indigo-600 p-8 text-white shadow-xl">
                <p className="text-3xl font-bold italic">10k+</p>
                <p className="mt-2 text-xs font-medium uppercase tracking-widest opacity-80">Satisfied Travelers</p>
              </div>
            </div>
          </div>

          {/* Right Side: Text Content */}
          <div className="w-full text-center space-y-8 lg:w-1/2 lg:text-left">
            <div className="space-y-3">
              <span className="inline-block rounded-full bg-indigo-50 px-4 py-1.5 text-xs font-bold tracking-widest text-black uppercase">
                Our Story
              </span>
              <h2 className="text-4xl font-serif font-medium leading-lose text-slate-900 md:text-5xl lg:text-6xl">
                Crafting Memories <br /> 
                <span className="italic text-orange-600 text-3xl md:text-5xl">Across the Globe</span>
              </h2>
              <p className="mx-auto max-w-xl text-lg leading-relaxed text-slate-600 lg:mx-0">
                We believe that travel is more than just visiting new places; it’s about the stories you tell and the moments that take your breath away. Since 2015, we’ve been dedicated to curating bespoke experiences.
              </p>
            </div>

            {/* Features list */}
            <div className="grid grid-cols-1 gap-8 border-y border-slate-100 py-8 text-left sm:grid-cols-2">
              <div className="flex flex-col items-center lg:items-start">
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100 text-indigo-600">
                  <FaCheckCircle className="h-6 w-6" />
                </div>
                <h4 className="font-bold text-slate-900">Expert Guides</h4>
                <p className="mt-1 text-center text-sm text-slate-500 lg:text-left">
                  Local experts who know the hidden gems of every city.
                </p>
              </div>

              <div className="flex flex-col items-center lg:items-start">
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100 text-indigo-600">
                  <FaCheckCircle className="h-6 w-6" />
                </div>
                <h4 className="font-bold text-slate-900">Eco-Friendly</h4>
                <p className="mt-1 text-center text-sm text-slate-500 lg:text-left">
                  Commitment to sustainable and responsible tourism.
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-center lg:justify-start">
              <button className="w-full rounded-full bg-slate-900 px-8 py-4 font-semibold text-white transition-all hover:bg-indigo-600 hover:shadow-lg active:scale-95 sm:w-auto">
                Explore More
              </button>
              <button className="flex items-center gap-2 font-bold text-slate-900 transition-colors hover:text-indigo-600">
                <span>Watch Our Journey</span>
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200">
                    <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                </div>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutUs;
