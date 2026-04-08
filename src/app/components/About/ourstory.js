"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const OurStory = () => {
  return (
    <section className="w-full py-28 px-6 bg-white flex justify-center mt-32">
      <div className="max-w-6xl w-full space-y-20">

        {/* Top Label */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-sm tracking-[0.3em] text-gray-400 uppercase">
            Our Story
          </p>
          <h2 className="mt-5 text-4xl md:text-5xl heading leading-tight text-black">
            Coffee, Done Differently.
          </h2>
        </motion.div>

        {/* Split Section */}
        <div className="grid md:grid-cols-2 gap-14 items-center">

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 text-gray-700 text-lg leading-relaxed"
          >
            <p>
              We didn’t start with a business plan. We started with a habit — 
              early mornings, strong coffee, and long conversations that never 
              felt like work.
            </p>

            <p>
              Over time, that habit turned into a space. A small one at first. 
              Just a counter, a grinder, and people who cared more about taste 
              than trends.
            </p>

            <p>
              We never tried to be the biggest coffee shop. Just the one you’d 
              come back to when you needed things to feel simple again.
            </p>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative w-full h-[420px] rounded-2xl overflow-hidden"
          >
            <Image
              src="/hero.jpg"
              alt="Coffee Story"
              width={1200}
              height={1200}
              className="object-cover h-full"
            />
          </motion.div>
        </div>

        {/* Bottom Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="border-t pt-12 text-center max-w-3xl mx-auto"
        >
          <p className="text-xl md:text-2xl text-black heading leading-relaxed">
            Good coffee doesn’t need noise. It just needs care.
          </p>
          <p className="mt-4 text-gray-500 text-sm tracking-wide">
            — Built from passion, not pressure
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default OurStory;
// "use client";
// import Image from "next/image";
// import React from "react";
// import { motion } from "framer-motion";
// const OurStory = () => {
//   return (
//     <section className="w-full py-28 px-6 bg-white flex justify-center mt-32">
//       <div className="max-w-6xl w-full space-y-20">

//         {/* Top Label */}
//         <div className="text-center">
//           <p className="text-sm tracking-[0.3em] text-gray-400 uppercase">
//             Our Story
//           </p>
//           <h2 className="mt-5 text-4xl md:text-5xl font-semibold leading-tight text-black">
//             Coffee, Done Differently.
//           </h2>
//         </div>

//         {/* Split Section */}
//         <div className="grid md:grid-cols-2 gap-14 items-center">

//           {/* Text */}
//           <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
//             <p>
//               We didn’t start with a business plan. We started with a habit — 
//               early mornings, strong coffee, and long conversations that never 
//               felt like work.
//             </p>

//             <p>
//               Over time, that habit turned into a space. A small one at first. 
//               Just a counter, a grinder, and people who cared more about taste 
//               than trends.
//             </p>

//             <p>
//               We never tried to be the biggest coffee shop. Just the one you’d 
//               come back to when you needed things to feel simple again.
//             </p>
//           </div>

//           {/* Image */}
//           <div className="relative w-full h-[420px] rounded-2xl overflow-hidden">
//             <Image
//               src="/hero.jpg"
//               alt="Coffee Story"
//               width={1200}
//               height={1200}
//               className="object-cover h-full"
//             />
//           </div>
//         </div>

//         {/* Bottom Statement */}
//         <div className="border-t pt-12 text-center max-w-3xl mx-auto">
//           <p className="text-xl md:text-2xl text-black font-medium leading-relaxed">
//             Good coffee doesn’t need noise. It just needs care.
//           </p>
//           <p className="mt-4 text-gray-500 text-sm tracking-wide">
//             — Built from passion, not pressure
//           </p>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default OurStory;