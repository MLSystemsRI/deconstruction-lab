import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GoogleAnalytics } from "@/components/google-analytics";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL("https://decon.mlsystemsri.com"),
  title: {
    default: "Deconstruction Lab | Material Recovery & Separation Science — ML Systems",
    template: "%s | Deconstruction Lab — ML Systems",
  },
  description:
    "There is no secondary lumber market — yet. 80–90% of building materials are recoverable. " +
    "51% can be resold. Decon Lab is the AI-powered R&D platform making people aware of the " +
    "resale value locked inside every standing structure — before building the marketplace " +
    "to capture it. Reverse engineering residential building assemblies, from dried adhesives " +
    "to composite fasteners. The science of taking buildings apart — so the next one costs less to build.",
  keywords: [
    "deconstruction services",
    "building material recovery",
    "construction waste reduction",
    "material separation",
    "building disassembly",
    "AI construction analysis",
    "shingle recycling Rhode Island",
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
    "deconstruction Rhode Island",
    "material provenance",
    "construction demolition alternative",
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
    url: "https://decon.mlsystemsri.com",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Decon Lab — 80–90% Recovery. 51% Resale.",
    description: "AI-powered R&D for reverse engineering residential building assemblies. By ML Systems.",
  },
  alternates: {
    canonical: "https://decon.mlsystemsri.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  other: {
    "theme-color": "#F97316",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                "@id": "https://decon.mlsystemsri.com/#website",
                name: "Deconstruction Lab",
                url: "https://decon.mlsystemsri.com",
                description:
                  "AI-powered R&D platform for reverse engineering residential building assemblies. 80-90% material recovery rate, 51% resale value. Material separation science by ML Systems.",
                publisher: { "@id": "https://mlsystemsri.com/#organization" },
              },
              {
                "@context": "https://schema.org",
                "@type": "ResearchOrganization",
                "@id": "https://decon.mlsystemsri.com/#research",
                name: "Deconstruction Lab — ML Systems",
                url: "https://decon.mlsystemsri.com",
                description:
                  "R&D division of ML Systems focused on building material recovery science — dried adhesives, polyurethane, composite fasteners, material separation. Achieving 80-90% material recovery with 51% resale value.",
                parentOrganization: { "@id": "https://mlsystemsri.com/#organization" },
                areaServed: {
                  "@type": "State",
                  name: "Rhode Island",
                },
                knowsAbout: [
                  "Material Separation Science",
                  "Building Disassembly",
                  "Construction Waste Reduction",
                  "Shingle Recycling",
                  "Adhesive Separation",
                  "Material Recovery",
                ],
              },
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                "@id": "https://mlsystemsri.com/#organization",
                name: "ML Systems LLC",
                url: "https://mlsystemsri.com",
                sameAs: [
                  "https://mlsystemsri.info",
                  "https://mlsystemsri.store",
                  "https://mlsystemsri.net",
                  "https://mlsystemsri.xyz",
                  "https://app.mlsystemsri.com",
                  "https://fa.mlsystemsri.com",
                  "https://pit.mlsystemsri.com",
                  "https://collective.mlsystemsri.com",
                  "https://ae.mlsystemsri.com",
                  "https://lm.mlsystemsri.com",
                  "https://design.mlsystemsri.com",
                  "https://decon.mlsystemsri.com",
                ],
                description:
                  "Rhode Island construction proptech — closed-loop system that finances, deconstructs, designs, and builds with near-zero waste.",
              },
              {
                "@context": "https://schema.org",
                "@type": "WebAPI",
                name: "Transparency Trust Protocol",
                documentation: "https://mlsystemsri.info/api-docs",
                termsOfService: "https://mlsystemsri.com/transparency-trust-protocol",
                provider: {
                  "@type": "Organization",
                  name: "ML Systems",
                },
              },
            ]),
          }}
        />
      </head>
      <body className="min-h-screen bg-dl-black text-dl-text antialiased">
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}
