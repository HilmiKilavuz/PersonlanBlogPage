// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import { ReactLenis } from "@/utils/lenis"; // Az önce oluşturduğumuz dosya
import { Analytics } from "@vercel/analytics/next";

// 1. Modern Fontları Yüklüyoruz
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"], 
  variable: "--font-space",
  weight: ["300", "400", "500", "600", "700"] 
});

export const metadata: Metadata = {
  title: "Muhammed Hilmi Kılavuz | Creative Software Engineer",
  description: "Building secure, scalable, and beautiful digital experiences.",
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="scroll-smooth" suppressHydrationWarning={true}>
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans bg-[#050505] text-white antialiased selection:bg-indigo-500 selection:text-white`}>
        
        {/* 2. Smooth Scroll Sarmalayıcısı */}
        <ReactLenis root options={{ lerp: 0.1, duration: 1.8 ,smoothWheel: true}}>
          
          {/* 3. Global Noise Efekti (Sinematik Kumlu Görünüm) */}
          <div className="fixed inset-0 z-[9999] pointer-events-none opacity-[0.04] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
          
          <Navbar />
          
          {children}
          
          <Footer />
          
        </ReactLenis>
        
        <Analytics />
      </body>
    </html>
  );
}