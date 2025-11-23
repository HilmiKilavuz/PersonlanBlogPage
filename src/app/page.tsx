// src/app/page.tsx
import Link from "next/link";
import { getPosts } from "@/services/postService";
import Hero from "@/components/sections/Hero"; // <-- Yeni bileşeni import ettik

export default async function Home() {
  const posts = await getPosts();

  return (
    <main className="min-h-screen bg-slate-50">
      
      {/* 1. BÖLÜM: Hero (Hakkımda) */}
      <Hero />

      {/* 2. BÖLÜM: Blog Listesi */}
      {/* id="blog" ekledik ki butona basınca buraya kaysın */}
      <section id="blog" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Son Yazılar</h2>
          <p className="mt-2 text-gray-600">Teknoloji ve yazılım üzerine notlarım</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
          {posts.map((post) => (
            <article 
              key={post.id} 
              className="flex flex-col bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="flex-1 p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-indigo-600">Blog</p>
                  <Link href={`/blog/${post.slug}`} className="block mt-2 group">
                    <h3 className="text-xl font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors">
                      {post.title}
                    </h3>
                    <p className="mt-3 text-base text-gray-500 line-clamp-3">
                      {post.excerpt || post.content.substring(0, 100) + "..."}
                    </p>
                  </Link>
                </div>
                <div className="mt-6 flex items-center">
                  <div className="text-sm text-gray-400">
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
        </div>
      </section>
    </main>
  );
}