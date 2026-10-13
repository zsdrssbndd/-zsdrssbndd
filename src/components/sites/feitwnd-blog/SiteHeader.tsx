"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { MoonIcon, SunIcon } from "./icons";
import type { Track } from "@/lib/sites/feitwnd-blog/data";

interface NavLink {
  label: string;
  icon: string;
  href: string;
  external?: boolean;
  active?: boolean;
}

const navLinks: NavLink[] = [
  { label: "主页", icon: "icon-zhuye", href: "https://feitwnd.cc", external: true },
  { label: "博客", icon: "icon-boke", href: "/", active: true },
  { label: "归档", icon: "icon-guidang", href: "https://blog.feitwnd.cc/archive" },
  { label: "友链", icon: "icon-lianjie", href: "https://blog.feitwnd.cc/links" },
  { label: "留言", icon: "icon-liuyan", href: "https://blog.feitwnd.cc/message" },
  { label: "足迹", icon: "icon-zuji", href: "https://blog.feitwnd.cc/footprint" },
  { label: "关于", icon: "icon-guanyu", href: "https://blog.feitwnd.cc/about" },
  { label: "开往", icon: "icon-subway", href: "https://www.travellings.cn/go.html", external: true },
];

interface SiteHeaderProps {
  dark: boolean;
  scrolled: boolean;
  query: string;
  onQueryChange: (value: string) => void;
  tracks: Track[];
  currentIndex: number;
  playing: boolean;
  panelOpen: boolean;
  audioRef: React.RefObject<HTMLAudioElement | null>;
  onTogglePanel: () => void;
  onTogglePlay: () => void;
  onNextTrack: () => void;
  onSelectTrack: (index: number) => void;
  onToggleTheme: () => void;
}

export function SiteHeader({
  dark,
  scrolled,
  query,
  onQueryChange,
  tracks,
  currentIndex,
  playing,
  panelOpen,
  audioRef,
  onTogglePanel,
  onTogglePlay,
  onNextTrack,
  onSelectTrack,
  onToggleTheme,
}: SiteHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const current = tracks[currentIndex];

  useEffect(() => {
    if (searchOpen) inputRef.current?.focus();
  }, [searchOpen]);

  const toggleSearch = () => {
    if (searchOpen && !query) {
      setSearchOpen(false);
    } else {
      setSearchOpen(true);
    }
  };

  const clearSearch = () => {
    onQueryChange("");
    setSearchOpen(false);
  };

  const headerClass = ["site-header", dark ? "dark" : "", scrolled ? "scrolled" : ""].filter(Boolean).join(" ");

  const renderLink = (link: NavLink, mobile: boolean) => (
    <a
      key={link.label}
      href={link.href}
      target={link.external ? "_blank" : undefined}
      rel={link.external ? "noopener" : undefined}
      className={mobile ? "nav-mobile-link" : "nav-link"}
      aria-current={link.active ? "page" : undefined}
      onClick={mobile ? () => setMenuOpen(false) : undefined}
    >
      <i className={`iconfont ${link.icon}`} /> {link.label}
    </a>
  );

  return (
    <header className={headerClass}>
      <div className="header-inner">
        <div className="header-left">
          <Link href="/" className="site-title">{"Xive's Blog"}</Link>
          <nav className="nav-desktop">{navLinks.map((l) => renderLink(l, false))}</nav>
        </div>
        <div className="header-right">
          <div className="mini-player-wrap">
            <div className="mini-player" onClick={onTogglePanel} role="button" aria-label="播放列表">
              <img src={current.cover} alt={current.title} className={`player-cover${playing ? " spinning" : ""}`} />
              <span className="player-title">{current.title}</span>
            </div>
            <button type="button" className="player-btn" title="播放/暂停" onClick={onTogglePlay}>
              <i className={`iconfont ${playing ? "icon-zanting" : "icon-play-full"}`} />
            </button>
            <button type="button" className="player-btn" title="下一首" onClick={onNextTrack}>
              <i className="iconfont icon-next" />
            </button>
            <audio ref={audioRef} src={current.src} preload="none" onEnded={onNextTrack} />
            <div className={`music-panel${panelOpen ? " open" : ""}`}>
              <div className="music-panel-header">
                <span><i className="iconfont icon-yinle" /> 播放列表</span>
                <span className="music-panel-count">{tracks.length} 首</span>
              </div>
              <ul className="music-panel-list">
                {tracks.map((track, index) => (
                  <li
                    key={track.id}
                    className={`music-panel-item${index === currentIndex ? " active" : ""}`}
                    onClick={() => onSelectTrack(index)}
                  >
                    <img src={track.cover} alt={track.title} className="music-panel-cover" />
                    <div className="music-panel-info">
                      <span className="music-panel-name">{track.title}</span>
                      <span className="music-panel-artist">{track.artist}</span>
                    </div>
                    {index === currentIndex && playing ? <i className="iconfont icon-zanting playing-icon" /> : null}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <button type="button" className="theme-toggle" title={dark ? "切换到浅色模式" : "切换到深色模式"} onClick={onToggleTheme}>
            {dark ? <SunIcon /> : <MoonIcon />}
          </button>
          <div className="search-area">
            <div className={`search-box${searchOpen ? " expanded" : ""}`}>
              <input
                ref={inputRef}
                type="text"
                placeholder="搜索文章..."
                className="search-input"
                value={query}
                onChange={(e) => onQueryChange(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Escape") clearSearch();
                }}
              />
            </div>
            <button type="button" className="search-toggle" title="搜索" onClick={toggleSearch}>
              <i className="iconfont icon-sousuo" />
            </button>
          </div>
          <button type="button" className="mobile-menu-btn" aria-label="菜单" onClick={() => setMenuOpen((v) => !v)}>
            <span className={`bar${menuOpen ? " open" : ""}`} />
          </button>
        </div>
      </div>
      <nav className={`nav-mobile${menuOpen ? " open" : ""}`}>
        {navLinks.map((l) => renderLink(l, true))}
        <button type="button" className="nav-mobile-link" onClick={() => { setMenuOpen(false); setSearchOpen(true); }}>
          <i className="iconfont icon-sousuo" /> 搜索
        </button>
        <button type="button" className="nav-mobile-link" onClick={() => { onToggleTheme(); setMenuOpen(false); }}>
          {dark ? <SunIcon width={15} height={15} style={{ verticalAlign: "-2px", marginRight: "4px" }} /> : <MoonIcon width={15} height={15} style={{ verticalAlign: "-2px", marginRight: "4px" }} />}
          {dark ? "浅色模式" : "深色模式"}
        </button>
      </nav>
    </header>
  );
}