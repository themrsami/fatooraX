"use client"

import Image from "next/image"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { 
  ArrowRight, 
  Star, 
  Users, 
  BarChart4, 
  Shield 
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { BookingForm } from "@/components/booking-form"

// Hero cover image details
const heroCover = {
    src: "/cover.jpg", // Using one of the existing images
    alt: "Financial Excellence - Modern office workspace with digital analytics",
    title: "Welcome to",
    description: "Your trusted partner in financial, compliance, accounting and business consulting services."
}

const features = [
  { icon: Shield, text: "Enterprise Security" },
  { icon: Users, text: "24/7 Support" },
  { icon: BarChart4, text: "Advanced Analytics" },
  { icon: Star, text: "Award-winning" }
]

export function HeroSlider() {  return (
    <section id="hero" className="relative overflow-hidden bg-white dark:bg-black">
      {/* Full-width cover photo with gradient overlay */}
      <div className="relative w-full -mt-40 h-[120vh]">
        {/* Cover photo */}
        <Image
          src={heroCover.src}
          alt={heroCover.alt}
          fill
          className="object-cover"
          priority
        />
        
        {/* Left side dimming gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10"></div>
        
        {/* Text overlay on the dimmed left side */}
        <div className="absolute inset-0 z-20 flex items-center">
          <div className="container mt-40 mx-auto px-4">
            <div className="max-w-lg">              <span className="text-white text-lg md:text-xl tracking-wide rounded-none font-medium shadow-lg mb-6">
                {heroCover.title}
              </span>
              
              <div className="mb-6">
                <Image 
                  src="/herologo.svg" 
                  alt="Fatoora X Logo" 
                  width={500} 
                  height={120} 
                  className="max-w-full"
                />
              </div>
              
              <p className="text-gray-200 text-lg md:text-xl leading-relaxed mb-8">
                Your trusted partner in <a href="#services" className="underline decoration-blue-400 hover:bg-blue-400 hover:text-white hover:no-underline transition-all duration-200 px-1">financial</a>, <a href="#services" className="underline decoration-blue-400 hover:bg-blue-400 hover:text-white hover:no-underline transition-all duration-200 px-1">compliance</a>, <a href="#services" className="underline decoration-blue-400 hover:bg-blue-400 hover:text-white hover:no-underline transition-all duration-200 px-1">accounting</a> and <a href="#services" className="underline decoration-blue-400 hover:bg-blue-400 hover:text-white hover:no-underline transition-all duration-200 px-1">business consulting</a> services.
              </p>
            </div>
          </div>
        </div>      </div>      {/* Centered mission statement */}
      <div className="bg-white dark:bg-black py-10">
        <div className="container mx-auto px-4">
          <p className="text-center text-gray-700 dark:text-gray-300 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
            Fatoora X provides <a href="#services" className="underline decoration-blue-400 hover:bg-blue-400 hover:text-white hover:no-underline transition-all duration-200 px-1">integrated solutions</a> across the <a href="#services" className="underline decoration-blue-400 hover:bg-blue-400 hover:text-white hover:no-underline transition-all duration-200 px-1">financial</a> and <a href="#services" className="underline decoration-blue-400 hover:bg-blue-400 hover:text-white hover:no-underline transition-all duration-200 px-1">strategic lifecycle</a> of a business. From establishing <a href="#services" className="underline decoration-blue-400 hover:bg-blue-400 hover:text-white hover:no-underline transition-all duration-200 px-1">strong foundations</a> to executing <a href="#services" className="underline decoration-blue-400 hover:bg-blue-400 hover:text-white hover:no-underline transition-all duration-200 px-1">high-impact initiatives</a>, we support every stage of your growth.
          </p>
        </div>
      </div>
    </section>
  )
}