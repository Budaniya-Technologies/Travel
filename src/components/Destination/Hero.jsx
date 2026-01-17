"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-r from-blue-500 to-indigo-600">
      <Image
        src="/destinationImg.jpg"
        alt="Travel Destination"
        fill
        className="object-cover opacity-70"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <motion.div
        className="relative z-10 text-center max-w-3xl px-6"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg">
          Explore The World with <span className="text-yellow-400">TravelMate</span>
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-200">
          Discover breathtaking destinations, amazing cultures, and unforgettable adventures.
        </p>

        {/* Buttons */}
        <div className="mt-6 flex gap-4 justify-center">
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="px-6 py-3 rounded-xl bg-yellow-400 text-black font-semibold shadow-lg hover:bg-yellow-500 transition"
          >
            🌍 Start Your Journey
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="px-6 py-3 rounded-xl bg-white/20 border border-white text-white font-semibold shadow-lg hover:bg-white/30 transition"
          >
            📌 Popular Destinations
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
}
