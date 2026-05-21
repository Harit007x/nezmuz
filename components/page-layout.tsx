"use client"
import React from "react"
import KineticGrid from "@/components/satori-ui/kinetic-grid"
import { SiteHeader } from "./site-header"
import { SiteFooter } from "./site-footer"

export function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <KineticGrid
      globalColor="monochrome"
      className="relative flex min-h-screen flex-col overflow-x-hidden text-zinc-200 selection:bg-zinc-800 selection:text-zinc-100"
    >
      {/* Background Glow */}
      <div
        className="pointer-events-none absolute top-0 left-1/2 h-[500px] w-[1000px] -translate-x-1/2 opacity-20"
        style={{
          background:
            "radial-gradient(circle, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0) 70%)",
        }}
      ></div>
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </KineticGrid>
  )
}
