import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/chenWeb' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/chenWeb' : '',
};

export default nextConfig;
