import Image from "next/image";

/** The official City Boy Movement logo, with the Plateau chapter label. */
export function Logo({ tone = "dark", showLabel = true }: { tone?: "dark" | "light"; showLabel?: boolean }) {
  return (
    <span className={`logo logo--${tone}`}>
      <span className="logo__badge">
        <Image
          src={tone === "light" ? "/brand/cbm-logo-white.png" : "/brand/cbm-logo-dark.png"}
          alt="City Boy Movement"
          width={420}
          height={417}
          sizes="56px"
          priority
          className="logo__img"
        />
      </span>
      {showLabel && (
        <span className="logo__label">
          <span className="logo__state">Plateau State</span>
          <span className="logo__chapter">Chapter</span>
        </span>
      )}
    </span>
  );
}
