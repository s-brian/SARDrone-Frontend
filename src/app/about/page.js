import TeamSection from "../components/TeamSection"

export default function About() {
  // Team data
  const teams = [
    {
      id: "frontend",
      name: "Front-End Team",
      description:
        "Our creative visionaries who transform concepts into stunning visual experiences. They blend aesthetics with functionality to create designs that captivate and engage.",
      image: "/placeholder.svg?height=600&width=800",
      members: [
        {
          name: "Brian Shih",
          role: "Front-End Lead",
          image: "/placeholder.svg?height=400&width=400",
          bio: "10+ years of experience in UX/UI design with a focus on user-centered approaches.",
        },
        {
          name: "Aishni Balaji",
          role: "Team Member",
          image: "/placeholder.svg?height=400&width=400",
          bio: "Specializes in brand identity and visual storytelling across digital platforms.",
        },
        {
          name: "Mercy Kim",
          role: "Team Member",
          image: "/placeholder.svg?height=400&width=400",
          bio: "Creates engaging animations and interactive elements that bring designs to life.",
        },
      ],
    },
    {
      id: "backend",
      name: "Back-End Team",
      description:
        "Our technical experts who build robust, scalable solutions using cutting-edge technologies. They turn designs into functional, high-performance digital products.",
      image: "/placeholder.svg?height=600&width=800",
      members: [
        {
          name: "Kevin Tsoi",
          role: "Back-End Lead",
          image: "/placeholder.svg?height=400&width=400",
          bio: "Full-stack developer with expertise in React, Node.js, and cloud architecture.",
        },
        {
          name: "Kyle Chu",
          role: "Team Member",
          image: "/placeholder.svg?height=400&width=400",
          bio: "Specializes in creating responsive, accessible user interfaces with modern frameworks.",
        },
        {
          name: "Rachel Tran",
          role: "Team Member",
          image: "/placeholder.svg?height=400&width=400",
          bio: "Builds secure, efficient APIs and database solutions for complex applications.",
        },
        {
          name: "Marvin Zhai",
          role: "Team Member",
          image: "/placeholder.svg?height=400&width=400",
          bio: "Specializes in creating responsive, accessible user interfaces with modern frameworks.",
        },
        {
          name: "Jomi Angelina Arockiasamy",
          role: "Team Member",
          image: "/placeholder.svg?height=400&width=400",
          bio: "Specializes in creating responsive, accessible user interfaces with modern frameworks.",
        },
      ],
    },
    {
      id: "electrical",
      name: "Electrical Team",
      description:
        "Our strategic thinkers who align digital solutions with business objectives. They analyze market trends and user needs to guide project direction.",
      image: "/placeholder.svg?height=600&width=800",
      members: [
        {
          name: "Erik Cheng",
          role: "Electrical Lead",
          image: "/placeholder.svg?height=400&width=400",
          bio: "Develops comprehensive digital strategies that drive business growth and user engagement.",
        },
        {
          name: "MJ Dilig",
          role: "Electrical Lead",
          image: "/placeholder.svg?height=400&width=400",
          bio: "Conducts user research to uncover insights that inform product development decisions.",
        },
        {
          name: "Jaden Phan",
          role: "Team Member",
          image: "/placeholder.svg?height=400&width=400",
          bio: "Translates complex data into actionable insights to optimize digital performance.",
        },
        {
          name: "Victor Tran",
          role: "Team Member",
          image: "/placeholder.svg?height=400&width=400",
          bio: "Translates complex data into actionable insights to optimize digital performance.",
        },
        {
          name: "Darrius Robertson",
          role: "Team Member",
          image: "/placeholder.svg?height=400&width=400",
          bio: "Translates complex data into actionable insights to optimize digital performance.",
        },
      ],
    },
    {
      id: "cad",
      name: "CAD Team",
      description:
        "Our marketing specialists who amplify brand presence and drive user acquisition. They craft compelling narratives that resonate with target audiences.",
      image: "/placeholder.svg?height=600&width=800",
      members: [
        {
          name: "Vivek Bhakta",
          role: "CAD Lead",
          image: "/placeholder.svg?height=400&width=400",
          bio: "Creates integrated marketing campaigns that build brand awareness and drive conversions.",
        },
        {
          name: "Kayla Nguyen",
          role: "Team Member",
          image: "/placeholder.svg?height=400&width=400",
          bio: "Develops content strategies that engage users and support business objectives.",
        },
        {
          name: "Stephannie Jimenez Tejeda",
          role: "Team Member",
          image: "/placeholder.svg?height=400&width=400",
          bio: "Builds community and drives engagement through strategic social media initiatives.",
        },
        {
          name: "Olivia Huerta",
          role: "Team Member",
          image: "/placeholder.svg?height=400&width=400",
          bio: "Develops content strategies that engage users and support business objectives.",
        },
        {
          name: "Logan Gee",
          role: "Team Member",
          image: "/placeholder.svg?height=400&width=400",
          bio: "Builds community and drives engagement through strategic social media initiatives.",
        },
        {
          name: "Yenyi Chen",
          role: "Team Member",
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
            We are a diverse group of passionate individuals who combine expertise, creativity, and dedication to deliver
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