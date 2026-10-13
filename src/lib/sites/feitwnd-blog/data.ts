// Static snapshot data cloned from https://blog.feitwnd.cc/ (captured 2026-10-13).
// Articles mirror /api/blog/article/page?page=1&pageSize=10; music mirrors /api/blog/music.

export interface Article {
  href: string;
  category: string;
  date: string;
  title: string;
  summary: string;
  views: number;
  comments: number;
  likes: number;
  words: number;
  minutes: number;
  cover: string;
}

const cover = (name: string) => `/sites/feitwnd-blog/image/${name}`;
const src = "https://blog.feitwnd.cc";

export const articles: Article[] = [
  {
    href: `${src}/article/server-monitoring-backup-automation`,
    category: "技术",
    date: "2026-09-18 16:37",
    title: "博客服务器的自动巡检和基于Git的备份",
    summary:
      "博主清理服务器后意识到未备份，遂用 Git 自动备份：定时导出数据库并收集 Nginx 配置等，排除私钥与凭据，本机留 7 份，推送 GitHub 私有仓库，靠提交历史回滚；推送前检查仓库是否公开。另用 shell 脚本加 cron 巡检，检查服务、接口、证书、磁盘、内存、日志、MySQL、Redis 等，异常经 QQ 邮箱告警。博主认为个人站点多因默认配置过松且无人监控而出问题，该低成本方案够用，外部监控可弥补单机全挂。",
    views: 37, comments: 2, likes: 0, words: 1963, minutes: 6,
    cover: cover("825840c4-526c-4e46-b18c-c89cec5db073.webp"),
  },
  {
    href: `${src}/article/summer-i-dont-want-to-go-home`,
    category: "心得",
    date: "2026-09-06 16:13",
    title: "不想回家的暑假",
    summary:
      "博主在暑期经历了实习、租房和交换求学三件事。实习难找，最终经学长内推进入小公司，意识到仅靠传统前后端技术已不够。暑假首次租房独居，自己处理生活琐事，也由此反思不想回家的矛盾心理，最终理解家是被人照顾的舒适区，而独居是学会照顾自己。随后博主前往嘉兴交换，为凑学分选修大量课程，并计划学习Agent相关技术。文章表达了对新学期的展望，鼓励自己带着收获继续前行。",
    views: 106, comments: 4, likes: 0, words: 1865, minutes: 6,
    cover: cover("d1796d31-4931-45f3-9fee-afdd4c783017.webp"),
  },
  {
    href: `${src}/article/blog-oss-anti-theft-security-upgrade`,
    category: "技术",
    date: "2026-09-05 15:14",
    title: "从上传加固到 CDN 私有回源，个人博客防盗刷完整方案",
    summary:
      "博主针对个人博客遭遇固定IP高频刷取静态资源导致流量费用损失的问题，梳理了从代码到云侧的完整防盗刷加固方案。文章指出默认部署存在上传接口校验缺失、OSS公共读直链、Referer防盗链可被伪装绕过等风险。代码侧新增上传扩展名白名单、大小上限、文件头魔数校验及接口限流；云侧推荐私有Bucket加CDN私有回源，并辅以费用告警、静态资源套CDN。文章还提供了开源使用者从更新代码、配置CDN到迁移历史图片、修改私有权限的八步操作指南。",
    views: 41, comments: 0, likes: 1, words: 3021, minutes: 10,
    cover: cover("0d1de9b4-0008-4453-855a-9aa40b89307d.webp"),
  },
  {
    href: `${src}/article/chongqing-trip-with-friends-spicy-food`,
    category: "日常",
    date: "2026-09-05 13:08",
    title: "四人成行，川渝寻辣——重庆游记",
    summary:
      "博主趁实习结束与三位朋友同游重庆，开启川渝寻辣之旅。他们品尝了微辣已令人难以招架的浇头面和美味却辣到流泪的春红火锅，游览了鹅岭公园、动物园、解放碑、山城步道等景点。文中记录了在来福士迷路、被“聋哑人”强行合照收费等插曲，并感悟到城市商业街同质化，旅游重心更应放在尝试特色美食上。最终四人同游和谐顺利，并已约定寒假再赴哈尔滨。",
    views: 31, comments: 0, likes: 0, words: 1711, minutes: 5,
    cover: cover("4efc6a51-5331-4655-8d3e-1aad952504db.webp"),
  },
  {
    href: `${src}/article/blog-update-mobile-app-pluggable-ai`,
    category: "技术",
    date: "2026-08-18 10:25",
    title: "移动端管理 App + 可插拔 AI 模块 + QQ群来了",
    summary:
      "博主更新了博客系统，主要新增三个内容：支持Android的移动端管理App，通过Expo开发并复用后端管理接口，便于无电脑时管理博客；可插拔AI模块，提供AI摘要生成和错别字/病句纠错功能，支持OpenAI兼容协议，可通过Maven profile控制是否打包；以及新建QQ交流群。同时完成了重构瘦身、性能优化、Bug修复和文档更新，并感谢了社区反馈的贡献者。",
    views: 116, comments: 2, likes: 0, words: 2261, minutes: 7,
    cover: cover("1616e7ff-e095-4794-9ae7-42db6356dc0a.webp"),
  },
  {
    href: `${src}/article/node-js`,
    category: "技术",
    date: "2026-08-10 17:29",
    title: "Node.js学习笔记",
    summary:
      "本文系统记录了Node.js后端开发的完整学习路径。从基础环境搭建开始，涵盖核心内置模块（文件读写、readline命令行交互）、原生HTTP服务与路由实现，再到Express框架的实战应用——包括动态路由、CRUD操作、CORS配置、POST请求处理、环境变量与热更新，以及推荐的项目结构分层。进阶部分介绍了Sequelize ORM操作PostgreSQL数据库、接口限流（express-rate-limit）、pino日志系统、自定义中间件与全局异常捕获。",
    views: 53, comments: 0, likes: 2, words: 1453, minutes: 4,
    cover: cover("bee863d6-7ffe-4945-b8e9-057c74fdda79.webp"),
  },
  {
    href: `${src}/article/typescript-decorator`,
    category: "技术",
    date: "2026-07-31 16:20",
    title: "TypeScript-装饰器",
    summary:
      "本文系统讲解了TypeScript传统实验性装饰器的核心概念与实践用法。装饰器本质上是运行在类定义阶段的特殊函数，可用于日志、校验、权限、依赖注入等横切逻辑。文章详细介绍了五类装饰器——类装饰器、属性装饰器、方法装饰器、访问器装饰器和参数装饰器的语法、参数含义与典型应用，并通过继承替换类、装饰器工厂、装饰器组合、WeakMap隔离实例状态、方法包装保留this等案例演示了具体实现。同时强调了传统装饰器与标准装饰器的区别、类型系统与运行时行为的边界，以及避免状态共享、签名混用等常见陷阱。适合已掌握TypeScript基础、希望理解装饰器机制的开发者阅读。",
    views: 53, comments: 0, likes: 1, words: 5482, minutes: 18,
    cover: cover("d45ee97b-05f9-4cb9-b02a-cad82b5790ad.webp"),
  },
  {
    href: `${src}/article/typhoon-season-shantou-food-journey`,
    category: "日常",
    date: "2026-07-28 11:19",
    title: "冒雨奔赴一场放纵餐——汕头纯吃记",
    summary:
      "趁实习双休，顶着台风独自跑去汕头吃了两天。从生腌夜宵开局，到早茶收尾，中间穿插了肠粉、猪脚饭、牛肉火锅、反沙、丸子、粿条……跟着B站博主的攻略一路扫街，虽有店铺因天气关门的小遗憾，但雨天反而少了排队。第一次一个人旅行，发现孤独和自由是一体两面——不用迁就任何人，但也无人分享那份惊艳。淋成落汤鸡也毫无怨言，吃之爽之，没白来。",
    views: 62, comments: 6, likes: 1, words: 2390, minutes: 7,
    cover: cover("2d60188f-b25c-4252-9774-9d149fad4971.webp"),
  },
  {
    href: `${src}/article/typescript-basic-notes`,
    category: "技术",
    date: "2026-07-27 21:51",
    title: "TypeScript学习笔记——在有JavaScript的基础上",
    summary:
      "本文系统介绍了TypeScript的核心概念与实践要点。TypeScript是JavaScript的超集，通过在编码阶段引入静态类型检查，帮助开发者提前发现错误、提升代码可读性与可维护性。文章涵盖类型声明、类型推断、常用类型（any、unknown、never、void）、对象与数组类型、函数与元组、枚举、类与继承、接口与类型别名的区别、泛型、类型声明文件以及从JavaScript迁移的策略。强调类型系统不能替代运行时校验，并给出了避免常见误区的实践建议。适合有一定JavaScript基础的开发者快速入门。",
    views: 26, comments: 2, likes: 0, words: 6374, minutes: 21,
    cover: cover("d45ee97b-05f9-4cb9-b02a-cad82b5790ad.webp"),
  },
  {
    href: `${src}/article/blog-update-2.0`,
    category: "技术",
    date: "2026-07-17 13:20",
    title: "博客更新了！v2.0版本",
    summary: "博客2.0版本来了！",
    views: 164, comments: 2, likes: 3, words: 881, minutes: 2,
    cover: cover("88a00b30-e043-4ffa-96b5-c085f411d90f.webp"),
  },
];

