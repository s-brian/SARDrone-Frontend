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
  const animationX = reverse ? ["-100%", "0%"] : ["0%", "-100%"];

  return (
    <div className="overflow-hidden w-full py-10 mb-0 mt-0 bg-white">
      <motion.div
        className="flex gap-6"
        animate={{ x: animationX }}
        transition={{
          ease: "linear",
          duration: 20,
          repeat: Infinity,
        }}
      >
        {/* Top/Bottom Carousel*/}
        {images.concat(images).map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`carousel-${index}`}
            className="h-32 w-auto rounded-xl shadow-md"
          />
        ))}
      </motion.div>
    </div>
  );
};

export default ImageCarousel;
