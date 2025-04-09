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
        "group relative bg-white dark:bg-zinc-900/30 backdrop-blur-sm border border-gray-200 dark:border-zinc-800 rounded-xl p-6 transition-all duration-200 shadow-sm",
        "hover:bg-zinc-100/50 hover:border-blue-200 dark:hover:bg-zinc-800/30 dark:hover:border-zinc-700",
        className,
      )}
    >
      <div className="mb-4 p-2.5 bg-zinc-100 dark:bg-zinc-800 rounded-lg inline-block text-black dark:text-zinc-400 group-hover:text-black dark:group-hover:text-white transition-colors">
        {getIcon(icon)}
      </div>
      <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">{title}</h3>
      <p className="text-gray-600 dark:text-zinc-400 mb-6 text-sm">{description}</p>
      <Link
        href="#"
        className="inline-flex items-center text-sm text-black hover:text-black dark:text-zinc-400 dark:hover:text-white transition-colors dark:group-hover:text-zinc-300"
      >
        <span className="mr-2">Read More</span>
        <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
      </Link>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-100/0 to-blue-100/30 dark:from-white/0 dark:to-white/[0.03] opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300"></div>
    </div>
  )
}
