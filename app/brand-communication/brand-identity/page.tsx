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

const testimonials = [
  {
    text: "Amazing experience working with this team.",
    logo: "/logos/client1.png",
    name: "John Doe",
    role: "CEO, Company",
  },
  {
    text: "Highly professional and creative.",
    logo: "/logos/client2.png",
    name: "Jane Smith",
    role: "Marketing Head",
  },
  {
    text: "sjioejpoiageje redjaiuodfe.",
    logo: "/logos/client2.png",
    name: "Jane Smith",
    role: "Marketing Head",
  },
];

export default function BrandIdentitySection() {
  const [openIndex, setOpenIndex] = useState(3); // last one open by default

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const [tIndex, setTIndex] = useState(0);
  const t = testimonials[tIndex];
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
              <strong>10,000+ projects delivered</strong>, we help businesses
              cut through the noise with cohesive and impactful design.
            </p>

            <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-8">
              We transform your vision into a powerful brand identity that
              commands attention and builds trust instantly.
            </p>

            {/* CTA */}
            <Link
              href="/contact"
              className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-semibold px-6 py-2 rounded hover:opacity-90 transition"
            >
              Contact Us
            </Link>
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
        <div className="max-w-5xl mx-auto text-center border-t border-gray-200 pt-12 mb-16">
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

        {/* ===== TRUSTED BRANDS (MOVED BELOW STATS) ===== */}
        <div className="max-w-7xl mx-auto">
          <div className="max-w-7xl mx-auto">
            {/* Heading */}
            <h2 className="text-2xl md:text-3xl font-semibold text-[var(--brand-purple)] mb-4">
              Trusted by Leading Brands
            </h2>

            {/* Description */}
            <p className="text-gray-400 max-w-4xl text-sm md:text-base mb-10">
              Since 2008, we’ve been creative partners to 100+ global brands and
              Fortune 500 companies, delivering 10,000+ projects.
            </p>

            {/* Logos Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-6 border border-purple-900">
              {[
                "/Atlas Copco.jpg",
                "/Ferrero.jpg",
                "/Group Surya.jpg",
                "/Dan Foss.jpg",
                "/JSW Steel.jpg",
                "/Just Porta.jpg",
                "/Grass Roote.jpg",
                "/OP Mobility.jpg",
                "/WIKUS.jpg",
                "/Life Care.jpg",
                "/Atlas.jpg",
                "/Vastushaili.jpg",
              ].map((logo, i) => (
                <div
                  key={i}
                  className="flex items-center justify-center h-32 md:h-40 lg:h-44 p-4 border border-purple-900 bg-zinc-900 hover:border-yellow-400 transition duration-300"
                >
                  <Image
                    src={logo}
                    alt="brand logo"
                    width={200}
                    height={100}
                    className="object-contain w-full h-full max-h-20 md:max-h-28 opacity-80 hover:opacity-100 transition"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Section #6 */}
      <section className="bg-[var(--brand-black)] border-t border-white/10 py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold text-[var(--brand-purple)] italic mb-6">
            World’s leading brands have chosen us. Don’t miss the bus.
          </h2>

          <p className="text-[var(--brand-purple)] mb-6">Collaborate, today!</p>

          <p className="text-gray-300 text-lg mb-10">"{t.text}"</p>

          <div className="flex items-center gap-6">
            <Image src={t.logo} alt="" width={120} height={60} />

            {(t.name || t.role) && (
              <>
                <div className="w-px h-12 bg-white/20"></div>
                <div>
                  <h3 className="font-semibold">{t.name}</h3>
                  <p className="text-gray-500 italic">{t.role}</p>
                </div>
              </>
            )}
          </div>

          <div className="flex justify-center gap-3 mt-10">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setTIndex(i)}
                className={`w-3 h-3 rounded-full ${
                  i === tIndex ? "bg-[var(--brand-purple)]" : "bg-gray-400"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

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
      <section
        aria-labelledby="contact-heading"
        className="relative w-full py-16 px-6 md:px-12 lg:px-20 overflow-hidden"
        style={{
          background:
            "linear-gradient(90deg, #2f3f8f 0%, #1d4ed8 40%, #06b6d4 100%)",
        }}
      >
        <div className="max-w-6xl mx-auto">
          {/* HEADING */}
          <h2
            id="contact-heading"
            className="text-2xl md:text-4xl font-semibold italic mb-8 leading-snug"
          >
            We&apos;re easy to talk to. Explore how we can work together!
          </h2>

          {/* CONTACT INFO */}
          <div className="space-y-4 text-lg md:text-xl">
            <p>
              <a
                href="mailto:hello@velocitindia.com"
                className="underline hover:text-[var(--brand-gold)] transition"
              >
                Hello@VelocitIndia.com
              </a>
            </p>

            <p className="text-sm opacity-80">Or</p>

            <p>
              <a
                href="tel:+918956437437"
                className="hover:text-[var(--brand-gold)] transition"
              >
                +91 8956 437 437
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
