"use-client";
import AnimatedText from "./components/AnimatedText";
import HeroSection from "./components/HomeTitleText";
import { Footer } from "./components/Footer";
import DroneRoutingArrow from "./components/DroneRoutingArrow";



export default function Home() {
  return (
    <main className="min-h-screen bg-white overflow-hidden">

{/* Hero Title Animation*/}
<HeroSection/>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <AnimatedText
          title="Our Mission"
          description="Our mission is to design and deliver a low-cost, easy-to-operate drone system specifically tailored for volunteer-based and underfunded search and rescue operations. In many remote or rural regions, professional-grade equipment is either unavailable or very expensive and it leaves teams to rely on outdated or inefficient methods. By prioritizing things such as affordability and minimal training requirements, our solution can bridge the technology gap and give local responders a tool they can depend on, even in areas with limited infrastructure and support."
          imageUrl="/group.jpg"
          imageAlt="Drone illustration"
          imagePosition="right"
        />

        <AnimatedText
          title="The Problem"
          description="In many parts of the world, search and rescue operations are carried out by small groups of volunteers who often lack access to proper funding, equipment, and advanced technology. These teams work under difficult conditions with limited tools such as paper maps, radios, and word-of-mouth as communication. As a result, locating missing individuals can take anywhere from several hours to multiple days which significantly reduces the chance of a successful rescue. The lack of accessible and affordable tools not only delays operations but also puts both the rescuers and those in need of help at greater risk."
          imageUrl="/forest.jpg"
          imageAlt="Drone illustration"
          imagePosition="left"
        />

        <AnimatedText
          title="Key Features"
          description="Our drone system has a high-resolution camera that is capable of capturing clear images. It supports autonomous flight, allowing it to navigate pre-set routes without a constant manual control. This is especially useful for covering areas that are hard to reach on foot. Additionally, the drone integrates AI-powered image analysis and detection capabilities, enabling it to identify signs of human presence in real time."
          imageUrl="/dronefinal.JPG"
          imageAlt="Drone illustration"
          imagePosition="right"
        />
      </div>
      <div className="flex flex-col items-center justify-center py-16">
        <DroneRoutingArrow />
      </div>
      <Footer></Footer>
    </main>
  );
}
