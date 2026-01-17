"use client";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative w-full h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-r from-blue-500 to-indigo-600">
      <Image
       src="/packagesImg.jpg"
        alt="Best India Tours"
        fill
        className="object-cover opacity-70"
        priority
      />
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="absolute inset-0 flex flex-col justify-center items-start px-6 md:px-20 lg:px-32">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4">
          Best India Tour Packages
        </h1>
        <p className="text-white text-lg md:text-2xl mb-6 max-w-xl">
          Custom & Group Tours to explore India’s rich heritage, culture, and beauty.
        </p>
        <button className="bg-yellow-500 text-black font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-yellow-600 transition">
          Explore Tours
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
