import type React from "react"
import type { Metadata } from "next"
import { Crimson_Text } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { ThemeToggle } from "@/components/theme-toggle"


// Font for all text - elegant serif font
const crimsonText = Crimson_Text({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-crimson-text",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Samuel Victor - Portfolio",
  description: "Personal portfolio website of Karrela Samuel Victor, Computer Science Student",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${crimsonText.variable} font-serif`}>
  <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
    <ThemeToggle />
    {children}
  </ThemeProvider>
</body>

    </html>
  )
}
