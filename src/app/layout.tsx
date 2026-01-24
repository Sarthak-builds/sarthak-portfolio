import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next"
import "./globals.css";
import { BlurFade } from "@/components/ui/BlurFade";


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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head><link
        href="https://cdn.jsdelivr.net/npm/remixicon@4.8.0/fonts/remixicon.css"
        rel="stylesheet"
      /></head>
      <body
        className={`font-hanken-grotesk antialiased`}
      >
        <div className="min-h-screen w-full relative bg-black">
          <div
            className="absolute inset-0 z-0 pointer-events-none"
            style={{
              background: "radial-gradient(ellipse 80% 25% at 50% 0%, rgba(120, 180, 255, 0.25), transparent 70%), #000000",
            }}
          />
          <div className="relative z-10">
            <BlurFade>{children}</BlurFade>
          </div>
        </div>
      </body>
    </html>
  );
}
