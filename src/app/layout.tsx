import type { Metadata } from "next";
import "./globals.css";
import "../components/sites/feitwnd-blog/feitwnd-blog.css";

export const metadata: Metadata = {
  title: "首页 - Xive",
  description: "Xive Blog",
  icons: { icon: "/favicon.ico" },
};

// Applies the stored theme before first paint to avoid a light-mode flash.
const themeInitScript = `try{var t=localStorage.getItem("feitwnd-theme");if(t==="light"){document.documentElement.classList.remove("dark")}else{document.documentElement.classList.add("dark")}}catch(e){}`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="dark" suppressHydrationWarning>
      <body>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        {children}
      </body>
    </html>
  );
}
