import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  // DÜZELTME 1: Yol kontrolünü güncelle
  if (req.nextUrl.pathname.startsWith("/kaptan-kosk")) {
    
    const authHeader = req.headers.get("authorization");

    if (!authHeader) {
      return new NextResponse("Yetkisiz Erişim", {
        status: 401,
        headers: {
          // DÜZELTME 2: Realm adını değiştirebilirsin (İsteğe bağlı)
          "WWW-Authenticate": 'Basic realm="Gizli Kaptan Kosku"',
        },
      });
    }

    const authValue = authHeader.split(" ")[1];
    const [user, pwd] = atob(authValue).split(":");

    const isValidUser = user === process.env.ADMIN_USER;
    const isValidPwd = pwd === process.env.ADMIN_PASSWORD;

    if (!isValidUser || !isValidPwd) {
      return new NextResponse("Hatalı Giriş!", {
        status: 401,
        headers: {
          "WWW-Authenticate": 'Basic realm="Gizli Kaptan Kosku"',
        },
      });
    }
  }

  return NextResponse.next();
}

export const config = {
  // DÜZELTME 3: Matcher ayarını güncelle
  matcher: "/kaptan-kosk/:path*",
};