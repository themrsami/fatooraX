import {
  ArrowDown,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/header"
import { HeroSlider } from "@/components/hero-slider"
import { ServicesSection } from "@/components/services-section"
import { StatsSection } from "@/components/stats-section"
import { AboutSection } from "@/components/about-section"
import { TestimonialSlider } from "@/components/testimonial-slider"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header with modular component */}
      <Header />

      {/* Hero Section with Image Slider */}
      <HeroSlider />
      
      {/* Services Section */}
      <ServicesSection />

      {/* Stats Section */}
      <StatsSection />

      {/* About Section */}
      <AboutSection />

      {/* Testimonials */}
      <section id="clients" className="pt-32 pb-16 bg-neutral-950">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col items-center text-center mb-16">
            <Badge className="bg-neutral-800 text-neutral-300 hover:bg-neutral-800 px-3 py-1 text-xs rounded-full mb-4">
              Client Stories
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-neutral-400 max-w-2xl text-sm md:text-base">
              Hear from businesses that have transformed their operations with FatooraX.
            </p>
          </div>
          <TestimonialSlider />
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />

      {/* Footer */}
      <Footer />
      
      {/* Scroll indicator */}
      <div className="fixed bottom-10 right-10 animate-bounce z-10">
        <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm border border-neutral-800">
          <ArrowDown className="h-5 w-5 text-neutral-400" />
        </div>
      </div>
    </div>
  )
}
