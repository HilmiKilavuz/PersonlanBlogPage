import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // JOKER KARAKTER: Her yere izin ver
      },
      // next.config.ts içine ekle:
{
  protocol: 'https',
  hostname: 'res.cloudinary.com',
  port: '',
  pathname: '/**',
},
    ],
  },
};

export default nextConfig;
