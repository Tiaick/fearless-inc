import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

export const metadata: Metadata = {
  title: "FEARLESS INC — Tattoo Art by Petzko",
  description: "Premium tattoo artistry in Vienna. Petzko creates bespoke blackwork, realism, and fine line tattoos at Fearless Inc studio.",
  keywords: ["tattoo", "tattoo studio", "Vienna", "Petzko", "Fearless Inc", "blackwork", "realism tattoo", "fine line"],
  openGraph: {
    title: "FEARLESS INC — Tattoo Art by Petzko",
    description: "Premium tattoo artistry in Vienna.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="grain">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body style={{ background: '#0b0b0b', color: '#f2f2f2', fontFamily: 'var(--font-inter)' }}>
        <CustomCursor />
        <Navigation />
        <main className="page-enter">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
