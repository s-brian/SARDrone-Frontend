"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Inter } from "next/font/google";
import { motion } from "framer-motion"; // Import motion from framer-motion

// Initialize the Inter font
const inter = Inter({ subsets: ["latin"] });

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check for authentication token on component mount and when it changes
  useEffect(() => {
    // Check if we're in the browser environment
    if (typeof window !== 'undefined') {
      const authToken = localStorage.getItem('authToken');
      setIsAuthenticated(!!authToken);
      
      // Setup event listener for storage changes
      const handleStorageChange = () => {
        const token = localStorage.getItem('authToken');
        setIsAuthenticated(!!token);
      };
      
      window.addEventListener('storage', handleStorageChange);
      
      // Cleanup event listener on unmount
      return () => {
        window.removeEventListener('storage', handleStorageChange);
      };
    }
  }, []);

  // Toggle mobile menu state
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="bg-black">
      <div className="w-full py-4 px-6 flex justify-between items-center border-b border-gray-800">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center"
        >
          <Link href="/" className="flex items-center">
            <h1 className="text-4xl font-bold">
              <span className="text-red-600">MERIT</span>
              <span className="text-white">+</span>
            </h1>
          </Link>
        </motion.div>

        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex space-x-8"
        >
          <Link
            href="/"
            className="text-white hover:text-red-500 transition-colors"
          >
            Home
          </Link>
          <Link
            href="/map"
            className="text-white hover:text-red-500 transition-colors"
          >
            Map
          </Link>
          <Link
            href="/about"
            className="text-white hover:text-red-500 transition-colors"
          >
            About
          </Link>
          {isAuthenticated ? (
            <Link
              href="/drones"
              className="text-white hover:text-red-500 transition-colors"
            >
              Drones
            </Link>
          ) : (
            <Link
              href="/login"
              className="text-white hover:text-red-500 transition-colors"
            >
              Login
            </Link>
          )}
        </motion.nav>
      </div>
    </div>
  );
}
