"use client";

import { Briefcase, Building2, MessageSquare, Users } from "lucide-react";
import Link from "next/link";
import {
  CONTACT,
  EMPLOYERBRANDING,
  EMPLOYERBRANDSM,
  INTERNALCOMMUNICATION,
  OFFICEBRANDING,
} from "../const/routes.const";

export default function EmployerMegaMenu() {
  return (
    <div
      role="menu"
      aria-label="Employer Brand Menu"
      style={{
        background:
          "linear-gradient(to bottom, var(--color-bg-hero-from), var(--color-bg-hero-via), var(--color-bg-hero-to))",
        color: "var(--color-text-body)",
        borderColor: "var(--color-border-image)",
      }}
      className="absolute left-1/2 -translate-x-1/2 top-full mt-6 w-[720px] border rounded-2xl shadow-xl p-8 grid grid-cols-2 gap-8 z-50"
    >
      {/* ── LEFT SECTION ── */}
      <div
        style={{ borderColor: "var(--color-border-image)" }}
        className="md:pr-6 md:border-r"
      >
        <h3
          style={{
            color: "var(--color-brand-primary)",
            fontSize: "var(--text-heading-lg)",
            fontWeight: "var(--font-weight-heading)",
          }}
          className="mb-3 leading-snug md:text-xl"
        >
          Want to Explore Our Solutions?
        </h3>

        <p
          style={{
            color: "var(--color-text-muted)",
            fontSize: "var(--text-body-sm)",
          }}
          className="leading-relaxed"
        >
          From innovative concepts to complete execution, Vedant Innovision
          delivers solutions that bring your brand vision to life with precision
          and creativity.
        </p>

        <Link
          href={CONTACT}
          style={{
            color: "var(--color-brand-primary)",
            fontSize: "var(--text-body-sm)",
            fontWeight: "var(--font-weight-heading)",
          }}
          className="mt-6 inline-block mega-menu-link"
        >
          Contact Us
        </Link>
      </div>

      {/* ── RIGHT SECTION ── */}
      <div className="space-y-6">
        {/* Corporate Branding */}
        <div className="flex gap-4 items-start">
          <Briefcase
            style={{ color: "var(--color-brand-primary)" }}
            className="w-5 h-5 mt-1 shrink-0"
          />
          <div>
            <h4
              style={{ fontWeight: "var(--font-weight-heading)" }}
              className="text-sm sm:text-base md:text-lg"
            >
              <Link
                href={EMPLOYERBRANDING}
                style={{ color: "var(--color-text-body)" }}
                className="mega-menu-link"
              >
                Corporate Branding
              </Link>
            </h4>
            <p
              style={{
                color: "var(--color-text-muted)",
                fontSize: "var(--text-body-sm)",
              }}
            >
              Enhancing your brand presence through impactful corporate branding
              solutions.
            </p>
          </div>
        </div>

        {/* Industrial & Spatial Solutions */}
        <div className="flex gap-4 items-start">
          <Building2
            style={{ color: "var(--color-brand-primary)" }}
            className="w-5 h-5 mt-1 shrink-0"
          />
          <div>
            <h4
              style={{ fontWeight: "var(--font-weight-heading)" }}
              className="text-sm sm:text-base md:text-lg"
            >
              <Link
                href={OFFICEBRANDING}
                style={{ color: "var(--color-text-body)" }}
                className="mega-menu-link"
              >
                Industrial &amp; Spatial Solutions
              </Link>
            </h4>
            <p
              style={{
                color: "var(--color-text-muted)",
                fontSize: "var(--text-body-sm)",
              }}
            >
              Designing functional and visually strong industrial spaces and
              branding environments.
            </p>
          </div>
        </div>

        {/* Corporate Communication */}
        <div className="flex gap-4 items-start">
          <MessageSquare
            style={{ color: "var(--color-brand-primary)" }}
            className="w-5 h-5 mt-1 shrink-0"
          />
          <div>
            <h4
              style={{ fontWeight: "var(--font-weight-heading)" }}
              className="text-sm sm:text-base md:text-lg"
            >
              <Link
                href={INTERNALCOMMUNICATION}
                style={{ color: "var(--color-text-body)" }}
                className="mega-menu-link"
              >
                Corporate Communication
              </Link>
            </h4>
            <p
              style={{
                color: "var(--color-text-muted)",
                fontSize: "var(--text-body-sm)",
              }}
            >
              Delivering clear and effective communication across all business
              touchpoints.
            </p>
          </div>
        </div>

        {/* Brand Promotion & Outreach */}
        <div className="flex gap-4 items-start">
          <Users
            style={{ color: "var(--color-brand-primary)" }}
            className="w-5 h-5 mt-1 shrink-0"
          />
          <div>
            <h4
              style={{ fontWeight: "var(--font-weight-heading)" }}
              className="text-sm sm:text-base md:text-lg"
            >
              <Link
                href={EMPLOYERBRANDSM}
                style={{ color: "var(--color-text-body)" }}
                className="mega-menu-link"
              >
                Brand Promotion &amp; Outreach
              </Link>
            </h4>
            <p
              style={{
                color: "var(--color-text-muted)",
                fontSize: "var(--text-body-sm)",
              }}
            >
              Showcasing your brand through strategic marketing, campaigns, and
              promotional activities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
