"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const sliderData = [
  {
    id: 1,
    image: "https://i.pinimg.com/736x/a2/28/f8/a228f83feae12075606d08c8183b80c7.jpg",
    title: "Hidden Gems of Europe",
    description: "Explore the cobblestone streets and secret cafes that travel guides miss.",
  },
  {
    id: 2,
    image: "https://i.pinimg.com/1200x/a1/62/d0/a162d09c913b12ddef946e579a960735.jpg",
    title: "Mountain Expeditions",
    description: "From the Andes to the Himalayas, find your next high-altitude adventure.",
  },
  {
    id: 3,
    image: "https://i.pinimg.com/1200x/91/8e/11/918e1192864b7e8907a0ec6ec789bd1d.jpg",
    title: "Tropical Paradises",
    description: "Relaxing retreats and turquoise waters await in our latest island guides.",
  },
];

const BlogHero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play logic
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === sliderData.length - 1 ? 0 : prev + 1));
    }, 5000); // Changes every 5 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-[80vh] overflow-hidden bg-gray-800">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="relative w-full h-full"
        >
          {/* Background Image */}
          <Image
            src={sliderData[currentIndex].image}
            alt={sliderData[currentIndex].title}
            fill
            priority
            className="object-cover"
          />
          
          {/* Gradient Overlay for better contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

          {/* Text Content */}
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-6">
            <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-5xl md:text-7xl font-extrabold tracking-tight drop-shadow-2xl"
            >
              {sliderData[currentIndex].title}
            </motion.h1>
            
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-6 text-lg md:text-2xl max-w-3xl font-light text-gray-200 drop-shadow-md"
            >
              {sliderData[currentIndex].description}
            </motion.p>

            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-8 px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-opacity-90 transition-all active:scale-95"
            >
              Read Stories
            </motion.button>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Slider Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        {sliderData.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 transition-all duration-300 rounded-full ${
              currentIndex === index ? "w-8 bg-white" : "w-2 bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default BlogHero;