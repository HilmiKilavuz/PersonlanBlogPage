// src/components/sections/Footer.tsx
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#050505] pt-20 pb-10 px-4 sm:px-6 lg:px-8 border-t border-white/10 overflow-hidden">
      
      {/* Arka Plan Efektleri */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-indigo-900/20 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto">
        
        {/* Üst Kısım: Büyük Mesaj ve Linkler */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-20">
          
          {/* Sol: Kapanış Mesajı */}
          <div className="space-y-6">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white leading-tight">
              Let's build something <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                secure & scalable.
              </span>
            </h2>
            <p className="text-gray-400 text-lg max-w-md leading-relaxed">
              Açık kaynak projelere katkı sağlamayı ve yeni teknolojiler keşfetmeyi seviyorum. Bir fikrin mi var? Konuşalım.
            </p>
            <a 
              href="mailto:kilavuzhilmi@gmail.com" 
              className="inline-flex items-center gap-2 text-white border-b border-white/30 pb-1 hover:border-white transition-colors text-lg group"
            >
              kilavuzhilmi@gmail.com
              <span className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform">↗</span>
            </a>
          </div>

          {/* Sağ: Navigasyon Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
            
            {/* Sütun 1: Site */}
            <div className="space-y-4">
              <h4 className="text-xs font-mono text-gray-500 uppercase tracking-widest">Sitemap</h4>
              <ul className="space-y-3">
                <li><Link href="/" className="text-gray-400 hover:text-white transition-colors">Ana Sayfa</Link></li>
                <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">Hakkımda</Link></li>
                <li><Link href="/#blog" className="text-gray-400 hover:text-white transition-colors">Blog</Link></li>
              </ul>
            </div>

            {/* Sütun 2: Sosyal */}
            <div className="space-y-4">
              <h4 className="text-xs font-mono text-gray-500 uppercase tracking-widest">Socials</h4>
              <ul className="space-y-2">
                <li><Link href="https://github.com/HilmiKilavuz" target="_blank" className="text-gray-400 hover:text-white transition-colors">GitHub</Link></li>
                <li><Link href="https://www.linkedin.com/in/hilmi-k%C4%B1lavuz-044b20294/" target="_blank" className="text-gray-400 hover:text-white transition-colors">LinkedIn</Link></li>
                
              </ul>
            </div>

           
          </div>
        </div>

        {/* Alt Kısım: Telif ve Marka */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>&copy; {currentYear} Hilmi Kılavuz. Tüm hakları saklıdır.</p>
          
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              System Operational
            </span>
           
          </div>
        </div>

        {/* Dekoratif Büyük Yazı (Watermark) */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none opacity-[0.02]">
          <h1 className="text-[12rem] font-bold text-center text-white leading-none tracking-tighter whitespace-nowrap translate-y-1/3">
            HILMI.DEV
          </h1>
        </div>

      </div>
    </footer>
  );
}