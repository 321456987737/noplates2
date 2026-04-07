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
            src="/hero.jpg"
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
              className="md:text-5xl text-4xl md:mb-8  mb-6 font-sans"
            >
              Discover Our Coffee Selection
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className=" md:max-w-[450px] max-w-[320px] "
            >
              Indulge in a menu designed for true coffee lovers. Each cup at Noplat3es is brewed to perfection, offering bold flavors, smooth textures, and an unforgettable experience.
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
                className="md:text-lg max-w-[450px]  tracking-[0.3em]"
              >
                Welcome to
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
                viewport={{ once: true }}
                className="md:text-8xl text-6xl  md:mt-8 mt-6 font-sans"
              >
                Our Menu
              </motion.h1>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Herosection;

// "use client";
// import Image from 'next/image'
// import React from 'react'
// import { motion } from 'framer-motion'
// const Herosection = () => {
//   return (
//        <div className="relative">
//           <Image
//             src="/hero.jpg"
//             alt="Hero"
//             loading="eager"
//             width={2400}
//             height={2400}
//             className="h-[90vh] w-full object-cover"
//           />

//           <div className="h-[90vh] w-full bg-black/45 absolute inset-0 z-10" />

//           <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center flex items-center justify-center flex-col w-full text-white px-4 z-20">
//             <motion.h1
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5 }}
//                  viewport={{once:true}}
//               className="md:text-5xl text-4xl md:mb-8  mb-6 font-sans"
//             >
//               No Plates Just Taste.
//             </motion.h1>
//             <motion.p
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               transition={{ duration: 0.5, delay: 0.2 }}
//               viewport={{once:true}}
//               className=" md:max-w-[450px] max-w-[320px] "
//             >
//               Experience food differently. fresh flavors beautiful presentation,
//               and moment worth savoring - without the rules
//             </motion.p>
//           </div>
//         </div>
//   )
// }

// export default Herosection
