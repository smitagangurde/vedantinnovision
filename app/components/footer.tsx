"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ABOUT,
  BRANDIDENTITY,
  CAREER,
  CONTACT,
  EMPLOYERBRANDING,
  FILMS,
  PRIVACYPOLICY,
  TERMS,
} from "../const/routes.const";
import {
  Home,
  Briefcase,
  Phone,
  InfoIcon,
  Instagram,
  Linkedin,
  Megaphone,
  Film,
  Building2,
  Facebook,
} from "lucide-react";

export default function Footer() {
  return (
    <footer
      style={{
        background:
          "linear-gradient(to bottom, var(--color-bg-hero-from), var(--color-bg-hero-via), var(--color-bg-hero-to))",
        color: "var(--color-text-body)",
        paddingTop: "4rem",
        paddingBottom: "2rem",
      }}
    >
      <div
        style={{ maxWidth: "var(--content-max-width)" }}
        className="mx-auto px-6 grid md:grid-cols-4 gap-10 justify-items-center"
      >
        {/* ── Logo ── */}
        <div className="flex items-start justify-center">
          <Image
            src="/Vedant Innovation Logo.png"
            alt="Vedant Innovision"
            width={170}
            height={60}
          />
        </div>

        {/* ── Company ── */}
        <nav className="text-center md:text-left">
          <h3
            style={{
              color: "var(--color-brand-primary)",
              fontWeight: "var(--font-weight-heading)",
            }}
            className="mb-4 text-sm"
          >
            Company
          </h3>
          <ul className="space-y-2 text-sm">
            {[
              { href: "/", icon: <Home size={16} />, label: "Home" },
              { href: ABOUT, icon: <InfoIcon size={16} />, label: "About" },
              { href: CAREER, icon: <Briefcase size={16} />, label: "Career" },
              { href: CONTACT, icon: <Phone size={16} />, label: "Contact" },
            ].map(({ href, icon, label }) => (
              <li key={label}>
                <Link
                  href={href}
                  style={{ color: "var(--color-text-body)" }}
                  className="nav-link flex items-center justify-center md:justify-start gap-2 transition"
                >
                  {icon}
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* ── Work ── */}
        <nav className="text-center md:text-left">
          <h3
            style={{
              color: "var(--color-brand-primary)",
              fontWeight: "var(--font-weight-heading)",
            }}
            className="mb-4 text-sm"
          >
            Work
          </h3>
          <ul className="space-y-2 text-sm">
            {[
              {
                href: BRANDIDENTITY,
                icon: <Megaphone size={16} />,
                label: "Brand Identity",
              },
              {
                href: EMPLOYERBRANDING,
                icon: <Building2 size={16} />,
                label: "Organizational Branding",
              },
              {
                href: FILMS,
                icon: <Film size={16} />,
                label: "Visual Stories",
              },
            ].map(({ href, icon, label }) => (
              <li key={label}>
                <Link
                  href={href}
                  style={{ color: "var(--color-text-body)" }}
                  className="nav-link flex items-center justify-center md:justify-start gap-2 transition"
                >
                  {icon}
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* ── Social ── */}
        <nav className="text-center md:text-left">
          <h3
            style={{
              color: "var(--color-brand-primary)",
              fontWeight: "var(--font-weight-heading)",
            }}
            className="mb-4 text-sm"
          >
            Social
          </h3>
          <ul className="space-y-2 text-sm">
            {[
              {
                href: "https://www.linkedin.com/company/vedant-innovision/",
                icon: <Linkedin size={16} />,
                label: "LinkedIn",
              },
              {
                href: "https://www.facebook.com/share/1aVpvAeBT7/",
                icon: <Facebook size={16} />,
                label: "Facebook",
              },
              {
                href: "https://www.instagram.com/vedant_innovision",
                icon: <Instagram size={16} />,
                label: "Instagram",
              },
            ].map(({ href, icon, label }) => (
              <li key={label}>
                <Link
                  href={href}
                  target="_blank"
                  style={{ color: "var(--color-text-body)" }}
                  className="nav-link flex items-center justify-center md:justify-start gap-2 transition"
                >
                  {icon}
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* ── Bottom Footer ── */}
      <div
        style={{
          borderTop: "1px solid var(--color-border-image)",
          marginTop: "3rem",
          paddingTop: "1.5rem",
        }}
      >
        <div
          style={{
            maxWidth: "var(--content-max-width)",
            fontSize: "var(--text-body-sm)",
            color: "var(--color-text-body)",
          }}
          className="mx-auto px-6 flex flex-col md:flex-row justify-between items-center"
        >
          <div className="space-x-4">
            <Link
              href={PRIVACYPOLICY}
              style={{ color: "var(--color-text-body)" }}
              className="nav-link transition"
            >
              Privacy Policy
            </Link>
            <span>|</span>
            <Link
              href={TERMS}
              style={{ color: "var(--color-text-body)" }}
              className="nav-link transition"
            >
              Terms and Services
            </Link>
          </div>

          <p className="mt-4 md:mt-0">
            &copy; 2026 Vedant Innovision - All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}