import type { Metadata } from "next";
import { heroBackgrounds, news, studentPhotos, students } from "@/content/site";
import { PageHeader } from "@/components/PageHeader";
import { Cards, JoinBand, NewsCard, Quote, SectionHeading, Split } from "@/components/Blocks";

export const metadata: Metadata = { title: "Student Wing" };

export default function StudentsPage() {
  const items = news.filter((n) => n.category === "Students");
  return (
    <>
      <PageHeader kicker="Student Wing" title="The students are ready." intro={students.intro} image={heroBackgrounds.students} />

      <section className="section">
        <div className="container">
          <Split photos={studentPhotos}>
            <SectionHeading kicker="Student Directorate" title="Organised. Engaged. Ready." />
            <ul className="ors__lines ors__lines--dark">
              {students.lines.map((l) => (
                <li key={l}>{l}</li>
              ))}
            </ul>
            <p>
              Led by Director of Student Affairs Comrade Nanzing Nanla, with Ms. Chloe Selzing as Coordinator, Gender &amp;
              Inclusion, the directorate has inaugurated campus coordinators across Plateau’s tertiary institutions.
            </p>
            <Quote text={students.quote} by="Student Directorate, August 2026" />
          </Split>
        </div>
      </section>

      <section className="section section--tinted" aria-labelledby="focus-title">
        <div className="container">
          <SectionHeading kicker="Focus" title="What the Student Wing works on" id="focus-title" />
          <Cards items={students.focus} columns={4} />
        </div>
      </section>

      <section className="section" aria-labelledby="st-news">
        <div className="container">
          <SectionHeading kicker="Updates" title="Student Wing news" id="st-news" />
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
