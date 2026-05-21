import React from "react"
import { PageLayout } from "@/components/page-layout"
import { Smartphone, Globe, Server, Bot, Cloud, PenTool, LineChart, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function ServicesPage() {
  return (
    <PageLayout>
      <section className="mx-auto w-full max-w-6xl px-6 py-32">
        <div className="relative z-10 mb-20">
          <p className="text-[10px] font-bold tracking-widest text-blue-500 uppercase mb-4">DIGITAL TRANSFORMATION</p>
          <h1 className="text-4xl font-semibold tracking-tighter text-zinc-50 md:text-5xl max-w-3xl mb-6">
            Comprehensive<br/>Technology Ecosystem.
          </h1>
          <p className="text-sm text-zinc-400 max-w-2xl leading-relaxed">
            Our end-to-end full-stack capabilities ensure unified implementation across your entire product ecosystem. We seamlessly navigate complex domains to build interconnected solutions that scale.
          </p>
        </div>

        <div className="relative z-10 space-y-6">
          {[
            {
              icon: <Smartphone size={24} />, title: "Next-Gen Mobile Engineering", desc: "Crafting fluid, native-feel experiences across iOS and Android platforms with uncompromising performance and modern architectural patterns.",
              tags: ["FLUTTER", "REACT NATIVE", "SWIFT"], features: ["Native & Cross-Platform UI", "Complex State Management", "Offline-First Architecture"]
            },
            {
              icon: <Globe size={24} />, title: "High-Performance Web Systems", desc: "Implementing highly optimized web applications that are lightning-fast, SEO-friendly, and built to handle massive scale.",
              tags: ["NEXT.JS", "REACT", "TYPESCRIPT"], features: ["Server-Side Rendering (SSR)", "Progressive Web Apps (PWAs)", "Complex UI/UX Interactions"]
            },
            {
              icon: <Server size={24} />, title: "Cloud-Native Backend & APIs", desc: "Building scalable, distributed architectures designed for resilience, high throughput, and enterprise-grade security.",
              tags: ["NODE.JS", "PYTHON", "POSTGRESQL"], features: ["Scalable Microservices", "GraphQL & REST API Design", "Event-Driven Architecture"]
            },
            {
              icon: <Bot size={24} />, title: "Agentic AI & Intelligence", desc: "Transforming standard workflows into intelligent processes using LLMs, custom agents, and deep automation pipelines.",
              tags: ["OPENAI", "LANGCHAIN", "PYTORCH"], features: ["Custom AI Agent Development", "Generative AI Workflows", "Intelligent Automation"]
            },
            {
              icon: <Cloud size={24} />, title: "DevOps & Global Infrastructure", desc: "Deploying and managing scalable cloud environments that power global platforms and guarantee high availability.",
              tags: ["AWS", "DOCKER", "KUBERNETES"], features: ["Automated CI/CD Pipelines", "Infrastructure as Code", "Zero-Downtime Deployments"]
            },
            {
              icon: <PenTool size={24} />, title: "Strategic UI/UX & Motion", desc: "Translating complex requirements into intuitive, fluid interfaces that feel natural and delight users at every touchpoint.",
              tags: ["FIGMA", "FRAMER", "MOTION"], features: ["Design Systems", "Interactive Prototyping", "Micro-Interactions"]
            },
            {
              icon: <LineChart size={24} />, title: "Performance Growth & Content", desc: "Aligning product success with data-driven performance marketing and premium technical SEO.",
              tags: ["ANALYTICS", "SEO", "GROWTH"], features: ["Conversion Optimization", "Technical SEO Audits", "Data-Driven Insights"]
            },
          ].map((sys, i) => (
            <div key={i} className="flex flex-col lg:flex-row rounded-3xl border border-white/[0.08] bg-zinc-950 p-8 hover:border-zinc-700 transition-colors gap-8">
              <div className="lg:w-1/3">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900 text-zinc-100">
                  {sys.icon}
                </div>
                <h3 className="mb-4 text-xl font-medium tracking-tight text-zinc-100">{sys.title}</h3>
                <p className="mb-6 text-sm leading-relaxed text-zinc-400">{sys.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {sys.tags.map((tag, j) => (
                    <span key={j} className="rounded border border-zinc-800 bg-zinc-900/50 px-2 py-1 text-[9px] text-zinc-500 uppercase tracking-widest">{tag}</span>
                  ))}
                </div>
              </div>
              <div className="lg:w-2/3 lg:border-l border-zinc-800/50 lg:pl-12 flex flex-col justify-center">
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 text-sm text-zinc-300">
                  {sys.features.map((feature, k) => (
                    <li key={k} className="flex items-center gap-3">
                      <span className="h-1 w-1 rounded-full bg-blue-500"></span> {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="relative z-10 mt-32 text-center">
          <p className="text-sm font-semibold tracking-tight text-zinc-300 mb-8">Empowering industries worldwide.</p>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto mb-12">
            {["AWS", "REACT NATIVE", "AI", "NEXT.JS", "GCP", "PYTHON", "NODE.JS", "FLUTTER", "MONGODB", "POSTGRESQL", "DOCKER"].map((tech, i) => (
              <span key={i} className="rounded-full border border-zinc-800 bg-zinc-900/50 px-4 py-2 text-[10px] font-semibold text-zinc-300 tracking-wider cursor-default">
                {tech}
              </span>
            ))}
          </div>
          <Link href="/contact" className="rounded-full bg-zinc-100 px-8 py-3.5 text-sm font-semibold text-zinc-950 transition-all hover:bg-zinc-200 inline-flex items-center gap-2">
            Start a New Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </PageLayout>
  )
}
