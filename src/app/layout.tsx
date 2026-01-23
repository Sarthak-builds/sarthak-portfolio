import type { Metadata } from "next";

import "./globals.css";


export const metadata: Metadata = {
  title: {
    default: "Sarthak Shiroty | Portfolio",
    template: "%s | Sarthak Shiroty"
  },
  description: "Product-focused engineer building pixel-perfect UI and high-performance web applications. Specializing in React, Next.js, and modern frontend architecture.",
  keywords: ["Sarthak Shiroty", "Frontend Developer", "Web Developer", "React", "Next.js", "Portfolio", "Indore", "Software Engineer"],
  authors: [{ name: "Sarthak Shiroty" }],
  creator: "Sarthak Shiroty",
  openGraph: {
    type: "website",
    locale: "en_US",
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
        className={`font-hanken-grotesk antialiased bg-white dark:bg-black text-neutral-900 dark:text-white transition-colors duration-300`}
      >

        {children}
      </body>
    </html>
  );
}
