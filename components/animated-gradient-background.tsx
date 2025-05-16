"use client"

import { useEffect, useRef } from "react"

export function AnimatedGradientBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Create gradient animation
    let hue = 250
    let direction = 1
    let opacity = 0.05
    let opacityDirection = 1

    function drawGradient() {
      if (!ctx) return

      // Create gradient
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
      gradient.addColorStop(0, `hsla(${hue}, 70%, 60%, ${opacity})`)
      gradient.addColorStop(0.5, `hsla(${hue + 30}, 100%, 50%, ${opacity * 0.5})`)
      gradient.addColorStop(1, `hsla(${hue + 60}, 70%, 60%, ${opacity})`)

      // Fill canvas with gradient
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Update hue for animation
      hue += 0.2 * direction
      if (hue >= 280 || hue <= 220) {
        direction *= -1
      }

      // Update opacity for pulsing effect
      opacity += 0.001 * opacityDirection
      if (opacity >= 0.15 || opacity <= 0.05) {
        opacityDirection *= -1
      }

      requestAnimationFrame(drawGradient)
    }

    drawGradient()

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-20" />
}
