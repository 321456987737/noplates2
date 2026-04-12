"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
const Herosection = () => {
  return (
    <>
      <div className="relative">
        {/* HERO */}
        <div className="relative">
          <Image
            src="/heroimage1.jpg"
            alt="Hero"
            loading="eager"
            width={2400}
            height={2400}
            className="md:h-[110vh] h-[80vh] w-full object-cover"
          />

          <div className="md:h-[110vh] h-[80vh] w-full bg-black/45 absolute inset-0 z-10" />

          <div className="absolute left-1/2 top-2/5 -translate-x-1/2 -translate-y-1/2 text-center flex items-center justify-center flex-col w-full text-white px-4 z-20">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="md:text-5xl text-4xl md:mb-8  mb-6 heading leading-normal"
            >
              Get in Touch with 
              <br />
              No Plates Coffee.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className=" md:max-w-112.5 max-w-87.5 "
            >
              Every great conversation starts with a cup of coffee. Whether you have a question, a suggestion, or just want to share your love for coffee — we’re here and ready to listen.
            </motion.p>
          </div>
        </div>

        {/* OVERLAPPING SECTION */}
        <div className="absolute bottom-[-25vh] left-0 w-full z-30">
          <div className="bg-white md:h-[60vh] h-[48vh] flex items-center justify-center md:rounded-tl-[300px] md:rounded-tr-[300px] rounded-tl-[120px] rounded-tr-[120px]">
            <motion.div className="text-center">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.15 }}
                viewport={{ once: true }}
                className="md:text-lg max-w-112.5  tracking-[0.3em]"
              >
                Welcome to
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
                viewport={{ once: true }}
                className="md:text-8xl text-6xl heading  md:mt-8 mt-6 font-sans"
              >
                Contact Us
              </motion.h1>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Herosection;