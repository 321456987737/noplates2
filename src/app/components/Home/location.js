"use client";
import React from "react";
import { motion } from "framer-motion";

const Location = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="w-full bg-white py-24 px-6 flex justify-center overflow-hidden"
    >
      <div className="max-w-6xl w-full space-y-14">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl heading text-gray-900">
            Visit Us
          </h2>
          <p className="text-gray-500 mt-4 text-base md:text-lg">
            Find us easily and come enjoy the best coffee experience in town.
          </p>
        </motion.div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full h-[400px] md:h-[500px] rounded-3xl overflow-hidden"
          >
            <iframe
              src="https://www.google.com/maps?q=40.7098478,-74.009123&z=15&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>

          {/* Info Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl md:p-10 p-3 space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <h3 className="text-xl heading text-gray-900">
                No Plates Coffee
              </h3>
              <p className="text-gray-600 mt-2">
                12 John St, New York, NY 10038, United States
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <h3 className="text-xl heading text-gray-900">
                Opening Hours
              </h3>
              <p className="text-gray-600 mt-2">Mon - Sun: 7:00 AM - 5:00 PM</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <h3 className="text-xl heading text-gray-900">Contact</h3>
              <p className="text-gray-600 mt-2">
                +1 929 278 2719 <br />
                info@noplatescoffee.com
              </p>
            </motion.div>
            {/* <div>
              <h3 className="text-xl font-semibold text-gray-900">
                No Plates Coffee
              </h3>
              <p className="text-gray-600 mt-2">
                12 John St, New York, NY 10038, United States
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900">
                Opening Hours
              </h3>
              <p className="text-gray-600 mt-2">
                Mon - Sun: 7:00 AM - 5:00 PM
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900">
                Contact
              </h3>
              <p className="text-gray-600 mt-2">
                +1 929 278 2719 <br />
                info@noplatescoffee.com
              </p>
            </div> */}

            {/* Button */}
            <a
              href="https://www.google.com/maps/place/No+Plates+Coffee/@40.7098478,-74.009123"
              target="_blank"
              className="inline-block text-center border py-4 px-8 rounded-2xl transition"
            >
              Open in Google Maps
            </a>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Location;
// import React from "react";

// const Location = () => {
//   return (
//     <div className="w-full bg-white py-24 px-6 flex justify-center">
//       <div className="max-w-6xl w-full space-y-14">

//         {/* Heading */}
//         <div className="text-center max-w-2xl mx-auto">
//           <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
//             Visit Us
//           </h2>
//           <p className="text-gray-500 mt-4 text-base md:text-lg">
//             Find us easily and come enjoy the best coffee experience in town.
//           </p>
//         </div>

//         {/* Content */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

//           {/* Map */}
//           <div className="w-full h-[400px] md:h-[500px] rounded-3xl overflow-hidden ">
//             <iframe
//               src="https://www.google.com/maps?q=40.7098478,-74.009123&z=15&output=embed"
//               className="w-full h-full border-0"
//               loading="lazy"
//               referrerPolicy="no-referrer-when-downgrade"
//             ></iframe>
//           </div>

//           {/* Info Card */}
//           <div className="bg-white rounded-3xl p-10  space-y-6">

//             <div>
//               <h3 className="text-xl font-semibold text-gray-900">
//                 No Plates Coffee
//               </h3>
//               <p className="text-gray-600 mt-2">
//                 12 John St, New York, NY 10038, United States
//               </p>
//             </div>

//             <div>
//               <h3 className="text-xl font-semibold text-gray-900">
//                 Opening Hours
//               </h3>
//               <p className="text-gray-600 mt-2">
//                 Mon - Sun: 7:00 AM - 5:00 PM
//               </p>
//             </div>

//             <div>
//               <h3 className="text-xl font-semibold text-gray-900">
//                 Contact
//               </h3>
//               <p className="text-gray-600 mt-2">
//                 +1 929 278 2719 <br />
//                 info@noplatescoffee.com
//               </p>
//             </div>

//             {/* Button */}
//             <a
//               href="https://www.google.com/maps/place/No+Plates+Coffee/@40.7098478,-74.009123"
//               target="_blank"
//               className="inline-block text-center border py-4 px-8 rounded-2xl   transition"
//             >
//               Open in Google Maps
//             </a>

//           </div>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default Location;
