import BrandSection from "@/app/component/BrandSection";
import ContactDiv from "@/app/component/ContactDiv";
import PortfolioSection from "@/app/component/PortfolioSection";
import Testimonial from "@/app/component/Testimonial";
import { CONTACT } from "@/app/const/routes.const";
import Image from "next/image";
import Link from "next/link";

export default function WebsiteUiUxPage() {
  return (
    <main>
      {/* ── HERO SECTION ── */}
      <section
        style={{
          background:
            "linear-gradient(to bottom, var(--color-bg-hero-from), var(--color-bg-hero-via), var(--color-bg-hero-to))",
          color: "var(--color-text-body)",
          borderBottom: "1px solid var(--color-brand-primary)",
          paddingLeft: "var(--section-px-sm)",
          paddingRight: "var(--section-px-sm)",
        }}
        className="w-full py-12 sm:py-14 md:py-16 lg:py-20 md:px-10 lg:px-16"
      >
        <div
          style={{ maxWidth: "var(--content-max-width)" }}
          className="mx-auto grid items-center gap-10 md:grid-cols-2"
        >
          {/* ── Image ── */}
          <div className="flex justify-center md:justify-start">
            <Image
              src="/uiux.png"
              alt="Website and UI UX design"
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
              Software &amp; Digital Solutions
            </h1>

            <p
              style={{
                color: "var(--color-text-body)",
                fontSize: "var(--text-body-sm)",
              }}
              className="leading-relaxed sm:text-base"
            >
              At Vedant Innovision, we deliver end-to-end software and digital
              solutions designed to streamline operations and drive business
              efficiency. From industry-specific ERP systems to custom-built
              platforms, we create scalable solutions tailored to your
              requirements.
            </p>

            <p
              style={{
                color: "var(--color-text-body)",
                fontSize: "var(--text-body-sm)",
              }}
              className="mt-4 leading-relaxed sm:text-base"
            >
              Our expertise includes Hospital ERP, School ERP, and Learning
              Management Systems (LMS) that simplify management, improve
              workflows, and enhance user experience. We also design and develop
              custom web and mobile applications built for performance,
              usability, and growth.
            </p>

            <p
              style={{
                color: "var(--color-text-body)",
                fontSize: "var(--text-body-sm)",
              }}
              className="mt-4 leading-relaxed sm:text-base"
            >
              We develop solutions compatible across devices—kiosks, tablets,
              desktops, and laptops—ensuring seamless accessibility and
              consistent functionality across all platforms.
            </p>

            <p
              style={{
                color: "var(--color-text-body)",
                fontSize: "var(--text-body-sm)",
              }}
              className="mt-4 leading-relaxed sm:text-base"
            >
              With a focus on reliability, integration, and user-centric design,
              we help businesses adopt digital solutions that are practical,
              efficient, and built to scale.
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
