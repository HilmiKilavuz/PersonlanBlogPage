// src/utils/stripMarkdown.ts

export function stripMarkdown(markdown: string): string {
  if (!markdown) return "";

  // 1. Başlıkları (#) kaldır
  let text = markdown.replace(/^#+\s+/gm, "");
  
  // 2. Kalın (**) ve İtalik (*) işaretlerini kaldır
  text = text.replace(/(\*\*|__)(.*?)\1/g, "$2"); // Kalın
  text = text.replace(/(\*|_)(.*?)\1/g, "$2");    // İtalik
  
  // 3. Linkleri [Ad](url) -> Ad formatına çevir
  text = text.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1");
  
  // 4. Kod bloklarını (```) kaldır
  text = text.replace(/```[\s\S]*?```/g, "");
  
  // 5. Satır içi kodları (`) kaldır
  text = text.replace(/`([^`]+)`/g, "$1");
  
  // 6. Satır başındaki listeleri (*, -, 1.) kaldır
  text = text.replace(/^(\s*(\*|-|\d+\.)\s+)/gm, "");
  
  // 7. Gereksiz boşlukları temizle
  return text.trim();
}