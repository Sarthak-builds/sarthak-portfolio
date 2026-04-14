import type { Metadata } from "next";
import "./globals.css";
import { BlurFade } from "@/components/ui/BlurFade";
import { Inter, Instrument_Serif, Inter_Tight } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-instrument-serif",
});

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

import { Navbar } from "@/components/ui/Navbar";
import OnekoCat from "@/components/ui/OnekoCat";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${interTight.variable} ${instrumentSerif.variable} dark scroll-smooth`} suppressHydrationWarning>
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/remixicon@4.8.0/fonts/remixicon.css"
          rel="stylesheet"
        />
        <script defer src="https://cloud.umami.is/script.js" data-website-id="4acc163c-4d62-4460-823e-2a6c274ee402"></script>
      </head>
      <body className="antialiased bg-black text-white">
          <Navbar />
          <OnekoCat />
          <div className="min-h-screen w-full relative">
            <div
              className="absolute inset-0 z-0 pointer-events-none opacity-100"
              style={{
                background: "radial-gradient(ellipse 80% 25% at 50% 0%, rgba(99, 161, 237, 0.25), transparent 70%), #000000",
              }}
            />
            <div className="relative z-10 pt-20">
              <BlurFade>{children}</BlurFade>
            </div>
          </div>
      </body>
    </html>
  );
}
