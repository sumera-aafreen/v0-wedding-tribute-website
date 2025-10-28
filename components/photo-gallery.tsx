"use client"

import { useState } from "react"

export default function PhotoGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const photos = [
    { id: 0, src: "/images/photo-01.jpg", alt: "Childhood memories with cousins at wall" },
    { id: 1, src: "/images/photo-02.jpg", alt: "Sumi as a toddler" },
    { id: 2, src: "/images/photo-03.jpg", alt: "Festival celebration in traditional attire" },
    { id: 3, src: "/images/photo-04.jpg", alt: "Sumi with baby on swing" },
    { id: 4, src: "/images/photo-05.jpg", alt: "Childhood moment in traditional dress" },
    { id: 5, src: "/images/photo-06.jpg", alt: "Family moment with children" },
    { id: 6, src: "/images/photo-07.jpg", alt: "Sumi in beautiful wedding lehenga" },
    { id: 7, src: "/images/photo-08.jpg", alt: "Sumi smiling portrait" },
    { id: 8, src: "/images/photo-09.jpg", alt: "Sumi with selfie stick" },
    { id: 9, src: "/images/photo-10.jpg", alt: "Childhood friends together" },
    { id: 10, src: "/images/photo-11.jpg", alt: "Sumi in traditional blue and gold attire" },
    { id: 11, src: "/images/photo-12.jpg", alt: "Sumi in turquoise dress" },
    { id: 12, src: "/images/photo-13.jpg", alt: "Sumi in wedding lehenga with henna" },
    { id: 13, src: "/images/photo-14.jpg", alt: "Sumi smiling in patterned dress" },
    { id: 14, src: "/images/photo-15.jpg", alt: "Sumi with boy in traditional attire" },
    { id: 15, src: "/images/photo-16.jpg", alt: "Sumi in blue and gold outfit" },
    { id: 16, src: `/placeholder.svg?height=400&width=300&query=wedding memory photo 17`, alt: "Memory 17" },
    { id: 17, src: `/placeholder.svg?height=300&width=400&query=wedding memory photo 18`, alt: "Memory 18" },
    { id: 18, src: `/placeholder.svg?height=350&width=350&query=wedding memory photo 19`, alt: "Memory 19" },
  ]

  return (
    <section className="relative py-24 px-4 bg-gradient-to-b from-amber-50 to-pink-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-serif text-5xl md:text-6xl font-bold text-center mb-16 text-foreground">
          Our <span className="text-pink-600">Photo Gallery</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-max">
          {photos.map((photo, index) => (
            <div
              key={photo.id}
              className={`relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group ${
                index % 5 === 0 ? "md:col-span-2 md:row-span-2" : ""
              }`}
              onClick={() => setSelectedImage(photo.id)}
            >
              <img
                src={photo.src || "/placeholder.svg"}
                alt={photo.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                <span className="text-white text-4xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  ✨
                </span>
              </div>
            </div>
          ))}
        </div>

        {selectedImage !== null && (
          <div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-2xl w-full" onClick={(e) => e.stopPropagation()}>
              <img
                src={photos[selectedImage].src || "/placeholder.svg"}
                alt={photos[selectedImage].alt}
                className="w-full h-auto rounded-2xl"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 bg-white rounded-full w-10 h-10 flex items-center justify-center text-2xl hover:bg-pink-100 transition-colors"
              >
                ✕
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
