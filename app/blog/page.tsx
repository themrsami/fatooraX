import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* Header with modular component */}
      <Header />{/* Coming Soon Section */}
      <div className="container mx-auto px-4 py-32 flex flex-col items-center justify-center text-center">        <div className="max-w-3xl mx-auto space-y-8">
          <div className="mb-10">
            <div className="h-1 w-24 bg-black mx-auto mb-6"></div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-black">
            Blog Coming Soon
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
            We're currently working on creating valuable content for our blog. Stay tuned for insightful articles, industry updates, and e-invoicing best practices.
          </p>

          <div className="pt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-black hover:bg-gray-800 text-white border-none transition-colors">
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Return to Home
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}