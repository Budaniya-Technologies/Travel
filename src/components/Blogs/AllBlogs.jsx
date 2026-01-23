"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { apiGet } from "../../../Utils/http";

const getAllBlog = `/apiUser/v1/frontend/getAllBlog?websiteId=${process.env.NEXT_PUBLIC_WEBSITE_ID}`;

const AllBlogs = () => {
  const [blogData, setBlogData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  /* ================= FETCH BLOGS ================= */
  useEffect(() => {
    apiGet(getAllBlog)
      .then((response) => {
        if (response?.status === 200 && Array.isArray(response?.data?.data)) {
          setBlogData(response.data.data);
        } else {
          setError("No blogs available.");
        }
      })
      .catch(() => {
        setError("Failed to load blogs.");
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <p className="text-center py-10">Loading blogs...</p>;
  }

  if (error) {
    return <p className="text-center py-10 text-red-500">{error}</p>;
  }

  return (
    <section className="py-16 bg-gray-50 px-6">
      <div className="max-w-7xl mx-auto">

        {/* ================= HEADING ================= */}
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            Latest <span className="text-indigo-600">Blogs</span>
          </h2>
          <p className="mt-2 text-gray-600 max-w-2xl">
            Insights, stories, and updates curated just for you.
          </p>
          <div className="mt-4 h-1 w-20 bg-indigo-600 rounded-full" />
        </div>

        {/* ================= BLOG GRID ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogData.map((blog) => (
            <Link key={blog.slug} href={`/blog/${blog.slug}`}>
              <div className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden border border-gray-100 cursor-pointer">

                {/* Image */}
                <div className="relative h-56">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                    {blog.title}
                  </h3>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {blog.description}
                  </p>

                  <div className="flex justify-between text-xs text-gray-500">
                    <span className="capitalize">{blog.category}</span>
                    <span>
                      {new Date(blog.createdAt).toLocaleDateString("en-IN")}
                    </span>
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
