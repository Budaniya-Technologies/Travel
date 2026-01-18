import React from "react";

const AboutHero = () => {
  return (
    <section className="relative h-[70vh] w-full overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=2000')`,
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
      </div>

      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-6 flex flex-col justify-center items-center text-center">
        {/* Accent Line */}
        <div className="w-20 h-1 bg-orange-500 mb-1 rounded-full mt-16" />

        <span className="text-orange-400 font-semibold tracking-widest uppercase mb-2 pt-16">
          Discover Our Story
        </span>

        <h1 className="text-4xl md:text-3xl font-extrabold text-white mb-6 leading-[35px]">
          Crafting Unforgettable <br />
          <span className="text-orange-500">Journeys Since 2018</span>
        </h1>

        <p className="max-w-2xl text-gray-200 text-lg md:text-xl mb-10 leading-[30px]">
          At <span className="font-bold text-white">YatraKaro</span>, we don’t
          just plan trips — we design memories that last a lifetime, from the
          Himalayas to the serene backwaters of Kerala.
        </p>

        {/* Buttons */}
        {/* <div className="flex flex-col sm:flex-row gap-4">
          <button className="px-8 py-3 bg-orange-600 hover:bg-orange-700 text-white font-medium rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg shadow-orange-500/30">
            Explore Packages
          </button>
          <button className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-md font-medium rounded-full transition-all duration-300">
            Contact Our Team
          </button>
        </div> */}

        {/* Glass Stats Cards */}
        {/* <div className="absolute bottom-8 hidden md:grid grid-cols-3 gap-6 w-full max-w-4xl px-6">
          {[
            { count: "50k+", label: "Happy Travelers" },
            { count: "150+", label: "Destinations" },
            { count: "12+", label: "Years Experience" },
          ].map((stat, i) => (
            <div
              key={i}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-5 text-center shadow-lg"
            >
              <p className="text-2xl font-bold text-white">{stat.count}</p>
              <p className="text-sm text-gray-300 uppercase tracking-wide">
                {stat.label}
              </p>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default AboutHero;
