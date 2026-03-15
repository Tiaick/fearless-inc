import type { Metadata } from "next";
import { Bebas_Neue, Barlow_Condensed, DM_Sans } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const barlowCondensed = Barlow_Condensed({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const dmSans = DM_Sans({
  weight: ["300", "400", "500"],
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "FEARLESS INC — Tattoo Kunst von Petzko",
  description: "Premium Tattoo Kunst in Ellerau. Petzko kreiert maßgeschneiderte Blackwork, Realism und Fine Line Tattoos im Fearless Inc Studio.",
  keywords: ["tattoo", "tattoo studio", "Ellerau", "Petzko", "Fearless Inc", "blackwork", "realism tattoo", "fine line"],
  openGraph: {
    title: "FEARLESS INC — Tattoo Kunst von Petzko",
    description: "Premium Tattoo Kunst in Ellerau.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="de"
      className={`${bebasNeue.variable} ${barlowCondensed.variable} ${dmSans.variable}`}
    >
      <body>
        <CustomCursor />
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
