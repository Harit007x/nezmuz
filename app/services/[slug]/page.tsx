import React from "react"
import { Metadata } from "next"
import { notFound } from "next/navigation"
import { 
  Smartphone, Globe, Database, Cpu, Cloud, Layout, 
  ArrowRight, Shield, Zap, Rocket, CheckCircle2 
} from "lucide-react"
import Link from "next/link"
import KineticGrid from "@/components/satori-ui/kinetic-grid"
import SlideUpReveal from "@/components/satori-ui/slide-up-reveal"

// Full technology and service map for high-scale SEO targeting
const SERVICE_DATA: Record<string, any> = {
  "mobile-app-development": {
    title: "Next-Gen Mobile Engineering",
    description: "High-performance iOS, Android, and Cross-Platform applications for startups and global enterprises.",
    keywords: ["React Native", "Flutter", "iOS Development", "Android Development", "Mobile UI/UX"],
    features: [
      "Custom Native App Engineering",
      "Enterprise Mobility Solutions",
      "High-Performance Flutter Stacks",
      "React Native Agency Expertise",
      "App Store & Play Store Optimization"
    ],
    faqs: [
      { q: "Do you build native or cross-platform apps?", a: "We specialize in both. We use Flutter and React Native for extreme cross-platform performance, and Swift/Kotlin for mission-critical native performance." },
      { q: "How long does mobile development take?", a: "MVP timelines typically range from 8 to 12 weeks, while complex enterprise solutions scale accordingly." }
    ]
  },
  "flutter-development": {
    title: "High-Scale Flutter Ecosystems",
    description: "Expert Flutter developers building high-speed, beautiful cross-platform apps from a single codebase.",
    keywords: ["Flutter Developers", "Dart Programming", "Cross Platform UI", "Flutter for Enterprise"],
    features: [
      "Custom Flutter Widget Engineering",
      "High-Performance Dart Backend Integration",
      "Flutter Web & Desktop Expansion",
      "State Management (Provider, Bloc, Riverpod)",
      "Native Bridge Integration"
    ],
    faqs: [
      { q: "Why choose Flutter over React Native?", a: "Flutter offers superior UI consistency and performance for graphic-intensive applications due to its custom rendering engine." }
    ]
  },
  "react-native-development": {
    title: "React Native Enterprise Solutions",
    description: "Scalable React Native applications that deliver native-grade performance with web-like flexibility.",
    keywords: ["React Native Agency", "JavaScript Mobile Development", "Expo", "Native Modules"],
    features: [
      "React Native Performance Tuning",
      "Custom Native Module Development",
      "Seamless iOS & Android Deployment",
      "Enterprise JavaScript Architectures",
      "Code Reuse Optimization"
    ],
    faqs: [
      { q: "Can we migrate our web app to React Native?", a: "Yes, we can leverage your existing React expertise and business logic to accelerate mobile deployment." }
    ]
  },
  "nextjs-development": {
    title: "Next.js Enterprise Frameworks",
    description: "The world's most advanced Next.js engineering for high-scale web products and SaaS platforms.",
    keywords: ["Next.js Agency", "React Server Components", "Vercel Deployment", "SEO Optimized Web"],
    features: [
      "Server-Side Rendering (SSR) & Static Generation",
      "React Server Components (RSC) Implementation",
      "Vercel Infrastructure Optimization",
      "High-Performance Web Core Vitals",
      "Next.js App Router Architecture"
    ],
    faqs: [
      { q: "Is Next.js good for SEO?", a: "Next.js is the industry standard for SEO due to its powerful server-side rendering and automatic optimization capabilities." }
    ]
  },
  "ai-development": {
    title: "Agentic AI & Intelligence",
    description: "Advanced AI solutions including Agentic workflows, custom LLM training, and intelligent automation.",
    keywords: ["AI Development", "OpenAI Integration", "Agentic AI", "Machine Learning SaaS"],
    features: [
      "Custom AI Agent Orchestration",
      "LLM Integration (GPT-4, Claude, Gemini)",
      "Vector Database & RAG Implementation",
      "AI-Powered Workflow Automation",
      "Natural Language Product Interfaces"
    ],
    faqs: [
      { q: "What is Agentic AI?", a: "Agentic AI refers to systems that can autonomously complete complex multi-step tasks by reasoning and using tools, rather than just generating text." }
    ]
  },
  "backend-development": {
    title: "Cloud-Native Backend & APIs",
    description: "Robust server-side architectures built with Node.js, Python, and Go for extreme availability.",
    keywords: ["Node.js Backend", "Python Django", "Microservices", "REST & GraphQL APIs"],
    features: [
      "High-Availability Microservices",
      "Real-time WebSocket Infrastructure",
      "Secure REST & GraphQL API Design",
      "Database Optimization & Architecture",
      "Serverless & Edge Computing"
    ],
    faqs: [
      { q: "Which backend stack is best for my app?", a: "We choose the stack based on your needs: Node.js for real-time speed, or Python for data-heavy and AI-integrated applications." }
    ]
  }
}

