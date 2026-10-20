import type { Metadata } from "next";
import { chapter, faqs, heroBackgrounds, joinSteps, photos } from "@/content/site";
import { PageHeader } from "@/components/PageHeader";
import { BadgedPhoto, SectionHeading } from "@/components/Blocks";
import { PhotoButton } from "@/components/Lightbox";

export const metadata: Metadata = { title: "Join the Movement" };

export default function JoinPage() {
  return (
    <>
      <PageHeader kicker="Join the Movement" title="Be counted. Our Plateau. Our Future." intro="Membership is free and open to every Nigerian who shares our vision for a stronger, more prosperous nation." image={heroBackgrounds.join}>
        <div className="hero__actions">
          <a className="btn btn--yellow" href={chapter.signupUrl} target="_blank" rel="noreferrer">
            Sign up at {chapter.signupLabel}
          </a>
          <a className="btn btn--outline-light" href={chapter.supportGroupsUrl} target="_blank" rel="noreferrer">
            Register a support group
          </a>
        </div>
      </PageHeader>

      <section className="section">
        <div className="container two-col">
          <div>
            <SectionHeading kicker="How to join" title="Four simple steps" />
            <ol className="steps steps--stacked">
              {joinSteps.map((s, i) => (
                <li key={s.title}>
                  <span className="steps__n">{i + 1}</span>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </li>
              ))}
            </ol>
          </div>
          <BadgedPhoto photo={photos.membersGraphic} sizes="(max-width: 860px) 90vw, 42vw" />
        </div>
      </section>

      <section className="section section--tinted" aria-labelledby="links-title">
        <div className="container">
          <SectionHeading kicker="Official links" title="Only register through these links" id="links-title" />
          <ul className="link-cards">
            <li>
              <span className="link-cards__label">Members</span>
              <h3>{chapter.signupLabel}</h3>
              <p>The Movement’s official national sign-up. Free.</p>
              <a className="btn btn--green" href={chapter.signupUrl} target="_blank" rel="noreferrer">Sign up</a>
            </li>
            <li>
              <span className="link-cards__label">Support groups</span>
              <h3>{chapter.supportGroupsLabel}</h3>
              <p>For Tinubu support groups in Plateau State to register with the Movement.</p>
              <a className="btn btn--green" href={chapter.supportGroupsUrl} target="_blank" rel="noreferrer">Register a group</a>
            </li>
            <li>
              <span className="link-cards__label">Updates</span>
              <h3>City Boy Movement Plateau State</h3>
              <p>The chapter’s official Facebook page for news and LGA coordinator details.</p>
              <a className="btn btn--green" href={chapter.facebook} target="_blank" rel="noreferrer">Follow on Facebook</a>
            </li>
          </ul>
          <div className="notice" role="note">
            <strong>Stay safe:</strong> membership is free. Headquarters may call to verify members — you will not be asked to
            provide anything. Never pay anyone or share personal details through unofficial links.
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="faq-title">
        <div className="container two-col two-col--top">
          <div className="faq">
            <SectionHeading kicker="Questions" title="Frequently asked" id="faq-title" />
            {faqs.map((f) => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
          <div className="poster">
            <PhotoButton photos={[photos.supportFlyer]} index={0} sizes="(max-width: 860px) 80vw, 36vw" className="poster__img" />
            <p className="poster__caption">Calling on all Tinubu support groups in Plateau State — scan the QR code or visit {chapter.supportGroupsLabel}.</p>
          </div>
        </div>
      </section>
    </>
  );
}
