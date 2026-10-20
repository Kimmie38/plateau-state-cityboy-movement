import type { MetadataRoute } from "next";
import { news } from "@/content/site";

const SITE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.org"; // TODO: set to the live domain

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/about", "/apc", "/national", "/leadership", "/patron", "/operation-rock-solid", "/grassroots", "/students", "/news", "/gallery", "/join"];
  return [
    ...pages.map((p) => ({ url: `${SITE}${p}`, changeFrequency: "weekly" as const, priority: p === "" ? 1 : 0.7 })),
    ...news.map((n) => ({ url: `${SITE}/news/${n.slug}`, lastModified: n.dateTime, priority: 0.5 })),
  ];
}
