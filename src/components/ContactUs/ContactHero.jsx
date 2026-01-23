"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function ContactHero() {
  const [isMobile, setIsMobile] = useState(false);
  const [current, setCurrent] = useState(0);

  const cards = [
    { id: 1, height: 220, img: "https://i.pinimg.com/1200x/1f/38/9e/1f389e0049129be6552311c883023c04.jpg" },
    { id: 2, height: 260, img: "https://i.pinimg.com/1200x/01/b4/74/01b4747e4f8bba96ae9d2f37107f1d9c.jpg" },
    { id: 3, height: 300, img: "https://i.pinimg.com/736x/6b/99/b2/6b99b225b7cfcb5eed3c68c34bde48cf.jpg" },
    { id: 4, height: 240, img: "https://i.pinimg.com/1200x/4b/95/31/4b9531827dbc2f6e33c5fa39c1da361a.jpg" },
    { id: 5, height: 280, img: "https://i.pinimg.com/1200x/64/33/f5/6433f527adf6cef8ef881d77e32ddde8.jpg" },
    { id: 6, height: 260, img: "https://i.pinimg.com/1200x/fe/c0/fb/fec0fb1c9a2a70f4812e3fe9ddc88d86.jpg" },
    { id: 7, height: 290, img: "https://i.pinimg.com/736x/fd/5a/fb/fd5afbbb8f27f6973493fa5a77e27246.jpg" },
  ];

  /* Detect screen size */
  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 768);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  /* Auto slider for mobile */
  useEffect(() => {
    if (!isMobile) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % cards.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isMobile, cards.length]);

  /* ================= MOBILE SLIDER ================= */
  if (isMobile) {
    return (
      <motion.div
        className="relative w-full h-[300px] overflow-hidden rounded-xl"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {cards.map((card, index) => (
          <div
            key={card.id}
            className={`absolute inset-0 transition-opacity duration-700 ${
              current === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={card.img}
              alt="slider image"
              fill
              className="object-cover"
              priority={index === 0}
            />
          </div>
        ))}
      </motion.div>
    );
  }

  /* ================= DESKTOP MASONRY ================= */
  return (
    <motion.div
      className="columns-2 md:columns-3 lg:columns-4 gap-4 m-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.12,
          },
        },
      }}
    >
      {cards.map((card) => (
        <motion.div
          key={card.id}
          className="break-inside-avoid bg-white rounded-xl shadow-md mb-4 overflow-hidden"
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.6, ease: "easeOut" },
            },
          }}
        >
          <div className="relative w-full" style={{ height: card.height }}>
            <Image
              src={card.img}
              alt="masonry image"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
