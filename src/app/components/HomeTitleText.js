"use client";

import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const word = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function HeroSection() {
  const heading = "Home Page";
  const words = heading.split(" ");

  return (
    <div className="text-center mb-0 pt-36">
      <motion.h1
        className="text-5xl md:text-6xl font-bold mb-0 tracking-tight text-gray-900 inline-flex flex-wrap justify-center gap-x-2"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {words.map((wordText, i) => (
          <motion.span
            key={i}
            variants={word}
            className={`inline-block ${wordText === "Home" ? "text-red-500" : ""}`}
          >
            {wordText}
          </motion.span>
        ))}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
        className="max-w-3xl mx-auto text-xl text-gray-600 leading-relaxed"
      >
        
      </motion.p>
    </div>
  );
}
