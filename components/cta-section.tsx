"use client"

import { Phone, ChevronRight, ArrowRight, Shield, Users, BarChart4, Star, ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { BookingForm } from "@/components/booking-form"
import Link from "next/link"

export function CTASection() {  return (
    <section className="pt-8 pb-8 bg-white dark:bg-black relative overflow-hidden">
      <div className="container px-4 mx-auto relative z-10">
       {/* Main CTA card with modern design */}
        <div id="cta-section" className="max-w-3xl mx-auto mb-20">
          <div className="border border-gray-200 dark:border-neutral-800 rounded-xl overflow-hidden">
            {/* CTA column - dark */}
            <div className="bg-black dark:bg-black p-10 md:p-16 relative">
              <span className="absolute top-0 left-0 h-1 w-16 bg-white"></span>
              <Badge className="relative inline-block bg-transparent text-white px-3 py-1 text-xs uppercase tracking-wider font-medium border border-gray-700 mb-8">
                Get Started
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to transform your business?</h2>
              <p className="text-gray-300 mb-8 text-base md:text-lg">
                Join hundreds of businesses that have elevated their operations with FatooraX's premium financial services.
              </p>
              <BookingForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
