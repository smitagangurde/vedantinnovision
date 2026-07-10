"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

import CommunicationMegaMenu from "./communicationMegaMenu";
import EmployerMegaMenu from "./employerMegaMenu";

import { BRANDCONSULTING, CONTACT, FILMS, HOME, WEBSITEUIUX } from "../const/routes.const";

export default function Header() {
  const [open, setOpen] = useState(false); // mobile drawer open/close
  const [activeMenu, setActiveMenu] = useState<string | null>(null); // desktop hover menu
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null); // mobile accordion
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (menu: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveMenu(menu);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 200);
  };

  const toggleMobileSection = (menu: string) => {
    setMobileExpanded((prev) => (prev === menu ? null : menu));
  };

  const closeMobileDrawer = () => {
    setOpen(false);
    setMobileExpanded(null);
  };

  return (
    <header
      style={{
        background:
          "linear-gradient(to bottom, var(--color-bg-hero-from), var(--color-bg-hero-via), var(--color-bg-hero-to))",
        borderBottom: "1px solid var(--color-border-image)",
        color: "var(--color-text-body)",
      }}
      className="w-full relative z-50"
    >
      <div
        style={{ maxWidth: "var(--content-max-width)" }}
        className="mx-auto px-4 sm:px-6 md:px-10"
      >
        <div className="flex items-center justify-between h-20">
          {/* ── Logo ── */}
          <Link href={HOME}>
            <Image
              src="/Vedant Innovation Logo.png"
              alt="Vedant Innovision"
              width={150}
              height={70}
            />
          </Link>

          {/* ── Desktop Menu ── */}
          <nav
            style={{ fontSize: "var(--text-body-base)" }}
            className="hidden md:flex items-center gap-10"
          >
            <Link
              href={BRANDCONSULTING}
              style={{ color: "var(--color-text-body)" }}
              className="nav-link transition"
            >
              Brand Evolution
            </Link>

            <Link
              href={WEBSITEUIUX}
              style={{ color: "var(--color-text-body)" }}
              className="nav-link transition"
            >
              IT &amp; Digital Solutions
            </Link>

            {/* Brand Strategy */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("communication")}
              onMouseLeave={handleMouseLeave}
            >
              <button
                style={{ color: "var(--color-text-body)" }}
                className="nav-link transition"
              >
                Brand Strategy
              </button>
              {activeMenu === "communication" && (
                <CommunicationMegaMenu variant="desktop" />
              )}
            </div>

            {/* Workplace Identity */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("employer")}
              onMouseLeave={handleMouseLeave}
            >
              <button
                style={{ color: "var(--color-text-body)" }}
                className="nav-link transition"
              >
                Workplace Identity
              </button>
              {activeMenu === "employer" && (
                <EmployerMegaMenu variant="desktop" />
              )}
            </div>

            <Link
              href={FILMS}
              style={{ color: "var(--color-text-body)" }}
              className="nav-link transition"
            >
              Visual Stories
            </Link>

            <Link
              href={CONTACT}
              style={{ color: "var(--color-text-body)" }}
              className="nav-link transition"
            >
              Contact
            </Link>
          </nav>

          {/* ── Mobile Menu Button ── */}
          <button
            style={{ color: "var(--color-text-body)" }}
            className="md:hidden"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* ── Mobile Menu ── */}
      {open && (
        <div
          style={{
            background:
              "linear-gradient(to bottom, var(--color-bg-hero-from), var(--color-bg-hero-via), var(--color-bg-hero-to))",
            borderTop: "1px solid var(--color-border-image)",
            color: "var(--color-text-body)",
            paddingLeft: "var(--section-px-sm)",
            paddingRight: "var(--section-px-sm)",
            paddingTop: "1.5rem",
            paddingBottom: "1.5rem",
          }}
          className="md:hidden space-y-2 max-h-[80vh] overflow-y-auto"
        >
          <Link
            href={BRANDCONSULTING}
            style={{ color: "var(--color-text-body)" }}
            className="block nav-link py-2"
            onClick={closeMobileDrawer}
          >
            Brand Evolution
          </Link>

          <Link
            href={WEBSITEUIUX}
            style={{ color: "var(--color-text-body)" }}
            className="block nav-link py-2"
            onClick={closeMobileDrawer}
          >
            IT &amp; Digital Solutions
          </Link>

          {/* Brand Strategy — mobile accordion */}
          <div>
            <button
              style={{ color: "var(--color-text-body)" }}
              className="flex items-center justify-between w-full nav-link py-2"
              onClick={() => toggleMobileSection("communication")}
              aria-expanded={mobileExpanded === "communication"}
            >
              <span>Brand Strategy</span>
              <ChevronDown
                size={18}
                className={`transition-transform duration-200 ${mobileExpanded === "communication" ? "rotate-180" : ""
                  }`}
              />
            </button>
            {mobileExpanded === "communication" && (
              <div className="pl-2 pt-2 pb-2">
                <CommunicationMegaMenu variant="mobile" />
              </div>
            )}
          </div>

          {/* Workplace Identity — mobile accordion */}
          <div>
            <button
              style={{ color: "var(--color-text-body)" }}
              className="flex items-center justify-between w-full nav-link py-2"
              onClick={() => toggleMobileSection("employer")}
              aria-expanded={mobileExpanded === "employer"}
            >
              <span>Workplace Identity</span>
              <ChevronDown
                size={18}
                className={`transition-transform duration-200 ${mobileExpanded === "employer" ? "rotate-180" : ""
                  }`}
              />
            </button>
            {mobileExpanded === "employer" && (
              <div className="pl-2 pt-2 pb-2">
                <EmployerMegaMenu variant="mobile" />
              </div>
            )}
          </div>

          <Link
            href={FILMS}
            style={{ color: "var(--color-text-body)" }}
            className="block nav-link py-2"
            onClick={closeMobileDrawer}
          >
            Visual Stories
          </Link>

          <Link
            href={CONTACT}
            style={{ color: "var(--color-text-body)" }}
            className="block nav-link py-2"
            onClick={closeMobileDrawer}
          >
            Contact
          </Link>
        </div>
      )}
    </header>
  );
}