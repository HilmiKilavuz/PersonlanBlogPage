// src/lib/db.ts
import { PrismaClient } from '@prisma/client'

// Global değişken tanımı (TypeScript için)
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

// Eğer zaten bir instance varsa onu kullan, yoksa yeni oluştur (Singleton)
export const db = globalForPrisma.prisma ?? new PrismaClient()

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = db