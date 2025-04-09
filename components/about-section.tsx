"use client"

import { ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ClientLogo } from "@/components/client-logo"

export function AboutSection() {  return (
    <section id="about" className="pt-32 pb-16 bg-white dark:bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-100/30 to-white/0 dark:from-neutral-800/10 dark:to-black/0"></div>
      <div className="container px-4 mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Badge className="bg-zinc-100 text-black hover:bg-zinc-100 dark:bg-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-800 px-3 py-1 text-xs rounded-full mb-4 border border-blue-200 dark:border-neutral-800">
            Why Choose Us
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">Trusted Excellence</h2>
          <p className="text-gray-600 dark:text-neutral-400 text-sm md:text-base">
            Join the elite businesses that have transformed their operations with FatooraX's premium services.
          </p>
        </div>        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-20">
          <ClientLogo name="TechVision" />
          <ClientLogo name="Nexus Group" />
          <ClientLogo name="GlobalFin" />
          <ClientLogo name="AlphaCore" />
        </div>

        <div className="mt-24 bg-gray-50 dark:bg-neutral-900/30 backdrop-blur-sm border border-gray-200 dark:border-neutral-800 rounded-xl p-6 md:p-12 shadow-sm">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-zinc-100 text-black hover:bg-zinc-100 dark:bg-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-800 px-3 py-1 text-xs rounded-full mb-4 border border-blue-200 dark:border-neutral-800">
                Premium Solutions
              </Badge>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-white">Elevate your financial operations</h3>
              <p className="text-gray-600 dark:text-neutral-400 mb-6 text-sm md:text-base">
                Our premium services are designed to transform how your business handles financial operations,
                bringing efficiency, accuracy, and strategic insight to every aspect.
              </p>
              <Button className="rounded-full bg-zinc-100 text-black border border-blue-200 hover:bg-blue-200 dark:bg-transparent dark:text-white dark:border-neutral-700 dark:hover:bg-neutral-800/50 flex items-center gap-2">
                Learn More <ExternalLink className="h-4 w-4" />
              </Button>
            </div>
            <div className="bg-gradient-to-br from-blue-50/80 to-gray-50/80 dark:from-neutral-800/50 dark:to-neutral-900/50 backdrop-blur-sm rounded-lg p-8 h-full border border-gray-200 dark:border-neutral-800">
              <div className="space-y-6">
                {[
                  { title: "Enterprise-Grade Security", desc: "Bank-level encryption and security protocols" },
                  { title: "Real-Time Analytics", desc: "Instant insights into your financial performance" },
                  { title: "Dedicated Support Team", desc: "24/7 access to financial experts" },
                ].map((feature, i) => (
                  <div key={i} className="flex items-start">
                    <div className="h-8 w-8 rounded-full bg-zinc-100 dark:bg-neutral-700 flex items-center justify-center mr-4 mt-1 flex-shrink-0 text-black dark:text-white border border-blue-200 dark:border-neutral-600">
                      <span className="text-xs">{i + 1}</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white">{feature.title}</h4>
                      <p className="text-sm text-gray-600 dark:text-neutral-400">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
