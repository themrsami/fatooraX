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

// Our Edge data
const ourEdgeItems = [
  {
    icon: Shield,
    title: "Secure & Compliant by Design",
    description: "Our services are built with regulatory compliance and data protection at their core—so you stay ahead of changing tax laws and audit requirements without added stress."
  },
  {
    icon: Clock,
    title: "Responsive, Human Support",
    description: "When you need us, we're here. Our team of experienced professionals is committed to clear, timely, and reliable communication—no bots, no guesswork."
  },
  {
    icon: BarChart4,
    title: "Insight-Driven Strategy",
    description: "We translate numbers into knowledge. Through intelligent reporting and advisory, we help you uncover patterns, reduce risk, and seize opportunities—faster and smarter."
  },
  {
    icon: Zap,
    title: "Rapid Implementation",
    description: "We understand that time is money. Our streamlined processes and expert teams ensure that your solutions are up and running quickly, with minimal disruption to your operations."
  },
  {
    icon: Globe,
    title: "Global Expertise",
    description: "With a presence in multiple regions, we bring a wealth of local and international knowledge to your business. Our team understands the nuances of different markets and can help you navigate them effectively."
  },
  {
    icon: Users,
    title: "Collaborative Approach",
    description: "We believe in partnership. Our team works closely with you to understand your unique challenges and goals, ensuring that our solutions are tailored to your specific needs."
  }
]

export function OurEdgeSection() {
  return (
    <section id="our-edge" className="py-32 bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-neutral-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_var(--tw-gradient-stops))] from-blue-50/20 to-transparent dark:from-blue-900/5 dark:to-transparent"></div>
      <div className="container px-4 mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Why Partner With Fatoora X?
          </h2>
          <p className="text-gray-600 dark:text-neutral-400 text-base md:text-lg">
            We don&apos;t just manage numbers—we build the financial backbone that drives clarity, control, and confident decision-making.
          </p>
        </div>

        <div className="mb-16 text-center">
          <Badge variant="outline" className="px-4 py-1 text-base bg-white/50 dark:bg-neutral-900/50 border-gray-200 dark:border-neutral-800">
            <span className="bg-gradient-to-r from-gray-700 to-gray-900 dark:from-gray-300 dark:to-gray-100 bg-clip-text text-transparent font-medium">
              Built for Forward-Thinking Businesses
            </span>
          </Badge>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {ourEdgeItems.map((item, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 p-8 rounded-xl transition-all duration-300 hover:shadow-md dark:hover:shadow-neutral-900/50 group"
            >
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-lg bg-gray-100 dark:bg-neutral-800/50 text-gray-900 dark:text-gray-200 transition-colors group-hover:bg-gray-200 dark:group-hover:bg-neutral-800">
                <item.icon className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-black dark:group-hover:text-gray-300 transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-600 dark:text-neutral-400">
                {item.description}
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
