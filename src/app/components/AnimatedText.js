"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"

export default function AnimatedText({ title, description, imageUrl, imageAlt, imagePosition }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const textVariants = {
    hidden: { opacity: 0, x: imagePosition === "right" ? -50 : 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  }

  const imageVariants = {
    hidden: { opacity: 0, x: imagePosition === "right" ? 50 : -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.2 } },
  }

  return (
    <div
      ref={ref}
      className={`flex flex-col ${imagePosition === "right" ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-12 py-24`}
    >
      <motion.div className="flex-1" initial="hidden" animate={isInView ? "visible" : "hidden"} variants={textVariants}>
        <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-gray-900 font-sans">
          {title.split(" ").map((word, i) => (
            <span
              key={i}
              className={i === 1 ? "text-red-500 underline decoration-red-500 decoration-2 underline-offset-4" : ""}
            >
              {word}{" "}
            </span>
          ))}
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed">{description}</p>
      </motion.div>


      <motion.div
        className="flex-1"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={imageVariants}
      >
        <div className="relative h-[300px] md:h-[400px] w-full rounded-lg overflow-hidden shadow-xl">
          <Image src={imageUrl || "/placeholder.svg"} alt={imageAlt} fill className="object-cover" />
        </div>
      </motion.div>
    </div>
  )
}
