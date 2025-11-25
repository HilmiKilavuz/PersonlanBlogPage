// src/components/sections/Hero.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring, useMotionTemplate, useMotionValue } from "framer-motion";
import { useRef, useEffect } from "react";

// Kelime Animasyonu için Yardımcı Bileşen
const Word = ({ children, delay = 0 }: { children: string; delay?: number }) => {
  return (
    <span className="inline-block overflow-hidden mr-2 pb-2 align-bottom">
      <motion.span
        initial={{ y: "100%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 0.8, ease: [0.2, 0.65, 0.3, 0.9], delay: delay }}
        className="inline-block"
      >
        {children}
      </motion.span>
    </span>
  );
};

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });
  
  // Scroll Paralaks Efektleri
  const yBackground = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacityHero = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Mouse Takip Eden Spotlight Efekti
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = ({ clientX, clientY }: MouseEvent) => {
      mouseX.set(clientX);
      mouseY.set(clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });
  const spotlightBackground = useMotionTemplate`radial-gradient(600px circle at ${springX}px ${springY}px, rgba(99, 102, 241, 0.15), transparent 80%)`;

  return (
    <section ref={containerRef} className="relative min-h-screen flex flex-col justify-center px-6 sm:px-12 lg:px-24 bg-[#050505] overflow-hidden">
      
      {/* 1. ARKA PLAN KATMANLARI */}
      <motion.div 
        className="absolute inset-0 z-0 pointer-events-none"
        style={{ background: spotlightBackground }}
      />
      <div className="absolute inset-0 z-0 bg-noise pointer-events-none opacity-40"></div>
      
      {/* Dekoratif Büyük Çemberler */}
      <motion.div style={{ y: yBackground }} className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-indigo-900/30 rounded-full blur-[120px] z-0 pointer-events-none mix-blend-screen" />
      
      {/* 2. İÇERİK ALANI */}
      <motion.div style={{ opacity: opacityHero }} className="relative z-10 w-full max-w-[1600px] mx-auto mt-12 lg:mt-20">
        
        {/* Üst Bilgi: Kimlik ve Durum */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="flex flex-wrap items-center gap-6 mb-8 text-gray-400 font-mono text-xs sm:text-sm tracking-widest uppercase"
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span>İş Tekliflerine Açık</span>
          </div>
          <span className="hidden sm:inline w-8 h-[1px] bg-indigo-500/50"></span>
          <span>Yazılım Mühendisliği (3. Sınıf)</span>
          <span className="hidden sm:inline w-8 h-[1px] bg-indigo-500/50"></span>
          
        </motion.div>

        {/* ANA BAŞLIK (Devasa Tipografi - Türkçe) */}
        <h1 className="font-display text-5xl sm:text-7xl lg:text-[9rem] font-bold leading-[0.95] tracking-tighter text-white mix-blend-difference mb-8">
          <div className="block">
            <Word delay={0.1}>Geleceği</Word>
            <span className="text-gray-600 mx-4 font-light italic text-4xl sm:text-6xl lg:text-[5rem] align-middle">&</span>
            <Word delay={0.2}>Güvenle İnşa Et.</Word>
          </div>
          
        </h1>

        {/* Alt Izgara (Grid Layout) */}
        <div className="mt-12 lg:mt-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* SOL: Profil Fotoğrafı ve Detaylar */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="lg:col-span-4 relative group"
          >
             <div className="relative w-48 h-48 sm:w-64 sm:h-64 rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl bg-gray-900">
                <Image 
                  src="https://github.com/HilmiKilavuz.png"
                  alt="Muhammed Hilmi Kılavuz"
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out scale-110 group-hover:scale-100"
                />
                {/* Üzerine Noise Doku */}
                <div className="absolute inset-0 bg-noise opacity-20 mix-blend-overlay"></div>
             </div>
             
             {/* Dekoratif Dönen Çember */}
             <div className="absolute -top-4 -right-4 w-24 h-24 border border-indigo-500/30 rounded-full animate-[spin_10s_linear_infinite]"></div>
          </motion.div>

          {/* SAĞ: Açıklama Metni ve Butonlar */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="lg:col-span-8 flex flex-col justify-between h-full"
          >
            <p className="text-lg sm:text-2xl text-gray-400 font-light leading-relaxed max-w-3xl">
              Merhaba, ben <span className="text-white font-medium">Hilmi Kılavuz</span>. Yazılım Mühendisliği öğrencisiyim.
              Kariyerime <span className="text-indigo-400 border-b border-indigo-500/30 pb-1">Mobil Geliştirme</span> ile başladım, şimdi ise rotamı <span className="text-purple-400 border-b border-purple-500/30 pb-1">Siber Güvenlik</span> alanına çevirdim.Ve bu alanlarda kendimi geliştirmeye çalışıyorum. 
             
            </p>

            <div className="mt-10 flex flex-wrap gap-6">
              <Link 
                href="#blog" 
                className="group relative px-8 py-4 bg-white text-black rounded-full overflow-hidden flex items-center gap-3 transition-transform hover:scale-105"
              >
                <span className="relative z-10 font-bold text-lg tracking-tight">Blog Yazılarımı Gör</span>
                <svg className="relative z-10 w-5 h-5 transform group-hover:rotate-45 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </Link>

              <Link 
                href="/about" 
                className="px-8 py-4 text-white border border-white/10 bg-white/5 rounded-full hover:bg-white/10 hover:border-white/20 transition-colors font-medium text-lg flex items-center gap-2 backdrop-blur-sm"
              >
                Hakkımda
              </Link>
            </div>
          </motion.div>

        </div>

      </motion.div>

      {/* 3. SCROLL GÖSTERGESİ */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 right-8 flex items-center gap-4"
      >
        <span className="text-xs text-gray-500 font-mono tracking-widest uppercase">Kaydır</span>
        <div className="w-12 h-[1px] bg-gradient-to-r from-gray-500 to-transparent"></div>
      </motion.div>

    </section>
  );
}