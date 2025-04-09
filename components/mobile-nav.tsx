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
      const sections = ["services", "about", "clients", "contact"]
      
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

  const menuItems = [
    { name: "Services", href: "#services", icon: <BarChart3 className="h-5 w-5" /> },
    { name: "About", href: "#about", icon: <Building2 className="h-5 w-5" /> },
    { name: "Clients", href: "#clients", icon: <Users className="h-5 w-5" /> },
    { name: "Contact", href: "#contact", icon: <Phone className="h-5 w-5" /> },
  ]

  // Animation variants
  const containerVariants = {
    closed: { opacity: 0 },
    open: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }
  
  const itemVariants = {
    closed: { y: 20, opacity: 0 },
    open: { y: 0, opacity: 1 }
  }

  return (
    <div className="md:hidden">
      <Button 
        variant="ghost" 
        size="icon" 
        onClick={toggleMenu} 
        className="text-white hover:bg-white/10 rounded-full w-10 h-10 flex items-center justify-center"
      >
        <Menu className="h-5 w-5" />
        <span className="sr-only">Toggle menu</span>
      </Button>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md"
          >
            <div className="container h-full flex flex-col">
              <div className="flex items-center justify-between pt-6 pb-2">
                <FatooraXLogo className="w-28 h-auto" />
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={closeMenu}
                  className="text-white hover:bg-white/10 rounded-full w-10 h-10 flex items-center justify-center"
                >
                  <X className="h-5 w-5" />
                  <span className="sr-only">Close menu</span>
                </Button>
              </div>
              
              <div className="h-px w-full bg-gradient-to-r from-transparent via-zinc-800 to-transparent my-4"></div>
              
              <motion.nav 
                className="flex flex-col flex-1 py-8"
                variants={containerVariants}
                initial="closed"
                animate="open"
              >
                <div className="space-y-6 mb-12">
                  {menuItems.map((item, index) => (
                    <motion.div key={item.name} variants={itemVariants}>
                      <Link
                        href={item.href}
                        onClick={closeMenu}
                        className={`flex items-center justify-between px-2 py-4 rounded-lg text-lg ${
                          activeSection === item.href.substring(1)
                            ? "text-white bg-white/5 font-medium"
                            : "text-zinc-400 hover:text-white"
                        } transition-all duration-200`}
                      >
                        <div className="flex items-center">
                          <div className={`w-10 h-10 rounded-full ${
                            activeSection === item.href.substring(1)
                              ? "bg-zinc-800" 
                              : "bg-zinc-900"
                          } flex items-center justify-center mr-4`}>
                            {item.icon}
                          </div>
                          {item.name}
                        </div>
                        <ChevronRight className="h-5 w-5 opacity-50" />
                      </Link>
                    </motion.div>
                  ))}
                </div>
                
                <motion.div 
                  variants={itemVariants}
                  className="mt-auto space-y-4 py-6 border-t border-zinc-800"
                >
                  <div className="text-xs text-zinc-500 uppercase tracking-wider font-medium mb-4 px-2">
                    Get Started
                  </div>
                  
                  <Link 
                    href="#" 
                    onClick={closeMenu}
                    className="flex items-center justify-between px-4 py-3 text-zinc-300 hover:text-white text-sm rounded-lg transition-all hover:bg-white/5"
                  >
                    <span>Documentation</span>
                    <ExternalLink className="h-4 w-4 opacity-50" />
                  </Link>
                  
                  <Link 
                    href="#" 
                    onClick={closeMenu}
                    className="flex items-center justify-between px-4 py-3 text-zinc-300 hover:text-white text-sm rounded-lg transition-all hover:bg-white/5"
                  >
                    <span>Support Center</span>
                    <ExternalLink className="h-4 w-4 opacity-50" />
                  </Link>
                </motion.div>
                
                <motion.div 
                  variants={itemVariants}
                  className="flex flex-col gap-3 px-2"
                >
                  <Button
                    className="bg-white text-black hover:bg-zinc-100 rounded-lg px-5 py-6 text-base font-medium transition-all duration-200 shadow-lg flex justify-between group"
                    onClick={closeMenu}
                  >
                    <span>Get Started</span>
                    <ArrowRight className="h-5 w-5 transform transition-transform group-hover:translate-x-1" />
                  </Button>
                  <Button
                    className="bg-zinc-900 text-white hover:bg-zinc-800 rounded-lg px-5 py-6 text-base font-medium transition-all duration-200 border border-zinc-800 flex justify-between"
                    onClick={closeMenu}
                  >
                    Book a Consultation
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