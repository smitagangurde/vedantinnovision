"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import CommunicationMegaMenu from "./communicationMegaMenu";
import EmployerMegaMenu from "./employerMegaMenu";

import {
  BRANDCONSULTING,
  CONTACT,
  HOME,
} from "../const/routes.const";

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
    <header className="w-full bg-black border-b border-purple-900 text-white relative z-50">
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

            <Link href={BRANDCONSULTING} className="hover:text-yellow-400 transition">
              Brand Consulting
            </Link>

            {/* Brand Communication */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("communication")}
              onMouseLeave={handleMouseLeave}
            >
              <button className="hover:text-yellow-400 transition">
                Brand Communication
              </button>

              {activeMenu === "communication" && <CommunicationMegaMenu />}
            </div>

            {/* Employer Brand */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("employer")}
              onMouseLeave={handleMouseLeave}
            >
              <button className="hover:text-yellow-400 transition">
                Employer Brand
              </button>

              {activeMenu === "employer" && <EmployerMegaMenu />}
            </div>

            <Link href="#" className="hover:text-yellow-400 transition">
              Films
            </Link>

            <Link href={CONTACT} className="hover:text-yellow-400 transition">
              Contact
            </Link>

          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>

        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black border-t border-purple-900 px-6 py-6 space-y-4">

          <Link
            href={BRANDCONSULTING}
            className="block hover:text-yellow-400"
            onClick={() => setOpen(false)}
          >
            Brand Consulting
          </Link>

          <Link
            href="#"
            className="block hover:text-yellow-400"
            onClick={() => setOpen(false)}
          >
            Brand Communication
          </Link>

          <Link
            href="#"
            className="block hover:text-yellow-400"
            onClick={() => setOpen(false)}
          >
            Employer Brand
          </Link>

          <Link
            href="#"
            className="block hover:text-yellow-400"
            onClick={() => setOpen(false)}
          >
            Films
          </Link>

          <Link
            href={CONTACT}
            className="block hover:text-yellow-400"
            onClick={() => setOpen(false)}
          >
            Contact
          </Link>

        </div>
      )}
    </header>
  );
}