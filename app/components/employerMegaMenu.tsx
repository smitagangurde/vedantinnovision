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
      className="absolute left-1/2 -translate-x-1/2 top-full mt-6 
  w-[720px]
  bg-[var(--brand-black)] text-white 
  border border-purple-900 rounded-2xl shadow-2xl 
  p-8 
  grid grid-cols-2 gap-8 z-50"
    >
      {/* LEFT SECTION */}
      <div className="md:pr-6 md:border-r border-purple-900">
        <h3 className="text-lg md:text-xl font-semibold text-purple-400 mb-3 leading-snug">
          Want to Step Inside Our Creative Universe?
        </h3>

        <p className="text-gray-400 text-sm leading-relaxed">
          Whether it’s our latest creations or innovative solutions, we’re ready
          to unveil it all for you.
        </p>

        <Link
          href={CONTACT}
          className="mt-6 inline-block text-yellow-400 font-medium hover:underline"
        >
          Contact Us
        </Link>
      </div>

      {/* RIGHT SECTION */}
      <div className="space-y-6">
        <div className="flex gap-4 items-start">
          <Briefcase className="w-5 h-5 text-purple-400 mt-1" />
          <div>
            <h4 className="font-semibold text-sm sm:text-base md:text-lg">
              <Link
                href={EMPLOYERBRANDING}
                className="text-white hover:text-yellow-400 hover:underline"
              >
                Employer Branding
              </Link>
            </h4>
            <p className="text-sm text-gray-400">
              Strengthening your brand image to attract talent.
            </p>
          </div>
        </div>

        <div className="flex gap-4 items-start">
          <Building2 className="w-5 h-5 text-purple-400 mt-1" />
          <div>
            <h4 className="font-semibold text-sm sm:text-base md:text-lg">
              <Link
                href={OFFICEBRANDING}
                className="text-white hover:text-yellow-400 hover:underline"
              >
                Office Branding
              </Link>
            </h4>
            <p className="text-sm text-gray-400">
              Workspaces reflecting your brand values.
            </p>
          </div>
        </div>

        <div className="flex gap-4 items-start">
          <MessageSquare className="w-5 h-5 text-purple-400 mt-1" />
          <div>
             <h4 className="font-semibold text-sm sm:text-base md:text-lg">
              <Link
                href={INTERNALCOMMUNICATION}
                className="text-white hover:text-yellow-400 hover:underline"
              >
                Internal Communication
              </Link>
            </h4>
            <p className="text-sm text-gray-400">
              Empower your workforce with impactful communication.
            </p>
          </div>
        </div>

        <div className="flex gap-4 items-start">
          <Users className="w-5 h-5 text-purple-400 mt-1" />
          <div>
            <h4 className="font-semibold text-sm sm:text-base md:text-lg">
              <Link
                href={EMPLOYERBRANDSM}
                className="text-white hover:text-yellow-400 hover:underline"
              >
                Employer Brand Social Media
              </Link>
            </h4>
            <p className="text-sm text-gray-400">
              Showcase your culture and attract the right talent.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
