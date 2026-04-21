import BrandSection from "@/app/component/BrandSection";
import ContactDiv from "@/app/component/ContactDiv";
import ICPortfolioSection from "@/app/component/InternalCommunication/ICPortfolioSection";
import Testimonial from "@/app/component/Testimonial";
import { CONTACT } from "@/app/const/routes.const";
import Image from "next/image";
import Link from "next/link";

export default function InternalCommunication() {
  return (
    <main>
      {/* ── HERO SECTION ── */}
      <section
        style={{
          background:
            "linear-gradient(to bottom, var(--color-bg-hero-from), var(--color-bg-hero-via), var(--color-bg-hero-to))",
          color: "var(--color-text-body)",
          borderBottom: "1px solid var(--color-brand-primary)",
          paddingTop: "2rem",
          paddingBottom: "2.5rem",
        }}
        className="w-full md:py-10"
      >
        <div
          style={{ maxWidth: "var(--content-max-width)" }}
          className="mx-auto grid items-center gap-10 px-4 sm:px-6 md:px-10 md:grid-cols-2"
        >
          {/* ── Image ── */}
          <div className="flex justify-center md:justify-start">
            <Image
              src="/uiux.png"
              alt="Corporate Communication Solutions"
              width={900}
              height={650}
              className="h-auto w-full max-w-[650px] object-contain opacity-90"
              priority
            />
          </div>

          {/* ── Content ── */}
          <div style={{ maxWidth: "var(--body-copy-max-width)" }}>
            <h1
              style={{
                color: "var(--color-brand-primary)",
                fontSize: "var(--text-heading-xl)",
                fontWeight: "var(--font-weight-heading)",
              }}
              className="mb-4 leading-snug sm:text-3xl md:text-4xl"
            >
              Corporate Communication Solutions
            </h1>

            <p
              style={{
                color: "var(--color-text-body)",
                fontSize: "var(--text-body-sm)",
              }}
              className="leading-relaxed sm:text-base"
            >
              Effective communication is at the core of every successful
              organization. At Vedant Innovision, we help businesses streamline
              and strengthen their corporate communication—ensuring clarity,
              consistency, and alignment across all touchpoints.
            </p>

            <p
              style={{
                color: "var(--color-text-body)",
                fontSize: "var(--text-body-sm)",
              }}
              className="mt-4 leading-relaxed sm:text-base"
            >
              We transform complex information into clear, engaging, and
              structured communication that supports your brand, improves
              internal alignment, and enhances overall organizational
              efficiency.
            </p>

            <p
              style={{
                color: "var(--color-text-body)",
                fontSize: "var(--text-body-sm)",
              }}
              className="mt-4 leading-relaxed sm:text-base"
            >
              From internal communication systems to external brand messaging,
              we ensure your communication reflects your values, connects with
              your audience, and drives better understanding across teams and
              stakeholders.
            </p>
          </div>
        </div>
      </section>

      <ICPortfolioSection />
      <BrandSection />
      <Testimonial />
      <ContactDiv />

      {/* ── FIXED CONTACT BUTTON ── */}
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
