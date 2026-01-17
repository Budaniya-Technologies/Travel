"use client";
import React from "react";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

// Example Data with Locations
const craftsData = [
  {
    id: 1,
    title: "Handwoven Textiles",
    description: "Intricately designed fabrics crafted with traditional looms.",
    image:
      "https://weaverhut.com/wp-content/uploads/2020/12/1_W6Gf9hw8fOprL0T1VmkDNA.jpeg",
    location: "Varanasi, Uttar Pradesh",
  },
  {
    id: 2,
    title: "Clay Pottery",
    description: "Timeless pottery pieces that embody heritage and utility.",
    image:
      "https://www.dharamkotstudio.com/wp-content/uploads/2025/01/A-piece-of-terracotta-at-Dharamkot-Studio-Dharamshala-India-1080x628.jpg",
    location: "Khurja, Uttar Pradesh",
  },
  {
    id: 3,
    title: "Wood Carving",
    description: "Exquisite carvings showcasing centuries-old artistry.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO_v-3s4wnEC4ZF0dK1CovTNw6nbP4X1WSyA&s",
    location: "Saharanpur, Uttar Pradesh",
  },
  {
    id: 4,
    title: "Metal Crafts",
    description: "Detailed metal works blending durability with design.",
    image:
      "https://c9admin.cottage9.com/uploads/2432/Metal-Art-In-Medieval-India-q4bcvw21hkf44qj9807ewk374wdags9jmj2zrsv2tk.jpg",
    location: "Moradabad, Uttar Pradesh",
  },
];

const CraftsSection = () => {
  return (
    <section className="relative w-full py-10 md:px-12 bg-white">
      <div className="relative z-10">
        {/* Heading */}
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl font-extrabold text-blue-600 drop-shadow-lg"
          >
            Exquisite Crafts <br />
            <span className="text-amber-400">of Timeless Tradition</span>
          </motion.h2>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Discover Indiass rich heritage through artisanal masterpieces,
            crafted with devotion and passed on through generations.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {craftsData.map((craft, index) => (
            <motion.div
              key={craft.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 bg-white/95 backdrop-blur-lg hover:-translate-y-2">
                <img
                  src={craft.image}
                  alt={craft.title}
                  className="w-full h-52 object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="p-6">
                  {/* Location */}
                  <div className="flex items-center text-amber-600 text-sm mb-2 font-medium">
                    <MapPin className="w-4 h-4 mr-1" />
                    {craft.location}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {craft.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {craft.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CraftsSection;
