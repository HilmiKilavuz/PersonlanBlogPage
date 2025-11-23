# 🚀 Modern Portfolio & Blog Platform

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)
![Prisma](https://img.shields.io/badge/Prisma-5.10-2D3748?style=for-the-badge&logo=prisma)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Neon.tech-336791?style=for-the-badge&logo=postgresql)

**Next.js 14+**, **TypeScript** ve **Clean Architecture** prensipleri kullanılarak geliştirilmiş, performans odaklı ve ölçeklenebilir kişisel web platformu.

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

---

## ✨ Özellikler

### 🎨 Kullanıcı Deneyimi
- 📱 **Tam Responsive Tasarım** - Mobil, tablet ve masaüstü için optimize edilmiş
- ⚡ **Yüksek Performans** - Next.js Server Components ile optimize edilmiş render
- 🎭 **Modern UI/UX** - Tailwind CSS ile şık ve kullanıcı dostu arayüz
- 🔍 **SEO Optimizasyonu** - Server-side rendering ile arama motoru uyumluluğu

### 💻 Teknik Özellikler
- 🗄️ **Veritabanı Yönetimi** - Prisma ORM ile type-safe veritabanı işlemleri
- 📝 **Blog Sistemi** - Slug bazlı routing ile dinamik blog yazıları
- 🎯 **Service Layer** - İş mantığının ayrı katmanda yönetilmesi
- 🔐 **Admin Modeli** - İleride genişletilebilir admin paneli altyapısı
- 📦 **Modüler Yapı** - Yeniden kullanılabilir bileşenler ve servisler

---

## 🛠️ Teknoloji Yığını

| Kategori | Teknoloji | Versiyon | Amaç |
|:---------|:----------|:---------|:-----|
| **Framework** | Next.js | 16.0.3 | SSR, SEO ve performans için |
| **UI Library** | React | 19.2.0 | Modern kullanıcı arayüzü için |
| **Dil** | TypeScript | 5.x | Tip güvenliği ve sürdürülebilir kod |
| **Styling** | Tailwind CSS | 4.x | Hızlı ve responsive tasarım |
| **Database** | PostgreSQL | - | İlişkisel veri bütünlüğü (Neon.tech) |
| **ORM** | Prisma | 5.10.2 | Type-safe veritabanı işlemleri |
| **Font** | Geist | - | Modern ve okunabilir tipografi |

### Neden Bu Teknolojiler?

- **Next.js 16**: App Router ile gelişmiş routing, Server Components ile performans, ve built-in optimizasyonlar
- **TypeScript**: Derleme zamanında hata yakalama ve daha iyi IDE desteği
- **Prisma**: Otomatik tip üretimi ve güvenli veritabanı sorguları
- **Tailwind CSS**: Utility-first yaklaşım ile hızlı ve tutarlı stil geliştirme

---

## 📂 Proje Mimarisi

Proje, **Clean Architecture** prensiplerine göre yapılandırılmıştır. Her katman kendi sorumluluğuna odaklanır:

```
src/
├── app/                    # Next.js App Router (Sayfalar ve Routing)
│   ├── layout.tsx         # Root layout (Font ve global stiller)
│   ├── page.tsx           # Ana sayfa (Blog listesi)
│   └── globals.css        # Global CSS stilleri
│
├── components/             # Tekrar kullanılabilir UI bileşenleri
│   ├── ui/                # Atomik bileşenler (Button, Input, Card vb.)
│   └── sections/          # Sayfa bölümleri (Hero, BlogList, Footer vb.)
│
├── services/              # İş Mantığı Katmanı (Business Logic)
│   └── postService.ts     # Blog yazıları ile ilgili işlemler
│
├── lib/                   # Yardımcı Kütüphaneler
│   └── db.ts              # Prisma Client (Singleton Pattern)
│
├── types/                 # TypeScript tip tanımları
│
└── utils/                 # Yardımcı fonksiyonlar
```

### Mimari Prensipler

1. **Separation of Concerns**: Her katman sadece kendi sorumluluğuna odaklanır
2. **Dependency Inversion**: Üst katmanlar alt katmanlara bağımlı değil, interface'lere bağımlı
3. **Single Responsibility**: Her modül tek bir sorumluluğa sahip
4. **DRY (Don't Repeat Yourself)**: Tekrar eden kodlar bileşenlere ve servislere ayrılmış

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
DATABASE_URL="postgresql://kullanici:sifre@host:5432/veritabani?schema=public"
```

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

### Blog Yazısı Ekleme

Veritabanına blog yazısı eklemek için Prisma Studio kullanabilirsiniz:

```bash
npx prisma studio
```

Veya doğrudan veritabanına bağlanarak:

```sql
INSERT INTO posts (id, title, slug, content, excerpt, published, "createdAt", "updatedAt")
VALUES (
  'clx...', 
  'İlk Blog Yazım', 
  'ilk-blog-yazim', 
  'Yazının tam içeriği...', 
  'Kısa özet', 
  true, 
  NOW(), 
  NOW()
);
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

## 🎯 Gelecek Özellikler

- [ ] Admin paneli entegrasyonu
- [ ] Markdown desteği
- [ ] Yorum sistemi
- [ ] Kategori ve etiket yönetimi
- [ ] Arama fonksiyonu
- [ ] RSS feed
- [ ] Dark mode
- [ ] Çoklu dil desteği (i18n)

---

## 🤝 Katkıda Bulunma

Katkılarınızı bekliyoruz! Lütfen şu adımları izleyin:

1. Fork edin
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Değişikliklerinizi commit edin (`git commit -m 'feat: Add amazing feature'`)
4. Branch'inizi push edin (`git push origin feature/amazing-feature`)
5. Pull Request oluşturun


