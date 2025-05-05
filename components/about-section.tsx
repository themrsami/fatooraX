"use client"

import { ExternalLink, Check } from "lucide-react"
import { Button } from "@/components/ui/button"

export function AboutSection() {  return (    <section id="about" className="pt-32 pb-16 bg-white dark:bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-100/30 to-white/0 dark:from-neutral-800/10 dark:to-black/0"></div>
      <div className="container px-4 mx-auto relative z-10">        {/* Header with diagonal line design */}
        <div className="relative max-w-3xl mx-auto text-center mb-24">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-gray-900 dark:text-white">Advisory That Drives Business Forward</h2>
          <p className="text-gray-600 dark:text-neutral-400 text-base md:text-lg max-w-2xl mx-auto">
            Join the elite businesses that have transformed their operations with FatooraX's premium services.
          </p>
        </div>
        
        {/* Who We Are section with distinct design */}
        <div className="mb-24 relative">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gray-300 dark:via-neutral-700 to-transparent"></div>
          <div className="py-16 px-8 bg-gradient-to-b from-gray-50 to-white dark:from-neutral-900 dark:to-black rounded-xl border border-gray-200 dark:border-neutral-800">
            <div className="absolute -top-4 left-10 px-4 py-1 bg-gray-900 dark:bg-white text-white dark:text-black text-sm font-medium rounded-sm">
              Who We Are
            </div>
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-5 gap-8">
                <div className="md:col-span-3">
                  <p className="text-gray-700 dark:text-neutral-300 text-lg leading-relaxed mb-6">
                    Fatoora X is a multidisciplinary advisory firm offering comprehensive financial, operational, and strategic support to businesses across sectors. Our services span core accounting functions, strategic tax planning, ERP implementation, and talent advisory—allowing organizations to navigate complexity, enhance performance, and unlock sustainable growth.
                  </p>
                </div>
                <div className="md:col-span-2">
                  <div className="h-full flex items-center">
                    <p className="text-gray-700 dark:text-neutral-300 text-lg leading-relaxed">
                      Combining deep financial expertise with advanced technological tools and regulatory understanding, we help businesses remain agile, compliant, and forward-looking. Whether you're a startup, SME, or regional enterprise, we deliver bespoke solutions that evolve with your needs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gray-300 dark:via-neutral-700 to-transparent"></div>
        </div>
        
        {/* Vision & Mission in split design */}
        <div className="grid md:grid-cols-2 gap-0 mb-24 border border-gray-200 dark:border-neutral-800 rounded-xl overflow-hidden">
          <div className="bg-white dark:bg-neutral-900 p-10 md:p-16 relative">
            <span className="absolute top-0 left-0 h-1 w-12 bg-gray-900 dark:bg-white"></span>
            <h3 className="text-xl uppercase tracking-wide font-semibold text-gray-900 dark:text-white mb-6">Vision</h3>
            <p className="text-gray-700 dark:text-neutral-300 text-lg md:text-xl leading-relaxed">
              To redefine the future of financial intelligence—empowering every business to operate at its highest potential through radical automation, transparent systems, and fearless innovation.
            </p>
          </div>
          
          <div className="bg-gray-50 dark:bg-neutral-800 p-10 md:p-16 relative">
            <span className="absolute top-0 left-0 h-1 w-12 bg-gray-900 dark:bg-white"></span>
            <h3 className="text-xl uppercase tracking-wide font-semibold text-gray-900 dark:text-white mb-6">Mission</h3>
            <p className="text-gray-700 dark:text-neutral-300 text-lg md:text-xl leading-relaxed">
              To engineer a unified ecosystem where bookkeeping, tax, ERP, and talent solutions converge into intelligent infrastructure—automating complexity, unlocking wealth, and fueling growth for tomorrow&apos;s market leaders.
            </p>
          </div>        </div>
        
        {/* Leadership and Values in a more modern layout */}
        <div className="mb-20">
          <div className="grid md:grid-cols-5 gap-8">
            {/* Leadership section - spans 2 columns */}
            <div className="md:col-span-2 bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 rounded-xl p-8 md:p-10 relative">
              <div className="absolute -top-4 left-10 px-4 py-1 bg-gray-900 dark:bg-white text-white dark:text-black text-sm font-medium rounded-sm">
                Leadership Team
              </div>
              <div className="pt-6">
                <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Expertise That Delivers Results</h3>
                <p className="text-gray-600 dark:text-neutral-400 mb-8">
                  Comprising former CFOs, Big Four consultants, ERP architects, and investment advisors, our team brings decades of hands-on experience in financial management and transformation.
                </p>
              </div>
            </div>
            
            {/* Core Values section - spans 3 columns */}
            <div className="md:col-span-3 bg-gray-50 dark:bg-neutral-800 border border-gray-200 dark:border-neutral-800 rounded-xl p-8 md:p-10 relative">
              <div className="absolute -top-4 left-10 px-4 py-1 bg-gray-900 dark:bg-white text-white dark:text-black text-sm font-medium rounded-sm">
                Core Values
              </div>
              <div className="pt-6">
                <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6">
                  {[
                    { title: "Excellence", desc: "We maintain the highest standards in all that we do" },
                    { title: "Integrity", desc: "We uphold ethical practices and transparency in every interaction" },
                    { title: "Innovation", desc: "We continuously evolve our methods and solutions" },
                    { title: "Client-Centricity", desc: "We put our clients' needs at the center of every decision" },
                    { title: "Confidentiality", desc: "We safeguard our clients' information with utmost care" },
                  ].map((value, i) => (
                    <div key={i} className="flex items-start group">
                      <div className="h-8 w-8 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                        <div className="h-px w-6 bg-gray-400 dark:bg-neutral-500 group-hover:w-8 group-hover:bg-gray-900 dark:group-hover:bg-white transition-all duration-300"></div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white text-lg">{value.title}</h4>
                        <p className="text-gray-600 dark:text-neutral-400">{value.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Additional brand statement with diagonal design */}
        <div className="relative border-t border-b border-gray-200 dark:border-neutral-800 py-16 text-center">
          <div className="absolute -top-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-neutral-700 to-transparent"></div>
          <div className="absolute -bottom-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-neutral-700 to-transparent"></div>
          <p className="text-2xl md:text-3xl font-light text-gray-800 dark:text-neutral-200 max-w-3xl mx-auto">
            "From establishing <span className="font-semibold">strong foundations</span> to executing <span className="font-semibold">high-impact initiatives</span>, we support every stage of your growth."
          </p>
        </div>
      </div>
    </section>
  )
}
