import type { Metadata } from "next";
import { heroBackgrounds, nationalMovement, nationalPhotos } from "@/content/site";
import { PageHeader } from "@/components/PageHeader";
import { Initials, JoinBand, SectionHeading, Split, Timeline } from "@/components/Blocks";

export const metadata: Metadata = { title: "The National Movement" };

export default function NationalPage() {
  return (
    <>
      <PageHeader kicker="The National Movement" title="One movement. One vision." intro={nationalMovement.intro} image={heroBackgrounds.national} />

      <section className="section">
        <div className="container">
          <SectionHeading kicker="National leadership" title="Leading the Movement nationwide" />
          <ul className="people people--5">
            {nationalMovement.leaders.map((l) => (
              <li key={l.name} className="person-card">
                <Initials name={l.name} />
                <h3>{l.name}</h3>
                <p>{l.role}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--tinted" aria-labelledby="structure-title">
        <div className="container two-col two-col--top">
          <div>
            <SectionHeading kicker="Structure" title="Where Plateau fits in" id="structure-title" />
            <ol className="levels">
              {nationalMovement.structure.map((s, i) => (
                <li key={s.level}>
                  <span className="levels__n">{i + 1}</span>
                  <div>
                    <h3>{s.level}</h3>
                    <p>{s.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <div>
            <SectionHeading kicker="Recent national moments" title="Across Nigeria" />
            <Timeline items={nationalMovement.events.map((e) => ({ date: e.date, title: e.title, text: e.text }))} />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Split photos={nationalPhotos}>
            <SectionHeading kicker="National Retreat · 13–16 July 2026" title="Together, we move forward. Together, we win." />
            <p className="lead">
              Three days of intense engagement, learning, and fellowship at the National Retreat of the City Boy Movement — a time
              to unite, integrate, and emerge stronger as one movement, bound by a shared vision and common purpose.
            </p>
            <p>
              Plateau’s delegation returned with renewed energy and a stronger commitment to advancing the Renewed Hope Agenda,
              and took the lessons straight into strategy meetings with the 17 LGA Coordinators and the State Working Committee.
            </p>
          </Split>
        </div>
      </section>

      <JoinBand />
    </>
  );
}
