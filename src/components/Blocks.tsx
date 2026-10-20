import Link from "next/link";
import Image from "next/image";
import type { CSSProperties, ReactNode } from "react";
import { chapter, type NewsItem, type Photo } from "@/content/site";
import { PhotoButton } from "./Lightbox";

/** Section title used across pages. */
export function SectionHeading({
  kicker,
  title,
  text,
  id,
  action,
  tone = "light",
}: {
  kicker: string;
  title: string;
  text?: string;
  id?: string;
  action?: ReactNode;
  tone?: "light" | "dark";
}) {
  return (
    <header className={`section-heading ${action ? "section-heading--row" : ""} section-heading--${tone}`}>
      <div>
        <p className={`eyebrow ${tone === "dark" ? "eyebrow--on-dark" : ""}`}>{kicker}</p>
        <h2 id={id}>{title}</h2>
        {text && <p className="section-heading__text">{text}</p>}
      </div>
      {action}
    </header>
  );
}

/** A lead photo with up to four thumbnails, all opening the lightbox. */
export function Mosaic({ photos, className = "" }: { photos: Photo[]; className?: string }) {
  if (photos.length === 0) return null;
  const thumbs = photos.slice(1, 5);
  return (
    <div className={`mosaic ${className}`}>
      <PhotoButton photos={photos} index={0} className="mosaic__lead" sizes="(max-width: 860px) 92vw, 50vw" fill />
      {thumbs.length > 0 && (
        <div className="mosaic__thumbs" style={{ gridTemplateColumns: `repeat(${thumbs.length}, 1fr)` }}>
          {thumbs.map((ph, i) => (
            <PhotoButton key={ph.src} photos={photos} index={i + 1} className="mosaic__thumb" sizes="(max-width: 860px) 24vw, 12vw" fill />
          ))}
        </div>
      )}
    </div>
  );
}

/** Text beside photos. */
export function Split({ children, photos, reverse = false }: { children: ReactNode; photos: Photo[]; reverse?: boolean }) {
  return (
    <div className={`split-block ${reverse ? "split-block--reverse" : ""}`}>
      <div className="split-block__media">
        <Mosaic photos={photos} />
      </div>
      <div className="split-block__text">{children}</div>
    </div>
  );
}

/** Pill shown on top of photos with the official sign-up URL. */
export function UrlBadge({ className = "" }: { className?: string }) {
  return (
    <a className={`url-badge ${className}`} href={chapter.signupUrl} target="_blank" rel="noreferrer">
      <span className="url-badge__label">Sign up online</span>
      <span className="url-badge__url">{chapter.signupLabel}</span>
    </a>
  );
}

/** A photo with the sign-up URL overlaid. */
export function BadgedPhoto({ photo, sizes, priority }: { photo: Photo; sizes: string; priority?: boolean }) {
  return (
    <figure className="badged">
      <Image src={photo.src} alt={photo.alt} width={photo.width} height={photo.height} sizes={sizes} priority={priority} />
      <UrlBadge className="badged__badge" />
    </figure>
  );
}

export function Quote({ text, by, tone = "light" }: { text: string; by: string; tone?: "light" | "dark" }) {
  return (
    <blockquote className={`quote quote--${tone}`}>
      <p>“{text}”</p>
      <footer>— {by}</footer>
    </blockquote>
  );
}

export function Stats({ items, tone = "dark" }: { items: { value: string; label: string }[]; tone?: "dark" | "light" }) {
  return (
    <ul className={`stats stats--${tone}`}>
      {items.map((s) => (
        <li key={s.label}>
          <span className="stats__value">{Number.isNaN(Number(s.value.replace(/\D/g, ""))) ? s.value : formatValue(s.value)}</span>
          <span className="stats__label">{s.label}</span>
        </li>
      ))}
    </ul>
  );
}

function formatValue(v: string) {
  const m = v.match(/^(\d+)(.*)$/);
  return m ? `${Number(m[1]).toLocaleString("en-US")}${m[2]}` : v;
}

export function Timeline({ items }: { items: { date: string; title?: string; text: string }[] }) {
  return (
    <ol className="vtimeline">
      {items.map((it) => (
        <li key={it.date + it.text.slice(0, 12)} className="vtimeline__item">
          <span className="vtimeline__date">{it.date}</span>
          {it.title && <h3 className="vtimeline__title">{it.title}</h3>}
          <p>{it.text}</p>
        </li>
      ))}
    </ol>
  );
}

export function Cards({ items, columns = 3 }: { items: { title: string; text: string; kicker?: string }[]; columns?: 2 | 3 | 4 }) {
  return (
    <ul className={`cards cards--${columns}`}>
      {items.map((c, i) => (
        <li key={c.title} className="cards__item" style={{ "--n": i } as CSSProperties}>
          {c.kicker && <span className="cards__kicker">{c.kicker}</span>}
          <h3>{c.title}</h3>
          <p>{c.text}</p>
        </li>
      ))}
    </ul>
  );
}

export function NewsCard({ item }: { item: NewsItem }) {
  const cover = item.photos[0];
  return (
    <Link href={`/news/${item.slug}`} className="news-card">
      <span className={`news-card__img ${cover ? "" : "news-card__img--plain"}`}>
        {cover ? (
          <Image src={cover.src} alt="" fill sizes="(max-width: 700px) 92vw, (max-width: 1100px) 45vw, 360px" />
        ) : (
          <Image src="/brand/cbm-logo-white.png" alt="" width={420} height={417} sizes="120px" className="news-card__logo" />
        )}
      </span>
      <span className="news-card__body">
        <span className="news-card__meta">
          <span className="news-card__cat">{item.category}</span>
          <time dateTime={item.dateTime}>{item.date}</time>
        </span>
        <span className="news-card__title">{item.title}</span>
        <span className="news-card__summary">{item.summary}</span>
        <span className="news-card__more" aria-hidden>
          Read more →
        </span>
      </span>
    </Link>
  );
}

export function JoinBand() {
  return (
    <section className="join-band" aria-labelledby="join-band-title">
      <div className="container join-band__inner">
        <div>
          <p className="eyebrow eyebrow--on-dark">Join the Movement</p>
          <h2 id="join-band-title">Our Plateau. Our Future. Be counted.</h2>
          <p className="join-band__text">
            Registration is free. Sign up online at <strong>{chapter.signupLabel}</strong> and connect with your LGA and ward
            coordinator.
          </p>
        </div>
        <div className="join-band__actions">
          <a className="btn btn--yellow" href={chapter.signupUrl} target="_blank" rel="noreferrer">
            Sign up at {chapter.signupLabel}
          </a>
          <Link className="btn btn--outline-light" href="/join">
            How to join
          </Link>
        </div>
      </div>
    </section>
  );
}

/** Two-letter avatar for people without a photo yet. */
export function Initials({ name }: { name: string }) {
  const clean = name.replace(/^(Hon\.|Mr\.|Ms\.|Dr\.|Barr\.|Comrade|Prof\.|H\.E\.|Engr\.)\s*/g, "");
  const letters = clean
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("");
  return (
    <span className="initials" aria-hidden>
      {letters}
    </span>
  );
}
