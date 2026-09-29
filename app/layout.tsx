import type { Metadata, Viewport } from "next";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600", "700", "800"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const viewport: Viewport = {
  themeColor: "#2B4A34",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Love Vet | Compassionate Veterinary Care & Premium Clinic",
  description:
    "Love Vet delivers state-of-the-art veterinary medicine, surgical expertise, pet grooming, and 24x7 emergency care with deep compassion for your beloved companions.",
  keywords: [
    "veterinary clinic",
    "pet hospital",
    "emergency vet",
    "pet grooming",
    "pet vaccination",
    "animal surgery",
    "Love Vet",
  ],
  authors: [{ name: "Love Vet Clinic" }],
  openGraph: {
    title: "Love Vet — Compassionate Care for Your Beloved Companions",
    description:
      "Expert veterinary care delivered with love — from routine checkups and certifications to emergency surgery.",
    type: "website",
    locale: "en_US",
    siteName: "Love Vet Pet Clinic",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${plusJakarta.variable} scroll-smooth`}>
      <body className="bg-[#F3EEE1] text-[#1E2A22] antialiased selection:bg-[#D4A017]/30 selection:text-[#1D3424] min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
