"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const drinks = [
  {
    name: "Espresso",
    desc: "Strong and bold shot of pure coffee flavor.",
    price: "$3.50",
    img: "/menu/drink/OIP-Picsart-BackgroundRemover.jpg",
  },
  {
    name: "Latte",
    desc: "Rich espresso with steamed milk and foam.",
    price: "$4.50",
    img: "/menu/drink/Latte.webp",
  },
  {
    name: "Croissant",
    desc: "Buttery and flaky pastry perfect for breakfast.",
    price: "$4.75",
    img: "/menu/food/croissants.png",
  },
  {
    name: "Chocolate Muffin",
    desc: "Moist and delicious muffin infused with rich chocolate flavor.",
    price: "$4.00",
    img: "/menu/food/chocolate.png",
  },
];

// Animation variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { y: 40, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function Menusection() {
  return (
    <section className="w-full md:pt-15 pt-8  md:pb-35 pb-20  mt-[24vh] bg-[#ffffff]">
      <div className="max-w-7xl mx-auto md:px-6 px-2">
        
        {/* Heading */}
        <div className="text-center md:mb-20 mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-semibold mt-3 mb-8"
          >
            Featured Menu
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-gray-500 mt-4 max-w-xl mx-auto"
          >
            Discover our most loved handcrafted coffee drinks made with freshly
            roasted beans and premium ingredients.
          </motion.p>
        </div>

        {/* Products */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 md:gap-10 gap-4"
        >
          {drinks.map((drink, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="group rounded-3xl md:p-6"
            >
              {/* Image */}
              <div className="relative flex justify-center items-center mb-6 h-[150px]">
                <Image
                  src={drink.img}
                  alt={drink.name}
                  loading="eager"
                  width={180}
                  height={180}
                  className="object-contain group-hover:scale-110 transition duration-300 w-full h-full"
                />
              </div>

              {/* Info */}
              <div className="flex items-center justify-between mt-6 w-full">
                <h3 className="text-[18px] font-semibold">
                  {drink.name}
                </h3>
                <span className="text-lg font-semibold text-[#6f4e37]">
                  {drink.price}
                </span>
              </div>

              <p className="text-gray-500 text-sm mt-3 text-[14px]">
                {drink.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="flex w-full items-center justify-center mt-6"
        >
          <Link href="/Menu">
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 px-6 py-3 cursor-pointer border text-black rounded-md"
            >
              Visit Menu
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
