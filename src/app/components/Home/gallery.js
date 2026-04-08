"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
const Gallery = () => {
  return (
    <div className="w-full md:pb-24 pb-18  px-6 flex justify-center ">
      <div className="max-w-7xl w-full space-y-16">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl heading text-gray-900"
          >
            Our Gallery
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            viewport={{ once: true }}
            className="text-gray-500 mt-8 md:mt-12"
          >
            A glimpse of our experience
          </motion.p>
        </div>

        {/* Custom Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 auto-rows-[150px] gap-5">
          {/* BIG (2x2) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6,delay: 0.2 }}
            viewport={{ once: true }}
            className="col-span-2 row-span-2 bg-gray-200 rounded-2xl overflow-hidden"
          >
            <Image
              src="/about/download(1)ccc1.png"
              alt="image"
              width={600}
              height={600}
              className="rounded-2xl  object-cover h-full w-full"
            />
          </motion.div>

          {/* Right side small stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 ,delay: 0.25}}
            viewport={{ once: true }}
            className="bg-gray-200 rounded-2xl"
          >
            {" "}
            <Image
              src="/about/download(1)ccc1.png"
              alt="image"
              width={600}
              height={600}
              className="rounded-2xl object-cover h-full w-full"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-gray-200 rounded-2xl"
          >
            {" "}
            <Image
              src="/about/download(1)ccc1.png"
              alt="image"
              width={600}
              height={600}
              className="rounded-2xl object-cover h-full w-full"
            />
          </motion.div>

          {/* Next row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 ,delay: 0.35}}
            viewport={{ once: true }}
            className="bg-gray-200 rounded-2xl"
          >
            {" "}
            <Image
              src="/about/download(1)ccc1.png"
              alt="image"
              width={600}
              height={600}
              className="rounded-2xl object-cover h-full w-full"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 ,delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-gray-200 rounded-2xl"
          >
            {" "}
            <Image
              src="/about/download(1)ccc1.png"
              alt="image"
              width={600}
              height={600}
              className="rounded-2xl object-cover h-full w-full"
            />
          </motion.div>

          {/* Last of first section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6,delay: 0.45 }}
            viewport={{ once: true }}
            className="bg-gray-200 rounded-2xl"
          >
            {" "}
            <Image
              src="/about/download(1)ccc1.png"
              alt="image"
              width={600}
              height={600}
              className="rounded-2xl object-cover h-full w-full"
            />
          </motion.div>

          {/* ---- SECOND SECTION ---- */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 ,delay: 0.5 }}
            viewport={{ once: true }}
            className="bg-gray-200 rounded-2xl"
          >
            {" "}
            <Image
              src="/about/download(1)ccc1.png"
              alt="image"
              width={600}
              height={600}
              className="rounded-2xl object-cover h-full w-full"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6,delay: 0.55 }}
            viewport={{ once: true }}
            className="bg-gray-200 rounded-2xl col-span-2 lg:col-span-1"
          >
            {" "}
            <Image
              src="/about/download(1)ccc1.png"
              alt="image"
              width={600}
              height={600}
              className="rounded-2xl object-cover h-full w-full"
            />
          </motion.div>

          {/* BIG CENTER (2x2) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6,delay: 0.6 }}
            viewport={{ once: true }}
            className="col-span-2 row-span-2 bg-gray-200 rounded-2xl"
          >
            <Image
              src="/about/download(1)ccc1.png"
              alt="image"
              width={600}
              height={600}
              className="rounded-2xl object-cover h-full w-full"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6,delay: 0.65 }}
            viewport={{ once: true }}
            className="bg-gray-200 rounded-2xl sm:row-span-2 lg:row-span-1"
          >
            {" "}
            <Image
              src="/about/download(1)ccc1.png"
              alt="image"
              width={600}
              height={600}
              className="rounded-2xl object-cover h-full w-full"
            />
          </motion.div>

          {/* Bottom row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            viewport={{ once: true }}
            className="bg-gray-200 rounded-2xl"
          >
            {" "}
            <Image
              src="/about/download(1)ccc1.png"
              alt="image"
              width={600}
              height={600}
              className="rounded-2xl object-cover h-full w-full"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.75 }}
            viewport={{ once: true }}
            className="bg-gray-200 rounded-2xl"
          >
            {" "}
            <Image
              src="/about/download(1)ccc1.png"
              alt="image"
              width={600}
              height={600}
              className="rounded-2xl object-cover h-full w-full"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6,delay: 0.8 }}
            viewport={{ once: true }}
            className="bg-gray-200 rounded-2xl sm:row-span-2 lg:row-span-1"
          >
            {" "}
            <Image
              src="/about/download(1)ccc1.png"
              alt="image"
              width={600}
              height={600}
              className="rounded-2xl object-cover h-full w-full"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6,delay: 0.85 }}
            viewport={{ once: true }}
            className="bg-gray-200 rounded-2xl col-span-2 lg:col-span-1"
          >
            {" "}
            <Image
              src="/about/download(1)ccc1.png"
              alt="image"
              width={600}
              height={600}
              className="rounded-2xl object-cover h-full w-full"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
