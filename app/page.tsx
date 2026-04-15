"use client"
import React from "react"
import { motion } from "motion/react"
import {
  CheckCircle2,
  Code2,
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
  Link as LinkIcon,
  Code as CodeIcon,
  Mail,
  Linkedin,
  Github,
} from "lucide-react"
import BlurReveal from "@/components/satori-ui/blur-reveal"
import SlideUpReveal from "@/components/satori-ui/slide-up-reveal"
import KineticGrid from "@/components/satori-ui/kinetic-grid"

const ScalableWebApp: React.FC = () => {
  return (
    <KineticGrid
      globalColor="monochrome"
      className="relative flex min-h-screen flex-col overflow-x-hidden text-zinc-200 selection:bg-zinc-800 selection:text-zinc-100"
    >
      {/* Background Glow */}
      <div
        className="pointer-events-none absolute top-0 left-1/2 h-[500px] w-[1000px] -translate-x-1/2 opacity-20"
        style={{
          background:
            "radial-gradient(circle, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0) 70%)",
        }}
      ></div>

      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-white/[0.08] border-zinc-700/50 bg-zinc-950/60 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <div className="text-lg font-medium tracking-tighter text-zinc-100 uppercase">
            NEZMUZ
          </div>
          <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
            <a
              href="#services"
              className="transition-colors hover:text-zinc-100"
            >
              Services
            </a>
            <a
              href="#process"
              className="transition-colors hover:text-zinc-100"
            >
              Process
            </a>
            <a href="#work" className="transition-colors hover:text-zinc-100">
              Work
            </a>
          </nav>
          <a
            href="#contact"
            className="rounded-md bg-zinc-100 px-4 py-2 text-xs font-medium text-zinc-950 transition-colors hover:bg-zinc-200"
          >
            Book a Call
          </a>
        </div>
      </header>

      {/* 1. Hero Section */}
      <section className="relative mx-auto flex max-w-5xl flex-col items-center px-6 pt-32 pb-24 text-center md:pt-48 md:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
          }}
          className="mb-2 inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 backdrop-blur-sm"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-green-400" />
          </span>
          <BlurReveal
            className="text-[11px] tracking-widest text-white text-white/60 uppercase"
            speedReveal={3}
          >
            Accepting new projects
          </BlurReveal>
        </motion.div>
        <h1 className="max-w-4xl text-4xl leading-tight font-semibold tracking-tighter text-zinc-50 md:text-6xl lg:text-7xl">
          <SlideUpReveal
            split="words"
            stagger={0.08}
            className="justify-center"
          >
            We Build Scalable Web Applications with Real-World Integrations
          </SlideUpReveal>
        </h1>
        <BlurReveal
          className="mt-6 max-w-2xl text-base leading-relaxed font-normal text-zinc-200 md:text-lg"
          speedReveal={3}
        >
          From MVPs to production-ready systems - we help startups and
          businesses launch fast, integrate payments, and scale confidently.
        </BlurReveal>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
          className="mt-10 flex w-full flex-col gap-4 sm:w-auto sm:flex-row"
        >
          <a
            href="#contact"
            className="w-full rounded-md bg-zinc-100 px-6 py-3 text-center text-sm font-medium text-zinc-950 transition-colors hover:bg-zinc-200 sm:w-auto"
          >
            Get Started
          </a>
          <a
            href="#contact"
            className="w-full rounded-md border border-zinc-800 bg-zinc-950 px-6 py-3 text-center text-sm font-medium text-zinc-100 transition-colors hover:bg-zinc-900 sm:w-auto"
          >
            Book a Call
          </a>
        </motion.div>
      </section>

      {/* 2. Trust / Positioning Strip */}
      <div className="overflow-hidden border-y border-zinc-900 bg-zinc-950 py-8">
        <div className="mx-auto max-w-6xl px-6">
          <p className="mb-6 text-center text-sm font-medium text-zinc-300">
            Built with modern technologies. Designed for performance. Deployed
            for scale.
          </p>
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 text-sm font-medium tracking-tight text-zinc-400">
            <span className="flex items-center gap-2">
              <CheckCircle2 size={18} className="text-zinc-200" />
              Fast delivery
            </span>
            <span className="flex items-center gap-2">
              <Code2 size={18} className="text-zinc-200" />
              Clean architecture
            </span>
            <span className="flex items-center gap-2">
              <Server size={18} className="text-zinc-200" />
              Production-ready systems
            </span>
            <span className="flex items-center gap-2">
              <Cloud size={18} className="text-zinc-200" />
              AWS-powered infrastructure
            </span>
          </div>
        </div>
      </div>

      {/* 3. Services Section */}
      <section
        id="services"
        className="mx-auto w-full max-w-6xl px-6 py-24 md:py-32"
      >
        <div className="mb-16 md:mb-24">
          <h2 className="text-3xl font-semibold tracking-tighter text-zinc-50 md:text-4xl">
            What We Do
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          {/* Service 1 */}
          <div className="group flex h-full flex-col rounded-2xl border border-white/[0.08] border-zinc-700/50 bg-zinc-950/60 p-8 backdrop-blur-xl transition-all duration-300 hover:border-zinc-700 hover:bg-white/[0.06] hover:shadow-[0px_0px_27px_17px_rgba(255,_255,_255,_0.1)]">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900 text-zinc-100">
              <Terminal size={24} />
            </div>
            <h3 className="mb-3 text-xl font-medium tracking-tight text-zinc-100">
              Fullstack Web Development
            </h3>
            <p className="mb-8 flex-grow text-sm leading-relaxed text-zinc-200">
              We design and develop end-to-end web applications tailored to your
              business needs.
            </p>
            <ul className="space-y-3 text-sm font-medium text-zinc-300">
              <li className="flex items-center gap-3">
                <span className="h-1 w-1 rounded-full bg-zinc-700"></span>
                Frontend (React, Next.js)
              </li>
              <li className="flex items-center gap-3">
                <span className="h-1 w-1 rounded-full bg-zinc-700"></span>
                Backend APIs (FastAPI, Node.js)
              </li>
              <li className="flex items-center gap-3">
                <span className="h-1 w-1 rounded-full bg-zinc-700"></span>
                Database design (PostgreSQL, MongoDB)
              </li>
            </ul>
          </div>

          {/* Service 2 */}
          <div className="group flex h-full flex-col rounded-2xl border border-white/[0.08] border-zinc-700/50 bg-zinc-950/60 p-8 backdrop-blur-xl transition-all duration-300 hover:border-zinc-700 hover:bg-white/[0.06] hover:shadow-[0px_0px_27px_17px_rgba(255,_255,_255,_0.1)]">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900 text-zinc-100">
              <CreditCard size={24} />
            </div>
            <h3 className="mb-3 text-xl font-medium tracking-tight text-zinc-100">
              Payment & Integration Systems
            </h3>
            <p className="mb-8 flex-grow text-sm leading-relaxed text-zinc-200">
              We build systems that handle real-world transactions seamlessly.
            </p>
            <ul className="space-y-3 text-sm font-medium text-zinc-300">
              <li className="flex items-center gap-3">
                <span className="h-1 w-1 rounded-full bg-zinc-700"></span>
                Payment gateway integrations
              </li>
              <li className="flex items-center gap-3">
                <span className="h-1 w-1 rounded-full bg-zinc-700"></span>
                QR-based payment flows
              </li>
              <li className="flex items-center gap-3">
                <span className="h-1 w-1 rounded-full bg-zinc-700"></span>POS &
                third-party integrations
              </li>
            </ul>
          </div>

          {/* Service 3 */}
          <div className="group flex h-full flex-col rounded-2xl border border-white/[0.08] border-zinc-700/50 bg-zinc-950/60 p-8 backdrop-blur-xl transition-all duration-300 hover:border-zinc-700 hover:bg-white/[0.06] hover:shadow-[0px_0px_27px_17px_rgba(255,_255,_255,_0.1)]">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900 text-zinc-100">
              <Rocket size={24} />
            </div>
            <h3 className="mb-3 text-xl font-medium tracking-tight text-zinc-100">
              MVP Development for Startups
            </h3>
            <p className="mb-8 flex-grow text-sm leading-relaxed text-zinc-200">
              Launch your idea fast with a scalable foundation.
            </p>
            <ul className="space-y-3 text-sm font-medium text-zinc-300">
              <li className="flex items-center gap-3">
                <span className="h-1 w-1 rounded-full bg-zinc-700"></span>Rapid
                prototyping
              </li>
              <li className="flex items-center gap-3">
                <span className="h-1 w-1 rounded-full bg-zinc-700"></span>
                Scalable backend architecture
              </li>
              <li className="flex items-center gap-3">
                <span className="h-1 w-1 rounded-full bg-zinc-700"></span>Clean
                UI systems
              </li>
            </ul>
          </div>

          {/* Service 4 */}
          <div className="group flex h-full flex-col rounded-2xl border border-white/[0.08] border-zinc-700/50 bg-zinc-950/60 p-8 backdrop-blur-xl transition-all duration-300 hover:border-zinc-700 hover:bg-white/[0.06] hover:shadow-[0px_0px_27px_17px_rgba(255,_255,_255,_0.1)]">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900 text-zinc-100">
              <CloudCheck size={24} />
            </div>
            <h3 className="mb-3 text-xl font-medium tracking-tight text-zinc-100">
              Cloud Deployment & DevOps
            </h3>
            <p className="mb-8 flex-grow text-sm leading-relaxed text-zinc-200">
              We ensure your product runs smoothly in production.
            </p>
            <ul className="space-y-3 text-sm font-medium text-zinc-300">
              <li className="flex items-center gap-3">
                <span className="h-1 w-1 rounded-full bg-zinc-700"></span>AWS
                (EC2, S3, RDS, CloudFront)
              </li>
              <li className="flex items-center gap-3">
                <span className="h-1 w-1 rounded-full bg-zinc-700"></span>CI/CD
                pipelines
              </li>
              <li className="flex items-center gap-3">
                <span className="h-1 w-1 rounded-full bg-zinc-700"></span>
                Performance optimization
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 4. How We Work */}
      <section
        id="process"
        className="border-y border-zinc-900 bg-zinc-950/80 px-6 py-24"
      >
        <div className="mx-auto w-full max-w-6xl">
          <h2 className="mb-16 text-3xl font-semibold tracking-tighter text-zinc-50 md:text-4xl">
            Our Process
          </h2>

          <div className="relative grid grid-cols-1 gap-8 md:grid-cols-5">
            {/* Connecting Line (Desktop) */}
            <div className="absolute top-6 right-6 left-6 -z-10 hidden h-px bg-zinc-800 md:block"></div>

            {/* Step 1 */}
            <div className="relative">
              <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-full border border-zinc-800 bg-zinc-950 text-sm font-medium text-zinc-100 md:mx-0">
                1
              </div>
              <h4 className="mb-2 text-center text-base font-medium tracking-tight text-zinc-100 md:text-left">
                Understand
              </h4>
              <p className="text-center text-xs leading-relaxed text-zinc-300 md:text-left">
                We deeply understand your product, users, and business goals.
              </p>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-full border border-zinc-800 bg-zinc-950 text-sm font-medium text-zinc-100 md:mx-0">
                2
              </div>
              <h4 className="mb-2 text-center text-base font-medium tracking-tight text-zinc-100 md:text-left">
                Plan
              </h4>
              <p className="text-center text-xs leading-relaxed text-zinc-300 md:text-left">
                We design scalable architecture and define clear milestones.
              </p>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-full border border-zinc-800 bg-zinc-950 text-sm font-medium text-zinc-100 md:mx-0">
                3
              </div>
              <h4 className="mb-2 text-center text-base font-medium tracking-tight text-zinc-100 md:text-left">
                Build
              </h4>
              <p className="text-center text-xs leading-relaxed text-zinc-300 md:text-left">
                We develop fast, clean, and production-ready systems.
              </p>
            </div>

            {/* Step 4 */}
            <div className="relative">
              <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-full border border-zinc-800 bg-zinc-950 text-sm font-medium text-zinc-100 md:mx-0">
                4
              </div>
              <h4 className="mb-2 text-center text-base font-medium tracking-tight text-zinc-100 md:text-left">
                Deploy
              </h4>
              <p className="text-center text-xs leading-relaxed text-zinc-300 md:text-left">
                We deploy on AWS with performance, security, and reliability in
                mind.
              </p>
            </div>

            {/* Step 5 */}
            <div className="relative">
              <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-full border border-zinc-800 bg-zinc-950 text-sm font-medium text-zinc-100 md:mx-0">
                5
              </div>
              <h4 className="mb-2 text-center text-base font-medium tracking-tight text-zinc-100 md:text-left">
                Scale
              </h4>
              <p className="text-center text-xs leading-relaxed text-zinc-300 md:text-left">
                We support you in scaling your product as your business grows.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5 & 6. Tech Stack & Why Us (Combined Layout) */}
      <section className="mx-auto w-full max-w-6xl px-6 py-24 md:py-32">
        <div className="grid grid-cols-1 gap-16 md:gap-24 lg:grid-cols-2">
          {/* Tech Stack */}
          <div>
            <h2 className="mb-10 text-2xl font-semibold tracking-tighter text-zinc-50 md:text-3xl">
              Our Tech Stack
            </h2>
            <div className="space-y-8">
              <div>
                <h4 className="mb-4 text-xs font-medium tracking-wider text-zinc-300 uppercase">
                  Frontend
                </h4>
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-md border border-zinc-800 bg-zinc-900/50 px-3 py-1.5 text-xs text-zinc-100">
                    React.js
                  </span>
                  <span className="rounded-md border border-zinc-800 bg-zinc-900/50 px-3 py-1.5 text-xs text-zinc-100">
                    Next.js
                  </span>
                  <span className="rounded-md border border-zinc-800 bg-zinc-900/50 px-3 py-1.5 text-xs text-zinc-100">
                    Tailwind CSS
                  </span>
                  <span className="rounded-md border border-zinc-800 bg-zinc-900/50 px-3 py-1.5 text-xs text-zinc-100">
                    shadcn UI
                  </span>
                </div>
              </div>
              <div>
                <h4 className="mb-4 text-xs font-medium tracking-wider text-zinc-300 uppercase">
                  Backend
                </h4>
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-md border border-zinc-800 bg-zinc-900/50 px-3 py-1.5 text-xs text-zinc-100">
                    FastAPI
                  </span>
                  <span className="rounded-md border border-zinc-800 bg-zinc-900/50 px-3 py-1.5 text-xs text-zinc-100">
                    Node.js
                  </span>
                  <span className="rounded-md border border-zinc-800 bg-zinc-900/50 px-3 py-1.5 text-xs text-zinc-100">
                    Express.js
                  </span>
                  <span className="rounded-md border border-zinc-800 bg-zinc-900/50 px-3 py-1.5 text-xs text-zinc-100">
                    Django
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h4 className="mb-4 text-xs font-medium tracking-wider text-zinc-300 uppercase">
                    Database
                  </h4>
                  <div className="flex flex-col gap-2">
                    <span className="flex items-center gap-2 text-sm text-zinc-200">
                      <span className="h-1 w-1 rounded-full bg-zinc-700"></span>{" "}
                      PostgreSQL
                    </span>
                    <span className="flex items-center gap-2 text-sm text-zinc-200">
                      <span className="h-1 w-1 rounded-full bg-zinc-700"></span>{" "}
                      MongoDB
                    </span>
                  </div>
                </div>
                <div>
                  <h4 className="mb-4 text-xs font-medium tracking-wider text-zinc-300 uppercase">
                    Design
                  </h4>
                  <div className="flex flex-col gap-2">
                    <span className="flex items-center gap-2 text-sm text-zinc-200">
                      <span className="h-1 w-1 rounded-full bg-zinc-700"></span>{" "}
                      Figma
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="mb-4 text-xs font-medium tracking-wider text-zinc-300 uppercase">
                  Cloud
                </h4>
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-md border border-zinc-800 bg-zinc-900/50 px-3 py-1.5 text-xs text-zinc-100">
                    AWS (EC2, S3, RDS, CloudFront)
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Why Work With Us */}
          <div>
            <h2 className="mb-10 text-2xl font-semibold tracking-tighter text-zinc-50 md:text-3xl">
              Why Work With Us
            </h2>
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="mt-1 flex-shrink-0">
                  <ShieldCheck size={20} className="text-zinc-100" />
                </div>
                <div>
                  <h4 className="mb-1 text-base font-medium tracking-tight text-zinc-100">
                    Production-Focused Development
                  </h4>
                  <p className="text-sm leading-relaxed text-zinc-300">
                    We don't just build features — we build systems that work in
                    real-world conditions.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="mt-1 flex-shrink-0">
                  <Zap size={20} className="text-zinc-100" />
                </div>
                <div>
                  <h4 className="mb-1 text-base font-medium tracking-tight text-zinc-100">
                    Speed + Quality
                  </h4>
                  <p className="text-sm leading-relaxed text-zinc-300">
                    Fast delivery without compromising clean architecture.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="mt-1 flex-shrink-0">
                  <Share2 size={20} className="text-zinc-100" />
                </div>
                <div>
                  <h4 className="mb-1 text-base font-medium tracking-tight text-zinc-100">
                    Real Integration Experience
                  </h4>
                  <p className="text-sm leading-relaxed text-zinc-300">
                    We've worked with payment systems, QR flows, and POS
                    integrations.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="mt-1 flex-shrink-0">
                  <TrendingUp size={20} className="text-zinc-100" />
                </div>
                <div>
                  <h4 className="mb-1 text-base font-medium tracking-tight text-zinc-100">
                    Scalable Systems
                  </h4>
                  <p className="text-sm leading-relaxed text-zinc-300">
                    Built to grow with your business — not break under pressure.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Case Study Section */}
      <section
        id="work"
        className="border-y border-zinc-900 bg-zinc-950/80 px-6 py-24"
      >
        <div className="mx-auto w-full max-w-6xl">
          <h2 className="mb-16 text-3xl font-semibold tracking-tighter text-zinc-50 md:text-4xl">
            Selected Work
          </h2>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* Case Study 1 */}
            <div className="group overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/40 transition-colors hover:border-zinc-700">
              <div className="relative flex h-48 w-full items-center justify-center overflow-hidden border-b border-zinc-800 bg-zinc-900/50 bg-zinc-950 p-6">
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage:
                      "radial-gradient(#fff 1px, transparent 1px)",
                    backgroundSize: "16px 16px",
                  }}
                ></div>
                <Wallet size={48} className="relative z-10 text-zinc-700" />
              </div>
              <div className="border-zinc-700/50 bg-zinc-950/60 p-8 backdrop-blur-xl transition-colors hover:bg-white/[0.06] hover:shadow-[0px_0px_27px_17px_rgba(255,_255,_255,_0.1)]">
                <h3 className="mb-3 text-xl font-medium tracking-tight text-zinc-100">
                  Payment Integration System
                </h3>
                <p className="mb-6 text-sm leading-relaxed text-zinc-200">
                  Built a full payment flow with QR-based transactions and
                  gateway integrations.
                </p>
                <div className="flex flex-wrap gap-2 text-xs font-medium text-zinc-300">
                  <span className="rounded-md border border-zinc-800 bg-zinc-900 px-2.5 py-1">
                    Real-time payment handling
                  </span>
                  <span className="rounded-md border border-zinc-800 bg-zinc-900 px-2.5 py-1">
                    Secure API architecture
                  </span>
                  <span className="rounded-md border border-zinc-800 bg-zinc-900 px-2.5 py-1">
                    Scalable backend system
                  </span>
                </div>
              </div>
            </div>

            {/* Case Study 2 */}
            <div className="group overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/40 transition-colors hover:border-zinc-700">
              <div className="relative flex h-48 w-full items-center justify-center overflow-hidden border-b border-zinc-800 bg-zinc-900/50 bg-zinc-950 p-6">
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage:
                      "radial-gradient(#fff 1px, transparent 1px)",
                    backgroundSize: "16px 16px",
                  }}
                ></div>
                <Store size={48} className="relative z-10 text-zinc-700" />
              </div>
              <div className="border-zinc-700/50 bg-zinc-950/60 p-8 backdrop-blur-xl transition-colors hover:bg-white/[0.06]">
                <h3 className="mb-3 text-xl font-medium tracking-tight text-zinc-100">
                  POS + Waiter App Integration
                </h3>
                <p className="mb-6 text-sm leading-relaxed text-zinc-200">
                  Developed a system for handling payments and order workflows.
                </p>
                <div className="flex flex-wrap gap-2 text-xs font-medium text-zinc-300">
                  <span className="rounded-md border border-zinc-800 bg-zinc-900 px-2.5 py-1">
                    Multi-payment support
                  </span>
                  <span className="rounded-md border border-zinc-800 bg-zinc-900 px-2.5 py-1">
                    QR & card integration
                  </span>
                  <span className="rounded-md border border-zinc-800 bg-zinc-900 px-2.5 py-1">
                    Clean UI for operations
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Pricing / Engagement */}
      <section className="mx-auto w-full max-w-6xl px-6 py-24 md:py-32">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-semibold tracking-tighter text-zinc-50 md:text-4xl">
            Engagement Models
          </h2>
          <p className="text-sm font-medium text-zinc-300">
            Custom pricing based on project scope
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {/* Model 1 */}
          <div className="flex flex-col items-center rounded-2xl border border-zinc-800 bg-zinc-950 p-8 text-center">
            <Rocket size={24} className="mb-6 text-zinc-100" />
            <h3 className="mb-3 text-lg font-medium tracking-tight text-zinc-100">
              MVP Build
            </h3>
            <p className="text-sm text-zinc-300">
              Perfect for startups launching their first version.
            </p>
          </div>

          {/* Model 2 */}
          <div className="relative flex flex-col items-center overflow-hidden rounded-2xl border border-zinc-700 bg-zinc-950 p-8 text-center">
            <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-transparent via-zinc-400 to-transparent opacity-50"></div>
            <Layers size={24} className="mb-6 text-zinc-100" />
            <h3 className="mb-3 text-lg font-medium tracking-tight text-zinc-100">
              Full Product Development
            </h3>
            <p className="text-sm text-zinc-200">
              Complete end-to-end system development.
            </p>
          </div>

          {/* Model 3 */}
          <div className="flex flex-col items-center rounded-2xl border border-zinc-800 bg-zinc-950 p-8 text-center">
            <Infinity size={24} className="mb-6 text-zinc-100" />
            <h3 className="mb-3 text-lg font-medium tracking-tight text-zinc-100">
              Ongoing Development
            </h3>
            <p className="text-sm text-zinc-300">
              Continuous improvements, scaling, and support.
            </p>
          </div>
        </div>
      </section>

      {/* 9. Call To Action */}
      <section
        id="contact"
        className="relative overflow-hidden border-t border-zinc-900 px-6 py-32"
      >
        <div
          className="pointer-events-none absolute bottom-0 left-1/2 h-[400px] w-[800px] -translate-x-1/2 opacity-10"
          style={{
            background:
              "radial-gradient(circle, rgba(255,255,255,0.2) 0%, rgba(0,0,0,0) 70%)",
          }}
        ></div>
        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <h2 className="mb-6 text-4xl font-semibold tracking-tighter text-zinc-50 md:text-5xl">
            Let's Build Something Powerful
          </h2>
          <p className="mb-10 text-base text-zinc-200">
            Have an idea or need to scale your product? Let's talk and make it
            happen.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="#"
              className="rounded-md bg-zinc-100 px-8 py-3.5 text-sm font-medium text-zinc-950 transition-colors hover:bg-zinc-200"
            >
              Book a Call
            </a>
            <a
              href="#"
              className="rounded-md border border-zinc-800 bg-zinc-900 px-8 py-3.5 text-sm font-medium text-zinc-100 transition-colors hover:bg-zinc-800"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* 10. Footer */}
      <footer className="border-t border-zinc-900 bg-zinc-950 px-6 py-12">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
          <div className="text-base font-medium tracking-tighter text-zinc-100 uppercase">
            NEZMUZ
          </div>

          <nav className="flex gap-6 text-sm font-medium text-zinc-300">
            <a href="#" className="transition-colors hover:text-zinc-100">
              About
            </a>
            <a
              href="#services"
              className="transition-colors hover:text-zinc-100"
            >
              Services
            </a>
            <a
              href="#contact"
              className="transition-colors hover:text-zinc-100"
            >
              Contact
            </a>
          </nav>

          <div className="flex gap-6 text-sm font-medium text-zinc-300">
            <a
              href="#"
              className="flex items-center gap-2 transition-colors hover:text-zinc-100"
            >
              <Linkedin size={16} /> LinkedIn
            </a>
            <a
              href="#"
              className="flex items-center gap-2 transition-colors hover:text-zinc-100"
            >
              <Github size={16} /> GitHub
            </a>
            <a
              href="mailto:hello@example.com"
              className="flex items-center gap-2 transition-colors hover:text-zinc-100"
            >
              <Mail size={16} /> Email
            </a>
          </div>
        </div>
      </footer>
    </KineticGrid>
  )
}

export default ScalableWebApp
