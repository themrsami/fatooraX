"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { FatooraXLogo } from "@/components/fatoora-x-logo"
import { Badge } from "@/components/ui/badge"
import { BookingForm } from "@/components/booking-form"

// Enhanced hero images using Unsplash for a more professional look
const heroImages = [
  { 
    src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop",
    alt: "Financial Excellence - Modern office workspace with digital analytics" 
  },
  { 
    src: "https://images.unsplash.com/photo-1559526324-593bc073d938?q=80&w=2000&auto=format&fit=crop",
    alt: "Business Solutions - Team collaboration in a modern workspace"
  },
  { 
    src: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2000&auto=format&fit=crop",
    alt: "Enterprise Solutions - Business analysis and growth strategy"
  }
]

export function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  const goToNext = () => {
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length)
      setIsTransitioning(false)
    }, 500)
  }

  const goToSlide = (index: number) => {
    if (index === currentIndex) return
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentIndex(index)
      setIsTransitioning(false)
    }, 500)
  }

  useEffect(() => {
    timerRef.current = setInterval(goToNext, 6000)
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [])
    return (
    <section id="hero" className="relative py-28 md:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neutral-800/20 via-neutral-900/20 to-black z-0"></div>
      
      <div className="container relative z-10 flex flex-col md:flex-row md:items-center max-w-7xl gap-8 md:gap-12 px-4">
        {/* Text content - Left side */}
        <div className="md:w-[40%] flex flex-col items-start text-left space-y-4 mb-8 md:mb-0">
          <Badge className="bg-neutral-800 text-neutral-300 hover:bg-neutral-800 px-4 py-1.5 text-xs rounded-full">
            Financial Excellence
          </Badge>
          
          <FatooraXLogo className="w-48 sm:w-60 h-auto" />
          
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-light tracking-wider text-neutral-100 leading-tight mt-2">
            Elevate Your Business. <span className="text-white font-medium">Simplify Success.</span>
          </h2>
          
          <p className="text-neutral-400 text-base md:text-lg">
            Premium financial services and ERP solutions designed for modern businesses seeking excellence and
            efficiency.
          </p>          {/* Call-to-action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-4 pt-2">
            <Button className="bg-white text-black hover:bg-neutral-200 rounded-full px-8 py-6 text-base font-medium transition-all duration-200 shadow-lg">
              Explore Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <BookingForm />
          </div>
        </div>

        {/* Enhanced image slider - Right side (larger portion) */}
        <div className="md:w-[60%] relative">
          <div className="relative w-full h-[40vh] md:h-[65vh] rounded-2xl overflow-hidden shadow-2xl">
            {heroImages.map((image, index) => (
              <div
                key={index}
                className={cn(
                  "absolute inset-0 w-full h-full transition-all duration-700 ease-in-out",
                  index === currentIndex 
                    ? "opacity-100 scale-100" 
                    : "opacity-0 scale-95"
                )}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover rounded-2xl border border-neutral-800"
                  priority={index === 0}
                />
              </div>
            ))}
          </div>
          {/* Enhanced slider indicators */}
          <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-4 z-20">
            {heroImages.map((_, index) => (
              <button
                key={index}
                className={cn(
                  "h-2.5 rounded-full transition-all duration-300 shadow-lg",
                  index === currentIndex ? "bg-white w-8" : "bg-neutral-700/70 w-2.5 hover:bg-neutral-500"
                )}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
