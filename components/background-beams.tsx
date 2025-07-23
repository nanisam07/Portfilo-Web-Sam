"use client"

import { useEffect, useRef } from "react"

export function BackgroundBeams() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mousePosition = useRef({ x: 0, y: 0 })
  const rafId = useRef<number | null>(null)
  const beams = useRef<Beam[]>([])
  const isInitialized = useRef(false)

  interface Beam {
    x: number
    y: number
    width: number
    height: number
    vx: number
    vy: number
    hue: number
    opacity: number
  }

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      if (!isInitialized.current) {
        initializeBeams()
        isInitialized.current = true
      }
    }

    const handleMouseMove = (e: MouseEvent) => {
      mousePosition.current = {
        x: e.clientX,
        y: e.clientY,
      }
    }

    const initializeBeams = () => {
      beams.current = []
      const numBeams = Math.min(15, Math.floor((canvas.width * canvas.height) / 50000))

      for (let i = 0; i < numBeams; i++) {
        const width = Math.random() * 2 + 0.5
        const height = Math.random() * 300 + 50
        beams.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          width,
          height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          hue: 260 + Math.random() * 60, // Store hue directly
          opacity: Math.random() * 0.3 + 0.1,
        })
      }
    }

    const checkCollision = (beam: Beam) => {
      const mouseX = mousePosition.current.x
      const mouseY = mousePosition.current.y
      const beamCenterX = beam.x
      const beamCenterY = beam.y
      const distance = Math.sqrt(Math.pow(mouseX - beamCenterX, 2) + Math.pow(mouseY - beamCenterY, 2))

      if (distance < 100) {
        const angle = Math.atan2(beamCenterY - mouseY, beamCenterX - mouseX)
        beam.vx += Math.cos(angle) * 0.1
        beam.vy += Math.sin(angle) * 0.1
      }

      // Limit velocity
      const maxSpeed = 1.5
      const speed = Math.sqrt(beam.vx * beam.vx + beam.vy * beam.vy)
      if (speed > maxSpeed) {
        beam.vx = (beam.vx / speed) * maxSpeed
        beam.vy = (beam.vy / speed) * maxSpeed
      }
    }

    const animate = () => {
      if (!ctx || !canvas) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      beams.current.forEach((beam) => {
        checkCollision(beam)

        beam.x += beam.vx
        beam.y += beam.vy

        // Bounce off walls
        if (beam.x < 0 || beam.x > canvas.width) beam.vx *= -1
        if (beam.y < 0 || beam.y > canvas.height) beam.vy *= -1

        // Draw beam
        ctx.save()
        ctx.translate(beam.x, beam.y)
        ctx.rotate(Math.atan2(beam.vy, beam.vx))

        // Create gradient with valid hsla colors
        const gradient = ctx.createLinearGradient(0, -beam.height / 2, 0, beam.height / 2)

        // Start with transparent
        gradient.addColorStop(0, `hsla(${beam.hue}, 70%, 50%, 0)`)

        // Middle with beam opacity
        gradient.addColorStop(0.5, `hsla(${beam.hue}, 70%, 50%, ${beam.opacity})`)

        // End with transparent
        gradient.addColorStop(1, `hsla(${beam.hue}, 70%, 50%, 0)`)

        ctx.fillStyle = gradient
        ctx.fillRect(-beam.width / 2, -beam.height / 2, beam.width, beam.height)
        ctx.restore()
      })

      rafId.current = requestAnimationFrame(animate)
    }

    window.addEventListener("resize", handleResize)
    window.addEventListener("mousemove", handleMouseMove)
    handleResize()
    animate()

    return () => {
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("mousemove", handleMouseMove)
      if (rafId.current) {
        cancelAnimationFrame(rafId.current)
      }
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 -z-10 h-full w-full bg-transparent opacity-40" />
}
