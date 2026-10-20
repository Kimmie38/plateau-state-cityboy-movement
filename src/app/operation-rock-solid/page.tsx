import type { Metadata } from "next";
import { chapter, coordinatorPhotos, heroBackgrounds, operation, photos } from "@/content/site";
import { PageHeader } from "@/components/PageHeader";
import { BadgedPhoto, JoinBand, SectionHeading, Split, Stats, Timeline } from "@/components/Blocks";

export const metadata: Metadata = { title: "Operation Rock Solid" };

export default function OperationPage() {
  return (
    <>
      <PageHeader
        kicker="Our flagship programme"
        title="Operation Rock Solid"
        intro="Plateau State’s blueprint for one million votes for President Bola Ahmed Tinubu in 2027."
        image={heroBackgrounds.operation}
      />

      <section className="section">
        <div className="container ors ors--light">
          <div className="ors__text">
            <SectionHeading kicker="What it is" title="Structure. Organisation. Coordination." />
            <p className="lead">{operation.summary}</p>
            <ul className="ors__lines ors__lines--dark">
              {operation.lines.map((l) => (
                <li key={l}>{l}</li>
              ))}
            </ul>
          </div>
          <div className="target target--light">
            <span className="target__value">{operation.target}</span>
            <span className="target__label">{operation.targetLabel}</span>
          </div>
        </div>
      </section>

      <section className="section section--green" aria-labelledby="levels-title">
        <div className="container">
          <SectionHeading kicker="The structure" title="Every level of the grassroots" id="levels-title" tone="dark" />
          <Stats items={operation.levels} />
        </div>
      </section>

      <section className="section" aria-labelledby="how-title">
        <div className="container">
          <SectionHeading kicker="How it works" title="Four steps to one million" id="how-title" />
          <ol className="steps">
            {operation.howItWorks.map((s, i) => (
              <li key={s.title}>
                <span className="steps__n">{i + 1}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section--tinted" aria-labelledby="road-title">
        <div className="container two-col two-col--top">
          <div>
            <SectionHeading kicker="The road to unveiling" title="From strategy to launch" id="road-title" />
            <Timeline items={operation.milestones} />
          </div>
          <BadgedPhoto photo={photos.apcFlyer} sizes="(max-width: 860px) 90vw, 44vw" />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Split photos={coordinatorPhotos}>
            <SectionHeading kicker="The coordinators" title="The face of the Movement in every community" />
            <p className="lead">
              LGA and Ward Coordinators were inaugurated on 4 December 2025 at Crest Hotel, Jos, in a ceremony chaired by the
              Plateau State APC Chairman, Hon. Rufus Bature.
            </p>
            <p>
              They are the backbone of Operation Rock Solid. Ready to play your part? Sign up at{" "}
              <a href={chapter.signupUrl} target="_blank" rel="noreferrer">
                {chapter.signupLabel}
              </a>
              .
            </p>
          </Split>
        </div>
      </section>

      <JoinBand />
    </>
  );
}
