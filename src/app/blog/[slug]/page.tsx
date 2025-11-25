// src/app/blog/[slug]/page.tsx
import { getPostBySlug, getPosts } from "@/services/postService";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { stripMarkdown } from "@/utils/stripMarkdown";
import BlogPostView from "@/components/BlogPostView"; // Yeni oluşturduğumuz bileşen

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// 1. SEO AYARLARI (Dinamik Metadata - Server Side)
export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: "Yazı Bulunamadı",
    };
  }

  const description = post.excerpt || stripMarkdown(post.content).substring(0, 160);

  return {
    title: post.title,
    description: description,
    openGraph: {
      title: post.title,
      description: description,
      type: "article",
      images: post.coverImage ? [{ url: post.coverImage }] : [],
    },
  };
}

// 2. STATIC SITE GENERATION (Build Time - Server Side)
export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// 3. SAYFA (Server Side)
export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  // Veriyi çekip Client Component'e gönderiyoruz (Props Passing)
  return <BlogPostView post={post} />;
}