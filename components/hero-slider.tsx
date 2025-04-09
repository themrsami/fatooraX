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
import { FatooraXLogo } from "@/components/fatoora-x-logo"
import { Badge } from "@/components/ui/badge"
import { BookingForm } from "@/components/booking-form"

// Hero cover image details
const heroCover = {
    src: "/cover.png", // Using one of the existing images
    alt: "Financial Excellence - Modern office workspace with digital analytics",
    title: "Financial Excellence",
    description: "Precision-driven solutions that optimize your financial operations"
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
      <div className="relative w-full h-[80vh]">
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
          <div className="container mx-auto px-4">
            <div className="max-w-lg">
              <Badge className="bg-zinc-100 text-black hover:bg-zinc-100 dark:bg-zinc-800 dark:text-white dark:hover:bg-zinc-700 px-5 py-2 text-xs tracking-wide rounded-full uppercase font-medium border border-blue-200 dark:border-zinc-700 shadow-lg mb-6">
                {heroCover.title}
              </Badge>
              
              <div className="relative mb-6">
                <FatooraXLogo src="/fatooraxfulllight.svg" className="w-48 sm:w-64 h-auto" />
              </div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-white leading-tight mb-6">
                Elevate Your <span className="font-semibold">Business.</span>
                <br />
                <span className="font-light text-gray-300">Simplify Success.</span>
              </h2>
              
              <p className="text-gray-200 text-lg md:text-xl leading-relaxed mb-8">
                {heroCover.description}
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Content below the cover photo */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Feature badges */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="flex items-center text-sm text-gray-600 dark:text-zinc-300"
              >
                <feature.icon className="h-5 w-5 mr-3 text-black dark:text-white" />
                <span className="font-medium">{feature.text}</span>
              </div>
            ))}
          </div>
          
          {/* Call-to-action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <Button className="bg-transparent text-black hover:bg-zinc-100 dark:bg-white dark:text-black dark:hover:bg-zinc-100 rounded-full px-8 py-6 text-base font-medium transition-all duration-300 shadow-xl border border-black dark:border-zinc-200 group">
              <span>Explore Services</span>
              <ArrowRight className="ml-2 h-5 w-5 transform transition-transform group-hover:translate-x-1" />
            </Button>
            <BookingForm />
          </div>
        </div>
      </div>
      
      {/* Bottom decorative line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-zinc-800 to-transparent"></div>
    </section>
  )
}