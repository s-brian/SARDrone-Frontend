"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function TeamMemberCarousel({ members }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const currentMember = members[currentIndex]

  const nextMember = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % members.length)
  }

  const prevMember = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + members.length) % members.length)
  }

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  }

  const [direction, setDirection] = useState(0)

  const handleNext = () => {
    setDirection(1)
    nextMember()
  }

  const handlePrev = () => {
    setDirection(-1)
    prevMember()
  }

  return (
    <div className="relative">
      <div className="relative h-[400px] overflow-hidden rounded-lg bg-gray-50">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="absolute inset-0 flex flex-col md:flex-row items-center p-6 md:p-10"
          >
            <div className="relative w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden mb-6 md:mb-0 md:mr-10 flex-shrink-0 border-4 border-white shadow-lg">
              <Image
                src={currentMember.image || "/placeholder.svg"}
                alt={currentMember.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-gray-900 mb-1">{currentMember.name}</h3>
              <p className="text-red-600 font-medium mb-4">{currentMember.role}</p>
              <p className="text-gray-600">{currentMember.bio}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-4">
        <button
          onClick={handlePrev}
          className="p-2 rounded-full bg-white shadow-md hover:bg-gray-50 transition-colors"
          aria-label="Previous team member"
        >
          <ChevronLeft className="w-6 h-6 text-gray-700" />
        </button>

        {/* Indicators */}
        <div className="flex items-center space-x-2">
          {members.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1)
                setCurrentIndex(index)
              }}
              className={`w-2 h-2 rounded-full ${index === currentIndex ? "bg-red-600" : "bg-gray-300"}`}
              aria-label={`Go to team member ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={handleNext}
          className="p-2 rounded-full bg-white shadow-md hover:bg-gray-50 transition-colors"
          aria-label="Next team member"
        >
          <ChevronRight className="w-6 h-6 text-gray-700" />
        </button>
      </div>
    </div>
  )
}
