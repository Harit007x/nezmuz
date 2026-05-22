"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { MobileNav } from "@/components/mobile-nav";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useMotionValueEvent } from "motion/react";
import EncodedReveal from "./satori-ui/encoded-reveal";
import Image from "next/image";

export const navLinks = [
	{ label: "Services", href: "/services" },
	{ label: "Work", href: "/work" },
	{ label: "Process", href: "/process" },
	{ label: "About", href: "/about" },
	// { label: "Contact", href: "/contact" },
];

export function Header() {
	const pathname = usePathname();
	const [isHovered, setIsHovered] = useState(false);
	const [isAtTop, setIsAtTop] = useState(true);
	
	const { scrollY } = useScroll();
	
	useMotionValueEvent(scrollY, "change", (latest) => {
		setIsAtTop(latest <= 64);
	});
	
	const timeoutRef = useRef<NodeJS.Timeout | null>(null);

	const handleMouseEnter = () => {
		if (timeoutRef.current) clearTimeout(timeoutRef.current);
		setIsHovered(true);
	};

	const handleMouseLeave = () => {
		timeoutRef.current = setTimeout(() => {
			setIsHovered(false);
		}, 300);
	};

	useEffect(() => {
		return () => {
			if (timeoutRef.current) clearTimeout(timeoutRef.current);
		};
	}, []);

	const springTransition = {
		type: "spring",
		bounce: 0,
		duration: 0.5,
	} as const;

	return (
		<div className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none h-[100px]">
			{/* Invisible Hover Area at the very top edge */}
			<div
				className="absolute top-0 left-0 right-0 h-[40px] z-10 pointer-events-auto"
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
			/>

			{/* The Island */}
			<motion.div
				initial={false}
				animate={{ 
					y: isHovered || isAtTop ? "0%" : "-100%",
					width: "100%",
					maxWidth: isAtTop ? "1200px" : "800px",
					height: isAtTop ? "80px" : "64px",
					borderBottomLeftRadius: isAtTop ? "0px" : "24px",
					borderBottomRightRadius: isAtTop ? "0px" : "24px",
					backgroundColor: isAtTop ? "transparent" : "rgba(255, 255, 255, 0.03)",
					boxShadow: isAtTop ? "none" : "0 8px 32px rgba(255,255,255,0.04), inset 0 -1px 0 rgba(255,255,255,0.05)"
				}}
				transition={springTransition}
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
				className={cn(
					"relative pointer-events-auto flex items-center justify-between px-5 z-20",
					!isAtTop && "backdrop-blur-xl"
				)}
			>
				{/* Left Reverse Curve connecting to top bezel */}
				<motion.div 
					className="absolute top-0 w-[16px] h-[16px] pointer-events-none"
					animate={{ opacity: isAtTop ? 0 : 1 }}
					transition={springTransition}
					style={{
						left: '-16px',
						backgroundColor: 'rgba(255, 255, 255, 0.05)',
						backdropFilter: 'blur(24px)',
						WebkitBackdropFilter: 'blur(24px)',
						maskImage: 'radial-gradient(circle at 0 100%, transparent 16px, black 16.5px)',
						WebkitMaskImage: 'radial-gradient(circle at 0 100%, transparent 16px, black 16.5px)',
						transform: 'translateZ(0)',
					}}
				/>

				{/* Right Reverse Curve connecting to top bezel */}
				<motion.div 
					className="absolute top-0 w-[16px] h-[16px] pointer-events-none"
					animate={{ opacity: isAtTop ? 0 : 1 }}
					transition={springTransition}
					style={{
						right: '-16px',
						backgroundColor: 'rgba(255, 255, 255, 0.05)',
						backdropFilter: 'blur(24px)',
						WebkitBackdropFilter: 'blur(24px)',
						maskImage: 'radial-gradient(circle at 100% 100%, transparent 16px, black 16.5px)',
						WebkitMaskImage: 'radial-gradient(circle at 100% 100%, transparent 16px, black 16.5px)',
						transform: 'translateZ(0)',
					}}
				/>

				{/* Content inside the notch */}
				<Link
					className="flex items-center gap-2 rounded-md p-2 font-semibold tracking-tighter text-zinc-100 uppercase hover:bg-white/[0.05] transition-colors"
					href="/"
					onClick={() => setIsHovered(false)}
				>
					<Image src="/white_whole.png" alt="Zynetz Logo" width={24} height={24} className="object-contain rounded-sm" />
					<EncodedReveal onHover className="text-lg font-bold tracking-tight">ZYNETZ</EncodedReveal>

				</Link>

				<div className="hidden items-center gap-2 md:flex">
					<div className="flex items-center gap-1">
						{navLinks.map((link, i) => (
							<motion.div
								key={link.label}
								initial={{ opacity: 0, y: -8 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.4, delay: 0.3 + i * 0.07, ease: "easeOut" }}
							>
								<Link
									href={link.href}
									onClick={() => setIsHovered(false)}
									className={cn(
										"px-3 py-1.5 text-sm font-medium text-zinc-400 hover:text-zinc-100 rounded-full hover:bg-white/[0.05] transition-colors",
										pathname === link.href && "text-zinc-100 bg-white/[0.05]"
									)}
								>
									{link.label}
								</Link>
							</motion.div>
						))}
					</div>
					<motion.div
						initial={{ opacity: 0, y: -8 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.4, delay: 0.3 + navLinks.length * 0.07, ease: "easeOut" }}
					>
						<Button size="default" variant="outline" render={<Link href="/contact" onClick={() => setIsHovered(false)} />} nativeButton={false} className="text-sm border-white/[0.08] bg-transparent text-zinc-100 hover:bg-white/[0.05] hover:text-white ml-2">
							Book a Call
						</Button>
					</motion.div>
				</div>
				<div className="md:hidden">
					<MobileNav />
				</div>
			</motion.div>
		</div>
	);
}

