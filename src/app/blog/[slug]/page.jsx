import Image from "next/image";

const blogs = [
  {
    slug: "goas-beach-vibes",
    title: "Goa's Beach Vibes",
    description:
      "From vibrant nightlife to calm sunsets, Goa offers a perfect mix of relaxation and adventure.",
    image: "/slider.png",
  },
  {
    slug: "himalayan-adventures",
    title: "Himalayan Adventures",
    description:
      "Experience trekking, camping, and adventure sports in the breathtaking landscapes of Himachal.",
    image: "/slider3.png",
  },
  {
    slug: "exploring-the-backwaters-of-kerala",
    title: "Exploring the Backwaters of Kerala",
     description:
      "Discover the serene beauty of Kerala's houseboats, coconut lagoons, and tranquil backwaters.",
    image: "/slider2.jpg",
  },
];

export default function BlogDetails({ params }) {
  const blog = blogs.find((b) => b.slug === params.slug);

  if (!blog) {
    return <h1 className="text-center text-2xl mt-20">Blog not found</h1>;
  }

  return (
    <>
      <div className="relative w-full h-[500px]">
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          className="object-cover shadow-lg"
        />

        <div className="absolute inset-0 bg-black/40 rounded-2xl"></div>
        <div className="absolute bottom-6 left-6 text-white">
          <h1 className="text-4xl font-bold mt-6">{blog.title}</h1>
        </div>
      </div>
      <div className="max-w-3xl mx-auto p-6">
        <p className="mt-4 text-gray-700 text-lg leading-relaxed">
          {blog.description}
        </p>
      </div>
    </>
  );
}
