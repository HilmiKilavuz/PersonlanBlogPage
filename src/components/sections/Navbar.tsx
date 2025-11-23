import Link from "next/link";

// NOT: Burada 'default' kelimesini sildik. Artık Named Export kullanıyoruz.
export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        <div className="flex items-center">
          <Link href="/" className="text-xl font-bold tracking-tight text-indigo-600 hover:opacity-80 transition-opacity">
            &lt;SeninAdin /&gt;
          </Link>
        </div>

        <nav className="hidden md:flex gap-8">
          <Link href="/" className="text-sm font-medium text-gray-700 hover:text-indigo-600 transition-colors">
            Ana Sayfa
          </Link>
          <Link href="/#blog" className="text-sm font-medium text-gray-700 hover:text-indigo-600 transition-colors">
            Blog Yazıları
          </Link>
          {/* Burası şimdilik boş bir link olsun, hata vermesin */}
          <Link href="/about" className="text-sm font-medium text-gray-700 hover:text-indigo-600 transition-colors">
  Hakkımda
</Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link 
            href="https://github.com/KULLANICI_ADIN" 
            target="_blank"
            className="rounded-full bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-700 transition-colors"
          >
            GitHub
          </Link>
        </div>
      </div>
    </header>
  );
}