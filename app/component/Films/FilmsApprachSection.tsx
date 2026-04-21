import Image from "next/image";
import { FilmsApproach } from "@/app/data/Films/FilmsApproach";

export default function FilmsApproachSection() {
  return (
    <section
      aria-labelledby="approach-heading"
      style={{
        background:
          "linear-gradient(to bottom, var(--color-bg-section-from), var(--color-bg-section-via), var(--color-bg-section-to))",
        color: "var(--color-text-body)",
        paddingTop: "4rem",
        paddingBottom: "4rem",
        paddingLeft: "var(--section-px-sm)",
        paddingRight: "var(--section-px-sm)",
      }}
      className="w-full lg:px-16"
    >
      <div style={{ maxWidth: "var(--content-max-width)" }} className="mx-auto">
        {/* ===== Heading ===== */}
        <div className="text-center mb-14">
          <h2
            id="approach-heading"
            style={{
              fontSize: "var(--text-heading-xl)",
              fontWeight: "var(--font-weight-heading)",
              color: "var(--color-brand-primary)",
            }}
            className="italic mb-4"
          >
            {FilmsApproach.heading}
          </h2>

          <div
            style={{ maxWidth: "var(--body-copy-max-width)" }}
            className="mx-auto"
          >
            {FilmsApproach.description.map((para, index) => (
              <p
                key={index}
                style={{
                  color: "var(--color-text-body)",
                  fontSize: "var(--text-body-base)",
                }}
                className="leading-relaxed mb-4"
              >
                {para}
              </p>
            ))}
          </div>
        </div>

        {/* ===== Cards ===== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FilmsApproach.cards.map((card, index) => (
            <article
              key={index}
              style={{ borderColor: "var(--color-border-image)" }}
              className="service-card bg-white border rounded-xl p-6 text-center hover:shadow-md transition duration-300"
            >
              {/* Icon */}
              <div className="w-14 h-14 relative mx-auto mb-4">
                <Image
                  src={card.icon}
                  alt={card.title}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Title */}
              <h3
                style={{
                  color: "var(--color-text-body)",
                  fontSize: "var(--text-body-base)",
                  fontWeight: "var(--font-weight-heading)",
                }}
                className="mb-2"
              >
                {card.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  color: "var(--color-text-body)",
                  fontSize: "var(--text-body-sm)",
                }}
                className="leading-relaxed"
              >
                {card.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
