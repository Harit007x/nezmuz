"use client"
import React from "react"
import { PageLayout } from "@/components/page-layout"
import { ShieldCheck, CodeIcon, Terminal, Activity, ArrowRight, PenTool } from "lucide-react"
import Link from "next/link"
import SlideUp from "@/components/satori-ui/slide-up"

export default function AboutPage() {
  return (
    <PageLayout>
      <section className="mx-auto w-full max-w-6xl px-6 py-32 border-t border-white/[0.05]">
        <SlideUp className="mb-20 text-center md:text-left">
          <p className="text-[10px] font-bold tracking-widest text-blue-500 uppercase mb-4">OUR STORY</p>
          <h1 className="text-4xl font-semibold tracking-tighter text-zinc-50 md:text-6xl max-w-3xl mb-6">
            Engineering<br/><span className="text-zinc-500">Digital Mastery.</span>
          </h1>
          <p className="text-sm text-zinc-400 max-w-xl leading-relaxed">
            Zynetz was born from a simple belief: that technology should be as human as it is powerful. We are a collection of engineers, designers, and thinkers dedicated to crafting exceptional digital ecosystems.
          </p>
        </SlideUp>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-32">
          {[
            { title: "Mission", desc: "To engineer scalable, secure, and beautiful software that accelerates human potential and business growth." },
            { title: "Vision", desc: "To be the trusted technical partner for the world's most innovative startups and forward-thinking enterprises." },
            { title: "Values", desc: "Radical transparency, uncompromising quality, continuous learning, and human-centric design." },
          ].map((item, i) => (
            <SlideUp key={i} delay={i * 0.1} className="rounded-3xl border border-white/[0.08] bg-zinc-950 p-8">
              <h3 className="mb-3 text-lg font-medium tracking-tight text-zinc-100">{item.title}</h3>
              <p className="text-sm leading-relaxed text-zinc-400">{item.desc}</p>
            </SlideUp>
          ))}
        </div>

        <SlideUp className="mb-16">
          <p className="text-[10px] font-bold tracking-widest text-purple-500 uppercase mb-4">LEADERSHIP</p>
          <h2 className="text-3xl font-semibold tracking-tighter text-zinc-50 md:text-4xl mb-6">Engineering Minds</h2>
        </SlideUp>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { name: "Harit", role: "FOUNDER & CTO", icon: <Terminal size={20}/> },
            { name: "Alex Chen", role: "HEAD OF AI", icon: <Activity size={20}/> },
            { name: "Sarah Jenkins", role: "LEAD DESIGNER", icon: <PenTool size={20}/> },
            { name: "Michael Doe", role: "VP ENGINEERING", icon: <CodeIcon size={20}/> },
          ].map((leader, i) => (
            <SlideUp key={i} delay={i * 0.1} className="flex flex-col items-center justify-center rounded-3xl border border-white/[0.08] bg-zinc-950 p-8 text-center hover:border-zinc-700 transition-colors">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-zinc-800 bg-zinc-900 text-zinc-100">
                {leader.icon}
              </div>
              <h4 className="text-lg font-medium tracking-tight text-zinc-100 mb-1">{leader.name}</h4>
              <p className="text-[10px] font-bold tracking-widest text-zinc-500 uppercase">{leader.role}</p>
            </SlideUp>
          ))}
        </div>
      </section>
    </PageLayout>
  )
}
