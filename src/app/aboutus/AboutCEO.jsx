import React from "react";

const AboutCEO = () => {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          {/* Left: CEO Image with Card Effect */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute -inset-3 bg-blue-100 rounded-2xl rotate-2"></div>

              <img
                src="https://i.pinimg.com/736x/22/5f/4c/225f4c968155fcd81cc89182f673583b.jpg"
                alt="CEO"
                className="relative w-[320px] h-[420px] object-cover rounded-2xl shadow-xl border border-gray-100"
              />
            </div>
          </div>

          {/* Right: CEO Message Content */}
          <div className="space-y-6 text-center lg:text-left">
            <span className="inline-block px-4 py-1 rounded-full bg-blue-50 text-black text-lg font-semibold uppercase tracking-widest">
              CEO Message
            </span>

            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-[40px]">
              A Vision for{" "}
              <span className="text-orange-700">
                Travel, Trust & Experiences
              </span>
            </h2>

            <p className="text-gray-600 text-lg leading-[25px]">
              At YatraKaro, we believe travel is more than just a journey — it
              is an experience, a memory, and a story worth telling. Our mission
              is to create meaningful and seamless travel experiences that
              empower explorers, families, and adventurers to discover the
              beauty of India with comfort, safety, and joy. Every trip we
              design reflects our commitment to authenticity, reliability, and
              customer satisfaction.
            </p>

            <p className="text-gray-600 text-lg leading-[25px]">
              As we grow, our focus remains on delivering personalized travel
              solutions that not only fulfill today’s expectations but also
              inspire future journeys across India and beyond.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCEO;
