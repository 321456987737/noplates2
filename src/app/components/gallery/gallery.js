"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const images = [
  {
    src: "/hero.jpg",
    title: "Fresh Coffee Moments",
    desc: "Every cup is brewed with passion and precision.",
  },
  {
    src: "/hero.jpg",
    title: "Cozy Atmosphere",
    desc: "A warm space designed for comfort and connection.",
  },
  {
    src: "/hero.jpg",
    title: "Barista Craft",
    desc: "Skilled hands crafting perfect espresso shots.",
  },
  {
    src: "/hero.jpg",
    title: "Sweet Treats",
    desc: "Freshly baked desserts to complete your experience.",
  },
  {
    src: "/hero.jpg",
    title: "Morning Energy",
    desc: "Start your day with the perfect coffee boost.",
  },
  {
    src: "/hero.jpg",
    title: "Evening Chill",
    desc: "Relax and unwind in a calm café vibe.",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Gallery = () => {
  return (
    <section className="w-full bg-white">

      {/* Header */}
      <div className="text-center py-20 px-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-semibold text-black"
        >
          Our Gallery
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-4 text-gray-500 max-w-xl mx-auto"
        >
          A glimpse into our café experience — crafted with love, detail, and passion.
        </motion.p>
      </div>

      {/* Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-0"
      >
        {images.map((item, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="relative overflow-hidden group"
          >
            {/* Image */}
            <motion.div
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.4 }}
              className="w-full h-[320px] md:h-[380px]"
            >
              <Image
                src={item.src}
                alt={item.title}
                width={800}
                height={800}
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition flex items-end p-6">
              <div className="text-white">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-sm text-gray-200">{item.desc}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

    </section>
  );
};

export default Gallery;