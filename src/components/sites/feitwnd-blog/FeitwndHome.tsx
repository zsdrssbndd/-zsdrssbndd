"use client";

import { useCallback, useEffect, useMemo, useRef, useState, useSyncExternalStore } from "react";
import { SiteHeader } from "./SiteHeader";
import { HeroBanner } from "./HeroBanner";
import { ArticleCard } from "./ArticleCard";
import { Sidebar } from "./Sidebar";
import { SiteFooter } from "./SiteFooter";
import { BackToTop } from "./BackToTop";
import { Pagination } from "./Pagination";
import type { Article, Track } from "@/lib/sites/feitwnd-blog/data";

// The document element's "dark" class is the single source of truth for the
// theme (the inline script in layout.tsx sets it before first paint).
const themeListeners = new Set<() => void>();

function subscribeTheme(onChange: () => void) {
  themeListeners.add(onChange);
  return () => {
    themeListeners.delete(onChange);
  };
}

function getThemeSnapshot(): "dark" | "light" {
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

function getServerThemeSnapshot(): "dark" | "light" {
  return "dark";
}

interface FeitwndHomeProps {
  articles: Article[];
  tracks: Track[];
}

export function FeitwndHome({ articles, tracks }: FeitwndHomeProps) {
  const theme = useSyncExternalStore(subscribeTheme, getThemeSnapshot, getServerThemeSnapshot);
  const [query, setQuery] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [panelOpen, setPanelOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleTheme = useCallback(() => {
    const next = getThemeSnapshot() === "dark" ? "light" : "dark";
    document.documentElement.classList.toggle("dark", next === "dark");
    try {
      localStorage.setItem("feitwnd-theme", next);
    } catch {
      // private mode etc. — theme still applies for this visit
    }
    themeListeners.forEach((listener) => listener());
  }, []);

  // Keep the single <audio> element in sync with playing state / track index.
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.play().catch(() => setPlaying(false));
    } else {
      audio.pause();
    }
  }, [playing, currentIndex]);

  const togglePlay = useCallback(() => setPlaying((p) => !p), []);

  const nextTrack = useCallback(() => {
    setCurrentIndex((i) => (i + 1) % tracks.length);
  }, [tracks.length]);

  const selectTrack = useCallback((index: number) => {
    setCurrentIndex(index);
    setPlaying(true);
  }, []);

  const trimmed = query.trim();
  const filtered = useMemo(() => {
    if (!trimmed) return articles;
    const q = trimmed.toLowerCase();
    return articles.filter(
      (a) =>
        a.title.toLowerCase().includes(q) ||
        a.summary.toLowerCase().includes(q) ||
        a.category.toLowerCase().includes(q)
    );
  }, [articles, trimmed]);

  return (
    <div className="blog-layout">
      <SiteHeader
        dark={theme === "dark"}
        scrolled={scrolled}
        query={query}
        onQueryChange={setQuery}
        tracks={tracks}
        currentIndex={currentIndex}
        playing={playing}
        panelOpen={panelOpen}
        audioRef={audioRef}
        onTogglePanel={() => setPanelOpen((v) => !v)}
        onTogglePlay={togglePlay}
        onNextTrack={nextTrack}
        onSelectTrack={selectTrack}
        onToggleTheme={toggleTheme}
      />
      <HeroBanner />
      <main className="blog-main">
        <div className="main-inner">
          <div className="home-page">
            <div className="home-content">
              <div className="article-col">
                {trimmed ? (
                  <div className="search-result-tip">
                    <i className="iconfont icon-sousuo" /> 找到 <span className="search-count">{filtered.length} 篇</span> 与“{trimmed}”相关的文章
                    <button type="button" className="clear-search" onClick={() => setQuery("")}>清除</button>
                  </div>
                ) : null}
                {filtered.map((article) => (
                  <ArticleCard key={article.href} article={article} />
                ))}
                {trimmed && filtered.length === 0 ? (
                  <div className="empty-tip">暂无相关文章，换个关键词试试？</div>
                ) : null}
                <Pagination />
              </div>
              <Sidebar />
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
      <BackToTop />
    </div>
  );
}