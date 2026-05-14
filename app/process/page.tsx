"use client"

import React from "react"
import { motion } from "motion/react"
import { Search, Compass, Palette, Code2, ShieldCheck, Rocket, TrendingUp, MessageCircle, Heart, Zap, Shield } from "lucide-react"
import KineticGrid from "@/components/satori-ui/kinetic-grid"
import { cn } from "@/lib/utils"
import Link from "next/link"
import SlideUpReveal from "@/components/satori-ui/slide-up-reveal"

const ProcessPage: React.FC = () => {
  const steps = [
    {
      title: "Active Listening",
      desc: "We begin by understanding your world. This is about more than just requirements; it's about aligning with your vision, culture, and long-term goals.",
      icon: <MessageCircle className="w-6 h-6" />,
      color: "text-blue-500",
      bg: "bg-blue-500/10"
    },
    {
      title: "Strategic Roadmap",
      desc: "Together, we define the path forward. We architect a technical strategy that balances immediate impact with future-proof scalability.",
      icon: <Compass className="w-6 h-6" />,
      color: "text-emerald-500",
      bg: "bg-emerald-500/10"
    },
    {
      title: "Crafting the Experience",
      desc: "Design is where your vision takes shape. We build intuitive, cinematic interfaces that feel natural and delight your users at every touchpoint.",
      icon: <Heart className="w-6 h-6" />,
      color: "text-purple-500",
      bg: "bg-purple-500/10"
    },
    {
      title: "Precision Engineering",
      desc: "Our developers bring the design to life with clean, high-performance code. We build with the latest stacks to ensure your product is fast and reliable.",
      icon: <Zap className="w-6 h-6" />,
      color: "text-orange-500",
      bg: "bg-orange-500/10"
    },
    {
      title: "Guaranteed Quality",
      desc: "We don't just test; we break and rebuild. Our rigorous QA process ensures that your product is secure, stable, and ready for the real world.",
      icon: <Shield className="w-6 h-6" />,
      color: "text-red-500",
      bg: "bg-red-500/10"
    },
    {
      title: "The Big Launch",
      desc: "Moving from development to production is a celebration. We handle the technical heavy lifting across app stores and cloud environments.",
      icon: <Rocket className="w-6 h-6" />,
      color: "text-cyan-500",
      bg: "bg-cyan-500/10"
    },
    {
      title: "Growing Together",
      desc: "Launch is just the beginning. we stay by your side to monitor, optimize, and scale your product as your business evolves.",
      icon: <TrendingUp className="w-6 h-6" />,
      color: "text-zinc-400",
      bg: "bg-zinc-400/10"
    }
  ]

  return (
    <KineticGrid globalColor="monochrome" className="min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-20">
          <motion.span 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-[10px] font-bold uppercase tracking-[0.4em] text-emerald-500 block mb-4"
          >
            How We Partner
          </motion.span>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1] mb-6">
            A Partnership <br /> <span className="text-zinc-600">Built on Trust.</span>
          </h1>
          <p className="text-base md:text-lg text-zinc-400 font-medium leading-relaxed max-w-2xl">
            Building great software is a journey. We've refined our process to be collaborative, transparent, and focused on delivering real human value.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2 hidden md:block" />

          <div className="space-y-12">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.05 }}
                className={cn(
                  "relative flex flex-col md:flex-row items-start md:items-center gap-8",
                  idx % 2 === 1 ? "md:flex-row-reverse" : ""
                )}
              >
                {/* Connector Point */}
                <div className="absolute left-8 lg:left-1/2 top-1/2 w-3 h-3 rounded-full bg-white border-4 border-black -translate-x-1/2 -translate-y-1/2 z-10 hidden md:block" />

                <div className="flex-1 w-full">
                  <div className={cn(
                    "p-8 md:p-10 rounded-[2.5rem] border border-white/5 bg-zinc-900/10 backdrop-blur-3xl group hover:border-white/20 transition-all duration-500",
                    idx % 2 === 1 ? "lg:text-right" : "lg:text-left"
                  )}>
                    <div className={cn(
                      "w-12 h-12 rounded-xl flex items-center justify-center mb-6",
                      step.bg, step.color,
                      idx % 2 === 1 ? "lg:ml-auto" : "lg:mr-auto"
                    )}>
                      {step.icon}
                    </div>
                    <span className="text-4xl font-bold text-white/5 block mb-2">{idx + 1}</span>
                    <h3 className="text-2xl font-bold tracking-tight mb-3 text-white">{step.title}</h3>
                    <p className="text-sm md:text-base text-zinc-400 font-medium leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <section className="mt-32 text-center">
           <p className="text-sm text-zinc-500 font-medium mb-8 uppercase tracking-widest">Ready to start the journey?</p>
           <Link href="/contact" className="px-10 py-4 bg-white text-black text-sm font-bold rounded-full hover:scale-105 active:scale-95 transition-all inline-block">
             Let's Connect
           </Link>
        </section>
      </div>
    </KineticGrid>
  )
}

export default ProcessPage
