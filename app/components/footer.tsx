"use client";

import Image from "next/image";
import Link from "next/link";
// import ReCAPTCHA from "react-google-recaptcha";
import { useState } from "react";
import { ABOUT, BLOG, CAREER, CONTACT, NEWS, NEWSANDAWARDS } from "../const/routes.const";

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
    <footer className="bg-black text-gray-300 pt-16 pb-8 border-t border-purple-900">
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
          <h3 className="font-semibold mb-4 text-purple-400">Company</h3>
          <ul className="space-y-2">
            <li><Link href="/" className="hover:text-yellow-400">Home</Link></li>
            <li><Link href={ABOUT} className="hover:text-yellow-400">About</Link></li>
            <li><Link href={BLOG} className="hover:text-yellow-400">Blog</Link></li>
            <li><Link href={NEWS} className="hover:text-yellow-400">News & Awards</Link></li>
            <li><Link href={CAREER} className="hover:text-yellow-400">Career</Link></li>
            <li><Link href={CONTACT} className="hover:text-yellow-400">Contact</Link></li>
          </ul>
        </nav>

        {/* Work */}
        <nav>
          <h3 className="font-semibold mb-4 text-purple-400">Work</h3>
          <ul className="space-y-2">
            <li><Link href="/brand-communication" className="hover:text-yellow-400">Brand Communication</Link></li>
            <li><Link href="/employer-brand" className="hover:text-yellow-400">Employer Brand</Link></li>
            <li><Link href="/films" className="hover:text-yellow-400">Films</Link></li>
          </ul>
        </nav>

        {/* Social */}
        <nav>
          <h3 className="font-semibold mb-4 text-purple-400">Social</h3>
          <ul className="space-y-2">
            <li>
              <Link href="https://linkedin.com" target="_blank" className="hover:text-yellow-400">
                LinkedIn
              </Link>
            </li>
            <li>
              <Link href="https://instagram.com" target="_blank" className="hover:text-yellow-400">
                Instagram
              </Link>
            </li>
          </ul>
        </nav>

        {/* Enquiry */}
        <div>
          <h3 className="font-semibold mb-4 text-purple-400">Enquiry</h3>

          <form className="space-y-3" onSubmit={handleSubmit}>

            <input
              type="text"
              placeholder="Name"
              required
              className="w-full bg-zinc-900 border border-purple-800 px-3 py-2 rounded focus:outline-none focus:border-yellow-400"
            />

            <input
              type="email"
              placeholder="Email Id"
              required
              className="w-full bg-zinc-900 border border-purple-800 px-3 py-2 rounded focus:outline-none focus:border-yellow-400"
            />

            <input
              type="tel"
              placeholder="Mobile No."
              required
              className="w-full bg-zinc-900 border border-purple-800 px-3 py-2 rounded focus:outline-none focus:border-yellow-400"
            />

            <textarea
              placeholder="Message"
              required
              className="w-full bg-zinc-900 border border-purple-800 px-3 py-2 rounded focus:outline-none focus:border-yellow-400"
            />

            {/* Google reCAPTCHA */}
                {/* <ReCAPTCHA
                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
                onChange={handleCaptchaChange}
                /> */}

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
      <div className="border-t border-purple-900 mt-30 pt-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between text-sm text-gray-400">

          <div className="space-x-4">
            <Link href="/privacy-policy" className="hover:text-yellow-400">
              Privacy Policy
            </Link>
            <span>|</span>
            <Link href="/terms" className="hover:text-yellow-400">
              Terms and Services
            </Link>
          </div>

          <p className="mt-4 md:mt-0">
            © 2026 Vedant Innovision Private Limited - All rights reserved.
          </p>

        </div>
      </div>
    </footer>
  );
}