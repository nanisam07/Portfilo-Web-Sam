import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { SkillsSection } from "@/components/skills-section"
import { EducationSection } from "@/components/education-section"

import { ProjectsSection } from "@/components/projects-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision"


export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Animated Background */}
      <BackgroundBeamsWithCollision className="fixed inset-0 -z-10 h-full w-full">
        {/* Add any valid children content here */}
        <div></div>
      </BackgroundBeamsWithCollision>

      {/* Main Content */}
      <div className="relative z-10">
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <EducationSection />
          
          <ProjectsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </div>
  )
}
