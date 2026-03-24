"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Lightbulb,
  Palette,
  Briefcase,
  FileText,
  Settings,
  Users,
  Search,
  GitBranch,
  Sparkles,
  Truck,
} from "lucide-react";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { CONTACT } from "@/app/const/routes.const";
import Testimonial from "@/app/component/Testimonial";
import BrandSection from "@/app/component/BrandSection";

const projects = [
  { title: "Nivas" },
  { title: "Altus" },
  { title: "Coco Sattva" },
  { title: "Global Insurance" },
  { title: "Suroj Buildcon" },
  { title: "Eblon" },
  { title: "Frubites" },
];

const steps = [
  {
    icon: <Lightbulb className="w-8 h-8 text-[var(--brand-purple)]" />,
    title: "Discovery & Research",
    desc: "Deep dive into industry, competitors, and audience insights.",
  },
  {
    icon: <GitBranch className="w-8 h-8 text-[var(--brand-purple)]" />,
    title: "Strategy & DNA",
    desc: "Define messaging, tone, and visual direction.",
  },
  {
    icon: <Sparkles className="w-8 h-8 text-[var(--brand-purple)]" />,
    title: "Conceptualization",
    desc: "Translate strategy into visual concepts.",
  },
  {
    icon: <Truck className="w-8 h-8 text-[var(--brand-purple)]" />,
    title: "Finalization & Delivery",
    desc: "Deliver ready-to-use assets across formats.",
  },
];

const faqs = [
  {
    question: "What is the difference between a logo and brand identity?",
    answer:
      "A logo is a visual symbol, while brand identity includes colors, typography, tone, and overall perception of your brand.",
  },
  {
    question: "How long does the branding process take?",
    answer:
      "Typically, a branding project takes 3–6 weeks depending on scope and revisions.",
  },
  {
    question: "Will I own the copyrights to the designs?",
    answer:
      "Yes. Upon completion and final payment, you receive full ownership and copyrights of all approved final designs.",
  },
  {
    question: "Do you offer rebranding services for established companies?",
    answer:
      "Absolutely. We specialize in “Brand Evolution,” helping established companies modernize their look while preserving the equity they’ve built over the years.",
  },
];

const gridItems = Array.from({ length: 10 }, (_, i) => ({
  title: `Project ${i + 1}`,
}));

const services = [
  {
    icon: <Lightbulb className="w-10 h-10 text-[var(--brand-purple)]" />,
    title: "Logo & Tagline Design",
    desc: "Crafting unique, memorable symbols and promises that define your mission.",
  },
  {
    icon: <Palette className="w-10 h-10 text-[var(--brand-purple)]" />,
    title: "Visual Style Guides",
    desc: "Detailed blueprints for typography, color palettes, and strict usage rules.",
  },
  {
    icon: <Briefcase className="w-10 h-10 text-[var(--brand-purple)]" />,
    title: "Business Stationery",
    desc: "Premium business cards, letterheads, and envelopes for lasting impressions.",
  },
  {
    icon: <FileText className="w-10 h-10 text-[var(--brand-purple)]" />,
    title: "Marketing & Sales Collateral",
    desc: "High-impact brochures, catalogs, and flyers tailored to drive conversions.",
  },
  {
    icon: <Settings className="w-10 h-10 text-[var(--brand-purple)]" />,
    title: "Digital Brand Assets",
    desc: "Email signatures, PPT decks, and social media kits aligned to your brand.",
  },
  {
    icon: <Users className="w-10 h-10 text-[var(--brand-purple)]" />,
    title: "Employer Branding",
    desc: "Internal branding, welcome kits, and office branding for culture alignment.",
  },
  {
    icon: <Search className="w-10 h-10 text-[var(--brand-purple)]" />,
    title: "Brand Audit & Evolution",
    desc: "Analyzing positioning and modernizing identities to stay relevant.",
  },
];

