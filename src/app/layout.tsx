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
      <body
        className={`font-hanken-grotesk antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
