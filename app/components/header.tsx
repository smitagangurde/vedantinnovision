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
    <header className="w-full bg-gradient-to-b from-gray-300 via-gray-100 to-white border-b border-gray-300 text-black relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href={HOME}>
            <Image
              src="/Vedant Innovation Logo.png"
              alt="Vedant Innovision"
              width={150}
              height={70}
            />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-10">
            <Link
              href={BRANDCONSULTING}
              className="hover:text-yellow-500 transition"
            >
              Brand Evolution
            </Link>

            {/* Brand Strategy */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("communication")}
              onMouseLeave={handleMouseLeave}
            >
              <button className="hover:text-yellow-500 transition">
                Brand Strategy
              </button>

              {activeMenu === "communication" && <CommunicationMegaMenu />}
            </div>

            {/* Organizational Brand */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("employer")}
              onMouseLeave={handleMouseLeave}
            >
              <button className="hover:text-yellow-500 transition">
                Organizational Brand
              </button>

              {activeMenu === "employer" && <EmployerMegaMenu />}
            </div>

            <Link href={FILMS} className="hover:text-yellow-500 transition">
              Visual Stories
            </Link>

            <Link href={CONTACT} className="hover:text-yellow-500 transition">
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-black"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-gradient-to-b from-gray-300 via-gray-100 to-white border-t border-gray-300 px-6 py-6 space-y-4 text-black">
          <Link
            href={BRANDCONSULTING}
            className="block hover:text-yellow-500"
            onClick={() => setOpen(false)}
          >
            Brand Evolution
          </Link>

          <Link
            href="#"
            className="block hover:text-yellow-500"
            onClick={() => setOpen(false)}
          >
            Brand Strategy
          </Link>

          <Link
            href="#"
            className="block hover:text-yellow-500"
            onClick={() => setOpen(false)}
          >
            Organizational Brand
          </Link>

          <Link
            href="#"
            className="block hover:text-yellow-500"
            onClick={() => setOpen(false)}
          >
            Visual Stories
          </Link>

          <Link
            href={CONTACT}
            className="block hover:text-yellow-500"
            onClick={() => setOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </header>
  );
}