// Map alias slugs to main data categories
const SLUG_MAP: Record<string, string> = {
  "react-native-development": "react-native-development",
  "flutter-development": "flutter-development",
  "ios-development": "mobile-app-development",
  "android-development": "mobile-app-development",
  "nextjs-development": "nextjs-development",
  "web-development": "nextjs-development",
  "backend-development": "backend-development",
  "ai-development": "ai-development",
  "saas-development": "nextjs-development",
  "mobile-app-development": "mobile-app-development",
  "cloud-devops": "backend-development", // We'll expand this later if needed
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const dataKey = SLUG_MAP[slug]
  const service = SERVICE_DATA[dataKey]

  if (!service) return { title: "Service Not Found" }

  return {
    title: `${service.title} | Nezmuz Engineering`,
    description: service.description,
    keywords: service.keywords,
  }
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const dataKey = SLUG_MAP[slug]
  const service = SERVICE_DATA[dataKey]

  if (!service) notFound()

  return (
    <KineticGrid globalColor="monochrome" className="min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <Link href="/services" className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-zinc-500 hover:text-white transition-colors mb-12">
           &larr; All Services
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight leading-[1] mb-6">
               {service.title}
            </h1>
            <p className="text-base md:text-lg text-zinc-400 font-medium leading-relaxed mb-10">
               {service.description}
            </p>

            <div className="grid grid-cols-1 gap-3 mb-10">
               {service.features.map((feature: string, i: number) => (
                 <div key={i} className="flex items-center gap-3 p-3.5 rounded-xl bg-white/5 border border-white/10">
                    <CheckCircle2 size={16} className="text-blue-500 flex-shrink-0" />
                    <span className="text-xs font-bold text-zinc-200">{feature}</span>
                 </div>
               ))}
            </div>

            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black text-sm font-bold rounded-full hover:scale-105 active:scale-95 transition-all">
               Start a {service.title.split(' ')[0]} Project <ArrowRight size={16} />
            </Link>
          </div>

          <div className="space-y-10">
            <div className="p-6 md:p-10 rounded-[2.5rem] bg-zinc-900/10 border border-white/5">
               <h2 className="text-lg font-bold mb-6">Expertise</h2>
               <div className="flex flex-wrap gap-2">
                  {service.keywords.map((k: string) => (
                    <span key={k} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold uppercase tracking-widest text-zinc-500">
                       {k}
                    </span>
                  ))}
               </div>
            </div>

            <div className="space-y-6">
               <h2 className="text-lg font-bold">Insights</h2>
               {service.faqs.map((faq: any, i: number) => (
                 <div key={i} className="space-y-1">
                    <h3 className="text-sm font-bold text-white">{faq.q}</h3>
                    <p className="text-xs md:text-sm text-zinc-400 leading-relaxed">{faq.a}</p>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </div>
    </KineticGrid>
  )
}
