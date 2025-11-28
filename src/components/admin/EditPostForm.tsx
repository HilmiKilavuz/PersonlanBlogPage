// src/components/admin/EditPostForm.tsx
"use client";

import { updatePost } from "@/actions/postActions";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

// Gelen verinin tipini tanımlıyoruz
interface EditPostFormProps {
  post: {
    id: string;
    title: string;
    slug: string;
    excerpt: string | null;
    content: string;
    coverImage: string | null;
  };
}

export default function EditPostForm({ post }: EditPostFormProps) {
  const [uploading, setUploading] = useState(false);
  // Başlangıç değeri olarak veritabanındaki resmi alıyoruz
  const [coverImageUrl, setCoverImageUrl] = useState(post.coverImage || "");

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    const formData = new FormData();
    formData.append("file", file);
    
    // .env'den okuyoruz
    const uploadPreset = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET;
    const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;

    if (!uploadPreset || !cloudName) {
        alert("Cloudinary ayarları eksik!");
        setUploading(false);
        return;
    }

    formData.append("upload_preset", uploadPreset);

    try {
      const res = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (data.secure_url) setCoverImageUrl(data.secure_url);
    } catch (error) {
      console.error("Upload hatası:", error);
      alert("Resim yüklenemedi.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="relative backdrop-blur-xl bg-white/70 border border-white/50 rounded-3xl shadow-2xl p-8 md:p-10 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>

      <form action={updatePost} className="space-y-8">
        
        {/* ID'yi gizli olarak gönderiyoruz ki hangi yazıyı güncelleyeceğini bilsin */}
        <input type="hidden" name="id" value={post.id} />

        <div className="space-y-2">
          <label className="text-sm font-bold text-gray-700 uppercase tracking-wider ml-1">Yazı Başlığı</label>
          <input type="text" name="title" defaultValue={post.title} required className="block w-full rounded-2xl border-0 bg-white/50 px-4 py-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 focus:ring-2 focus:ring-indigo-600 transition-all focus:bg-white"/>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-700 uppercase tracking-wider ml-1">URL Uzantısı (Slug)</label>
            <input type="text" name="slug" defaultValue={post.slug} required className="block w-full rounded-2xl border-0 bg-white/50 px-4 py-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 focus:ring-2 focus:ring-indigo-600 transition-all focus:bg-white"/>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-700 uppercase tracking-wider ml-1">Kapak Görseli</label>
            <input type="hidden" name="coverImage" value={coverImageUrl} />
            <div className="flex items-center gap-4">
              <label className="cursor-pointer inline-flex items-center gap-2 px-4 py-3 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 transition-all shadow-sm">
                <span className="text-2xl">📸</span>
                <span className="text-sm font-medium text-gray-700">{uploading ? "..." : "Değiştir"}</span>
                <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" disabled={uploading} />
              </label>
              {coverImageUrl && (
                <div className="relative w-16 h-16 rounded-lg overflow-hidden border border-gray-200 shadow-sm">
                  <Image src={coverImageUrl} alt="Önizleme" fill className="object-cover" />
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-bold text-gray-700 uppercase tracking-wider ml-1">Kısa Özet</label>
          <textarea name="excerpt" rows={2} defaultValue={post.excerpt || ""} className="block w-full rounded-2xl border-0 bg-white/50 px-4 py-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 focus:ring-2 focus:ring-indigo-600 transition-all focus:bg-white resize-none"></textarea>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-bold text-gray-700 uppercase tracking-wider ml-1">İçerik (Markdown)</label>
          <textarea name="content" rows={12} defaultValue={post.content} required className="block w-full rounded-2xl border-0 bg-white/50 px-4 py-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 focus:ring-2 focus:ring-indigo-600 font-mono transition-all focus:bg-white"></textarea>
        </div>

        <div className="pt-4 border-t border-gray-100 flex gap-4">
          <Link href="/kaptan-kosk" className="flex-1 py-4 px-4 border border-gray-300 rounded-2xl text-center text-gray-700 font-bold hover:bg-gray-50 transition-all">
            İptal
          </Link>
          <button type="submit" disabled={uploading} className="flex-[2] py-4 px-4 border border-transparent rounded-2xl text-base font-bold text-white bg-indigo-600 hover:bg-indigo-700 hover:shadow-xl transition-all hover:-translate-y-1 disabled:opacity-50">
            Güncellemeyi Kaydet 💾
          </button>
        </div>

      </form>
    </div>
  );
}