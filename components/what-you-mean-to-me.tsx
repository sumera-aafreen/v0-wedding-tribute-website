"use client"

import { useEffect, useState } from "react"

export default function WhatYouMeanToMe() {
  const [displayedText, setDisplayedText] = useState("")
  const fullText = "Even today… if there's one person I want to share everything with… it's you."

  useEffect(() => {
    let index = 0
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayedText(fullText.slice(0, index))
        index++
      } else {
        clearInterval(interval)
      }
    }, 50)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative py-24 px-4 bg-gradient-to-b from-pink-50 to-white overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />

      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="font-serif text-5xl md:text-6xl font-bold text-center mb-12 text-foreground">
          What You Mean to Me
        </h2>

        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-xl border border-pink-200">
          <p className="font-serif text-2xl md:text-3xl text-center text-foreground leading-relaxed min-h-24">
            {displayedText}
            <span className="animate-pulse">|</span>
          </p>
        </div>

        {/* Photo collage */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-4">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 h-40 hover:scale-105"
            >
              <img
                src={`/happy-memories-photo-.jpg?height=160&width=160&query=happy memories photo ${i}`}
                alt={`Memory ${i}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pink-600/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
