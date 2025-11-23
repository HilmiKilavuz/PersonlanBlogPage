// src/app/page.tsx

// Next.js'in Link bileşeni: Sayfalar arası geçişi sayfayı yenilemeden (SPA mantığıyla) yapar.
import Link from "next/link"; 
// Service Katmanı: Veritabanı kodlarını buraya çağırmıyoruz, sadece servisi çağırıyoruz (Abstraction).
import { getPosts } from "@/services/postService";

// ----------------------------------------------------------------------------
// HOME COMPONENT (Server Component)
// ----------------------------------------------------------------------------
// Not: Bu bir 'async' fonksiyondur. Next.js 13+ ile gelen Server Component yapısı sayesinde
// veritabanı işlemleri doğrudan bileşenin içinde yapılabilir (useEffect kullanmaya gerek yok!).
// ----------------------------------------------------------------------------

export default async function Home() {
  
  // ADIM 1: Veriyi Çekme (Data Fetching)
  // Servis katmanındaki fonksiyonu çağırıyoruz. 
  // 'await' kullanıyoruz çünkü veritabanından cevap gelmesi milisaniyeler sürer, beklemeliyiz.
  const posts = await getPosts();

  return (
    // MAIN CONTAINER: Sayfanın genel kapsayıcısı.
    // min-h-screen: Sayfa içeriği az olsa bile en az ekran boyu kadar yer kapla.
    // bg-slate-50: Çok hafif gri bir arka plan (Göz yormaması için).
    <main className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      
      {/* BAŞLIK BÖLÜMÜ (Hero Section) */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
          <span className="block">Merhaba, Ben [Adın]</span>
          {/* Gradient Text: Yazıya renk geçişi vererek modern bir görünüm sağlıyoruz */}
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mt-2">
            Yazılım Mühendisliği Yolculuğum
          </span>
        </h1>
        <p className="mt-4 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          Kodlama, mimari ve teknoloji üzerine notlarım. Modern web teknolojilerini kullanarak geliştirdiğim projeler.
        </p>
      </div>

      {/* BLOG LİSTESİ (Grid Layout) */}
      {/* Grid yapısı: Mobilde 1 sütun, Tablette 2, Masaüstünde 3 sütun olacak şekilde responsive tasarım */}
      <div className="max-w-7xl mx-auto grid gap-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        
        {/* MAP FONKSİYONU: Veritabanından gelen her yazı için bir 'Kart' oluşturuyoruz. */}
        {posts.map((post) => (
          
          <article 
            key={post.id} // React Performans Kuralı: Listelenen her elemanın eşsiz bir key'i olmalı.
            className="flex flex-col bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
          >
            
            {/* Kart İçeriği */}
            <div className="flex-1 p-6 flex flex-col justify-between">
              <div className="flex-1">
                
                {/* Kategori / Etiket (Şimdilik statik, ileride dinamik yapabiliriz) */}
                <p className="text-sm font-medium text-indigo-600">
                  Blog
                </p>
                
                {/* Başlık ve Link */}
                <Link href={`/blog/${post.slug}`} className="block mt-2 group">
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors">
                    {post.title}
                  </h3>
                  {/* Excerpt (Kısa özet): Eğer özet yoksa içeriğin ilk 100 karakterini al */}
                  <p className="mt-3 text-base text-gray-500 line-clamp-3">
                    {post.excerpt || post.content.substring(0, 100) + "..."}
                  </p>
                </Link>
              </div>

              {/* Alt Bilgi: Tarih */}
              <div className="mt-6 flex items-center">
                <div className="text-sm text-gray-400">
                  {/* Tarihi okunabilir formata çeviriyoruz (Örn: 10 Eki 2025) */}
                  <time dateTime={post.createdAt.toISOString()}>
                    {new Date(post.createdAt).toLocaleDateString('tr-TR', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </time>
                </div>
              </div>
            </div>
          </article>
        ))}

        {/* Eğer hiç yazı yoksa gösterilecek uyarı mesajı (Conditional Rendering) */}
        {posts.length === 0 && (
          <div className="col-span-full text-center py-12">
            <p className="text-gray-500 text-lg">Henüz hiç blog yazısı eklenmemiş.</p>
          </div>
        )}

      </div>
    </main>
  );
}