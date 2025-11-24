// src/app/about/page.tsx
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Hakkımda | Muhammed Hilmi Kılavuz",
  description: "Yazılım Mühendisliği öğrencisi, mobil geliştirici ve siber güvenlik meraklısı.",
};

// --- GITHUB AYARLARI ---

interface GithubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string;
  updated_at: string;
  fork: boolean;
  stargazers_count: number;
}

function getLanguageColor(language: string | null) {
  switch (language) {
    case "Kotlin": return "green";
    case "Java": return "orange";
    case "C#": return "blue";
    case "Python": return "purple";
    case "TypeScript": return "indigo";
    case "JavaScript": return "yellow";
    case "HTML": return "red";
    default: return "gray";
  }
}

async function getRepos(): Promise<GithubRepo[]> {
  try {
    // Verileri her saat başı yenile (revalidate: 3600)
    const res = await fetch('https://api.github.com/users/HilmiKilavuz/repos?sort=updated&direction=desc&per_page=100', {
      next: { revalidate: 3600 } 
    });

    if (!res.ok) return [];

    const repos: GithubRepo[] = await res.json();
    // Fork olmayan projeleri filtrele
    return repos.filter(repo => !repo.fork);
  } catch (error) {
    console.error("Veri çekme hatası:", error);
    return [];
  }
}

// --- SAYFA BİLEŞENİ ---

