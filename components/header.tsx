"use client";
import { cn } from "@/lib/utils";
import { useScroll } from "@/hooks/use-scroll";
import { Button } from "@/components/ui/button";
import { MobileNav } from "@/components/mobile-nav";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, useRef } from "react";

export const navLinks = [
	{
		label: "Services",
		href: "/services",
	},
	{
		label: "Work",
		href: "/work",
	},
	{
		label: "Process",
		href: "/process",
	},
	{
		label: "About",
		href: "/about",
	},
	{
		label: "Contact",
		href: "/contact",
	},
];

export function Header() {
	const scrolled = useScroll(10);
	const pathname = usePathname();
	const [collapsed, setCollapsed] = useState(false);
	const prevPathname = useRef(pathname);

	// When the route changes, keep the header in its current visual state
	// briefly, then smoothly animate back to the expanded state
	useEffect(() => {
		if (prevPathname.current !== pathname) {
			prevPathname.current = pathname;
			// On navigation, force collapsed to false with a slight delay
			// so the CSS transition animates the reverse smoothly
			const timer = setTimeout(() => {
				setCollapsed(false);
			}, 50);
			return () => clearTimeout(timer);
		}
	}, [pathname]);

	// Sync scroll state into collapsed, but only when not navigating
	useEffect(() => {
		setCollapsed(scrolled);
	}, [scrolled]);

	return (
		<header
			className={cn(
				"fixed left-0 right-0 z-50 mx-auto w-full transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] rounded-xl",
				collapsed
					? "max-w-3xl top-3 bg-zinc-950/80 backdrop-blur-xl shadow-2xl shadow-black/40"
					: "max-w-5xl top-0 bg-transparent shadow-none"
			)}
			style={{
				borderWidth: "1px",
				borderStyle: "solid",
				borderColor: collapsed ? "rgba(255, 255, 255, 0.08)" : "rgba(255, 255, 255, 0)",
				transition: "all 500ms cubic-bezier(0.25, 0.1, 0.25, 1)",
			}}
		>
			<nav
				className={cn(
					"flex w-full items-center justify-between transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)]",
					collapsed ? "h-14 px-3" : "h-16 px-5"
				)}
			>
				<Link
					className="flex items-center gap-2 rounded-md p-2 font-semibold tracking-tighter text-zinc-100 uppercase hover:bg-white/[0.05] transition-colors"
					href="/"
				>
					<div className="flex h-6 w-6 items-center justify-center rounded bg-white text-black font-bold text-xs">N</div>
					ZYNETZ
				</Link>
				<div className="hidden items-center gap-2 md:flex">
					<div className="flex items-center gap-1">
						{navLinks.map((link) => (
							<Button key={link.label} size="default" variant="ghost" render={<Link href={link.href} />} nativeButton={false} className="text-sm text-zinc-400 hover:text-zinc-100 hover:bg-white/[0.05]">{link.label}</Button>
						))}
					</div>
					<Button size="default" variant="outline" render={<Link href="/contact" />} nativeButton={false} className="text-sm border-white/[0.08] bg-transparent text-zinc-100 hover:bg-white/[0.05] hover:text-white">
						Book a Call
					</Button>
				</div>
				<MobileNav />
			</nav>
		</header>
	);
}
