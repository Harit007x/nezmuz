import React from "react"
import Link from "next/link"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/[0.08] border-zinc-700/50 bg-zinc-950/60 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2 font-semibold tracking-tighter text-zinc-100 uppercase">
          <div className="flex h-6 w-6 items-center justify-center rounded bg-white text-black font-bold text-xs">N</div>
          ZYNETZ
        </Link>
        <nav className="hidden items-center gap-8 text-xs font-medium uppercase tracking-widest text-zinc-400 md:flex">
          <Link href="/services" className="transition-colors hover:text-zinc-100">
            Services
          </Link>
          <Link href="/work" className="transition-colors hover:text-zinc-100">
            Work
          </Link>
          <Link href="/process" className="transition-colors hover:text-zinc-100">
            Process
          </Link>
          <Link href="/about" className="transition-colors hover:text-zinc-100">
            About
          </Link>
          <Link href="/contact" className="transition-colors hover:text-zinc-100">
            Contact
          </Link>
        </nav>
        <Link
          href="/contact"
          className="rounded-full border border-white/[0.08] bg-zinc-900 px-4 py-1.5 text-xs font-medium text-zinc-100 transition-colors hover:bg-zinc-800"
        >
          Book a Call
        </Link>
      </div>
    </header>
  )
}
