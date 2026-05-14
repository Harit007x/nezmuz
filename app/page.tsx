"use client"

import React, { useEffect, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { 
  ArrowRight, 
  ChevronRight, 
  Smartphone, 
  Globe, 
  Zap, 
  Shield, 
  Layers, 
  Cpu,
  Star,
  CheckCircle2,
  Users,
  Terminal,
  Database,
  Cloud,
  Check
} from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import SlideUpReveal from "@/components/satori-ui/slide-up-reveal"
import BlurReveal from "@/components/satori-ui/blur-reveal"
import BeaconBadge from "@/components/satori-ui/beacon-badge"
import KineticGrid from "@/components/satori-ui/kinetic-grid"

const PremiumAgencySite: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  
  return (
    <div ref={containerRef} className="relative bg-black text-white selection:bg-white selection:text-black">
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-purple-600/10 blur-[120px] rounded-full" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[length:40px_40px]" />
      </div>

      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-12 px-6 overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="scale-90"
          >
            <BeaconBadge label="Available for new projects" beconColor="green" border="full" staticTheme="dark" />
          </motion.div>

          <h1 className="mt-2 text-center text-[1.5rem] leading-[1.1] md:text-3xl font-bold tracking-tight max-w-2xl px-4">
            <SlideUpReveal split="words" stagger={0.05} className="justify-center">
              We Build High Performance Mobile & Web Applications
            </SlideUpReveal>
          </h1>

          <div className="mt-2 max-w-xl text-center">
            <BlurReveal className="text-sm md:text-base text-zinc-400 font-medium leading-relaxed">
              Scalable Flutter, React Native, Next.js, AI, and Cloud-based Full Stack solutions for startups and enterprises.
            </BlurReveal>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="mt-6 flex flex-col sm:flex-row items-center gap-4"
          >
            <Link
              href="/contact"
              className="group relative px-6 py-3 bg-white text-black font-bold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <span className="relative z-10 flex items-center gap-2 text-xs">
                Book a Call <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-zinc-200 to-white opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
            <Link
              href="/services"
              className="group flex items-center gap-2 text-white font-bold text-sm hover:text-zinc-300 transition-colors"
            >
              Explore Services <ChevronRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>

          {/* Trust Highlights - Generic */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 border-t border-white/10 pt-6 w-full max-w-4xl"
          >
            {[
              { label: "Expertise", value: "Full Stack" },
              { label: "Deployment", value: "App Store & Web" },
              { label: "Architecture", value: "Scalable" },
              { label: "Focus", value: "Startup & Ent." },
            ].map((metric, idx) => (
              <div key={idx} className="flex flex-col items-center md:items-start text-center md:text-left">
                <span className="text-lg font-bold text-white tracking-tight">{metric.value}</span>
                <span className="text-[9px] uppercase tracking-[0.2em] text-zinc-500 font-bold mt-0.5">{metric.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-1/2 pointer-events-none overflow-hidden">
          <motion.div
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, 2, 0]
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[1200px] aspect-video bg-gradient-to-t from-blue-600/20 to-transparent blur-[80px] rounded-full opacity-40"
          />
        </div>
      </section>

      {/* 2. SERVICES ECOSYSTEM */}
      <section className="relative py-32 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-start gap-4 mb-20">
            <span className="text-sm font-bold uppercase tracking-[0.3em] text-blue-500">Our Expertise</span>
            <h2 className="text-3xl md:text-3xl font-bold tracking-tight">
              High-End Engineering <br /> Solutions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Mobile App Development",
                icon: <Smartphone size={24} />,
                items: ["Flutter", "React Native", "iOS / Android", "Cross-Platform"],
                color: "from-blue-500/20 to-purple-500/20"
              },
              {
                title: "Enterprise Web Systems",
                icon: <Globe size={24} />,
                items: ["Next.js Solutions", "SaaS Platforms", "Custom Web Support", "Marketplaces"],
                color: "from-emerald-500/20 to-blue-500/20"
              },
              {
                title: "Scalable Backend & Cloud",
                icon: <Layers size={24} />,
                items: ["Node.js / Python", "AWS Cloud Support", "Serverless Architecture", "GraphQL APIs"],
                color: "from-orange-500/20 to-red-500/20"
              },
              {
                title: "AI & Automation",
                icon: <Cpu size={24} />,
                items: ["LLM Integrations", "AI Agents", "Smart Search", "Workflow Auto"],
                color: "from-purple-500/20 to-pink-500/20"
              },
              {
                title: "UI/UX & Motion",
                icon: <Zap size={24} />,
                items: ["Design Systems", "Prototyping", "Interaction Design", "Visual Identity"],
                color: "from-cyan-500/20 to-blue-500/20"
              },
              {
                title: "Digital Strategy",
                icon: <Shield size={24} />,
                items: ["MVP Development", "Tech Consultation", "Product Scaling", "Security Hardening"],
                color: "from-zinc-500/20 to-white/20"
              }
            ].map((cat, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -10 }}
                className="group relative p-8 rounded-[2.5rem] bg-zinc-900/40 border border-white/5 overflow-hidden"
              >
                <div className={cn("absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500", cat.color)} />
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                    {cat.icon}
                  </div>
                  <h3 className="text-2xl font-bold tracking-tight mb-4">{cat.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {cat.items.map((item, i) => (
                      <span key={i} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-zinc-400">
                        {item}
                      </span>
                    ))}
                  </div>
                  <Link href="/services" className="mt-8 flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-white group-hover:gap-4 transition-all">
                    Explore Details <ArrowRight size={16} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CAPABILITIES / FOCUS AREAS */}
      <section className="relative py-32 px-6 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <span className="text-sm font-bold uppercase tracking-[0.3em] text-purple-500">Our Focus</span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mt-4">
              Core Technical <br /> Capabilities
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Scalable Infrastructure",
                desc: "We architect systems that grow with your user base, ensuring high uptime and low-latency performance.",
                icon: <Database className="text-blue-500" />
              },
              {
                title: "Seamless Mobile Experiences",
                desc: "Our expertise allows for rapid development of high-fidelity, native-feeling apps for iOS and Android.",
                icon: <Smartphone className="text-purple-500" />
              },
              {
                title: "AI-Driven Automation",
                desc: "Integrating state-of-the-art LLMs and AI agents to streamline complex business workflows.",
                icon: <Cpu className="text-emerald-500" />
              },
              {
                title: "Secure & Reliable APIs",
                desc: "Building robust backend architectures with a focus on data integrity, security, and integration flexibility.",
                icon: <Shield className="text-red-500" />
              }
            ].map((cap, idx) => (
              <div key={idx} className="p-12 rounded-[3rem] border border-white/5 bg-black/40 backdrop-blur-3xl group hover:border-white/20 transition-all">
                <div className="mb-8">{cap.icon}</div>
                <h3 className="text-3xl font-bold tracking-tight mb-4">{cap.title}</h3>
                <p className="text-lg text-zinc-400 font-medium leading-relaxed">{cap.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PROCESS SECTION */}
      <section className="relative py-32 px-6 bg-black overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-24">
            <span className="text-sm font-bold uppercase tracking-[0.3em] text-emerald-500">Methodology</span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mt-4">
              Our Development <br /> Process
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {[
              "Discovery", "Strategy", "UI/UX Design", "Development", "Testing", "Launch", "Scaling"
            ].map((step, idx) => (
              <div key={idx} className="relative group">
                <div className="aspect-square rounded-full border border-white/5 bg-zinc-900/40 flex flex-col items-center justify-center p-6 text-center group-hover:border-white/20 transition-all">
                  <span className="text-3xl font-bold text-zinc-800 group-hover:text-white/20 transition-colors mb-2">{idx + 1}</span>
                  <span className="text-sm font-bold tracking-tight">{step}</span>
                </div>
                {idx < 6 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-white/10" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. TECH STACK SECTION */}
      <section className="relative py-32 px-6 bg-zinc-950 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <span className="text-sm font-bold uppercase tracking-[0.3em] text-blue-500">Infrastructure</span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mt-4">Modern Tech Stack</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { title: "Frontend & Mobile", items: ["Flutter", "React Native", "Next.js", "TypeScript"], icon: <Globe size={20} /> },
              { title: "Backend Systems", items: ["Node.js", "Python", "Go", "FastAPI"], icon: <Terminal size={20} /> },
              { title: "Data & AI", items: ["PostgreSQL", "MongoDB", "OpenAI", "Supabase"], icon: <Database size={20} /> },
              { title: "Cloud Infrastructure", items: ["AWS Cloud", "Docker", "Vercel", "Kubernetes"], icon: <Cloud size={20} /> }
            ].map((stack, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                className="p-8 rounded-[3rem] border border-white/5 bg-zinc-900/20 backdrop-blur-3xl"
              >
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 mb-6">
                  {stack.icon}
                </div>
                <h3 className="text-xl font-bold mb-6">{stack.title}</h3>
                <div className="space-y-3">
                  {stack.items.map(item => (
                    <div key={item} className="flex items-center gap-3 text-sm font-bold text-zinc-500">
                      <div className="w-1 h-1 rounded-full bg-blue-500" />
                      {item}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. WHY CHOOSE US SECTION */}
      <section className="relative py-32 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="text-sm font-bold uppercase tracking-[0.3em] text-purple-500">Trust & Quality</span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mt-4 mb-8">Why Industry Leaders <br /> Choose Nezmuz</h2>
              <p className="text-xl text-zinc-400 font-medium leading-relaxed max-w-lg mb-12">
                We combine technical depth with strategic thinking to deliver high-performance digital products.
              </p>
              <Link href="/about" className="px-8 py-4 bg-white/5 border border-white/10 rounded-full font-bold hover:bg-white/10 transition-all">
                Learn More About Us
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: "Technical Depth", desc: "Our team consists of veteran engineers with deep platform expertise." },
                { title: "Scalable Arch", desc: "Systems built to handle massive concurrent user loads." },
                { title: "Clean Code", desc: "Maintainable, documented, and production-ready systems." },
                { title: "Full Stack", desc: "End-to-end expertise across mobile, web, and cloud." }
              ].map((item, idx) => (
                <div key={idx} className="p-8 rounded-[2.5rem] border border-white/5 bg-zinc-900/40">
                  <h3 className="text-lg font-bold tracking-tight mb-2">{item.title}</h3>
                  <p className="text-sm text-zinc-500 font-bold leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. INDUSTRIES SECTION */}
      <section className="relative py-32 px-6 bg-zinc-950">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-sm font-bold uppercase tracking-[0.3em] text-emerald-500">Global Expertise</span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mt-4 mb-20">Industries We <br /> Transform</h2>
          
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "FinTech", "Healthcare", "E-Commerce", "SaaS", 
              "Real Estate", "Logistics", "Fitness", "Education", "AI Platforms"
            ].map(industry => (
              <div key={industry} className="px-8 py-4 rounded-full border border-white/5 bg-zinc-900/40 text-sm font-bold uppercase tracking-widest hover:border-white/20 transition-all cursor-default">
                {industry}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CONTACT SECTION */}
      <section className="relative py-32 px-6 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-5xl md:text-8xl font-bold tracking-tight leading-[0.9]">
                Ready to <br /> Build the <br /> <span className="text-zinc-600">Future?</span>
              </h2>
              <p className="mt-8 text-xl text-zinc-400 font-medium leading-relaxed max-w-md">
                Let's discuss your next breakthrough. We partner with visionaries to build scalable digital ecosystems.
              </p>
              
              <div className="mt-12 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-500">
                    <CheckCircle2 size={20} />
                  </div>
                  <span className="text-lg font-bold">Fast Execution & High Quality</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-blue-500">
                    <Users size={20} />
                  </div>
                  <span className="text-lg font-bold">Dedicated Engineering Team</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-purple-500">
                    <Star size={20} />
                  </div>
                  <span className="text-lg font-bold">Direct Communication Channel</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-blue-600/20 blur-[100px] rounded-full" />
              <div className="relative z-10 p-10 md:p-16 rounded-[4rem] border border-white/10 bg-black/40 backdrop-blur-3xl">
                <form className="space-y-6" onSubmit={(e) => {
                  e.preventDefault();
                  alert("Thank you for your inquiry! Our team will contact you shortly.");
                }}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Your Name</label>
                      <input required type="text" className="w-full bg-transparent border-b border-white/10 py-3 text-white outline-none focus:border-white transition-colors" placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Work Email</label>
                      <input required type="email" className="w-full bg-transparent border-b border-white/10 py-3 text-white outline-none focus:border-white transition-colors" placeholder="john@company.com" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Project Budget</label>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {["$5k - $10k", "$10k - $25k", "$25k - $50k", "$50k+"].map(budget => (
                        <button key={budget} type="button" className="px-4 py-2 rounded-full border border-white/10 text-xs font-bold hover:bg-white hover:text-black transition-all focus:bg-white focus:text-black">
                          {budget}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Message</label>
                    <textarea required rows={4} className="w-full bg-transparent border-b border-white/10 py-3 text-white outline-none focus:border-white transition-colors resize-none" placeholder="Tell us about your project..." />
                  </div>
                  <button type="submit" className="w-full py-6 bg-white text-black font-bold text-lg rounded-full hover:scale-[1.02] active:scale-[0.98] transition-all">
                    Send Inquiry
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PremiumAgencySite
