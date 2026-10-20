import type { Metadata } from "next";
import { galleryGroups, heroBackgrounds } from "@/content/site";
import { PageHeader } from "@/components/PageHeader";
import { GalleryGrid } from "@/components/GalleryGrid";
import { JoinBand } from "@/components/Blocks";

export const metadata: Metadata = { title: "Gallery" };

export default function GalleryPage() {
  return (
    <>
      <PageHeader kicker="Gallery" title="The Movement in pictures" intro="Moments from Government House, inaugurations, campuses and communities across Plateau State." image={heroBackgrounds.gallery} />
      <section className="section section--tight">
        <div className="container">
          <GalleryGrid groups={galleryGroups} />
        </div>
      </section>
      <JoinBand />
    </>
  );
}
