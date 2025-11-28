// src/app/kaptan-kosk/edit/[id]/page.tsx
import { db } from "@/lib/db";
import { notFound } from "next/navigation";
import EditPostForm from "@/components/admin/EditPostForm";

interface EditPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function EditPage({ params }: EditPageProps) {
  const { id } = await params;
  
  // Veritabanından düzenlenecek yazıyı çek
  const post = await db.post.findUnique({
    where: { id },
  });

  if (!post) {
    notFound();
  }

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
            <h1 className="text-3xl font-black text-gray-900 tracking-tight">İçeriği Düzenle</h1>
            <p className="text-indigo-600 font-medium">Hataları düzelt veya içeriği güncelle ✍️</p>
          </div>
        </div>

        {/* Form Bileşenini Çağırıyoruz */}
        <EditPostForm post={post} />
        
      </div>
    </main>
  );
}