import type { Metadata } from "next";
import Link from "next/link";
import { chapter, chapterPhotos, heroBackgrounds, mission, news, pillars, slogans, photos } from "@/content/site";
import { PageHeader } from "@/components/PageHeader";
import { BadgedPhoto, Cards, JoinBand, Quote, SectionHeading, Split, Timeline } from "@/components/Blocks";

export const metadata: Metadata = { title: "About the Chapter" };

const structure = [
  { label: "State Directorate", value: "1", text: "State Director and State Working Committee in Jos" },
  { label: "Local Government Areas", value: "17", text: "An LGA coordinator in every local government" },
  { label: "Wards", value: "207", text: "Ward coordinators across Plateau’s LGAs" },
  { label: "Polling units", value: "4,989", text: "Mobilisers at every polling unit" },
];

const units = [
  { title: "State Working Committee", text: "The chapter’s executive, announced 26 February 2026." },
  { title: "LGA & Ward Coordinators", text: "Inaugurated 4 December 2025 at Crest Hotel, Jos." },
  { title: "Student Directorate", text: "Campus coordinators across tertiary institutions." },
  { title: "ICT / Data Office", text: "Digital registration and the ICT Marshals team." },
  { title: "Media & Communications", text: "City Boy Media and the chapter’s public voice." },
  { title: "Inclusion", text: "Non-indigenes, disability and gender & inclusion coordinators." },
];

export default function AboutPage() {
  const milestones = [...news]
    .reverse()
    .filter((n) => n.category === "Chapter")
    .map((n) => ({ date: n.date, title: n.title, text: n.summary }));

  return (
    <>
      <PageHeader kicker="About the Chapter" title="Our Plateau. Our Future." intro={chapter.about} image={heroBackgrounds.about} />

      <section className="section">
        <div className="container">
          <Split photos={chapterPhotos}>
            <SectionHeading kicker="Who we are" title="A frontline support group for Renewed Hope" />
            <p className="lead">{chapter.whoWeAre}</p>
            {mission.map((m) => (
              <p key={m.slice(0, 20)}>{m}</p>
            ))}
          </Split>
        </div>
      </section>

      <section className="section section--tinted" aria-labelledby="values-title">
        <div className="container">
          <SectionHeading kicker="What we do" title="Inform. Engage. Empower." id="values-title" />
          <Cards items={pillars} />
          <div className="spacer" />
          <Quote text="The City Boys Movement is about discovering, empowering, and amplifying the potential of our young people." by="Daser David, State Director" />
        </div>
      </section>

      <section className="section" aria-labelledby="structure-title">
        <div className="container two-col">
          <div>
            <SectionHeading kicker="How we are organised" title="From Jos to every polling unit" id="structure-title" />
            <ol className="pyramid">
              {structure.map((s, i) => (
                <li key={s.label} style={{ ["--w" as string]: `${64 + i * 12}%` }}>
                  <span className="pyramid__value">{s.value}</span>
                  <span className="pyramid__label">{s.label}</span>
                  <span className="pyramid__text">{s.text}</span>
                </li>
              ))}
            </ol>
          </div>
          <div>
            <BadgedPhoto photo={photos.membersGraphic} sizes="(max-width: 860px) 90vw, 40vw" />
          </div>
        </div>
        <div className="container">
          <div className="spacer" />
          <SectionHeading kicker="Units & wings" title="The teams behind the Movement" />
          <Cards items={units} />
        </div>
      </section>

      <section className="section section--tinted" aria-labelledby="journey-title">
        <div className="container two-col two-col--top">
          <div>
            <SectionHeading kicker="Our journey" title="Chapter milestones" id="journey-title" />
            <Timeline items={milestones} />
          </div>
          <div className="slogan-wall">
            <h3>Our slogans</h3>
            <ul>
              {slogans.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
            <p>
              Read the full story in <Link href="/news">News &amp; Press</Link>.
            </p>
          </div>
        </div>
      </section>

      <JoinBand />
    </>
  );
}
