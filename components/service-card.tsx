import {
  Database,
  Settings,
  Building,
  Users,
  FileText,
  BookOpen,
  TrendingUp,
  ArrowRight,
  type LucideIcon,
} from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"

interface ServiceCardProps {
  title: string
  description: string
  icon: string
  className?: string
}

export function ServiceCard({ title, description, icon, className }: ServiceCardProps) {
  const getIcon = (iconName: string) => {
    const icons: Record<string, LucideIcon> = {
      Database,
      Settings,
      Building,
      Users,
      FileText,
      BookOpen,
      TrendingUp,
    }

    const Icon = icons[iconName] || Database
    return <Icon className="h-5 w-5" />
  }

  return (
    <div
      className={cn(
        "group relative bg-zinc-900/30 backdrop-blur-sm border border-zinc-800 rounded-xl p-6 transition-all duration-200",
        "hover:bg-zinc-800/30 hover:border-zinc-700",
        className,
      )}
    >
      <div className="mb-4 p-2.5 bg-zinc-800 rounded-lg inline-block text-zinc-400 group-hover:text-white transition-colors">
        {getIcon(icon)}
      </div>
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-zinc-400 mb-6 text-sm">{description}</p>
      <Link
        href="#"
        className="inline-flex items-center text-sm text-zinc-400 hover:text-white transition-colors group-hover:text-zinc-300"
      >
        <span className="mr-2">Read More</span>
        <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
      </Link>
      <div className="absolute inset-0 bg-gradient-to-r from-white/0 to-white/[0.03] opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300"></div>
    </div>
  )
}
