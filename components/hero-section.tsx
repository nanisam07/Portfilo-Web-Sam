"use client"

import { Github } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex flex-col md:flex-row items-center justify-center pt-16 relative">
      <div className="container mx-auto px-4 py-12 flex flex-col md:flex-row items-center justify-between gap-8">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">

            <span className="bg-gradient-to-r from-primary to-red-600 bg-clip-text text-transparent">
              KARRELA SAMUEL VICTOR
            </span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-foreground/80">CEO - idea2site</h2>
          <p className="text-lg text-foreground/70 mb-8 max-w-xl">
            Idea2Site is a startup that helps people turn their ideas into fully functional websites without needing any coding or technical knowledge. Whether you're a student, entrepreneur, small business owner, or freelancer, you simply share your idea, and the Idea2Site team takes care of everything — from design to deployment. The platform offers fast, modern, and mobile-friendly websites tailored to your needs, including features like blogs, portfolios, landing pages, or even e-commerce stores. It’s an ideal solution for anyone who wants to go from idea to live website quickly, professionally, and affordably.

            <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              KARRELA SAMUEL VICTOR
            </span>
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-foreground/80">COMPUTER SCIENCE STUDENT</h2>
          <p className="text-lg text-foreground/70 mb-8 max-w-xl">
            Highly Motivated Computer Science Engineering student with a strong foundation in programming and web
            development. Eager to apply technical knowledge and problem-solving abilities.

          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="glow">
              <Link href="#contact">Get In Touch</Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="backdrop-blur-sm">
              <Link
                href="https://github.com/nanisam07"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Github size={20} />
                GitHub Profile
              </Link>
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 flex justify-center"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20 shadow-xl animate-float">
            <Image
              src="/images/Sam111.jpg"
              alt="Samuel Victor"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent mix-blend-overlay"></div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
