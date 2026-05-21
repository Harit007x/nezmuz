"use client"
import React from "react"
import { PageLayout } from "@/components/page-layout"
import { MessageSquare, Activity, PenTool, CodeIcon, ShieldCheck, Rocket, TrendingUp } from "lucide-react"
import SlideUp from "@/components/satori-ui/slide-up"

export default function ProcessPage() {
  return (
    <PageLayout>
      <section className="mx-auto w-full max-w-6xl px-6 py-32 relative">
        <SlideUp className="mb-20">
          <p className="text-[10px] font-bold tracking-widest text-green-500 uppercase mb-4">OUR PARTNER</p>
          <h1 className="text-4xl font-semibold tracking-tighter text-zinc-50 md:text-6xl max-w-2xl mb-6">
            A Partnership<br/><span className="text-zinc-500">Built on Trust.</span>
          </h1>
          <p className="text-sm text-zinc-400 max-w-xl leading-relaxed">
            Building great software is a journey. We've refined our process to be collaborative, transparent, and focused on delivering real human value.
          </p>
        </SlideUp>

        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-zinc-800 -translate-x-1/2 hidden md:block"></div>

          <div className="space-y-12 md:space-y-24">
            {[
              { num: "1", title: "Active Listening", icon: <MessageSquare size={16}/>, color: "text-blue-500", border: "border-blue-500/30", bg: "bg-blue-500/10", desc: "We begin by understanding your world. This is about more than just requirements, it's about aligning with your vision, culture, and long-term goals.", align: "left" },
              { num: "2", title: "Strategic Roadmap", icon: <Activity size={16}/>, color: "text-green-500", border: "border-green-500/30", bg: "bg-green-500/10", desc: "Together, we define the path forward. We architect a technical strategy that balances immediate impact with future-proof scalability.", align: "right" },
              { num: "3", title: "Crafting the Experience", icon: <PenTool size={16}/>, color: "text-purple-500", border: "border-purple-500/30", bg: "bg-purple-500/10", desc: "Design is where your vision takes shape. We build intuitive, cinematic interfaces that feel natural and delight your users at every touchpoint.", align: "left" },
              { num: "4", title: "Precision Engineering", icon: <CodeIcon size={16}/>, color: "text-orange-500", border: "border-orange-500/30", bg: "bg-orange-500/10", desc: "Our developers bring the design to life with clean, high-performance code. We build with the latest stacks to ensure your product is fast and reliable.", align: "right" },
              { num: "5", title: "Guaranteed Quality", icon: <ShieldCheck size={16}/>, color: "text-red-500", border: "border-red-500/30", bg: "bg-red-500/10", desc: "We don't just test—we stress and rebuild. Our rigorous QA process ensures that your product is secure, stable, and ready for the real world.", align: "left" },
              { num: "6", title: "The Big Launch", icon: <Rocket size={16}/>, color: "text-cyan-500", border: "border-cyan-500/30", bg: "bg-cyan-500/10", desc: "Moving from development to production is a celebration. We handle the technical heavy lifting across app stores and cloud environments.", align: "right" },
              { num: "7", title: "Growing Together", icon: <TrendingUp size={16}/>, color: "text-emerald-500", border: "border-emerald-500/30", bg: "bg-emerald-500/10", desc: "Launch is just the beginning. We stay by your side to monitor, optimize, and scale your product as your business evolves.", align: "left" },
            ].map((step, i) => (
              <SlideUp key={i} delay={i * 0.06} className={`relative flex flex-col md:flex-row items-center justify-between w-full ${step.align === 'right' ? 'md:flex-row-reverse' : ''}`}>
                <div className="w-full md:w-5/12 mb-8 md:mb-0">
                  <div className={`rounded-3xl border border-white/[0.08] bg-zinc-950 p-8 hover:border-zinc-700 transition-colors ${step.align === 'right' ? 'md:text-right' : 'text-left'}`}>
                    <div className={`mb-6 inline-flex h-10 w-10 items-center justify-center rounded-lg border ${step.border} ${step.bg} ${step.color}`}>
                      {step.icon}
                    </div>
                    <div className="text-[10px] font-bold tracking-widest text-zinc-500 uppercase mb-2">PHASE {step.num}</div>
                    <h3 className="mb-4 text-xl font-medium tracking-tight text-zinc-100">{step.title}</h3>
                    <p className="text-sm leading-relaxed text-zinc-400">{step.desc}</p>
                  </div>
                </div>

                <div className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 md:flex h-12 w-12 items-center justify-center rounded-full border border-zinc-800 bg-zinc-950 text-sm font-medium text-zinc-400 shadow-xl">
                  {step.num}
                </div>

                <div className="w-full md:w-5/12"></div>
              </SlideUp>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
