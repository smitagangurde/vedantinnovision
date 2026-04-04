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
      bg-gradient-to-b from-gray-300 via-gray-100 to-white
      text-gray-800 
      border border-gray-200 rounded-2xl shadow-xl 
      p-8 
      grid grid-cols-2 gap-8 z-50"
    >
      {/* LEFT SECTION */}
      <div className="md:pr-6 md:border-r border-gray-200">
        <h3 className="text-lg md:text-xl font-semibold text-[var(--brand-purple)] mb-3 leading-snug">
          Want to Step Inside Our Creative Universe?
        </h3>

        <p className="text-gray-600 text-sm leading-relaxed">
          Whether it’s our latest creations or innovative solutions, we’re ready
          to unveil it all for you.
        </p>

        <Link
          href={CONTACT}
          className="mt-40 inline-block text-[var(--brand-purple)] font-medium hover:underline"
        >
          Contact Us
        </Link>
      </div>

      {/* RIGHT SECTION */}
      <div className="space-y-6">
        <div className="flex gap-4 items-start">
          <Briefcase className="w-5 h-5 text-[var(--brand-purple)] mt-1" />
          <div>
            <h4 className="font-semibold text-sm sm:text-base md:text-lg">
              <Link
                href={EMPLOYERBRANDING}
                className="hover:text-[var(--brand-purple)] hover:underline"
              >
                Workforce Identity
              </Link>
            </h4>
            <p className="text-sm text-gray-600">
              Strengthening your brand image to attract talent.
            </p>
          </div>
        </div>

        <div className="flex gap-4 items-start">
          <Building2 className="w-5 h-5 text-[var(--brand-purple)] mt-1" />
          <div>
            <h4 className="font-semibold text-sm sm:text-base md:text-lg">
              <Link
                href={OFFICEBRANDING}
                className="hover:text-[var(--brand-purple)] hover:underline"
              >
                Spatial Branding
              </Link>
            </h4>
            <p className="text-sm text-gray-600">
              Workspaces reflecting your brand values.
            </p>
          </div>
        </div>

        <div className="flex gap-4 items-start">
          <MessageSquare className="w-5 h-5 text-[var(--brand-purple)] mt-1" />
          <div>
            <h4 className="font-semibold text-sm sm:text-base md:text-lg">
              <Link
                href={INTERNALCOMMUNICATION}
                className="hover:text-[var(--brand-purple)] hover:underline"
              >
                Corporate Communication
              </Link>
            </h4>
            <p className="text-sm text-gray-600">
              Empower your workforce with impactful communication.
            </p>
          </div>
        </div>

        <div className="flex gap-4 items-start">
          <Users className="w-5 h-5 text-[var(--brand-purple)] mt-1" />
          <div>
            <h4 className="font-semibold text-sm sm:text-base md:text-lg">
              <Link
                href={EMPLOYERBRANDSM}
                className="hover:text-[var(--brand-purple)] hover:underline"
              >
                Talent Marketing
              </Link>
            </h4>
            <p className="text-sm text-gray-600">
              Showcase your culture and attract the right talent.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
