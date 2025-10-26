import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';
const repo = 'chenWeb';

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  // 移除 basePath，因为静态导出时它不会创建目录结构
  // basePath: isProd ? `/${repo}` : '',
  assetPrefix: isProd ? `/${repo}` : '',
  images: { 
    unoptimized: true,
  },
  env: { 
    NEXT_PUBLIC_BASE_PATH: isProd ? `/${repo}` : '' 
  },
};

export default nextConfig;
