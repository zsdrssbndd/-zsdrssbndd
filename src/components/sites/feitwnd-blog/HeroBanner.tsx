import { siteInfo } from "@/lib/sites/feitwnd-blog/data";

export function HeroBanner() {
  return (
    <div className="hero-banner" style={{ backgroundImage: "url(/sites/feitwnd-blog/hero.webp)" }}>
      <div className="hero-overlay" />
      <div className="hero-fade" />
      <div className="hero-content">
        <h1 className="hero-title">{siteInfo.name}</h1>
        <p className="hero-desc">{siteInfo.tagline}</p>
      </div>
    </div>
  );
}
