"use-client";
import Image from "next/image";
import AnimatedText from "./components/AnimatedText";
import Navbar from "./components/Navbar";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <AnimatedText
          title="i changed this :P"
          description="this is what i want to put here mercy200"
          imageUrl="/placeholder.svg?height=600&width=800"
          imageAlt="Drone illustration"
          imagePosition="right"
        />

        <AnimatedText
          title="Title"
          description="Description"
          imageUrl="/placeholder.svg?height=600&width=800"
          imageAlt="Drone illustration"
          imagePosition="left"
        />

        <AnimatedText
          title="Title"
          description="Description"
          imageUrl="/placeholder.svg?height=600&width=800"
          imageAlt="Drone illustration"
          imagePosition="right"
        />
      </div>

      <Footer></Footer>
    </main>
  );
}
