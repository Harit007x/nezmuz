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
        "relative min-h-screen w-full bg-[#030303] text-zinc-200",
        className
      )}
    >
      {/* Fixed Background Layer */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden transform-gpu">
        {/* Dot Grid Layer */}
        <div
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage: "radial-gradient(rgba(255, 255, 255, 0.15) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        {/* Layered White Glowing Lights (Radial Glows) */}
        {/* Deep Center Glow */}
        <div
          className="absolute top-[-250px] left-1/2 h-[600px] w-[1200px] -translate-x-1/2 opacity-60"
          style={{
            background: "radial-gradient(ellipse 50% 50% at 50% 50%, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.10) 35%, rgba(255, 255, 255, 0.02) 70%, transparent 100%)",
          }}
        />

        {/* Broad Ambient Glow */}
        <div
          className="absolute top-[100px] left-1/2 h-[800px] w-[1400px] -translate-x-1/2 opacity-60"
          style={{
            background: "radial-gradient(ellipse 50% 50% at 50% 50%, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.05) 40%, rgba(255, 255, 255, 0.01) 70%, transparent 100%)",
          }}
        />
      </div>

      {/* Content wrapper */}
      <div className="relative z-10 w-full h-full flex flex-col min-h-screen">
        {children}
      </div>
    </div>
  )
}
