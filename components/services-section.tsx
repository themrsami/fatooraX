"use client"

import { ServiceCard } from "@/components/service-card"
import { Badge } from "@/components/ui/badge"

export function ServicesSection() {  return (
    <section id="services" className="py-24 bg-neutral-950 pt-24">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <Badge className="bg-neutral-800 text-neutral-300 hover:bg-neutral-800 px-3 py-1 text-xs rounded-full mb-4">
            Our Expertise
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Premium Services</h2>
          <p className="text-neutral-400 max-w-2xl text-sm md:text-base">
            Comprehensive financial and operational solutions tailored to elevate your business performance.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <ServiceCard
            title="Odoo Implementation"
            description="End-to-end Odoo ERP implementation services for businesses seeking operational excellence"
            icon="Database"
          />
          <ServiceCard
            title="Process Optimization"
            description="Streamline your business operations for maximum efficiency and reduced overhead costs"
            icon="Settings"
          />
          <ServiceCard
            title="Company Formation"
            description="Complete assistance with business setup, registration, and compliance requirements"
            icon="Building"
          />
          <ServiceCard
            title="Accounting Recruitment"
            description="Find the right financial talent for your organization with our specialized recruitment services"
            icon="Users"
          />
          <ServiceCard
            title="Tax Consultancy"
            description="Expert guidance on tax compliance, planning, and optimization strategies for your business"
            icon="FileText"
          />
          <ServiceCard
            title="Bookkeeping Services"
            description="Accurate and timely financial record-keeping with advanced reporting capabilities"
            icon="BookOpen"
          />
          <ServiceCard
            className="lg:col-start-2"
            title="Wealth Management"
            description="Comprehensive financial planning and investment advice for sustainable growth"
            icon="TrendingUp"
          />
        </div>
      </div>
    </section>
  )
}
