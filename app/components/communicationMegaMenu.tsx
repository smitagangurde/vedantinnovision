"use client";

import {
  PenTool,
  Megaphone,
  FileText,
  Monitor,
  MessageCircle,
} from "lucide-react";
import Link from "next/link";
import {
  ANNUALREPORTING,
  BRANDIDENTITY,
  CONTACT,
  MARKETINGCOMMUNICATION,
  SOCIALMEDIA,
  WEBSITEUIUX,
} from "../const/routes.const";

export default function CommunicationMegaMenu() {
  return (
    <div
      className="absolute left-1/2 -translate-x-1/2 top-full mt-6 w-[720px] 
    bg-gradient-to-b from-gray-300 via-gray-100 to-white 
    text-gray-800 border border-gray-200 rounded-2xl shadow-xl p-8 grid grid-cols-2 gap-8 z-50"
    >
      {/* LEFT SECTION */}
      <div className="pr-6 border-r border-gray-200">
        <h3 className="text-xl font-semibold text-[var(--brand-purple)] mb-3">
          Our Portfolio - <br /> Where innovation meets execution!
        </h3>

        <p className="text-gray-600 text-sm leading-relaxed">
          At Vedant Innovision, we turn ideas into impactful brand experiences.
          Our solutions are crafted to enhance visibility, strengthen brand
          presence, and deliver measurable results across every touchpoint.
        </p>

        <Link
          href={CONTACT}
          className="mt-35 inline-block text-[var(--brand-purple)] font-medium hover:underline"
        >
          Contact Us
        </Link>
      </div>

      {/* RIGHT SECTION */}
      <div className="space-y-6">
        <div className="flex gap-4 items-start">
          <PenTool className="w-5 h-5 text-[var(--brand-purple)] mt-1" />
          <div>
            <h4 className="font-semibold text-sm sm:text-base md:text-lg">
              <Link
                href={BRANDIDENTITY}
                className="hover:text-[var(--brand-purple)] hover:underline"
              >
                Brand Identity
              </Link>
            </h4>
            <p className="text-sm text-gray-600">
              Creating distinctive identities that define and elevate your
              brand.
            </p>
          </div>
        </div>

        <div className="flex gap-4 items-start">
          <Megaphone className="w-5 h-5 text-[var(--brand-purple)] mt-1" />
          <div>
            <h4 className="font-semibold text-sm sm:text-base md:text-lg">
              <Link
                href={MARKETINGCOMMUNICATION}
                className="hover:text-[var(--brand-purple)] hover:underline"
              >
                Marketing Communication
              </Link>
            </h4>
            <p className="text-sm text-gray-600">
              Strategic communication that drives engagement and builds strong
              connections.
            </p>
          </div>
        </div>

        {/* <div className="flex gap-4 items-start">
          <FileText className="w-5 h-5 text-[var(--brand-purple)] mt-1" />
          <div>
            <h4 className="font-semibold text-sm sm:text-base md:text-lg">
              <Link
                href={ANNUALREPORTING}
                className="hover:text-[var(--brand-purple)] hover:underline"
              >
                Annual Reporting
              </Link>
            </h4>
            <p className="text-sm text-gray-600">
              Build trust with impactful communication.
            </p>
          </div>
        </div> */}

        <div className="flex gap-4 items-start">
          <Monitor className="w-5 h-5 text-[var(--brand-purple)] mt-1" />
          <div>
            <h4 className="font-semibold text-sm sm:text-base md:text-lg">
              <Link
                href={WEBSITEUIUX}
                className="hover:text-[var(--brand-purple)] hover:underline"
              >
                IT & Digital Solutions
              </Link>
            </h4>
            <p className="text-sm text-gray-600">
              Building scalable websites, applications, and digital systems with
              seamless user experience.
            </p>
          </div>
        </div>

        <div className="flex gap-4 items-start">
          <MessageCircle className="w-5 h-5 text-[var(--brand-purple)] mt-1" />
          <div>
            <h4 className="font-semibold text-sm sm:text-base md:text-lg">
              <Link
                href={SOCIALMEDIA}
                className="hover:text-[var(--brand-purple)] hover:underline"
              >
                Social Media Management & Marketing
              </Link>
            </h4>
            <p className="text-sm text-gray-600">
              Strengthening your digital presence with creative and
              performance-driven strategies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
