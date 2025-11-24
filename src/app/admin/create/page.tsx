// src/app/admin/create/page.tsx
"use client"; // Dosya yükleme işlemi için Client tarafında çalışmalı

import { createPost } from "@/actions/postActions";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function CreatePostPage() {
  const [uploading, setUploading] = useState(false);
  const [coverImageUrl, setCoverImageUrl] = useState("");

  // Dosya seçilince çalışan fonksiyon
  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);

    const formData = new FormData();
    formData.append("file", file);
    
    // --- DEĞİŞİKLİK YAPILAN KISIM BAŞLANGICI ---
    
    // 1. Bilgileri .env dosyasından çekiyoruz (Güvenli Yöntem)
 // Kodun içindeki bu satırlar:
const uploadPreset = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET;
const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;

    // 2. Eğer .env dosyasında bu bilgiler yoksa hata verip durduralım
    if (!uploadPreset || !cloudName) {
      alert("Hata: Cloudinary ayarları bulunamadı! Lütfen .env dosyasını kontrol edin.");
      console.error("Eksik Env Var:", { uploadPreset, cloudName });
      setUploading(false);
      return;
    }

    // 3. Veriyi forma ekle
    formData.append("upload_preset", uploadPreset); 

    try {
      // URL içinde de değişkeni kullanıyoruz
      const res = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
        method: "POST",
        body: formData,
      });
    // --- DEĞİŞİKLİK YAPILAN KISIM BİTİŞİ ---

      const data = await res.json();
      
      if (data.secure_url) {
        setCoverImageUrl(data.secure_url); // URL'i aldık ve state'e kaydettik
      } else {
        console.error("Cloudinary Hatası:", data);
        alert("Resim yüklenemedi! Konsolu kontrol edin.");
      }
    } catch (error) {
      console.error("Upload hatası:", error);
      alert("Bir hata oluştu.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <main className="min-h-screen relative overflow-hidden bg-slate-50 pt-36 pb-12 px-4 sm:px-6 lg:px-8 selection:bg-indigo-500 selection:text-white">
      
      {/* Arka Plan Efektleri */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-black text-gray-900 tracking-tight">Yeni İçerik Oluştur</h1>
            <p className="text-indigo-600 font-medium">Bilgisayarından resim yükle 📸</p>
          </div>
          <Link href="/admin" className="hidden sm:flex items-center gap-2 px-4 py-2 bg-white/50 backdrop-blur-sm border border-gray-200 rounded-full text-sm font-medium text-gray-600 hover:bg-white transition-all">
            ← Vazgeç
          </Link>
        </div>

        <div className="relative backdrop-blur-xl bg-white/70 border border-white/50 rounded-3xl shadow-2xl p-8 md:p-10 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>

          <form action={createPost} className="space-y-8">
            
            {/* 1. Başlık */}
            <div className="space-y-2">
              <label htmlFor="title" className="text-sm font-bold text-gray-700 uppercase tracking-wider ml-1">Yazı Başlığı</label>
              <input type="text" name="title" required className="block w-full rounded-2xl border-0 bg-white/50 px-4 py-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 focus:ring-2 focus:ring-indigo-600 transition-all focus:bg-white"/>
            </div>

            {/* 2. Slug & Resim Yükleme */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="slug" className="text-sm font-bold text-gray-700 uppercase tracking-wider ml-1">URL Uzantısı (Slug)</label>
                <div className="relative">
                   <span className="absolute left-4 top-4 text-gray-400 font-medium">/blog/</span>
                   <input type="text" name="slug" required className="block w-full rounded-2xl border-0 bg-white/50 pl-16 pr-4 py-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 focus:ring-2 focus:ring-indigo-600 transition-all focus:bg-white"/>
                </div>
              </div>

              {/* RESİM YÜKLEME ALANI */}
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 uppercase tracking-wider ml-1">Kapak Görseli</label>
                
                {/* Gizli input: URL buraya otomatik yazılacak ve sunucuya gidecek */}
                <input type="hidden" name="coverImage" value={coverImageUrl} />

                <div className="flex items-center gap-4">
                  {/* Dosya Seç Butonu */}
                  <label className="cursor-pointer inline-flex items-center gap-2 px-4 py-3 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 transition-all shadow-sm">
                    <span className="text-2xl">📤</span>
                    <span className="text-sm font-medium text-gray-700">
                      {uploading ? "Yükleniyor..." : "Resim Seç"}
                    </span>
                    <input 
                      type="file" 
                      accept="image/*" 
                      onChange={handleImageUpload} 
                      className="hidden" 
                      disabled={uploading}
                    />
                  </label>

                  {/* Önizleme */}
                  {coverImageUrl && (
                    <div className="relative w-16 h-16 rounded-lg overflow-hidden border border-gray-200 shadow-sm">
                      <Image src={coverImageUrl} alt="Önizleme" fill className="object-cover" />
                    </div>
                  )}
                </div>
                {coverImageUrl && <p className="text-xs text-green-600 font-medium ml-1">✓ Resim başarıyla yüklendi!</p>}
              </div>
            </div>

            {/* 3. Özet */}
            <div className="space-y-2">
              <label htmlFor="excerpt" className="text-sm font-bold text-gray-700 uppercase tracking-wider ml-1">Kısa Özet</label>
              <textarea name="excerpt" rows={2} className="block w-full rounded-2xl border-0 bg-white/50 px-4 py-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 focus:ring-2 focus:ring-indigo-600 transition-all focus:bg-white resize-none"></textarea>
            </div>

            {/* 4. İçerik */}
            <div className="space-y-2">
              <label htmlFor="content" className="text-sm font-bold text-gray-700 uppercase tracking-wider ml-1">İçerik (Markdown)</label>
              <textarea name="content" rows={12} required className="block w-full rounded-2xl border-0 bg-white/50 px-4 py-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 focus:ring-2 focus:ring-indigo-600 font-mono transition-all focus:bg-white"></textarea>
            </div>

            <div className="pt-4 border-t border-gray-100">
              <button type="submit" disabled={uploading} className="group relative w-full flex justify-center py-4 px-4 border border-transparent rounded-2xl text-base font-bold text-white bg-gray-900 overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1 disabled:opacity-50">
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-gray-800 to-black opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <span className="relative flex items-center gap-2">Yazıyı Yayınla ✨</span>
              </button>
            </div>

          </form>
        </div>
      </div>
    </main>
  );
}