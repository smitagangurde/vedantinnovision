"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  ABOUT,
  BLOG,
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
  FileText,
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
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!captchaToken) {
      alert("Please verify that you are not a robot.");
      return;
    }
    alert("Form submitted successfully!");
  };

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
        className="mx-auto px-6 grid md:grid-cols-5 gap-10"
      >
        {/* ── Logo ── */}
        <div>
          <Image
            src="/Vedant Innovation Logo.png"
            alt="Vedant Innovision"
            width={170}
            height={60}
          />
        </div>

        {/* ── Company ── */}
        <nav>
          <h3
            style={{
              color: "var(--color-brand-primary)",
              fontWeight: "var(--font-weight-heading)",
            }}
            className="mb-4"
          >
            Company
          </h3>
          <ul className="space-y-2">
            {[
              { href: "/", icon: <Home size={16} />, label: "Home" },
              { href: ABOUT, icon: <InfoIcon size={16} />, label: "About" },
              // { href: BLOG, icon: <FileText size={16} />, label: "Blog" }, 
              { href: CAREER, icon: <Briefcase size={16} />, label: "Career" },
              { href: CONTACT, icon: <Phone size={16} />, label: "Contact" },
            ].map(({ href, icon, label }) => (
              <li key={label}>
                <Link
                  href={href}
                  style={{ color: "var(--color-text-body)" }}
                  className="nav-link flex items-center gap-2 transition"
                >
                  {icon}
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* ── Work ── */}
        <nav>
          <h3
            style={{
              color: "var(--color-brand-primary)",
              fontWeight: "var(--font-weight-heading)",
            }}
            className="mb-4"
          >
            Work
          </h3>
          <ul className="space-y-2">
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
                  className="nav-link flex items-center gap-2 transition"
                >
                  {icon}
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* ── Social ── */}
        <nav>
          <h3
            style={{
              color: "var(--color-brand-primary)",
              fontWeight: "var(--font-weight-heading)",
            }}
            className="mb-4"
          >
            Social
          </h3>
          <ul className="space-y-2">
            {[
              {
                href: "https://www.linkedin.com/in/vedant-innovision-912ba2324",
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
                  className="nav-link flex items-center gap-2 transition"
                >
                  {icon}
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* ── Enquiry Form ── */}
        <div>
          <h3
            style={{
              color: "var(--color-brand-primary)",
              fontWeight: "var(--font-weight-heading)",
            }}
            className="mb-4"
          >
            Enquiry
          </h3>

          <form className="space-y-3" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Name"
              required
              style={{
                color: "var(--color-text-body)",
                borderColor: "var(--color-border-image)",
                fontSize: "var(--text-body-sm)",
              }}
              className="footer-input w-full bg-white px-3 py-2 rounded focus:outline-none"
            />

            <input
              type="email"
              placeholder="Email Id"
              required
              style={{
                color: "var(--color-text-body)",
                borderColor: "var(--color-border-image)",
                fontSize: "var(--text-body-sm)",
              }}
              className="footer-input w-full bg-white px-3 py-2 rounded focus:outline-none"
            />

            <input
              type="tel"
              placeholder="Mobile No."
              required
              style={{
                color: "var(--color-text-body)",
                borderColor: "var(--color-border-image)",
                fontSize: "var(--text-body-sm)",
              }}
              className="footer-input w-full bg-white px-3 py-2 rounded focus:outline-none"
            />

            <textarea
              placeholder="Message"
              required
              style={{
                color: "var(--color-text-body)",
                borderColor: "var(--color-border-image)",
                fontSize: "var(--text-body-sm)",
              }}
              className="footer-input w-full bg-white px-3 py-2 rounded focus:outline-none"
            />

            <button
              type="submit"
              style={{
                background:
                  "linear-gradient(to right, var(--color-cta-from), var(--color-cta-to))",
                color: "var(--color-cta-text)",
                fontSize: "var(--text-btn)",
                fontWeight: "var(--font-weight-btn)",
              }}
              className="px-6 py-2 rounded hover:opacity-90 transition"
            >
              SUBMIT →
            </button>
          </form>
        </div>
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
          className="mx-auto px-6 flex flex-col md:flex-row justify-between"
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
