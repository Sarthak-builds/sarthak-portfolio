import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next"
import "./globals.css";
import { BlurFade } from "@/components/ui/BlurFade";
import { FishCursor } from "@/components/ui/FishCursor";


export const metadata: Metadata = {
  title: {
    default: "Sarthak Shiroty | Portfolio",
    template: "%s | Sarthak Shiroty"
  },
  description: "Product-focused engineer building pixel-perfect UI and high-performance web applications. Specializing in React, Next.js, and modern frontend architecture.",
  keywords: ["Sarthak Shiroty", "Frontend Developer", "Web Developer", "React", "Next.js", "Portfolio", "Indore", "India", "Software Engineer"],
  authors: [{ name: "Sarthak Shiroty" }],
  creator: "Sarthak Shiroty",
  openGraph: {
    type: "website",
    locale: "en_US || en_IN",
    url: "https://sarthakbuilds.vercel.app",
    title: "Sarthak Shiroty | Portfolio",
    description: "Product-focused engineer building pixel-perfect UI and high-performance web applications.",
    siteName: "Sarthak Shiroty Portfolio",
    images: [
      {
        url: "/assets/images/sarthak_mee.jpeg",
        width: 1200,
        height: 630,
        alt: "Sarthak Shiroty",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sarthak Shiroty | Portfolio",
    description: "Product-focused engineer building pixel-perfect UI and high-performance web applications.",
    images: ["/assets/images/sarthak_mee.jpeg"],
    creator: "@Sarthakbuilds",
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import { GeistPixelGrid } from "geist/font/pixel";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${GeistPixelGrid.variable} scroll-smooth`} suppressHydrationWarning>
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/remixicon@4.8.0/fonts/remixicon.css"
          rel="stylesheet"
        />
        <script defer src="https://cloud.umami.is/script.js" data-website-id="4acc163c-4d62-4460-823e-2a6c274ee402"></script>
      </head>
      <body
        className={`inter-tight antialiased transition-all duration-300 min-h-screen bg-white dark:bg-[#0a0a0a] text-neutral-900 dark:text-neutral-100 flex flex-col`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="fixed inset-0 z-[-1] mesh-grid" />
          <div className="relative z-[100]">
            <Navbar />
          </div>
          <div className="relative z-10 pt-20 max-w-4xl mx-auto w-full px-4 md:px-10 flex-1">
            <BlurFade>{children}</BlurFade>
          </div>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
