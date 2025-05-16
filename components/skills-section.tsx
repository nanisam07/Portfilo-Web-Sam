"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { CardSpotlight } from "@/components/card-spotlight"

const techSkills = [
  { name: "Python", logo: "/images/python.png", proficiency: 90 },
  { name: "Java", logo: "/images/java.png", proficiency: 85 },
  { name: "C", logo: "/images/c.png", proficiency: 80 },
  { name: "PowerBI", logo: "/images/powerbi.png", proficiency: 88 },
  { name: "Kotlin", logo: "/images/kotlin.png", proficiency: 75 },
  { name: "SQL, MySQL", logo: "/images/sql.jpg", proficiency: 85 },
  { name: "Web Development", logo: "/images/webdev.png", proficiency: 82 },
]

const softSkills = [
  { name: "Teamwork", proficiency: 95 },
  { name: "Time Management", proficiency: 90 },
  { name: "Leadership", proficiency: 88 },
  { name: "Effective Communication", proficiency: 92 },
  { name: "Critical Thinking", proficiency: 89 },
]

const languages = [
  { name: "English", proficiency: 95 },
  { name: "Telugu", proficiency: 100 },
  { name: "Hindi", proficiency: 85 },
]

export function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

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
    <section id="skills" ref={ref} className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-5xl font-bold mb-16 text-center text-gradient"
        >
          MY SKILLS
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Tech Skills */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6 }}
          >
            <CardSpotlight className="h-full">
              <div className="bg-card/80 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-border h-full">
                <h3 className="text-2xl font-bold mb-8 text-center text-gradient">TECH SKILLS</h3>
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  className="space-y-6"
                >
                  {techSkills.map((skill, index) => (
                    <motion.div key={skill.name} variants={itemVariants} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 relative">
                            <Image
                              src={skill.logo || "/placeholder.svg"}
                              alt={skill.name}
                              width={32}
                              height={32}
                              className="object-contain"
                            />
                          </div>
                          <span className="font-medium">{skill.name}</span>
                        </div>
                        
                      </div>
                      <div className="h-2 bg-background rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.proficiency}%` } : { width: 0 }}
                          transition={{ duration: 1.5, delay: 0.3 + index * 0.1, ease: "easeOut" }}
                          className="h-full bg-gradient-to-r from-primary to-purple-600 rounded-full"
                        />
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </CardSpotlight>
          </motion.div>

          {/* Soft Skills */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <CardSpotlight className="h-full">
              <div className="bg-card/80 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-border h-full">
                <h3 className="text-2xl font-bold mb-8 text-center text-gradient">SOFT SKILLS</h3>
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  className="space-y-6"
                >
                  {softSkills.map((skill, index) => (
                    <motion.div key={skill.name} variants={itemVariants} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{skill.name}</span>
                        
                      </div>
                      <div className="h-2 bg-background rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.proficiency}%` } : { width: 0 }}
                          transition={{ duration: 1.5, delay: 0.3 + index * 0.1, ease: "easeOut" }}
                          className="h-full bg-gradient-to-r from-primary to-purple-600 rounded-full"
                        />
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </CardSpotlight>
          </motion.div>

          {/* Languages */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <CardSpotlight className="h-full">
              <div className="bg-card/80 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-border h-full">
                <h3 className="text-2xl font-bold mb-8 text-center text-gradient">LANGUAGES</h3>
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  className="space-y-6"
                >
                  {languages.map((language, index) => (
                    <motion.div key={language.name} variants={itemVariants} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{language.name}</span>
                        
                      </div>
                      <div className="h-2 bg-background rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${language.proficiency}%` } : { width: 0 }}
                          transition={{ duration: 1.5, delay: 0.3 + index * 0.1, ease: "easeOut" }}
                          className="h-full bg-gradient-to-r from-primary to-purple-600 rounded-full relative"
                        >
                          <motion.div
                            className="absolute top-0 right-0 bottom-0 w-10 bg-gradient-to-r from-transparent to-white/20"
                            animate={{
                              x: [0, 100, 0],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Number.POSITIVE_INFINITY,
                              repeatType: "loop",
                              ease: "easeInOut",
                              delay: 1 + index * 0.2,
                            }}
                          />
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </CardSpotlight>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
