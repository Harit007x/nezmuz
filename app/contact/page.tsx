"use client"
import React, { useState } from "react"
import { PageLayout } from "@/components/page-layout"
import { ArrowRight, Send } from "lucide-react"
import SlideUp from "@/components/satori-ui/slide-up"

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 1500)
  }

  return (
    <PageLayout>
      <section className="mx-auto w-full max-w-6xl px-6 py-32 border-t border-white/[0.05]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <SlideUp>
            <p className="text-[10px] font-bold tracking-widest text-emerald-500 uppercase mb-4">START A CONVERSATION</p>
            <h1 className="text-4xl font-semibold tracking-tighter text-zinc-50 md:text-6xl mb-6">
              Ready to Build<br/>the Future?
            </h1>
            <p className="text-sm text-zinc-400 max-w-md leading-relaxed mb-12">
              Whether you need a dedicated engineering team, a scalable cloud architecture, or a fluid mobile experience, we're ready to partner with you. Fill out the form, and our technical leads will get back to you within 24 hours.
            </p>
            
            <div className="space-y-8">
              <div>
                <h4 className="text-[10px] font-bold tracking-widest text-zinc-500 uppercase mb-2">EMAIL INQUIRIES</h4>
                <a href="mailto:admin@zynetz.com" className="text-sm font-medium text-zinc-100 hover:text-white transition-colors">admin@zynetz.com</a>
              </div>
              <div>
                <h4 className="text-[10px] font-bold tracking-widest text-zinc-500 uppercase mb-2">GLOBAL HQ</h4>
                <p className="text-sm text-zinc-300">Ahmedabad, Gujarat<br/> India</p>
              </div>
              <div>
                <h4 className="text-[10px] font-bold tracking-widest text-zinc-500 uppercase mb-2">Whatsapp No</h4>
                <p className="text-sm text-zinc-300">+91 9274466461</p>
              </div>
            </div>
          </SlideUp>

          <SlideUp delay={0.15} className="rounded-3xl border border-white/[0.08] bg-zinc-950 p-8 md:p-12">
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-12">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-500/20 text-green-400">
                  <Send size={24} />
                </div>
                <h3 className="text-2xl font-semibold text-zinc-50 mb-2">Message Received</h3>
                <p className="text-sm text-zinc-400">We'll be in touch shortly to discuss your project.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-[10px] font-bold tracking-widest text-zinc-500 uppercase">Name</label>
                  <input required type="text" id="name" className="rounded-lg border border-zinc-800 bg-zinc-900/50 px-4 py-3 text-sm text-zinc-100 focus:border-zinc-500 focus:outline-none focus:ring-1 focus:ring-zinc-500 transition-all" placeholder="John Doe" />
                </div>
                
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-[10px] font-bold tracking-widest text-zinc-500 uppercase">Email</label>
                  <input required type="email" id="email" className="rounded-lg border border-zinc-800 bg-zinc-900/50 px-4 py-3 text-sm text-zinc-100 focus:border-zinc-500 focus:outline-none focus:ring-1 focus:ring-zinc-500 transition-all" placeholder="john@example.com" />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="interest" className="text-[10px] font-bold tracking-widest text-zinc-500 uppercase">Primary Interest</label>
                  <select id="interest" className="rounded-lg border border-zinc-800 bg-zinc-900/50 px-4 py-3 text-sm text-zinc-400 focus:border-zinc-500 focus:outline-none focus:ring-1 focus:ring-zinc-500 transition-all appearance-none">
                    <option value="">Select a service...</option>
                    <option value="mobile">Mobile App Development</option>
                    <option value="web">Enterprise Web Systems</option>
                    <option value="cloud">Cloud-Native Backend</option>
                    <option value="ai">AI & Automation</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-[10px] font-bold tracking-widest text-zinc-500 uppercase">Message</label>
                  <textarea required id="message" rows={4} className="rounded-lg border border-zinc-800 bg-zinc-900/50 px-4 py-3 text-sm text-zinc-100 focus:border-zinc-500 focus:outline-none focus:ring-1 focus:ring-zinc-500 transition-all resize-none" placeholder="Tell us about your project..." />
                </div>

                <button disabled={isSubmitting} type="submit" className="mt-4 flex items-center justify-center gap-2 rounded-lg bg-zinc-100 px-6 py-3.5 text-sm font-semibold text-zinc-950 transition-all hover:bg-zinc-200 disabled:opacity-50 disabled:cursor-not-allowed">
                  {isSubmitting ? "Sending..." : "Send Message"} <ArrowRight size={16} />
                </button>
              </form>
            )}
          </SlideUp>
        </div>
      </section>
    </PageLayout>
  )
}
