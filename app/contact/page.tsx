"use client"

import React, { useState } from "react"
import { motion } from "motion/react"
import { Mail, Phone, MessageSquare, MapPin, Send, MessageCircle, Calendar, Globe, ArrowRight } from "lucide-react"
import KineticGrid from "@/components/satori-ui/kinetic-grid"
import { cn } from "@/lib/utils"

const ContactPage: React.FC = () => {
  const [activeBudget, setActiveBudget] = useState("$10k - $25k")
  const [activeTimeline, setActiveTimeline] = useState("3-6 Months")
  const [selectedService, setSelectedService] = useState("Mobile App Development")

  const budgetOptions = ["$5k - $10k", "$10k - $25k", "$25k - $50k", "$100k+"]
  const timelineOptions = ["< 3 Months", "3-6 Months", "6-12 Months", "Ongoing"]
  const serviceOptions = [
    "Mobile App Development", 
    "Web Engineering", 
    "AI & Automation", 
    "Digital Transformation", 
    "Backend & Cloud",
    "UI/UX Design"
  ]

  return (
    <KineticGrid globalColor="monochrome" className="min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Information Section */}
          <div className="max-w-xl">
            <motion.span 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-[10px] font-bold uppercase tracking-[0.4em] text-blue-500"
            >
              Consultation
            </motion.span>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1] mt-6">
              Let's engineer <br /> your <span className="text-zinc-600">future.</span>
            </h1>
            <p className="mt-6 text-base md:text-lg text-zinc-400 font-medium leading-relaxed">
              Have a project in mind? We're ready to dive deep into your vision and build a world-class digital product that stands out in today's AI-driven world.
            </p>

            <div className="mt-16 space-y-10">
               <div className="group flex items-center gap-6">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                    <Mail size={20} />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Official Channel</span>
                    <p className="text-lg font-bold text-white mt-0.5">nezmuz.business@gmail.com</p>
                  </div>
               </div>
               <div className="group flex items-center gap-6">
                  <a 
                    href="https://wa.me/919274466461" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500 group-hover:scale-110 transition-transform"
                  >
                    <MessageCircle size={20} />
                  </a>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Direct Chat</span>
                    <p className="text-lg font-bold text-white mt-0.5">+91 9274466461</p>
                  </div>
               </div>
               <div className="group flex items-center gap-6">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-500 group-hover:scale-110 transition-transform">
                    <Globe size={20} />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Global Coverage</span>
                    <p className="text-lg font-bold text-white mt-0.5">India · UAE · USA · UK</p>
                  </div>
               </div>
            </div>
          </div>

          {/* Form Section */}
          <div className="relative">
            <div className="absolute inset-0 bg-blue-600/5 blur-[80px] rounded-full" />
            <div className="relative z-10 p-8 md:p-12 rounded-[2.5rem] border border-white/10 bg-black/40 backdrop-blur-3xl shadow-2xl">
              <form className="space-y-6" onSubmit={(e) => {
                e.preventDefault();
                alert("Project inquiry sent! Our team will review your scope and get back to you within 24 hours.");
              }}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                   <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Full Name</label>
                      <input required type="text" className="w-full bg-transparent border-b border-white/10 py-3 text-sm text-white outline-none focus:border-white transition-colors" placeholder="e.g. Elon Musk" />
                   </div>
                   <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Work Email</label>
                      <input required type="email" className="w-full bg-transparent border-b border-white/10 py-3 text-sm text-white outline-none focus:border-white transition-colors" placeholder="e.g. elon@spacex.com" />
                   </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                   <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Company Name</label>
                      <input required type="text" className="w-full bg-transparent border-b border-white/10 py-3 text-sm text-white outline-none focus:border-white transition-colors" placeholder="e.g. Starlink Inc." />
                   </div>
                   <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Service Interest</label>
                      <select 
                        value={selectedService}
                        onChange={(e) => setSelectedService(e.target.value)}
                        className="w-full bg-transparent border-b border-white/10 py-3 text-sm text-white outline-none focus:border-white transition-colors appearance-none cursor-pointer"
                      >
                        {serviceOptions.map(opt => <option key={opt} value={opt} className="bg-zinc-900">{opt}</option>)}
                      </select>
                   </div>
                </div>

                <div className="space-y-4">
                   <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Project Budget</label>
                   <div className="flex flex-wrap gap-2">
                      {budgetOptions.map(option => (
                        <button 
                          key={option} 
                          type="button" 
                          onClick={() => setActiveBudget(option)}
                          className={cn(
                            "px-5 py-2.5 rounded-full border text-[10px] font-bold transition-all duration-300",
                            activeBudget === option ? "bg-white text-black border-white" : "bg-transparent border-white/10 text-white hover:border-white/30"
                          )}
                        >
                          {option}
                        </button>
                      ))}
                   </div>
                </div>

                <div className="space-y-2">
                   <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Project Description / Scope</label>
                   <textarea required rows={4} className="w-full bg-transparent border-b border-white/10 py-3 text-sm text-white outline-none focus:border-white transition-colors resize-none" placeholder="Briefly describe your vision and technical goals..." />
                </div>

                {/* File Upload Option */}
                <div className="space-y-2">
                   <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Attach Project Scope / BRD (Optional)</label>
                   <div className="relative group">
                      <input 
                        type="file" 
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20" 
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) alert(`File attached: ${file.name}`);
                        }}
                      />
                      <div className="w-full border-2 border-dashed border-white/10 rounded-2xl p-6 flex flex-col items-center justify-center gap-2 group-hover:border-white/30 transition-all">
                         <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-zinc-500 group-hover:text-white transition-colors">
                            <Send size={18} className="rotate-45" />
                         </div>
                         <span className="text-[10px] font-bold text-zinc-500 group-hover:text-zinc-300 transition-colors uppercase tracking-widest">Click or drag file to upload (PDF, DOCX, etc.)</span>
                      </div>
                   </div>
                </div>

                <button type="submit" className="group w-full py-5 bg-white text-black font-bold text-sm rounded-full hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3">
                  Initiate Project Discussion <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </KineticGrid>
  )
}

export default ContactPage
