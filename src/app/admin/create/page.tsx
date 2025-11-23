// src/app/admin/create/page.tsx
import { createPost } from "@/actions/postActions";

export default function CreatePostPage() {
  return (
    <main className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        
        {/* Başlık */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900">Yeni Blog Yazısı Ekle</h1>
          <p className="mt-2 text-gray-600">Düşüncelerini dünyaya duyurma vakti 🚀</p>
        </div>

        {/* Form Alanı */}
        <div className="bg-white shadow-xl rounded-2xl overflow-hidden border border-gray-100 p-8">
          
          {/* FORM ELEMENTİ
            action={createPost} -> Burası Next.js'in sihridir. 
            JavaScript kapalı olsa bile bu form çalışır!
          */}
          <form action={createPost} className="space-y-6">
            
            {/* Başlık Input */}
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700">Yazı Başlığı</label>
              <input 
                type="text" 
                name="title" 
                id="title"
                required
                placeholder="Örn: Modern Yazılım Mimarisi Nedir?"
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
              />
            </div>

            {/* Slug (URL) Input */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="slug" className="block text-sm font-medium text-gray-700">URL Uzantısı (Slug)</label>
                <input 
                  type="text" 
                  name="slug" 
                  id="slug"
                  required
                  placeholder="modern-yazilim-mimarisi"
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                />
                <p className="mt-1 text-xs text-gray-500">Türkçe karakter ve boşluk kullanma (örn: kucuk-harf-ve-tire).</p>
              </div>

              {/* Görsel URL Input */}
              <div>
                <label htmlFor="coverImage" className="block text-sm font-medium text-gray-700">Kapak Resmi URL (Opsiyonel)</label>
                <input 
                  type="text" 
                  name="coverImage" 
                  id="coverImage"
                  placeholder="https://images.unsplash.com/..."
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                />
              </div>
            </div>

            {/* Özet (Excerpt) */}
            <div>
              <label htmlFor="excerpt" className="block text-sm font-medium text-gray-700">Kısa Özet</label>
              <textarea 
                name="excerpt" 
                id="excerpt"
                rows={2}
                placeholder="Kartlarda görünecek kısa açıklama..."
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
              ></textarea>
            </div>

            {/* İçerik (Content) */}
            <div>
              <label htmlFor="content" className="block text-sm font-medium text-gray-700">İçerik</label>
              <textarea 
                name="content" 
                id="content"
                rows={10}
                required
                placeholder="Blog yazını buraya yaz..."
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 font-mono text-sm"
              ></textarea>
            </div>

            {/* Gönder Butonu */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
              >
                Yazıyı Yayınla ✨
              </button>
            </div>

          </form>
        </div>
      </div>
    </main>
  );
}