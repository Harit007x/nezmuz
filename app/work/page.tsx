"use client"
import React from "react"
import { PageLayout } from "@/components/page-layout"
import { Lock, Layers3, Bot, Smartphone, ArrowRight } from "lucide-react"
import Link from "next/link"
import SlideUp from "@/components/satori-ui/slide-up"

export default function WorkPage() {
  return (
    <PageLayout>
      <section className="mx-auto w-full max-w-6xl px-6 py-32">
        <SlideUp className="relative z-10 mb-20">
          <p className="text-[10px] font-bold tracking-widest text-blue-500 uppercase mb-4">OUR EXPERTISE</p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <h1 className="text-4xl font-semibold tracking-tighter text-zinc-50 md:text-6xl max-w-2xl">
              Technical<br/><span className="text-zinc-500">Focus Areas.</span>
            </h1>
            <p className="text-sm text-zinc-400 max-w-md leading-relaxed">
              We specialize in engineering complex digital products that require high performance, security, and scalability. Every project is a commitment to technical excellence.
            </p>
          </div>
        </SlideUp>

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          <SlideUp delay={0} className="rounded-3xl border border-white/[0.08] bg-zinc-950 p-10 md:p-12 hover:border-zinc-700 transition-colors">
            <div className="mb-10 flex h-14 w-14 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900 text-zinc-100">
              <Lock size={24} />
            </div>
            <h3 className="mb-4 text-2xl font-medium tracking-tight text-zinc-100">FinTech & Secure Payments</h3>
            <p className="mb-10 text-sm leading-relaxed text-zinc-400">
              We engineer financial platforms that prioritize absolute data integrity. From low-latency gateways to complex management systems, we build with security at the core.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full border border-zinc-800 bg-zinc-900/50 px-3 py-1 text-[10px] text-zinc-400 uppercase tracking-widest">SECURITY</span>
              <span className="rounded-full border border-zinc-800 bg-zinc-900/50 px-3 py-1 text-[10px] text-zinc-400 uppercase tracking-widest">SCALABILITY</span>
              <span className="rounded-full border border-zinc-800 bg-zinc-900/50 px-3 py-1 text-[10px] text-zinc-400 uppercase tracking-widest">RELIABILITY</span>
            </div>
          </SlideUp>

          <SlideUp delay={0.1} className="rounded-3xl border border-white/[0.08] bg-zinc-950 p-10 md:p-12 hover:border-zinc-700 transition-colors">
            <div className="mb-10 flex h-14 w-14 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900 text-zinc-100">
              <Layers3 size={24} />
            </div>
            <h3 className="mb-4 text-2xl font-medium tracking-tight text-zinc-100">Enterprise SaaS Ecosystems</h3>
            <p className="mb-10 text-sm leading-relaxed text-zinc-400">
              Our cloud-native platforms are built to grow with your business. We focus on multi-tenant architectures that streamline operations and enhance productivity.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full border border-zinc-800 bg-zinc-900/50 px-3 py-1 text-[10px] text-zinc-400 uppercase tracking-widest">CLOUD-NATIVE</span>
              <span className="rounded-full border border-zinc-800 bg-zinc-900/50 px-3 py-1 text-[10px] text-zinc-400 uppercase tracking-widest">NEXT.JS</span>
              <span className="rounded-full border border-zinc-800 bg-zinc-900/50 px-3 py-1 text-[10px] text-zinc-400 uppercase tracking-widest">MULTI-TENANT</span>
            </div>
          </SlideUp>

          <SlideUp delay={0.2} className="rounded-3xl border border-white/[0.08] bg-zinc-950 p-10 md:p-12 hover:border-zinc-700 transition-colors">
            <div className="mb-10 flex h-14 w-14 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900 text-zinc-100">
              <Bot size={24} />
            </div>
            <h3 className="mb-4 text-2xl font-medium tracking-tight text-zinc-100">Intelligent AI Integration</h3>
            <p className="mb-10 text-sm leading-relaxed text-zinc-400">
              We don't just add AI; we integrate intelligence. By leveraging custom agents and LLMs, we automate complex decision-making and unlock new product capabilities.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full border border-zinc-800 bg-zinc-900/50 px-3 py-1 text-[10px] text-zinc-400 uppercase tracking-widest">OPENAI</span>
              <span className="rounded-full border border-zinc-800 bg-zinc-900/50 px-3 py-1 text-[10px] text-zinc-400 uppercase tracking-widest">AUTOMATION</span>
              <span className="rounded-full border border-zinc-800 bg-zinc-900/50 px-3 py-1 text-[10px] text-zinc-400 uppercase tracking-widest">INTELLIGENCE</span>
            </div>
          </SlideUp>

          <SlideUp delay={0.3} className="rounded-3xl border border-white/[0.08] bg-zinc-950 p-10 md:p-12 hover:border-zinc-700 transition-colors">
            <div className="mb-10 flex h-14 w-14 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900 text-zinc-100">
              <Smartphone size={24} />
            </div>
            <h3 className="mb-4 text-2xl font-medium tracking-tight text-zinc-100">Fluid Mobile Experiences</h3>
            <p className="mb-10 text-sm leading-relaxed text-zinc-400">
              We build mobile apps that people love to use. High-fidelity, performant, and perfectly animated, we ensure your brand feels premium on every device.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full border border-zinc-800 bg-zinc-900/50 px-3 py-1 text-[10px] text-zinc-400 uppercase tracking-widest">FLUTTER</span>
              <span className="rounded-full border border-zinc-800 bg-zinc-900/50 px-3 py-1 text-[10px] text-zinc-400 uppercase tracking-widest">NATIVE-FEEL</span>
              <span className="rounded-full border border-zinc-800 bg-zinc-900/50 px-3 py-1 text-[10px] text-zinc-400 uppercase tracking-widest">UX-FIRST</span>
            </div>
          </SlideUp>
        </div>

        <SlideUp delay={0.2} className="relative z-10 flex flex-col items-center justify-center mt-32 text-center">
          <p className="text-[10px] font-bold tracking-widest text-zinc-500 uppercase mb-4">ENGINEERING A VISION?</p>
          <Link href="/contact" className="rounded-full bg-zinc-100 px-8 py-3.5 text-sm font-semibold text-zinc-950 transition-all hover:bg-zinc-200 inline-flex items-center gap-2">
            Start a Conversation <ArrowRight size={16} />
          </Link>
        </SlideUp>
      </section>
    </PageLayout>
  )
}
