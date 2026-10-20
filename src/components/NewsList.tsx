"use client";

import { useMemo, useState } from "react";
import type { NewsItem } from "@/content/site";
import { NewsCard } from "./Blocks";

const ALL = "All";

export function NewsList({ items }: { items: NewsItem[] }) {
  const categories = useMemo(() => [ALL, ...Array.from(new Set(items.map((i) => i.category)))], [items]);
  const [filter, setFilter] = useState(ALL);
  const shown = filter === ALL ? items : items.filter((i) => i.category === filter);

  return (
    <>
      <div className="chips" role="group" aria-label="Filter news">
        {categories.map((c) => (
          <button key={c} type="button" className="chip" aria-pressed={filter === c} onClick={() => setFilter(c)}>
            {c}
          </button>
        ))}
      </div>
      <p className="gallery-count" aria-live="polite">
        {shown.length} {shown.length === 1 ? "story" : "stories"}
      </p>
      <div className="news-grid">
        {shown.map((n) => (
          <NewsCard key={n.slug} item={n} />
        ))}
      </div>
    </>
  );
}
