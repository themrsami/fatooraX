"use client"

import { Badge } from "@/components/ui/badge"
import { 
  Shield, 
  Clock, 
  BarChart4, 
  Zap, 
  Globe, 
  Users, 
  CheckCircle 
} from "lucide-react"

// Features data
const features = [
  {
    icon: Shield,
    title: "Secure & Compliant",
    description: "Enterprise-grade security and regulatory compliance built into every solution we deliver."
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock support from our dedicated team of experts whenever you need assistance."
  },
  {
    icon: BarChart4,
    title: "Data-Driven Insights",
    description: "Leverage advanced analytics to make informed decisions and drive business growth."
  },
  {
    icon: Zap,
    title: "Rapid Implementation",
    description: "Efficient deployment methodologies that minimize disruption to your business operations."
  },
  {
    icon: Globe,
    title: "Global Expertise",
    description: "International experience and regional knowledge to support your business worldwide."
  },
  {
    icon: Users,
    title: "Collaborative Approach",
    description: "We work alongside your team to ensure seamless knowledge transfer and adoption."
  }
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-32 bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-neutral-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_var(--tw-gradient-stops))] from-blue-50/20 to-transparent dark:from-blue-900/5 dark:to-transparent"></div>
      <div className="container px-4 mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Partner With Us
          </h2>
          <p className="text-gray-600 dark:text-neutral-400 text-base md:text-lg">
            Discover the innovative features and benefits that make our services the preferred choice for businesses seeking excellence.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 p-8 rounded-xl transition-all duration-300 hover:shadow-md dark:hover:shadow-neutral-900/50 group"
            >              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-lg bg-gray-100 dark:bg-neutral-800/50 text-gray-900 dark:text-gray-200 transition-colors group-hover:bg-gray-200 dark:group-hover:bg-neutral-800">
                <feature.icon className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-black dark:group-hover:text-gray-300 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-neutral-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-20 text-center">
          <div className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-neutral-900 dark:to-neutral-800 rounded-full border border-gray-200 dark:border-neutral-800">
            <CheckCircle className="h-5 w-5 text-green-700 dark:text-blue-400 mr-2" />
            <span className="text-gray-700 dark:text-neutral-300 text-sm font-medium">
              Trusted by over 500+ businesses worldwide
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
