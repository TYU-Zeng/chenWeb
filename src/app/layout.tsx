import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import LoadingProvider from "@/components/LoadingProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Holo Shadow | Rebirth of Light and Shadow",
  description: "Rebirth of Light and Shadow: The Metaverse of Shadow Puppetry - A digital narrative of heritage and technology by ZheChen.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased cyberpunk-theme`}
      >
        <LoadingProvider>
          {/* Accent background overlay, keeps body background image visible */}
          <div className="pointer-events-none fixed inset-0 -z-10 accent-gradient" />
          <main className="mt-6 md:mt-10">
            {children}
          </main>
          <Footer />
        </LoadingProvider>
      </body>
    </html>
  );
}
