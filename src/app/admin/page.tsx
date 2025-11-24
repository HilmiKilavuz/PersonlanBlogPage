// src/app/admin/page.tsx
import Link from "next/link";
import { db } from "@/lib/db";
import { deletePost } from "@/actions/postActions";

export default async function AdminDashboard() {
  const posts = await db.post.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    // DEĞİŞİKLİK BURADA: py-12 yerine -> pt-36 pb-12 yaptık.
    <main className="min-h-screen bg-slate-50 pt-36 pb-12 px-4 sm:px-6 lg:px-8 selection:bg-indigo-500 selection:text-white">
      <div className="max-w-5xl mx-auto">
        
        {/* Başlık ve Buton */}
        <div className="flex items-center justify-between mb-8">
          <div>
             <h1 className="text-3xl font-black text-gray-900">Yönetim Paneli</h1>
             <p className="text-gray-500 text-sm mt-1">İçeriklerini buradan yönetebilirsin.</p>
          </div>
          
          <Link 
            href="/admin/create" 
            className="group px-6 py-3 bg-gray-900 text-white font-bold rounded-xl shadow-lg hover:bg-gray-800 transition-all hover:-translate-y-1 flex items-center gap-2"
          >
            <span>+</span> Yeni Yazı
          </Link>
        </div>

        {/* Yazı Listesi Tablosu */}
        <div className="bg-white rounded-3xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-gray-50 border-b border-gray-100">
                <tr>
                  <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Başlık</th>
                  <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Tarih</th>
                  <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Durum</th>
                  <th className="px-6 py-4 text-right text-xs font-bold text-gray-400 uppercase tracking-wider">İşlem</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {posts.map((post) => (
                  <tr key={post.id} className="hover:bg-gray-50/50 transition-colors group">
                    <td className="px-6 py-4">
                      <div className="font-bold text-gray-900">{post.title}</div>
                      <div className="text-xs text-gray-400 font-mono mt-0.5">/{post.slug}</div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      {new Date(post.createdAt).toLocaleDateString('tr-TR')}
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-green-100 text-green-700 border border-green-200">
                        Yayında
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <form action={deletePost}>
                        <input type="hidden" name="id" value={post.id} />
                        <button 
                          type="submit"
                          className="text-gray-400 hover:text-red-600 font-medium text-sm transition-colors p-2 hover:bg-red-50 rounded-lg"
                          title="Yazıyı Sil"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                        </button>
                      </form>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {posts.length === 0 && (
            <div className="flex flex-col items-center justify-center py-16 text-gray-500">
              <div className="text-4xl mb-4">📭</div>
              <p>Henüz hiç yazı yok.</p>
            </div>
          )}
        </div>

      </div>
    </main>
  );
}   