import Image from "next/image";
import Link from "next/link";
import {
  apc,
  chapter,
  chapterPhotos,
  director,
  galleryGroups,
  heroBackgrounds,
  news,
  operation,
  patron,
  governorPhotos,
  photos,
  pillars,
  slogans,
  stats,
} from "@/content/site";
import { HeroBackdrop } from "@/components/PageHeader";
import { DropText } from "@/components/DropText";
import { PhotoMarquee } from "@/components/PhotoMarquee";
import { BadgedPhoto, Cards, JoinBand, NewsCard, Quote, SectionHeading, Split, Stats } from "@/components/Blocks";

export default function HomePage() {
  const latest = news.slice(0, 3);
  const marquee = galleryGroups
    .filter((g) => g.id !== "flyers")
    .flatMap((g) => g.photos.slice(0, 3));

  return (
    <>
      {/* Hero */}
      <section className="hero" aria-labelledby="hero-title">
        <HeroBackdrop src={heroBackgrounds.home} />
        <div className="container hero__grid">
          <div className="hero__text">
            <p className="eyebrow eyebrow--on-dark">{chapter.chapter}</p>
            <h1 id="hero-title" className="hero__title">
              <DropText text="City Boy Movement" delay={150} />
              <span className="hero__state">Plateau State</span>
            </h1>
            <p className="hero__tagline">{chapter.theme}</p>
            <p className="hero__intro">{chapter.whoWeAre}</p>
            <div className="hero__actions">
              <a className="btn btn--yellow" href={chapter.signupUrl} target="_blank" rel="noreferrer">
                Join the Movement
              </a>
              <Link className="btn btn--outline-light" href="/operation-rock-solid">
                Operation Rock Solid
              </Link>
            </div>
            <p className="hero__motto">{chapter.motto}</p>
          </div>
          <div className="hero__media">
            <div className="hero__frame">
              <BadgedPhoto photo={photos.directorCap} sizes="(max-width: 860px) 90vw, 44vw" priority />
            </div>
          </div>
        </div>
        <div className="container">
          <Stats items={stats} />
        </div>
      </section>

      {/* Slogan ticker */}
      <div className="ticker" aria-label="Slogans">
        <div className="ticker__track">
          {[0, 1].map((copy) => (
            <div key={copy} className="ticker__set" aria-hidden={copy === 1 || undefined}>
              {slogans.map((s) => (
                <span key={s} className="ticker__item">
                  {s}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Who we are */}
      <section className="section" aria-labelledby="who-title">
        <div className="container">
          <Split photos={chapterPhotos.slice(0, 4)}>
            <SectionHeading kicker="Who we are" title="Organising, mobilising and empowering Plateau’s young people" id="who-title" />
            <p className="lead">{chapter.about}</p>
            <p>
              From the State Working Committee in Jos to coordinators in every one of the 17 LGAs, 207 wards and 4,989 polling
              units, we take the Renewed Hope message of President Bola Ahmed Tinubu to every community.
            </p>
            <Link href="/about" className="btn btn--green">
              About the chapter
            </Link>
          </Split>
          <div className="spacer" />
          <Cards items={pillars} />
        </div>
      </section>

      {/* Operation Rock Solid */}
      <section className="section section--green" aria-labelledby="ors-title">
        <div className="container ors">
          <div className="ors__text">
            <SectionHeading kicker="Our flagship programme" title={operation.heading} id="ors-title" tone="dark" />
            <p className="muted-on-dark">{operation.summary}</p>
            <ul className="ors__lines">
              {operation.lines.map((l) => (
                <li key={l}>{l}</li>
              ))}
            </ul>
            <Link href="/operation-rock-solid" className="btn btn--yellow">
              How it works
            </Link>
          </div>
          <div className="target">
            <span className="target__value">{operation.target}</span>
            <span className="target__label">{operation.targetLabel}</span>
          </div>
        </div>
      </section>

      {/* Patron */}
      <section className="section" aria-labelledby="patron-title">
        <div className="container">
          <Split photos={governorPhotos.slice(0, 4)} reverse>
            <SectionHeading kicker="Our Patron" title={patron.name} id="patron-title" />
            <p className="lead">{patron.title} · {patron.role}</p>
            <p>{patron.timeline[0].text}</p>
            <Quote text={patron.joining.quote} by="Governor Caleb Mutfwang, on joining the APC" />
            <Link href="/patron" className="btn btn--green">
              About our Patron
            </Link>
          </Split>
        </div>
      </section>

      {/* APC */}
      <section className="section section--tinted" aria-labelledby="apc-title">
        <div className="container apc-teaser">
          <div>
            <SectionHeading kicker="City Boy Movement & the APC" title="Partners in progress" id="apc-title" />
            <p className="lead">{apc.text}</p>
            <Quote text={apc.quote} by={`${director.name}, ${director.title}`} />
            <Link href="/apc" className="btn btn--green">
              Our relationship with the APC
            </Link>
          </div>
          <div className="apc-teaser__media">
            <Image src={photos.apcShirtBack.src} alt={photos.apcShirtBack.alt} width={photos.apcShirtBack.width} height={photos.apcShirtBack.height} sizes="(max-width: 860px) 70vw, 30vw" />
            <span className="apc-teaser__stamp">Proudly APC! Proudly City Boy!</span>
          </div>
        </div>
      </section>

      {/* Director */}
      <section className="section" aria-labelledby="director-title">
        <div className="container profile">
          <div className="profile__media">
            <Image src={director.photo.src} alt={director.photo.alt} width={director.photo.width} height={director.photo.height} sizes="(max-width: 860px) 80vw, 34vw" />
          </div>
          <div className="profile__text">
            <p className="eyebrow">{director.title}</p>
            <h2 id="director-title">{director.name}</h2>
            <p className="lead">{director.bio[0]}</p>
            <Quote text={director.quote} by="To the newly inaugurated LGA & Ward Coordinators, December 2025" />
            <Link href="/leadership" className="btn btn--green">
              Meet the State Leadership
            </Link>
          </div>
        </div>
      </section>

      {/* News */}
      <section className="section section--tinted" aria-labelledby="news-title">
        <div className="container">
          <SectionHeading
            kicker="Latest"
            title="News from across Plateau"
            id="news-title"
            action={
              <Link href="/news" className="btn btn--green">
                All news
              </Link>
            }
          />
          <div className="news-grid">
            {latest.map((n) => (
              <NewsCard key={n.slug} item={n} />
            ))}
          </div>
        </div>
      </section>

      {/* Photos */}
      <section className="section" aria-labelledby="moments-title">
        <div className="container">
          <SectionHeading
            kicker="Gallery"
            title="The Movement in pictures"
            id="moments-title"
            action={
              <Link href="/gallery" className="btn btn--green">
                View the gallery
              </Link>
            }
          />
        </div>
        <PhotoMarquee photos={marquee} />
      </section>

      <JoinBand />
    </>
  );
}
