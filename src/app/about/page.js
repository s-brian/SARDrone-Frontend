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
          bio: "Third year Computer Science major",
        },
        {
          name: "Aishni Balaji",
          role: "Team Member",
          image: "/aishni.JPG",
          bio: "Third year Computer Science major",
        },
        {
          name: "Mercy Kim",
          role: "Team Member",
          image: "/mercy.JPG",
          bio: "Third year Data Science major",
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
          bio: "Second year Computer Science major",
        },
        {
          name: "Kyle Chu",
          role: "Team Member",
          image: "/kyle.JPG",
          bio: "Third year Computer Science major",
        },
        {
          name: "Rachel Tran",
          role: "Team Member",
          image: "/rachel.JPG",
          bio: "First year Software Engineering major",
        },
        {
          name: "Marvin Zhai",
          role: "Team Member",
          image: "/marvin.JPG",
          bio: "Second year Computer Science major",
        },
        {
          name: "Jomi Angelina Arockiasamy",
          role: "Team Member",
          image: "/jomi.JPG",
          bio: "First year Data Science major",
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
          bio: "Second year Electrical Engineering major",
        },
        {
          name: "MJ Dilig",
          role: "Electrical Lead",
          image: "/mj.JPG",
          bio: "Third year Computer Engineering major",
        },
        {
          name: "Jaden Phan",
          role: "Team Member",
          image: "/jaden.JPG",
          bio: "Second year Electrical Engineering major",
        },
        {
          name: "Victor Tran",
          role: "Team Member",
          image: "/victor.JPG",
          bio: "First year Electrical Engineering major",
        },
        {
          name: "Darrius Robertson",
          role: "Team Member",
          image: "/darrius.JPG",
          bio: "Second year Undeclared major",
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
          bio: "Second year Engineering Technology: Manufacturing Systems major",
        },
        {
          name: "Kayla Nguyen",
          role: "Team Member",
          image: "/kayla.JPG",
          bio: "First year Biomedical Engineering major",
        },
        {
          name: "Stephannie Jimenez Tejeda",
          role: "Team Member",
          image: "/stephannie.JPG",
          bio: "Second year Aerospace Engineering major",
        },
        {
          name: "Olivia Huerta",
          role: "Team Member",
          image: "/olivia.JPG",
          bio: "Second year Biomedical Engineering major",
        },
        {
          name: "Logan Gee",
          role: "Team Member",
          image: "/logan.JPG",
          bio: "First year Mechanical Engineering major",
        },
        {
          name: "Yenyi Chen",
          role: "Team Member",
          image: "/yenyi.JPG",
          bio: "Third year Aerospace Engineering major",
        },
      ],
    },
  ];

  return (
    <>
      <main className="min-h-screen bg-white">
        {/* Top Carousel (reverse direction) */}
        <ImageCarousel reverse={true} />

        {/* Hero Section */}
        <HeroSection />

       {/* Glowing Border around title */}
       
        
        {/* Team Sections */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          
          {/* Header Section & Image Carousel*/}
          <div className="text-center mb-20">
          <ImageCarousel />
          </div>

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
            &copy; MERIT+ Drone Systems. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="mailto:pnmspring2025@gmail.com" className="text-gray-400 hover:text-red-500 transition-colors">Support</a>
          </div>
        </div>
      </footer>
    </>
  );
}
