"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Github, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Link from "next/link"

export function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const fullMessage = `Name: ${name}%0AEmail: ${email}%0ASubject: ${subject}%0AMessage: ${message}`
    const phoneNumber = "919290914773"
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${fullMessage}`

    window.open(whatsappUrl, "_blank")
    setSent(true)

    // Optional: reset form
    setName("")
    setEmail("")
    setSubject("")
    setMessage("")
  }

  const contactInfo = [
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Phone",
      value: "+91 9290914773",
      href: "tel:+919290914773",
    },
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "jgmcsamuelvictor@gmail.com",
      href: "mailto:jgmcsamuelvictor@gmail.com",
    },
    {
      icon: <Github className="h-5 w-5" />,
      label: "GitHub",
      value: "nanisam07",
      href: "https://github.com/nanisam07",
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: "LinkedIn",
      value: "Samuel Victor",
      href: "https://www.linkedin.com/in/s%C3%A3m%C3%BCel-victor-6624b7298/",
    },
    {
      icon: <Twitter className="h-5 w-5" />,
      label: "Twitter",
      value: "@SamuelVictor_07",
      href: "https://twitter.com/SamuelVictor_07",
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: "Address",
      value: "Medchal, Hyderabad, Telangana",
      href: "https://maps.google.com/?q=Medchal,Hyderabad,Telangana",
    },
  ]

  return (
    <section id="contact" ref={ref} className="py-20 bg-background/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
          GET IN TOUCH
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-semibold">Contact Information</h3>
            <p className="text-foreground/70">
              Feel free to reach out to me for any questions or opportunities. I'm always open to discussing new
              projects, creative ideas, or opportunities to be part of your vision.
            </p>

            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-sm text-foreground/60">{item.label}</p>
                    <Link
                      href={item.href}
                      target={item.label !== "Phone" ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="font-medium hover:text-primary transition-colors"
                    >
                      {item.value}
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6 }}
            className="bg-card rounded-xl shadow-lg p-8 border border-border"
          >
            <h3 className="text-2xl font-semibold mb-6">Send Me a Message</h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    className="bg-background"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Your email"
                    className="bg-background"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject
                </label>
                <Input
                  id="subject"
                  placeholder="Subject"
                  className="bg-background"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Your message"
                  rows={5}
                  className="bg-background"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </div>
              <Button type="submit" className="w-full">
                Send Message
              </Button>
              {sent && (
                <p className="text-green-500 text-center mt-2">
                  
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
