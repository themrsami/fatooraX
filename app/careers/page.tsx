"use client"

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ResumeSubmissionForm } from "@/components/resume-submission-form";
import { useState } from "react";

export default function CareersPage() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  // Updated job listings
  const jobListings = [
    {
      title: "Sales Executive – Client Acquisition",
      location: "Dubai, UAE",
      type: "Full-time",
      description: "Drive business growth by identifying new opportunities, building strong client relationships, and promoting our suite of financial and ERP services to prospective customers.",
      requirements: [
        "Proven track record in B2B sales or client acquisition",
        "3+ years of experience in selling bookkeeping, accounting, audit, or ERP implementation services",
        "Excellent communication and negotiation skills",
        "Ability to understand client needs and translate them into tailored solutions",
        "Self-motivated, target-driven, and results-oriented",
      ],
      applyLink: "#" // Placeholder link
    },
    {
      title: "Accountant",
      location: "Dubai, UAE",
      type: "Full-time",
      description: "Support our finance operations with accurate bookkeeping, timely reconciliations, and sound financial reporting aligned with local and international accounting standards.",
      requirements: [
        "Bachelor’s degree in Accounting or Finance",
        "3+ years of experience in accounting or audit",
        "Proficiency in accounting software (preferably Odoo or similar ERP)",
        "Strong understanding of IFRS and UAE VAT regulations",
        "Excellent attention to detail and organizational skills",
      ],
      applyLink: "#" // Placeholder link
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
      ],
      applyLink: "#" // Placeholder link
    }
  ];

  return (
    <main className="min-h-screen bg-white dark:bg-black">
      <Header />
        {/* Hero section */}
      <section className="pt-32 pb-16 bg-white dark:bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-100/30 to-white/0 dark:from-neutral-800/10 dark:to-black/0"></div>
        <div className="absolute inset-0 opacity-10 bg-grid-pattern dark:opacity-5"></div>
        
          <div className="relative max-w-4xl mx-auto text-center mb-16 px-4">
            <div className="absolute left-0 right-0 top-1/2 h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-neutral-700 to-transparent -z-10"></div>
            
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8 text-gray-900 dark:text-white leading-tight">
              Build Your Future <br />With Us
            </h1>
            <p className="text-gray-600 dark:text-neutral-400 text-base md:text-xl max-w-2xl mx-auto leading-relaxed">
              FatooraX is always looking for professionals who combine critical thinking with practical action. If you're ready to make an impact in a high-growth, high-integrity environment, we'd love to hear from you.
            </p>
          </div>
      </section>
      
      {/* Values section - Updated */}
      <section className="py-24 bg-gray-50 dark:bg-neutral-950 border-y border-gray-200 dark:border-neutral-900 relative">        <div className="absolute left-0 w-1/3 h-full bg-gradient-to-r from-gray-50/20 to-transparent dark:from-neutral-900/10 dark:to-transparent opacity-70"></div>
        <div className="absolute right-0 w-1/3 h-full bg-gradient-to-l from-gray-50/20 to-transparent dark:from-neutral-900/10 dark:to-transparent opacity-70"></div>
        
        <div className="container px-4 mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 dark:text-white relative inline-block">
              Build a Career That Matters
              <div className="absolute -bottom-3 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent"></div>
            </h2>
            <div className="bg-white/70 dark:bg-black/40 backdrop-blur-sm p-6 md:p-8 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm">
              <p className="text-gray-600 dark:text-neutral-400 text-lg leading-relaxed">
                At FatooraX, we don't just offer jobs — we offer the opportunity to shape industries, challenge conventions, and keep growing. Our culture is built on intellectual curiosity, shared purpose, and a commitment to excellence. We invest deeply in our people because we believe extraordinary outcomes begin with extraordinary individuals. Whether you're solving complex business problems, driving digital transformation, or advising tomorrow's leaders, your work here will make a difference.
              </p>
              <p className="text-gray-600 dark:text-neutral-400 text-lg leading-relaxed mt-4 italic font-medium">
                Join us — and redefine what's possible.
              </p>
            </div>
          </div>
        </div>      </section>
      
      {/* Current openings - Updated Rendering */}
      <section className="py-24 bg-gray-50 dark:bg-neutral-950 border-t border-gray-200 dark:border-neutral-900">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">Current Openings</h2>
            <p className="text-gray-600 dark:text-neutral-400">
              Explore our current opportunities and find where your expertise meets our vision.
            </p>
          </div>
          
          <div className="space-y-8 max-w-4xl mx-auto">
            {jobListings.map((job, index) => (              <div 
                key={index}
                className="bg-white dark:bg-black border border-gray-200 dark:border-neutral-800 p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row justify-between md:items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{job.title}</h3>
                    <div className="flex items-center">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 dark:bg-neutral-900 text-gray-800 dark:text-neutral-300">
                        {job.location}
                      </span>                      <span className="mx-2 text-gray-300 dark:text-neutral-700">•</span>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-50 dark:bg-neutral-900/50 text-gray-800 dark:text-gray-300">
                        {job.type}
                      </span>
                    </div>
                  </div>
                  <Button asChild variant="outline" className="mt-4 md:mt-0 w-full md:w-auto shrink-0 hover:bg-gray-100 dark:hover:bg-neutral-900">
                    <Link href={job.applyLink}>
                      Apply Now <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
                
                <p className="text-gray-600 dark:text-neutral-400 mb-6 border-l-4 border-gray-200 dark:border-neutral-800 pl-4 italic">{job.description}</p>
                
                <div className="bg-gray-50 dark:bg-neutral-950 p-5 rounded-lg">
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-700 dark:text-neutral-300 mb-3">Requirements</h4>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-neutral-400">
                    {job.requirements.map((req, reqIndex) => (
                      <li key={reqIndex} className="pl-2">{req}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
        {/* Application CTA with Resume Submission Form */}
      <section className="relative py-24 bg-white dark:bg-black text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-100/50 to-white/0 dark:from-neutral-800/20 dark:to-black/0"></div>
        
        <div className="container px-4 mx-auto relative z-10">
          <div className="max-w-2xl mx-auto">
            <div className="h-12 w-12 mx-auto mb-6 rounded-full bg-gray-100 dark:bg-neutral-900 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-gray-600 dark:text-neutral-400">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-white">Don't See the Right Fit?</h2>
            <p className="text-gray-600 dark:text-neutral-400 mb-8 max-w-xl mx-auto">
              We're always interested in connecting with talented individuals. Submit your resume, and we'll keep you in mind for future opportunities.
            </p>
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button size="lg" className="px-8 py-6 h-auto text-base font-medium bg-gray-900 hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-100">
                  Submit Your Resume
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md md:max-w-lg lg:max-w-xl bg-white dark:bg-black border-gray-200 dark:border-neutral-800 p-0">
                <DialogTitle className="sr-only">Submit Your Resume</DialogTitle>
                <ResumeSubmissionForm />
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  )
}
