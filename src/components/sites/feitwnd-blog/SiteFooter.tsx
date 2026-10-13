import { siteInfo } from "@/lib/sites/feitwnd-blog/data";

export function SiteFooter() {
  const { footer } = siteInfo;
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-beian">
          <span>{footer.gonganBeian}</span>
          <span className="footer-divider">|</span>
          <a href={footer.icpUrl} target="_blank" rel="noopener noreferrer">{footer.icpBeian}</a>
        </div>
        <div className="footer-copy"> {footer.copyright} </div>
        <div className="footer-links">
          <a href={footer.sitemap} target="_blank" rel="noopener">Sitemap</a>
          <span className="footer-divider">|</span>
          <a href={footer.rss} target="_blank" rel="noopener">RSS</a>
        </div>
      </div>
    </footer>
  );
}
