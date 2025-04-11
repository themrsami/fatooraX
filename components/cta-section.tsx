"use client"

import { Phone, ChevronRight, ArrowRight, Shield, Users, BarChart4, Star, ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { BookingForm } from "@/components/booking-form"
import Link from "next/link"

// Feature highlights
const features = [
  { icon: Shield, text: "Enterprise Security" },
  { icon: Users, text: "24/7 Support" },
  { icon: BarChart4, text: "Advanced Analytics" },
  { icon: Star, text: "Award-winning" }
]

export function CTASection() {  return (
    <section className="pt-8 pb-8 bg-white dark:bg-black relative overflow-hidden">
      <div className="container px-4 mx-auto relative z-10">
      <div className="relative mt-32 mb-32 border-t border-b border-gray-200 dark:border-neutral-800 py-20 text-center">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 text-gray-900 dark:text-white max-w-3xl mx-auto">
            Ready to transform your business with our premium services?
            <br />
            <Link href='#cta-section' className="relative inline-block mt-4 text-gray-900 dark:text-white text-lg md:text-xl font-medium cursor-pointer group">
              Schedule your demo today
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gray-900 dark:bg-white transition-all duration-300"></span>
              <ArrowDown className="inline-block ml-2 -mt-2 h-5 w-5 group-hover:translate-y-1 transition-transform duration-300" />
            </Link>
          </h3>
        </div>
        {/* Main CTA card with modern design */}
        <div id="cta-section" className="max-w-4xl mx-auto mb-20">
          <div className="grid md:grid-cols-2 border border-gray-200 dark:border-neutral-800 rounded-xl overflow-hidden">
            {/* Left column - dark */}
            <div className="bg-gray-900 dark:bg-black p-10 md:p-16 relative">
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
            
            {/* Right column - light */}
            <div className="bg-white dark:bg-neutral-900 p-10 md:p-16 flex flex-col justify-center">
              <div className="space-y-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center group">
                    <div className="h-10 w-px bg-gray-300 dark:bg-neutral-700 group-hover:h-14 transition-all duration-300 mr-6"></div>
                    <feature.icon className="h-6 w-6 text-gray-900 dark:text-white mr-4" />
                    <span className="font-medium text-gray-900 dark:text-white">{feature.text}</span>
                  </div>
                ))}
                <div className="pt-6">
                  <Button className="border border-gray-900 dark:border-white bg-transparent text-gray-900 dark:text-white hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300 rounded-none px-6 py-2 mt-4">
                    View Case Studies <ChevronRight className="h-4 w-4 ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
