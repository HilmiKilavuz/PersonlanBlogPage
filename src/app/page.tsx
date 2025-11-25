// src/app/page.tsx
import Link from "next/link";
import { getPosts } from "@/services/postService";
import Hero from "@/components/sections/Hero";
import { stripMarkdown } from "@/utils/stripMarkdown";

export default async function Home() {
  const posts = await getPosts();

  return (
    <main className="min-h-screen bg-[#050505] selection:bg-indigo-500 selection:text-white">
      
      {/* 1. BÖLÜM: Hero (Zaten yapmıştık) */}
      <Hero />

      {/* 2. BÖLÜM: Blog Listesi (YENİ TASARIM) */}
      <section id="blog" className="relative py-32 px-4 sm:px-6 lg:px-8">
        
        {/* Arka Plan Işıkları */}
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-indigo-900/20 rounded-full blur-[120px] pointer-events-none opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          
          {/* Bölüm Başlığı */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
             <div>
                <h2 className="font-display text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
                  Blog Yazılarım
                </h2>
                <p className="text-gray-400 text-lg max-w-xl">
                  Yazılım hakkında çeşitli tecrübeler ve dijital deneyimler üzerine teknik notlar ve araştırmalarım.
                </p>
             </div>
             
             {/* Toplam Yazı Sayacı (Dekoratif) */}
             <div className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 font-mono">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                System Logs: {posts.length}
             </div>
          </div>

          {/* BLOG GRID (Masonry / Bento Havası) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, index) => {
              const cleanExcerpt = stripMarkdown(post.content).substring(0, 120) + "...";
              
              // İlk yazıyı (En güncel) vurgulamak için genişletelim (Featured Post)
              const isFeatured = index === 0; 

              return (
                <Link 
                  href={`/blog/${post.slug}`}
                  key={post.id} 
                  className={`group relative flex flex-col justify-between p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-indigo-500/30 transition-all duration-500 overflow-hidden ${isFeatured ? 'md:col-span-2 bg-gradient-to-br from-white/5 to-white/10' : ''}`}
                >
                  
                  {/* Kart İçi Glow Efekti (Hover) */}
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/0 via-indigo-600/0 to-indigo-600/0 group-hover:to-indigo-600/10 transition-all duration-500"></div>

                  {/* İçerik */}
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-3">
                        
                        <time className="text-xs font-mono text-gray-500 uppercase tracking-wider">
                          {new Date(post.createdAt).toLocaleDateString('tr-TR', { month: 'short', day: 'numeric', year: 'numeric' })}
                        </time>
                      </div>
                      {isFeatured && (
                        <span className="flex items-center gap-1 text-xs font-bold text-white bg-white/20 px-2 py-1 rounded-md">
                          🔥 NEW
                        </span>
                      )}
                    </div>
                    
                    <h3 className={`font-display font-bold text-white mb-4 group-hover:text-indigo-300 transition-colors ${isFeatured ? 'text-3xl md:text-4xl' : 'text-xl'}`}>
                      {post.title}
                    </h3>
                    
                    <p className={`text-gray-400 leading-relaxed ${isFeatured ? 'text-lg max-w-2xl' : 'text-sm line-clamp-3'}`}>
                      {post.excerpt || cleanExcerpt}
                    </p>
                  </div>

                  {/* Alt Kısım: Okuma Butonu */}
                  <div className="relative z-10 mt-8 flex items-center gap-2 text-sm font-medium text-white group/btn">
                     <span className="border-b border-white/30 pb-0.5 group-hover/btn:border-white transition-colors">Yazıyı Oku</span>
                     <svg className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                  </div>

                </Link>
              );
            })}
          </div>

          {/* Boş Durum (Empty State) */}
          {posts.length === 0 && (
            <div className="flex flex-col items-center justify-center py-32 border border-white/10 border-dashed rounded-3xl bg-white/5">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-4 text-2xl animate-pulse">
                📡
              </div>
              <p className="text-white text-lg font-display">Sinyal Yok.</p>
              <p className="text-gray-500 text-sm mt-2 font-mono">Veritabanında henüz kayıtlı veri bulunamadı.</p>
            </div>
          )}

        </div>
      </section>
    </main>
  );
}