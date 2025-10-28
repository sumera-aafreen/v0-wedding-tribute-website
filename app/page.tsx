"use client"
import HeroSection from "@/components/hero-section"
import SinglePageTribute from "@/components/single-page-tribute"
import FloatingHearts from "@/components/floating-hearts"

export default function Home() {
  return (
    <main className="bg-gradient-to-b from-background via-background to-background overflow-hidden">
      <FloatingHearts />
      <HeroSection />
      <SinglePageTribute />
    </main>
  )
}
