"use server";

import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

// --- 1. YENİ YAZI EKLEME ---
export async function createPost(formData: FormData) {
  const title = formData.get("title") as string;
  const slug = formData.get("slug") as string;
  const excerpt = formData.get("excerpt") as string;
  const content = formData.get("content") as string;
  const coverImage = formData.get("coverImage") as string;

  if (!title || !slug || !content) {
    throw new Error("Başlık, URL ve İçerik alanları zorunludur.");
  }

  try {
    await db.post.create({
      data: {
        title,
        slug,
        excerpt,
        content,
        coverImage,
        published: true, 
      },
    });
  } catch (error) {
    console.error("Yazı eklenirken hata:", error);
    throw new Error("Veritabanına kayıt sırasında bir hata oluştu.");
  }

  // Önbelleği temizle ve yönlendir
  revalidatePath("/");
  revalidatePath("/kaptan-kosk");
  redirect("/kaptan-kosk");
}

// --- 2. YAZI SİLME ---
export async function deletePost(formData: FormData) {
  const id = formData.get("id") as string;

  if (!id) {
    throw new Error("Silinecek yazı ID'si bulunamadı.");
  }

  try {
    await db.post.delete({
      where: { id },
    });
    
    // Silme işleminden sonra sayfayı yenile
    revalidatePath("/");
    revalidatePath("/kaptan-kosk");
  } catch (error) {
    console.error("Silme hatası:", error);
    throw new Error("Yazı silinirken hata oluştu.");
  }
}

// --- 3. YAZI GÜNCELLEME ---
export async function updatePost(formData: FormData) {
  const id = formData.get("id") as string;
  const title = formData.get("title") as string;
  const slug = formData.get("slug") as string;
  const excerpt = formData.get("excerpt") as string;
  const content = formData.get("content") as string;
  const coverImage = formData.get("coverImage") as string;

  if (!id || !title || !slug || !content) {
    throw new Error("Eksik veri gönderildi.");
  }

  try {
    await db.post.update({
      where: { id },
      data: { title, slug, excerpt, content, coverImage },
    });
  } catch (error) {
    console.error("Güncelleme hatası:", error);
    throw new Error("Yazı güncellenemedi.");
  }

  // İlgili sayfaları yenile
  revalidatePath("/");
  revalidatePath("/kaptan-kosk");
  revalidatePath(`/blog/${slug}`);
  
  // İşlem bitince panele dön
  redirect("/kaptan-kosk");
}