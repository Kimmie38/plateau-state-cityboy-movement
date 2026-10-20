import type { Metadata } from "next";
import { heroBackgrounds, news } from "@/content/site";
import { PageHeader } from "@/components/PageHeader";
import { NewsList } from "@/components/NewsList";
import { JoinBand } from "@/components/Blocks";

export const metadata: Metadata = { title: "News & Press" };

export default function NewsPage() {
  return (
    <>
      <PageHeader
        kicker="News & Press"
        title="Updates from the Plateau State Chapter"
        intro="Press releases, notices and stories from the Media, Communications & Public Affairs Directorate."
        image={heroBackgrounds.news}
      />
      <section className="section section--tight">
        <div className="container">
          <NewsList items={news} />
        </div>
      </section>
      <JoinBand />
    </>
  );
}
