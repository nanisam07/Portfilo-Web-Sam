"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { GraduationCap, School } from "lucide-react"
import { CardSpotlight } from "@/components/card-spotlight"

export function EducationSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const educationData = [
    {

      period: "2022-2026",
      
      degree: "Bachelor of Technology",
      field: "COMPUTER SCIENCE ENGINEERING",
      institution: "MALLAREDDY INSTITUTE OF ENGINEERING AND TECHNOLOGY",
      grade: "C.GPA : 9.2 / 10.0",
      icon: <GraduationCap className="w-10 h-10 text-primary" />,
    },
    {
      period: "2020-2022",
      degree: "High School",
      field: "",
      institution: "N.S.R JUNIOR COLLEGE",
      grade: "Percentage : 96.4 %",
      icon: <School className="w-10 h-10 text-primary" />,
      achievement: "Achieved #1 class ranking out of 450 students",
    },
    {
      period: "2019-2020",
      degree: "S.S.C",
      field: "",
      institution: "OXFORD HIGH SCHOOL",
      grade: "C.GPA : 10.0 / 10.0",
      icon: <School className="w-10 h-10 text-primary" />,
    },
  ]

  return (
    <section id="education" ref={ref} className="py-20 bg-background/50 relative">
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-5xl font-bold mb-16 text-center text-gradient"
        >
          EDUCATION
        </motion.h2>

        <div className="max-w-3xl mx-auto">
          {educationData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="mb-12 relative"
            >
              {/* Timeline connector */}
              {index < educationData.length - 1 && (
                <div className="absolute left-5 top-16 bottom-0 w-0.5 bg-gradient-to-b from-primary to-primary/20 h-full" />
              )}

              <div className="flex gap-6">
                <div className="flex-shrink-0 z-10 bg-card/80 backdrop-blur-sm p-2 rounded-full border border-border shadow-md">
                  {item.icon}
                </div>
                <div className="flex-grow">
                  <CardSpotlight>
                    <div className="bg-card/80 backdrop-blur-sm rounded-xl shadow-md p-6 border border-border hover:shadow-lg transition-shadow duration-300">
                      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                        <h3 className="text-xl font-bold">{item.degree}</h3>
                        <span className="text-sm font-medium text-foreground/70 bg-primary/10 px-3 py-1 rounded-full">
                          {item.period}
                        </span>
                      </div>
                      {item.field && <p className="text-lg font-semibold text-primary mb-2">{item.field}</p>}
                      <p className="mb-2">{item.institution}</p>
                      <p className="font-medium">{item.grade}</p>
                      {item.achievement && <p className="mt-3 text-sm italic text-foreground/80">{item.achievement}</p>}
                    </div>
                  </CardSpotlight>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
