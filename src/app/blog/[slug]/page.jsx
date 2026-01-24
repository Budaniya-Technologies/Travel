"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { apiGet } from "../../../../Utils/http";

const BlogDetails = () => {
  const { slug } = useParams();

  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  /* ================= FETCH BLOG DETAILS ================= */
  useEffect(() => {
    if (!slug) return;

    const fetchBlogDetails = async () => {
      try {
        setLoading(true);

        const response = await apiGet(
          `/apiUser/v1/frontend/getAllBlog/${slug}?websiteId=${process.env.NEXT_PUBLIC_WEBSITE_ID}`
        );

        if (response?.status === 200 && response?.data?.data?.length > 0) {
          setBlog(response.data.data[0]);
        } else {
          setError("Blog not found.");
        }
      } catch (err) {
        setError("Failed to load blog details.");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogDetails();
  }, [slug]);

  if (loading) {
    return <p className="text-center py-16 text-lg">Loading...</p>;
  }

  if (error) {
    return <p className="text-center py-16 text-red-500">{error}</p>;
  }

  return (
    <article className="bg-white">

      {/* ================= HERO IMAGE ================= */}
      <section className="relative w-full h-[70vh]">
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          priority
          className="object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Hero Content */}
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <div className="max-w-4xl text-center text-white">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              {blog.title}
            </h1>
          </div>
        </div>
      </section>

      <div className="p-8">
          {/* Category & Date */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-4">
            <span className="px-3 py-1 rounded-full bg-indigo-100 text-indigo-600 font-semibold">
              {blog.category}
            </span>
            <span>
              {new Date(blog.createdAt).toLocaleDateString("en-IN", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
            {blog.title}
          </h1>

          {/* Short Description */}
          <p className="text-lg text-gray-600 mb-8">
            {blog.description}
          </p>

          {/* HTML Content */}
          <div
            className="prose max-w-none text-gray-800"
            dangerouslySetInnerHTML={{
              __html: blog.slugContent,
            }}
          />
        </div>
    </article>
  );
};

export default BlogDetails;
