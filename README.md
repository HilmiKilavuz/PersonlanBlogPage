# 🚀 Modern Portfolio & Blog Platform

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)
![Prisma](https://img.shields.io/badge/Prisma-5.10-2D3748?style=for-the-badge&logo=prisma)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Neon.tech-336791?style=for-the-badge&logo=postgresql)
![Cloudinary](https://img.shields.io/badge/Cloudinary-Image_CDN-3448C5?style=for-the-badge&logo=cloudinary)

**Next.js 16**, **TypeScript** ve **Clean Architecture** prensipleri kullanılarak geliştirilmiş, performans odaklı ve ölçeklenebilir kişisel web platformu.

[Özellikler](#-özellikler) • [Teknolojiler](#-teknoloji-yığını) • [Kurulum](#-kurulum) • [Proje Yapısı](#-proje-mimarisi)

</div>

---

## 📖 Proje Hakkında

Bu proje, sadece kişisel bir blog ve portfolyo sitesi olmanın ötesinde, modern web geliştirme standartlarını ve yazılım mühendisliği pratiklerini uygulamak amacıyla geliştirilmiştir. 

Proje geliştirilirken **"Rastgele Kodlama"** yerine **Mühendislik Prensipleri** ön planda tutulmuştur:

- ✨ **SOLID Prensipleri** - Kodun bakımı ve genişletilebilirliği için
- 🏗️ **Clean Architecture** - Veri katmanı, iş mantığı ve arayüzün birbirinden ayrılması
- 🔒 **Type Safety** - TypeScript ile geliştirme sürecinde hata önleme
- 🎯 **Separation of Concerns** - Her katmanın kendi sorumluluğuna odaklanması
- 🔄 **Singleton Pattern** - Veritabanı bağlantı yönetimi için
- 🎨 **Server Actions** - Modern form handling ve veri mutasyonu

---

## ✨ Özellikler

### 🎨 Kullanıcı Deneyimi
- 📱 **Tam Responsive Tasarım** - Mobil, tablet ve masaüstü için optimize edilmiş
- ⚡ **Yüksek Performans** - Next.js Server Components ile optimize edilmiş render
- 🎭 **Modern UI/UX** - Tailwind CSS ile şık ve kullanıcı dostu arayüz
- 🔍 **SEO Optimizasyonu** - Server-side rendering ile arama motoru uyumluluğu
- 🎬 **Animasyonlar** - Smooth scroll, hover efektleri ve blob animasyonları
- 🖼️ **Görsel Optimizasyonu** - Next.js Image component ile otomatik optimizasyon

### 💻 Teknik Özellikler
- 🗄️ **Veritabanı Yönetimi** - Prisma ORM ile type-safe veritabanı işlemleri
- 📝 **Blog Sistemi** - Slug bazlı routing ile dinamik blog yazıları
- 📄 **Markdown Desteği** - `react-markdown` ile zengin içerik formatı
- 🎯 **Service Layer** - İş mantığının ayrı katmanda yönetilmesi
- 🔐 **Admin Paneli** - HTTP Basic Authentication ile korumalı yönetim arayüzü
- 🖼️ **Görsel Yükleme** - Cloudinary entegrasyonu ile kolay görsel yönetimi
- 📦 **Modüler Yapı** - Yeniden kullanılabilir bileşenler ve servisler
- 🛡️ **Route Protection** - Middleware ile admin route koruması
- 🌐 **GitHub Entegrasyonu** - Otomatik portfolyo proje gösterimi
- ⚙️ **Server Actions** - Form handling ve veri mutasyonu için modern yaklaşım

---

## 🛠️ Teknoloji Yığını

| Kategori | Teknoloji | Versiyon | Amaç |
|:---------|:----------|:---------|:-----|
| **Framework** | Next.js | 16.0.3 | SSR, SEO ve performans için |
| **UI Library** | React | 19.2.0 | Modern kullanıcı arayüzü için |
| **Dil** | TypeScript | 5.x | Tip güvenliği ve sürdürülebilir kod |
| **Styling** | Tailwind CSS | 4.x | Hızlı ve responsive tasarım |
| **Typography** | @tailwindcss/typography | 0.5.19 | Markdown içerik stillendirme |
| **Database** | PostgreSQL | - | İlişkisel veri bütünlüğü (Neon.tech) |
| **ORM** | Prisma | 5.10.2 | Type-safe veritabanı işlemleri |
| **Markdown** | react-markdown | 10.1.0 | Markdown içerik render etme |
| **Image CDN** | Cloudinary | - | Görsel yükleme ve optimizasyon |
| **Font** | Inter (Google Fonts) | - | Modern ve okunabilir tipografi |
| **API** | GitHub API | - | Portfolyo proje gösterimi |

### Neden Bu Teknolojiler?

- **Next.js 16**: App Router ile gelişmiş routing, Server Components ile performans, ve built-in optimizasyonlar
- **TypeScript**: Derleme zamanında hata yakalama ve daha iyi IDE desteği
- **Prisma**: Otomatik tip üretimi ve güvenli veritabanı sorguları
- **Tailwind CSS**: Utility-first yaklaşım ile hızlı ve tutarlı stil geliştirme
- **react-markdown**: Güvenli ve esnek Markdown render desteği
- **Cloudinary**: Kolay görsel yükleme ve CDN optimizasyonu
- **Server Actions**: Form handling için modern ve type-safe yaklaşım
- **Middleware**: Route koruması ve authentication için Next.js middleware

---

## 📂 Proje Mimarisi

Proje, **Clean Architecture** prensiplerine göre yapılandırılmıştır. Her katman kendi sorumluluğuna odaklanır:

```
src/
├── app/                    # Next.js App Router (Sayfalar ve Routing)
│   ├── layout.tsx         # Root layout (Font, Navbar, Footer)
│   ├── page.tsx           # Ana sayfa (Blog listesi)
│   ├── globals.css        # Global CSS stilleri
│   ├── about/             # Hakkımda sayfası
│   │   └── page.tsx       # Portfolyo ve GitHub projeleri
│   ├── blog/              # Blog sayfaları
│   │   └── [slug]/        # Dinamik blog yazı sayfası
│   │       └── page.tsx   # Markdown render eden sayfa
│   └── admin/             # Admin paneli (Korumalı)
│       ├── page.tsx       # Yönetim paneli (Yazı listesi)
│       └── create/        # Yeni yazı oluşturma
│           └── page.tsx   # Form ve görsel yükleme
│
├── components/             # Tekrar kullanılabilir UI bileşenleri
│   ├── ui/                # Atomik bileşenler (Button, Input, Card vb.)
│   └── sections/          # Sayfa bölümleri
│       ├── Navbar.tsx     # Responsive navigasyon menüsü
│       ├── Hero.tsx       # Ana sayfa hero bölümü
│       └── Footer.tsx     # Footer bileşeni
│
├── actions/               # Server Actions (Next.js 16)
│   └── postActions.ts     # createPost, deletePost fonksiyonları
│
├── services/              # İş Mantığı Katmanı (Business Logic)
│   └── postService.ts     # Blog yazıları ile ilgili işlemler
│
├── lib/                   # Yardımcı Kütüphaneler
│   └── db.ts              # Prisma Client (Singleton Pattern)
│
├── types/                 # TypeScript tip tanımları
│
├── utils/                 # Yardımcı fonksiyonlar
│   └── stripMarkdown.ts   # Markdown temizleme utility
│
└── middleware.ts          # Route koruması (Admin authentication)

prisma/
└── schema.prisma          # Veritabanı şema tanımları
```

### Mimari Prensipler

1. **Separation of Concerns**: Her katman sadece kendi sorumluluğuna odaklanır
2. **Dependency Inversion**: Üst katmanlar alt katmanlara bağımlı değil, interface'lere bağımlı
3. **Single Responsibility**: Her modül tek bir sorumluluğa sahip
4. **DRY (Don't Repeat Yourself)**: Tekrar eden kodlar bileşenlere ve servislere ayrılmış
5. **Server Actions**: Form handling ve veri mutasyonu için modern yaklaşım
6. **Middleware Pattern**: Route protection ve authentication için

---

## 🆕 Son Güncellemeler

### Admin Paneli
- ✅ Tam işlevsel admin paneli (`/admin`)
- ✅ HTTP Basic Authentication ile route koruması
- ✅ Blog yazısı oluşturma ve silme özellikleri
- ✅ Cloudinary entegrasyonu ile görsel yükleme
- ✅ Modern form tasarımı ve UX

### Markdown Desteği
- ✅ `react-markdown` ile güvenli Markdown render
- ✅ Özelleştirilebilir Markdown bileşenleri
- ✅ Kod blokları, başlıklar, listeler ve daha fazlası için stil desteği

### Portfolyo Sayfası
- ✅ Hakkımda sayfası (`/about`)
- ✅ GitHub API entegrasyonu ile otomatik proje gösterimi
- ✅ Teknik yetenekler bölümü
- ✅ Eğitim ve sertifikalar bölümü

### UI/UX İyileştirmeleri
- ✅ Responsive navigasyon menüsü (scroll efektleri ile)
- ✅ Hero section animasyonları
- ✅ Blob animasyonları ve arka plan efektleri
- ✅ Next.js Image optimization
- ✅ Modern card tasarımları

### Teknik İyileştirmeler
- ✅ Server Actions ile form handling
- ✅ Middleware ile route protection
- ✅ Type-safe veri işlemleri
- ✅ Cache revalidation stratejileri

---

## 🚀 Kurulum

### Gereksinimler

- Node.js 18+ 
- npm veya yarn
- PostgreSQL veritabanı (Neon.tech veya kendi sunucunuz)

### Adım 1: Projeyi Klonlayın

```bash
git clone https://github.com/kullanici-adi/my-portfolio.git
cd my-portfolio
```

### Adım 2: Bağımlılıkları Yükleyin

```bash
npm install
```

### Adım 3: Ortam Değişkenlerini Ayarlayın

`.env` dosyası oluşturun:

```env
# Veritabanı
DATABASE_URL="postgresql://kullanici:sifre@host:5432/veritabani?schema=public"

# Admin Panel Authentication (HTTP Basic Auth)
ADMIN_USER="admin"
ADMIN_PASSWORD="güvenli-şifre"

# Cloudinary Image Upload (Opsiyonel - Admin paneli için)
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME="your-cloud-name"
NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET="your-upload-preset"
```

> **Not**: Admin paneli için HTTP Basic Authentication kullanılmaktadır. Cloudinary entegrasyonu sadece görsel yükleme için gereklidir ve opsiyoneldir.

### Adım 4: Veritabanını Hazırlayın

```bash
# Prisma migration'larını çalıştır
npx prisma migrate dev

# (Opsiyonel) Prisma Studio ile veritabanını görselleştir
npx prisma studio
```

### Adım 5: Geliştirme Sunucusunu Başlatın

```bash
npm run dev
```

Tarayıcınızda [http://localhost:3000](http://localhost:3000) adresini açın.

---

## 📝 Kullanım

### Admin Paneli

Proje, tam işlevsel bir admin paneli içermektedir:

1. **Admin Paneline Erişim**: `/admin` adresine gidin
2. **Giriş**: Tarayıcı sizden kullanıcı adı ve şifre isteyecektir (HTTP Basic Auth)
   - Kullanıcı adı: `.env` dosyasındaki `ADMIN_USER`
   - Şifre: `.env` dosyasındaki `ADMIN_PASSWORD`

**Admin Paneli Özellikleri:**
- ✅ Blog yazılarını listeleme
- ✅ Yeni blog yazısı oluşturma (Markdown desteği ile)
- ✅ Görsel yükleme (Cloudinary entegrasyonu)
- ✅ Blog yazısı silme
- ✅ Kapak görseli ekleme

### Blog Yazısı Oluşturma

1. Admin paneline giriş yapın
2. **"Yeni Yazı"** butonuna tıklayın
3. Formu doldurun:
   - **Başlık**: Yazınızın başlığı
   - **URL Uzantısı (Slug)**: `/blog/slug-değeri` formatında benzersiz bir değer
   - **Kapak Görseli** (Opsiyonel): Cloudinary ile görsel yükleyebilirsiniz
   - **Kısa Özet**: Kartlarda görünecek kısa açıklama
   - **İçerik**: Markdown formatında yazınızın tamamı

4. **"Yazıyı Yayınla"** butonuna tıklayın

### Markdown Desteği

Blog yazılarında Markdown syntax'ı kullanabilirsiniz:

```markdown
# Başlık 1
## Başlık 2

**Kalın metin** ve *italik metin*

- Liste item 1
- Liste item 2

[Link metni](https://example.com)

`Kod örneği`
```

### Görsel Yükleme (Cloudinary)

1. Cloudinary hesabı oluşturun
2. `.env` dosyasına Cloudinary bilgilerinizi ekleyin
3. Admin panelinde **"Resim Seç"** butonuna tıklayın
4. Görseliniz otomatik olarak yüklenecek ve URL'i forma eklenecektir

### Alternatif: Prisma Studio ile Yazı Ekleme

Eğer admin paneli kullanmak istemezseniz, Prisma Studio ile de yazı ekleyebilirsiniz:

```bash
npx prisma studio
```

### Yeni Servis Ekleme

Yeni bir servis eklemek için `src/services/` klasörüne yeni bir dosya oluşturun:

```typescript
// src/services/yeniService.ts
import { db } from "@/lib/db";

export async function yeniFonksiyon() {
  // İş mantığınız buraya
}
```

### Yeni Server Action Ekleme

Form handling için yeni bir Server Action eklemek için `src/actions/` klasörüne yeni bir dosya oluşturun:

```typescript
// src/actions/yeniAction.ts
"use server";

import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function yeniFonksiyon(formData: FormData) {
  // İş mantığınız buraya
  revalidatePath("/"); // Cache'i temizle
}
```

---

## 🏗️ Geliştirme

### Mevcut Komutlar

```bash
# Geliştirme sunucusu
npm run dev

# Production build
npm run build

# Production sunucusu
npm start

# Linting
npm run lint
```

### Veritabanı İşlemleri

```bash
# Migration oluştur
npx prisma migrate dev --name migration-adi

# Prisma Client'ı yeniden oluştur
npx prisma generate

# Veritabanı şemasını görselleştir
npx prisma studio
```

---

## ✅ Uygulanan Özellikler

- [x] Admin paneli entegrasyonu (HTTP Basic Auth ile korumalı)
- [x] Markdown desteği (`react-markdown` ile)
- [x] Görsel yükleme (Cloudinary entegrasyonu)
- [x] Kapak görseli desteği
- [x] Server Actions ile form handling
- [x] Middleware ile route protection
- [x] GitHub API entegrasyonu (Portfolyo projeleri)
- [x] Responsive navigasyon menüsü
- [x] Hero section ve animasyonlar
- [x] Hakkımda sayfası (Portfolyo gösterimi)
- [x] Markdown temizleme utility

## 🎯 Gelecek Özellikler

- [ ] Yorum sistemi
- [ ] Kategori ve etiket yönetimi
- [ ] Arama fonksiyonu
- [ ] RSS feed
- [ ] Dark mode
- [ ] Çoklu dil desteği (i18n)
- [ ] Gelişmiş authentication sistemi (JWT/OAuth)
- [ ] Blog yazısı düzenleme özelliği
- [ ] Tasarım/taslak kaydetme özelliği
- [ ] İstatistik ve analitik paneli

---

## 🤝 Katkıda Bulunma

Katkılarınızı bekliyoruz! Lütfen şu adımları izleyin:

1. Fork edin
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Değişikliklerinizi commit edin (`git commit -m 'feat: Add amazing feature'`)
4. Branch'inizi push edin (`git push origin feature/amazing-feature`)
5. Pull Request oluşturun


