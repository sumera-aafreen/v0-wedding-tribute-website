"use client"

interface ChildhoodMemoriesProps {
  scrollY: number
}

export default function ChildhoodMemories({ scrollY }: ChildhoodMemoriesProps) {
  const parallaxOffset = scrollY * 0.5

  const memories = [
    {
      quote: "Only 3 months apart… but always together.",
      image: "/childhood-friends-playing-together.jpg",
    },
    {
      quote: "Every summer holiday = our world.",
      image: "/kids-having-fun-in-summer.jpg",
    },
    {
      quote: "We fought for silly reasons — now those fights are my funniest memories.",
      image: "/sisters-laughing-together.jpg",
    },
  ]

  return (
    <section className="relative py-24 px-4 bg-gradient-to-b from-white to-pink-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-serif text-5xl md:text-6xl font-bold text-center mb-16 text-foreground">
          Our <span className="text-pink-600">Childhood Memories</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {memories.map((memory, index) => (
            <div
              key={index}
              className="group relative"
              style={{
                transform: `translateY(${parallaxOffset * (index % 2 === 0 ? 1 : -1)}px)`,
              }}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 h-80">
                <img
                  src={memory.image || "/placeholder.svg"}
                  alt={memory.quote}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <p className="text-white font-serif text-lg text-center">{memory.quote}</p>
                </div>
              </div>

              {/* Decorative sticker */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-pink-300 rounded-full opacity-40 group-hover:opacity-60 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
