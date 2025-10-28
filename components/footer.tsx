"use client"

import { useEffect, useState } from "react"

export default function Footer() {
  const [glitter, setGlitter] = useState<Array<{ id: number; x: number; y: number }>>([])

  useEffect(() => {
    const newGlitter = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
    }))
    setGlitter(newGlitter)
  }, [])

  return (
    <footer className="relative py-12 px-4 bg-gradient-to-b from-white to-pink-100 border-t-2 border-pink-200 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        {glitter.map((g) => (
          <div
            key={g.id}
            className="absolute w-1 h-1 bg-amber-300 rounded-full animate-pulse"
            style={{
              left: `${g.x}%`,
              top: `${g.y}%`,
              animation: `twinkle ${2 + Math.random() * 2}s ease-in-out infinite`,
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
      `}</style>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h3 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
          Made With <span className="text-pink-600">Love</span> for My Sumi
        </h3>
        <p className="text-muted-foreground text-lg mb-8">
          A tribute to the bond we share and the beautiful journey ahead
        </p>
        <p className="text-sm text-muted-foreground">© 2025 From Sumera with all my love ❣️</p>
      </div>
    </footer>
  )
}
