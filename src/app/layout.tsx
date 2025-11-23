import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// DEĞİŞİKLİK BURADA: Header yerine Navbar çağırıyoruz ve { } kullanıyoruz.
import { Navbar } from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer"; // Footer'a dokunmadık, o eski usul kalsın şimdilik.

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Yazılım Mühendisliği Portfolyosu",
  description: "Modern web teknolojileri üzerine blog.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="scroll-smooth">
      <body className={inter.className}>
        
        {/* Header yerine Navbar bileşenini kullanıyoruz */}
        <Navbar />
        
        {children}
        
        <Footer />
        
      </body>
    </html>
  );
}