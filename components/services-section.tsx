"use client"

import { ServiceCard } from "@/components/service-card"
import { Badge } from "@/components/ui/badge"

// Detailed descriptions for each service
const serviceDetails = {
  bookkeeping: "Our professional bookkeeping and accounting services ensure your financial records are accurate, up-to-date, and compliant with standards. We handle monthly and annual financial statement preparation. We manage accounts receivable and payable efficiently. We provide comprehensive reconciliation and closing services. We deliver IFRS-compliant reporting for regulatory compliance. We offer cloud-based and ERP-linked bookkeeping solutions for real-time financial insights.",
  
  audit: "Our internal and external audit services ensure compliance and identify improvement opportunities. We conduct statutory audits to meet regulatory requirements. We perform risk-based internal audits to strengthen controls. We provide comprehensive compliance audits for regulatory adherence. We deliver detailed internal control reviews to mitigate risks. We assist with audit readiness preparation to ensure successful outcomes.",
  
  odoo: "Our expert team provides full-cycle Odoo ERP deployment and customization tailored to your business needs. We design optimized workflows and configure modules for maximum efficiency. We ensure seamless data migration and integration with existing systems. We provide comprehensive user training and change management support. We offer ongoing post-implementation support to maximize your ERP investment.",
  
  tax: "Our tax advisory and compliance services help you navigate complex regulations efficiently. We assist with VAT registration and filing requirements. We handle corporate tax registration and filing to ensure compliance. We provide strategic transfer pricing advisory to optimize cross-border operations. We ensure comprehensive GCC compliance across multiple jurisdictions. We support you through tax audits with expert representation.",
  
  wealth: "Our wealth management advisory services help protect and grow your assets strategically. We develop custom asset protection strategies to safeguard your wealth. We optimize your portfolio structure for better performance. We provide comprehensive succession planning for seamless wealth transfer. We offer private investment advisory for high-net-worth individuals. We address multi-jurisdictional considerations for global wealth management.",
  
  valuation: "Our business valuation and transaction advisory services provide expert insights for strategic decisions. We deliver independent business valuations based on industry standards. We provide comprehensive M&A support and due diligence. We prepare valuations for financing or investment purposes. We create detailed financial modeling and scenario analysis. We help you understand the full financial implications of major business decisions.",
  
  business: "Our business formation and structuring services guide you through establishing and optimizing your company. We facilitate company setup across multiple jurisdictions. We provide strategic holding structure advisory for tax efficiency. We help design robust corporate governance frameworks. We offer comprehensive regulatory and licensing guidance to ensure compliance across regions.",
  
  recruitment: "Our specialized accounting recruitment consultancy helps you build high-performing finance teams. We provide executive search and placement services for leadership roles. We assist with strategic finance team structuring and development. We offer valuable talent market insights to stay competitive. We provide contract and interim staffing solutions for flexibility. We conduct thorough skills assessment and profiling to ensure perfect candidate matches."
};

export function ServicesSection() {  
  return (
    <section id="services" className="py-24 bg-white dark:bg-neutral-950 pt-24">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">Premium Services</h2>
          <p className="text-gray-600 dark:text-neutral-400 max-w-2xl text-sm md:text-base">
            Comprehensive financial and operational solutions tailored to elevate your business performance.
          </p>
        </div>        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <ServiceCard
            title="Bookkeeping & Accounting"
            description="Monthly and annual financial statement preparation with IFRS-compliant reporting"
            detailedDescription={serviceDetails.bookkeeping}
            icon="BookOpen"
          />
          <ServiceCard
            title="Internal & External Audit"
            description="Statutory audits, risk-based internal audits, and compliance reviews"
            detailedDescription={serviceDetails.audit}
            icon="FileText"
          />
          <ServiceCard
            title="Odoo ERP Implementation"
            description="Full-cycle Odoo deployment, workflow design, and post-implementation support"
            detailedDescription={serviceDetails.odoo}
            icon="Database"
          />
          <ServiceCard
            title="Tax Advisory & Compliance"
            description="VAT and Corporate Tax registration, GCC compliance, and tax audit support"
            detailedDescription={serviceDetails.tax}
            icon="FileText"
          />
          <ServiceCard
            title="Wealth Management Advisory"
            description="Asset protection, portfolio optimization, and succession planning"
            detailedDescription={serviceDetails.wealth}
            icon="TrendingUp"
          />
          <ServiceCard
            title="Business Valuation & Advisory"
            description="Independent valuations, M&A support, and financial modeling services"
            detailedDescription={serviceDetails.valuation}
            icon="Settings"
          />
          <ServiceCard
            title="Business Formation & Structuring"
            description="Cross-jurisdictional company setup and corporate governance design"
            detailedDescription={serviceDetails.business}
            icon="Building"
          />
          <ServiceCard
            title="Talent Advisory"
            description="Executive search, team structuring, and talent market insights"
            detailedDescription={serviceDetails.recruitment}
            icon="Users"
          />
        </div>

        {/* What Sets Us Apart Section */}
        <div className="mt-24 bg-gradient-to-r from-neutral-100 to-neutral-50 dark:from-neutral-900 dark:to-neutral-950 p-10 rounded-lg">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center text-gray-900 dark:text-white">
              What Sets Us Apart
            </h3>
            
            <div className="prose prose-lg dark:prose-invert max-w-none mb-8">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-center">
                At Fatoora X, we don't just provide services—we solve critical business problems. Our advisors blend strategic insight with practical implementation, ensuring our clients benefit from both vision and execution. We focus on tangible impact, long-term partnerships, and the highest standards of integrity.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
              <div className="bg-white dark:bg-neutral-900 p-6 rounded-md shadow-sm">
                <h4 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Our Expert Team</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span> 
                    <span className="text-gray-700 dark:text-gray-300">Multidisciplinary team of CPAs, auditors, ERP consultants, and tax experts</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span> 
                    <span className="text-gray-700 dark:text-gray-300">Proven experience across startups, SMEs, and large organizations</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white dark:bg-neutral-900 p-6 rounded-md shadow-sm">
                <h4 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Our Approach</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span> 
                    <span className="text-gray-700 dark:text-gray-300">Industry-agnostic solutions tailored to local and international standards</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span> 
                    <span className="text-gray-700 dark:text-gray-300">A deep understanding of regional regulations and best industry practices</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Sectors We Serve Section */}
        <div className="mt-24">
          <div className="text-center mb-16">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
              Navigating Complex Environments Across Sectors
            </h3>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-12">
            { [
              "Professional Services",
              "E-commerce & Retail",
              "Healthcare & Pharmaceuticals",
              "Real Estate & Construction",
              "Manufacturing & Logistics",
              "Family Offices & HNWIs",
              "Government Vendors & NGOs"
            ].map((industry) => (
              <div key={industry} className="bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 p-5 text-center rounded-md transition-all hover:border-blue-300 dark:hover:border-blue-800 hover:shadow-md">
                <p className="text-gray-900 dark:text-gray-200 font-medium">{industry}</p>
              </div>
            ))}
          </div>
          
          <div className="bg-gray-50 dark:bg-gray-100 p-8 rounded-lg">
            <h4 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Tailored Approach</h4>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Each industry has its own financial rhythm. We tailor our solutions to reflect your sector's regulatory requirements, operational models, and long-term goals.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}