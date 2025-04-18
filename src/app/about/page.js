import TeamSection from "../components/TeamSection"

export default function About() {
  const teams = [
    {
      id: "design",
      name: "Design Team",
      description:
        "Our creative visionaries who transform concepts into stunning visual experiences. They blend aesthetics with functionality to create designs that captivate and engage.",
      image: "/placeholder.svg?height=600&width=800",
      members: [
        {
          name: "Alex Morgan",
          role: "Design Lead",
          image: "/placeholder.svg?height=400&width=400",
          bio: "10+ years of experience in UX/UI design with a focus on user-centered approaches.",
        },
        {
          name: "Jamie Chen",
          role: "Senior Designer",
          image: "/placeholder.svg?height=400&width=400",
          bio: "Specializes in brand identity and visual storytelling across digital platforms.",
        },
        {
          name: "Taylor Reed",
          role: "Motion Designer",
          image: "/placeholder.svg?height=400&width=400",
          bio: "Creates engaging animations and interactive elements that bring designs to life.",
        },
      ],
    },
    {
      id: "development",
      name: "Development Team",
      description:
        "Our technical experts who build robust, scalable solutions using cutting-edge technologies. They turn designs into functional, high-performance digital products.",
      image: "/placeholder.svg?height=600&width=800",
      members: [
        {
          name: "Jordan Smith",
          role: "Tech Lead",
          image: "/placeholder.svg?height=400&width=400",
          bio: "Full-stack developer with expertise in React, Node.js, and cloud architecture.",
        },
        {
          name: "Casey Wong",
          role: "Frontend Developer",
          image: "/placeholder.svg?height=400&width=400",
          bio: "Specializes in creating responsive, accessible user interfaces with modern frameworks.",
        },
        {
          name: "Riley Johnson",
          role: "Backend Developer",
          image: "/placeholder.svg?height=400&width=400",
          bio: "Builds secure, efficient APIs and database solutions for complex applications.",
        },
      ],
    },
    {
      id: "strategy",
      name: "Strategy Team",
      description:
        "Our strategic thinkers who align digital solutions with business objectives. They analyze market trends and user needs to guide project direction.",
      image: "/placeholder.svg?height=600&width=800",
      members: [
        {
          name: "Morgan Taylor",
          role: "Strategy Director",
          image: "/placeholder.svg?height=400&width=400",
          bio: "Develops comprehensive digital strategies that drive business growth and user engagement.",
        },
        {
          name: "Sam Rivera",
          role: "UX Researcher",
          image: "/placeholder.svg?height=400&width=400",
          bio: "Conducts user research to uncover insights that inform product development decisions.",
        },
        {
          name: "Avery Kim",
          role: "Data Analyst",
          image: "/placeholder.svg?height=400&width=400",
          bio: "Translates complex data into actionable insights to optimize digital performance.",
        },
      ],
    },
    {
      id: "marketing",
      name: "Marketing Team",
      description:
        "Our marketing specialists who amplify brand presence and drive user acquisition. They craft compelling narratives that resonate with target audiences.",
      image: "/placeholder.svg?height=600&width=800",
      members: [
        {
          name: "Drew Parker",
          role: "Marketing Lead",
          image: "/placeholder.svg?height=400&width=400",
          bio: "Creates integrated marketing campaigns that build brand awareness and drive conversions.",
        },
        {
          name: "Quinn Lee",
          role: "Content Strategist",
          image: "/placeholder.svg?height=400&width=400",
          bio: "Develops content strategies that engage users and support business objectives.",
        },
        {
          name: "Jordan Casey",
          role: "Social Media Manager",
          image: "/placeholder.svg?height=400&width=400",
          bio: "Builds community and drives engagement through strategic social media initiatives.",
        },
      ],
    },
  ]

  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Header Section */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight text-gray-900 relative inline-block">
            <span className="text-red-500">Our </span>
            Team
          </h1>
          <p className="max-w-3xl mx-auto text-xl text-gray-600 leading-relaxed">
            We're a diverse group of passionate individuals who combine expertise, creativity, and dedication to deliver
            exceptional digital experiences that exceed expectations.
          </p>
        </div>

        {/* Team Sections */}
        {teams.map((team, index) => (
          <TeamSection key={team.id} team={team} imagePosition={index % 2 === 0 ? "right" : "left"} />
        ))}
      </div>
    </main>
  )
}