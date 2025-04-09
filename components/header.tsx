"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { BarChart3, Building2, Users, Phone, ChevronDown, Search, User, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { FatooraXLogo } from "@/components/fatoora-x-logo"
import { MobileNav } from "@/components/mobile-nav"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [activeLink, setActiveLink] = useState("")
  
  useEffect(() => {
    const handleScroll = () => {
      // Check if page is scrolled
      const scrollTop = window.pageYOffset
      if (scrollTop > 20) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
      
      // Determine active section
      const sections = ["services", "about", "clients", "contact"]
      
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
    
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])
  
  // Navigation items with submenu options
  const navItems = [
    {
      name: "Services",
      href: "#services",
      icon: <BarChart3 className="h-4 w-4 mr-2" />,
      hasSubmenu: true,
      submenu: [
        { name: "ERP Implementation", href: "#services-erp" },
        { name: "Accounting Services", href: "#services-accounting" },
        { name: "Tax Consultancy", href: "#services-tax" },
        { name: "Bookkeeping", href: "#services-bookkeeping" },
      ]
    },
    {
      name: "About",
      href: "#about",
      icon: <Building2 className="h-4 w-4 mr-2" />,
      hasSubmenu: false
    },
    {
      name: "Clients",
      href: "#clients",
      icon: <Users className="h-4 w-4 mr-2" />,
      hasSubmenu: true,
      submenu: [
        { name: "Case Studies", href: "#client-cases" },
        { name: "Testimonials", href: "#client-testimonials" },
      ]
    },
    {
      name: "Contact",
      href: "#contact",
      icon: <Phone className="h-4 w-4 mr-2" />,
      hasSubmenu: false
    },
  ]

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      scrolled 
        ? "bg-black backdrop-blur-md border-b border-zinc-800/80 py-0" 
        : "bg-black py-3"
    )}>
      <div className="container flex items-center justify-between h-16 px-4 md:px-6">
        <div className="flex items-center gap-2">
          <FatooraXLogo className="w-16 h-auto" />
          <div className={cn(
            "h-6 w-px bg-zinc-800 mx-4 transition-opacity",
            scrolled ? "opacity-100" : "opacity-0"
          )}></div>
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.hasSubmenu ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <button className={cn(
                        "flex items-center px-3 py-2 rounded-md text-sm transition-colors duration-200",
                        activeLink === item.href.substring(1)
                          ? "text-white bg-white/5" 
                          : "text-zinc-400 hover:text-white hover:bg-white/5"
                      )}>
                        {item.icon}
                        {item.name}
                        <ChevronDown className="h-3.5 w-3.5 ml-1 opacity-70" />
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent 
                      align="start"
                      className="bg-zinc-900 border border-zinc-800 rounded-lg shadow-lg shadow-black/30 w-56"
                    >
                      {item.submenu?.map((subitem) => (
                        <DropdownMenuItem key={subitem.name} asChild>
                          <Link 
                            href={subitem.href}
                            className="text-zinc-300 hover:text-white px-4 py-2 cursor-pointer text-sm focus:bg-white"
                          >
                            {subitem.name}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center px-3 py-2 rounded-md text-sm transition-colors duration-200",
                      activeLink === item.href.substring(1)
                        ? "text-white bg-white/5" 
                        : "text-zinc-400 hover:text-white hover:bg-white/5"
                    )}
                  >
                    {item.icon}
                    {item.name}
                  </Link>
                )}
                
                {/* Indicator for active link */}
                {activeLink === item.href.substring(1) && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full bg-white"></div>
                )}
              </div>
            ))}
          </nav>
        </div>
        
        <div className="flex items-center gap-3 md:gap-4">
          {/* Search button */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="text-zinc-400 hover:text-white hover:bg-white/5 rounded-full w-8 h-8 hidden sm:flex items-center justify-center"
          >
            <Search className="h-4 w-4" />
            <span className="sr-only">Search</span>
          </Button>
          
          {/* User profile button */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="text-zinc-400 hover:text-white hover:bg-white/5 rounded-full w-8 h-8 hidden sm:flex items-center justify-center"
          >
            <User className="h-4 w-4" />
            <span className="sr-only">User profile</span>
          </Button>
          
          <div className="h-5 w-px bg-zinc-800 mx-1 hidden sm:block"></div>
          
          {/* CTA buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button 
              className={cn(
                "text-black rounded-full px-5 py-1.5 text-sm font-medium transition-all duration-200 shadow-lg group",
                scrolled 
                  ? "bg-white hover:bg-zinc-100" 
                  : "bg-white/90 hover:bg-white"
              )}
            >
              <span>Get Started</span>
              <ArrowRight className="ml-2 h-4 w-4 transform transition-transform group-hover:translate-x-1" />
            </Button>
            
            <Button 
              variant="outline" 
              className="bg-transparent text-white hover:bg-zinc-900 hover:text-white rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-200 border border-zinc-700 hover:border-zinc-600"
            >
              Sign In
            </Button>
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