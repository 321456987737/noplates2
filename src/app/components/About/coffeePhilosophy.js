"use client";
import React from "react";
import { motion } from "framer-motion";

const CoffeePhilosophy = () => {
  return (
    <section className="w-full py-28 px-6 bg-[#fafafa] flex justify-center">
      <div className="max-w-6xl w-full space-y-16">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <p className="text-sm tracking-[0.3em] text-gray-400 uppercase">
            Coffee Philosophy
          </p>
          <h2 className="mt-5 text-4xl md:text-5xl heading text-black leading-tight">
            Quality is Not an Option
          </h2>

          <p className="mt-8 text-gray-600 text-lg">
            Every cup we serve follows a simple belief — great coffee comes from
            respect for the process, not shortcuts.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-2xl p-8 space-y-4 border border-gray-100"
          >
            <h3 className="text-xl  text-black">
              Sourced with Care
            </h3>
            <p className="text-gray-600 leading-relaxed">
              We choose beans from growers who focus on quality, sustainability,
              and consistency — not mass production.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-2xl p-8 space-y-4 border border-gray-100"
          >
            <h3 className="text-xl  text-black">
              Roasted with Precision
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Every batch is roasted in small quantities to highlight natural
              flavor, aroma, and balance.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white rounded-2xl p-8 space-y-4 border border-gray-100"
          >
            <h3 className="text-xl  text-black">
              Brewed with Purpose
            </h3>
            <p className="text-gray-600 leading-relaxed">
              We don’t rush coffee. Every cup is prepared with attention to
              timing, temperature, and detail.
            </p>
          </motion.div>

        </div>

        {/* Bottom Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto pt-6"
        >
          <p className="text-xl md:text-2xl heading text-black leading-relaxed">
            Quality is not something we add — it’s something we protect in every step.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default CoffeePhilosophy;

// "use client";
// import React from "react";

// const CoffeePhilosophy = () => {
//   return (
//     <section className="w-full py-28 px-6 bg-[#fafafa] flex justify-center">
//       <div className="max-w-6xl w-full space-y-16">

//         {/* Heading */}
//         <div className="text-center max-w-2xl mx-auto">
//           <p className="text-sm tracking-[0.3em] text-gray-400 uppercase">
//             Coffee Philosophy
//           </p>
//           <h2 className="mt-5 text-4xl md:text-5xl font-semibold text-black leading-tight">
//             Quality is Not an Option
//           </h2>

//           <p className="mt-6 text-gray-600 text-lg">
//             Every cup we serve follows a simple belief — great coffee comes from
//             respect for the process, not shortcuts.
//           </p>
//         </div>

//         {/* Cards */}
//         <div className="grid md:grid-cols-3 gap-8">

//           {/* Card 1 */}
//           <div className="bg-white rounded-2xl p-8 space-y-4 border border-gray-100">
//             <h3 className="text-xl font-semibold text-black">
//               Sourced with Care
//             </h3>
//             <p className="text-gray-600 leading-relaxed">
//               We choose beans from growers who focus on quality, sustainability,
//               and consistency — not mass production.
//             </p>
//           </div>

//           {/* Card 2 */}
//           <div className="bg-white rounded-2xl p-8 space-y-4 border border-gray-100">
//             <h3 className="text-xl font-semibold text-black">
//               Roasted with Precision
//             </h3>
//             <p className="text-gray-600 leading-relaxed">
//               Every batch is roasted in small quantities to highlight natural
//               flavor, aroma, and balance.
//             </p>
//           </div>

//           {/* Card 3 */}
//           <div className="bg-white rounded-2xl p-8 space-y-4 border border-gray-100">
//             <h3 className="text-xl font-semibold text-black">
//               Brewed with Purpose
//             </h3>
//             <p className="text-gray-600 leading-relaxed">
//               We don’t rush coffee. Every cup is prepared with attention to
//               timing, temperature, and detail.
//             </p>
//           </div>

//         </div>

//         {/* Bottom Statement */}
//         <div className="text-center max-w-3xl mx-auto pt-6">
//           <p className="text-xl md:text-2xl font-medium text-black leading-relaxed">
//             Quality is not something we add — it’s something we protect in every step.
//           </p>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default CoffeePhilosophy;