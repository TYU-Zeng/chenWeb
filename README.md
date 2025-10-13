# Chen Photography - 摄影作品集网站

一个简约高级的摄影作品集博客网站，用于展示摄影作品和创作故事。

## 特性

- ✨ 简约优雅的设计风格
- 📱 完全响应式布局
- 🎨 深色主题
- 🖼️ 作品集展示与详情页
- 📝 作品故事叙述
- 👤 关于作者页面
- 🚀 基于 Next.js 15 和 React 19
- 💎 使用 Tailwind CSS 4 构建

## 项目结构

```
webchen/
├── public/
│   └── assets/
│       └── images/          # 图片资源文件夹
├── src/
│   ├── app/
│   │   ├── about/           # 关于页面
│   │   ├── works/[slug]/    # 作品详情页（动态路由）
│   │   ├── layout.tsx       # 全局布局
│   │   ├── page.tsx         # 主页
│   │   └── globals.css      # 全局样式
│   ├── components/          # 可复用组件
│   │   ├── Header.tsx       # 导航栏
│   │   ├── Footer.tsx       # 页脚
│   │   └── WorkCard.tsx     # 作品卡片
│   ├── data/                # 数据文件
│   │   ├── works.ts         # 作品数据
│   │   └── author.ts        # 作者信息
│   └── types/               # TypeScript 类型定义
│       └── index.ts
└── package.json
```

## 快速开始

### 安装依赖

```bash
npm install
```

### 添加图片资源

1. 将您的摄影作品图片放入 `public/assets/images/` 文件夹
2. 查看 `public/assets/images/README.md` 了解需要的图片文件

### 自定义内容

1. **修改作品数据**：编辑 `src/data/works.ts`
2. **修改作者信息**：编辑 `src/data/author.ts`
3. **修改网站标题和描述**：编辑 `src/app/layout.tsx`

### 运行开发服务器

```bash
npm run dev
```

打开 [http://localhost:3000](http://localhost:3000) 查看网站。

### 构建生产版本

```bash
npm run build
npm start
```

## 技术栈

- **框架**: Next.js 15 (App Router)
- **UI 库**: React 19
- **样式**: Tailwind CSS 4
- **语言**: TypeScript
- **字体**: Geist Sans & Geist Mono

## 自定义指南

### 添加新作品

在 `src/data/works.ts` 中添加新的作品对象：

```typescript
{
  id: '5',
  title: '作品标题',
  slug: 'work-slug',
  category: '作品分类',
  coverImage: '/assets/images/work5-cover.jpg',
  images: [
    '/assets/images/work5-1.jpg',
    '/assets/images/work5-2.jpg',
  ],
  description: '简短描述',
  story: '详细故事...',
  date: '2024-10-01',
  featured: false,
}
```

### 修改配色

编辑 `src/app/globals.css` 中的 CSS 变量：

```css
:root {
  --background: #ffffff;
  --foreground: #171717;
}
```

### 修改布局

- 导航栏：`src/components/Header.tsx`
- 页脚：`src/components/Footer.tsx`
- 作品卡片样式：`src/components/WorkCard.tsx`

## 部署

推荐使用 [Vercel](https://vercel.com) 部署：

1. 将代码推送到 GitHub
2. 在 Vercel 中导入项目
3. Vercel 会自动检测 Next.js 并进行部署

其他部署选项：
- Netlify
- 自托管（需要 Node.js 环境）

## License

MIT

## 作者

Chen - 摄影师 / 视觉艺术家
