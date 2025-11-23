// src/components/sections/Hero.tsx
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center gap-12">
        
        {/* SOL TARAFA: Metin Alanı */}
        <div className="flex-1 text-center lg:text-left z-10">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">Merhaba, Ben</span>
            <span className="block text-indigo-600">[Senin Adın]</span>
          </h1>
          <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
            Fırat Üniversitesi Yazılım Mühendisliği öğrencisi. Modern web teknolojileri, yazılım mimarisi ve siber güvenlik üzerine tutkulu bir geliştirici.
          </p>
          
          {/* Butonlar */}
          <div className="mt-8 flex justify-center lg:justify-start gap-4">
            <Link 
              href="#blog" 
              className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg transition-all shadow-lg hover:shadow-indigo-500/30"
            >
              Yazılarımı Oku
            </Link>
            <Link 
              href="https://github.com/KULLANICI_ADIN" 
              target="_blank"
              className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg transition-all"
            >
              GitHub Profilim
            </Link>
          </div>
        </div>

        {/* SAĞ TARAFA: Profil Fotoğrafı veya Görsel */}
        <div className="flex-1 relative w-full max-w-lg lg:max-w-none">
           {/* NOT: Buraya kendi fotoğrafını koyacağız. 
               Şimdilik yer tutucu (placeholder) bir div koyuyorum.
               Resim ekleyince burayı <Image /> ile değiştireceğiz.
           */}
           <div className="relative w-64 h-64 mx-auto lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-indigo-100 shadow-2xl">
              <div className="w-full h-full bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold text-2xl">
                Fotoğrafın
              </div>
           </div>

           {/* Arka plan süslemeleri (Blur efekti) */}
           <div className="absolute top-0 -right-4 -z-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
           <div className="absolute -bottom-8 left-20 -z-10 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        </div>

      </div>
    </section>
  );
}