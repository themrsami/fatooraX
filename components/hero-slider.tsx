"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { 
  ArrowRight, 
  ChevronLeft, 
  ChevronRight, 
  Star, 
  Users, 
  BarChart4, 
  Shield 
} from "lucide-react"
import { FatooraXLogo } from "@/components/fatoora-x-logo"
import { Badge } from "@/components/ui/badge"
import { BookingForm } from "@/components/booking-form"
import { motion, AnimatePresence } from "framer-motion"

// Enhanced hero images using Unsplash with consistent monochromatic filter
const heroImages = [
    { 
        src: "/images/financial-excellence.jpg",
        alt: "Financial Excellence - Modern office workspace with digital analytics",
        title: "Financial Excellence", 
        description: "Precision-driven solutions that optimize your financial operations"
    },
    { 
        src: "/images/business-solutions.jpg",
        alt: "Business Solutions - Team collaboration in a modern workspace",
        title: "Business Solutions",
        description: "Tailored strategies for sustainable growth and operational efficiency"
    },
    { 
        src: "/images/enterprise-solutions.jpg",
        alt: "Enterprise Solutions - Business analysis and growth strategy",
        title: "Enterprise Solutions",
        description: "Comprehensive systems that scale with your business vision"
    }
]

const features = [
  { icon: Shield, text: "Enterprise Security" },
  { icon: Users, text: "24/7 Support" },
  { icon: BarChart4, text: "Advanced Analytics" },
  { icon: Star, text: "Award-winning" }
]

export function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const timerRef = useRef<NodeJS.Timeout | null>(null)
  const [autoplay, setAutoplay] = useState(true)

  const goToNext = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length)
      setIsTransitioning(false)
    }, 500)
  }

  const goToPrev = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length)
      setIsTransitioning(false)
    }, 500)
  }

  const goToSlide = (index: number) => {
    if (index === currentIndex || isTransitioning) return
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentIndex(index)
      setIsTransitioning(false)
    }, 500)
  }

  useEffect(() => {
    if (autoplay) {
      timerRef.current = setInterval(goToNext, 6000)
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [autoplay])

  const pauseAutoplay = () => setAutoplay(false)
  const resumeAutoplay = () => setAutoplay(true)

  return (
    <section id="hero" className="relative py-28 md:py-36 overflow-hidden">
      {/* Enhanced gradient background with subtle patterns */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900 to-black z-0"></div>
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-5 z-0"></div>
      
      <div className="container relative z-10 flex flex-col md:flex-row md:items-center max-w-7xl gap-12 md:gap-16 lg:gap-20 px-4">
        {/* Text content - Left side with enhanced spacing */}
        <div className="md:w-[45%] flex flex-col items-start text-left space-y-6 mb-8 md:mb-0">
          <Badge className="bg-zinc-800 text-white hover:bg-zinc-700 px-5 py-2 text-xs tracking-wide rounded-full uppercase font-medium border border-zinc-700 shadow-lg">
            {heroImages[currentIndex].title}
          </Badge>
          
          <div className="relative">
            <FatooraXLogo className="w-48 sm:w-64 h-auto relative z-10" />
            <div className="absolute -bottom-6 -left-2 w-40 h-20 bg-white/5 blur-3xl rounded-full"></div>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-white leading-tight">
            Elevate Your <span className="font-semibold text-white">Business.</span>
            <br />
            <span className="font-light text-zinc-400">Simplify Success.</span>
          </h2>
          
          <AnimatePresence mode="wait">
            <motion.p 
              key={`desc-${currentIndex}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-zinc-400 text-lg md:text-xl leading-relaxed"
            >
              {heroImages[currentIndex].description}
            </motion.p>
          </AnimatePresence>
          
          {/* Feature badges */}
          <div className="grid grid-cols-2 gap-x-6 gap-y-3 pt-1">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="flex items-center text-sm text-zinc-300 font-light"
              >
                <feature.icon className="h-4 w-4 mr-2 text-white" />
                <span>{feature.text}</span>
              </div>
            ))}
          </div>
          
          {/* Call-to-action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-4 pt-4">
            <Button className="bg-white text-black hover:bg-zinc-100 rounded-full px-8 py-6 text-base font-medium transition-all duration-300 shadow-xl border border-zinc-200 group">
              <span>Explore Services</span>
              <ArrowRight className="ml-2 h-5 w-5 transform transition-transform group-hover:translate-x-1" />
            </Button>
            <BookingForm />
          </div>
        </div>

        {/* Enhanced image slider - Right side with hover controls */}
        <div className="md:w-[55%] relative h-[40vh] md:h-[70vh]">
          <div 
            className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border border-zinc-800 group"
            onMouseEnter={pauseAutoplay}
            onMouseLeave={resumeAutoplay}
          >
            {/* Slider images with enhanced transitions */}
            {heroImages.map((image, index) => (
              <div
                key={index}
                className={cn(
                  "absolute inset-0 w-full h-full transition-all duration-700 ease-in-out",
                  index === currentIndex 
                    ? "opacity-100 scale-100" 
                    : "opacity-0 scale-105"
                )}
              >
                {/* Gradient overlays for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/20 z-10"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent z-10"></div>
                
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover rounded-2xl"
                  priority={index === 0}
                />
                
                {/* Image slide content */}
                <div className="absolute bottom-12 left-12 z-20 max-w-md pr-8">
                  <span className="text-sm font-medium text-zinc-400 uppercase tracking-wider mb-2 block">
                    {`0${index + 1} — ${image.title}`}
                  </span>
                </div>
              </div>
            ))}
            
            {/* Navigation arrows (visible on hover) */}
            <div className="absolute inset-y-0 left-4 flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
              <button 
                onClick={goToPrev}
                className="h-12 w-12 rounded-full bg-black/40 backdrop-blur flex items-center justify-center text-white hover:bg-black/60 transition-all hover:scale-110"
                aria-label="Previous slide"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
            </div>
            
            <div className="absolute inset-y-0 right-4 flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
              <button 
                onClick={goToNext}
                className="h-12 w-12 rounded-full bg-black/40 backdrop-blur flex items-center justify-center text-white hover:bg-black/60 transition-all hover:scale-110"
                aria-label="Next slide"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
          </div>
          
          {/* Enhanced slider indicators */}
          <div className="absolute -bottom-8 left-0 right-0 flex justify-center space-x-3 z-20">
            {heroImages.map((_, index) => (
              <button
                key={index}
                className={cn(
                  "h-2 rounded-full transition-all duration-300 shadow-lg",
                  index === currentIndex 
                    ? "bg-white w-10" 
                    : "bg-zinc-700 w-2 hover:bg-zinc-500 hover:w-4"
                )}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -top-8 -right-8 w-32 h-32 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-10 right-20 w-40 h-40 bg-zinc-800/20 rounded-full blur-3xl"></div>
        </div>
      </div>
      
      {/* Bottom decorative line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent"></div>
    </section>
  )
}