import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
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
        {/* JSON-LD structured data for SEO */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Hotel",
          "name": "Dallas Grand Beach Hotel",
          "url": "https://dallasgrandbeachhotel.example",
          "logo": "https://dallasgrandbeachhotel.example/logo.png",
          "telephone": "+2349074554875",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "1 & 5 court road, opposite ewgla secretariat",
            "addressLocality": "Oghara",
            "addressRegion": "Delta",
            "addressCountry": "NG"
          }
        }) }} />
        {/* Google Analytics */}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-5VCFDDPX38" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-5VCFDDPX38');
          `}
        </Script>
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
