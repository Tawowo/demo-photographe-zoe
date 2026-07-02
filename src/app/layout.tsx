import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Zoé Thievin — Photographe à Tours",
  description: "Photographe professionnelle à Tours spécialisée en portraits, couples, familles et lifestyle. Séances sur-mesure en lumière naturelle.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="bg-[#FAFAF8] text-[#2C2C2C] antialiased">{children}</body>
    </html>
  );
}
