// components/TravelStories.jsx
"use client";

import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const teamData = [
  {
    id: 1,
    name: "Honymoon trips",
    role: "Trevel with Your Love",
    img: "https://i.pinimg.com/1200x/fe/a2/f6/fea2f6e5a464b0fa11529eb28ccfa698.jpg",
    discription:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis perferendis hic asperiores quibusdam quidem voluptates doloremque reiciendis nostrum harum. Repudiandae?",
  },
  {
    id: 2,
    name: "Family Trps",
    role: "Trevel with Your Family",
    img: "https://i.pinimg.com/736x/d6/17/54/d617543e81c95aff42d5e2801b39cabf.jpg",
    discription:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis perferendis hic asperiores quibusdam quidem voluptates doloremque reiciendis nostrum harum. Repudiandae?",
  },
  {
    id: 3,
    name: "Solo Trip",
    role: "Trevel In Peace",
    img: "https://i.pinimg.com/736x/20/ef/9d/20ef9d6ce8c29353a2e76a6d90c2a5f2.jpg",
    discription:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis perferendis hic asperiores quibusdam quidem voluptates doloremque reiciendis nostrum harum. Repudiandae?",
  },
  {
    id: 4,
    name: "Groups Trips",
    role: "Trevel In Bus",
    img: "https://i.pinimg.com/736x/e9/6b/bd/e96bbd51a3d2f0a76cbba7260576cb7b.jpg",
    discription:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis perferendis hic asperiores quibusdam quidem voluptates doloremque reiciendis nostrum harum. Repudiandae?",
  },
];

// Framer Motion animation for cards
const cardAnimation = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function TravelStories() {
  return (
    <section className="bg-white py-7 px-6">
      <div className="max-w-7xl mx-auto text-center mb-5">
        <h1 className="text-3xl md:text-4xl font-bold text-orange-600">
          Personalize Packages
        </h1>
        <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
          perferendis hic asperiores quibusdam.
        </p>
      </div>

      <div className="max-w-7xl mx-auto flex items-center gap-4">
        {/* Left Arrow */}
        <button className="swiper-button-prev-custom bg-gray-500 p-3 rounded-full shadow-md">
          ◀
        </button>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="w-full"
        >
          {teamData.map((member) => (
            <SwiperSlide key={member.id}>
              <motion.div
                variants={cardAnimation}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                <Link
                  href="#"
                  className="group relative block bg-black rounded-lg overflow-hidden w-full h-[250px]"
                >
                  <img
                    src={member.img}
                    alt={member.name}
                    className="absolute inset-0 h-[250px] w-full rounded-lg object-cover opacity-75 transition-opacity group-hover:opacity-50"
                  />

                  <div className="relative p-4 sm:p-6 lg:p-8 h-full flex flex-col justify-between">
                    <div>
                      <p className="text-sm font-medium tracking-widest text-pink-500 uppercase">
                        {member.role}
                      </p>
                      <p className="text-xl font-bold text-white sm:text-2xl">
                        {member.name}
                      </p>
                    </div>

                    <div className="mt-0 sm:mt-0 lg:mt-10">
                      <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                        <p className="text-sm text-white leading-[15px]">
                          {member.discription}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Right Arrow */}
        <button className="swiper-button-next-custom bg-gray-500 p-3 rounded-full shadow-md">
          ▶
        </button>
      </div>
    </section>
  );
}
