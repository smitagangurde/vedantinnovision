"use client";
import { EmployerBrandingGrid } from "@/app/data/EmployerBranding";
import EmployerBrandingCard from "@/app/component/EmployerBranding";
import EmployerBrandingStats from "@/app/component/EmployerBrandingStats";
import { EmployerBrandingStat } from "@/app/data/EmployerBrandingStat";
import { brands } from "@/app/data/brands";
import BrandGrid from "@/app/component/BrandGrid";
import Image from "next/image";
import { EmployerEVP } from "@/app/data/EmployerEVP";
import Testimonial from "@/app/component/Testimonial";
import BrandSection from "@/app/component/BrandSection";
import ContactDiv from "@/app/component/ContactDiv";
import Link from "next/link";
import { CONTACT } from "@/app/const/routes.const";

export default function ServicesSection() {
  return (
    <main>
      {/* ── HERO SECTION ── */}
      <section
        style={{
          background:
            "linear-gradient(to bottom, var(--color-bg-hero-from), var(--color-bg-hero-via), var(--color-bg-hero-to))",
          color: "var(--color-text-body)",
          paddingTop: "3.5rem",
          paddingBottom: "3.5rem",
        }}
        className="w-full lg:py-20"
      >
        <div
          style={{ maxWidth: "var(--content-max-width)" }}
          className="mx-auto px-4 sm:px-6 md:px-10 lg:px-16"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* ── LEFT SIDE ── */}
            <div
              style={{
                backgroundColor: "#f3e8ff",
                borderColor: "var(--color-border-image)",
              }}
              className="w-full max-w-md h-[320px] md:h-[420px] relative rounded-xl overflow-hidden border mx-auto md:mx-0 shadow-sm"
            >
              <div className="absolute inset-0 bg-purple-300 blur-2xl opacity-20" />
              <Image
                src="/hero/laptop.png"
                alt="Employer branding digital experience"
                fill
                priority
                className="object-contain p-6"
              />
            </div>

            {/* ── RIGHT SIDE ── */}
            <div style={{ maxWidth: "var(--body-copy-max-width)" }}>
              <h1
                style={{
                  color: "var(--color-brand-primary)",
                  fontSize: "var(--text-heading-xl)",
                  fontWeight: "var(--font-weight-heading)",
                }}
                className="mb-4 leading-snug sm:text-2xl md:text-3xl lg:text-4xl"
              >
                Corporate Branding Solutions
              </h1>

              <h2
                style={{
                  color: "var(--color-cta-from)",
                  fontSize: "var(--text-heading-md)",
                  fontWeight: "var(--font-weight-heading)",
                }}
                className="mb-4 sm:text-lg md:text-xl"
              >
                Build a Strong, Consistent Corporate Identity
              </h2>

              <p
                style={{
                  color: "var(--color-text-body)",
                  fontSize: "var(--text-body-sm)",
                }}
                className="leading-relaxed mb-4 sm:text-base md:text-lg"
              >
                At Vedant Innovision, we help businesses create a strong
                corporate brand that reflects their vision, values, and
                professionalism. A well-defined corporate identity ensures
                consistency across communication, builds credibility, and
                strengthens your market presence.
              </p>

              <p
                style={{
                  color: "var(--color-text-body)",
                  fontSize: "var(--text-body-sm)",
                }}
                className="leading-relaxed sm:text-base md:text-lg"
              >
                We focus on aligning your brand strategy, visual identity, and
                communication to create a cohesive and impactful corporate
                image-both internally and externally.
              </p>
            </div>
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
          className="mx-auto text-center" // ✅ unchanged
        >
          <h2
            style={{
              color: "var(--color-brand-primary)", // optional but recommended for contrast
              fontSize: "var(--text-heading-md)",
              fontWeight: "var(--font-weight-heading)",
            }}
            className="italic mb-6 leading-snug sm:text-2xl md:text-3xl lg:text-4xl"
          >
            We collaborate with you to build a unified corporate brand across
            all touchpoints—combining strategic thinking, structured design
            systems, and consistent communication to enhance brand perception
            and business growth.
          </h2>

          <p
            style={{
              color: "var(--color-text-body)",
              fontSize: "var(--text-body-sm)",
              opacity: 0.7,
            }}
            className="leading-relaxed max-w-5xl mx-auto sm:text-base md:text-lg lg:text-xl"
          >
            From brand positioning and visual identity to corporate
            communication and internal branding, we ensure your organization
            presents a clear, professional, and trusted image in the market.
          </p>

          <p
            style={{
              color: "var(--color-text-body)",
              fontSize: "var(--text-body-sm)",
              opacity: 0.7,
            }}
            className="leading-relaxed max-w-5xl mx-auto sm:text-base md:text-lg lg:text-xl"
          >
            A strong corporate brand builds trust, improves recognition, and
            creates a consistent experience for clients, employees, and
            stakeholders—helping your business stand out and grow with
            confidence.
          </p>
        </div>
      </section>

      {/* ── MASONRY SECTION ── */}
      <section
        style={{
          background:
            "linear-gradient(to bottom, var(--color-bg-hero-from), var(--color-bg-hero-via), var(--color-bg-hero-to))",
          color: "var(--color-text-body)",
          paddingTop: "4rem",
          paddingBottom: "4rem",
        }}
        className="w-full relative"
      >
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2
            style={{
              color: "var(--color-brand-primary)",
              fontSize: "var(--text-heading-xl)",
              fontWeight: "var(--font-weight-heading)",
            }}
            className="leading-snug max-w-4xl mx-auto md:text-3xl"
          >
            Build a Strong Corporate Brand Foundation
          </h2>

          <p
            style={{
              color: "var(--color-text-body)",
              fontSize: "var(--text-body-sm)",
            }}
            className="mt-4 max-w-4xl mx-auto leading-relaxed sm:text-base"
          >
            At Vedant Innovision, we believe a strong brand is built on clarity,
            consistency, and purpose. Your brand is more than just
            communication—it reflects your organization&apos;s values, culture,
            and credibility in the market.
          </p>

          <p
            style={{
              color: "var(--color-text-body)",
              fontSize: "var(--text-body-sm)",
            }}
            className="mt-4 max-w-4xl mx-auto leading-relaxed sm:text-base"
          >
            We help you define and strengthen your brand foundation through
            strategic thinking, structured design, and consistent
            communication—ensuring your business attracts the right audience,
            builds trust, and sustains long-term growth.
          </p>

          {/* ── MASONRY GRID ── */}
          <div className="mt-14 columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8">
            {EmployerEVP.map((item) => (
              <div key={item.id} className="break-inside-avoid group">
                <div
                  style={{ borderColor: "var(--color-border-image)" }}
                  className="relative overflow-hidden rounded-md border bg-white shadow-sm"
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute bottom-0 left-0 w-full bg-black/70 px-4 py-2">
                    <p className="text-sm italic text-white">{item.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GRID SECTION ── */}
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
          className="mx-auto"
        >
          <h2
            style={{
              color: "var(--color-brand-primary)",
              fontSize: "var(--text-heading-xl)",
              fontWeight: "var(--font-weight-heading)",
            }}
            className="mb-4 sm:text-3xl md:text-4xl"
          >
            Building Strong Corporate Brands &amp; Workplace Experiences
          </h2>

          <p
            style={{
              color: "var(--color-text-body)",
              fontSize: "var(--text-body-sm)",
            }}
            className="mb-12 leading-relaxed sm:text-base"
          >
            At Vedant Innovision, we help organizations strengthen their
            corporate brand by aligning culture, communication, and design. Our
            approach focuses on creating a consistent and engaging brand
            experience across all touchpoints—internally and externally.
          </p>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {EmployerBrandingGrid.map((EmployerBranding, index) => (
              <EmployerBrandingCard key={index} {...EmployerBranding} />
            ))}
          </div>
        </div>
      </section>

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
