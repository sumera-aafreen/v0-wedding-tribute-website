"use client"

export default function WeddingWishes() {
  return (
    <section className="relative py-24 px-4 bg-gradient-to-b from-white to-amber-50 overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-amber-300 to-pink-300 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="font-serif text-5xl md:text-6xl font-bold text-center mb-12 text-foreground">
          My Wedding Wishes
        </h2>

        <div className="relative mb-12">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-pink-400 rounded-3xl blur-2xl opacity-40" />
          <img
            src="/beautiful-couple-wedding-photo.jpg"
            alt="Couple"
            className="relative w-full h-96 object-cover rounded-3xl shadow-2xl border-4 border-white"
          />
        </div>

        <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-12 shadow-xl border-2 border-pink-200">
          <p className="font-serif text-xl md:text-2xl text-center text-foreground leading-relaxed italic">
            "I wish you all the happiness in this world, my adorable Sumi.
            <br />
            <br />
            May this new journey be filled with love, laughter, and endless blessings.
            <br />
            <br />
            You deserve the world, and I'm so happy you found your person."
          </p>
        </div>
      </div>
    </section>
  )
}
