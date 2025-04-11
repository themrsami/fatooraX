"use client"

import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function CareersPage() {
  // Sample job listings
  const jobListings = [
    {
      title: "Financial Analyst",
      location: "Dubai, UAE",
      type: "Full-time",
      description: "Join our financial analysis team to help clients make data-driven decisions that impact their bottom line.",
      requirements: [
        "Bachelor's degree in Finance, Accounting, or related field",
        "3+ years of experience in financial analysis",
        "Proficiency in financial modeling and data analysis",
        "Strong communication and presentation skills",
      ]
    },
    {
      title: "Senior ERP Consultant",
      location: "Abu Dhabi, UAE",
      type: "Full-time",
      description: "Lead the implementation and optimization of Odoo ERP systems for our enterprise clients.",
      requirements: [
        "5+ years of experience with Odoo ERP implementation",
        "Strong understanding of business processes and financial operations",
        "Technical background with customization capabilities",
        "Project management experience",
      ]
    },
    {
      title: "Tax Advisory Specialist",
      location: "Riyadh, KSA",
      type: "Full-time",
      description: "Provide expert tax advisory services to help clients navigate complex regulatory environments.",
      requirements: [
        "Professional certification in taxation (CPA, ACCA, or equivalent)",
        "4+ years experience in tax advisory or consulting",
        "Thorough knowledge of GCC tax regulations",
        "Strong analytical and problem-solving skills",
      ]
    }
  ]

  return (
    <main className="min-h-screen bg-white dark:bg-black">
      <Header />
      
      {/* Hero section */}
      <section className="pt-32 pb-16 bg-white dark:bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-100/30 to-white/0 dark:from-neutral-800/10 dark:to-black/0"></div>
        
          <div className="relative max-w-4xl mx-auto text-center mb-16">
            <div className="absolute left-0 right-0 top-1/2 h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-neutral-700 to-transparent -z-10"></div>
            <Badge className="relative inline-block bg-white dark:bg-black text-black dark:text-white px-4 py-2 text-xs uppercase tracking-wider font-medium border border-gray-200 dark:border-neutral-800 mb-12">
              CAREERS
            </Badge>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8 text-gray-900 dark:text-white leading-tight">
              Build the Future of <br />Finance With Us
            </h1>
            <p className="text-gray-600 dark:text-neutral-400 text-base md:text-xl max-w-2xl mx-auto leading-relaxed">
              Fatoora X is always looking for professionals who combine critical thinking with practical action. If you're ready to make an impact in a high-growth, high-integrity environment, we'd love to hear from you.
            </p>
          </div>
      </section>
      
      {/* Values section */}
      <section className="py-24 bg-gray-50 dark:bg-neutral-950 border-y border-gray-200 dark:border-neutral-900">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">Why Join Our Team</h2>
            <p className="text-gray-600 dark:text-neutral-400">
              At Fatoora X, we're building a culture where professionals thrive through meaningful work, continuous growth, and impactful collaboration.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Purpose-Driven Work",
                description: "Your skills will directly impact businesses across the region, helping them achieve financial clarity and operational excellence."
              },
              {
                title: "Continuous Growth",
                description: "We invest in your professional development with mentorship, training opportunities, and exposure to diverse client challenges."
              },
              {
                title: "Collaborative Environment",
                description: "Work alongside industry experts in a supportive setting where innovation and knowledge-sharing are encouraged."
              }
            ].map((value, index) => (
              <div 
                key={index}
                className="bg-white dark:bg-neutral-900 p-8 border border-gray-200 dark:border-neutral-800 relative"
              >
                <div className="h-1 w-12 bg-gray-900 dark:bg-white absolute top-0 left-0"></div>
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">{value.title}</h3>
                <p className="text-gray-600 dark:text-neutral-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Current openings */}
      <section className="py-24 bg-white dark:bg-black">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">Current Openings</h2>
            <p className="text-gray-600 dark:text-neutral-400">
              Explore our current opportunities and find where your expertise meets our vision.
            </p>
          </div>
          
          <div className="space-y-8 max-w-5xl mx-auto">
            {jobListings.map((job, index) => (
              <div 
                key={index}
                className="border border-gray-200 dark:border-neutral-800 hover:border-gray-900 dark:hover:border-white transition-colors duration-300"
              >
                <div className="p-8">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{job.title}</h3>
                      <div className="flex items-center text-gray-600 dark:text-neutral-400 text-sm">
                        <span>{job.location}</span>
                        <span className="mx-2">•</span>
                        <span>{job.type}</span>
                      </div>
                    </div>
                    <Button className="mt-4 md:mt-0 border border-gray-900 dark:border-white bg-transparent text-gray-900 dark:text-white hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300 rounded-none px-6 py-3 text-base font-medium flex items-center group">
                      <span>Apply Now</span>
                      <ArrowRight className="ml-2 h-4 w-4 transform transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
                  
                  <p className="text-gray-600 dark:text-neutral-400 mb-6">{job.description}</p>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-3">Requirements</h4>
                    <ul className="space-y-2">
                      {job.requirements.map((req, i) => (
                        <li key={i} className="flex items-start">
                          <div className="h-px w-4 bg-gray-400 dark:bg-neutral-500 mt-3 mr-3"></div>
                          <span className="text-gray-600 dark:text-neutral-400">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Application CTA */}
      <section className="relative border-t border-b border-gray-200 dark:border-neutral-800 py-20 bg-white dark:bg-black text-center">
        <div className="absolute -top-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-neutral-700 to-transparent"></div>
        <div className="absolute -bottom-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-neutral-700 to-transparent"></div>
        
        <div className="container px-4 mx-auto">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 text-gray-900 dark:text-white max-w-3xl mx-auto">
            Don't see a role that matches your profile?
          </h3>
          <p className="text-gray-600 dark:text-neutral-400 mb-8 text-lg max-w-2xl mx-auto">
            We're always looking for exceptional talent. Send us your resume and let us know how you can contribute to our team.
          </p>
          <Button className="border-2 border-gray-900 dark:border-white bg-gray-900 dark:bg-white text-white dark:text-black hover:bg-transparent hover:text-gray-900 dark:hover:bg-transparent dark:hover:text-white transition-all duration-300 rounded-none px-8 py-4 text-lg font-medium">
            Submit Your Application
          </Button>
        </div>
      </section>
      
      <Footer />
    </main>
  )
}