export default function BrandIdentitySection() {
  const [openIndex, setOpenIndex] = useState(3); // last one open by default

  const toggleFAQ = (index: any) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const [tIndex, setTIndex] = useState(0);
  return (
    <>
      {/* Section #1 */}
      <section
        aria-labelledby="brand-identity-heading"
        className="w-full bg-[var(--brand-black)] text-white border-t border-white/10 py-16 px-6 md:px-12 lg:px-20 relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* ===== LEFT SIDE (IMAGE + SHAPES) ===== */}
          <div className="relative flex justify-center">
            {/* Background Circle */}
            <div className="absolute w-[320px] h-[320px] md:w-[420px] md:h-[420px] bg-[var(--brand-purple)]/10 rounded-full -z-10"></div>

            {/* Main Image */}
            <div className="relative w-full max-w-md aspect-[4/3]">
              <Image
                src="/branding-kit.png" // replace with your image
                alt="Brand identity design mockups including brochure, business card, and notebook"
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Decorative Circle */}
            <div className="absolute bottom-0 left-10 w-28 h-28 bg-[var(--brand-purple)]/20 rounded-full -z-10"></div>
          </div>

          {/* ===== RIGHT SIDE CONTENT ===== */}
          <div className="max-w-xl">
            <h1
              id="brand-identity-heading"
              className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[var(--brand-purple)] leading-tight mb-6"
            >
              Professional Brand <br /> Identity Design Services
            </h1>

            <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-6">
              We don’t just design logos; we build visual legacies. As a premier
              <strong> brand identity design company</strong> with over{" "}
              <strong>17 years of excellence</strong> and{" "}
              <strong>10,000+ projects delivered</strong>,Velocitta Brands helps
              businesses cut through the noise with cohesive, strategic, and
              impactful design. We transform your vision into a powerful brand
              identity that commands attention and fosters immediate trust.
            </p>
          </div>
        </div>
      </section>
      {/* Section #2x */}
      <section
        aria-labelledby="branding-why-heading"
        className="relative w-full py-20 px-6 md:px-12 lg:px-20 overflow-hidden"
        style={{
          background:
            "linear-gradient(90deg, #2f3f8f 0%, #1d4ed8 40%, #06b6d4 100%)",
        }}
      >
        {/* CONTENT */}
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2
            id="branding-why-heading"
            className="text-2xl md:text-3xl lg:text-4xl font-semibold italic mb-6 leading-snug"
          >
            Why Your Business Needs Strategic Branding and Identity Design
            Services
          </h2>

          <p className="text-sm md:text-base lg:text-lg leading-relaxed mb-6 opacity-95">
            In a crowded market, being “good” isn’t enough—you must be
            recognizable. Any agency can create a logo, but effectively bringing
            an idea to life requires a robust strategic foundation. Our{" "}
            <strong className="text-white font-semibold">
              brand design services
            </strong>{" "}
            bridge the gap between who you are and how the world perceives you.
          </p>

          <p className="text-sm md:text-base lg:text-lg leading-relaxed opacity-95">
            At Velocitta Brands, we believe a brand is a living ecosystem. We
            combine consumer psychology with world-class aesthetics to create a
            visual language that speaks to your audience before you even say a
            word. Whether you are a disruptive startup or a Fortune 500
            enterprise, we ensure your identity is your greatest competitive
            advantage.
          </p>
        </div>
      </section>
      {/* Section #3/ */}
      <section
        aria-labelledby="portfolio-heading"
        className="w-full bg-[var(--brand-black)] border-t border-white/10 py-16 px-6 md:px-12 lg:px-20 relative overflow-hidden"
      >
        {/* ===== HEADING ===== */}
        <div className="max-w-4xl mx-auto text-center mb-14">
          <h2
            id="portfolio-heading"
            className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[var(--brand-purple)] mb-4"
          >
            Brands We’ve Transformed
          </h2>

          <p className="text-gray-300 text-sm md:text-base leading-relaxed">
            Witness the evolution of identity across industries. From Real
            Estate and Tech to FMCG and FinTech, we bring stories to life
            through impactful brand identity design.
          </p>
        </div>

        {/* ===== GRID ===== */}
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-start">
          {projects.map((item, index) => (
            <article
              key={index}
              className="group relative overflow-hidden rounded-md border border-gray-200 bg-white/5 hover:shadow-lg transition duration-300"
            >
              {/* DUMMY CARD */}
              <div className="w-full aspect-square flex items-center justify-center bg-white/5">
                <span className="text-gray-500 text-sm">
                  {item.title} Preview
                </span>
              </div>

              {/* LABEL */}
              <div className="absolute bottom-0 left-0 w-full bg-black/70 text-white px-4 py-2 text-sm">
                {item.title}
              </div>
            </article>
          ))}
        </div>
      </section>
      {/* Section # 4 */}
      <section
        aria-labelledby="brand-services-heading"
        className="w-full bg-[var(--brand-black)] border-t border-white/10 py-16 px-6 md:px-12 lg:px-20 relative overflow-hidden"
      >
        {/* ===== HEADER ===== */}
        <div className="max-w-6xl mx-auto mb-12">
          <h2
            id="brand-services-heading"
            className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[var(--brand-purple)] mb-4"
          >
            Comprehensive Brand Design Services Under One Roof
          </h2>

          <p className="text-gray-600 max-w-3xl text-sm md:text-base leading-relaxed">
            We provide a holistic suite of branding and identity design
            services, ensuring every touchpoint—from digital to print—is
            professional, polished, and aligned with your core values.
          </p>
        </div>

        {/* ===== GRID ===== */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((item, index) => (
            <article
              key={index}
              className="bg-[var(--brand-black)] border-t border-wbg-white/5 backdrop-blur-smhite/10 rounded-xl p-6 shadow-sm border border-white/10 hover:shadow-md transition duration-300"
            >
              {/* ICON */}
              <div className="mb-4">{item.icon}</div>

              {/* TITLE */}
              <h3 className="text-lg font-semibold text-[var(--brand-purple)] mb-2">
                {item.title}
              </h3>

              {/* DESC */}
              <p className="text-sm text-gray-600 leading-relaxed">
                {item.desc}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Section #5 */}
      <section
        aria-labelledby="process-heading"
        className="w-full bg-[var(--brand-black)] border-t border-white/10 py-16 px-6 md:px-12 lg:px-20 relative overflow-hidden"
      >
        {/* ===== HEADER ===== */}
        <div className="max-w-6xl mx-auto mb-10">
          <h2
            id="process-heading"
            className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[var(--brand-purple)] mb-3"
          >
            How Our Brand Identity Design Company Works for You
          </h2>

          <p className="text-gray-600 text-sm md:text-base max-w-3xl">
            Our approach blends creativity with strategy.
          </p>
        </div>

        {/* ===== PROCESS ===== */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map((item, index) => (
            <article
              key={index}
              className="bg-white/5 border border-gray-100 rounded-lg p-5 hover:shadow-md transition"
            >
              <div className="mb-3">{item.icon}</div>
              <h3 className="font-semibold text-[var(--brand-purple)] mb-1">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </article>
          ))}
        </div>

        {/* ===== IMAGE GRID ===== */}
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-16">
          {gridItems.map((item, index) => (
            <div
              key={index}
              className="aspect-[4/3] bg-white/5 flex items-center justify-center rounded-md"
            >
              {item.title}
            </div>
          ))}
        </div>

        {/* ===== STATS ===== */}
        <div className="max-w-5xl mx-auto text-center pt-8 mb-12">
          <p className="text-base italic text-blue-700 mb-8">
            The numbers say it all!
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 items-center">
            <div>
              <h3 className="text-3xl font-semibold text-white">17+</h3>
              <p className="text-gray-500 text-sm">Years of experience</p>
            </div>

            <div className="sm:border-x sm:border-white/20">
              <h3 className="text-3xl font-semibold text-white">10,000+</h3>
              <p className="text-gray-500 text-sm">Projects delivered</p>
            </div>

            <div>
              <h3 className="text-3xl font-semibold text-white">5,000+</h3>
              <p className="text-gray-500 text-sm">Satisfied clients</p>
            </div>
          </div>
        </div>
      </section>

      <BrandSection />

      <Testimonial />

      {/* Section # 7 */}
      <section
        aria-labelledby="faq-heading"
        className="w-full bg-[var(--brand-black)] border-t border-white/10 py-16 px-6 md:px-12 lg:px-20"
      >
        <div className="max-w-5xl mx-auto">
          {/* Heading */}
          <h2
            id="faq-heading"
            className="text-2xl md:text-3xl font-semibold text-[var(--brand-purple)] mb-8"
          >
            FAQ’s
          </h2>

          {/* FAQ List */}
          <div className="divide-y divide-gray-200">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <article key={index} className="py-5">
                  {/* Question */}
                  <button
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between text-left"
                  >
                    <h3 className="text-white text-base md:text-lg font-medium">
                      {faq.question}
                    </h3>

                    <span className="ml-4 text-blue-700">
                      {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                    </span>
                  </button>

                  {/* Answer */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      isOpen ? "max-h-40 mt-3" : "max-h-0"
                    }`}
                  >
                    <p className="text-gray-300 text-sm md:text-base pr-6">
                      {faq.answer}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section #8 */}
      <section className="w-full border-t border-purple-900">
        <div className="bg-gradient-to-r from-purple-900 to-black py-10 sm:py-12 md:py-14 px-4 sm:px-6 md:px-10 lg:px-16">
          <div className="max-w-7xl mx-auto">
            <p className="text-sm text-white/80 font-bold mb-3">Contact Us</p>

            <h2 className="text-lg sm:text-xl md:text-3xl font-semibold italic mb-6 leading-snug text-white">
              We&apos;re easy to talk to. Explore how we can work together!
            </h2>

            <div className="space-y-3 text-sm sm:text-base md:text-lg text-gray-300">
              <p>
                <a
                  href="mailto:hello@velocitindia.com"
                  className="underline hover:text-yellow-400 transition"
                >
                  hello@velocitindia.com
                </a>
              </p>

              <p className="text-xs opacity-70">Or</p>

              <p>
                <a
                  href="tel:+918956437437"
                  className="hover:text-yellow-400 transition"
                >
                  +91 8956 437 437
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="fixed right-0 top-2/4 -translate-y-1/2 z-50">
        <Link
          href={CONTACT}
          className="bg-gradient-to-b from-yellow-400 to-orange-500 text-black text-xs md:text-sm font-semibold tracking-wide px-2 py-3 rounded-l-md shadow-md hover:opacity-90 transition writing-mode-vertical"
        >
          CONTACT
        </Link>
      </div>
    </>
  );
}
