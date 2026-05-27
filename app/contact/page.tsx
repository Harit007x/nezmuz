"use client"
import React, { useState } from "react"
import { PageLayout } from "@/components/page-layout"
import { ArrowRight, Send, Smartphone, Globe, Server, Bot, Check, AlertCircle } from "lucide-react"
import SlideUp from "@/components/satori-ui/slide-up"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function ContactPage() {
  // Tabs State: "message" or "estimator"
  const [activeTab, setActiveTab] = useState<"message" | "estimator">("message")

  // Quick Message Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    interest: "",
    message: "",
  })

  // Estimator Form State
  const [estimatorStep, setEstimatorStep] = useState(1)
  const [estimatorData, setEstimatorData] = useState({
    platforms: {
      web: false,
      mobile: false,
      cloud: false,
      ai: false,
    },
    complexity: "premium" as "basic" | "premium" | "enterprise",
    timeline: "standard" as "flexible" | "standard" | "rush",
    name: "",
    email: "",
    notes: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // Estimator Price Calculation Logic
  const basePrices = { web: 8000, mobile: 10000, cloud: 6000, ai: 7500 }
  const complexityMultipliers = { basic: 1.0, premium: 1.25, enterprise: 1.5 }
  const timelineMultipliers = { flexible: 0.9, standard: 1.0, rush: 1.3 }

  const calculateEstimateRange = () => {
    let baseSum = 0
    if (estimatorData.platforms.web) baseSum += basePrices.web
    if (estimatorData.platforms.mobile) baseSum += basePrices.mobile
    if (estimatorData.platforms.cloud) baseSum += basePrices.cloud
    if (estimatorData.platforms.ai) baseSum += basePrices.ai

    // Fallback default base if nothing is selected
    if (baseSum === 0) baseSum = 5000

    const compMultiplier = complexityMultipliers[estimatorData.complexity]
    const timeMultiplier = timelineMultipliers[estimatorData.timeline]

    const min = Math.round(baseSum * compMultiplier * timeMultiplier)
    const max = Math.round(min * 1.35)

    return `$${min.toLocaleString()} - $${max.toLocaleString()}`
  }

  const currentEstimateRange = calculateEstimateRange()

  const handleMessageSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const result = await res.json()

      if (!res.ok) {
        throw new Error(result.error || "Something went wrong. Please try again.")
      }

      setIsSubmitted(true)
    } catch (err: any) {
      console.error(err)
      setError(err.message || "Failed to send message. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleEstimatorSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    try {
      const payload = {
        name: estimatorData.name,
        email: estimatorData.email,
        platforms: estimatorData.platforms,
        complexity: estimatorData.complexity,
        timeline: estimatorData.timeline,
        notes: estimatorData.notes,
        estimateRange: currentEstimateRange,
      }

      const res = await fetch("/api/estimate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      })

      const result = await res.json()

      if (!res.ok) {
        throw new Error(result.error || "Something went wrong. Please try again.")
      }

      setIsSubmitted(true)
    } catch (err: any) {
      console.error(err)
      setError(err.message || "Failed to submit estimate request. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const togglePlatform = (platform: "web" | "mobile" | "cloud" | "ai") => {
    setEstimatorData(prev => ({
      ...prev,
      platforms: {
        ...prev.platforms,
        [platform]: !prev.platforms[platform],
      },
    }))
  }

  return (
    <PageLayout>
      <section className="mx-auto w-full max-w-6xl px-6 py-32 border-t border-white/[0.05]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <SlideUp>
            <p className="text-[10px] font-bold tracking-widest text-emerald-500 uppercase mb-4">START A CONVERSATION</p>
            <h1 className="text-4xl font-semibold tracking-tighter text-zinc-50 md:text-6xl mb-6">
              Ready to Build<br />the Future?
            </h1>
            <p className="text-sm text-zinc-400 max-w-md leading-relaxed mb-12">
              Whether you need a dedicated engineering team, a scalable cloud architecture, or a fluid mobile experience, we're ready to partner with you. Let us know what you're building below.
            </p>

            <div className="space-y-8">
              <div>
                <h4 className="text-[10px] font-bold tracking-widest text-zinc-500 uppercase mb-2">EMAIL INQUIRIES</h4>
                <a href="mailto:admin@zynetz.com" className="text-sm font-medium text-zinc-100 hover:text-white transition-colors">admin@zynetz.com</a>
              </div>
              <div>
                <h4 className="text-[10px] font-bold tracking-widest text-zinc-500 uppercase mb-2">GLOBAL HQ</h4>
                <p className="text-sm text-zinc-300">Ahmedabad, Gujarat<br /> India</p>
              </div>
              <div>
                <h4 className="text-[10px] font-bold tracking-widest text-zinc-500 uppercase mb-2">Whatsapp No</h4>
                <p className="text-sm text-zinc-300">+91 9274466461</p>
              </div>
            </div>
          </SlideUp>

          <SlideUp delay={0.15} className="rounded-3xl border border-white/[0.08] bg-zinc-950 p-8 md:p-12 flex flex-col">
            {/* Header Tabs */}
            <div className="flex rounded-lg bg-zinc-900/60 p-1 mb-8 border border-zinc-800/80">
              <button
                type="button"
                onClick={() => {
                  setActiveTab("message")
                  setIsSubmitted(false)
                  setError(null)
                }}
                className={`flex-1 py-2 text-xs font-semibold rounded-md transition-all ${
                  activeTab === "message"
                    ? "bg-zinc-800 text-zinc-50 shadow-sm"
                    : "text-zinc-400 hover:text-zinc-200"
                }`}
              >
                Quick Message
              </button>
              <button
                type="button"
                onClick={() => {
                  setActiveTab("estimator")
                  setIsSubmitted(false)
                  setError(null)
                }}
                className={`flex-1 py-2 text-xs font-semibold rounded-md transition-all ${
                  activeTab === "estimator"
                    ? "bg-zinc-800 text-zinc-50 shadow-sm"
                    : "text-zinc-400 hover:text-zinc-200"
                }`}
              >
                Project Planner (Estimator)
              </button>
            </div>

            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center flex-1 text-center py-12">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-500/20 text-green-400">
                  <Check size={24} />
                </div>
                <h3 className="text-2xl font-semibold text-zinc-50 mb-2">
                  {activeTab === "message" ? "Message Received" : "Project Plan Submitted"}
                </h3>
                <p className="text-sm text-zinc-400 max-w-xs">
                  {activeTab === "message"
                    ? "We'll be in touch shortly to discuss your project."
                    : "Our lead engineers are reviewing your custom roadmap. We will reach out to you within 24 hours."}
                </p>
              </div>
            ) : activeTab === "message" ? (
              /* Quick Message Form */
              <form onSubmit={handleMessageSubmit} className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-[10px] font-bold tracking-widest text-zinc-500 uppercase">Name</label>
                  <input
                    required
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    className="rounded-lg border border-zinc-800 bg-zinc-900/50 px-4 py-3 text-sm text-zinc-100 focus:border-zinc-500 focus:outline-none focus:ring-1 focus:ring-zinc-500 transition-all"
                    placeholder="John Doe"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-[10px] font-bold tracking-widest text-zinc-500 uppercase">Email</label>
                  <input
                    required
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    className="rounded-lg border border-zinc-800 bg-zinc-900/50 px-4 py-3 text-sm text-zinc-100 focus:border-zinc-500 focus:outline-none focus:ring-1 focus:ring-zinc-500 transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="interest" className="text-[10px] font-bold tracking-widest text-zinc-500 uppercase">Primary Interest</label>
                  <Select
                    value={formData.interest}
                    onValueChange={(val) => setFormData(prev => ({ ...prev, interest: val || "" }))}
                  >
                    <SelectTrigger id="interest" className="w-full">
                      <SelectValue placeholder="Select a service...">
                        {formData.interest ? (
                          formData.interest === "mobile" ? "Mobile App Development" :
                            formData.interest === "web" ? "Enterprise Web Systems" :
                              formData.interest === "cloud" ? "Cloud-Native Backend" :
                                formData.interest === "ai" ? "AI & Automation" :
                                  formData.interest === "other" ? "Other" :
                                    formData.interest
                        ) : undefined}
                      </SelectValue>
                    </SelectTrigger>
                    <SelectContent className="min-w-[200px]">
                      <SelectGroup>
                        <SelectItem value="mobile">Mobile App Development</SelectItem>
                        <SelectItem value="web">Enterprise Web Systems</SelectItem>
                        <SelectItem value="cloud">Cloud-Native Backend</SelectItem>
                        <SelectItem value="ai">AI & Automation</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-[10px] font-bold tracking-widest text-zinc-500 uppercase">Message</label>
                  <textarea
                    required
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                    className="rounded-lg border border-zinc-800 bg-zinc-900/50 px-4 py-3 text-sm text-zinc-100 focus:border-zinc-500 focus:outline-none focus:ring-1 focus:ring-zinc-500 transition-all resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                {error && (
                  <p className="text-xs text-red-400 font-medium bg-red-950/30 border border-red-900/50 rounded-lg p-3 flex items-center gap-2">
                    <AlertCircle size={14} /> {error}
                  </p>
                )}

                <button
                  disabled={isSubmitting}
                  type="submit"
                  className="mt-4 flex items-center justify-center gap-2 rounded-lg bg-zinc-100 px-6 py-3.5 text-sm font-semibold text-zinc-950 transition-all hover:bg-zinc-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send Message"} <ArrowRight size={16} />
                </button>
              </form>
            ) : (
              /* Interactive Project Cost Estimator Wizard */
              <form onSubmit={handleEstimatorSubmit} className="flex flex-col flex-1 gap-6 justify-between">
                <div>
                  {/* Step Indicators */}
                  <div className="flex items-center gap-2 mb-6">
                    {[1, 2, 3, 4].map((step) => (
                      <div key={step} className="flex-1 flex flex-col gap-1.5">
                        <div className={`h-1 rounded-full transition-all ${
                          step <= estimatorStep ? "bg-blue-500" : "bg-zinc-800"
                        }`} />
                        <span className={`text-[9px] font-bold tracking-wider uppercase text-center ${
                          step === estimatorStep ? "text-blue-400" : "text-zinc-500"
                        }`}>
                          {step === 1 ? "Scope" : step === 2 ? "Tier" : step === 3 ? "Timeline" : "Contact"}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Step 1: Platforms & Scope */}
                  {estimatorStep === 1 && (
                    <div className="flex flex-col gap-4 animate-in fade-in-50 duration-200">
                      <div className="mb-2">
                        <h4 className="text-sm font-semibold text-zinc-100">Select Platform & Scope</h4>
                        <p className="text-xs text-zinc-400 mt-1">What systems are we designing and building?</p>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <button
                          type="button"
                          onClick={() => togglePlatform("web")}
                          className={`flex items-start gap-3 p-4 rounded-xl border text-left transition-all duration-200 ${
                            estimatorData.platforms.web
                              ? "border-blue-500 bg-blue-950/20 ring-1 ring-blue-500"
                              : "border-zinc-800 bg-zinc-900/20 hover:border-zinc-700"
                          }`}
                        >
                          <div className={`mt-0.5 p-1.5 rounded-lg border ${
                            estimatorData.platforms.web ? "border-blue-500/50 text-blue-400 bg-blue-950/50" : "border-zinc-800 text-zinc-400"
                          }`}>
                            <Globe size={16} />
                          </div>
                          <div>
                            <span className="text-xs font-semibold text-zinc-100 flex items-center gap-1.5">
                              Web Application {estimatorData.platforms.web && <Check size={12} className="text-blue-400" />}
                            </span>
                            <span className="text-[10px] text-zinc-400 mt-0.5 block">SaaS, Portals, Admin Dashboards</span>
                          </div>
                        </button>

                        <button
                          type="button"
                          onClick={() => togglePlatform("mobile")}
                          className={`flex items-start gap-3 p-4 rounded-xl border text-left transition-all duration-200 ${
                            estimatorData.platforms.mobile
                              ? "border-blue-500 bg-blue-950/20 ring-1 ring-blue-500"
                              : "border-zinc-800 bg-zinc-900/20 hover:border-zinc-700"
                          }`}
                        >
                          <div className={`mt-0.5 p-1.5 rounded-lg border ${
                            estimatorData.platforms.mobile ? "border-blue-500/50 text-blue-400 bg-blue-950/50" : "border-zinc-800 text-zinc-400"
                          }`}>
                            <Smartphone size={16} />
                          </div>
                          <div>
                            <span className="text-xs font-semibold text-zinc-100 flex items-center gap-1.5">
                              Mobile Application {estimatorData.platforms.mobile && <Check size={12} className="text-blue-400" />}
                            </span>
                            <span className="text-[10px] text-zinc-400 mt-0.5 block">iOS & Android Apps (React Native/Flutter)</span>
                          </div>
                        </button>

                        <button
                          type="button"
                          onClick={() => togglePlatform("cloud")}
                          className={`flex items-start gap-3 p-4 rounded-xl border text-left transition-all duration-200 ${
                            estimatorData.platforms.cloud
                              ? "border-blue-500 bg-blue-950/20 ring-1 ring-blue-500"
                              : "border-zinc-800 bg-zinc-900/20 hover:border-zinc-700"
                          }`}
                        >
                          <div className={`mt-0.5 p-1.5 rounded-lg border ${
                            estimatorData.platforms.cloud ? "border-blue-500/50 text-blue-400 bg-blue-950/50" : "border-zinc-800 text-zinc-400"
                          }`}>
                            <Server size={16} />
                          </div>
                          <div>
                            <span className="text-xs font-semibold text-zinc-100 flex items-center gap-1.5">
                              Cloud & Backend {estimatorData.platforms.cloud && <Check size={12} className="text-blue-400" />}
                            </span>
                            <span className="text-[10px] text-zinc-400 mt-0.5 block">Database design, API Architecture, AWS/GCP</span>
                          </div>
                        </button>

                        <button
                          type="button"
                          onClick={() => togglePlatform("ai")}
                          className={`flex items-start gap-3 p-4 rounded-xl border text-left transition-all duration-200 ${
                            estimatorData.platforms.ai
                              ? "border-blue-500 bg-blue-950/20 ring-1 ring-blue-500"
                              : "border-zinc-800 bg-zinc-900/20 hover:border-zinc-700"
                          }`}
                        >
                          <div className={`mt-0.5 p-1.5 rounded-lg border ${
                            estimatorData.platforms.ai ? "border-blue-500/50 text-blue-400 bg-blue-950/50" : "border-zinc-800 text-zinc-400"
                          }`}>
                            <Bot size={16} />
                          </div>
                          <div>
                            <span className="text-xs font-semibold text-zinc-100 flex items-center gap-1.5">
                              AI & Automation {estimatorData.platforms.ai && <Check size={12} className="text-blue-400" />}
                            </span>
                            <span className="text-[10px] text-zinc-400 mt-0.5 block">LLM Integrations, RAG, Agents</span>
                          </div>
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Step 2: Complexity / Design */}
                  {estimatorStep === 2 && (
                    <div className="flex flex-col gap-4 animate-in fade-in-50 duration-200">
                      <div className="mb-2">
                        <h4 className="text-sm font-semibold text-zinc-100">Select Complexity & Design Tier</h4>
                        <p className="text-xs text-zinc-400 mt-1">Choose the fidelity and standards needed for your project.</p>
                      </div>
                      <div className="flex flex-col gap-3">
                        {[
                          { id: "basic", label: "Basic / MVP", desc: "Clean standard design, fast validation, simplified architecture" },
                          { id: "premium", label: "Premium Product", desc: "Premium styling, fluid micro-animations, tailored UI/UX" },
                          { id: "enterprise", label: "Enterprise Grade", desc: "Military-grade security, high availability architecture, compliance-ready code" },
                        ].map((item) => (
                          <button
                            key={item.id}
                            type="button"
                            onClick={() => setEstimatorData(prev => ({ ...prev, complexity: item.id as any }))}
                            className={`flex items-center justify-between p-4 rounded-xl border text-left transition-all duration-200 ${
                              estimatorData.complexity === item.id
                                ? "border-blue-500 bg-blue-950/20 ring-1 ring-blue-500"
                                : "border-zinc-800 bg-zinc-900/20 hover:border-zinc-700"
                            }`}
                          >
                            <div>
                              <span className="text-xs font-semibold text-zinc-100">{item.label}</span>
                              <span className="text-[10px] text-zinc-400 mt-0.5 block">{item.desc}</span>
                            </div>
                            <div className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full border transition-all ${
                              estimatorData.complexity === item.id ? "border-blue-500 bg-blue-500 text-zinc-950" : "border-zinc-700"
                            }`}>
                              {estimatorData.complexity === item.id && <Check size={10} strokeWidth={3} />}
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Step 3: Timeline & Schedule */}
                  {estimatorStep === 3 && (
                    <div className="flex flex-col gap-4 animate-in fade-in-50 duration-200">
                      <div className="mb-2">
                        <h4 className="text-sm font-semibold text-zinc-100">Expected Timeline</h4>
                        <p className="text-xs text-zinc-400 mt-1">When do you need the deliverables completed?</p>
                      </div>
                      <div className="flex flex-col gap-3">
                        {[
                          { id: "flexible", label: "Flexible (3-6 Months)", desc: "Standard scoping, optimized budgets and staffing schedules" },
                          { id: "standard", label: "Standard (1-3 Months)", desc: "Recommended timeline for high-speed MVP delivery" },
                          { id: "rush", label: "Rush Delivery (< 1 Month)", desc: "Accelerated development sprints with priority architecture scaling" },
                        ].map((item) => (
                          <button
                            key={item.id}
                            type="button"
                            onClick={() => setEstimatorData(prev => ({ ...prev, timeline: item.id as any }))}
                            className={`flex items-center justify-between p-4 rounded-xl border text-left transition-all duration-200 ${
                              estimatorData.timeline === item.id
                                ? "border-blue-500 bg-blue-950/20 ring-1 ring-blue-500"
                                : "border-zinc-800 bg-zinc-900/20 hover:border-zinc-700"
                            }`}
                          >
                            <div>
                              <span className="text-xs font-semibold text-zinc-100">{item.label}</span>
                              <span className="text-[10px] text-zinc-400 mt-0.5 block">{item.desc}</span>
                            </div>
                            <div className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full border transition-all ${
                              estimatorData.timeline === item.id ? "border-blue-500 bg-blue-500 text-zinc-950" : "border-zinc-700"
                            }`}>
                              {estimatorData.timeline === item.id && <Check size={10} strokeWidth={3} />}
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Step 4: Contact Details */}
                  {estimatorStep === 4 && (
                    <div className="flex flex-col gap-4 animate-in fade-in-50 duration-200">
                      <div className="mb-2">
                        <h4 className="text-sm font-semibold text-zinc-100">Contact Details & Notes</h4>
                        <p className="text-xs text-zinc-400 mt-1">Let us know how to contact you to deliver your project plan.</p>
                      </div>

                      <div className="flex flex-col gap-2">
                        <label className="text-[10px] font-bold tracking-widest text-zinc-500 uppercase">Name</label>
                        <input
                          required
                          type="text"
                          value={estimatorData.name}
                          onChange={(e) => setEstimatorData(prev => ({ ...prev, name: e.target.value }))}
                          className="rounded-lg border border-zinc-800 bg-zinc-900/50 px-4 py-3 text-sm text-zinc-100 focus:border-zinc-500 focus:outline-none focus:ring-1 focus:ring-zinc-500 transition-all"
                          placeholder="Jane Doe"
                        />
                      </div>

                      <div className="flex flex-col gap-2">
                        <label className="text-[10px] font-bold tracking-widest text-zinc-500 uppercase">Email</label>
                        <input
                          required
                          type="email"
                          value={estimatorData.email}
                          onChange={(e) => setEstimatorData(prev => ({ ...prev, email: e.target.value }))}
                          className="rounded-lg border border-zinc-800 bg-zinc-900/50 px-4 py-3 text-sm text-zinc-100 focus:border-zinc-500 focus:outline-none focus:ring-1 focus:ring-zinc-500 transition-all"
                          placeholder="jane@example.com"
                        />
                      </div>

                      <div className="flex flex-col gap-2">
                        <label className="text-[10px] font-bold tracking-widest text-zinc-500 uppercase">Project details / Notes</label>
                        <textarea
                          rows={3}
                          value={estimatorData.notes}
                          onChange={(e) => setEstimatorData(prev => ({ ...prev, notes: e.target.value }))}
                          className="rounded-lg border border-zinc-800 bg-zinc-900/50 px-4 py-3 text-sm text-zinc-100 focus:border-zinc-500 focus:outline-none focus:ring-1 focus:ring-zinc-500 transition-all resize-none"
                          placeholder="Include any specific feature requests or database details..."
                        />
                      </div>
                    </div>
                  )}
                </div>

                <div>
                  {error && (
                    <p className="text-xs text-red-400 font-medium bg-red-950/30 border border-red-900/50 rounded-lg p-3 mb-4 flex items-center gap-2">
                      <AlertCircle size={14} /> {error}
                    </p>
                  )}

                  {/* Calculator Summary Footer */}
                  <div className="mt-8 pt-6 border-t border-zinc-800/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div>
                      <span className="text-[10px] font-bold tracking-widest text-zinc-500 uppercase">Project Estimate Range</span>
                      <div className="text-xl font-semibold text-blue-400 mt-0.5">{currentEstimateRange}</div>
                    </div>

                    <div className="flex gap-3 w-full sm:w-auto">
                      {estimatorStep > 1 && (
                        <button
                          type="button"
                          onClick={() => setEstimatorStep(prev => prev - 1)}
                          className="flex-1 sm:flex-none border border-zinc-800 bg-zinc-950 hover:bg-zinc-900 text-zinc-300 rounded-lg px-5 py-2.5 text-xs font-semibold transition-all"
                        >
                          Back
                        </button>
                      )}
                      {estimatorStep < 4 ? (
                        <button
                          type="button"
                          onClick={() => setEstimatorStep(prev => prev + 1)}
                          className="flex-1 sm:flex-none bg-zinc-100 hover:bg-zinc-200 text-zinc-950 rounded-lg px-5 py-2.5 text-xs font-semibold transition-all flex items-center justify-center gap-1.5"
                        >
                          Next Step <ArrowRight size={14} />
                        </button>
                      ) : (
                        <button
                          disabled={isSubmitting || !estimatorData.name || !estimatorData.email}
                          type="submit"
                          className="flex-1 sm:flex-none bg-zinc-100 hover:bg-zinc-200 text-zinc-950 rounded-lg px-5 py-2.5 text-xs font-semibold transition-all flex items-center justify-center gap-1.5 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          {isSubmitting ? "Submitting..." : "Submit Plan"} <Send size={12} />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </form>
            )}
          </SlideUp>
        </div>
      </section>
    </PageLayout>
  )
}
