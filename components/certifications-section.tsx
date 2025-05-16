"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { Award, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CardSpotlight } from "@/components/card-spotlight"

const certifications = [
  {
    title: "Python Programming",
    issuer: "HACKERRANK CERTIFICATION",
    date: "FEB 2025",
    description:
      "Comprehensive Python programming course covering fundamentals to advanced concepts..",
    link: "https://www.hackerrank.com/certificates/1fb6d23c9048",
  },
  {
    title: "Data Analytics",
    issuer: "ACCENTURE",
    date: "SEPTEMBER 2024",
    description:
      "Covers data collection, analysis, visualization, and insight generation using real-world data sets.",
    link: "", // no public link
  },
  {
    title: "Generative AI",
    issuer: "Microsoft & LinkedIn",
    date: "AUGUST 2024",
    description:
      "Covers Gen AI concepts, prompt engineering, and ethical use cases in conversational and creative AI.",
    link: "", // no public link
  },
  {
    title: "Cambridge English",
    issuer: "University of Cambridge",
    date: "MARCH 2023",
    description:
      "Internationally recognized English language qualification for advanced level proficiency.",
    link: "", // no public link
  },
]

export function CertificationsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="certifications" ref={ref} className="py-20 relative">
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-5xl font-bold mb-16 text-center text-gradient"
        >
          CERTIFICATIONS
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <CardSpotlight>
                <div className="bg-card/80 backdrop-blur-sm rounded-xl p-6 border border-border shadow-md h-full">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <Award className="w-5 h-5 text-primary" />
                      </div>
                    </div>
                    <div className="flex-grow">
                      <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                        <h3 className="text-lg font-bold">{cert.title}</h3>
                        <span className="text-xs font-medium bg-primary/10 text-primary px-2 py-1 rounded-full">
                          {cert.date}
                        </span>
                      </div>
                      <p className="text-sm text-foreground/70 mb-1">
                        Issued by {cert.issuer}
                      </p>
                      <p className="text-sm mb-4">{cert.description}</p>

                      {cert.link && cert.link.trim() !== "" ? (
                        <Button variant="outline" size="sm" asChild className="text-xs">
                          <Link
                            href={cert.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1"
                          >
                            <ExternalLink size={14} />
                            View Certificate
                          </Link>
                        </Button>
                      ) : (
                        <span className="text-xs italic text-muted-foreground">
                          Certificate not publicly available
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </CardSpotlight>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
