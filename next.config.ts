// next.config.js
const isProd = process.env.NODE_ENV === 'production'

const repo = 'chenWeb' // 👈 这里改成你的仓库名

module.exports = {
  output: 'export',                 // 告诉 Next.js 导出静态 HTML
  basePath: isProd ? `/${repo}` : '',   // 解决项目页子路径
  assetPrefix: isProd ? `/${repo}/` : '', // 让静态资源路径正确
  images: { unoptimized: true },    // GitHub Pages 无法处理 Next 的图片优化
}
