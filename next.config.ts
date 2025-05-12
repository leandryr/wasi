import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // ✅ Habilita middleware en runtime Node.js
    nodeMiddleware: true,
  },
};

export default nextConfig;
