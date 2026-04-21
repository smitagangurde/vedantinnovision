import BrandSection from "@/app/component/BrandSection";
import ContactDiv from "@/app/component/ContactDiv";
import EBSMPortfolioSection from "@/app/component/EBSocialMedia/EBSMPortfolioSection";
import ESBMRecruitmentSection from "@/app/component/EBSocialMedia/ESBMRecruitmentSection";
import SMFaqSection from "@/app/component/SocialMedia/SMFaqSection";
import Testimonial from "@/app/component/Testimonial";
import { CONTACT } from "@/app/const/routes.const";
import Image from "next/image";
import Link from "next/link";

export default function EmployerBrandSocialMedia() {
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
              alt="Brand Promotion and Outreach"
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
              Brand Promotion &amp; Outreach Services
            </h1>

            <p
              style={{
                color: "var(--color-text-body)",
                fontSize: "var(--text-body-sm)",
              }}
              className="leading-relaxed sm:text-base"
            >
              At Vedant Innovision, we help businesses amplify their brand
              presence through strategic promotion and consistent outreach. Our
              approach focuses on building visibility, strengthening brand
              perception, and creating meaningful engagement across digital
              platforms.
            </p>

            <p
              style={{
                color: "var(--color-text-body)",
                fontSize: "var(--text-body-sm)",
              }}
              className="leading-relaxed sm:text-base"
            >
              We combine content, communication, and platform strategy to ensure
              your brand reaches the right audience with clarity and
              impact—driving awareness, trust, and long-term growth.
            </p>
          </div>
        </div>
      </section>

      <EBSMPortfolioSection />
      <ESBMRecruitmentSection />
      <BrandSection />
      <Testimonial />
      <SMFaqSection />
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
