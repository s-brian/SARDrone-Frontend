"use client";
import TeamSection from "../components/TeamSection";
import ImageCarousel from "../components/TitleCarousel";
import HeroSection from "../components/AboutTitleText";

export default function About() {
  // Team data
  const year = 2025
  const teams = [
    {
      id: "frontend",
      name: "Front-End Team",
      description:
        "The Front-End Team brings concepts to life through sleek design and interactive user interfaces. With a focus on innovation, they ensure each experience is visually stunning and functionally flawless.",
      image: "/frontend.jpg",
      members: [
        {
          name: "Brian Shih",
          role: "Front-End Lead",
          image: "/brian.JPG",
          bio: "Computer Science (3rd)",
          quote: "test"
        },
        {
          name: "Aishni Balaji",
          role: "Team Member",
          image: "/aishni.JPG",
          bio: "Computer Science (3rd)",
          quote: "\"i'll get back to you\" (she never did)"
        },
        {
          name: "Mercy Kim",
          role: "Team Member",
          image: "/mercy.JPG",
          bio: "Data Science (3rd)",
        },
      ],
    },
    {
      id: "backend",
      name: "Back-End Team",
      description:
        "Our Back-End Team builds the architecture that drives our platform, specializing in creating secure, reliable, and scalable systems. They work behind the scenes to ensure that the user experience is fast, efficient, and seamless",
      image: "/backend.jpg",
      members: [
        {
          name: "Kevin Tsoi",
          role: "Back-End Lead",
          image: "/kevin.JPG",
          bio: "Computer Science (2nd)",
          quote: "\"what are other people doing?\""
        },
        {
          name: "Kyle Chu",
          role: "Team Member",
          image: "/kyle.JPG",
          bio: "Software Engineering (3rd)",
          quote: "\"mu class #1\""
        },
        {
          name: "Rachel Tran",
          role: "Team Member",
          image: "/rachel.JPG",
          bio: "Software Engineering (1st)",
          quote: "👅"
        },
        {
          name: "Marvin Zhai",
          role: "Team Member",
          image: "/marvin.JPG",
          bio: "Computer Science (2nd)",
          quote: "\"idk\""
        },
        {
          name: "Jomi Angelina Arockiasamy",
          role: "Team Member",
          image: "/jomi.JPG",
          bio: "Data Science (1st)",
          quote: "\"fundraising became my entire life\""
        },
      ],
    },
    {
      id: "electrical",
      name: "Electrical Team",
      description:
        "The Electrical Team is at the core of our technological advancements, developing and maintaining the electrical systems that make our projects come to life and ensure our systems are both efficient and sustainable.",
      image: "/electrical.jpg",
      members: [
        {
          name: "Erik Cheng",
          role: "Electrical Lead",
          image: "/erik.JPG",
          bio: "Electrical Engineering (2nd)",
        },
        {
          name: "MJ Dilig",
          role: "Electrical Lead",
          image: "/mj.JPG",
          bio: "Computer Engineering (3rd)",
          quote: ""
        },
        {
          name: "Jaden Phan",
          role: "Team Member",
          image: "/jaden.JPG",
          bio: "Electrical Engineering (2nd)",
          quote: "\"hard by day, harder by night\""
        },
        {
          name: "Victor Tran",
          role: "Team Member",
          image: "/victor.JPG",
          bio: "Electrical Engineering (1st)",
        },
        {
          name: "Darrius Robertson",
          role: "Team Member",
          image: "/darrius.JPG",
          bio: "Engineering Technology: Computer System Network Management (2nd)",
          quote: "\"Professional Handstand Man\""
        },
      ],
    },
    {
      id: "cad",
      name: "CAD Team",
      description:
        "The CAD Team excels at taking complex designs and transforming them into comprehensive technical drawings and 3D models. With a focus on precision, they ensure every detail is accounted for, helping to turn concepts into viable products ready for development and production.",
      image: "/cad.jpg",
      members: [
        {
          name: "Vivek Bhakta",
          role: "CAD Lead",
          image: "/vivek.JPG",
          bio: "Engineering Technology: Manufacturing Systems (2nd)",
          quote: "D1 Savers Swiper"
        },
        {
          name: "Kayla Nguyen",
          role: "Team Member",
          image: "/kayla.JPG",
          bio: "Biomedical Engineering (1st)",
          quote: "\"i drive a BMW :)\""
        },
        {
          name: "Stephannie Jimenez Tejeda",
          role: "Team Member",
          image: "/stephannie.JPG",
          bio: "Aerospace Engineering (2nd)",
          quote: "\"contact me for food deliveries\" (works for uber eats)"
        },
        {
          name: "Olivia Huerta",
          role: "Team Member",
          image: "/olivia.JPG",
          bio: "Biomedical Engineering (2nd)",
          quote: "\"uhh ummm\""
        },
        {
          name: "Logan Gee",
          role: "Team Member",
          image: "/logan.JPG",
          bio: "Mechanical Engineering (1st)",
          quote: "\"idk bruh\""
        },
        {
          name: "Yenyi Chen",
          role: "Team Member",
          image: "/yenyi.JPG",
          bio: "Aerospace Engineering (3rd)",
          quote: "Future Boeing Employee 💥"
        },
      ],
    },
  ];

  return (
    <>
      <main className="min-h-screen bg-white">
        {/* Top Carousel Left To Right */}
        <ImageCarousel reverse={true} />

        {/* Hero Section */}
        <HeroSection />
       
       {/* Header Section & Image Carousel*/}
       <div className="text-center mb-20">
          <ImageCarousel />
          </div>
        
        {/* Team Sections */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          
          

          {/* Rendering Team Sections */}
          {teams.map((team, index) => (
            <TeamSection key={team.id} team={team} imagePosition={index % 2 === 0 ? "right" : "left"} />
          ))}
        </div>
      </main>

      {/* Footer Section */}
      <footer className="w-full py-4 px-6 border-t border-gray-800">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; 2025 MERIT+ Drone Systems. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="mailto:pnmspring2025@gmail.com" className="text-gray-400 hover:text-red-500 transition-colors">Support</a>
          </div>
        </div>
      </footer>
    </>
  );
}
