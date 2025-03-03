import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Manrope } from "next/font/google";
import "./globals.css";
import Cursor from "./components/cursor/cursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const inter=Inter({
  variable:"--font-inter",
  subsets:["latin"]
})
const manrope=Manrope({
  variable:"--font-Manrope",
  subsets:["latin"]
})

export const metadata: Metadata = {
  title: "Vayudoot",
  description: "Drone competition hosted by ABES Engineering College and Orbits",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable},${manrope.variable}`} 
      >
        {children}
        
      </body>
    </html>
  );
}
