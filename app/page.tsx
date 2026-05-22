"use client"
import React from "react"
import { motion } from "motion/react"
import {
  CheckCircle2,
  Server,
  Cloud,
  Terminal,
  CreditCard,
  Rocket,
  CloudCheck,
  ShieldCheck,
  Zap,
  Share2,
  TrendingUp,
  Wallet,
  Store,
  Layers,
  Infinity,
  Smartphone,
  Globe,
  Database,
  PenTool,
  Network,
  Lock,
  Bot,
  ArrowRight,
  MonitorSmartphone,
} from "lucide-react"
import BlurReveal from "@/components/satori-ui/blur-reveal"
import SlideUpReveal from "@/components/satori-ui/slide-up-reveal"
import SlideUp from "@/components/satori-ui/slide-up"
import { PageLayout } from "@/components/page-layout"
import BeaconBadge from "@/components/satori-ui/beacon-badge"

export default function Home() {
  return (
    <PageLayout>
      {/* 1. Hero Section */}
      <section className="relative mx-auto flex max-w-5xl flex-col items-center px-6 pt-32 pb-24 text-center md:pt-48 md:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          // className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1.5 backdrop-blur-sm"
        >
          {/* <BlurReveal className="text-[10px] font-semibold tracking-widest text-blue-400 uppercase" speedReveal={3}>
            
          </BlurReveal> */}
          <BeaconBadge label="ENGINEERING THE FUTURE"  staticTheme="dark" className="text-blue-400 border-blue-500/20 bg-blue-500/10 backdrop-blur-sm mb-6"/>
        </motion.div>
        
        <h1 className="max-w-4xl text-5xl leading-tight font-semibold tracking-tighter text-zinc-50 md:text-6xl lg:text-7xl">
          <SlideUpReveal split="words" stagger={0.08} className="justify-center">
            We Build High-Performance Mobile & Web Applications
          </SlideUpReveal>
        </h1>
        
        <BlurReveal className="mt-6 max-w-2xl text-base leading-relaxed font-normal text-zinc-300 md:text-lg" speedReveal={3}>
          Zynetz Technologies is a global engineering firm dedicated to building high-performance, robust and scalable digital products.
        </BlurReveal>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
          className="mt-10 flex w-full flex-col items-center justify-center gap-4 sm:w-auto sm:flex-row"
        >
          <a href="/contact" className="w-full flex items-center justify-center gap-2 rounded-full bg-zinc-100 px-8 py-3.5 text-sm font-semibold text-zinc-950 transition-all hover:bg-zinc-200 sm:w-auto">
            Let's Talk <ArrowRight size={16} />
          </a>
          <a href="/services" className="w-full flex items-center justify-center gap-2 rounded-full border border-zinc-800 bg-zinc-950 px-8 py-3.5 text-sm font-semibold text-zinc-100 transition-all hover:bg-zinc-900 sm:w-auto">
            Our Services
          </a>
        </motion.div>

        {/* Hero Features Strip */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-20 flex flex-wrap justify-center gap-x-12 gap-y-6 text-sm font-medium tracking-tight text-zinc-400"
        >
          <span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-zinc-500" /> Top Quality</span>
          <span className="flex items-center gap-2"><MonitorSmartphone size={16} className="text-zinc-500" /> Fast Mobile & Web</span>
          <span className="flex items-center gap-2"><Server size={16} className="text-zinc-500" /> Scalable</span>
          <span className="flex items-center gap-2"><Lock size={16} className="text-zinc-500" /> Secure & Safe</span>
        </motion.div>
      </section>

      {/* 2. High-End Engineering Solutions */}
      <section className="mx-auto w-full max-w-6xl px-6 py-24 border-t border-white/[0.05]">
        <SlideUp className="mb-16 text-center md:text-left">
          <p className="text-[10px] font-bold tracking-widest text-blue-500 uppercase mb-4">OUR EXPERTISE</p>
          <h2 className="text-3xl font-semibold tracking-tighter text-zinc-50 md:text-4xl">
            High-End Engineering <br/>Solutions
          </h2>
        </SlideUp>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            { icon: <Smartphone size={20} />, title: "Mobile App Development", tags: ["Flutter", "React Native", "iOS / Android"], desc: "High-performance native and cross-platform apps." },
            { icon: <Globe size={20} />, title: "Enterprise Web Systems", tags: ["Cloud-Native", "Next.js / React", "High Performance"], desc: "Scalable web architectures for global businesses." },
            { icon: <Server size={20} />, title: "Scalable Backend & Cloud", tags: ["Node.js / Python", "AWS / GCP", "Microservices"], desc: "Robust backend infrastructure built for scale." },
            { icon: <Bot size={20} />, title: "AI & Automation", tags: ["LLM Integration", "Workflow Auto", "Data Pipelines"], desc: "Intelligent systems optimizing business operations." },
            { icon: <PenTool size={20} />, title: "UI/UX & Motion", tags: ["Premium Design", "Fluid Animations", "Interactive Web"], desc: "Engaging digital experiences that captivate." },
            { icon: <Network size={20} />, title: "Global Delivery", tags: ["Distributed Teams", "Agile Method", "Continuous Delivery"], desc: "Seamless project execution across borders." },
          ].map((item, i) => (
            <SlideUp key={i} delay={i * 0.08} className="group flex h-full flex-col rounded-2xl border border-white/[0.08] bg-zinc-900/30 p-8 backdrop-blur-xl transition-all duration-300 hover:border-zinc-700 hover:bg-zinc-900/50">
              <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-950 text-zinc-400 group-hover:text-zinc-100 group-hover:border-zinc-700 transition-colors">
                {item.icon}
              </div>
              <h3 className="mb-4 text-lg font-medium tracking-tight text-zinc-100">{item.title}</h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {item.tags.map((tag, j) => (
                  <span key={j} className="rounded border border-white/[0.08] bg-white/[0.02] px-2 py-1 text-[10px] text-zinc-400 uppercase tracking-wider">{tag}</span>
                ))}
              </div>
              <a href="/services" className="mt-auto flex items-center gap-2 text-xs font-medium text-zinc-500 hover:text-zinc-300 transition-colors">
                EXPLORE SERVICES <ArrowRight size={12} />
              </a>
            </SlideUp>
          ))}
        </div>
      </section>

      {/* 3. Core Technical Capabilities */}
      <section className="mx-auto w-full max-w-6xl px-6 py-24 border-t border-white/[0.05] bg-zinc-950/40">
        <SlideUp className="mb-16 text-center">
          <p className="text-[10px] font-bold tracking-widest text-purple-500 uppercase mb-4">OUR PLATFORMS</p>
          <h2 className="text-3xl font-semibold tracking-tighter text-zinc-50 md:text-4xl">
            Core Technical<br/>Capabilities
          </h2>
        </SlideUp>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 max-w-4xl mx-auto">
          {[
            { icon: <Server size={20} className="text-blue-500" />, title: "Scalable Infrastructure", desc: "Secure data architecture that grows with your user base, ensuring high performance and uptime for your business needs." },
            { icon: <Smartphone size={20} className="text-zinc-400" />, title: "Seamless Mobile Experiences", desc: "Native and cross-platform mobile development that blends intuitive design with rock-solid functionality." },
            { icon: <Bot size={20} className="text-emerald-500" />, title: "AI-Driven Automation", desc: "Integration of modern AI and LLM technologies to streamline complex business workflows." },
            { icon: <Lock size={20} className="text-red-500" />, title: "Secure & Reliable APIs", desc: "Building robust backend architectures with a focus on data integrity, low latency, and enterprise-grade security." },
          ].map((item, i) => (
            <SlideUp key={i} delay={i * 0.1} className="flex flex-col rounded-2xl border border-white/[0.05] bg-zinc-950 p-8 hover:border-white/[0.1] transition-colors">
              <div className="mb-4">
                {item.icon}
              </div>
              <h3 className="mb-3 text-lg font-medium tracking-tight text-zinc-100">{item.title}</h3>
              <p className="text-sm leading-relaxed text-zinc-400">{item.desc}</p>
            </SlideUp>
          ))}
        </div>
      </section>

      {/* 4. Our Development Process (Home View) */}
      <section className="mx-auto w-full max-w-6xl px-6 py-24 border-t border-white/[0.05]">
        <SlideUp className="mb-16 text-center">
          <p className="text-[10px] font-bold tracking-widest text-green-500 uppercase mb-4">HOW WE WORK</p>
          <h2 className="text-3xl font-semibold tracking-tighter text-zinc-50 md:text-4xl">
            Our Development<br/>Process
          </h2>
        </SlideUp>

        <SlideUp delay={0.2} className="relative flex flex-wrap md:flex-nowrap justify-center md:justify-between items-start gap-4 py-8">
          <div className="absolute left-0 top-[calc(2rem+32px)] -z-10 hidden h-[1px] w-full bg-white/20 md:block"></div>
          {["Discovery", "Strategy", "UI/UX Design", "Development", "Testing", "Launch", "Scaling"].map((step, i) => (
            <div key={i} className="flex flex-col items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full border border-zinc-800 bg-zinc-950 text-sm font-medium text-zinc-400 z-10 shadow-xl">
                {i + 1}
              </div>
              <span className="text-[10px] font-bold tracking-wider text-zinc-500 uppercase text-center max-w-[80px]">{step}</span>
            </div>
          ))}
        </SlideUp>
      </section>

      {/* 5. Modern Tech Stack */}
      <section className="mx-auto w-full max-w-6xl px-6 py-24 border-t border-white/[0.05] bg-zinc-950/40">
        <SlideUp className="mb-16 text-center">
          <p className="text-[10px] font-bold tracking-widest text-blue-500 uppercase mb-4">OUR ARCHITECTURE</p>
          <h2 className="text-3xl font-semibold tracking-tighter text-zinc-50 md:text-4xl">Modern Tech Stack</h2>
        </SlideUp>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Frontend & Mobile", icon: <MonitorSmartphone size={16} />, tools: ["React", "Next.js", "React Native", "Flutter", "TypeScript"] },
            { title: "Backend & Services", icon: <Server size={16} />, tools: ["Node.js", "Python", "Go", "GraphQL", "REST APIs"] },
            { title: "Data & AI", icon: <Database size={16} />, tools: ["PostgreSQL", "MongoDB", "Redis", "OpenAI", "TensorFlow"] },
            { title: "Cloud Infrastructure", icon: <Cloud size={16} />, tools: ["AWS / GCP", "Docker", "Kubernetes", "Vercel", "Terraform"] },
          ].map((col, i) => (
            <SlideUp key={i} delay={i * 0.1} className="rounded-2xl border border-white/[0.05] bg-zinc-900/30 p-8">
              <div className="mb-6 flex h-8 w-8 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-950 text-zinc-400">
                {col.icon}
              </div>
              <h3 className="mb-6 text-sm font-semibold tracking-tight text-zinc-100">{col.title}</h3>
              <ul className="space-y-4">
                {col.tools.map((tool, j) => (
                  <li key={j} className="flex items-center gap-3 text-xs text-zinc-400 font-medium">
                    <span className="h-1 w-1 rounded-full bg-blue-500"></span>
                    {tool}
                  </li>
                ))}
              </ul>
            </SlideUp>
          ))}
        </div>
      </section>

      {/* 6. Why Industry Leaders Choose Zynetz */}
      <section className="mx-auto w-full max-w-6xl px-6 py-24 border-t border-white/[0.05]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <SlideUp>
            <p className="text-[10px] font-bold tracking-widest text-purple-500 uppercase mb-4">THE ZYNETZ ADVANTAGE</p>
            <h2 className="text-3xl font-semibold tracking-tighter text-zinc-50 md:text-4xl mb-6">
              Why Industry Leaders Choose Zynetz
            </h2>
            <p className="text-zinc-400 text-sm leading-relaxed max-w-md">
              We partner with visionary founders and global enterprises to build the digital products of tomorrow. We don't just build features; we build highly scalable, beautifully animated, production-grade systems.
            </p>
            <a href="/about" className="mt-8 inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-950 px-6 py-2.5 text-xs font-semibold text-zinc-100 hover:bg-zinc-900 transition-colors">
              LEARN MORE ABOUT US <ArrowRight size={14} />
            </a>
          </SlideUp>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: "Trusted Tech", desc: "Our code powers mission-critical applications across various industries." },
              { title: "Scalable", desc: "Architecture built to handle massive scale from day one." },
              { title: "Fluid Motion", desc: "We integrate smooth animations and transitions to elevate user experience." },
              { title: "Full Stack", desc: "End-to-end development from initial concept to deployment." },
            ].map((item, i) => (
              <SlideUp key={i} delay={0.1 + i * 0.08} className="rounded-2xl border border-white/[0.05] bg-zinc-950 p-6 hover:border-white/[0.1] transition-colors">
                <h4 className="mb-2 text-sm font-semibold text-zinc-100">{item.title}</h4>
                <p className="text-xs leading-relaxed text-zinc-400">{item.desc}</p>
              </SlideUp>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Industries We Transform */}
      <section className="mx-auto w-full max-w-6xl px-6 py-24 border-t border-white/[0.05] text-center mb-12">
        <SlideUp>
          <p className="text-[10px] font-bold tracking-widest text-emerald-500 uppercase mb-4">BEYOND BORDERS</p>
          <h2 className="text-2xl font-semibold tracking-tighter text-zinc-50 md:text-3xl mb-12">
            Industries We<br/>Transform
          </h2>
        </SlideUp>
        <SlideUp delay={0.15} className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
          {["FINTECH", "HEALTHCARE", "E-COMMERCE", "SAAS", "REAL ESTATE", "LOGISTICS", "EDTECH", "ENTERTAINMENT", "AI & MACHINE LEARNING"].map((industry, i) => (
            <span key={i} className="rounded-full border border-zinc-800 bg-zinc-900/50 px-4 py-2 text-[10px] font-semibold text-zinc-300 tracking-wider hover:bg-zinc-800 hover:text-white transition-colors cursor-default">
              {industry}
            </span>
          ))}
        </SlideUp>
      </section>
    </PageLayout>
  )
}
