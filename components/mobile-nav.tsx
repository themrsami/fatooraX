"use client"

import { useState, useEffect } from "react"
import { Menu, X, BarChart3, Users, Building2, Phone, ArrowRight, ChevronRight, ExternalLink } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FatooraXLogo } from "@/components/fatoora-x-logo"
import { motion, AnimatePresence } from "framer-motion"

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  // Track active section based on scroll position
  useEffect(() => {
    if (!isOpen) return    
      const handleScroll = () => {
      const sections = ["hero", "services", "about", "our-edge", "clients", "contact"]
      
      const current = sections.find(section => {
        const element = document.getElementById(section)
        if (!element) return false
        
        const rect = element.getBoundingClientRect()
        return rect.top <= 200 && rect.bottom >= 200
      })
      
      if (current) {
        setActiveSection(current)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [isOpen])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
    // Prevent scrolling when menu is open
    if (!isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
  }

  const closeMenu = () => {
    setIsOpen(false)
    document.body.style.overflow = "auto"
  }

  const menuItems = [    { name: "Home", href: "/#hero", icon: <ArrowRight className="h-4 w-4" /> },
    { name: "About", href: "/#about", icon: <ArrowRight className="h-4 w-4" /> },
    { name: "Our Edge", href: "/#our-edge", icon: <ArrowRight className="h-4 w-4" /> },
    { name: "Services", href: "/#services", icon: <ArrowRight className="h-4 w-4" /> },
    { name: "Schedule a Demo", href: "/#cta-section", icon: <ArrowRight className="h-4 w-4" /> },
    { name: "Contact", href: "/#contact", icon: <ArrowRight className="h-4 w-4" /> },
    { name: "Blog", href: "/blog", icon: <ArrowRight className="h-4 w-4" /> },
    { name: "Careers", href: "/careers", icon: <ArrowRight className="h-4 w-4" /> },
  ]

  // Animation variants
  const containerVariants = {
    closed: { opacity: 0 },
    open: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.05,
        delayChildren: 0.1
      }
    }
  }
  
  const itemVariants = {
    closed: { y: 10, opacity: 0 },
    open: { y: 0, opacity: 1 }
  }

  return (
    <div className="md:hidden">
      <Button 
        variant="ghost" 
        size="icon" 
        onClick={toggleMenu} 
        className="text-white rounded-none w-10 h-10 flex items-center justify-center"
      >
        <Menu className="h-5 w-5" />
        <span className="sr-only">Toggle menu</span>
      </Button>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-16 right-4 z-50 bg-white w-64 shadow-lg rounded-md overflow-hidden"
          >
            <div className="flex flex-col">              
              <motion.nav 
                className="flex flex-col py-4"
                variants={containerVariants}
                initial="closed"
                animate="open"
              >
                <div className="space-y-1">
                  {menuItems.map((item) => (
                    <motion.div key={item.name} variants={itemVariants}>
                      <Link
                        href={item.href}
                        onClick={closeMenu}
                        className={`flex items-center justify-between px-4 py-2 text-sm ${
                          activeSection === item.href.substring(2) || 
                          (item.href === "/careers" && window.location.pathname === "/careers") ||
                          (item.href === "/blog" && window.location.pathname === "/blog")
                            ? "text-black font-medium bg-gray-100"
                            : "text-gray-700 hover:bg-gray-50 hover:text-black"
                        } transition-all duration-200`}
                      >
                        <span>{item.name}</span>
                        <ArrowRight className="h-3 w-3 text-gray-400" />
                      </Link>
                    </motion.div>
                  ))}
                </div>
                
                <div className="h-px w-full bg-gray-200 my-3"></div>
                
                <motion.div 
                  variants={itemVariants}
                  className="px-4 pt-2 pb-4"
                >
                  <Button
                    className="w-full bg-black text-white hover:bg-gray-800 rounded-sm py-2 text-sm font-medium transition-all duration-200 flex justify-between"
                    onClick={closeMenu}
                  >
                    <span>Get Started</span>
                    <ArrowRight className="h-3 w-3" />
                  </Button>
                </motion.div>
              </motion.nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}