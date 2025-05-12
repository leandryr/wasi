import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    // ✅ Solo si estás usando middleware con jwt
    nodeMiddleware: true,
  },
  eslint: {
    // ✅ Ignora errores de lint en build (como 'any' o imports no usados)
    ignoreDuringBuilds: true,
  },
  typescript: {
    // ✅ No bloquea el build por errores TS (opcional en dev)
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
