"use client"

import { useEffect, useState } from "react"

export default function SinglePageTribute() {
  const [letterVisible, setLetterVisible] = useState(false)
  const [displayedText, setDisplayedText] = useState("")
  const fullText = "Even today… if there's one person I want to share everything with… it's you."

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLetterVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    const element = document.getElementById("letter-section")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!letterVisible) return

    let index = 0
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayedText(fullText.slice(0, index))
        index++
      } else {
        clearInterval(interval)
      }
    }, 40)

    return () => clearInterval(interval)
  }, [letterVisible])

  const photos = [
    { id: 0, src: "/images/photo-01.jpg", alt: "Childhood memories with cousins" },
    { id: 1, src: "/images/photo-02.jpg", alt: "Sumi as a toddler" },
    { id: 2, src: "/images/photo-03.jpg", alt: "Festival celebration" },
    { id: 3, src: "/images/photo-04.jpg", alt: "Sumi with baby" },
    { id: 4, src: "/images/photo-05.jpg", alt: "Childhood moment" },
    { id: 5, src: "/images/photo-06.jpg", alt: "Family moment" },
    { id: 6, src: "/images/photo-07.jpg", alt: "Wedding lehenga" },
    { id: 7, src: "/images/photo-08.jpg", alt: "Sumi smiling" },
    { id: 8, src: "/images/photo-09.jpg", alt: "Sumi with selfie stick" },
    { id: 9, src: "/images/photo-10.jpg", alt: "Childhood friends" },
    { id: 10, src: "/images/photo-11.jpg", alt: "Traditional attire" },
    { id: 11, src: "/images/photo-12.jpg", alt: "Turquoise dress" },
    { id: 12, src: "/images/photo-13.jpg", alt: "Wedding lehenga with henna" },
    { id: 13, src: "/images/photo-14.jpg", alt: "Sumi smiling portrait" },
    { id: 14, src: "/images/photo-15.jpg", alt: "With boy in traditional attire" },
    { id: 15, src: "/images/photo-16.jpg", alt: "Blue and gold outfit" },
  ]

  return (
    <div className="relative">
      {/* Childhood Memories Section */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-white via-pink-50 to-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
            Our <span className="text-pink-600">Childhood Memories</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {[
              {
                title: "Endless Adventures",
                text: "From playgrounds to family gatherings, every moment with you was pure magic.",
              },
              {
                title: "Shared Secrets",
                text: "You've always been my confidant, my partner in crime, my safe place.",
              },
              {
                title: "Growing Together",
                text: "Through every phase of life, you've been there, making memories that last forever.",
              },
              {
                title: "Unbreakable Bond",
                text: "No distance, no time can ever change what we share. You're my sister in spirit.",
              },
            ].map((memory, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-pink-100 hover:border-pink-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-pink-100 to-amber-100 opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
                <div className="relative z-10">
                  <h3 className="font-serif text-2xl font-bold text-pink-600 mb-3">{memory.title}</h3>
                  <p className="font-sans text-foreground leading-relaxed text-lg">{memory.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Mean to Me - Typing Animation */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-white to-pink-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-center mb-12 text-foreground">
            What You Mean to Me
          </h2>

          <div className="bg-gradient-to-br from-pink-50 to-amber-50 rounded-3xl p-12 shadow-2xl border-2 border-pink-200 backdrop-blur-sm">
            <p className="font-serif text-2xl md:text-3xl text-center text-foreground leading-relaxed min-h-32 flex items-center justify-center">
              {displayedText}
              <span className="animate-pulse ml-1">|</span>
            </p>
          </div>
        </div>
      </section>

      {/* Photo Gallery - 16 Real Images */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-pink-50 to-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
            Our <span className="text-pink-600">Photo Gallery</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 auto-rows-max">
            {photos.map((photo, index) => (
              <div
                key={photo.id}
                className={`relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group ${
                  index % 7 === 0 ? "md:col-span-2 md:row-span-2" : ""
                }`}
              >
                <img
                  src={photo.src || "/placeholder.svg"}
                  alt={photo.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    console.log("[v0] Image failed to load:", photo.src)
                    e.currentTarget.src = "/memory-photo.jpg"
                  }}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <span className="text-white text-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    ✨
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Large Animated Letter Section */}
      <section
        id="letter-section"
        className="relative py-32 px-4 bg-gradient-to-b from-white via-pink-50 to-amber-50 overflow-hidden"
      >
        {/* Animated background elements */}
        <div className="absolute top-10 left-5 w-40 h-40 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
        <div className="absolute bottom-10 right-5 w-40 h-40 bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />

        {letterVisible && (
          <div className="absolute inset-0 pointer-events-none">
            {Array.from({ length: 25 }).map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-pink-400 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animation: `float-up ${3 + Math.random() * 2}s ease-out forwards`,
                  animationDelay: `${Math.random() * 0.8}s`,
                }}
              />
            ))}
          </div>
        )}

        <style>{`
          @keyframes float-up {
            0% {
              transform: translateY(0) translateX(0) rotate(0deg);
              opacity: 1;
            }
            100% {
              transform: translateY(-400px) translateX(${Math.random() * 200 - 100}px) rotate(360deg);
              opacity: 0;
            }
          }

          @keyframes heartbeat {
            0%, 100% {
              transform: scale(1);
            }
            25% {
              transform: scale(1.1);
            }
            50% {
              transform: scale(1);
            }
          }

          @keyframes shimmer {
            0%, 100% {
              opacity: 0.6;
            }
            50% {
              opacity: 1;
            }
          }

          .animate-heartbeat {
            animation: heartbeat 1.5s ease-in-out infinite;
          }

          .animate-shimmer {
            animation: shimmer 2s ease-in-out infinite;
          }
        `}</style>

        <div className="max-w-3xl mx-auto relative z-10">
          <h2
            className={`font-serif text-5xl md:text-7xl font-bold text-center mb-16 text-foreground transition-all duration-1000 ${
              letterVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            <span className="bg-gradient-to-r from-pink-600 via-pink-500 to-amber-600 bg-clip-text text-transparent animate-shimmer">
              A Letter to My Sumi
            </span>
          </h2>

          <div
            className={`bg-white/95 backdrop-blur-md rounded-3xl p-16 shadow-2xl border-4 border-pink-200 transition-all duration-1000 transform ${
              letterVisible ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-90 translate-y-8"
            }`}
          >
            <p className="font-serif text-2xl md:text-3xl text-foreground leading-relaxed mb-8 italic text-center">
              My dearest Sumi,
            </p>

            <div className="space-y-8">
              <p className="font-serif text-xl md:text-2xl text-foreground leading-relaxed text-center">
                No matter where life takes us… You will always be my closest, my safe place, my Sumi.
              </p>

              <p className="font-serif text-xl md:text-2xl text-foreground leading-relaxed text-center">
                From our childhood adventures to this beautiful moment in your life, every memory with you is treasured.
                You've been my sister in every way that matters, and watching you step into this new chapter fills my
                heart with so much joy.
              </p>

              <p className="font-serif text-xl md:text-2xl text-foreground leading-relaxed text-center">
                I love you — forever your sibling-like cousin.
              </p>
            </div>

            <div className="text-center mt-12 pt-8 border-t-2 border-pink-200">
              <p className="font-serif text-3xl md:text-4xl text-pink-600 animate-heartbeat">– From your Sumera ❣️</p>
            </div>
          </div>

          {/* Decorative hearts around letter */}
          <div className="absolute -top-8 left-8 text-4xl animate-bounce" style={{ animationDelay: "0s" }}>
            💕
          </div>
          <div className="absolute -bottom-8 right-8 text-4xl animate-bounce" style={{ animationDelay: "0.2s" }}>
            💕
          </div>
          <div className="absolute top-1/2 -left-12 text-3xl animate-bounce" style={{ animationDelay: "0.4s" }}>
            ✨
          </div>
          <div className="absolute top-1/2 -right-12 text-3xl animate-bounce" style={{ animationDelay: "0.6s" }}>
            ✨
          </div>
        </div>
      </section>

      {/* Footer */}
      <section className="relative py-16 px-4 bg-gradient-to-b from-amber-50 to-pink-50 border-t-2 border-pink-200">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-serif text-2xl text-foreground mb-4">With all my love and blessings</p>
          <p className="font-sans text-lg text-muted-foreground">
            May your marriage be filled with endless love, laughter, and beautiful moments together.
          </p>

          {/* Twinkling glitter footer */}
          <div className="mt-8 flex justify-center gap-4 text-3xl">
            {[...Array(8)].map((_, i) => (
              <span key={i} className="animate-shimmer" style={{ animationDelay: `${i * 0.25}s` }}>
                ✨
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
