"use client";
import { motion } from "framer-motion";

const images = [
  "/break.jpg",
  "/service.jpg",
  "/innout.jpg",
  "/working.jpg",
  "/canes.jpg",
  "/squad.jpg",
  "/campfire.JPG",
];

const ImageCarousel = ({ reverse = false }) => {
  const animationX = reverse ? ["0%", "-100%"] : ["-100%", "0%"];

  return (
    <div className="overflow-hidden w-full py-10 bg-white">
      <motion.div
        className="flex gap-6 w-max"
        animate={{ x: animationX }}
        transition={{
          ease: "linear",
          duration: 30,
          repeat: Infinity,
        }}
        style={{
          display: "flex",
        }}
      >
        {/* Duplicate image set for seamless infinite scroll */}
        {[...images, ...images].map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`carousel-${index}`}
            className="h-32 w-auto rounded-xl shadow-md flex-shrink-0"
          />
        ))}
      </motion.div>
    </div>
  );
};

export default ImageCarousel;
