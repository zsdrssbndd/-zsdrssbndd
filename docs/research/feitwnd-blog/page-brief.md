# Page Brief — blog.feitwnd.cc 首页克隆

- **源站**: https://blog.feitwnd.cc/ （Vue 3 + Vite + Element Plus SPA，默认深色主题）
- **克隆范围**: 仅首页（路由 `/`）
- **技术映射**: Vue SPA → Next.js 16 App Router + React 19（本仓库模板），Element Plus 分页 → 自建 `Pagination` 复刻外观
- **快照时间**: 2026-10-13，文章/统计数据为该时点快照

## 路由映射
| 源站 | 克隆 | 说明 |
|---|---|---|
| / | / | 首页（本次克隆目标） |
| /archive /links /message /footprint /about | 指向 https://blog.feitwnd.cc/<path> | 范围外，保留可用链接 |
| https://feitwnd.cc 、https://www.travellings.cn/go.html | 原样保留 | 源站本身即外链 |
| /article/* | 指向 https://blog.feitwnd.cc/article/* | 文章详情页范围外 |

## 资产映射（全部本地化，public/sites/feitwnd-blog/）
- hero 背景 /assets/bgc-IXDcA65l.webp → hero.webp
- 头像/9 张文章封面/5 张音乐封面（assets.feitwnd.cc/image/*）→ image/*.webp、avatar.png
- 图标字体 iconfont woff2 → fonts/iconfont.woff2（28 个图标码点已写入 CSS）
- 5 首歌曲音频（assets.feitwnd.cc/audio/*）→ audio/*（完整播放列表来自源站 /api/blog/music）
- favicon.ico

## 数据
- 10 篇文章（源站 /api/blog/article/page?page=1&pageSize=10 的首屏数据）：标题/分类/日期/摘要/浏览/评论/点赞/字数/阅读分钟 全部静态化于 src/lib/sites/feitwnd-blog/data.ts
- 侧栏信息卡、站点统计：静态快照值

## 交互实现
- 深色默认主题，主题切换写 localStorage(`feitwnd-theme`)；源站存储方式未知，行为等效
- header 滚动 >10px 加 .scrolled；迷你播放器可播放/暂停/下一首（本地音频完整可用）、展开播放列表；搜索框展开并客户端过滤文章；移动端汉堡菜单；回到顶部按钮
- 分页为静态复刻（第 1 页 active、上一页禁用，共 5 页）

## 披露（已知差异）
1. 分页第 2–5 页点击无内容切换（仅 10 篇快照数据；源站为 API 分页）
2. 搜索为客户端过滤快照数据；源站为后端搜索，结果文案为近似复刻
3. 站点统计为快照静态值（源站实时接口）；侧栏分类/标签数字点击的弹窗未克隆
4. 侧栏 RSS 图标为展示（源站点击打开 RSS 订阅弹窗）
5. 主题存储键名与源站实现可能不同
6. 衬线字体按源站策略使用系统回退栈（源站未加载 Noto Serif SC webfont）
