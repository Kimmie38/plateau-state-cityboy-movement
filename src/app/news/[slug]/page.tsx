import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { chapter, news } from "@/content/site";
import { JoinBand, Mosaic, NewsCard } from "@/components/Blocks";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return news.map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const item = news.find((n) => n.slug === slug);
  return item ? { title: item.title, description: item.summary } : {};
}

export default async function NewsArticle({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const index = news.findIndex((n) => n.slug === slug);
  if (index === -1) notFound();
  const item = news[index];
  const related = news.filter((n) => n.slug !== slug && n.category === item.category).slice(0, 3);
  const prev = news[index + 1];
  const next = news[index - 1];

  return (
    <>
      <section className="article-header">
        <div className="container narrow">
          <p className="article-header__crumbs">
            <Link href="/news">News</Link> <span aria-hidden>/</span> {item.category}
          </p>
          <h1 className="article-header__title">{item.title}</h1>
          <p className="article-header__meta">
            <time dateTime={item.dateTime}>{item.date}</time>
            {item.source && <span> · {item.source}</span>}
          </p>
        </div>
      </section>

      <article className="section section--tight">
        <div className="container narrow article">
          {item.photos.length > 0 && <Mosaic photos={item.photos} className="article__media" />}
          <div className="article__body">
            <p className="lead">{item.summary}</p>
            {item.body.map((para) => (
              <p key={para.slice(0, 24)}>{para}</p>
            ))}
            <p className="article__sign">
              City Boy Movement, Plateau State Chapter · <em>{chapter.theme}</em>
            </p>
          </div>
          <nav className="article__pager" aria-label="More news">
            {prev ? (
              <Link href={`/news/${prev.slug}`} className="article__pager-link">
                <span>← Older</span>
                {prev.title}
              </Link>
            ) : (
              <span />
            )}
            {next ? (
              <Link href={`/news/${next.slug}`} className="article__pager-link article__pager-link--next">
                <span>Newer →</span>
                {next.title}
              </Link>
            ) : (
              <span />
            )}
          </nav>
        </div>
      </article>

      {related.length > 0 && (
        <section className="section section--tinted">
          <div className="container">
            <header className="section-heading">
              <p className="eyebrow">More {item.category.toLowerCase()} news</p>
              <h2>Related stories</h2>
            </header>
            <div className="news-grid">
              {related.map((n) => (
                <NewsCard key={n.slug} item={n} />
              ))}
            </div>
          </div>
        </section>
      )}
      <JoinBand />
    </>
  );
}
