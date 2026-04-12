"use client";
import React from "react";
import {motion} from "framer-motion"
const OpeningHours = () => {
  return (
    <section className="w-full py-24 px-6 bg-[#fafafa] rounded-t-[120px] flex justify-center">
      <div className="max-w-4xl w-full">

        {/* Heading */}
        <div className="text-center mb-14">
          <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-sm tracking-[0.3em] text-gray-400 uppercase">
            Opening Hours
          </motion.p>
          <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="mt-4 text-4xl md:text-5xl heading text-black">
            Visit Us Anytime
          </motion.h2>
          <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="mt-8 text-gray-600  mx-auto max-w-[450px]">
            We’re here to serve you fresh coffee and a warm atmosphere every day.
          </motion.p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 md:p-10 p-3  space-y-8">

          {/* Weekdays */}
          <div className="flex justify-between items-center border-b pb-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <h3 className="text-lg  text-black">
                Monday – Friday
              </h3>
              <p className="text-sm text-gray-500">
                Weekdays
              </p>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.25 }}
              className="text-lg font-semibold text-black">
              8:00 AM – 10:00 PM
            </motion.p>
          </div>

          {/* Weekend */}
          <div className="flex justify-between items-center border-b pb-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <h3 className="text-lg  text-black">
                Saturday – Sunday
              </h3>
              <p className="text-sm text-gray-500">
                Weekend
              </p>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="text-lg font-semibold text-black">
              9:00 AM – 11:00 PM
            </motion.p>
          </div>

          {/* Holiday Note */}
          <div className="pt-4">
            <motion.p initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.4}} className="text-sm text-gray-500 text-center">
              * Hours may vary on public holidays. Please check our social pages
              for updates.
            </motion.p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default OpeningHours;