export interface Track {
  id: number;
  title: string;
  artist: string;
  duration: number; // seconds
  cover: string;
  src: string;
}

export const tracks: Track[] = [
  { id: 1, title: "Episode - 33", artist: "She Her Her Hers", duration: 257, cover: cover("654355f4-147f-4f9d-a091-c175ac576455.webp"), src: "/sites/feitwnd-blog/audio/episode-33.mp3" },
  { id: 2, title: "没有了", artist: "门尼", duration: 211, cover: cover("52c7687d-9461-4957-bd92-e00cb7bfcd83.webp"), src: "/sites/feitwnd-blog/audio/meiyoule.mp3" },
  { id: 3, title: "Welcome Home", artist: "Radical Face", duration: 297, cover: cover("4fa866a1-29ff-4463-8158-a34799b4441f.webp"), src: "/sites/feitwnd-blog/audio/welcome-home.aac" },
  { id: 4, title: "A Thousand Miles", artist: "Josh Vietti", duration: 237, cover: cover("1ba71152-0e94-4edb-9c89-f6a63df9c56b.webp"), src: "/sites/feitwnd-blog/audio/a-thousand-miles.mp3" },
  { id: 5, title: "Take Me Hand", artist: "Cécile Corbel", duration: 260, cover: cover("f2d9496d-6cf8-46a1-a5d6-8d49104009ed.webp"), src: "/sites/feitwnd-blog/audio/take-me-hand.aac" },
];

export const siteInfo = {
  name: "Xive",
  siteTitle: "Xive's Blog",
  tagline: "随便坐坐，看看我写的字 —— 些许技术、心得、生活日常和胡思乱想。",
  avatar: "/sites/feitwnd-blog/image/avatar.png",
  tag: "初出茅庐 | 科班码农 | 拾枝者",
  description: "人生如棋 落子无悔 如箭离弦 永不回头",
  location: "河南南阳",
  stats: { articles: 42, categories: 3, tags: 22 },
  social: { github: "https://github.com/Xive", email: "mailto:kiuwoba@qq.com" },
  visitorStats: [
    { label: "在线访客", value: "3" },
    { label: "今日浏览", value: "20" },
    { label: "总浏览量", value: "14986" },
    { label: "总访客量", value: "1238" },
  ],
  footer: {
    gonganBeian: "豫公网安备41132702000130号",
    icpBeian: "豫ICP备2025138023号-1",
    icpUrl: "https://beian.miit.gov.cn/",
    copyright: "© 2025-2026 Xive. All rights reserved.",
    sitemap: "https://blog.feitwnd.cc/api/blog/sitemap.xml",
    rss: "https://blog.feitwnd.cc/api/blog/rss",
  },
};
