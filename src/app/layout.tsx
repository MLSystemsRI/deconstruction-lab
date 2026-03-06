import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Deconstruction Lab | ML Systems",
  description:
    "AI-powered R&D platform for reverse engineering residential building assemblies. " +
    "Analyze material separation techniques for dried adhesives, polyurethane foams, " +
    "composite fasteners, and layered building envelopes. The science of taking " +
    "buildings apart — so the next one costs less to build.",
  keywords: [
    "deconstruction",
    "reverse engineering",
    "material recovery",
    "building science",
    "adhesive separation",
    "design for disassembly",
    "AI R&D",
    "urban mining",
    "circular construction",
  ],
  openGraph: {
    title: "Decon Lab — Reverse Engineering Buildings with AI",
    description:
      "R&D platform that uses AI to analyze building assemblies, generate deconstruction " +
      "sequences, and score material recovery viability. From dried polyurethane to " +
      "composite fasteners — we reverse engineer the process of building a home.",
    siteName: "ML Systems",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-dl-black text-dl-text antialiased">
        {children}
      </body>
    </html>
  );
}
