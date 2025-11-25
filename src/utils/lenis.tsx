// src/utils/lenis.tsx
"use client";

import { ReactLenis as Lenis } from "@studio-freight/react-lenis";

// TypeScript hatasını çözmek için props tipini 'any' yapıyoruz.
// Bu, "Gelen verinin tipi ne olursa olsun kabul et" demektir.
export function ReactLenis(props: any) {
  return <Lenis {...props} />;
}