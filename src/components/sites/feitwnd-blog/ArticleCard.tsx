import type { Article } from "@/lib/sites/feitwnd-blog/data";

export function ArticleCard({ article }: { article: Article }) {
  return (
    <a href={article.href} className="article-card">
      <div className="card-cover">
        <img src={article.cover} alt={article.title} loading="lazy" />
      </div>
      <div className="card-body">
        <div className="card-top">
          <span className="card-category"><i className="iconfont icon-folder" /> {article.category}</span>
          <span className="card-date"><i className="iconfont icon-time" /> {article.date}</span>
        </div>
        <h3 className="card-title">{article.title}</h3>
        <p className="card-summary">{article.summary}</p>
        <div className="card-meta">
          <span><i className="iconfont icon-eye" /> {article.views}</span>
          <span><i className="iconfont icon-pinglun" /> {article.comments}</span>
          <span><i className="iconfont icon-dianzan" /> {article.likes}</span>
          <span><i className="iconfont icon-guidang" /> {article.words} 字</span>
          <span><i className="iconfont icon-time" /> {article.minutes} 分钟</span>
        </div>
      </div>
    </a>
  );
}
