"use client"

import React from "react"
import Link from "next/link"
import { motion } from "motion/react"
import { Linkedin, Github, Mail, MessageCircle, ArrowUpRight, Globe, Zap, Shield, Cpu } from "lucide-react"

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  const links = {
    company: [
      { name: "About", href: "/about" },
      { name: "Work", href: "/work" },
      { name: "Process", href: "/process" },
      { name: "Contact", href: "/contact" },
    ],
    services: [
      { name: "Mobile Development", href: "/services/mobile-app-development" },
      { name: "Web Engineering", href: "/services/nextjs-development" },
      { name: "Backend Systems", href: "/services/backend-development" },
      { name: "AI Automation", href: "/services/ai-development" },
    ],
    social: [
      { name: "LinkedIn", href: "#", icon: <Linkedin size={16} /> },
      { name: "GitHub", href: "#", icon: <Github size={16} /> },
      { name: "WhatsApp", href: "https://wa.me/919274466461", icon: <MessageCircle size={16} /> },
    ]
  }

  return (
    <footer className="relative bg-[#050505] pt-24 pb-12 px-6 overflow-hidden border-t border-white/5">
      {/* Cinematic Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full opacity-50" />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-purple-600/10 blur-[120px] rounded-full opacity-30" />
        
        {/* Large Brand Background Text */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 select-none pointer-events-none opacity-[0.02] text-[20vw] font-black tracking-tighter leading-none whitespace-nowrap">
          NEZMUZ
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-12 mb-24">
          
          {/* Brand Column */}
          <div className="space-y-8">
            <Link href="/" className="group inline-flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-black font-black text-xl group-hover:scale-110 transition-transform duration-500">N</div>
              <span className="text-xl font-bold tracking-tighter uppercase text-white">Nezmuz</span>
            </Link>
            <p className="text-zinc-500 font-medium text-sm leading-relaxed max-w-xs">
              A premium engineering collective dedicated to crafting high-performance digital ecosystems for global visionary founders.
            </p>
            <div className="flex gap-3">
              {links.social.map(s => (
                <motion.a 
                  key={s.name} 
                  href={s.href} 
                  whileHover={{ y: -3 }}
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:border-white/20 hover:bg-white/10 transition-all duration-300"
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div className="space-y-8">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/40">Company</h4>
            <ul className="space-y-4">
              {links.company.map(l => (
                <li key={l.name}>
                  <Link href={l.href} className="text-zinc-500 text-sm font-medium hover:text-white transition-all duration-300 flex items-center gap-2 group">
                    <span className="w-0 h-px bg-white group-hover:w-3 transition-all duration-300" />
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div className="space-y-8">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/40">Expertise</h4>
            <ul className="space-y-4">
              {links.services.map(l => (
                <li key={l.name}>
                  <Link href={l.href} className="text-zinc-500 text-sm font-medium hover:text-white transition-all duration-300 flex items-center gap-2 group">
                    <span className="w-0 h-px bg-white group-hover:w-3 transition-all duration-300" />
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Column */}
          <div className="space-y-8">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/40">Global Status</h4>
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-2 h-2 rounded-full bg-emerald-500" />
                  <div className="absolute inset-0 w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                </div>
                <span className="text-xs font-bold text-zinc-400">Available for new projects</span>
              </div>
              <p className="text-zinc-500 text-sm font-medium">Ready to transform your vision into a world-class product?</p>
              <Link 
                href="/contact" 
                className="group inline-flex items-center gap-3 px-6 py-3 bg-white text-black text-xs font-black uppercase tracking-widest rounded-xl hover:scale-105 active:scale-95 transition-all duration-500"
              >
                Start Journey <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-6">
             <p className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest">
               © {currentYear} Nezmuz Engineering.
             </p>
             <div className="flex gap-4">
               <Link href="#" className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest hover:text-zinc-400 transition-colors">Privacy</Link>
               <Link href="#" className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest hover:text-zinc-400 transition-colors">Terms</Link>
             </div>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-[10px] font-bold text-zinc-600 uppercase tracking-widest">
               <Globe size={12} /> <span>Global HQ: India</span>
            </div>
            <div className="flex items-center gap-2 text-[10px] font-bold text-zinc-600 uppercase tracking-widest">
               <Zap size={12} /> <span>High Performance</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
