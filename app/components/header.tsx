"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import CommunicationMegaMenu from "./communicationMegaMenu";
import EmployerMegaMenu from "./employerMegaMenu";

export default function Header() {
  const [open, setOpen] = useState(false);

  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  return (
   <header className="w-full bg-brand-black border-b border-brand-purple text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/">
            <Image
              src="/Vedant Innovation Logo.png"
              alt="Vedant Innovision"
              width={150}
              height={70}
            />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-10">
            <Link href="#" className="hover:text-yellow-400">
              Brand Consulting
            </Link>

            {/* Mega Menu */}
            <div className="relative group">
              <div
                onMouseEnter={() => setActiveMenu("communication")}
                onMouseLeave={() => setActiveMenu(null)}
                className="relative"
              >
                <button className="hover:text-brand-gold">
                  Brand Communication
                </button>

                {activeMenu === "communication" && <CommunicationMegaMenu />}
              </div>
              {/* Mega Dropdown */}
              <div className="absolute left-1/2 -translate-x-1/2 top-full mt-6 w-[850px] bg-[#0f0f0f] border border-purple-900 rounded-xl shadow-xl opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-300">
                <div className="grid grid-cols-2 gap-10 p-10">
                  {/* Left Section */}
                  <div>
                    <h3 className="text-2xl font-semibold text-purple-400 mb-4">
                      Our Portfolio - Where ideas come to life!
                    </h3>

                    <p className="text-gray-400 text-sm leading-relaxed">
                      Every brand has unique goals and needs — we understand
                      this well. Our services amplify your brand, engage
                      audiences, and ensure your message hits home.
                    </p>

                    <Link
                      href="/contact"
                      className="inline-block mt-6 text-yellow-400 hover:underline"
                    >
                      Contact Us
                    </Link>
                  </div>

                  {/* Right Section */}
                  <div className="space-y-5">
                    <div>
                      <h4 className="font-semibold text-white">
                        Brand Identity
                      </h4>
                      <p className="text-sm text-gray-400">
                        Craft compelling brand stories that resonate.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-white">
                        Marketing Communication
                      </h4>
                      <p className="text-sm text-gray-400">
                        Shape narratives that drive marketing success.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-white">
                        Annual Reporting
                      </h4>
                      <p className="text-sm text-gray-400">
                        Build trust through impactful communication.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-white">
                        Website & UI/UX
                      </h4>
                      <p className="text-sm text-gray-400">
                        Elevate digital experiences with intuitive design.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-white">Social Media</h4>
                      <p className="text-sm text-gray-400">
                        Transform your social media presence.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              onMouseEnter={() => setActiveMenu("employer")}
              onMouseLeave={() => setActiveMenu(null)}
              className="relative"
            >
              <button className="hover:text-yellow-400">Employer Brand</button>

              {activeMenu === "employer" && <EmployerMegaMenu />}
            </div>

            <Link href="#" className="hover:text-yellow-400">
              Films
            </Link>

            <Link href="#contact" className="hover:text-yellow-400">
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
