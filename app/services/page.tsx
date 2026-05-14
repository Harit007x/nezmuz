"use client"

import React from "react"
import { motion } from "motion/react"
import { 
  Smartphone, 
  Globe, 
  Layers, 
  Cpu, 
  Zap, 
  Shield, 
  Rocket, 
  Settings,
  Database,
  Code2,
  LineChart,
  Terminal,
  Cloud,
  Layout,
  MessageSquare,
  Search,
  Activity,
  Workflow,
  Lock,
  ArrowRight
} from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import SlideUpReveal from "@/components/satori-ui/slide-up-reveal"
import KineticGrid from "@/components/satori-ui/kinetic-grid"

const ServicesPage: React.FC = () => {
  const categories = [
    {
      id: "mobile",
      title: "Next-Gen Mobile Engineering",
      icon: <Smartphone className="w-10 h-10" />,
      description: "Crafting fluid, native-feel experiences across iOS & Android with a focus on extreme performance and user delight.",
      tech: ["Flutter", "React Native", "Swift", "Kotlin", "Java", "Objective-C"],
      services: [
        "React Native Enterprise Solutions", "High-Scale Flutter Ecosystems", "Native iOS (Swift) Engineering", "Native Android (Kotlin) Systems",
        "Cross-Platform Migration", "IoT & Wearable App Development", "OTT & Smart TV Platforms", "FinTech & Secure Banking Apps",
        "Healthcare & HIPAA Platforms", "E-Commerce Hyper-Growth Apps", "Social & Real-time Media", "On-Demand Scalable Solutions"
      ]
    },
    {
      id: "web",
      title: "High-Performance Web Systems",
      icon: <Globe className="w-10 h-10" />,
      description: "Engineering lightning-fast web applications and scalable SaaS platforms built for the modern internet.",
      tech: ["Next.js", "React.js", "TypeScript", "Tailwind CSS", "Three.js", "WebAssembly"],
      services: [
        "Next.js Enterprise Frameworks", "Modern React.js Applications", "Progressive Web Apps (PWA)", "Global SaaS Platforms",
        "Corporate Web Architectures", "High-Conversion Landing Funnels", "Custom ERP & CRM Engines", "Performance Dashboards",
        "Multi-Vendor Marketplaces", "Real-time Booking Systems", "Secure Web Portals", "FinTech Web Engineering"
      ]
    },
    {
      id: "backend",
      title: "Cloud-Native Backend & APIs",
      icon: <Database className="w-10 h-10" />,
      description: "Robust, resilient server-side architectures designed to handle millions of requests with zero downtime.",
      tech: ["Node.js", "Python", "Go", "PostgreSQL", "MongoDB", "Redis"],
      services: [
        "Scalable Node.js Microservices", "Python & AI Backend Systems", "FastAPI & Go Core Engineering", "Resilient API Architectures",
        "GraphQL & RESTful Design", "Real-time Data Streaming", "Global Payment Systems", "Database Design & Optimization",
        "Identity & Access Management", "Legacy Cloud Migration", "Search Engine Optimization (SEO) Tech", "Enterprise CMS"
      ]
    },
    {
      id: "ai",
      title: "Agentic AI & Intelligence",
      icon: <Cpu className="w-10 h-10" />,
      description: "Transforming businesses with autonomous AI agents, custom LLM pipelines, and intelligent automation.",
      tech: ["OpenAI", "LangChain", "PyTorch", "TensorFlow", "HuggingFace", "Vector DBs"],
      services: [
        "Custom AI Agent Orchestration", "Enterprise LLM Integrations", "Generative AI Product Design", "AI-Powered SaaS Growth",
        "Intelligent Chatbots & Assistants", "Autonomous Workflow Systems", "Predictive Analytics Models", "AI Decision Dashboards",
        "Smart Recommendation Engines", "Neural Network Engineering", "Cognitive Data Analytics", "Natural Language Systems"
      ]
    },
    {
      id: "cloud",
      title: "DevOps & Global Infrastructure",
      icon: <Cloud className="w-10 h-10" />,
      description: "Automated, secure, and scalable cloud environments that power your global digital presence.",
      tech: ["AWS", "Docker", "Kubernetes", "Vercel", "Terraform", "GitHub Actions"],
      services: [
        "AWS Global Infrastructure", "CI/CD Pipeline Automation", "Kubernetes Cloud Orchestration", "Enterprise Security Hardening",
        "Autoscaling Cloud Systems", "Serverless Edge Computing", "Performance Infrastructure Tuning", "Cloud Cost Engineering",
        "Real-time Monitoring & Alerting", "Disaster Recovery Systems", "Edge Deployment (Vercel/Netlify)", "Database Auto-Scaling"
      ]
    },
    {
      id: "design",
      title: "Strategic UI/UX & Motion",
      icon: <Layout className="w-10 h-10" />,
      description: "Cinematic digital interfaces that merge strategic brand storytelling with flawless user interaction.",
      tech: ["Figma", "Adobe CC", "Framer", "Spline", "Principle"],
      services: [
        "Product Design Strategy", "Mobile App UI/UX Engineering", "Enterprise Dashboard Design", "Global Design Systems",
        "Interactive Motion Design", "High-Fidelity Prototyping", "User Behavior Analysis", "Brand Identity Systems"
      ]
    },
    {
      id: "marketing",
      title: "Performance Growth & Content",
      icon: <LineChart className="w-10 h-10" />,
      description: "Scaling your product with data-driven performance marketing and premium content delivery.",
      tech: ["HubSpot", "Mailchimp", "Klaviyo", "SEO", "CDN"],
      services: [
        "Content Distribution Strategy", "Premium Brand Storytelling", "Automated Email Ecosystems", "Growth Retention Funnels",
        "Technical SEO Engineering", "Global Performance SEM", "Content Marketing Engines", "CDN Delivery Optimization",
        "Social Media Growth Tech", "CRM Automation & Scaling", "A/B Testing Frameworks", "Omnichannel Growth Tech"
      ]
    }
  ]

  return (
    <KineticGrid globalColor="monochrome" className="min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="max-w-4xl mb-20">
          <motion.span 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-[10px] font-bold uppercase tracking-[0.4em] text-blue-500 block mb-4"
          >
            Digital Product Engineering
          </motion.span>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1] mb-6">
            Comprehensive <br /> <span className="text-zinc-600">Technology Ecosystem.</span>
          </h1>
          <p className="text-base md:text-lg text-zinc-400 font-medium leading-relaxed max-w-2xl">
            We partner with startups and global enterprises to engineer scalable, future-proof digital solutions. Our services are designed to turn complex challenges into competitive advantages.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-10">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.05 }}
              className="group relative rounded-[2.5rem] border border-white/5 bg-zinc-900/10 p-8 md:p-12 overflow-hidden hover:border-white/20 transition-all"
            >
              {/* Dynamic Glow */}
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-white/10 transition-colors" />
              
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-16">
                <div className="lg:col-span-1">
                  <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white mb-8 group-hover:scale-110 transition-transform">
                    {cat.icon}
                  </div>
                  <h2 className="text-3xl font-bold tracking-tight mb-4">{cat.title}</h2>
                  <p className="text-base text-zinc-400 font-medium leading-relaxed mb-8">{cat.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {cat.tech.map(t => (
                      <span key={t} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold uppercase tracking-widest text-zinc-500">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="lg:col-span-2">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-3">
                    {cat.services.map((service, sIdx) => (
                      <div key={sIdx} className="flex items-center gap-4 group/item">
                        <div className="w-1 h-1 rounded-full bg-blue-500/50 group-hover/item:bg-blue-500 transition-colors" />
                        <span className="text-base font-bold text-zinc-400 group-hover/item:text-white transition-colors">{service}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-12 pt-8 border-t border-white/5">
                    <Link 
                      href={`/services/${cat.id}-development`}
                      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.3em] text-white hover:gap-4 transition-all"
                    >
                      Learn more about {cat.title} <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA / Keywords Semantic Area */}
        <section className="mt-40 pt-20 border-t border-white/5 text-center">
          <h3 className="text-2xl font-bold mb-8">Empowering industries worldwide.</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "USA", "Canada", "UK", "Australia", "UAE", "Singapore", "India", "Germany", "Global Startups", "Enterprise Teams"
            ].map(region => (
              <span key={region} className="px-4 py-2 bg-white/5 rounded-full text-[10px] font-bold uppercase tracking-widest text-zinc-500">
                {region}
              </span>
            ))}
          </div>
          <div className="mt-20">
             <Link href="/contact" className="px-12 py-5 bg-white text-black font-bold rounded-full hover:scale-105 active:scale-95 transition-all inline-block">
               Start Your Global Project
             </Link>
          </div>
        </section>
      </div>
    </KineticGrid>
  )
}

export default ServicesPage
