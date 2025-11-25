// src/components/BlogPostView.tsx
"use client"; // Animasyonlar için burası Client Component olmalı

import Link from "next/link";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import { motion, useScroll, useSpring } from "framer-motion";

// Post veri tipini tanımlayalım (TypeScript için)
interface BlogPostViewProps {
  post: {
    title: string;
    content: string;
    coverImage: string | null;
    createdAt: Date;
    slug: string;
  };
}

export default function BlogPostView({ post }: BlogPostViewProps) {
  
  // Scroll İlerleme Çubuğu
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-[#050505] selection:bg-indigo-500 selection:text-white pb-32">
      
      {/* 1. OKUMA İLERLEME ÇUBUĞU */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 origin-left z-50"
        style={{ scaleX }}
      />

      {/* 2. HERO BÖLÜMÜ */}
      <section className="relative min-h-[60vh] flex items-end pb-20 pt-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        
        {/* Arka Plan Görseli */}
        <div className="absolute inset-0 -z-20">
          {post.coverImage ? (
            <Image 
              src={post.coverImage} 
              alt="Background" 
              fill 
              className="object-cover opacity-20 blur-3xl scale-110" 
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-b from-indigo-900/20 to-[#050505]"></div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/50 to-transparent"></div>
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
        </div>

        <div className="max-w-4xl mx-auto w-full relative z-10">
          
          {/* Geri Dön */}
          <Link 
            href="/#blog" 
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors group"
          >
            <span className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">←</span>
            <span className="text-sm font-mono uppercase tracking-widest">Blog'a Dön</span>
          </Link>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-4 text-sm font-mono text-indigo-400 mb-6">
            <span className="px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20">
              {new Date(post.createdAt).toLocaleDateString('tr-TR', { month: 'long', day: 'numeric', year: 'numeric' })}
            </span>
            <span className="w-1 h-1 bg-gray-600 rounded-full"></span>
            <span>SİBER GÜVENLİK & YAZILIM</span>
          </div>

          {/* Başlık */}
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight mb-8">
            {post.title}
          </h1>

          {/* Yazar */}
          <div className="flex items-center gap-4 pt-8 border-t border-white/10">
             <div className="w-10 h-10 rounded-full bg-white/10 overflow-hidden border border-white/20">
               <Image src="https://github.com/HilmiKilavuz.png" alt="Author" width={40} height={40} />
             </div>
             <div>
               <p className="text-white font-bold text-sm">Hilmi Kılavuz</p>
               <p className="text-gray-500 text-xs">Software Engineer</p>
             </div>
          </div>

        </div>
      </section>

      {/* 3. İÇERİK ALANI */}
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {post.coverImage && (
          <div className="relative w-full aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-2xl mb-16 group">
            <Image 
              src={post.coverImage} 
              alt={post.title} 
              fill 
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              priority
            />
          </div>
        )}

        <div className="prose prose-invert prose-lg max-w-none">
          <ReactMarkdown
            components={{
              h1: ({node, ...props}) => <h1 className="font-display text-3xl md:text-4xl font-bold text-white mt-16 mb-6 leading-tight" {...props} />,
              h2: ({node, ...props}) => <h2 className="font-display text-2xl md:text-3xl font-bold text-white mt-12 mb-6 flex items-center gap-3" {...props} >
                <span className="w-2 h-8 bg-indigo-500 rounded-full inline-block"></span>
                {props.children}
              </h2>,
              h3: ({node, ...props}) => <h3 className="font-display text-xl font-bold text-indigo-200 mt-8 mb-4" {...props} />,
              p: ({node, ...props}) => <p className="text-gray-300 leading-loose mb-6 font-light text-lg" {...props} />,
              ul: ({node, ...props}) => <ul className="space-y-2 my-6 pl-6 text-gray-300" {...props} />,
              li: ({node, ...props}) => <li className="list-disc marker:text-indigo-500 pl-2" {...props} />,
              blockquote: ({node, ...props}) => (
                <blockquote className="border-l-4 border-indigo-500 pl-6 my-8 italic text-xl text-white/80 bg-white/5 py-6 pr-4 rounded-r-2xl" {...props} />
              ),
              code: ({node, ...props}) => {
                // @ts-ignore
                if (!props.className) { 
                   return <code className="bg-white/10 text-indigo-300 px-1.5 py-0.5 rounded font-mono text-sm" {...props} />
                }
                return (
                  <div className="relative my-8 group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl opacity-20 blur group-hover:opacity-40 transition-opacity"></div>
                    <pre className="relative bg-[#0a0a0a] border border-white/10 rounded-xl p-6 overflow-x-auto text-sm font-mono shadow-2xl">
                      <code className="text-gray-300" {...props} />
                    </pre>
                  </div>
                )
              },
              img: ({node, ...props}) => (
                <span className="block my-10 relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl group">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105" {...props} alt={props.alt || ""} />
                </span>
              ),
              a: ({node, ...props}) => (
                <a className="text-indigo-400 hover:text-white underline decoration-indigo-500/30 hover:decoration-white underline-offset-4 transition-colors font-medium" {...props} target="_blank" rel="noopener noreferrer" />
              ),
            }}
          >
            {post.content}
          </ReactMarkdown>
        </div>

        {/* Footer */}
        <footer className="bg-white/5 px-6 py-6 mt-20 border-t border-white/10 rounded-2xl flex justify-between items-center">
           <Link href="/" className="text-indigo-400 font-medium flex items-center gap-2 hover:text-white transition-colors">
             ← Ana Sayfaya Dön
           </Link>
        </footer>

      </article>
    </div>
  );
}