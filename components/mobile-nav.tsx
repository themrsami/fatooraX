"use client"

import { useState } from "react"
import { Menu, X, BarChart3, Users, Building2, Phone } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FatooraXLogo } from "@/components/fatoora-x-logo"

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)

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

  return (
    <div className="md:hidden">
      <Button variant="ghost" size="icon" onClick={toggleMenu} className="text-white hover:bg-zinc-800/50 rounded-full">
        <Menu className="h-6 w-6" />
        <span className="sr-only">Toggle menu</span>
      </Button>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm">
          <div className="container h-full flex flex-col">
            <div className="flex items-center justify-between pt-4">
              <FatooraXLogo className="w-28 h-auto" />
              <Button
                variant="ghost"
                size="icon"
                onClick={closeMenu}
                className="text-white hover:bg-zinc-800/50 rounded-full"
              >
                <X className="h-6 w-6" />
                <span className="sr-only">Close menu</span>
              </Button>
            </div>
            <nav className="flex flex-col items-center justify-center flex-1 gap-10 py-10">
              {[
                { name: "Services", href: "#services", icon: <BarChart3 className="h-5 w-5 mr-3" /> },
                { name: "About", href: "#about", icon: <Building2 className="h-5 w-5 mr-3" /> },
                { name: "Clients", href: "#clients", icon: <Users className="h-5 w-5 mr-3" /> },
                { name: "Contact", href: "#contact", icon: <Phone className="h-5 w-5 mr-3" /> },
              ].map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={closeMenu}
                  className="text-xl text-zinc-300 hover:text-white transition-colors duration-200 flex items-center"
                >
                  {item.icon}
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col gap-4 w-full max-w-xs mt-8">
                <Button
                  className="bg-white text-black hover:bg-zinc-200 rounded-full px-8 py-6 text-base font-medium transition-all duration-200"
                  onClick={closeMenu}
                >
                  Get Started
                </Button>
                <Button
                  className="bg-black text-white hover:bg-zinc-900 rounded-full px-8 py-6 text-base font-medium transition-all duration-200 border border-zinc-700"
                  onClick={closeMenu}
                >
                  Book a Consultation
                </Button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </div>
  )
}
