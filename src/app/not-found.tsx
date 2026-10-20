import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";

export default function NotFound() {
  return (
    <PageHeader kicker="404" title="This page could not be found" intro="It may have moved. Head back to the homepage.">
      <div className="hero__actions">
        <Link href="/" className="btn btn--yellow">
          Back home
        </Link>
      </div>
    </PageHeader>
  );
}
