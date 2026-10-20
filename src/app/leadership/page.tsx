import type { Metadata } from "next";
import Image from "next/image";
import {
  director,
  directorates,
  heroBackgrounds,
  leadershipPhotos,
  lgaCoordinatorsPost,
  lgas,
  photos,
  stateWorkingCommittee,
} from "@/content/site";
import { PageHeader } from "@/components/PageHeader";
import { PhotoButton } from "@/components/Lightbox";
import { Initials, JoinBand, Mosaic, Quote, SectionHeading } from "@/components/Blocks";

export const metadata: Metadata = { title: "State Leadership" };

export default function LeadershipPage() {
  return (
    <>
      <PageHeader
        kicker="State Leadership"
        title="The people building the Movement in Plateau"
        intro="A State Director, a 15-member State Working Committee, directorates and coordinators in all 17 Local Government Areas."
        image={heroBackgrounds.leadership}
      >
        <nav className="story-nav" aria-label="On this page">
          <ul>
            <li><a href="#director">State Director</a></li>
            <li><a href="#committee">State Working Committee</a></li>
            <li><a href="#directorates">Directorates</a></li>
            <li><a href="#lgas">LGA Coordinators</a></li>
          </ul>
        </nav>
      </PageHeader>

      {/* Director */}
      <section id="director" className="section">
        <div className="container profile">
          <div className="profile__media">
            <Image src={director.photo.src} alt={director.photo.alt} width={director.photo.width} height={director.photo.height} sizes="(max-width: 860px) 80vw, 34vw" />
          </div>
          <div className="profile__text">
            <p className="eyebrow">{director.title}</p>
            <h2>{director.name}</h2>
            <ul className="tags">
              {director.roles.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
            {director.bio.map((b) => (
              <p key={b.slice(0, 20)}>{b}</p>
            ))}
            <Quote text={director.quote} by="Charge to the LGA & Ward Coordinators, 4 December 2025" />
          </div>
        </div>
      </section>

      {/* Committee */}
      <section id="committee" className="section section--tinted" aria-labelledby="swc-title">
        <div className="container">
          <SectionHeading
            kicker="Announced 26 February 2026"
            title="State Working Committee"
            id="swc-title"
            text="The executive that runs the chapter day to day, led by State Coordinator Hon. Peter Zaki."
          />
          <ul className="people">
            {stateWorkingCommittee.map((m) => (
              <li key={m.name} className="person-card">
                <Initials name={m.name} />
                <h3>{m.name}</h3>
                <p>{m.role}</p>
              </li>
            ))}
          </ul>
          <div className="spacer" />
          <div className="two-col">
            <div className="stack-sm">
              <h3 className="h3">Strategy in session</h3>
              <p>
                On 23 July 2026 the State Director presided over strategy meetings with the 17 LGA Coordinators and the State
                Working Committee, aligning the whole structure with Operation Rock Solid.
              </p>
              <Mosaic photos={leadershipPhotos.slice(0, 3)} />
            </div>
            <div className="poster">
              <PhotoButton photos={[photos.swcList]} index={0} sizes="(max-width: 860px) 80vw, 30vw" className="poster__img" />
              <p className="poster__caption">The official press release announcing the committee.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Directorates */}
      <section id="directorates" className="section" aria-labelledby="dir-title">
        <div className="container">
          <SectionHeading kicker="Directorates" title="Teams that keep the Movement moving" id="dir-title" />
          <ul className="cards cards--4">
            {directorates.map((d) => (
              <li key={d.name} className="cards__item">
                <span className="cards__kicker">{d.head || "Directorate"}</span>
                <h3>{d.name}</h3>
                <p>{d.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* LGAs */}
      <section id="lgas" className="section section--tinted" aria-labelledby="lga-title">
        <div className="container">
          <SectionHeading
            kicker="Know your LGA Coordinator"
            title="Coordinators in all 17 Local Government Areas"
            id="lga-title"
            text="Every LGA has a coordinator working with ward coordinators across 207 wards."
          />
          <ul className="lga-grid">
            {lgas.map((l, i) => (
              <li key={l.name} className="lga-card">
                <span className="lga-card__n">{String(i + 1).padStart(2, "0")}</span>
                <h3>{l.name}</h3>
                <p>{l.coordinator || "Coordinator listed on our Facebook page"}</p>
              </li>
            ))}
          </ul>
          <p className="center">
            <a className="btn btn--green" href={lgaCoordinatorsPost} target="_blank" rel="noreferrer">
              See all 17 coordinator cards ↗
            </a>
          </p>
        </div>
      </section>

      <JoinBand />
    </>
  );
}
