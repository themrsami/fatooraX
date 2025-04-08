import { cn } from "@/lib/utils"
import Image from "next/image"

interface FatooraXLogoProps {
  className?: string
  width?: number
  height?: number
}

export function FatooraXLogo({ className, width, height }: FatooraXLogoProps) {
  return (
    <div className={cn("", className)}>
      <Image
        src="/fatoorax.svg"
        alt="FatooraX Logo"
        width={width || 150}
        height={height || 40}
        className="w-auto h-auto"
        priority
      />
    </div>
  )
}
