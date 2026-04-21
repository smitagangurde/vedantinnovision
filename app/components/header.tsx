"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import CommunicationMegaMenu from "./communicationMegaMenu";
import EmployerMegaMenu from "./employerMegaMenu";

import { BRANDCONSULTING, CONTACT, FILMS, HOME } from "../const/routes.const";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
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
              {activeMenu === "communication" && <CommunicationMegaMenu />}
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
              {activeMenu === "employer" && <EmployerMegaMenu />}
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
          className="md:hidden space-y-4"
        >
          <Link
            href={BRANDCONSULTING}
            style={{ color: "var(--color-text-body)" }}
            className="block nav-link"
            onClick={() => setOpen(false)}
          >
            Brand Evolution
          </Link>

          <Link
            href="#"
            style={{ color: "var(--color-text-body)" }}
            className="block nav-link"
            onClick={() => setOpen(false)}
          >
            Brand Strategy
          </Link>

          <Link
            href="#"
            style={{ color: "var(--color-text-body)" }}
            className="block nav-link"
            onClick={() => setOpen(false)}
          >
            Workplace Identity
          </Link>

          <Link
            href="#"
            style={{ color: "var(--color-text-body)" }}
            className="block nav-link"
            onClick={() => setOpen(false)}
          >
            Visual Stories
          </Link>

          <Link
            href={CONTACT}
            style={{ color: "var(--color-text-body)" }}
            className="block nav-link"
            onClick={() => setOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </header>
  );
}
