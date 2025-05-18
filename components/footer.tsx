"use client"

import Link from "next/link"
import { Linkedin, Facebook } from "lucide-react"
import { FaXTwitter } from "react-icons/fa6"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { FatooraXLogo } from "@/components/fatoora-x-logo"

export function Footer() {
  return (
    <footer id="contact" className="bg-black border-t border-neutral-900 py-16">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">          
          <div className="md:col-span-1">
            <Link href="/" className="p-2 rounded-lg inline-block">
              <div className="bg-black p-4 rounded-lg inline-block -mb-1.5">
                <FatooraXLogo className="w-32 h-auto" src="/fatooraxgray.svg" />
              </div>
            </Link>
            <p className="text-neutral-500 text-sm mt-4">Premium financial services for modern businesses.</p>            <div className="flex space-x-4 mt-6">
              {[
                { name: "Twitter", link: "https://x.com/FatooraX27762", icon: <FaXTwitter className="h-4 w-4" /> },
                { name: "LinkedIn", link: "https://www.linkedin.com/company/fatoorax-llc/", icon: <Linkedin className="h-4 w-4" /> },
                { name: "Facebook", link: "https://www.facebook.com/profile.php?id=61576353692061", icon: <Facebook className="h-4 w-4" /> },
              ].map((social) => (
                <Link key={social.name} href={social.link} className="text-neutral-500 hover:text-white transition-colors">
                  <span className="sr-only">{social.name}</span>
                  <div className="h-8 w-8 border border-neutral-800 rounded-full flex items-center justify-center hover:border-neutral-600 transition-colors">
                    {social.icon}
                  </div>
                </Link>
              ))}
            </div>
          </div>          <div>            <h3 className="text-sm font-medium mb-4 uppercase tracking-wider">Services</h3>
            <ul className="space-y-3">
              {[
                { name: "Bookkeeping & Accounting", href: "/#services" },
                { name: "Internal & External Audit", href: "/#services" },
                { name: "Odoo ERP Implementation", href: "/#services" },
                { name: "Tax Advisory & Compliance", href: "/#services" },
                { name: "Wealth Management Advisory", href: "/#services" },
                { name: "Business Valuation & Advisory", href: "/#services" },
                { name: "Business Formation & Structuring", href: "/#services" },
                { name: "Talent Advisory", href: "/#services" },
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-neutral-400 hover:text-white text-sm transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>            <h3 className="text-sm font-medium mb-4 uppercase tracking-wider">Company</h3>
            <ul className="space-y-3">
              {[
                { name: "About", href: "/#about" },
                { name: "Careers", href: "/careers" },
                { name: "Contact", href: "/#contact" },
                { name: "Blog", href: "/blog" },
                { name: "Privacy Policy", href: "/privacy-policy" }
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-neutral-400 hover:text-white text-sm transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-medium mb-4 uppercase tracking-wider">Stay Updated</h3>
            <p className="text-neutral-400 text-sm mb-4">Subscribe to our newsletter for the latest updates.</p>
            <div className="flex">
              <Input
                type="email"
                placeholder="Your email"
                className="bg-neutral-900 text-white border-neutral-800 rounded-l-md focus:ring-0 focus:border-neutral-700 h-10"
              />
              <Button className="rounded-l-none bg-white text-black hover:bg-neutral-200 h-10">Subscribe</Button>
            </div>
          </div>
        </div>
        <div className="border-t border-neutral-900 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-neutral-500 text-xs">© {new Date().getFullYear()} FatooraX. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="text-neutral-500 hover:text-white text-xs transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="text-neutral-500 hover:text-white text-xs transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-neutral-500 hover:text-white text-xs transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
