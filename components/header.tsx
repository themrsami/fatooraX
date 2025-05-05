"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { BarChart3, Building2, Users, Phone, Search, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { FatooraXLogo } from "@/components/fatoora-x-logo"
import { MobileNav } from "@/components/mobile-nav"
import { cn } from "@/lib/utils"

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [activeLink, setActiveLink] = useState("")
    useEffect(() => {    const handleScroll = () => {
      // Check if page is scrolled
      const scrollTop = window.pageYOffset
      if (scrollTop > 20) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }        // Determine active section
      const sections = ["hero", "services", "about", "our-edge", "cta-section", "contact"]
      
      for (const section of sections) {
        const element = document.getElementById(section)
        if (!element) continue
        
        const rect = element.getBoundingClientRect()
        if (rect.top <= 100 && rect.bottom >= 100) {
          setActiveLink(section)
          break
        }
      }
    }
      // Set active link based on pathname for Careers and Blog pages
    const pathname = window.location.pathname;
    if (pathname === '/careers') {
      setActiveLink('careers');
    } else if (pathname === '/blog') {
      setActiveLink('blog');
    }
    
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])  // Navigation items with direct links
  const navItems = [
    {
      name: "Home",
      href: "/#hero"
    },
    {
      name: "About",
      href: "/#about"
    },    {
      name: "Our Edge",
      href: "/#our-edge"
    },
    {
      name: "Services",
      href: "/#services"
    },
    {
      name: "Schedule a Demo",
      href: "/#cta-section"
    },
    {
      name: "Contact",
      href: "/#contact"
    },
    {
      name: "Blog",
      href: "/blog"
    },
    {
      name: "Careers",
      href: "/careers"
    }
  ]
  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      scrolled 
        ? "bg-black backdrop-blur-md border-b border-zinc-800/80 py-0" 
        : "bg-black py-3"
    )}>      <div className="container flex items-center justify-between h-16 px-4 md:px-6">
        <div className="flex items-center gap-2">
          <Link href="/">
            <FatooraXLogo className="w-16 h-auto" />
          </Link>
          <div className={cn(
            "h-6 w-px bg-zinc-800 mx-4 transition-opacity",
            scrolled ? "opacity-100" : "opacity-0"
          )}></div>
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (              <div key={item.name} className="relative group">                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center px-3 py-2 rounded-md text-sm transition-colors duration-200",
                      (activeLink === item.href.substring(2) || 
                        (item.href === "/careers" && activeLink === "careers") ||
                        (item.href === "/blog" && activeLink === "blog"))
                        ? "text-white bg-white/5" 
                        : "text-white hover:bg-white/5"
                    )}
                  >
                    {item.name}
                  </Link>
                  {/* Indicator for active link - line instead of dot */}
                {(activeLink === item.href.substring(2) || 
                  (item.href === "/careers" && activeLink === "careers") || 
                  (item.href === "/blog" && activeLink === "blog")) && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white"></div>
                )}
              </div>
            ))}
          </nav>
        </div>          <div className="flex items-center gap-3 md:gap-4">
          {/* CTA button */}
          <div className="hidden md:flex items-center gap-3">
            <Link href="/#services">
              <Button 
                className={cn(
                  "border border-white bg-white text-black hover:bg-transparent hover:text-white transition-all duration-200 rounded-none px-5 py-1.5 text-sm font-medium group"
                )}
              >
                <span>Get Started</span>
                <ArrowRight className="ml-2 h-4 w-4 transform transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
          
          {/* Mobile navigation */}
          <MobileNav />
        </div>
      </div>
      
      {/* Subtle gradient border at bottom */}
      <div className={cn(
        "absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-800/50 to-transparent transition-opacity duration-300",
        scrolled ? "opacity-100" : "opacity-0"
      )}></div>
    </header>
  )
}