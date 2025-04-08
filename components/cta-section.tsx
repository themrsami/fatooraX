"use client"

import { Phone, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function CTASection() {
  return (
    <section className="pt-32 pb-16 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-800/10 to-black/0"></div>
      <div className="container px-4 mx-auto relative z-10">
        <div className="max-w-4xl mx-auto bg-neutral-900/30 backdrop-blur-sm border border-neutral-800 rounded-xl p-8 md:p-12 text-center">
          <Badge className="bg-neutral-800 text-neutral-300 hover:bg-neutral-800 px-3 py-1 text-xs rounded-full mb-4">
            Get Started
          </Badge>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Ready to transform your business?</h2>
          <p className="text-neutral-400 mb-8 max-w-2xl mx-auto text-sm md:text-base">
            Join hundreds of businesses that have elevated their operations with FatooraX's premium financial
            services.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-white text-black hover:bg-neutral-200 rounded-full px-8 py-6 text-base font-medium transition-all duration-200 flex items-center gap-2">
              Schedule a Consultation
              <Phone className="h-4 w-4" />
            </Button>
            <Button className="bg-black text-white hover:bg-neutral-900 rounded-full px-8 py-6 text-base font-medium transition-all duration-200 border border-neutral-700 flex items-center gap-2">
              View Case Studies
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
