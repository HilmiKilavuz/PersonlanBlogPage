// src/app/blog/[slug]/page.tsx
import { getPostBySlug, getPosts } from "@/services/postService"; // getPosts'u da ekledik
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import { Metadata } from "next"; // Tip tanımlaması için
import { stripMarkdown } from "@/utils/stripMarkdown"; // Meta açıklama için temizleme aracı

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// ----------------------------------------------------------------------------
// 1. SEO AYARLARI (Dinamik Metadata) 🔍
// ----------------------------------------------------------------------------
export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: "Yazı Bulunamadı",
    };
  }

  // Açıklama için blog içeriğinin ilk 160 karakterini alıp temizleyelim
  const description = post.excerpt || stripMarkdown(post.content).substring(0, 160);

  return {
    title: post.title,
    description: description,
    // Open Graph: Sosyal Medya (LinkedIn, Twitter) Paylaşım Ayarları
    openGraph: {
      title: post.title,
      description: description,
      type: "article",
      url: `https://senin-siten.vercel.app/blog/${post.slug}`, // Burayı kendi site adresinle güncelle
      images: post.coverImage ? [
        {
          url: post.coverImage,
          width: 1200,
          height: 630,
          alt: post.title,
        }
      ] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: description,
      images: post.coverImage ? [post.coverImage] : [],
    },
  };
}

// ----------------------------------------------------------------------------
// 2. PERFORMANS AYARLARI (SSG - Static Site Generation) ⚡
// ----------------------------------------------------------------------------
// Bu fonksiyon, siten "Build" edilirken tüm blog yazılarını önceden bulur
// ve hepsi için statik HTML dosyaları oluşturur.
export async function generateStaticParams() {
  const posts = await getPosts(); // Tüm yazıları çek

  return posts.map((post) => ({
    slug: post.slug, // Her yazı için bir sayfa yolu oluştur
  }));
}

// ----------------------------------------------------------------------------
// 3. SAYFA İÇERİĞİ (Aynı Kalıyor)
// ----------------------------------------------------------------------------
export default async function BlogPostPage({ params }: BlogPostPageProps) {
  
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <article className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
        
        {/* Kapak Fotoğrafı */}
        {post.coverImage && (
          <div className="relative w-full h-64 sm:h-80 md:h-96">
            <Image 
              src={post.coverImage}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          </div>
        )}

        {/* Başlık Alanı */}
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

        {/* İçerik */}
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