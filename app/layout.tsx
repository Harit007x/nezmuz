import { Geist, Geist_Mono, Inter } from "next/font/google"
import type { Metadata } from "next"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils";

const siteUrl = "https://zynetz.com"

export const metadata: Metadata = {
  title: {
    default: "Zynetz Technologies — High-Performance Mobile & Web Applications",
    template: "%s | Zynetz Technologies",
  },
  description:
    "Zynetz Technologies is a global engineering firm dedicated to building high-performance, robust and scalable digital products. We specialize in mobile apps, enterprise web systems, AI automation, and cloud infrastructure.",
  keywords: [
    "software engineering",
    "mobile app development",
    "web development",
    "React Native",
    "Flutter",
    "Next.js",
    "AI automation",
    "cloud infrastructure",
    "UI/UX design",
    "scalable backend",
    "enterprise software",
  ],
  authors: [{ name: "Zynetz Technologies" }],
  creator: "Zynetz Technologies",
  metadataBase: new URL(siteUrl),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Zynetz Technologies",
    title: "Zynetz Technologies — High-Performance Mobile & Web Applications",
    description:
      "A global engineering firm dedicated to building high-performance, robust and scalable digital products.",
    images: [
      {
        url: "/dash.png",
        width: 1200,
        height: 630,
        alt: "Zynetz Technologies — Building the Future",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zynetz Technologies — High-Performance Mobile & Web Applications",
    description:
      "A global engineering firm dedicated to building high-performance, robust and scalable digital products.",
    images: ["/dash.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

const inter = Inter({subsets:['latin'],variable:'--font-sans'})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", fontMono.variable, "font-sans", inter.variable)}
    >
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
