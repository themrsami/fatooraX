"use client"

import Link from "next/link"
import { BarChart3, Building2, Users, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { FatooraXLogo } from "@/components/fatoora-x-logo"
import { MobileNav } from "@/components/mobile-nav"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-neutral-800 bg-black/80 backdrop-blur-md">
      <div className="container flex items-center justify-between h-16 px-4 md:px-6">
        <FatooraXLogo className="w-32 h-auto" />
        <nav className="hidden md:flex items-center space-x-8">
          {[
            { name: "Services", href: "#services", icon: <BarChart3 className="h-4 w-4 mr-2" /> },
            { name: "About", href: "#about", icon: <Building2 className="h-4 w-4 mr-2" /> },
            { name: "Clients", href: "#clients", icon: <Users className="h-4 w-4 mr-2" /> },
            { name: "Contact", href: "#contact", icon: <Phone className="h-4 w-4 mr-2" /> },
          ].map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm text-neutral-400 hover:text-white transition-colors duration-200 flex items-center"
            >
              {item.icon}
              {item.name}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <Button className="bg-white text-black hover:bg-neutral-200 rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 hidden sm:flex">
            Get Started
          </Button>
          <MobileNav />
        </div>
      </div>
    </header>
  )
}
