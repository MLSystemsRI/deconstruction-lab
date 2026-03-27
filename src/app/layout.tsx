import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GoogleAnalytics } from "@/components/google-analytics";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Deconstruction Lab | ML Systems",
  description:
    "There is no secondary lumber market — yet. 80–90% of building materials are recoverable. " +
    "51% can be resold. Decon Lab is the AI-powered R&D platform making people aware of the " +
    "resale value locked inside every standing structure — before building the marketplace " +
    "to capture it. Reverse engineering residential building assemblies, from dried adhesives " +
    "to composite fasteners. The science of taking buildings apart — so the next one costs less to build.",
  keywords: [
    "lucent lens",
    "secondary lumber market",
    "material recovery 80-90 percent",
    "51 percent resale value",
    "human-first deconstruction",
    "local community",
    "deconstruction",
    "reverse engineering",
    "building science",
    "adhesive separation",
    "design for disassembly",
    "AI R&D",
    "urban mining",
    "circular construction",
  ],
  openGraph: {
    title: "Decon Lab — 80–90% Recovery. 51% Resale. No Market Exists Yet.",
    description:
      "There is no formal secondary lumber market. Decon Lab is the R&D platform that " +
      "makes people aware of the resale potential in recovered building materials — " +
      "then builds the infrastructure to capture it. AI-powered reverse engineering " +
      "of residential building assemblies.",
    siteName: "ML Systems",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Decon Lab — 80–90% Recovery. 51% Resale.",
    description: "AI-powered R&D for reverse engineering residential building assemblies. By ML Systems.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" as const },
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
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}
