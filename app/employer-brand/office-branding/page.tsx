import BrandSection from "@/app/component/BrandSection";
import ContactDiv from "@/app/component/ContactDiv";
import OBFaqsSection from "@/app/component/OfficeBranding/OBFaqsSection";
import OBPortfolioSection from "@/app/component/OfficeBranding/OBPortfolioSection";
import Testimonial from "@/app/component/Testimonial";
import { CONTACT } from "@/app/const/routes.const";
import Link from "next/link";
import Image from "next/image";
import OBAdvantageSection from "@/app/component/OfficeBranding/OBAdvantagesSection";

export default function OfficeBranding() {
  return (
    <main>
      {/* ── HERO SECTION ── */}
      <section
        style={{
          background:
            "linear-gradient(to bottom, var(--color-bg-hero-from), var(--color-bg-hero-via), var(--color-bg-hero-to))",
          color: "var(--color-text-body)",
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
              alt="Industrial and Spatial Branding"
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
              Industrial &amp; Spatial Branding Solutions
            </h1>

            <p
              style={{
                color: "var(--color-text-body)",
                fontSize: "var(--text-body-sm)",
              }}
              className="leading-relaxed sm:text-base"
            >
              At Vedant Innovision, we transform physical spaces into powerful
              brand environments that enhance visibility, communication, and
              experience. From industrial facilities to corporate offices, we
              design and execute branding solutions that bring consistency,
              clarity, and impact to your workspace.
            </p>

            <p
              style={{
                color: "var(--color-text-body)",
                fontSize: "var(--text-body-sm)",
              }}
              className="leading-relaxed sm:text-base"
            >
              We combine strategic thinking with on-ground execution to ensure
              your brand is reflected across every physical touchpoint—creating
              spaces that are not just functional, but also engaging and aligned
              with your identity.
            </p>
          </div>
        </div>
      </section>

      {/* ── QUOTE SECTION ── */}
      <section
        style={{
          background:
            "linear-gradient(to right, var(--color-bg-career-footer-from), var(--color-bg-career-footer-via), var(--color-bg-career-footer-to))",
          color: "var(--color-text-body)",
          paddingLeft: "var(--section-px-sm)",
          paddingRight: "var(--section-px-sm)",
        }}
        className="relative w-full py-14 sm:py-14 md:py-16 lg:py-20 md:px-10 lg:px-16"
      >
        <div
          style={{ maxWidth: "var(--content-max-width)" }}
          className="mx-auto text-center" // unchanged
        >
          <h2
            style={{
              color: "var(--color-brand-primary)", // better contrast
              fontSize: "var(--text-heading-md)",
              fontWeight: "var(--font-weight-heading)",
            }}
            className="italic mb-6 leading-snug sm:text-2xl md:text-3xl lg:text-4xl"
          >
            Why Choose Industrial Branding Solutions?
          </h2>

          <p
            style={{
              color: "var(--color-text-body)",
              fontSize: "var(--text-body-sm)",
              opacity: 0.7,
            }}
            className="leading-relaxed max-w-5xl mx-auto sm:text-base md:text-lg lg:text-xl"
          >
            In today&apos;s competitive environment, your workspace is more than
            just a functional area—it is a direct reflection of your brand. From
            offices to industrial facilities, every physical touchpoint plays a
            key role in shaping perception, improving communication, and
            enhancing employee experience. With the right approach to factory
            &amp; industrial branding, signage &amp; wayfinding systems, and
            safety &amp; compliance visuals, your space becomes a powerful
            communication tool.
          </p>

          <p
            style={{
              color: "var(--color-text-body)",
              fontSize: "var(--text-body-sm)",
              opacity: 0.7,
            }}
            className="leading-relaxed max-w-5xl mx-auto sm:text-base md:text-lg lg:text-xl"
          >
            A well-executed branding strategy ensures consistency, strengthens
            brand recall, and creates a more engaging and productive environment
            for both employees and visitors—supported by seamless on-site
            execution and installation across all touchpoints.
          </p>
        </div>
      </section>

      <OBPortfolioSection />
      <OBAdvantageSection />
      <BrandSection />
      <Testimonial />
      <OBFaqsSection />
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
