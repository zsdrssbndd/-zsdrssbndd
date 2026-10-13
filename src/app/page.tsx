import { FeitwndHome } from "@/components/sites/feitwnd-blog/FeitwndHome";
import { articles, tracks } from "@/lib/sites/feitwnd-blog/data";

export default function Home() {
  return <FeitwndHome articles={articles} tracks={tracks} />;
}
