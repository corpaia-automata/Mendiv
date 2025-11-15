import type React from "react";
import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { NavbarDemo } from "@/components/navbar-shrink";

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-lato",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mendiv - Your Next Chapter | Decode Your Biology, Design Your Future",
  description:
    "LifeMap360™ – Your Genetic & Epigenetic Master Plan. From DNA to daily life — a science-backed map to your healthiest future.",
  generator: "v0.app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Navbar />
      {/* <NavbarDemo /> */}
      <body className={`font-sans ${lato.variable} antialiased`}>
        {children}
      </body>
      <Footer />
    </html>
  );
}
