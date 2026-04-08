"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const Startinganimation = () => {
  const [show, setShow] = useState(true);
  const [phase, setPhase] = useState("expand"); 
  // expand → hold → exit

  useEffect(() => {
    // Step 1: expand → hold
    const t1 = setTimeout(() => {
      setPhase("hold");
    }, 1800);

    // Step 2: shrink (exit animation)
    const t2 = setTimeout(() => {
      setPhase("exit");
    }, 2600);

    // Step 3: remove component
    const t3 = setTimeout(() => {
      setShow(false);
    }, 3400);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[999] flex items-center justify-center bg-white"
          exit={{ opacity: 0 }}
        >
          {/* 🔵 BLUE CIRCLE */}
          <motion.div
            className="absolute inset-0 bg-[#2E479C]"
            initial={{ clipPath: "circle(0% at 50% 50%)" }}
            animate={
              phase === "expand"
                ? { clipPath: "circle(150% at 50% 50%)" }
                : phase === "hold"
                ? { clipPath: "circle(150% at 50% 50%)" }
                : { clipPath: "circle(0% at 50% 50%)" }
            }
            transition={{ duration: 1.2, ease: "easeInOut" }}
          />

          {/* CENTER LOGO (NO SCALE ANIMATION NOW) */}
          <motion.div
            className="relative z-10"
            initial={{ opacity: 1 }}
            animate={{ opacity: phase === "exit" ? 0 : 1 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src="/noplates.jpg"
              alt="logo"
              width={200}
              height={200}
              loading="eager"
              className="rounded-full object-cover width-[120px] height-[120px] md:width-[600px] md:height-[240px]"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Startinganimation;