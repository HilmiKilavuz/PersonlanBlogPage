// src/middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  // 1. Gidilmek istenen yol (Path) kontrolü
  // Eğer kullanıcı "/admin" ile başlayan bir yere gitmeye çalışıyorsa...
  if (req.nextUrl.pathname.startsWith("/admin")) {
    
    // 2. İstek başlığındaki (Header) yetkilendirme bilgisini al
    const authHeader = req.headers.get("authorization");

    // 3. Eğer yetki bilgisi yoksa, tarayıcıya "Giriş Penceresi Aç" emri ver (401)
    if (!authHeader) {
      return new NextResponse("Yetkisiz Erişim: Lütfen giriş yapın.", {
        status: 401,
        headers: {
          "WWW-Authenticate": 'Basic realm="Admin Paneli"',
        },
      });
    }

    // 4. Girilen şifreyi çöz (Base64 Decoding)
    // Tarayıcı şifreyi "Basic dXNlcjpwYXNz" formatında gönderir.
    const authValue = authHeader.split(" ")[1];
    const [user, pwd] = atob(authValue).split(":");

    // 5. Şifre kontrolü (.env dosyasındaki ile eşleşiyor mu?)
    const isValidUser = user === process.env.ADMIN_USER;
    const isValidPwd = pwd === process.env.ADMIN_PASSWORD;

    if (!isValidUser || !isValidPwd) {
      // Yanlış şifre girildiyse tekrar sor
      return new NextResponse("Hatalı Kullanıcı Adı veya Şifre!", {
        status: 401,
        headers: {
          "WWW-Authenticate": 'Basic realm="Admin Paneli"',
        },
      });
    }
  }

  // 6. Her şey yolundaysa geçişe izin ver
  return NextResponse.next();
}

// Middleware'in sadece bu yollarda çalışmasını sağla (Performans için)
export const config = {
  matcher: "/admin/:path*",
};