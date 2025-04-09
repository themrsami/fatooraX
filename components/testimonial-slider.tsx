"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { Quote } from "lucide-react"

interface Testimonial {
  id: number
  name: string
  position: string
  company: string
  content: string
  initial: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "CFO",
    company: "TechVision Inc.",
    initial: "S",
    content:
      "FatooraX transformed our financial operations. Their Odoo implementation was flawless and the ongoing support has been exceptional. A true partner in our growth journey.",
  },
  {
    id: 2,
    name: "Michael Chen",
    position: "CEO",
    company: "Nexus Enterprises",
    initial: "M",
    content:
      "The wealth management services provided by FatooraX have been instrumental in our company's financial planning. Their expertise and attention to detail are unmatched.",
  },
  {
    id: 3,
    name: "Amira Hassan",
    position: "Finance Director",
    company: "Global Solutions",
    initial: "A",
    content:
      "Working with FatooraX on our tax consultancy needs has been a game-changer. Their team's knowledge and professionalism exceeded our expectations.",
  },
]

export function TestimonialSlider() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true)
      setTimeout(() => {
        setActiveIndex((current) => (current + 1) % testimonials.length)
        setIsTransitioning(false)
      }, 500)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  const handleDotClick = (index: number) => {
    if (index === activeIndex) return
    setIsTransitioning(true)
    setTimeout(() => {
      setActiveIndex(index)
      setIsTransitioning(false)
    }, 500)
  }

  return (
    <div className="relative max-w-3xl mx-auto">
      <div className="absolute -top-10 -left-4 text-blue-200/50 dark:text-zinc-800/50">
        <Quote className="h-20 w-20" />
      </div>
      <div className="relative z-10 min-h-[300px] flex items-center">
        <div className="w-full">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={cn(
                "transition-all duration-500 absolute w-full",
                index === activeIndex
                  ? isTransitioning
                    ? "opacity-0 translate-y-4"
                    : "opacity-100 translate-y-0"
                  : "opacity-0 pointer-events-none",
              )}
            >
              <blockquote className="text-lg md:text-xl font-serif italic mb-8 text-center px-4 text-gray-700 dark:text-white">
                "{testimonial.content}"
              </blockquote>
              <div className="flex flex-col items-center">
                <div className="h-12 w-12 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center mb-3 border border-blue-200 dark:border-zinc-700 text-black dark:text-white">
                  <span className="font-serif text-lg">{testimonial.initial}</span>
                </div>
                <div className="text-center">
                  <p className="font-medium text-gray-900 dark:text-white">{testimonial.name}</p>
                  <p className="text-gray-600 dark:text-zinc-400 text-sm">
                    {testimonial.position}, {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center space-x-2 mt-32">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={cn(
              "h-2 rounded-full transition-all duration-300",
              index === activeIndex ? "bg-blue-600 dark:bg-white w-8" : "bg-gray-300 dark:bg-zinc-700 w-2 hover:bg-gray-400 dark:hover:bg-zinc-600",
            )}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
