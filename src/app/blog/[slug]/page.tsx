// src/app/blog/[slug]/page.tsx
import { getPostBySlug } from "@/services/postService";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image"; // Image bileşenini ekledik
import ReactMarkdown from "react-markdown";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <article className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
        
        {/* --- KAPAK FOTOĞRAFI ALANI (YENİ) --- */}
        {post.coverImage && (
          <div className="relative w-full h-64 sm:h-80 md:h-96">
            <Image 
              src={post.coverImage}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
            {/* Resmin üzerine hafif bir karartma atalım ki başlık daha iyi okunsun (Opsiyonel) */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          </div>
        )}

        {/* Header (Resim varsa arka plan şeffaf olsun, yoksa lacivert kalsın) */}
        <header className={`${post.coverImage ? '-mt-32 relative z-10' : 'bg-indigo-600'} px-6 py-12 text-center`}>
          <h1 className={`text-3xl sm:text-4xl font-extrabold leading-tight ${post.coverImage ? 'text-white drop-shadow-lg' : 'text-white'}`}>
            {post.title}
          </h1>
          <div className={`mt-4 text-sm ${post.coverImage ? 'text-gray-100' : 'text-indigo-100'}`}>
            <time dateTime={post.createdAt.toISOString()}>
              {new Date(post.createdAt).toLocaleDateString('tr-TR', {
                weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
              })}
            </time>
          </div>
        </header>

        {/* İÇERİK ALANI */}
        <div className="px-6 py-10 sm:px-10">
          <div className="text-gray-700 leading-relaxed">
            <ReactMarkdown
              components={{
                h1: ({node, ...props}) => <h1 className="text-3xl font-bold text-indigo-700 mt-8 mb-4" {...props} />,
                h2: ({node, ...props}) => <h2 className="text-2xl font-bold text-gray-900 mt-6 mb-3 border-b pb-2" {...props} />,
                h3: ({node, ...props}) => <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-2" {...props} />,
                p: ({node, ...props}) => <p className="mb-4 text-lg leading-7" {...props} />,
                ul: ({node, ...props}) => <ul className="list-disc list-inside mb-4 space-y-2 ml-4" {...props} />,
                ol: ({node, ...props}) => <ol className="list-decimal list-inside mb-4 space-y-2 ml-4" {...props} />,
                blockquote: ({node, ...props}) => (
                  <blockquote className="border-l-4 border-indigo-500 pl-4 py-2 italic bg-gray-50 my-4 rounded-r-lg text-gray-600" {...props} />
                ),
                code: ({node, ...props}) => (
                  <code className="bg-gray-800 text-green-400 px-2 py-1 rounded text-sm font-mono" {...props} />
                ),
                // Resimler (Markdown içindeki) responsive olsun
                img: ({node, ...props}) => (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img className="rounded-xl shadow-md my-6 w-full h-auto" {...props} alt="" />
                ),
              }}
            >
              {post.content}
            </ReactMarkdown>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-gray-50 px-6 py-6 border-t border-gray-100">
           <Link href="/" className="text-indigo-600 font-medium flex items-center gap-2 hover:underline">
             ← Ana Sayfaya Dön
           </Link>
        </footer>

      </article>
    </main>
  );
}