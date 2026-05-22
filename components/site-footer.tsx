import React from "react"
import Link from "next/link"
import { Globe, Zap, Linkedin, Github, Mail, ArrowRight } from "lucide-react"
import EncodedReveal from "./satori-ui/encoded-reveal"
import Image from "next/image"

export function SiteFooter() {
  return (
    <footer className="border-t border-zinc-900 bg-zinc-950 px-6 py-20 relative overflow-hidden">
      {/* Large BG Text */}
      <div className="absolute inset-x-0 bottom-0 flex justify-center pointer-events-none opacity-20">
         <h1 className="text-[15vw] font-bold leading-none tracking-tighter text-zinc-800 select-none">ZYNETZ</h1>
      </div>
      
      <div className="relative z-10 mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
        <div className="col-span-1 lg:col-span-1">
          <div className="flex items-center gap-2 font-semibold tracking-tighter text-zinc-100 uppercase mb-6 cursor-pointer">
            <Image src="/white_whole.png" alt="Zynetz Logo" width={24} height={24} className="object-contain rounded-sm" />
            <EncodedReveal onHover className="text-lg font-bold tracking-tight">ZYNETZ</EncodedReveal>
          </div>
          <p className="text-xs leading-relaxed text-zinc-400 mb-8 max-w-xs">
            A premium engineering collective dedicated to crafting high-performance digital ecosystems for global visionary founders.
          </p>
          <div className="flex gap-3 text-zinc-400">
            <a href="#" className="flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900/50 transition-colors hover:text-zinc-100 hover:bg-zinc-800"><Linkedin size={16} /></a>
            <a href="#" className="flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900/50 transition-colors hover:text-zinc-100 hover:bg-zinc-800"><Github size={16} /></a>
            <a href="#" className="flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900/50 transition-colors hover:text-zinc-100 hover:bg-zinc-800"><Mail size={16} /></a>
          </div>
        </div>
        
        <div>
          <h4 className="text-[10px] font-bold tracking-widest text-zinc-500 uppercase mb-6">COMPANY</h4>
          <nav className="flex flex-col gap-4 text-sm font-medium text-zinc-300">
            <Link href="/about" className="transition-colors hover:text-zinc-100">About</Link>
            <Link href="/work" className="transition-colors hover:text-zinc-100">Work</Link>
            <Link href="/process" className="transition-colors hover:text-zinc-100">Process</Link>
            <Link href="/contact" className="transition-colors hover:text-zinc-100">Contact</Link>
          </nav>
        </div>

        <div>
          <h4 className="text-[10px] font-bold tracking-widest text-zinc-500 uppercase mb-6">EXPERTISE</h4>
          <nav className="flex flex-col gap-4 text-sm font-medium text-zinc-300">
            <Link href="/services" className="transition-colors hover:text-zinc-100">Mobile Development</Link>
            <Link href="/services" className="transition-colors hover:text-zinc-100">Web Engineering</Link>
            <Link href="/services" className="transition-colors hover:text-zinc-100">Backend Systems</Link>
            <Link href="/services" className="transition-colors hover:text-zinc-100">AI Automation</Link>
          </nav>
        </div>
        
        <div>
          <h4 className="text-[10px] font-bold tracking-widest text-zinc-500 uppercase mb-6">GLOBAL STATUS</h4>
          <div className="flex items-center gap-2 text-xs font-medium text-zinc-300 mb-4">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
            </span>
            Available for new projects
          </div>
          <p className="text-xs leading-relaxed text-zinc-400 mb-6">
            Ready to transform your vision into a world-class product?
          </p>
          <Link href="/contact" className="rounded-full bg-zinc-100 px-6 py-2.5 text-xs font-semibold text-zinc-950 transition-all hover:bg-zinc-200 inline-flex items-center gap-2">
            START JOURNEY <ArrowRight size={12} />
          </Link>
        </div>
      </div>
      
      <div className="relative z-10 mx-auto max-w-6xl flex flex-col md:flex-row justify-between items-center gap-4 border-t border-zinc-900 pt-8 text-[10px] font-medium tracking-widest text-zinc-500 uppercase">
        <div className="flex gap-6">
          <span>© 2026 Zynetz Technologies.</span>
          <a href="#" className="hover:text-zinc-300">PRIVACY</a>
          <a href="#" className="hover:text-zinc-300">TERMS</a>
        </div>
        <div className="flex gap-6">
          <span className="flex items-center gap-1"><Globe size={12}/> GLOBAL HQ: INDIA</span>
          <span className="flex items-center gap-1"><Zap size={12}/> HIGH PERFORMANCE</span>
        </div>
      </div>
    </footer>
  )
}
