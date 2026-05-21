"use client"
import React from "react"
import DotGrid from "@/components/satori-ui/dot-grid"
import { SiteHeader } from "./site-header"
import { SiteFooter } from "./site-footer"

export function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <DotGrid className="relative flex min-h-screen flex-col overflow-x-hidden text-zinc-200 selection:bg-zinc-800 selection:text-zinc-100">
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </DotGrid>
  )
}
