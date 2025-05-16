"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section id="about" ref={ref} className="py-20 bg-gradient-to-b from-background/50 to-background relative">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-center text-gradient">ABOUT ME</h2>
          <div className="prose prose-lg dark:prose-invert mx-auto glass p-8 rounded-xl">
            <p className="text-lg leading-relaxed mb-6">
              Highly Motivated Computer Science Engineering student with a strong foundation in Python, C, and
              JavaScript, React.js, SQL. Demonstrated hands-on experience through academic projects in web development.
              Eager to apply technical knowledge and problem-solving abilities to contribute to innovative software
              solutions while gaining practical industry experience.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              I am currently running my own institute from past 2 years consistently ranked among the top 3 in medchal.
              Cleared JEE ADVANCED in 2022. Participated in district wise music competition and ranked in top 10.
            </p>
            <div className="mt-10">
              <h3 className="text-xl font-semibold mb-4">HOBBIES</h3>
              <ul className="flex flex-wrap justify-center gap-4">
                <motion.li
                  className="bg-primary/10 px-4 py-2 rounded-full text-primary"
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(147, 51, 234, 0.2)" }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  Playing Music
                </motion.li>
                <motion.li
                  className="bg-primary/10 px-4 py-2 rounded-full text-primary"
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(147, 51, 234, 0.2)" }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  Playing Outdoor games
                </motion.li>
                <motion.li
                  className="bg-primary/10 px-4 py-2 rounded-full text-primary"
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(147, 51, 234, 0.2)" }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  Reading books
                </motion.li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
