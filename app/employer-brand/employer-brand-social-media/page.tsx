import BrandSection from "@/app/component/BrandSection";
import ContactDiv from "@/app/component/ContactDiv";
import EBSMPortfolioSection from "@/app/component/EBSocialMedia/EBSMPortfolioSection";
import ESBMRecruitmentSection from "@/app/component/EBSocialMedia/ESBMRecruitmentSection";
import SMFaqSection from "@/app/component/SocialMedia/SMFaqSection";
import Testimonial from "@/app/component/Testimonial";
import { CONTACT } from "@/app/const/routes.const";
import Image from "next/image";
import Link from "next/link";

export default function EmployerBrandSocialMedia() {
  return (
    <main>
      <section className="w-full bg-gradient-to-b from-gray-300 via-gray-100 to-white text-black py-8 md:py-10 border-b border-purple-200">
        <div className="max-w-7xl mx-auto grid items-center gap-10 px-4 sm:px-6 md:px-10 md:grid-cols-2">
          {/* Image */}
          <div className="flex justify-center md:justify-start">
            <Image
              src="/uiux.png"
              alt="Website and UI UX design"
              width={900}
              height={650}
              className="h-auto w-full max-w-[650px] object-contain opacity-90"
              priority
            />
          </div>

          {/* Content */}
          <div className="max-w-xl">
            <h1 className="mb-4 text-2xl sm:text-3xl md:text-4xl font-semibold text-purple-700 leading-snug">
              Brand Promotion & Outreach Services
            </h1>

            <p className="text-sm sm:text-base text-black leading-relaxed">
              At Vedant Innovision, we help businesses amplify their brand
              presence through strategic promotion and consistent outreach. Our
              approach focuses on building visibility, strengthening brand
              perception, and creating meaningful engagement across digital
              platforms.
            </p>

            <p className="text-sm sm:text-base text-black leading-relaxed">
              We combine content, communication, and platform strategy to ensure
              your brand reaches the right audience with clarity and
              impact—driving awareness, trust, and long-term growth.
            </p>
          </div>
        </div>
      </section>

      <EBSMPortfolioSection />

      <ESBMRecruitmentSection />

      <BrandSection />

      <Testimonial />

      <SMFaqSection />

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
