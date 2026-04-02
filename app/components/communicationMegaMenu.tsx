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
          Our Portfolio - <br /> Where ideas come to life!
        </h3>

        <p className="text-gray-600 text-sm leading-relaxed">
          Every brand has unique goals and needs — we understand this well. Our
          services are specifically designed to amplify your brand, engage the
          audience, and ensure your message hits home.
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
              We craft compelling brand stories that captivate and resonate.
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
              Shaping narratives that fuel marketing success.
            </p>
          </div>
        </div>

        <div className="flex gap-4 items-start">
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
        </div>

        <div className="flex gap-4 items-start">
          <Monitor className="w-5 h-5 text-[var(--brand-purple)] mt-1" />
          <div>
            <h4 className="font-semibold text-sm sm:text-base md:text-lg">
              <Link
                href={WEBSITEUIUX}
                className="hover:text-[var(--brand-purple)] hover:underline"
              >
                Website & UI/UX
              </Link>
            </h4>
            <p className="text-sm text-gray-600">
              Elevate digital experiences through intuitive design.
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
                Social Media
              </Link>
            </h4>
            <p className="text-sm text-gray-600">
              Amplify and transform your social media presence.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
