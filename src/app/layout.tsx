import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

export const metadata: Metadata = {
  title: "FEARLESS INC — Tattoo Kunst von Petzko",
  description: "Premium Tattoo Kunst in Ellerau. Petzko kreiert maßgeschneiderte Blackwork, Realism und Fine Line Tattoos im Fearless Inc Studio.",
  keywords: ["tattoo", "tattoo studio", "Ellerau", "Petzko", "Fearless Inc", "blackwork", "realism tattoo", "fine line", "tätowierer"],
  openGraph: {
    title: "FEARLESS INC — Tattoo Kunst von Petzko",
    description: "Premium Tattoo Kunst in Ellerau.",
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
