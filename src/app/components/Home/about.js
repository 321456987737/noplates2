"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

/* ================= ANIMATION VARIANTS ================= */
const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  show: { opacity: 1, y: 0 }
};

const leftSlide = {
  hidden: { opacity: 0, x: -80 },
  show: { opacity: 1, x: 0 }
};

const rightSlide = {
  hidden: { opacity: 0, x: 80 },
  show: { opacity: 1, x: 0 }
};

const imageZoom = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1 }
};

const About = () => {
  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <div className="relative w-full ">
        <div className="sticky top-0 h-screen w-full z-0">
          <Image
            src="/hero.jpg"
            alt="Hero"
            loading="eager"
            width={1920}
            height={1000}
            className="h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 h-[120vh] flex flex-col items-center justify-top pt-24 text-center text-white px-4">
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl heading mb-6"
          >
            No Plates Just Taste.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-base md:text-lg max-w-xl "
          >
            Experience food differently. Fresh flavors, beautiful presentation,
            and moments worth savoring — without the rules.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="px-8 py-4 cursor-pointer mt-12 border rounded-sm heading"
          >
            <Link href="/About-us">About us</Link>
          </motion.button>
        </div>
      </div>

      {/* ================= OVERLAPPING SECTION ================= */}
      <div className="relative z-20 -mt-64  flex items-center justify-center overflow-hidden ">
        <div className="w-full flex items-center justify-center md:py-20 pt-20 ">

          <div className="w-full max-w-6xl bg-white rounded-t-[120px] px-6 md:px-16 py-20 space-y-28">

            {/* Heading */}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="text-center max-w-2xl mx-auto"
            >
              <h2 className="text-4xl md:text-5xl heading tracking-tight text-gray-900">
                Why Choose Us
              </h2>
              <p className="text-gray-500 mt-8 md:mt-12 text-base md:text-lg  md:max-w-112.5 max-w-87.5 mx-auto">
                Simple, fresh and made with love — crafted to give you the best experience every time.
              </p>
            </motion.div>

            {/* CARD 1 */}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={leftSlide}
              transition={{ duration: 0.6 }}
              className="flex flex-col md:flex-row items-center gap-10 md:gap-16"
            >
              <div className="w-full md:w-1/2 text-center md:text-left">
                <h3 className="text-2xl md:text-3xl heading text-gray-900 mb-4">
                  Fresh Ingredients
                </h3>
                <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                  We carefully select fresh, locally sourced ingredients to ensure rich flavor and top quality in every bite.
                </p>
              </div>

              <motion.div
                variants={imageZoom}
                className="w-full md:w-1/2 h-65 md:h-80 rounded-3xl overflow-hidden"
              >
                <Image
                  src="/about/download (1)aaaa 1.png"
                  alt="Fresh Ingredients"
                  width={1200}
                  loading="eager"
                  height={1200}
                  className="object-cover h-full w-full"
                />
              </motion.div>
            </motion.div>

            {/* CARD 2 */}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={rightSlide}
              transition={{ duration: 0.6 }}
              className="flex flex-col md:flex-row-reverse items-center gap-10 md:gap-16"
            >
              <div className="w-full md:w-1/2 text-center md:text-left">
                <h3 className="text-2xl md:text-3xl heading text-gray-900 mb-4">
                  Modern Recipes
                </h3>
                <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                  Our chefs blend tradition with innovation to create modern dishes that excite your taste buds.
                </p>
              </div>

              <motion.div
                variants={imageZoom}
                className="w-full md:w-1/2 h-65 md:h-80 rounded-3xl overflow-hidden"
              >
                <Image
                  src="/about/download (1)222 1.png"
                  alt="Modern Recipes"
                  width={600}
                  loading="eager"
                  height={600}
                  className="object-cover h-full w-full"
                />
              </motion.div>
            </motion.div>

            {/* CARD 3 */}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={leftSlide}
              transition={{ duration: 0.6 }}
              className="flex flex-col md:flex-row items-center gap-10 md:gap-16"
            >
              <div className="w-full md:w-1/2 text-center md:text-left">
                <h3 className="text-2xl md:text-3xl heading text-gray-900 mb-4">
                  Cozy Experience
                </h3>
                <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                  Enjoy a warm and inviting atmosphere designed for comfort, connection, and memorable moments.
                </p>
              </div>

              <motion.div
                variants={imageZoom}
                className="w-full md:w-1/2 h-65 md:h-80 rounded-3xl overflow-hidden"
              >
                <Image
                  src="/about/download(1)ccc1.png"
                  alt="Cozy Experience"
                  width={600}
                  loading="eager"
                  height={600}
                  className="object-cover h-full w-full"
                />
              </motion.div>
            </motion.div>

          </div>
        </div>
      </div>
    </>
  );
};

export default About;