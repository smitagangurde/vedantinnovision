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
          Want to Explore Our Solutions?
        </h3>

        <p className="text-gray-600 text-sm leading-relaxed">
          From innovative concepts to complete execution, Vedant Innovision
          delivers solutions that bring your brand vision to life with precision
          and creativity.
        </p>

        <Link
          href={CONTACT}
          className="mt-50 inline-block text-[var(--brand-purple)] font-medium hover:underline"
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
                Corporate Branding
              </Link>
            </h4>
            <p className="text-sm text-gray-600">
              Enhancing your brand presence through impactful corporate branding
              solutions.
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
                Industrial & Spatial Solutions
              </Link>
            </h4>
            <p className="text-sm text-gray-600">
              Designing functional and visually strong industrial spaces and
              branding environments.
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
              Delivering clear and effective communication across all business
              touchpoints.
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
                Brand Promotion & Outreach
              </Link>
            </h4>
            <p className="text-sm text-gray-600">
              Showcasing your brand through strategic marketing, campaigns, and
              promotional activities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
