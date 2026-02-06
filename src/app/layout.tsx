import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import RemoveNextOverlay from '@/components/RemoveNextOverlay';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dallas Grand Beach Hotel",
  description: "Dallas Grand Beach Hotel — luxury beachfront accommodation in Oghara, Delta State. Book rooms, enjoy world-class facilities and beachfront dining.",
  openGraph: {
    siteName: "Dallas Grand Beach Hotel",
    type: "website",
    title: "Dallas Grand Beach Hotel — Luxury Beachfront Resort",
    description: "Experience luxury, comfort, and seaside relaxation at Dallas Grand Beach Hotel. Book now for exclusive offers.",
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
        <link rel="icon" href="/logo.png" type="image/png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-gray-900 min-h-screen flex flex-col m-0`}
      >
        <RemoveNextOverlay />
        {children}
      </body>
    </html>
  );
}
