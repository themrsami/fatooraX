"use client"

import { Phone, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function CTASection() {  return (
    <section className="pt-32 pb-16 bg-white dark:bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-100/30 to-white/0 dark:from-neutral-800/10 dark:to-black/0"></div>
      <div className="container px-4 mx-auto relative z-10">
        <div className="max-w-4xl mx-auto bg-white shadow-lg dark:bg-neutral-900/30 backdrop-blur-sm border border-gray-100 dark:border-neutral-800 rounded-xl p-8 md:p-12 text-center">
          <Badge className="bg-zinc-100 text-black hover:bg-zinc-100 dark:bg-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-800 px-3 py-1 text-xs rounded-full mb-4 border border-blue-200 dark:border-neutral-800">
            Get Started
          </Badge>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-gray-900 dark:text-white">Ready to transform your business?</h2>
          <p className="text-gray-600 dark:text-neutral-400 mb-8 max-w-2xl mx-auto text-sm md:text-base">
            Join hundreds of businesses that have elevated their operations with FatooraX's premium financial
            services.
          </p>          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-black text-white hover:bg-zinc-900 dark:bg-white dark:text-black dark:hover:bg-neutral-200 rounded-full px-8 py-6 text-base font-medium transition-all duration-200 flex items-center gap-2 shadow-md">
              Schedule a Consultation
              <Phone className="h-4 w-4" />
            </Button>
            <Button className="bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-black dark:text-white dark:hover:bg-neutral-900 rounded-full px-8 py-6 text-base font-medium transition-all duration-200 border border-gray-200 dark:border-neutral-700 flex items-center gap-2">
              View Case Studies
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
