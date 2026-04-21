"use client";

import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { motion } from "framer-motion";
import { MoveLeftIcon,MoveRightIcon } from "lucide-react";
const team = [
  { name: "John Doe", role: "Head Barista", image: "/workers/1.jpg" },
  { name: "Sarah Khan", role: "Coffee Roaster", image: "/workers/2.jpg" },
  { name: "Ali Ahmed", role: "Cafe Manager", image: "/workers/3.jpg" },
  { name: "Emma Watson", role: "Customer Experience", image: "/workers/4.webp" },
];

const loopedTeam = [...team, ...team];

const TeamCarousel = () => {
  const autoplay = React.useRef(
    Autoplay({
      delay: 3000,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    })
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start" },
    [autoplay.current]
  );

  // ✅ Navigation functions
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className="w-full py-24 bg-white overflow-hidden relative">
      {/* Heading */}
      <div className="text-center mb-12 px-6">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-sm tracking-[0.3em] text-gray-400 uppercase"
        >
          Meet the Team
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 text-4xl md:text-5xl heading text-black"
        >
          The People Behind Every Cup
        </motion.h2>
      </div>

      {/* Carousel */}
      <motion.div
        ref={emblaRef}
        initial={{ y: 30 }}
        whileInView={{ y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-screen overflow-hidden"
      >
        <div className="flex cursor-grab active:cursor-grabbing">
          {loopedTeam.map((member, index) => (
            <div
              key={index}
              className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
            >
              <div className="relative h-[500px] w-full">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={1200}
                  height={1200}
                  className="object-cover h-full w-full"
                />

                <div className="absolute bottom-0 left-0 w-full bg-black/50 text-white p-6">
                  <h3 className="text-xl heading">{member.name}</h3>
                  <p className="text-sm text-gray-200">{member.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/*  ✅ Navigation Buttons */}
      <div className="w-full flex items-center justify-center mt-8 gap-8">

      <button
        onClick={scrollPrev}
        className=" bg-white/80 backdrop-blur px-4 py-2 rounded-full shadow hover:bg-white transition"
      >
                <MoveLeftIcon size={24}/>
      </button>

      <button
        onClick={scrollNext}
        className=" bg-black text-white px-4 py-2 rounded-full shadow hover:bg-gray-800 transition"
        >
        <MoveRightIcon size={24}/>
      </button>
         </div>
    </section>
  );
};

export default TeamCarousel;

// "use client";

// import React, { useCallback, useEffect } from "react";
// import useEmblaCarousel from "embla-carousel-react";
// import Image from "next/image";
// import { delay, motion } from "framer-motion";
// const team = [
//   {
//     name: "John Doe",
//     role: "Head Barista",
//     image: "/workers/1.jpg",
//   },
//   {
//     name: "Sarah Khan",
//     role: "Coffee Roaster",
//     image: "/workers/2.jpg",
//   },
//   {
//     name: "Ali Ahmed",
//     role: "Cafe Manager",
//     image: "/workers/3.jpg",
//   },
//   {
//     name: "Emma Watson",
//     role: "Customer Experience",
//     image: "/workers/4.webp",
//   },
// ];

// const TeamCarousel = () => {
//   const [emblaRef, emblaApi] = useEmblaCarousel({
//     loop: true,
//     align: "start",
//   });

//   const scrollPrev = useCallback(() => {
//     if (emblaApi) emblaApi.scrollPrev();
//   }, [emblaApi]);

//   const scrollNext = useCallback(() => {
//     if (emblaApi) emblaApi.scrollNext();
//   }, [emblaApi]);

//   // ✅ AUTO SCROLL ADDED ONLY HERE
//   useEffect(() => {
//     if (!emblaApi) return;

//     const interval = setInterval(() => {
//       emblaApi.scrollNext();
//     }, 3000); // change speed here (3s)

//     return () => clearInterval(interval);
//   }, [emblaApi]);

//   return (
//     <section className="w-full py-24 bg-white overflow-hidden">
//       {/* Heading */}
//       <div className="text-center mb-12 px-6">
//         <motion.p
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-sm tracking-[0.3em] text-gray-400 uppercase"
//         >
//           Meet the Team
//         </motion.p>
//         <motion.h2
//              initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 , delay: 0.2}}
//           className="mt-4 text-4xl md:text-5xl heading text-black"
//         >
//           The People Behind Every Cup
//         </motion.h2>
//       </div>

//       {/* FULL WIDTH CAROUSEL */}
//       <motion.div    initial={{  y: 30 }}
//           whileInView={{ y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }} className="w-screen overflow-hidden" ref={emblaRef}>
//         <div className="flex hover:cursor-grab ">
//           {team.map((member, index) => (
//             <div
//               key={index}
//               className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
//             >
//               <div className="relative h-[500px] w-full">
//                 <Image
//                   src={member.image}
//                   alt={member.name}
//                   width={1200}
//                   height={1200}
//                   className="object-cover h-full"
//                 />

//                 {/* Overlay */}
//                 <div className="absolute bottom-0 left-0 w-full bg-black/50 text-white p-6">
//                   <h3 className="text-xl heading">{member.name}</h3>
//                   <p className="text-sm text-gray-200">{member.role}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </motion.div>

//       {/* Buttons */}
//       <motion.div    initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }} className="flex justify-center gap-6 mt-10">
//         <button
//           onClick={scrollPrev}
//           className="px-6 py-2 rounded-full border border-gray-300 hover:bg-gray-100 transition"
//         >
//           Prev
//         </button>

//         <button
//           onClick={scrollNext}
//           className="px-6 py-2 rounded-full bg-black text-white hover:bg-gray-800 transition"
//         >
//           Next
//         </button>
//       </motion.div>
//     </section>
//   );
// };

// export default TeamCarousel;


















// "use client";

// import React, { useCallback } from "react";
// import useEmblaCarousel from "embla-carousel-react";
// import Image from "next/image";

// const team = [
//   {
//     name: "John Doe",
//     role: "Head Barista",
//     image: "/hero.jpg",
//   },
//   {
//     name: "Sarah Khan",
//     role: "Coffee Roaster",
//     image: "/hero.jpg",
//   },
//   {
//     name: "Ali Ahmed",
//     role: "Cafe Manager",
//     image: "/hero.jpg",
//   },
//   {
//     name: "Emma Watson",
//     role: "Customer Experience",
//     image: "/hero.jpg",
//   },
// ];

// const TeamCarousel = () => {
//   const [emblaRef, emblaApi] = useEmblaCarousel({
//     loop: true,
//     align: "start",
//   });

//   const scrollPrev = useCallback(() => {
//     if (emblaApi) emblaApi.scrollPrev();
//   }, [emblaApi]);

//   const scrollNext = useCallback(() => {
//     if (emblaApi) emblaApi.scrollNext();
//   }, [emblaApi]);

//   return (
//     <section className="w-full py-24 bg-white overflow-hidden">

//       {/* Heading */}
//       <div className="text-center mb-12 px-6">
//         <p className="text-sm tracking-[0.3em] text-gray-400 uppercase">
//           Meet the Team
//         </p>
//         <h2 className="mt-4 text-4xl md:text-5xl font-semibold text-black">
//           The People Behind Every Cup
//         </h2>
//       </div>

//       {/* FULL WIDTH CAROUSEL */}
//       <div className="w-screen overflow-hidden" ref={emblaRef}>
//         <div className="flex hover:cursor-grab ">

//           {team.map((member, index) => (
//             <div
//               key={index}
//               className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
//             >
//               <div className="relative h-[500px] w-full">

//                 <Image
//                   src={member.image}
//                   alt={member.name}
//                   fill
//                   className="object-cover"
//                 />

//                 {/* Overlay */}
//                 <div className="absolute bottom-0 left-0 w-full bg-black/50 text-white p-6">
//                   <h3 className="text-xl font-semibold">
//                     {member.name}
//                   </h3>
//                   <p className="text-sm text-gray-200">
//                     {member.role}
//                   </p>
//                 </div>

//               </div>
//             </div>
//           ))}

//         </div>
//       </div>

//       {/* Buttons */}
//       <div className="flex justify-center gap-6 mt-10">
//         <button
//           onClick={scrollPrev}
//           className="px-6 py-2 rounded-full border border-gray-300 hover:bg-gray-100 transition"
//         >
//           Prev
//         </button>

//         <button
//           onClick={scrollNext}
//           className="px-6 py-2 rounded-full bg-black text-white hover:bg-gray-800 transition"
//         >
//           Next
//         </button>
//       </div>

//     </section>
//   );
// };

// export default TeamCarousel;
