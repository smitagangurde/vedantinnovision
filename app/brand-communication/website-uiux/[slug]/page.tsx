import { Portfolio } from "@/app/data/Portfolio";
import { notFound } from "next/navigation";
import Link from "next/link";
import ContactDiv from "@/app/component/ContactDiv";
import { CONTACT } from "@/app/const/routes.const";
import DetailCarousel from "@/app/component/DetilaCarousel";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return Portfolio.map((item) => ({ slug: item.slug }));
}

export default async function PortfolioDetailPage({ params }: Props) {
  const { slug } = await params;
  const item = Portfolio.find((p) => p.slug === slug);
  if (!item) notFound();

  return (
    <main>
      <section
        style={{
          background:
            "linear-gradient(to bottom, var(--color-bg-hero-from), var(--color-bg-hero-via), var(--color-bg-hero-to))",
          paddingLeft: "var(--section-px-sm)",
          paddingRight: "var(--section-px-sm)",
        }}
        className="w-full py-12 sm:py-14 md:py-16 lg:py-20 md:px-10 lg:px-16"
      >
        <div
          style={{ maxWidth: "var(--content-max-width)" }}
          className="mx-auto grid items-center gap-10 md:grid-cols-2"
        >
          {/* ── Carousel (client component) ── */}
          <div className="flex justify-center">
            <DetailCarousel images={item.images} alt={item.title} />
          </div>

          {/* ── Content ── */}
          <div style={{ maxWidth: "var(--body-copy-max-width)" }}>
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    background: "var(--color-brand-primary)",
                    color: "var(--color-cpa-primary-text)",
                  }}
                  className="text-xs font-semibold px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Title */}
            <h1
              style={{
                color: "var(--color-brand-primary)",
                fontSize: "var(--text-heading-xl)",
                fontWeight: "var(--font-weight-heading)",
              }}
              className="mb-4 leading-snug sm:text-3xl md:text-4xl"
            >
              {item.title}
            </h1>

            {/* Description */}
            <ul className="space-y-2 mt-1">
              {(Array.isArray(item.description)
                ? item.description
                : [item.description]
              ).map((point, i) => (
                <li
                  key={i}
                  style={{
                    color: "var(--color-text-body)",
                    fontSize: "var(--text-body-sm)",
                  }}
                  className="flex items-start gap-2 leading-relaxed sm:text-base"
                >
                  <span
                    style={{ color: "var(--color-brand-primary)" }}
                    className="mt-1 text-xs"
                  >
                    ●
                  </span>
                  {point}
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="flex items-center gap-4 mt-8">
              {item.url && (
                <Link
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    border: "1px solid var(--color-brand-primary)",
                    color: "var(--color-brand-primary)",
                  }}
                  className="px-6 py-3 rounded-md font-semibold hover:opacity-80 transition"
                >
                  View Live Project ↗
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>

      <ContactDiv />

      {/* Fixed Contact Button */}
      <div className="fixed right-0 top-2/4 -translate-y-1/2 z-50">
        <Link
          href={CONTACT}
          style={{
            background:
              "linear-gradient(to bottom, var(--color-contact-btn-from), var(--color-contact-btn-to))",
            color: "var(--color-contact-btn-text)",
            fontSize: "var(--text-contact-btn-base)",
            letterSpacing: "var(--tracking-contact-btn)",
          }}
          className="font-semibold md:text-sm px-2 py-3 rounded-l-md shadow-md hover:opacity-90 transition writing-mode-vertical"
        >
          CONTACT
        </Link>
      </div>
    </main>
  );
}
