import type { Metadata } from "next";
import { JetBrains_Mono, Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

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
  title: "Anirudha Kashid | Software Engineer",
  description: "Portfolio and digital garden.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${serif.variable} ${mono.variable} ${sans.variable}`}
    >
      <body className="bg-neutral-950 text-neutral-200 antialiased font-sans selection:bg-neutral-700 selection:text-white">
        <main className="max-w-4xl mx-auto px-6 py-12 md:py-20">
          {children}
        </main>
      </body>
    </html>
  );
}
