"use client"

import React from "react"
import { motion } from "motion/react"
import { Smartphone, Globe, Layers, Database, Shield, Cpu, Zap, ArrowRight, TrendingUp, Lock, Zap as ZapIcon } from "lucide-react"
import KineticGrid from "@/components/satori-ui/kinetic-grid"
import Link from "next/link"
import { cn } from "@/lib/utils"

const WorkPage: React.FC = () => {
  const focusAreas = [
    {
      title: "FinTech & Secure Payments",
      desc: "We engineer financial platforms that prioritize absolute data integrity. From low-latency gateways to complex management systems, we build with security at the core.",
      icon: <Lock size={32} className="text-zinc-500" />,
      tags: ["Security", "Scalability", "Reliability"]
    },
    {
      title: "Enterprise SaaS Ecosystems",
      desc: "Our cloud-native platforms are built to grow with your business. We focus on multi-tenant architectures that streamline operations and enhance productivity.",
      icon: <Layers size={32} className="text-zinc-500" />,
      tags: ["Cloud-Native", "Next.js", "Multi-tenant"]
    },
    {
      title: "Intelligent AI Integration",
      desc: "We don't just add AI; we integrate intelligence. By leveraging custom agents and LLMs, we automate complex decision-making and unlock new product capabilities.",
      icon: <Cpu size={32} className="text-zinc-500" />,
      tags: ["OpenAI", "Automation", "Intelligence"]
    },
    {
      title: "Fluid Mobile Experiences",
      desc: "We build mobile apps that people love to use. High-fidelity, performant, and perfectly animated, we ensure your brand feels premium on every device.",
      icon: <Smartphone size={32} className="text-zinc-500" />,
      tags: ["Flutter", "Native-Feel", "UX-First"]
    }
  ]

  return (
    <KineticGrid globalColor="monochrome" className="min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-20">
          <motion.span 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-[10px] font-bold uppercase tracking-[0.4em] text-purple-500 block mb-4"
          >
            Our Expertise
          </motion.span>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1] mb-6">
            Technical <br /> <span className="text-zinc-600">Focus Areas.</span>
          </h1>
          <p className="text-base md:text-lg text-zinc-400 font-medium leading-relaxed max-w-2xl">
            We specialize in engineering complex digital products that require high performance, security, and scalability. Every project is a commitment to technical excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {focusAreas.map((area, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="group p-10 rounded-[2.5rem] border border-white/5 bg-zinc-900/10 backdrop-blur-3xl hover:border-white/20 transition-all"
            >
              <div className="mb-8 w-16 h-16 rounded-2xl bg-black border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                {area.icon}
              </div>
              <h2 className="text-2xl font-bold tracking-tight mb-4 text-white">{area.title}</h2>
              <p className="text-sm md:text-base text-zinc-400 font-medium leading-relaxed mb-6">
                {area.desc}
              </p>
              <div className="flex flex-wrap gap-2">
                {area.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold uppercase tracking-widest text-zinc-500">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-32 text-center">
           <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-500 mb-8">Engineering a vision?</p>
           <Link href="/contact" className="px-10 py-4 bg-white text-black text-sm font-bold rounded-full inline-flex items-center gap-2 hover:scale-105 transition-transform">
             Start a Conversation <ArrowRight size={16} />
           </Link>
        </div>
      </div>
    </KineticGrid>
  )
}

export default WorkPage
