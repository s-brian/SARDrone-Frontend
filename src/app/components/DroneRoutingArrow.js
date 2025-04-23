"use client"

import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function AnimatedArrow() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <Link href="/drones">
      <div
        className={`fixed bottom-8 right-8 z-50 transition-all duration-500 ease-in-out ${
          isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
        }`}
      >
        <div className="group flex h-14 items-center justify-end rounded-full bg-red-500 text-white shadow-lg transition-all duration-300 hover:bg-red-600 hover:shadow-red-300/50 w-14 hover:w-36 overflow-hidden">
          <span className="absolute left-5 font-bold opacity-0 transition-opacity duration-300 group-hover:opacity-100 whitespace-nowrap">
            To Drone
          </span>

          <div className="flex h-14 w-14 items-center justify-center">
            <ArrowRight
              className="h-6 w-6 animate-pulse-horizontal transition-transform duration-300 group-hover:translate-x-1"
              strokeWidth={2.5}
            />
          </div>
        </div>
      </div>
    </Link>
  )
}
