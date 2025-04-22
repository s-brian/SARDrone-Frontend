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
          title="Our Mission"
          description="Our mission is to design and deliver a low-cost, easy-to-operate drone system specifically tailored for volunteer-based and underfunded search and rescue operations. In many remote or rural regions, professional-grade equipment is either unavailable or prohibitively expensive, leaving teams to rely on outdated or inefficient methods. By prioritizing affordability, portability, and minimal training requirements, our solution aims to bridge the technology gap and empower local responders with a tool they can depend on, even in areas with limited infrastructure or support."
          imageUrl="/group.jpg"
          imageAlt="Drone illustration"
          imagePosition="right"
        />

        <AnimatedText
          title="The Problem"
          description="In many parts of the world, search and rescue operations are carried out by small groups of dedicated volunteers who often lack access to proper funding, equipment, and advanced technology. These teams work under difficult conditions—navigating vast forests, rugged mountains, and remote terrain—using limited tools such as paper maps, radios, and word-of-mouth coordination. As a result, locating missing individuals can take anywhere from several hours to multiple days, significantly reducing the chances of a successful rescue. The lack of accessible and affordable tools not only delays operations but also puts both the rescuers and those in need of help at greater risk."
          imageUrl="/mountain.jpg"
          imageAlt="Drone illustration"
          imagePosition="left"
        />

        <AnimatedText
          title="Key Features"
          description="Our drone system is equipped with a high-resolution camera capable of capturing clear images. It supports autonomous flight, allowing it to navigate pre-set routes without constant manual control, which is especially useful for covering areas that are hard to reach on foot. Additionally, the drone integrates AI-powered image analysis and detection capabilities, enabling it to automatically identify signs of human presence in real time—helping to streamline the search process and assist rescue teams in focusing their efforts more effectively."
          imageUrl="/drone.jpg"
          imageAlt="Drone illustration"
          imagePosition="right"
        />
      </div>

      <Footer></Footer>
    </main>
  );
}
