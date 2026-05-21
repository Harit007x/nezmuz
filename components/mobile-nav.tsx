"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { Portal, PortalBackdrop } from "@/components/ui/portal";
import { Button } from "@/components/ui/button";
import { navLinks } from "@/components/header";
import { XIcon, MenuIcon } from "lucide-react";
import Link from "next/link";

export function MobileNav() {
	const [open, setOpen] = React.useState(false);

	return (
		<div className="md:hidden">
			<Button
				aria-controls="mobile-menu"
				aria-expanded={open}
				aria-label="Toggle menu"
				className="md:hidden border-white/[0.08] text-zinc-300 hover:bg-white/[0.05]"
				onClick={() => setOpen(!open)}
				size="icon"
				variant="outline"
			>
				{open ? (
					<XIcon className="size-4.5" />
				) : (
					<MenuIcon className="size-4.5" />
				)}
			</Button>
			{open && (
				<Portal className="top-14" id="mobile-menu">
					<PortalBackdrop />
					<div
						className={cn(
							"data-[slot=open]:zoom-in-97 ease-out data-[slot=open]:animate-in",
							"size-full p-4 bg-zinc-950"
						)}
						data-slot={open ? "open" : "closed"}
					>
						<div className="grid gap-y-2">
							{navLinks.map((link) => (
								<Button className="justify-start text-zinc-300 hover:text-zinc-100 hover:bg-white/[0.05]" key={link.label} variant="ghost" render={<Link href={link.href} />} nativeButton={false}>{link.label}</Button>
							))}
						</div>
						<div className="mt-12 flex flex-col gap-2">
							<Button className="w-full border-white/[0.08] text-zinc-100 hover:bg-white/[0.05]" variant="outline" render={<Link href="/contact" />} nativeButton={false}>
								Book a Call
							</Button>
						</div>
					</div>
				</Portal>
			)}
		</div>
	);
}
