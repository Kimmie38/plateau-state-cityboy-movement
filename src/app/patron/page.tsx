import type { Metadata } from "next";
import Image from "next/image";
import { governorBirthday, governorPhotos, heroBackgrounds, otherPatrons, patron, patronPhotos } from "@/content/site";
import { PageHeader } from "@/components/PageHeader";
import { PhotoButton } from "@/components/Lightbox";
import { JoinBand, Mosaic, Quote, SectionHeading, Split, Timeline } from "@/components/Blocks";

export const metadata: Metadata = { title: "Our Patron" };

export default function PatronPage() {
  return (
    <>
      <PageHeader kicker="Our Patron" title={patron.name} intro={`${patron.title} · ${patron.role}`} image={heroBackgrounds.patron} />

      <section className="section">
        <div className="container profile">
          <div className="profile__media">
            <Image src={governorPhotos[0].src} alt={governorPhotos[0].alt} width={governorPhotos[0].width} height={governorPhotos[0].height} sizes="(max-width: 860px) 80vw, 34vw" priority />
          </div>
          <div className="profile__text">
            <p className="eyebrow">Who he is</p>
            <h2>The Executive Governor of Plateau State</h2>
            {patron.bio.map((b) => (
              <p key={b.slice(0, 20)}>{b}</p>
            ))}
            <dl className="facts">
              {patron.facts.map((f) => (
                <div key={f.label} className="facts__row">
                  <dt>{f.label}</dt>
                  <dd>{f.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="section section--green" aria-labelledby="joining-title">
        <div className="container narrow">
          <SectionHeading kicker="2 January 2026" title="Joining the APC" id="joining-title" tone="dark" />
          <p className="muted-on-dark lead">{patron.joining.text}</p>
          <Quote text={patron.joining.quote} by="Governor Caleb Manasseh Mutfwang" tone="dark" />
        </div>
      </section>

      <section className="section" aria-labelledby="role-title">
        <div className="container two-col two-col--top">
          <div>
            <SectionHeading kicker="His role in the City Boy Movement" title="Patron and Chief Adviser" id="role-title" />
            <Timeline items={patron.timeline} />
          </div>
          <div className="stack-sm">
            <Mosaic photos={governorPhotos.slice(0, 5)} />
            {patron.quotes.map((q) => (
              <Quote key={q.text} text={q.text} by={q.by} />
            ))}
            <div className="poster">
              <PhotoButton photos={[governorBirthday]} index={0} sizes="(max-width: 860px) 70vw, 24vw" className="poster__img poster__img--sm" />
              <p className="poster__caption">The Movement’s birthday tribute, 12 March 2026.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--tinted" aria-labelledby="others-title">
        <div className="container">
          <Split photos={patronPhotos} reverse>
            <SectionHeading kicker="Other patrons" title="Leaders who stand with the Movement" id="others-title" />
            <ul className="mini-list">
              {otherPatrons.map((o) => (
                <li key={o.name}>
                  <h3>{o.name}</h3>
                  <p className="mini-list__role">{o.role}</p>
                  <p>{o.text}</p>
                </li>
              ))}
            </ul>
          </Split>
        </div>
      </section>

      <JoinBand />
    </>
  );
}
