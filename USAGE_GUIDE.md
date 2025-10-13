# 使用指南

欢迎使用 Chen Photography 摄影作品集网站！

## 快速开始

### 1. 运行开发服务器

```bash
npm run dev
```

访问 http://localhost:3000 查看网站

### 2. 自定义内容

#### 修改作者信息

编辑 `src/data/author.ts` 文件：

```typescript
export const author: Author = {
  name: '你的名字',
  title: '你的职位/称号',
  bio: '你的个人简介...',
  avatar: '头像图片URL或路径',
  social: {
    email: '你的邮箱',
    instagram: '@你的Instagram',
    twitter: '@你的Twitter',
    github: '你的GitHub',
  },
};
```

#### 添加/修改作品

编辑 `src/data/works.ts` 文件：

```typescript
{
  id: '唯一ID',
  title: '作品标题',
  slug: 'url-slug', // 用于URL，使用英文和连字符
  category: '作品分类',
  coverImage: '封面图片URL',
  images: ['图片1', '图片2', '图片3'],
  description: '简短描述',
  story: '详细的作品故事（支持多段落）',
  date: '2024-10-01',
  featured: true, // true 表示在首页精选区域显示
}
```

### 3. 添加自己的图片

#### 方法一：使用本地图片（推荐）

1. 将图片放入 `public/assets/images/` 文件夹
2. 在数据文件中使用 `/assets/images/your-image.jpg` 路径
3. 示例：
   ```typescript
   coverImage: '/assets/images/mountain-1.jpg'
   ```

#### 方法二：使用在线图片

1. 上传图片到图床或使用CDN
2. 在 `next.config.ts` 中添加域名：
   ```typescript
   images: {
     remotePatterns: [
       {
         protocol: 'https',
         hostname: 'your-image-host.com',
       },
     ],
   },
   ```
3. 在数据文件中使用完整URL

### 4. 自定义样式

#### 修改配色

编辑 `src/app/globals.css`：

```css
:root {
  --background: #ffffff;  /* 浅色模式背景 */
  --foreground: #171717;  /* 浅色模式文字 */
}

@media (prefers-color-scheme: dark) {
  :root {
    --background: #0a0a0a;  /* 深色模式背景 */
    --foreground: #ededed;  /* 深色模式文字 */
  }
}
```

#### 修改字体

编辑 `src/app/layout.tsx` 导入不同的 Google Fonts，或使用自定义字体。

### 5. 修改导航和页脚

- 导航栏：`src/components/Header.tsx`
- 页脚：`src/components/Footer.tsx`

可以修改链接、添加新菜单项、更改样式等。

### 6. 添加新页面

1. 在 `src/app/` 下创建新文件夹
2. 添加 `page.tsx` 文件
3. 在导航栏中添加链接

示例：创建联系页面

```bash
mkdir src/app/contact
```

创建 `src/app/contact/page.tsx`：

```typescript
export default function ContactPage() {
  return (
    <div className="pt-20 min-h-screen">
      <h1>联系我</h1>
      {/* 你的内容 */}
    </div>
  );
}
```

在 `src/components/Header.tsx` 中添加链接。

## 页面结构

### 主页 (`src/app/page.tsx`)

- Hero 大图区域
- 精选作品展示（featured: true 的作品）
- 全部作品网格
- 关于预览

### 作品详情页 (`src/app/works/[slug]/page.tsx`)

- 作品封面大图
- 作品信息和故事
- 图片画廊
- 上一个/下一个作品导航

### 关于页面 (`src/app/about/page.tsx`)

- 背景大图
- 作者头像和信息
- 完整个人简介
- 社交媒体链接
- 摄影哲学

## 组件说明

### Header (导航栏)

- 固定在顶部
- 包含 Logo 和菜单
- 响应式设计，移动端显示汉堡菜单
- 半透明背景效果

### Footer (页脚)

- 版权信息
- 社交媒体链接
- 简单设计

### WorkCard (作品卡片)

- 用于作品列表展示
- 鼠标悬停时显示标题和分类
- 图片缩放动画效果
- 点击跳转到作品详情页

## 优化建议

### 图片优化

1. 使用适当的图片尺寸：
   - Hero 图：1920x1080px
   - 作品封面：1600x1200px (4:3)
   - 详情图：1920x1080px (16:9)
   
2. 压缩图片大小：
   - 使用 TinyPNG、ImageOptim 等工具
   - 建议单张图片不超过 500KB
   
3. 使用现代图片格式：
   - WebP 格式（更小的文件大小）
   - AVIF 格式（最新，更好的压缩）

### SEO 优化

1. 每个页面都已设置 metadata
2. 可以添加 sitemap.xml
3. 可以添加 robots.txt
4. 使用有意义的图片 alt 文本

## 构建和部署

### 本地构建

```bash
npm run build
npm start
```

### 部署到 Vercel（推荐）

1. 将代码推送到 GitHub
2. 在 Vercel 中导入项目
3. Vercel 会自动构建和部署
4. 每次推送都会自动重新部署

### 部署到其他平台

- **Netlify**: 导入 GitHub 仓库
- **自托管**: 需要 Node.js 环境，运行 `npm run build && npm start`

## 常见问题

### Q: 图片显示不出来？

A: 检查以下几点：
1. 图片路径是否正确
2. 如果是外部图片，是否在 `next.config.ts` 中配置了域名
3. 图片文件是否存在于 `public` 文件夹中

### Q: 如何更改网站标题？

A: 编辑 `src/app/layout.tsx` 中的 `metadata` 对象。

### Q: 如何添加更多分类？

A: 在 `src/data/works.ts` 中为作品设置不同的 `category` 值即可。

### Q: 能否添加评论功能？

A: 这是一个静态网站，如需评论功能，可以集成：
- Disqus
- Giscus (基于 GitHub Discussions)
- Utterances (基于 GitHub Issues)

### Q: 如何添加联系表单？

A: 可以使用：
- Formspree
- Netlify Forms
- 自建后端 API

## 技术支持

如有问题，请参考：
- [Next.js 文档](https://nextjs.org/docs)
- [Tailwind CSS 文档](https://tailwindcss.com/docs)
- [React 文档](https://react.dev)

祝你使用愉快！📸

