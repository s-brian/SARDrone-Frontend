"use-client";
import Image from "next/image";
import AnimatedText from "./components/AnimatedText";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HomeTitleText";
import { Footer } from "./components/Footer";


export default function Home() {
  return (
    <main className="min-h-screen bg-white overflow-hidden">

{/* Hero Title Animation*/}
<HeroSection/>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <AnimatedText
          title="our mission"
          description="We aim to provide an affordable and easily accessible drone to assist non-funded search and rescue missions."
          imageUrl="/group.jpg"
          imageAlt="Drone illustration"
          imagePosition="right"
        />

        <AnimatedText
          title="the problem"
          description="Most search and rescue operations are run by volunteers with little equipment, leading to delays ranging from from hours to days when finding the location of lost people."
          imageUrl="/mountain.jpg"
          imageAlt="Drone illustration"
          imagePosition="left"
        />

        <AnimatedText
          title="key features"
          description="Camera, Autonomous flight, AI image analyzation and detection"
          imageUrl="/drone.jpg"
          imageAlt="Drone illustration"
          imagePosition="right"
        />
      </div>

      <Footer></Footer>
    </main>
  );
}
