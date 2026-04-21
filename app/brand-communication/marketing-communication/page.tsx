import BrandSection from "@/app/component/BrandSection";
import Testimonial from "@/app/component/Testimonial";
import { CONTACT } from "@/app/const/routes.const";
import Link from "next/link";
import Image from "next/image";
import PortfolioSection from "@/app/component/PortfolioSection";
import ContactDiv from "@/app/component/ContactDiv";

export default function MarketingCommunication() {
  return (
    <main>
      {/* ── HERO SECTION ── */}
      <section
        style={{
          background:
            "linear-gradient(to bottom, var(--color-bg-hero-from), var(--color-bg-hero-via), var(--color-bg-hero-to))",
          color: "var(--color-text-body)",
          paddingTop: "4rem",
          paddingBottom: "4rem",
          paddingLeft: "var(--section-px-sm)",
          paddingRight: "var(--section-px-sm)",
        }}
        className="w-full lg:px-16"
      >
        <div
          style={{ maxWidth: "var(--content-max-width)" }}
          className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
        >
          {/* ── LEFT: Image ── */}
          <div className="relative flex justify-center md:justify-start">
            <div className="relative z-10 group">
              <Image
                src="/images/billboard.png"
                alt="Marketing Billboard"
                width={580}
                height={420}
                style={{ borderColor: "var(--color-border-image)" }}
                className="rounded-xl border shadow-md transition duration-300 group-hover:scale-[1.02]"
              />
            </div>
          </div>

          {/* ── RIGHT: Content ── */}
          <div style={{ maxWidth: "var(--body-copy-max-width)" }}>
            <h1
              style={{
                color: "var(--color-brand-primary)",
                fontSize: "var(--text-heading-xl)",
                fontWeight: "var(--font-weight-heading)",
              }}
              className="leading-snug mb-5 sm:text-3xl md:text-4xl"
            >
              Build Powerful Brand Communication
            </h1>

            <h2
              style={{
                color: "var(--color-text-body)",
                fontSize: "var(--text-heading-md)",
                fontWeight: "var(--font-weight-heading)",
              }}
              className="mb-5 leading-relaxed sm:text-xl md:text-2xl"
            >
              Drive Impact with Strategic Marketing Communication
            </h2>

            <p
              style={{
                color: "var(--color-text-body)",
                fontSize: "var(--text-body-sm)",
              }}
              className="leading-relaxed mb-4 sm:text-base"
            >
              At Vedant Innovision, we help your brand communicate with clarity,
              consistency, and purpose. It&apos;s not just about what you
              say—it&apos;s about how effectively your message connects with
              your audience.
            </p>

            <p
              style={{
                color: "var(--color-text-body)",
                fontSize: "var(--text-body-sm)",
              }}
              className="leading-relaxed mb-4 sm:text-base"
            >
              We create strategic brand communication that is clear, engaging,
              and aligned with your overall brand identity—ensuring your message
              stands out and leaves a lasting impact.
            </p>

            <p
              style={{
                color: "var(--color-text-body)",
                fontSize: "var(--text-body-sm)",
              }}
              className="leading-relaxed sm:text-base"
            >
              From go-to-market strategies to social media, events, and
              corporate communication, we ensure your brand delivers a
              consistent experience across every touchpoint.
            </p>
          </div>
        </div>
      </section>

      <PortfolioSection />
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
