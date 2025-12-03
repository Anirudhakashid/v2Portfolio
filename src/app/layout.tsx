import type { Metadata } from "next";
import { JetBrains_Mono, Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { Databuddy } from "@databuddy/sdk/react";

//configure the fonts
const serif = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Anirudha Kashid",
  description: "portfolio and digital garden.",
  openGraph: {
    title: "Anirudha | Portfolio",
    description: "portfolio and digital garden.",
    url: "https://anirudhakashid.tech",
    siteName: "Anirudha's Portfolio",
    images: [
      {
        url: "/ogImage.jpg",
        width: 1200,
        height: 630,
        alt: "Anirudha Portfolio Preview",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anirudha | Portfolio",
    description: "portfolio and digital garden.",
    images: ["/ogImage.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${serif.variable} ${mono.variable} ${sans.variable}`}
      suppressHydrationWarning
    >
      <body className="bg-neutral-950 text-neutral-200 antialiased font-sans selection:bg-neutral-700 selection:text-white">
        <main className="max-w-4xl mx-auto px-6 py-12 md:py-20">
          {children}
        </main>

        {/* Databuddy Analytics */}
        <Databuddy clientId="t8rtm-9BXY7cXHQd41jsH" enableBatching={true} />
      </body>
    </html>
  );
}
