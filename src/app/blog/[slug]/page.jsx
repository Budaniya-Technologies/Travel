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
    return <p className="text-center py-24 text-lg text-black">Loading...</p>;
  }

  if (error) {
    return <p className="text-center py-24 text-red-600">{error}</p>;
  }

  return (
    <article className="bg-white min-h-screen text-black">

      {/* ================= HERO IMAGE ================= */}
      <section className="relative w-full h-[80vh]">
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/50" />

        <div className="absolute inset-0 flex items-center justify-center px-6">
          <div className="max-w-5xl text-center text-white">
            <span className="inline-block mb-3 px-4 py-1 text-xs tracking-widest uppercase bg-white/20 rounded-full">
              {blog.category}
            </span>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
              {blog.title}
            </h1>
          </div>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="relative -mt-24 px-4">
        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl p-6 md:p-12">

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-700 mb-6">
            <span className="px-3 py-1 rounded-full bg-black text-white font-semibold">
              {blog.category}
            </span>
            <span className="tracking-wide">
              {new Date(blog.createdAt).toLocaleDateString("en-IN", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </span>
          </div>

          {/* Short Description */}
          <p className="text-xl text-black leading-relaxed border-l-4 border-black pl-4 mb-10">
            {blog.description}
          </p>

          {/* Main Content */}
          <div
            className="prose prose-lg max-w-none text-black prose-headings:text-black prose-p:leading-relaxed prose-a:text-black hover:prose-a:underline"
            dangerouslySetInnerHTML={{
              __html: blog.slugContent,
            }}
          />
        </div>
      </section>

    </article>
  );
};

export default BlogDetails;
