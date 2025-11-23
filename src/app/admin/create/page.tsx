// src/app/admin/create/page.tsx
import { createPost } from "@/actions/postActions";
import Link from "next/link";

export default function CreatePostPage() {
  return (
    <main className="min-h-screen relative overflow-hidden bg-slate-50 py-24 px-4 sm:px-6 lg:px-8 selection:bg-indigo-500 selection:text-white">
      
      {/* 🌟 ARKA PLAN EFEKTLERİ (Blob) */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      </div>

      <div className="max-w-4xl mx-auto">
        
        {/* Üst Kısım: Başlık ve Geri Dön */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-black text-gray-900 tracking-tight">Yeni İçerik Oluştur</h1>
            <p className="text-indigo-600 font-medium">Bloguna yeni bir soluk getir 🚀</p>
          </div>
          <Link 
            href="/" 
            className="hidden sm:flex items-center gap-2 px-4 py-2 bg-white/50 backdrop-blur-sm border border-gray-200 rounded-full text-sm font-medium text-gray-600 hover:bg-white hover:shadow-md transition-all"
          >
            ← İptal ve Dön
          </Link>
        </div>

        {/* 📝 FORM KARTI (Glassmorphism) */}
        <div className="relative backdrop-blur-xl bg-white/70 border border-white/50 rounded-3xl shadow-2xl p-8 md:p-10 overflow-hidden">
          
          {/* Dekoratif Üst Çizgi */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>

          <form action={createPost} className="space-y-8">
            
            {/* 1. Satır: Başlık */}
            <div className="space-y-2">
              <label htmlFor="title" className="text-sm font-bold text-gray-700 uppercase tracking-wider ml-1">
                Yazı Başlığı
              </label>
              <input 
                type="text" 
                name="title" 
                id="title"
                required
                placeholder="Örn: Modern Yazılım Mimarisi ve Gelecek"
                className="block w-full rounded-2xl border-0 bg-white/50 px-4 py-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-lg sm:leading-6 transition-all focus:bg-white"
              />
            </div>

            {/* 2. Satır: Slug & Görsel (Yan Yana) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="slug" className="text-sm font-bold text-gray-700 uppercase tracking-wider ml-1">
                  URL Uzantısı (Slug)
                </label>
                <div className="relative">
                   <span className="absolute left-4 top-4 text-gray-400 font-medium">/blog/</span>
                   <input 
                    type="text" 
                    name="slug" 
                    id="slug"
                    required
                    placeholder="modern-yazilim-mimarisi"
                    className="block w-full rounded-2xl border-0 bg-white/50 pl-16 pr-4 py-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 transition-all focus:bg-white"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="coverImage" className="text-sm font-bold text-gray-700 uppercase tracking-wider ml-1">
                  Kapak Görseli (URL)
                </label>
                <input 
                  type="text" 
                  name="coverImage" 
                  id="coverImage"
                  placeholder="https://images.unsplash.com/..."
                  className="block w-full rounded-2xl border-0 bg-white/50 px-4 py-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 transition-all focus:bg-white"
                />
              </div>
            </div>

            {/* 3. Satır: Özet */}
            <div className="space-y-2">
              <label htmlFor="excerpt" className="text-sm font-bold text-gray-700 uppercase tracking-wider ml-1">
                Kısa Özet (Meta)
              </label>
              <textarea 
                name="excerpt" 
                id="excerpt"
                rows={2}
                placeholder="Okuyucuyu cezbedecek kısa bir giriş yazısı..."
                className="block w-full rounded-2xl border-0 bg-white/50 px-4 py-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 transition-all focus:bg-white resize-none"
              ></textarea>
            </div>

            {/* 4. Satır: İçerik (Markdown) */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label htmlFor="content" className="text-sm font-bold text-gray-700 uppercase tracking-wider ml-1">
                  İçerik (Markdown)
                </label>
                <span className="text-xs font-medium text-indigo-500 bg-indigo-50 px-2 py-1 rounded-md">Markdown Destekli</span>
              </div>
              <textarea 
                name="content" 
                id="content"
                rows={12}
                required
                placeholder="# Başlık&#10;Buraya içeriğini yazmaya başla..."
                className="block w-full rounded-2xl border-0 bg-white/50 px-4 py-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 font-mono transition-all focus:bg-white"
              ></textarea>
            </div>

            {/* Buton Alanı */}
            <div className="pt-4 border-t border-gray-100">
              <button
                type="submit"
                className="group relative w-full flex justify-center py-4 px-4 border border-transparent rounded-2xl text-base font-bold text-white bg-gray-900 overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-gray-800 to-black opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <span className="relative flex items-center gap-2">
                  Yazıyı Yayınla ✨
                </span>
              </button>
            </div>

          </form>
        </div>
      </div>
    </main>
  );
}