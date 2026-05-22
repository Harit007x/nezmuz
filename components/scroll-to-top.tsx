"use client"

import { useState } from "react"
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "motion/react"
import { ArrowUp } from "lucide-react"

export function ScrollToTop() {
	const [show, setShow] = useState(false)
	const { scrollY } = useScroll()

	useMotionValueEvent(scrollY, "change", (latest) => {
		setShow(latest > 300)
	})

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" })
	}

	return (
		<AnimatePresence>
			{show && (
				<motion.button
					initial={{ opacity: 0, scale: 0.8, y: 10 }}
					animate={{ opacity: 1, scale: 1, y: 0 }}
					exit={{ opacity: 0, scale: 0.8, y: 10 }}
					transition={{ type: "spring", bounce: 0, duration: 0.4 }}
					onClick={scrollToTop}
					className="fixed bottom-8 right-8 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-xl text-zinc-300 shadow-[0_4px_20px_rgba(0,0,0,0.4)] hover:bg-white/10 hover:text-white hover:border-white/20 transition-colors cursor-pointer"
					aria-label="Scroll to top"
				>
					<ArrowUp size={18} />
				</motion.button>
			)}
		</AnimatePresence>
	)
}
