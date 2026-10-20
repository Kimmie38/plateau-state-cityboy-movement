import type { Metadata } from "next";
import { grassrootsPhotos, heroBackgrounds, news, patronPhotos } from "@/content/site";
import { PageHeader } from "@/components/PageHeader";
import { JoinBand, NewsCard, SectionHeading, Split } from "@/components/Blocks";

export const metadata: Metadata = { title: "Grassroots" };

export default function GrassrootsPage() {
  const items = news.filter((n) => n.category === "Grassroots" || n.category === "Patrons");
  return (
    <>
      <PageHeader
        kicker="Grassroots"
        title="From community to community"
        intro="Membership drives, partnerships and LGA chapters taking the Movement to every corner of Plateau State."
        image={heroBackgrounds.grassroots}
      />

      <section className="section">
        <div className="container">
          <Split photos={grassrootsPhotos}>
            <SectionHeading kicker="Partners" title="Building strategic partnerships" />
            <p className="lead">
              In October 2026 the Association of Automobile Engineers, Plateau State — with members across all 17 LGAs — pledged
              to partner with the Movement to mobilise for President Tinubu’s re-election.
            </p>
            <p>
              Across Jos North, the ICT/Data Office and ICT Marshals are taking registration door to door, led on the ground by
              Assistant Non-Indigenes Coordinator Engr. Segun Emmanuel.
            </p>
          </Split>
          <div className="spacer" />
          <Split photos={patronPhotos} reverse>
            <SectionHeading kicker="LGA chapters" title="Local patrons, local strength" />
            <p className="lead">
              LGA chapters are backed by local patrons — in Kanam, Hon. Chief Ephraim Usman Gaar, who donated a vehicle to the
              chapter; in Jos North, the LGA Chairman.
            </p>
          </Split>
        </div>
      </section>

      <section className="section section--tinted" aria-labelledby="gr-news">
        <div className="container">
          <SectionHeading kicker="Updates" title="Grassroots news" id="gr-news" />
          <div className="news-grid">
            {items.map((n) => (
              <NewsCard key={n.slug} item={n} />
            ))}
          </div>
        </div>
      </section>

      <JoinBand />
    </>
  );
}
