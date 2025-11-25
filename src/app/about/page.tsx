// src/app/about/page.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// --- GITHUB VERİ ÇEKME ---
interface GithubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string;
  updated_at: string;
  fork: boolean;
  stargazers_count: number;
}

export default function AboutPage() {
  const [repos, setRepos] = useState<GithubRepo[]>([]);

  useEffect(() => {
    async function fetchRepos() {
      try {
        // DÜZELTME BURADA YAPILDI: per_page=100 (Tüm projeler)
        const res = await fetch('https://api.github.com/users/HilmiKilavuz/repos?sort=updated&direction=desc&per_page=100');
        if (res.ok) {
          const data = await res.json();
          // Fork olmayan, kendi projelerini filtrele
          setRepos(data.filter((repo: GithubRepo) => !repo.fork));
        }
      } catch (error) {
        console.error("Repo fetch error", error);
      }
    }
    fetchRepos();
  }, []);

  // Dil renkleri
  const getLanguageColor = (lang: string) => {
    const colors: Record<string, string> = {
      Kotlin: "bg-orange-500",
      Java: "bg-red-500",
      "C#": "bg-blue-500",
      Python: "bg-yellow-500",
      TypeScript: "bg-indigo-500",
      JavaScript: "bg-yellow-400",
      HTML: "bg-orange-600",
      "C++": "bg-blue-700",
    };
    return colors[lang] || "bg-gray-500";
  };

  return (
    <main className="min-h-screen bg-[#030303] pt-32 pb-20 px-4 sm:px-6 lg:px-8 selection:bg-indigo-500 selection:text-white overflow-hidden relative">
      
      {/* ARKA PLAN EFEKTLERİ (Cyber Grid) */}
      <div className="fixed inset-0 -z-10 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:60px_60px] opacity-20"></div>
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-indigo-900/20 rounded-full blur-[180px] -z-10 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto">
        
        {/* --- BÖLÜM 1: GİRİŞ & KİMLİK KARTI --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 mb-32 items-center">
          
          {/* SOL: METİN (Hikaye) */}
          <div className="lg:col-span-7 space-y-8 order-2 lg:order-1">
            <motion.div 
              initial={{ opacity: 0, x: -20 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono tracking-widest"
            >
              <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-pulse"></span>
              SİSTEM_AKTİF
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: 0.2, duration: 0.6 }}
              className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight"
            >
              Geleceği <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-white">
                Kodla.
              </span>
            </motion.h1>

            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-gray-400 text-lg leading-relaxed space-y-6"
            >
              <p>
                Merhaba, ben <strong className="text-white">Hilmi Kılavuz</strong>. 
                Fırat Üniversitesi Yazılım Mühendisliği 3. sınıf öğrencisiyim. 
                Yazılım geliştirme tutkum, özellikle <span className="text-indigo-400">Siber Güvenlik</span> ve <span className="text-indigo-400">Mobil Uygulama</span> alanlarında derinleşerek devam ediyor.
              </p>
              <p>
                Takım çalışmasına yatkın, liderlik vasıflarına sahip ve teknolojinin her alanında kendini geliştirmeye adamış bir mühendis adayıyım.
              </p>
            </motion.div>

            {/* İstatistikler (Mini Grid) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: 0.6, duration: 0.6 }}
              className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10"
            >
              <div>
                <h3 className="text-3xl font-bold text-white">3.48</h3>
                <p className="text-xs text-gray-500 font-mono uppercase mt-1">GANO</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-white">3.</h3>
                <p className="text-xs text-gray-500 font-mono uppercase mt-1">Sınıf</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-white">B1</h3>
                <p className="text-xs text-gray-500 font-mono uppercase mt-1">İngilizce</p>
              </div>
            </motion.div>
          </div>

          {/* SAĞ: DİJİTAL KİMLİK KARTI */}
          <motion.div 
            initial={{ opacity: 0, rotateY: 30, x: 50 }} 
            animate={{ opacity: 1, rotateY: 0, x: 0 }} 
            transition={{ delay: 0.5, duration: 1, type: "spring" }}
            className="lg:col-span-5 order-1 lg:order-2 perspective-1000 relative group"
          >
             <div className="relative bg-gradient-to-br from-white/10 to-black border border-white/10 p-6 rounded-3xl backdrop-blur-xl shadow-2xl transform transition-transform duration-500 group-hover:rotate-1 group-hover:scale-[1.02]">
                
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-indigo-500/20 via-transparent to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                <div className="flex items-center justify-between mb-6">
                   <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-2xl">🛡️</div>
                   <div className="text-right">
                     
                      <p className="text-xs font-bold text-white tracking-widest">MÜHENDİS</p>
                   </div>
                </div>

                <div className="relative aspect-square rounded-2xl overflow-hidden border-2 border-white/10 mb-6">
                   <Image src="https://github.com/HilmiKilavuz.png" alt="Hilmi" fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                </div>

                <div className="space-y-3">
                   <div className="flex justify-between text-sm border-b border-white/5 pb-2">
                      <span className="text-gray-500 font-mono">Rol</span>
                      <span className="text-white font-medium">Yazılım Mühendisliği Öğr.</span>
                   </div>
                   <div className="flex justify-between text-sm border-b border-white/5 pb-2">
                      <span className="text-gray-500 font-mono">Odak</span>
                      <span className="text-indigo-400 font-medium">Siber Güvenlik & Mobil</span>
                   </div>
                  
                </div>

                <div className="mt-6 h-8 opacity-30 bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/UPC-A-036000291452.svg/1200px-UPC-A-036000291452.svg.png')] bg-cover grayscale"></div>
             </div>

             <div className="absolute inset-0 bg-indigo-600 rounded-3xl blur-[80px] opacity-20 -z-10"></div>
          </motion.div>

        </div>

        {/* --- BÖLÜM 2: TEKNİK YETKİNLİKLER (CV Verisi) --- */}
        <section className="mb-32">
           <div className="flex items-end justify-between mb-10 border-b border-white/10 pb-6">
              <h2 className="font-display text-3xl text-white">Teknik Cephanelik</h2>
              <p className="text-gray-500 font-mono text-sm">CV_DATA_V1.3</p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* Kategori 1: Mobil & Diller */}
              <div className="bg-white/5 border border-white/5 rounded-2xl p-6 hover:bg-white/10 transition-colors">
                 <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center mb-4 text-green-400">📱</div>
                 <h3 className="text-lg font-bold text-white mb-4">Mobil & Diller</h3>
                 <ul className="space-y-2 text-sm text-gray-400 font-mono">
                    <li>Kotlin & Java (Android)</li>
                    <li>Jetpack Compose</li>
                    <li>Python</li>
                    <li>XML Tasarım</li>
                 </ul>
              </div>

              {/* Kategori 2: Backend & Veri */}
              <div className="bg-white/5 border border-white/5 rounded-2xl p-6 hover:bg-white/10 transition-colors">
                 <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4 text-blue-400">💻</div>
                 <h3 className="text-lg font-bold text-white mb-4">Backend & Veri</h3>
                 <ul className="space-y-2 text-sm text-gray-400 font-mono">
                    <li>C# & Windows Forms</li>
                    <li>MSSQL Server</li>
                    <li>SQLite & Firebase</li>
                    <li>DevExpress Araçları</li>
                 </ul>
              </div>

              {/* Kategori 3: Araçlar & Yöntemler */}
              <div className="bg-white/5 border border-white/5 rounded-2xl p-6 hover:bg-white/10 transition-colors">
                 <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4 text-purple-400">🛠️</div>
                 <h3 className="text-lg font-bold text-white mb-4">Araçlar & Metod</h3>
                 <ul className="space-y-2 text-sm text-gray-400 font-mono">
                    <li>Git & GitHub</li>
                    <li>Visual Studio & Android Studio</li>
                    <li>OOP (Nesne Yönelimli)</li>
                    <li>MVVM Mimarisi</li>
                 </ul>
              </div>

           </div>
        </section>

        {/* --- BÖLÜM 3: EĞİTİM VE SERTİFİKALAR --- */}
        <section className="mb-32">
             <h2 className="text-sm font-mono text-indigo-500 mb-8 tracking-widest uppercase">03. EĞİTİM & SERTİFİKALAR</h2>
             
             <div className="border-l border-white/10 ml-2 space-y-12">
                <div className="pl-8 relative">
                   <span className="absolute -left-[5px] top-2 w-2.5 h-2.5 bg-indigo-500 rounded-full"></span>
                   <span className="block text-xs font-mono text-gray-500 mb-1">2023 — GÜNÜMÜZ</span>
                   <h3 className="text-xl font-bold text-white">Fırat Üniversitesi</h3>
                   <p className="text-indigo-400 text-sm mb-2">Yazılım Mühendisliği (GANO: 3.48)</p>
                </div>

                <div className="pl-8 relative">
                   <span className="absolute -left-[5px] top-2 w-2.5 h-2.5 bg-gray-600 rounded-full"></span>
                   <span className="block text-xs font-mono text-gray-500 mb-1">SERTİFİKALAR</span>
                   <div className="space-y-4">
                      <div>
                         <h4 className="text-white font-bold">Kotlin ile Mobil Geliştirme</h4>
                         <p className="text-gray-500 text-sm">Android Uygulama Geliştirme</p>
                      </div>
                      <div>
                         <h4 className="text-white font-bold">Arduino İle Programlama ve Tasarım</h4>
                         <p className="text-gray-500 text-sm">2020</p>
                      </div>
                   </div>
                </div>
             </div>
        </section>

        {/* --- BÖLÜM 4: GITHUB PROJELERİ (TÜMÜ) --- */}
        <section>
           <div className="flex items-end justify-between mb-10 border-b border-white/10 pb-6">
              <h2 className="font-display text-3xl text-white">Tüm Projelerim</h2>
              <div className="hidden md:flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-gray-400">
                 <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                 GitHub Sync: Active
              </div>
           </div>

           {repos.length > 0 ? (
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {repos.map((repo) => (
                  <Link 
                    key={repo.id} 
                    href={repo.html_url} 
                    target="_blank"
                    className="group relative bg-[#0a0a0a] border border-white/10 rounded-xl p-6 hover:border-indigo-500/50 transition-all duration-300 overflow-hidden flex flex-col h-full"
                  >
                     <div className="absolute top-0 right-0 p-16 bg-indigo-600/10 rounded-full blur-3xl -mr-8 -mt-8 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                     
                     <div className="relative z-10 flex justify-between items-start mb-4">
                        <h3 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors line-clamp-1">{repo.name}</h3>
                        <svg className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                     </div>
                     
                     <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-2 flex-grow">
                        {repo.description || "Açıklama mevcut değil."}
                     </p>

                     <div className="flex items-center gap-3 mt-auto pt-4 border-t border-white/5">
                        <span className={`w-2 h-2 rounded-full ${getLanguageColor(repo.language)}`}></span>
                        <span className="text-xs text-gray-300 font-mono">{repo.language || "N/A"}</span>
                        <span className="text-xs text-gray-600 ml-auto font-mono">{new Date(repo.updated_at).getFullYear()}</span>
                     </div>
                  </Link>
                ))}
             </div>
           ) : (
             <div className="text-center py-12 text-gray-500">GitHub verileri yükleniyor...</div>
           )}
        </section>

      </div>
    </main>
  );
}