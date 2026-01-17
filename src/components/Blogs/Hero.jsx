"use client";
import Image from "next/image";

const BlogHero = () => {
  return (
    <section className="relative w-full h-[70vh]">
      {/* Background Image */}
      <Image
        src="/blogs.webp"
        alt="Blog Hero"
        fill
        priority
        className="object-cover brightness-75"
      />

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-6">
        <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg">
          Our Travel Blogs
        </h1>
        <p className="mt-4 text-lg md:text-xl max-w-2xl drop-shadow-md">
          Discover inspiring stories, travel tips, and hidden gems from around
          the world. Plan your next journey with us!
        </p>
      </div>
    </section>
  );
};

export default BlogHero;
