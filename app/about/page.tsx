"use client"

import React from "react"
import { motion } from "motion/react"
import { Shield, Target, Award, Heart, Sparkles, Brain } from "lucide-react"
import KineticGrid from "@/components/satori-ui/kinetic-grid"
import { cn } from "@/lib/utils"

const AboutPage: React.FC = () => {
  return (
    <KineticGrid globalColor="monochrome" className="min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-20">
          <motion.span 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-[10px] font-bold uppercase tracking-[0.4em] text-blue-500 block mb-4"
          >
            Our Story
          </motion.span>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1] mb-6">
            Engineering <br /> <span className="text-zinc-600">Digital Mastery.</span>
          </h1>
          <p className="text-base md:text-lg text-zinc-400 font-medium leading-relaxed max-w-2xl">
            Nezmuz was born from a simple belief: that technology should be as human as it is powerful. We are a collection of engineers, designers, and thinkers dedicated to crafting exceptional digital ecosystems.
          </p>
        </div>

        {/* Mission Section */}
        <section className="relative p-10 md:p-16 rounded-[2.5rem] border border-white/5 bg-zinc-900/10 overflow-hidden mb-32">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.03)_0%,transparent_70%)]" />
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-2xl font-bold tracking-tight mb-6">Our Mission</h2>
              <p className="text-xl md:text-2xl font-bold text-white leading-tight">
                “To empower visionary founders by building high-performance products that solve real-world problems through superior engineering.”
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8">
              {[
                { label: "Engineering", value: "Modern", icon: <Brain size={20} className="text-blue-500" /> },
                { label: "Infrastructure", value: "Cloud Native", icon: <Shield size={20} className="text-emerald-500" /> },
                { label: "Project Flow", value: "Agile", icon: <Sparkles size={20} className="text-purple-500" /> },
                { label: "Client Focus", value: "Long-term", icon: <Heart size={20} className="text-red-500" /> },
              ].map((stat, idx) => (
                <div key={idx} className="flex flex-col items-start">
                   <div className="mb-3">{stat.icon}</div>
                   <span className="text-lg font-bold tracking-tight">{stat.value}</span>
                   <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 mt-1">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership Section */}
        <section className="mb-20">
          <div className="flex flex-col mb-12">
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-purple-500 mb-4">Leadership</span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Engineering Minds</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2].map(id => (
              <div key={id} className="group relative rounded-[2.5rem] border border-white/5 bg-zinc-900/10 p-8 md:p-12 overflow-hidden hover:border-white/20 transition-all">
                <div className="flex flex-col sm:flex-row gap-8 items-center sm:items-start">
                  <div className="w-24 h-24 rounded-2xl bg-zinc-800 border border-white/10 overflow-hidden grayscale group-hover:grayscale-0 transition-all flex-shrink-0">
                    {/* Placeholder image */}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold tracking-tight mb-1">Lead Engineer {id}</h3>
                    <span className="text-xs font-bold uppercase tracking-widest text-blue-500">Co-Founder</span>
                    <p className="mt-4 text-sm md:text-base text-zinc-400 font-medium leading-relaxed">
                      Leading our engineering efforts with deep expertise in building scalable mobile and web systems. Focused on delivering high-performance digital products for global clients.
                    </p>
                    <div className="mt-6 flex flex-wrap gap-2">
                       <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold uppercase tracking-widest text-zinc-500">Full Stack</span>
                       <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold uppercase tracking-widest text-zinc-500">AI Systems</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </KineticGrid>
  )
}

export default AboutPage
