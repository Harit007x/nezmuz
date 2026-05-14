"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { Menu, X } from "lucide-react"

const Navbar: React.FC = () => {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "Services", href: "/services" },
    { name: "Work", href: "/work" },
    { name: "Process", href: "/process" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ease-in-out px-6 py-4",
        scrolled 
          ? "bg-black/40 backdrop-blur-xl border-b border-white/5 py-3" 
          : "bg-transparent py-6"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link 
          href="/" 
          className="relative z-[110] text-xl font-black tracking-tighter text-white uppercase group"
        >
          Nezmuz
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "relative px-4 py-2 text-sm font-medium transition-colors duration-300",
                pathname === link.href ? "text-white" : "text-zinc-400 hover:text-white"
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link
            href="/contact"
            className="group relative inline-flex items-center justify-center px-5 py-2 overflow-hidden font-bold text-white rounded-full bg-white/5 border border-white/10 transition duration-300 ease-out hover:border-white/20"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <span className="relative text-xs tracking-tight">Book a Call</span>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden relative z-[110] p-2 text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[105] bg-black/95 backdrop-blur-2xl flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {navLinks.map((link, idx) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
              >
                <Link
                  href={link.href}
                  className={cn(
                    "text-3xl font-bold tracking-tighter transition-colors",
                    pathname === link.href ? "text-white" : "text-zinc-500 hover:text-white"
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
            >
              <Link
                href="/contact"
                className="mt-4 px-10 py-4 bg-white text-black font-bold rounded-full text-xl"
                onClick={() => setMobileMenuOpen(false)}
              >
                Book a Call
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar
