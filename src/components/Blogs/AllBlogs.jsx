"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

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
  return (
    <section className="py-12 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">

         <h2 className="text-3xl font-bold text-center mb-10 text-indigo-600">
          ✍️ Latest Travel Blogs
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
             <Link key={blog.slug} href={`/blog/${blog.slug}`}>
            <div
              key={blog.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              {/* Blog Image */}
              <div className="relative w-full h-56">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Blog Content */}
              <div className="p-5">
                <h3 className="text-xl text-red-400 mb-2">{blog.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{blog.description}</p>

                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>👤 {blog.author}</span>
                  <span>📅 {blog.date}</span>
                </div>
              </div>
            </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllBlogs;
