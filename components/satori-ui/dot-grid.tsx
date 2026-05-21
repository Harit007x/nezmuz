"use client"

import React from "react"
import { cn } from "@/lib/utils"

interface DotGridProps {
  children?: React.ReactNode
  className?: string
}

export default function DotGrid({ children, className }: DotGridProps) {
  return (
    <div
      className={cn(
        "relative min-h-screen w-full bg-[#030303] text-zinc-200 overflow-hidden",
        className
      )}
    >
      {/* Dot Grid Layer */}
      <div
        className="absolute inset-0 pointer-events-none z-0 opacity-50"
        style={{
          backgroundImage: "radial-gradient(rgba(255, 255, 255, 0.15) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* Layered White Glowing Lights (Radial Glows) */}
      {/* Deep Center Glow */}
      <div
        className="pointer-events-none absolute top-[-250px] left-1/2 h-[600px] w-[1200px] -translate-x-1/2 rounded-full blur-[130px] z-0"
        style={{
          background: "radial-gradient(circle, rgba(255, 255, 255, 0.22) 0%, rgba(255, 255, 255, 0.05) 50%, rgba(0, 0, 0, 0) 80%)",
        }}
      />

      {/* Broad Ambient Glow */}
      <div
        className="pointer-events-none absolute top-[100px] left-1/2 h-[800px] w-[1400px] -translate-x-1/2 rounded-full blur-[150px] z-0"
        style={{
          background: "radial-gradient(circle, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.02) 60%, rgba(0, 0, 0, 0) 80%)",
        }}
      />

      {/* Content wrapper */}
      <div className="relative z-10 w-full h-full flex flex-col min-h-screen">
        {children}
      </div>
    </div>
  )
}
