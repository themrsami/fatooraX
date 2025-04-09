"use client"

import { ServiceCard } from "@/components/service-card"
import { Badge } from "@/components/ui/badge"

// Detailed descriptions for each service
const serviceDetails = {
  odoo: "Our expert team provides comprehensive Odoo ERP implementation services tailored to your business needs. We handle everything from initial assessment and configuration to training and ongoing support. Our solutions include modules for accounting, inventory, CRM, HR, e-commerce, manufacturing, and more. We ensure seamless integration with your existing systems to optimize your business processes.",
  
  process: "Our process optimization services help you identify bottlenecks and inefficiencies in your current business operations. We analyze your workflows, implement automation solutions, and redesign processes to increase productivity and reduce costs. Our methodologies include Lean, Six Sigma, and Agile principles to ensure continuous improvement and adaptability in your business operations.",
  
  company: "Navigate the complexities of company formation with our comprehensive services. We assist with business registration, license applications, legal documentation, and compliance requirements. Our team provides guidance on the most suitable business structure based on your goals and helps establish your company in the UAE and beyond. We handle all the paperwork and regulatory processes, allowing you to focus on your core business activities.",
  
  recruitment: "Our specialized accounting recruitment services help you identify and hire top financial talent. We understand the unique skills and qualifications required for accounting roles at all levels. Our rigorous screening process ensures candidates possess both the technical expertise and cultural fit your organization needs. We offer solutions for permanent placements, temporary positions, and project-based hiring to meet your staffing requirements.",
  
  tax: "Stay compliant and optimize your tax position with our comprehensive tax consultancy services. Our tax experts provide advice on VAT, corporate tax, international tax, and personal tax matters. We help you navigate complex tax regulations, prepare and file tax returns, represent you during tax audits, and develop tax planning strategies to minimize your tax burden while maintaining full compliance with local and international tax laws.",
  
  bookkeeping: "Our professional bookkeeping services ensure your financial records are accurate, up-to-date, and compliant with accounting standards. We handle daily transactions, bank reconciliations, accounts payable and receivable, general ledger maintenance, and financial reporting. Our team uses modern accounting software to streamline the process and provide you with real-time insights into your financial position. Regular financial reports help you make informed business decisions.",
  
  wealth: "Our wealth management services help you grow and protect your assets through personalized financial planning and investment strategies. We provide comprehensive advice on investment portfolio management, retirement planning, estate planning, risk management, and tax-efficient wealth structuring. Our advisors work closely with you to understand your financial goals and develop strategies that align with your risk tolerance and time horizon."
};

export function ServicesSection() {  
  return (
    <section id="services" className="py-24 bg-gray-100 dark:bg-neutral-950 pt-24">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <Badge className="bg-zinc-100 text-black hover:bg-zinc-100 dark:bg-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-800 px-3 py-1 text-xs rounded-full mb-4 border border-blue-200 dark:border-neutral-800">
            Our Expertise
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">Premium Services</h2>
          <p className="text-gray-600 dark:text-neutral-400 max-w-2xl text-sm md:text-base">
            Comprehensive financial and operational solutions tailored to elevate your business performance.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <ServiceCard
            title="Odoo Implementation"
            description="End-to-end Odoo ERP implementation services for businesses seeking operational excellence"
            detailedDescription={serviceDetails.odoo}
            icon="Database"
          />
          <ServiceCard
            title="Process Optimization"
            description="Streamline your business operations for maximum efficiency and reduced overhead costs"
            detailedDescription={serviceDetails.process}
            icon="Settings"
          />
          <ServiceCard
            title="Company Formation"
            description="Complete assistance with business setup, registration, and compliance requirements"
            detailedDescription={serviceDetails.company}
            icon="Building"
          />
          <ServiceCard
            title="Accounting Recruitment"
            description="Find the right financial talent for your organization with our specialized recruitment services"
            detailedDescription={serviceDetails.recruitment}
            icon="Users"
          />
          <ServiceCard
            title="Tax Consultancy"
            description="Expert guidance on tax compliance, planning, and optimization strategies for your business"
            detailedDescription={serviceDetails.tax}
            icon="FileText"
          />
          <ServiceCard
            title="Bookkeeping Services"
            description="Accurate and timely financial record-keeping with advanced reporting capabilities"
            detailedDescription={serviceDetails.bookkeeping}
            icon="BookOpen"
          />
          <ServiceCard
            className="lg:col-start-2 self-start lg:row-start-1"
            title="Wealth Management"
            description="Comprehensive financial planning and investment advice for sustainable growth"
            detailedDescription={serviceDetails.wealth}
            icon="TrendingUp"
          />
        </div>
      </div>
    </section>
  )
}