"use-client"

import Link from "next/link"
import { Github, Instagram, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="mx-auto border-t py-6 md:py-0 bg-black text-white">
      <div className="container flex flex-col items-start justify-between gap-4 md:h-24 md:flex-row md:items-center">
        <div className="flex flex-col items-start gap-2 pl-8">
          <p className="text-sm text-gray-400">Connect with us</p>
          <div className="flex items-center gap-3">
            <Link
              href="https://github.com/s-brian/SARDrone-Frontend"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://www.instagram.com/pnm.25/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
            <a href="mailto:pnmspring2025@gmail.com" className="text-gray-400 hover:text-white transition-colors">
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </a>

          </div>
        </div>
      </div>
    </footer>
  )
}
