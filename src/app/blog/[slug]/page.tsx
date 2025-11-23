// src/app/blog/[slug]/page.tsx
import { getPostBySlug } from "@/services/postService";
import { notFound } from "next/navigation";
import Link from "next/link";

// Next.js 15+ için params bir Promise'dir.
interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  
  // 1. Params'ı 'await' ile çözümlüyoruz. (Kilit nokta burası)
  const { slug } = await params;

  // 2. Debug için terminale yazdırıyoruz.
  console.log("--- DEBUG BAŞLANGICI ---");
  console.log("Aranan Slug:", slug);

  // 3. Veritabanına soruyoruz.
  const post = await getPostBySlug(slug);

  // 4. Eğer yazı yoksa veya slug undefined ise 404 ver.
  if (!slug || !post) {
    console.log("HATA: Yazı bulunamadı veya slug boş geldi.");
    notFound();
  }

  console.log("BAŞARILI: Yazı bulundu:", post.title);
  console.log("--- DEBUG BİTİŞİ ---");

  return (
    <main className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <article className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
        
        {/* Başlık Alanı */}
        <header className="bg-indigo-600 px-6 py-12 text-center text-white">
          <h1 className="text-3xl sm:text-4xl font-extrabold">
            {post.title}
          </h1>
          <div className="mt-6 text-indigo-100 text-sm">
            <time dateTime={post.createdAt.toISOString()}>
              {new Date(post.createdAt).toLocaleDateString('tr-TR', {
                year: 'numeric', month: 'long', day: 'numeric'
              })}
            </time>
          </div>
        </header>

        {/* İçerik */}
        <div className="px-6 py-10 sm:px-10">
          <div className="prose prose-indigo max-w-none text-gray-700 leading-relaxed text-lg whitespace-pre-wrap">
            {post.content}
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-gray-50 px-6 py-6 border-t border-gray-100">
           <Link href="/" className="text-indigo-600 font-medium">
             ← Ana Sayfaya Dön
           </Link>
        </footer>

      </article>
    </main>
  );
}