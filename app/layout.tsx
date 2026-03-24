import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SignalFlow AI | Know What to Fix. Turn User Behavior Into Growth",
  description: "SignalFlow AI helps you understand why users drop off and tells you exactly what to fix. Track behavior, uncover insights, and improve conversion with AI-powered recommendations.",
  keywords: "AI product analytics, user behavior tracking, conversion optimization, SaaS analytics tool, UX insights, growth analytics, user journey analysis, AI recommendations",
  authors: [{ name: "SignalFlow AI" }],
  openGraph: {
    type: "website",
    title: "SignalFlow AI | Stop Guessing. Start Fixing What Matters",
    description: "Go beyond dashboards. SignalFlow AI shows you why users drop off and what to improve to increase conversion and retention.",
    images: ["https://signalflow.ai/og-image.png"],
    url: "https://signalflow.ai",
  },
  twitter: {
    card: "summary_large_image",
    title: "SignalFlow AI | Turn Insights Into Action",
    description: "AI-powered behavior insights that help you fix friction points and grow faster.",
    images: ["https://signalflow.ai/og-image.png"],
  },
  icons: {
    icon: "/brandlogo.svg"
  }
};

export const viewport: Viewport = {
  themeColor: "#0B0F1A",
  width: "device-width",
  initialScale: 1.0,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/brandlogo.svg" />
      </head>
      <body
        className={`${inter.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
