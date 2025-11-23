// src/services/postService.ts
import { db } from "@/lib/db"; // Az önce yazdığımız Singleton bağlantıyı çağırıyoruz

// Tüm yazıları getiren servis
export async function getPosts() {
  try {
    // Veritabanından 'published' olanları, en yeni tarihe göre sıralayıp getir
    const posts = await db.post.findMany({
      where: { published: true },
      orderBy: { createdAt: 'desc' },
    });
    return posts;
  } catch (error) {
    console.error("Yazılar çekilirken hata oluştu:", error);
    return [];
  }
}

// Slug'a göre tek bir yazı getiren servis (Detay sayfası için)
export async function getPostBySlug(slug: string) {
  try {
    const post = await db.post.findUnique({
      where: { slug: slug },
    });
    return post;
  } catch (error) {
    console.error("Yazı bulunamadı:", error);
    return null;
  }
}