"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CardSpotlight } from "@/components/card-spotlight"

const projects = [
  {
    title: "Weather App",
    description: "A responsive weather application that provides real-time weather information based on location.",
    tags: ["React", "API", "JavaScript"],
    image: "/images/weather.png",

    demo: "https://weather-based-activity-recommender.onrender.com/",

  },
  {
    title: "Restaurant Web Application",
    description: "A full-featured restaurant website with menu, ordering, and reservation system.",
    tags: ["React", "Node.js", "MongoDB"],
    image: "/images/restroo111.png",
  },
  {
    title: "Password Generator",
    description: "A secure password generator with customizable options for length and character types.",
    tags: ["JavaScript", "HTML", "CSS"],
    image: "/images/pass.png",

    demo: "https://password-generator-sam.vercel.app/",


  },
  {
    title: "Online Games Portal",
    description: "A platform hosting multiple browser-based games with user accounts and leaderboards.",
    tags: ["JavaScript", "HTML5", "CSS3"],
    image: "/images/online game .png",

    demo: "https://online-game-sigma.vercel.app/",


  },
  {
    title: "Blinkit Sales Analysis Dashboard",
    description: "An interactive dashboard visualizing sales data and trends for Blinkit.",
    tags: ["PowerBI", "Data Analysis", "SQL"],
    image: "/images/blinkit-sales .png",
  },
  {
    title: "E-Government Website using AI",
    description: "An AI-enhanced government portal that streamlines citizen services and information access.",
    tags: ["Python", "AI/ML", "Web Development"],
    image: "/images/government .png",
  },
]

export function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="projects" ref={ref} className="py-20 relative">
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-5xl font-bold mb-16 text-center text-gradient"
        >
          MY PROJECTS
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div key={project.title} variants={itemVariants}>
              <CardSpotlight className="h-full">
                <div className="bg-card/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg border border-border h-full">
                  <div className="h-48 relative overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-foreground/70 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-medium bg-primary/10 text-primary px-2 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex justify-between">

                      
{project.demo ? (
  <Button variant="default" size="sm" asChild>
    <Link
      href={project.demo}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-1"
    >
      <ExternalLink size={16} />
      Demo
    </Link>
  </Button>
) : null}
                    </div>
                  </div>
                </div>
              </CardSpotlight>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
