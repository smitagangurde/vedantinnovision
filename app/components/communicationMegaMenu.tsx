"use client";

import { PenTool, Megaphone, Monitor, MessageCircle } from "lucide-react";
import Link from "next/link";
import {
  BRANDIDENTITY,
  CONTACT,
  MARKETINGCOMMUNICATION,
  SOCIALMEDIA,
  WEBSITEUIUX,
} from "../const/routes.const";

export default function CommunicationMegaMenu() {
  return (
    <div
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
        className="pr-6 border-r"
      >
        <h3
          style={{
            color: "var(--color-brand-primary)",
            fontSize: "var(--text-heading-lg)",
            fontWeight: "var(--font-weight-heading)",
          }}
          className="mb-3 md:text-xl"
        >
          Our Portfolio - <br /> Where innovation meets execution!
        </h3>

        <p
          style={{
            color: "var(--color-text-muted)",
            fontSize: "var(--text-body-sm)",
          }}
          className="leading-relaxed"
        >
          At Vedant Innovision, we turn ideas into impactful brand experiences.
          Our solutions are crafted to enhance visibility, strengthen brand
          presence, and deliver measurable results across every touchpoint.
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
        {/* Brand Identity */}
        <div className="flex gap-4 items-start">
          <PenTool
            style={{ color: "var(--color-brand-primary)" }}
            className="w-5 h-5 mt-1 shrink-0"
          />
          <div>
            <h4
              style={{ fontWeight: "var(--font-weight-heading)" }}
              className="text-sm sm:text-base md:text-lg"
            >
              <Link
                href={BRANDIDENTITY}
                style={{ color: "var(--color-text-body)" }}
                className="mega-menu-link"
              >
                Brand Identity
              </Link>
            </h4>
            <p
              style={{
                color: "var(--color-text-muted)",
                fontSize: "var(--text-body-sm)",
              }}
            >
              Creating distinctive identities that define and elevate your
              brand.
            </p>
          </div>
        </div>

        {/* Marketing Communication */}
        <div className="flex gap-4 items-start">
          <Megaphone
            style={{ color: "var(--color-brand-primary)" }}
            className="w-5 h-5 mt-1 shrink-0"
          />
          <div>
            <h4
              style={{ fontWeight: "var(--font-weight-heading)" }}
              className="text-sm sm:text-base md:text-lg"
            >
              <Link
                href={MARKETINGCOMMUNICATION}
                style={{ color: "var(--color-text-body)" }}
                className="mega-menu-link"
              >
                Marketing Communication
              </Link>
            </h4>
            <p
              style={{
                color: "var(--color-text-muted)",
                fontSize: "var(--text-body-sm)",
              }}
            >
              Strategic communication that drives engagement and builds strong
              connections.
            </p>
          </div>
        </div>

        {/* IT & Digital Solutions */}
        <div className="flex gap-4 items-start">
          <Monitor
            style={{ color: "var(--color-brand-primary)" }}
            className="w-5 h-5 mt-1 shrink-0"
          />
          <div>
            <h4
              style={{ fontWeight: "var(--font-weight-heading)" }}
              className="text-sm sm:text-base md:text-lg"
            >
              <Link
                href={WEBSITEUIUX}
                style={{ color: "var(--color-text-body)" }}
                className="mega-menu-link"
              >
                IT &amp; Digital Solutions
              </Link>
            </h4>
            <p
              style={{
                color: "var(--color-text-muted)",
                fontSize: "var(--text-body-sm)",
              }}
            >
              Building scalable websites, applications, and digital systems with
              seamless user experience.
            </p>
          </div>
        </div>

        {/* Social Media Management */}
        <div className="flex gap-4 items-start">
          <MessageCircle
            style={{ color: "var(--color-brand-primary)" }}
            className="w-5 h-5 mt-1 shrink-0"
          />
          <div>
            <h4
              style={{ fontWeight: "var(--font-weight-heading)" }}
              className="text-sm sm:text-base md:text-lg"
            >
              <Link
                href={SOCIALMEDIA}
                style={{ color: "var(--color-text-body)" }}
                className="mega-menu-link"
              >
                Social Media Management &amp; Marketing
              </Link>
            </h4>
            <p
              style={{
                color: "var(--color-text-muted)",
                fontSize: "var(--text-body-sm)",
              }}
            >
              Strengthening your digital presence with creative and
              performance-driven strategies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
