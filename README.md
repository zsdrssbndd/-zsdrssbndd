# Xive's Blog

个人博客网站，基于 [ai-website-cloner-template](https://github.com/JCodesMore/ai-website-cloner-template) 构建（Next.js 16 · React 19 · TypeScript）。

> 页面设计克隆自 [blog.feitwnd.cc](https://blog.feitwnd.cc/) 首页，仅用于学习与个人使用。

## 运行

```bash
npm install
npm run dev      # 开发模式，http://localhost:3000
npm run build    # 生产构建
npm run start    # 生产运行
npm run check    # eslint + 类型检查 + 构建验证
```

## 结构

- `src/components/sites/feitwnd-blog/` — 页面组件与站点样式
- `src/lib/sites/feitwnd-blog/data.ts` — 文章 / 音乐 / 站点信息数据
- `public/sites/feitwnd-blog/` — 图片、音频、字体等静态资产
- `docs/research/feitwnd-blog/` — 克隆研究笔记与页面说明
