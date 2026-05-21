"use client"

import React from "react"
import { motion, type HTMLMotionProps } from "motion/react"
import { cn } from "@/lib/utils"

interface SlideUpProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode
  className?: string
  /** Delay in seconds before the animation starts */
  delay?: number
  /** Duration of the animation in seconds */
  duration?: number
  /** How far (px) the element slides up from */
  offset?: number
}

export default function SlideUp({
  children,
  className,
  delay = 0,
  duration = 0.7,
  offset = 40,
  ...props
}: SlideUpProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: offset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  )
}
