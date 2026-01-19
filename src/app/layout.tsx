import type { Metadata } from "next";

import "./globals.css";


export const metadata: Metadata = {
  title: "Sarthakbuilds",
  description: "Sarthakbuilds Portfolio",
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
        className={`font-hanken-grotesk antialiased bg-black/96`}
      >
        {children}
      </body>
    </html>
  );
}
