"use client";

import Image from "next/image";
import Link from "next/link";
// import ReCAPTCHA from "react-google-recaptcha";
import { useState } from "react";
import {
  ABOUT,
  BLOG,
  BRANDIDENTITY,
  CAREER,
  CONTACT,
  EMPLOYERBRANDING,
  FILMS,
  NEWS,
  PRIVACYPOLICY,
  TERMS,
} from "../const/routes.const";
import {
  Home,
  FileText,
  Briefcase,
  Phone,
  InfoIcon,
  Newspaper,
  Instagram,
  Linkedin,
  Megaphone,
  Film,
  Building2,
  Building,
} from "lucide-react";
import BrandConsulting from "../brand-consulting/page";

export default function Footer() {
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);

  const handleCaptchaChange = (token: string | null) => {
    setCaptchaToken(token);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!captchaToken) {
      alert("Please verify that you are not a robot.");
      return;
    }

    alert("Form submitted successfully!");
  };

  return (
    <footer className="bg-gradient-to-b from-gray-300 via-gray-100 to-white text-black pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-5 gap-10">
        {/* Logo */}
        <div>
          <Image
            src="/Vedant Innovation Logo.png"
            alt="Vedant Innovision"
            width={170}
            height={60}
          />
        </div>

        {/* Company */}
        <nav>
          <h3 className="font-semibold mb-4 text-purple-600">Company</h3>
          <ul className="space-y-2">
            <li>
              <Link
                href="/"
                className="hover:text-yellow-500 flex items-center gap-2 text-black transition"
              >
                <Home size={16} />
                Home
              </Link>
            </li>
            <li>
              <Link
                href={ABOUT}
                className="hover:text-yellow-500 flex items-center gap-2 text-black transition"
              >
                <InfoIcon size={16} />
                About
              </Link>
            </li>
            <li>
              <Link
                href={BLOG}
                className="hover:text-yellow-500 flex items-center gap-2 text-black transition"
              >
                <FileText size={16} />
                Blog
              </Link>
            </li>
            <li>
              <Link
                href={NEWS}
                className="hover:text-yellow-500 flex items-center gap-2 text-black transition"
              >
                <Newspaper size={16} />
                News & Awards
              </Link>
            </li>
            <li>
              <Link
                href={CAREER}
                className="hover:text-yellow-500 flex items-center gap-2 text-black transition"
              >
                <Briefcase size={16} />
                Career
              </Link>
            </li>
            <li>
              <Link
                href={CONTACT}
                className="hover:text-yellow-500 flex items-center gap-2 text-black transition"
              >
                <Phone size={16} />
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Work */}
        <nav>
          <h3 className="font-semibold mb-4 text-purple-600">Work</h3>
          <ul className="space-y-2">
            <li>
              <Link
                href={BRANDIDENTITY}
                className="hover:text-yellow-500 flex items-center gap-2 text-black transition"
              >
                <Megaphone size={16} />
                Brand Communication
              </Link>
            </li>
            <li>
              <Link
                href={EMPLOYERBRANDING}
                className="hover:text-yellow-500 flex items-center gap-2 text-black transition"
              >
                <Building2 size={16} />
                Organizational Brand
              </Link>
            </li>
            <li>
              <Link
                href={FILMS}
                className="hover:text-yellow-500 flex items-center gap-2 text-black transition"
              >
                <Film size={16} />
                Films
              </Link>
            </li>
          </ul>
        </nav>

        {/* Social */}
        <nav>
          <h3 className="font-semibold mb-4 text-purple-600">Social</h3>
          <ul className="space-y-2">
            <li>
              <Link
                href="https://www.linkedin.com"
                target="_blank"
                className="hover:text-yellow-500 flex items-center gap-2 text-black transition"
              >
                <Linkedin size={16} />
                LinkedIn
              </Link>
            </li>
            <li>
              <Link
                href="https://instagram.com"
                target="_blank"
                className="hover:text-yellow-500 flex items-center gap-2 text-black transition"
              >
                <Instagram size={16} />
                Instagram
              </Link>
            </li>
          </ul>
        </nav>

        {/* Enquiry */}
        <div>
          <h3 className="font-semibold mb-4 text-purple-600">Enquiry</h3>

          <form className="space-y-3" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Name"
              required
              className="w-full bg-white border border-gray-300 px-3 py-2 rounded focus:outline-none focus:border-yellow-400 text-black"
            />

            <input
              type="email"
              placeholder="Email Id"
              required
              className="w-full bg-white border border-gray-300 px-3 py-2 rounded focus:outline-none focus:border-yellow-400 text-black"
            />

            <input
              type="tel"
              placeholder="Mobile No."
              required
              className="w-full bg-white border border-gray-300 px-3 py-2 rounded focus:outline-none focus:border-yellow-400 text-black"
            />

            <textarea
              placeholder="Message"
              required
              className="w-full bg-white border border-gray-300 px-3 py-2 rounded focus:outline-none focus:border-yellow-400 text-black"
            />

            <button
              type="submit"
              className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-semibold px-6 py-2 rounded hover:opacity-90 transition"
            >
              SUBMIT →
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-300 mt-12 pt-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between text-sm text-black">
          <div className="space-x-4">
            <Link href={PRIVACYPOLICY} className="hover:text-yellow-500">
              Privacy Policy
            </Link>
            <span>|</span>
            <Link href={TERMS} className="hover:text-yellow-500">
              Terms and Services
            </Link>
          </div>

          <p className="mt-4 md:mt-0">
            © 2026 Vedant Innovision - All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
