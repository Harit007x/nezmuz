import type { Metadata } from "next"
import { Inter, Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })
const geistSans = Geist({ subsets: ["latin"], variable: "--font-geist" })
const fontMono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono" })

export const metadata: Metadata = {
  title: "Nezmuz | Global Engineering & Digital Product Development Agency",
  description: "Nezmuz is a world-class software engineering partner specializing in React Native, Flutter, Next.js, and Agentic AI. We provide scalable mobile, web, backend, and cloud-native solutions for startups and enterprises globally.",
  keywords: [
    // Mobile
    "React Native App Development", "Flutter App Development", "iOS Development", "Android App Development", "Cross-Platform Mobile Apps", "Native App Engineering",
    // Web
    "Next.js Development", "React.js Solutions", "Full Stack Web Engineering", "Enterprise SaaS Development", "Progressive Web Apps", "Custom Web Portals",
    // Backend & Languages
    "Node.js Backend", "Python Development", "TypeScript Engineering", "Scalable API Development", "Microservices Architecture", "Serverless Solutions",
    // AI & Cloud
    "Agentic AI Development", "Custom LLM Integrations", "AWS Infrastructure", "DevOps & CI/CD", "Cloud-Native Platform Engineering", "AI Automation",
    // Marketing & Growth
    "Digital Marketing Agency", "Content Creation & Strategy", "Brand Storytelling", "Email Marketing Automation", "Performance Marketing Tech", "SEO & Content Distribution",
    // Business
    "Digital Transformation Agency", "Startup MVP Development", "Offshore Software Development", "Technology Consulting", "Product Engineering Agency"
  ],
  metadataBase: new URL('https://nezmuz.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Nezmuz | Premium Software Engineering Agency",
    description: "We Build High Performance Mobile & Web Applications for global startups and enterprises.",
    url: 'https://nezmuz.com',
    siteName: 'Nezmuz',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nezmuz | High Performance Engineering',
    description: 'Scalable Flutter, Next.js, and AI solutions for modern businesses.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  }
}

import Navbar from "@/components/navigation/navbar"
import Footer from "@/components/navigation/footer"
import SmoothScroll from "@/components/providers/smooth-scroll"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", fontMono.variable, "font-sans", inter.variable, geistSans.variable)}
    >
      <body 
        className="bg-black text-zinc-100 selection:bg-white selection:text-black overflow-x-hidden font-geist"
        suppressHydrationWarning
      >
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-W596MDWN5W"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-W596MDWN5W');
          `}
        </Script>

        {/* JSON-LD Schema.org for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "Nezmuz",
              "image": "https://nezmuz.com/og-image.png",
              "@id": "https://nezmuz.com",
              "url": "https://nezmuz.com",
              "telephone": "+919274466461",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Your Office Address",
                "addressLocality": "City",
                "addressRegion": "State",
                "postalCode": "000000",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 0.0,
                "longitude": 0.0
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday"
                ],
                "opens": "09:00",
                "closes": "18:00"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Software Engineering Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Mobile App Development (React Native, Flutter, iOS, Android)",
                      "description": "High-performance cross-platform and native mobile applications."
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Next.js & React Web Engineering",
                      "description": "Enterprise-grade web applications and scalable SaaS platforms."
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Agentic AI & LLM Integration",
                      "description": "Custom AI agents and large language model automation solutions."
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Backend & API Systems Architecture",
                      "description": "Robust Node.js and Python server-side infrastructures."
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Cloud-Native Infrastructure & DevOps",
                      "description": "AWS, Docker, and Kubernetes deployment and scaling services."
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Digital Marketing & Performance Growth",
                      "description": "Data-driven marketing technology, SEO, and conversion optimization."
                    }
                  }
                ]
              },
              "sameAs": [
                "https://linkedin.com/company/nezmuz",
                "https://github.com/nezmuz"
              ],
              "priceRange": "$$$"
            })
          }}
        />

        <SmoothScroll>
          <ThemeProvider 
            attribute="class" 
            defaultTheme="dark" 
            forcedTheme="dark"
            enableSystem={false}
          >
            <Navbar />
            {children}
            <Footer />
          </ThemeProvider>
        </SmoothScroll>
      </body>
    </html>
  )
}
