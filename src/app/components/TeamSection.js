"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import TeamMemberCarousel from "./TeamMemberCarousel"

export default function TeamSection({ team, imagePosition }) {
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
      className={`flex flex-col ${imagePosition === "right" ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-12 py-24 border-t border-gray-100 first:border-t-0`}
    >
      <motion.div
        className="flex-1 w-full"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={textVariants}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight text-gray-900">
          {team.name.split(" ").map((word, i) => (
            <span key={i} className={i === 0 ? "relative" : ""}>
              {i === 0 && (
                <span className="absolute bottom-1 left-0 w-full h-1 bg-red-500 transform scale-x-50 origin-left"></span>
              )}
              {word}{" "}
            </span>
          ))}
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed mb-10">{team.description}</p>

        {/* Team Member Carousel */}
        <TeamMemberCarousel members={team.members} />
      </motion.div>

      <motion.div
        className="flex-1 w-full"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={imageVariants}
      >
        <div className="relative h-[300px] md:h-[500px] w-full rounded-lg overflow-hidden shadow-xl">
          <Image src={team.image || "/placeholder.svg"} alt={`${team.name} team`} fill className="object-cover" />
        </div>
      </motion.div>
    </div>
  )
}
