import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Placeholders de banco de imagens livre. Quando as fotos autorizadas da
    // clínica entrarem em /public, este bloco pode ser removido.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
