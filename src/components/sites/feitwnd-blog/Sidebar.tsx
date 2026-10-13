import { GitHubIcon, MailIcon } from "./icons";
import { siteInfo } from "@/lib/sites/feitwnd-blog/data";

export function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="side-card info-card">
        <div className="info-avatar-wrap">
          <img src={siteInfo.avatar} alt={siteInfo.name} className="info-avatar" loading="lazy" />
        </div>
        <h3 className="info-name">{siteInfo.name}</h3>
        <p className="info-tag">{siteInfo.tag}</p>
        <p className="info-description">{siteInfo.description}</p>
        <p className="info-location"><i className="iconfont icon-position" /> {siteInfo.location}</p>
        <div className="info-stats">
          <div className="info-stat">
            <span className="stat-num">{siteInfo.stats.articles}</span>
            <span className="stat-label">文章</span>
          </div>
          <div className="info-stat">
            <span className="stat-num">{siteInfo.stats.categories}</span>
            <span className="stat-label">分类</span>
          </div>
          <div className="info-stat">
            <span className="stat-num">{siteInfo.stats.tags}</span>
            <span className="stat-label">标签</span>
          </div>
        </div>
        <div className="info-social">
          <a href={siteInfo.social.github} target="_blank" rel="noopener" className="social-link" title="GitHub">
            <GitHubIcon />
          </a>
          <a href={siteInfo.social.email} className="social-link" title="Email">
            <MailIcon />
          </a>
          <span className="social-link" title="RSS 订阅">
            <i className="iconfont icon-rssdingyue" style={{ fontSize: "18px" }} />
          </span>
        </div>
      </div>
      <div className="side-card stats-card">
        <h4 className="stats-card-title"><i className="iconfont icon-eye" /> 站点统计</h4>
        <div className="stats-grid">
          {siteInfo.visitorStats.map((item) => (
            <div key={item.label} className="sg-item">
              <span className="sg-label">{item.label}</span>
              <span className="sg-val">{item.value}</span>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}
