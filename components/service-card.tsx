'use client'
import {
  Database,
  Settings,
  Building,
  Users,
  FileText,
  BookOpen,
  TrendingUp,
  ArrowRight,
  ChevronDown,
  type LucideIcon,
} from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { useState } from "react"

interface ServiceCardProps {
  title: string
  description: string
  detailedDescription?: string
  icon: string
  className?: string
}

export function ServiceCard({ 
  title, 
  description, 
  detailedDescription, 
  icon, 
  className 
}: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  
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

  // Format detailed description as bullet points if available
  const formatDetails = () => {
    if (!detailedDescription) return null;
    
    // Split by sentences or periods, clean up, and format as bullet points
    const points = detailedDescription
      .split(/\.\s+/)
      .filter(point => point.trim().length > 0)
      .map(point => point.trim() + (point.endsWith('.') ? '' : '.'));
    
    return (
      <ul className="mt-4 space-y-2 text-sm text-left">
        {points.map((point, index) => (
          <li key={index} className="flex items-start">
            <span className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-zinc-900 dark:bg-zinc-500 flex-shrink-0"></span>
            <span className="text-gray-600 dark:text-zinc-400">{point}</span>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div
      className={cn(
        "group relative bg-white dark:bg-zinc-900/30 backdrop-blur-sm border border-gray-200 dark:border-zinc-800 rounded-xl p-6 transition-all duration-300 shadow-sm overflow-hidden",
        "hover:bg-zinc-100/50 hover:border-zinc-900 dark:hover:bg-zinc-800/30 dark:hover:border-zinc-700",
        detailedDescription && "hover:shadow-md",
        className,
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        height: isHovered && detailedDescription ? 'auto' : 'auto',
        maxHeight: isHovered && detailedDescription ? '500px' : '240px',
        transition: 'max-height 0.5s ease-in-out'
      }}
    >
      <div className={`transition-all duration-[1200ms] ease-in-out ${isHovered ? 'items-start' : 'items-center'}`}>
        <div className={`flex items-center gap-3 transition-all duration-[1200ms] ease-in-out ${isHovered ? 'flex-row mb-4' : 'flex-col mb-6'}`}>
          <div className={`p-2.5 bg-zinc-100 dark:bg-zinc-800 rounded-lg text-black dark:text-zinc-400 group-hover:text-black dark:group-hover:text-white transition-all duration-[1200ms] ease-in-out`}>
            {getIcon(icon)}
          </div>
          <h3 className={`text-lg font-bold text-gray-900 dark:text-white transition-all duration-[1200ms] ease-in-out ${isHovered ? 'text-left' : 'text-center mt-2'}`}>{title}</h3>
        </div>
      </div>
      <p className={`text-gray-600 dark:text-zinc-400 mb-4 text-sm transition-all duration-500 ${isHovered ? 'text-left opacity-100' : 'text-center opacity-0 absolute'}`}>{description}</p>
      
      {detailedDescription && (
        <div className={`transition-all duration-500 ease-in-out overflow-hidden ${isHovered ? 'opacity-100 max-h-96' : 'opacity-0 max-h-0'}`}>
          <div className="h-px w-full bg-gray-200 dark:bg-zinc-700 my-4"></div>
          {formatDetails()}
        </div>
      )}
      
      <div className="mt-2">
        <Link
          href="#"
          className="inline-flex items-center text-sm text-black hover:text-black dark:text-zinc-400 dark:hover:text-white transition-colors dark:group-hover:text-zinc-300"
        >
          <span className="mr-2">Read More</span>
          <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
        </Link>
      </div>
      
      {detailedDescription && (
        <div 
          className={`absolute bottom-3 right-4 transition-all duration-300 ease-in-out transform ${isHovered ? 'rotate-180 opacity-100' : 'rotate-0 opacity-70'}`}
        >
          <ChevronDown className="h-4 w-4 text-gray-400 dark:text-zinc-500" />
        </div>
      )}
      
      <div className="absolute inset-0 bg-gradient-to-r from-blue-100/0 to-blue-100/30 dark:from-white/0 dark:to-white/[0.03] opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300"></div>
    </div>
  )
}