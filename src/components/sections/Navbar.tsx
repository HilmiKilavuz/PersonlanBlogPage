// src/components/sections/Navbar.tsx
"use client"; // Bu satır önemli: Hooks (usePathname) kullanacağımız için Client Component olmalı.

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  // Sayfa kaydırıldığında menünün görünümünü değiştirmek için
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Ana Sayfa", href: "/" },
    { name: "Hakkımda & Projeler", href: "/about" },
    { name: "Blog", href: "/#blog" },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4">
      <header
        className={`
          transition-all duration-300 ease-in-out
          flex items-center justify-between
          px-6 py-3
          rounded-full
          ${
            scrolled
              ? "bg-white/80 backdrop-blur-xl shadow-lg border border-gray-200/50 w-[90%] md:w-[70%] lg:w-[60%]"
              : "bg-white/50 backdrop-blur-md border border-white/20 w-[95%] md:w-[80%] lg:w-[70%] shadow-sm"
          }
        `}
      >
        {/* LOGO ALANI */}
        <Link href="/" className="group flex items-center gap-2">
          <div className="w-8 h-8 bg-gray-900 text-white rounded-lg flex items-center justify-center font-bold text-sm group-hover:rotate-12 transition-transform">
            MH
          </div>
          <span className="font-bold text-gray-800 tracking-tight hidden sm:block">
            Hilmi<span className="text-indigo-600">.dev</span>
          </span>
        </Link>

        {/* MENÜ LİNKLERİ (Desktop) */}
        <nav className="hidden md:flex items-center gap-1 bg-gray-100/50 p-1 rounded-full border border-gray-200/50">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`
                  px-4 py-2 rounded-full text-sm font-medium transition-all duration-200
                  ${
                    isActive
                      ? "bg-white text-gray-900 shadow-sm"
                      : "text-gray-500 hover:text-gray-900 hover:bg-gray-200/50"
                  }
                `}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* SAĞ TARAF (GitHub & İletişim) */}
        <div className="flex items-center gap-3">
          {/* GitHub İkonu */}
          <Link
            href="https://github.com/HilmiKilavuz"
            target="_blank"
            className="text-gray-400 hover:text-gray-900 transition-colors"
          >
            <span className="sr-only">GitHub</span>
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </Link>

          {/* İletişim Butonu */}
          <a
            href="mailto:kilavuzhilmi@gmail.com"
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-full text-white bg-indigo-600 hover:bg-indigo-700 transition-all shadow-md hover:shadow-indigo-500/30"
          >
            İletişime Geç
          </a>
        </div>
      </header>
    </div>
  );
}