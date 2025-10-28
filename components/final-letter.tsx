"use client"

import { useEffect, useState } from "react"

export default function FinalLetter() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.5 },
    )

    const element = document.getElementById("final-letter")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="final-letter" className="relative py-24 px-4 bg-gradient-to-b from-pink-50 to-white overflow-hidden">
      {isVisible && (
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 30 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-pink-400 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `confetti ${2 + Math.random() * 2}s ease-out forwards`,
                animationDelay: `${Math.random() * 0.5}s`,
              }}
            />
          ))}
        </div>
      )}

      <style>{`
        @keyframes confetti {
          0% {
            transform: translate(0, 0) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translate(${Math.random() * 200 - 100}px, 300px) rotate(360deg);
            opacity: 0;
          }
        }
      `}</style>

      <div className="max-w-2xl mx-auto relative z-10">
        <h2 className="font-serif text-5xl md:text-6xl font-bold text-center mb-12 text-foreground">
          A Letter to My Sumi
        </h2>

        <div
          className={`bg-white/95 backdrop-blur-sm rounded-2xl p-12 shadow-2xl border-4 border-pink-200 transition-all duration-1000 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
        >
          <p className="font-serif text-lg md:text-xl text-foreground leading-relaxed mb-6 italic">My dearest Sumi,</p>

          <p className="font-serif text-lg md:text-xl text-foreground leading-relaxed mb-6">
            No matter where life takes us… You will always be my closest, my safe place, my Sumi.
          </p>

          <p className="font-serif text-lg md:text-xl text-foreground leading-relaxed mb-8">
            From our childhood adventures to this beautiful moment in your life, every memory with you is treasured.
            You've been my sister in every way that matters, and watching you step into this new chapter fills my heart
            with so much joy.
          </p>

          <p className="font-serif text-lg md:text-xl text-foreground leading-relaxed mb-12">
            I love you — forever your sibling-like cousin.
          </p>

          <div className="text-center">
            <p className="font-serif text-2xl text-pink-600 animate-pulse">– From your Sumera ❣️</p>
          </div>
        </div>
      </div>
    </section>
  )
}
