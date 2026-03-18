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
  WEBSITEUIUX,
} from "../const/routes.const";

export default function CommunicationMegaMenu() {
  return (
    <div className="absolute left-1/2 -translate-x-1/2 top-full mt-6 w-[720px] bg-[var(--brand-black)] text-white border border-purple-900 rounded-2xl shadow-2xl p-8 grid grid-cols-2 gap-8 z-50">
      {/* LEFT SECTION */}
      <div className="pr-6 border-r border-purple-900">
        <h3 className="text-xl font-semibold text-purple-400 mb-3">
          Our Portfolio - <br /> Where ideas come to life!
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed">
          Every brand has unique goals and needs — we understand this well. Our
          services are specifically designed to amplify your brand, engage the
          audience, and ensure your message hits home.
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
          <PenTool className="w-5 h-5 text-purple-400 mt-1" />
          <div>
            <h4 className="font-semibold text-sm sm:text-base md:text-lg">
              <Link
                href={BRANDIDENTITY}
                className="text-white hover:text-yellow-400 hover:underline"
              >
                Brand Identity
              </Link>
            </h4>

            <p className="text-sm text-gray-400">
              We craft compelling brand stories that captivate and resonate.
            </p>
          </div>
        </div>

        <div className="flex gap-4 items-start">
          <Megaphone className="w-5 h-5 text-purple-400 mt-1" />
          <div>
            <h4 className="font-semibold text-sm sm:text-base md:text-lg">
              <Link
                href={MARKETINGCOMMUNICATION}
                className="text-white hover:text-yellow-400 hover:underline"
              >
                Marketing Communication
              </Link>
            </h4>
            <p className="text-sm text-gray-400">
              Shaping narratives that fuel marketing success.
            </p>
          </div>
        </div>

        <div className="flex gap-4 items-start">
          <FileText className="w-5 h-5 text-purple-400 mt-1" />
          <div>
            <h4 className="font-semibold text-sm sm:text-base md:text-lg">
              <Link
                href={ANNUALREPORTING}
                className="text-white hover:text-yellow-400 hover:underline"
              >
                Annual Reporting
              </Link>
            </h4>
            <p className="text-sm text-gray-400">
              Build trust with impactful communication.
            </p>
          </div>
        </div>

        <div className="flex gap-4 items-start">
          <Monitor className="w-5 h-5 text-purple-400 mt-1" />
          <div>
            <h4 className="font-semibold text-sm sm:text-base md:text-lg">
              <Link
                href={WEBSITEUIUX}
                className="text-white hover:text-yellow-400 hover:underline"
              >
                Website & UI/UX
              </Link>
            </h4>
            <p className="text-sm text-gray-400">
              Elevate digital experiences through intuitive design.
            </p>
          </div>
        </div>

        <div className="flex gap-4 items-start">
          <MessageCircle className="w-5 h-5 text-purple-400 mt-1" />
          <div>
            <h4 className="font-semibold text-sm sm:text-base md:text-lg">
              <Link
                href={WEBSITEUIUX}
                className="text-white hover:text-yellow-400 hover:underline"
              >
                Social Media
              </Link>
            </h4>
            <p className="text-sm text-gray-400">
              Amplify and transform your social media presence.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
