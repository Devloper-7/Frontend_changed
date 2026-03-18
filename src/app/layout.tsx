import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./custom.css";
import "./globals.css";
 
import Navbar from "@/components/Navbar";
import { Lexend_Deca, Outfit, Plus_Jakarta_Sans } from 'next/font/google'
import Footer from "@/components/Footer";
import BackgroundGradients from "@/components/BackgroundGradients";
 
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
 
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
 
const lexendDeca = Lexend_Deca({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-lexend',
})
 
const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-outfit',
})
 
const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-jakarta',
})
 
export const metadata: Metadata = {
  title: "Biomket",
  description: "biomket",
  icons: {
    icon: [
      { url: '/icon.svg', type: '/svg+xml' },
    ],
  },
};
 
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        // ADDED 'relative' here so the absolute background positions correctly within the body
        className={`${lexendDeca.variable} ${outfit.variable} ${jakarta.variable} font-outfit antialiased relative`}
      >
        {/* Placed here so it sits behind everything else */}
        {/* <BackgroundGradients /> */}
       
        <Navbar />
        <div className="mx-auto w-full max-w-[1920px] relative z-10">
          {children}
        </div>
        {/* <Footer /> */}
      </body>
    </html>
  );
}