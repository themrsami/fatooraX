import { cn } from "@/lib/utils"

interface ClientLogoProps {
  name: string
  className?: string
}

export function ClientLogo({ name, className }: ClientLogoProps) {
  return (
    <div className={cn("flex items-center justify-center", className)}>
      <div className="h-16 w-full bg-gray-50 dark:bg-zinc-900/50 backdrop-blur-sm border border-gray-200 dark:border-zinc-800 rounded-md flex items-center justify-center px-4 py-2 transition-all duration-200 hover:border-blue-300 dark:hover:border-zinc-700 shadow-sm">
        <div className="font-medium text-gray-800 dark:text-zinc-300 text-sm md:text-base tracking-tight">{name}</div>
      </div>
    </div>
  )
}
