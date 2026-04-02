import ARCompilanceSection from "@/app/component/ARCompilanceSection";
import AREdgeSection from "@/app/component/AREdgeSection";
import ARFaqsSection from "@/app/component/ARFaqsSection";
import ARreportSection from "@/app/component/ARreportSection";
import BrandSection from "@/app/component/BrandSection";
import ContactDiv from "@/app/component/ContactDiv";
import Testimonial from "@/app/component/Testimonial";
import { CONTACT } from "@/app/const/routes.const";
import { ARreport } from "@/app/data/ARreport";
import { FileText, BarChart3 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function AnnualReporting() {
  return (
    <main>
      <section className="w-full bg-gradient-to-b from-gray-300 via-gray-100 to-white text-black pt-12 pb-10 md:pt-14 md:pb-12 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* LEFT: Images */}
          <div className="relative flex justify-center md:justify-start">
            <div className="relative z-10">
              <Image
                src="/images/billboard.png"
                alt="Marketing Billboard"
                width={580}
                height={420}
                className="rounded-xl border border-black/10 shadow-lg opacity-90"
              />
            </div>
          </div>

          {/* RIGHT: Content */}
          <div className="max-w-xl">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-purple-700 leading-snug mb-5">
              Annual Report Design Agency
            </h1>

            <h2 className="text-lg sm:text-xl md:text-2xl font-medium text-black mb-5 leading-relaxed">
              Award-winning design for ESG, Sustainability, and Integrated
              Reports.
            </h2>

            <p className="text-sm sm:text-base text-black leading-relaxed mb-4">
              We help corporates, listed companies, and Fortune 500
              organizations build stakeholder trust through strategic
              storytelling, data-led design, and high-impact reporting.
            </p>

            <p className="text-sm sm:text-base text-black leading-relaxed">
              At Vedant Innovision India, we transform complex financial, ESG,
              and sustainability data into compelling narratives that clearly
              communicate performance, impact, and long-term strategy—across
              print and digital formats.
            </p>
          </div>
        </div>
      </section>

      <ARreportSection />

      <ARCompilanceSection />

      <section className="bg-gradient-to-r from-purple-900 via-gray-100 py-10 sm:py-12 md:py-14 px-4 sm:px-6 md:px-10 lg:px-16 text-black">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <h2 className="text-center text-lg sm:text-xl md:text-2xl font-semibold mb-10">
            Specialized Service Pillars
          </h2>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* LEFT CARD */}
            <div className="border border-black/10 rounded-xl p-6 md:p-8 bg-white/60 backdrop-blur-sm hover:border-yellow-400 transition">
              <div className="mb-4">
                <FileText className="w-8 h-8 text-purple-700" />
              </div>

              <h3 className="text-base md:text-lg font-semibold mb-2">
                Annual & Integrated Report Design Services
              </h3>

              <p className="text-sm text-black/70 mb-4 leading-relaxed">
                We design impactful annual and integrated reports that clearly
                communicate your organization’s financial performance, strategic
                priorities, and long-term value creation.
              </p>

              <p className="text-sm font-semibold mb-2">What we deliver:</p>

              <ul className="text-sm text-black/70 space-y-2 list-disc pl-5">
                <li>
                  Annual Report Design Services with strategic storytelling
                </li>
                <li>
                  Integrated Reports combining financial and non-financial
                  insights
                </li>
                <li>Clear articulation of strategy, governance, and risk</li>
                <li>
                  Visually compelling layouts, infographics, and summaries
                </li>
              </ul>

              <p className="text-sm text-black/60 mt-4">
                Designed to be informative, engaging, and aligned with
                stakeholder expectations.
              </p>
            </div>

            {/* RIGHT CARD */}
            <div className="border border-black/10 rounded-xl p-6 md:p-8 bg-white/60 backdrop-blur-sm hover:border-yellow-400 transition">
              <div className="mb-4">
                <BarChart3 className="w-8 h-8 text-purple-700" />
              </div>

              <h3 className="text-base md:text-lg font-semibold mb-2">
                ESG & Sustainability Reporting Design
              </h3>

              <p className="text-sm text-black/70 mb-4 leading-relaxed">
                We bring your sustainability and ESG journey to life through
                data-driven reporting aligned with globally recognized
                frameworks.
              </p>

              <p className="text-sm font-semibold mb-2">
                Our ESG capabilities include:
              </p>

              <ul className="text-sm text-black/70 space-y-2 list-disc pl-5">
                <li>
                  ESG reporting for environmental, social, and governance
                  performance
                </li>
                <li>GRI, SASB aligned sustainability reporting</li>
                <li>BRSR-aligned communication for transparency</li>
                <li>
                  Investor-focused narratives with strong data visualization
                </li>
              </ul>

              <p className="text-sm text-black/60 mt-4">
                Crafted to enhance trust, transparency, and long-term
                credibility.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-[var(--brand-black)] ">
        <div className="relative w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[550px]">
          {/* Background Image */}
          <Image
            src="/images/annual-report-banner.jpg" // replace with your image
            alt="Annual Report Designs"
            fill
            priority
            className="object-cover"
          />

          {/* Optional Overlay (for better contrast) */}
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
      </section>
      <AREdgeSection />

      <BrandSection />

      <Testimonial />

      <ARFaqsSection />

      <ContactDiv />

      <div className="fixed right-0 top-2/4 -translate-y-1/2 z-50">
        <Link
          href={CONTACT}
          className="bg-gradient-to-b from-yellow-400 to-orange-500 text-black text-xs md:text-sm font-semibold tracking-wide px-2 py-3 rounded-l-md shadow-md hover:opacity-90 transition writing-mode-vertical"
        >
          CONTACT
        </Link>
      </div>
    </main>
  );
}
