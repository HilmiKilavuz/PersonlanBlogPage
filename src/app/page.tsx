// src/app/page.tsx
import Link from "next/link";
import { getPosts } from "@/services/postService";
import Hero from "@/components/sections/Hero";
import { stripMarkdown } from "@/utils/stripMarkdown";

export default async function Home() {
  const posts = await getPosts();

  return (
    <main className="min-h-screen relative overflow-hidden bg-slate-50 selection:bg-indigo-500 selection:text-white">
      
      {/* 🌟 ARKA PLAN EFEKTLERİ */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[10%] right-[-10%] w-[500px] h-[500px] bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      {/* 1. BÖLÜM: Hero */}
      <Hero />

      {/* 2. BÖLÜM: Blog Listesi */}
      <section id="blog" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        
        <div className="flex items-end justify-between mb-12">
           <div>
              <h2 className="text-3xl font-black text-gray-900 sm:text-4xl tracking-tight">Son Yazılarım</h2>
              <div className="h-1.5 w-24 bg-indigo-500 rounded-full mt-2"></div>
           </div>
           {/* Opsiyonel: Tümünü gör butonu eklenebilir */}
           <div className="hidden sm:block text-gray-500 text-sm font-medium">
              Toplam {posts.length} yazı
           </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
          {posts.map((post) => {
            const cleanExcerpt = stripMarkdown(post.content).substring(0, 120) + "...";

            return (
              <article 
                key={post.id} 
                className="group flex flex-col bg-white/80 backdrop-blur-sm rounded-3xl shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-white/50 overflow-hidden"
              >
                <div className="flex-1 p-8 flex flex-col justify-between">
                  <div className="flex-1">
                    {/* Kategori ve Tarih */}
                    <div className="flex items-center justify-between mb-6">
                      <span className="px-3 py-1 bg-indigo-50 text-indigo-700 text-xs font-bold rounded-full uppercase tracking-wide border border-indigo-100">
                        Blog
                      </span>
                      <time className="text-xs text-gray-400 font-medium">
                        {new Date(post.createdAt).toLocaleDateString('tr-TR', {
                          year: 'numeric', month: 'long', day: 'numeric'
                        })}
                      </time>
                    </div>
                    
                    <Link href={`/blog/${post.slug}`} className="block">
                      <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-indigo-600 transition-colors">
                        {post.title}
                      </h3>
                    </Link>
                    
                    <p className="text-base text-gray-600 leading-relaxed line-clamp-3">
                      {post.excerpt || cleanExcerpt}
                    </p>
                  </div>

                  <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-between">
                     <Link 
                        href={`/blog/${post.slug}`} 
                        className="group/btn inline-flex items-center gap-2 text-sm font-bold text-gray-900 hover:text-indigo-600 transition-colors"
                     >
                       Okumaya Başla
                       <span className="bg-gray-100 text-gray-600 rounded-full p-1 group-hover/btn:bg-indigo-100 group-hover/btn:text-indigo-600 transition-all">
                         <svg className="w-4 h-4 transform group-hover/btn:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                       </span>
                     </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Boş Durum (Empty State) */}
        {posts.length === 0 && (
          <div className="flex flex-col items-center justify-center py-20 bg-white/50 backdrop-blur-sm rounded-3xl border-2 border-dashed border-gray-300">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4 text-3xl">
              📝
            </div>
            <p className="text-gray-500 text-lg font-medium">Henüz hiç blog yazısı eklenmemiş.</p>
            <p className="text-sm text-gray-400 mt-2">Admin panelinden ilk yazını yazabilirsin.</p>
          </div>
        )}

      </section>
    </main>
  );
}