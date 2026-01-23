"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const blogs = [
  {
    id: 1,
    title: "Exploring the Backwaters of Kerala",
    description:
      "Discover the serene beauty of Kerala's houseboats, coconut lagoons, and tranquil backwaters.",
    image: "/slider2.jpg",
    author: "Radhika Sharma",
    date: "Aug 20, 2025",
    slug: "exploring-the-backwaters-of-kerala",
  },
  {
    id: 2,
    title: "Himalayan Adventures",
    description:
      "Experience trekking, camping, and adventure sports in the breathtaking landscapes of Himachal.",
    image: "/slider3.png",
    author: "Vinay Kumar",
    date: "Aug 18, 2025",
    slug: "himalayan-adventures",
  },
  {
    id: 3,
    title: "Goa's Beach Vibes",
    description:
      "From vibrant nightlife to calm sunsets, Goa offers a perfect mix of relaxation and adventure.",
    image: "/slider.png",
    author: "Travel Guru",
    date: "Aug 15, 2025",
    slug: "goas-beach-vibes",
  },
  
];

const AllBlogs = () => {
  const [index, setIndex] = useState(0);

  /* ================= AUTO SLIDE ================= */
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % blogs.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* ================= HEADING ================= */}
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            Latest <span className="text-indigo-600">Travel Blogs</span>
          </h2>
          <p className="mt-2 text-gray-600 max-w-2xl">
            Travel stories, tips, and unforgettable journeys curated just for you.
          </p>
          <div className="mt-4 h-1 w-20 bg-indigo-600 rounded-full" />
        </div>

        {/* ================= SLIDER ================= */}
        <div className="relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {blogs
                .slice(index, index + 3)
                .concat(blogs.slice(0, Math.max(0, index + 3 - blogs.length)))
                .map((blog) => (
                  <Link key={blog.slug} href={`/blog/${blog.slug}`}>
                    <motion.div
                      whileHover={{ y: -8 }}
                      className="group bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl overflow-hidden border border-gray-100"
                    >
                      {/* Image */}
                      <div className="relative h-56 overflow-hidden">
                        <Image
                          src={blog.image}
                          alt={blog.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <h3 className="absolute bottom-4 left-4 right-4 text-lg font-semibold text-white">
                          {blog.title}
                        </h3>
                      </div>

                      {/* Content */}
                      <div className="p-5">
                        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                          {blog.description}
                        </p>

                        <div className="flex justify-between items-center text-xs text-gray-500">
                          <span>👤 {blog.author}</span>
                          <span>📅 {blog.date}</span>
                        </div>
                      </div>
                    </motion.div>
                  </Link>
                ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ================= DOT INDICATORS ================= */}
        <div className="flex justify-center gap-2 mt-8">
          {blogs.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-2 w-2 rounded-full transition ${
                i === index ? "bg-indigo-600 w-6" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllBlogs;
