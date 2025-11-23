// src/components/sections/Hero.tsx
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-32">
      
      {/* Arka Plan Efektleri (Blob) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* SOL TARAFA: Metin Alanı */}
          <div className="flex-1 text-center lg:text-left z-10">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-sm font-semibold mb-6 animate-fade-in-up">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              Yazılım Mühendisliği Öğrencisi
            </div>

            <h1 className="text-4xl lg:text-6xl font-black text-gray-900 tracking-tight mb-6">
              Merhaba, Ben <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
               Hilmi
              </span>
            </h1>
            
            <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0">
              Android dünyasında <strong>Kotlin</strong> ile başladığım yolculuğuma, şimdi <strong>Siber Güvenlik</strong>  ile derinlik katıyorum.Meraklı ve araştırmayı çok seven bir Yazılım Mühendisi adayıyım. Karmaşık problemleri basit, güvenli ve ölçeklenebilir çözümlere dönüştürmeyi seviyorum.
            </p>
            
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <Link 
                href="#blog" 
                className="px-8 py-4 bg-gray-900 text-white font-medium rounded-xl hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                Projelerimi İncele
              </Link>
              <Link 
                href="/about" 
                className="px-8 py-4 bg-white text-gray-700 font-medium rounded-xl border border-gray-200 hover:bg-gray-50 transition-all shadow-sm hover:shadow-md"
              >
                Hakkımda Daha Fazlası
              </Link>
            </div>

            {/* Tech Stack İkonları (Mini) */}
            <div className="mt-10 pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center gap-4 text-sm text-gray-500">
              <span>Şunlarla üretiyorum:</span>
              <div className="flex gap-4 text-2xl grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all">
                <span title="Android/Kotlin">📱</span>
                <span title="Next.js/React">⚛️</span>
                <span title=".NET/C#">💻</span>
                <span title="Cyber Security">🛡️</span>
                <span title="Database">🗄️</span>
              </div>
            </div>

          </div>

          {/* SAĞ TARAFA: Profil Fotoğrafı */}
          <div className="flex-1 relative w-full max-w-md lg:max-w-none flex justify-center lg:justify-end">
             <div className="relative w-72 h-72 lg:w-[450px] lg:h-[450px]">
                {/* Arkadaki Renkli Hale */}
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-[2rem] rotate-6 opacity-20 blur-2xl"></div>
                
                {/* Resim Çerçevesi */}
                <div className="relative w-full h-full rounded-[2rem] overflow-hidden border-8 border-white shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
                  <Image 
  src="https://github.com/HilmiKilavuz.png"
  alt=" Hilmi Kılavuz"
  fill
  className="object-cover"
  priority
/>
                </div>

              
                

             </div>
          </div>

        </div>
      </div>
    </section>
  );
}