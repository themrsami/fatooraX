import {
  ArrowDown,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/header"
import { HeroSlider } from "@/components/hero-slider"
import { ServicesSection } from "@/components/services-section"
import { AboutSection } from "@/components/about-section"
import { OurEdgeSection } from "@/components/our-edge-section"
import { ContactSection } from "@/components/contact-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import SectionDivider from "@/components/section-divider"

export default function Home() {

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header with modular component */}
      <Header />

      {/* Hero Section with Image Slider */}
      <HeroSlider />

      {/* Section Divider */}
      <SectionDivider />

      {/* Services Section */}

      {/* About Section */}
      <AboutSection />      {/* Section Divider */}
      <SectionDivider />

      {/* Our Edge Section */}
      <OurEdgeSection />

      {/* Section Divider */}
      <SectionDivider />

      {/* Services Section */}
      <ServicesSection />

      {/* Section Divider */}
      <SectionDivider />

      {/* Section Divider */}
      <SectionDivider />

      {/* CTA Section */}
      <CTASection />

      {/* Section Divider */}
      <SectionDivider />

      {/* Contact Section */}
      <ContactSection />

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
