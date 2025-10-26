// next.config.ts
const isProd = process.env.NODE_ENV === 'production'
const repo = 'chenWeb' // 👈 仓库名

const nextConfig = {
  output: 'export',
  basePath: isProd ? `/${repo}` : '',
  assetPrefix: isProd ? `/${repo}/` : '',
  images: { unoptimized: true },
  // 让前端也能拿到前缀（用于 <img>、CSS）
  env: { NEXT_PUBLIC_BASE_PATH: isProd ? `/${repo}` : '' },
}
export default nextConfig