export default async function AboutPage() {
  const repos = await getRepos();

  return (
    <main className="min-h-screen relative overflow-hidden bg-slate-50 py-12 px-4 sm:px-6 lg:px-8 selection:bg-indigo-500 selection:text-white">
      
      {/* 🌟 ARKA PLAN EFEKTLERİ */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-20%] left-[20%] w-[600px] h-[600px] bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-6xl mx-auto space-y-20">
        
        {/* 🚀 BÖLÜM 1: BİYOGRAFİ & GİRİŞ */}
        <section className="relative backdrop-blur-xl bg-white/60 border border-white/50 rounded-3xl shadow-2xl p-8 md:p-12 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>

          <div className="flex flex-col md:flex-row items-center gap-12">
            
            {/* Profil Resmi */}
            <div className="relative group flex-shrink-0">
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full opacity-75 group-hover:opacity-100 blur transition duration-500"></div>
              <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                 <Image 
                   src="https://github.com/HilmiKilavuz.png" 
                   alt="Muhammed Hilmi Kılavuz"
                   fill
                   className="object-cover transition-transform duration-700 group-hover:scale-110"
                 />
              </div>
              <div className="absolute bottom-2 right-2 flex items-center gap-2 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-lg border border-gray-100 text-xs font-bold text-green-600">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                Online
              </div>
            </div>

            {/* Metin Alanı */}
            <div className="flex-1 text-center md:text-left space-y-6">
              <div>
                <h1 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
                  M. Hilmi <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Kılavuz</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-600 mt-2 font-medium">
                  Yazılım Mühendisi Adayı
                </p>
              </div>
              
              <p className="text-gray-600 leading-relaxed text-lg">
                Fırat Üniversitesi Yazılım Mühendisliği 3. sınıf öğrencisiyim. 
                <span className="mx-2 inline-block px-3 py-1 bg-indigo-100 text-indigo-700 rounded-lg text-sm font-bold border border-indigo-200">
                  GANO: 3.48
                </span>
                başarısıyla akademik hayatımı sürdürüyorum. Java ve Kotlin ile Android dünyasında <strong>Okul Otomasyonu</strong> ve <strong>Haber Uygulaması</strong> gibi kapsamlı projeler geliştirerek pratik yetkinliğimi arttırmaya çalıştım. 
                Şimdi ise kodun arka kapılarını keşfetmek ve sistemleri korumak için <strong>Siber Güvenlik</strong> dünyasına odaklanıyorum.
              </p>

              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <Link href="https://github.com/HilmiKilavuz" target="_blank" className="group relative px-6 py-3 bg-gray-900 text-white rounded-xl overflow-hidden transition-all hover:shadow-lg hover:shadow-gray-500/30">
                  <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-gray-800 to-black opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <span className="relative flex items-center gap-2 font-medium">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                    GitHub
                  </span>
                </Link>
                <Link href="https://www.linkedin.com/in/hilmi-k%C4%B1lavuz-044b20294/" target="_blank" className="group relative px-6 py-3 bg-[#0077b5] text-white rounded-xl overflow-hidden transition-all hover:shadow-lg hover:shadow-blue-500/30">
                  <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-600 to-blue-800 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <span className="relative flex items-center gap-2 font-medium">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                    LinkedIn
                  </span>
                </Link>
                <a href="mailto:kilavuzhilmi@gmail.com" className="group relative px-6 py-3 bg-white text-gray-700 border border-gray-200 rounded-xl overflow-hidden transition-all hover:bg-gray-50 hover:shadow-md">
                   <span className="relative flex items-center gap-2 font-medium">
                     📧 İletişim
                   </span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 🛠️ BÖLÜM 2: TEKNİK YETENEKLER */}
        <section>
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Teknik Cephanelik</h2>
            <div className="h-1 flex-1 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full w-1/3 bg-indigo-500 rounded-full"></div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Card 1: Mobile */}
            <div className="group bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center mb-6 text-2xl group-hover:rotate-12 transition-transform duration-300">📱</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Android & Kotlin</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-4">
                Native uygulama geliştirmede ileri seviye yetkinlikler.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-md">Jetpack Compose</span>
                <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-md">MVVM</span>
                <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-md">Retrofit</span>
                <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-md">Room DB</span>
              </div>
            </div>

            {/* Card 2: Backend */}
            <div className="group bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 text-2xl group-hover:rotate-12 transition-transform duration-300">💻</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Backend & Desktop</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-4">
                Ölçeklenebilir sistemler ve masaüstü çözümleri.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-md">C# .NET</span>
                <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-md">WinForms</span>
                <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-md">DevExpress</span>
                <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-md">SQL</span>
              </div>
            </div>

            {/* Card 3: Database & Cloud */}
            <div className="group bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center mb-6 text-2xl group-hover:rotate-12 transition-transform duration-300">🗄️</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Veri Yönetimi</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-4">
                Güvenli veri depolama ve gerçek zamanlı senkronizasyon.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-orange-100 text-orange-700 text-xs font-semibold rounded-md">MSSQL</span>
                <span className="px-2 py-1 bg-orange-100 text-orange-700 text-xs font-semibold rounded-md">SQLite</span>
                <span className="px-2 py-1 bg-orange-100 text-orange-700 text-xs font-semibold rounded-md">Firebase</span>
              </div>
            </div>

            {/* Card 4: Security */}
            <div className="group bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-16 bg-red-500 rounded-bl-full -mr-8 -mt-8 opacity-20 group-hover:scale-150 transition-transform duration-500"></div>
              <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center mb-6 text-2xl group-hover:rotate-12 transition-transform duration-300">🛡️</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Siber Güvenlik</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-4">
                Sistem güvenliği ve savunma stratejileri üzerine çalışmalar.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-red-100 text-red-700 text-xs font-semibold rounded-md">Kali Linux</span>
                <span className="px-2 py-1 bg-red-100 text-red-700 text-xs font-semibold rounded-md">Kriptografi</span>
                <span className="px-2 py-1 bg-red-100 text-red-700 text-xs font-semibold rounded-md">Ağ Güvenliği</span>
              </div>
            </div>

          </div>
        </section>

        {/* 🎓 BÖLÜM 3: EĞİTİM & SERTİFİKALAR */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Eğitim Timeline */}
            {/* Eğitim Yolculuğu (GÜNCELLENMİŞ VERSİYON) */}
            <section className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-white shadow-lg relative overflow-hidden group hover:shadow-xl transition-all duration-300">
                
                {/* Arka Plan Dekorasyonu (Hafif Desen) */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-50 to-transparent rounded-bl-full opacity-50"></div>

                <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3 relative z-10">
                   <span className="flex items-center justify-center w-10 h-10 bg-indigo-600 text-white rounded-xl shadow-lg shadow-indigo-200">
                     🎓
                   </span>
                   Akademik Yolculuk
                </h2>
                
                <div className="space-y-8 relative z-10">
                    
                    {/* Üniversite Kartı (Vurgulu) */}
                    <div className="relative pl-8 border-l-2 border-indigo-200">
                        <div className="absolute -left-[9px] top-0 w-4 h-4 bg-indigo-600 rounded-full ring-4 ring-indigo-50"></div>
                        
                        <div className="bg-indigo-50/50 p-5 rounded-2xl border border-indigo-100 hover:bg-indigo-50 transition-colors">
                            <div className="flex justify-between items-start mb-2">
                                <h4 className="font-bold text-gray-900 text-lg">Fırat Üniversitesi</h4>
                                <span className="px-3 py-1 bg-white text-indigo-700 text-xs font-bold rounded-full shadow-sm border border-indigo-100">
                                  3. Sınıf
                                </span>
                            </div>
                            
                            <p className="text-indigo-900 font-medium mb-3">Yazılım Mühendisliği</p>
                            
                            <div className="flex items-center gap-3 mb-3">
                                <div className="flex items-center gap-1.5 px-3 py-1 bg-green-100 text-green-700 rounded-lg text-sm font-bold">
                                    <span>🚀 GANO:</span>
                                    <span>3.48</span>
                                </div>
                                <span className="text-gray-400 text-xs font-medium">2023 - Günümüz</span>
                            </div>
                            
                            <p className="text-gray-600 text-sm leading-relaxed">
                               Eğitim hayatım boyunca teknolojiye, özellikle de mobil uygulama geliştirmeye ilgi duydum. Üniversitede aldığım dersler sayesinde C#, SQL, veri yapıları, algoritmalar gibi konularda hem teorik hem de pratik deneyim kazandım.

Eğitim hayatım boyunca sürekli öğrenmeyi, yeni teknolojiler denemeyi ve pratik projelerle kendimi geliştirmeyi hedefledim.
                                
                            </p>
                        </div>
                    </div>                   
               </div>
            </section>

            {/* Sertifikalar & Dil */}
            <div className="space-y-6">
                
                {/* Sertifikalar */}
                <section className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-white shadow-lg">
                   <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                      <span className="flex items-center justify-center w-8 h-8 bg-orange-100 text-orange-600 rounded-lg text-sm">📜</span>
                      Sertifikalar
                   </h2>
                   <div className="space-y-4">
                      <div className="p-4 bg-orange-50/50 rounded-xl border border-orange-100 hover:bg-orange-50 transition-colors">
                         <h4 className="font-bold text-gray-900 text-sm">Arduino İle Programlama ve Tasarım</h4>
                         <p className="text-xs text-orange-600 mt-1">2020 - Robotik Kodlama Temelleri</p>
                      </div>
                      <div className="p-4 bg-green-50/50 rounded-xl border border-green-100 hover:bg-green-50 transition-colors">
                         <h4 className="font-bold text-gray-900 text-sm">Kotlin ile Mobil Geliştirme</h4>
                         <p className="text-xs text-green-600 mt-1">Modern Android Mimarisi ve Uygulama Geliştirme</p>
                      </div>
                   </div>
                </section>

                {/* Yabancı Dil */}
                <section className="bg-gradient-to-br from-indigo-600 to-purple-700 p-8 rounded-3xl shadow-xl text-white relative overflow-hidden">
                   <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -mr-16 -mt-16 blur-2xl"></div>
                   
                   <h2 className="text-xl font-bold mb-4 flex items-center gap-2 relative z-10">
                      🌍 Yabancı Dil
                   </h2>
                   
                   <div className="relative z-10">
                      <div className="flex justify-between items-end mb-2">
                         <span className="font-medium text-indigo-100">İngilizce</span>
                         <span className="text-2xl font-bold">B1</span>
                      </div>
                      <div className="w-full bg-black/20 rounded-full h-2">
                         <div className="bg-white h-2 rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)]" style={{ width: '60%' }}></div>
                      </div>
                      <p className="text-xs text-indigo-200 mt-4 leading-relaxed">
                         Teknik dokümantasyon okuma ve araştırma yapma yetkinliği.
                      </p>
                   </div>
                </section>

            </div>
        </div>

        {/* 💻 BÖLÜM 4: GITHUB PROJELERİ (EN ALTTA) */}
        <section className="pt-8 border-t border-gray-200/50">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-3xl font-bold text-gray-900">GitHub Projelerim</h2>
            <div className="h-1 flex-1 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full w-1/4 bg-gray-900 rounded-full"></div>
            </div>
            <span className="text-xs font-medium text-gray-500 bg-white px-3 py-1 rounded-full border border-gray-200 shadow-sm">
              {repos.length} Proje Bulundu
            </span>
          </div>

          {repos.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {repos.map((repo) => {
                const colorClass = getLanguageColor(repo.language);
                
                // Renge göre stil sınıfları
                const bgClass = 
                  colorClass === 'green' ? 'bg-green-50 text-green-600' :
                  colorClass === 'blue' ? 'bg-blue-50 text-blue-600' :
                  colorClass === 'purple' ? 'bg-purple-50 text-purple-600' :
                  colorClass === 'orange' ? 'bg-orange-50 text-orange-600' :
                  'bg-gray-50 text-gray-600';
                  
                 const gradientClass = 
                  colorClass === 'green' ? 'from-green-400 to-green-600' :
                  colorClass === 'blue' ? 'from-blue-400 to-blue-600' :
                  colorClass === 'purple' ? 'from-purple-400 to-purple-600' :
                  colorClass === 'orange' ? 'from-orange-400 to-orange-600' :
                  'from-gray-400 to-gray-600';

                return (
                  <Link 
                    key={repo.id}
                    href={repo.html_url} 
                    target="_blank"
                    className="group relative bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between h-full"
                  >
                     {/* Renkli Üst Çizgi */}
                    <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${gradientClass}`}></div>

                    <div>
                      <div className="flex items-start justify-between mb-4">
                        <div className={`p-3 rounded-xl ${bgClass}`}>
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
                        </div>
                        <div className="flex items-center gap-1 text-xs text-gray-400">
                           ★ {repo.stargazers_count}
                        </div>
                      </div>

                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors line-clamp-1">
                        {repo.name}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
                        {repo.description || "Bu proje için açıklama bulunmuyor."}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-auto">
                       {repo.language && (
                         <span className={`px-2 py-1 text-xs font-semibold rounded-md border border-gray-200 ${bgClass.replace('bg-', 'bg-opacity-20 ')}`}>
                           {repo.language}
                         </span>
                       )}
                       <span className="px-2 py-1 bg-gray-50 text-gray-500 text-xs font-semibold rounded-md border border-gray-200">
                         {new Date(repo.updated_at).toLocaleDateString('tr-TR')}
                       </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          ) : (
             <div className="text-center py-10 bg-white rounded-xl border border-dashed border-gray-300">
               <p className="text-gray-500">Projeler yüklenirken bir sorun oluştu veya hiç proje bulunamadı.</p>
             </div>
          )}
        </section>

      </div>
    </main>
  );
}