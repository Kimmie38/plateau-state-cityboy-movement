import type { Metadata } from "next";
import Image from "next/image";
import { apc, chapterPhotos, director, heroBackgrounds, photos } from "@/content/site";
import { PageHeader } from "@/components/PageHeader";
import { Cards, JoinBand, Quote, SectionHeading, Split } from "@/components/Blocks";

export const metadata: Metadata = { title: "City Boy Movement & the APC" };

export default function ApcPage() {
  return (
    <>
      <PageHeader
        kicker="City Boy Movement & the APC"
        title="Proudly APC! Proudly City Boy!"
        intro="A support group, not a political party — partners in progress with the All Progressives Congress in Plateau State."
        image={heroBackgrounds.apc}
      />

      <section className="section">
        <div className="container two-col">
          <div>
            <SectionHeading kicker="Our relationship" title={apc.heading} />
            <p className="lead">{apc.text}</p>
            <Quote text={apc.quote} by={`${director.name}, ${director.title}`} />
            <p>{apc.appeal}</p>
          </div>
          <div className="apc-shirts">
            <Image src={photos.apcShirtFront.src} alt={photos.apcShirtFront.alt} width={photos.apcShirtFront.width} height={photos.apcShirtFront.height} sizes="(max-width: 860px) 45vw, 22vw" />
            <Image src={photos.apcShirtBack.src} alt={photos.apcShirtBack.alt} width={photos.apcShirtBack.width} height={photos.apcShirtBack.height} sizes="(max-width: 860px) 45vw, 22vw" />
          </div>
        </div>
      </section>

      <section className="section section--tinted" aria-labelledby="leaders-title">
        <div className="container">
          <SectionHeading kicker="APC leaders connected to the Movement" title="Working together across Plateau" id="leaders-title" />
          <ul className="leaders">
            {apc.leaders.map((l) => (
              <li key={l.name} className="leader-card">
                <span className="leader-card__flag" aria-hidden />
                <h3>{l.name}</h3>
                <p className="leader-card__role">{l.role}</p>
                <p>{l.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--green" aria-labelledby="votes-title">
        <div className="container ors">
          <div className="ors__text">
            <SectionHeading kicker="One million votes from Plateau" title="One goal, one structure" id="votes-title" tone="dark" />
            <p className="muted-on-dark">{apc.votes}</p>
          </div>
          <div className="target">
            <span className="target__value">1,000,000+</span>
            <span className="target__label">votes for President Tinubu in Plateau, 2027</span>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="rh-title">
        <div className="container">
          <Split photos={[photos.car, chapterPhotos[3], photos.registration]} reverse>
            <SectionHeading kicker="As highlighted by the Movement" title="Renewed Hope in Plateau" id="rh-title" />
            <Cards items={apc.renewedHope} columns={2} />
          </Split>
        </div>
      </section>

      <JoinBand />
    </>
  );
}
