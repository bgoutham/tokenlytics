import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import "./globals.css";

const siteUrl = "https://tokenlytics.ai";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Tokenlytics.ai — AI Token Cost Management & Optimization Platform",
    template: "%s | Tokenlytics.ai",
  },
  description:
    "Tokenlytics helps companies gain full visibility into AI token usage, optimize LLM spending by up to 40%, and continuously govern costs across OpenAI, Anthropic, and more.",
  keywords: [
    "AI token cost management",
    "LLM cost optimization",
    "token spend visibility",
    "AI cost governance",
    "token usage analytics",
    "LLM budget tracking",
    "AI spending optimization",
    "model rightsizing",
    "prompt efficiency",
    "token cost allocation",
    "AI FinOps",
    "LLM observability",
  ],
  authors: [{ name: "Tokenlytics" }],
  creator: "Tokenlytics",
  publisher: "Tokenlytics",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Tokenlytics.ai",
    title: "Tokenlytics.ai — AI Token Cost Management & Optimization Platform",
    description:
      "Gain full visibility into AI token usage, optimize LLM spending by up to 40%, and continuously govern costs across all major providers.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Tokenlytics.ai — Take control of your AI token spend",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tokenlytics.ai — AI Token Cost Management & Optimization",
    description:
      "Gain full visibility into AI token usage, optimize LLM spending by up to 40%, and continuously govern costs.",
    images: ["/og-image.png"],
    creator: "@tokenlytics",
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <JsonLd />
      </head>
      <body className="antialiased">
        <Navbar />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
