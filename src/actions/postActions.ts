// src/actions/postActions.ts
"use server"; // BU SATIR ÇOK ÖNEMLİ: Bu kodun sadece sunucuda çalışacağını belirtir.

import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

// Formdan gelen verileri işleyecek fonksiyon
export async function createPost(formData: FormData) {
  
  // 1. Formdan verileri al
  const title = formData.get("title") as string;
  const slug = formData.get("slug") as string;
  const excerpt = formData.get("excerpt") as string;
  const content = formData.get("content") as string;
  const coverImage = formData.get("coverImage") as string;

  // 2. Basit Doğrulama (Validation)
  if (!title || !slug || !content) {
    throw new Error("Başlık, URL ve İçerik alanları zorunludur.");
  }

  // 3. Veritabanına Kayıt (Prisma)
  try {
    await db.post.create({
      data: {
        title,
        slug,
        excerpt,
        content,
        coverImage,
        published: true, // Direkt yayınla (İstersen false yapıp taslak bırakabilirsin)
      },
    });
  } catch (error) {
    console.error("Yazı eklenirken hata:", error);
    throw new Error("Veritabanına kayıt sırasında bir hata oluştu.");
  }

  // 4. Önbelleği Temizle ve Yönlendir
  // Yeni yazı eklendiği için ana sayfayı ve blog listesini yenilememiz lazım.
  revalidatePath("/");
  
  // İşlem bitince kullanıcıyı ana sayfaya at
  redirect("/");
}