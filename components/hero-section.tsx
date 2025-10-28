"use client"

import { useEffect, useState } from "react"

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20 pb-20">
      <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-white to-amber-50 -z-10" />

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />

      <div className="relative z-10 text-center px-4 max-w-2xl">
        <div
          className={`mb-8 transition-all duration-1000 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
        >
          <div className="relative w-48 h-48 mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-300 to-amber-300 rounded-full blur-2xl opacity-40" />
            <img
              src="/images/hero-bride.jpg"
              alt="Bride Sumi"
              className="relative w-full h-full rounded-full object-cover shadow-2xl border-4 border-white"
              onError={(e) => {
                console.log("[v0] Hero image failed to load, checking path")
                e.currentTarget.src = "/elegant-bride.png"
              }}
            />
          </div>
        </div>

        <h1
          className={`font-serif text-5xl md:text-6xl font-bold text-foreground mb-6 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          <span className="bg-gradient-to-r from-pink-600 to-amber-600 bg-clip-text text-transparent">
            To the one who has always felt like a sister…
          </span>
        </h1>

        <p
          className={`font-serif text-3xl md:text-4xl text-pink-600 mb-8 transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          Sumi 💕
        </p>

        <button
          className={`mt-8 px-8 py-4 bg-gradient-to-r from-pink-500 to-amber-500 text-white rounded-full font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          Scroll to Read My Heart ↓
        </button>
      </div>
    </section>
  )
}
