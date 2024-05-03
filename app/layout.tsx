"use client"

import type { Metadata } from "next";
import { Orbitron } from "next/font/google";
import "./globals.css";
import "./style.css"
import "./timeline.css"

import { NavBar } from "@/components/ui/daisy-navbar"

const inter = Orbitron({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en">
      <body className={inter.className} data-theme="default">
        <NavBar/>
        {children}
      </body>
    </html>
  );
}
