import { cn } from "@/lib/utils"
import Image from "next/image"

interface FatooraXLogoProps {
  className?: string
  width?: number
  height?: number
  src?: string
}

export function FatooraXLogo({ className, width, height, src = "/fatoorax.svg" }: FatooraXLogoProps) {
  return (
    <div className={cn("", className)}>
      <Image
        src={src}
        alt="FatooraX Logo"
        width={width || 150}
        height={height || 40}
        className="w-auto h-auto"
        priority
      />
    </div>
  )
}
