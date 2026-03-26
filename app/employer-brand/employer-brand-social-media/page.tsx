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
    <main className="bg-black text-white" role="main">
      {/* Hero */}
      <section className="w-full bg-[var(--brand-black)] text-white py-8 md:py-10 border-b border-purple-900">
        <div className="max-w-7xl mx-auto grid items-center gap-10 px-4 sm:px-6 md:px-10 md:grid-cols-2">
          {/* Image */}
          <div className="flex justify-center md:justify-start">
            <Image
              src="/uiux.png"
              alt="Website and UI UX design"
              width={900}
              height={650}
              className="h-auto w-full max-w-[650px] object-contain"
              priority
            />
          </div>

          {/* Content */}
          <div className="max-w-xl">
            <h1 className="mb-4 text-2xl sm:text-3xl md:text-4xl font-semibold text-[var(--brand-purple)] leading-snug">
              Employer Branding Social Media Services
            </h1>

            <p className="text-sm sm:text-base text-white/70 leading-relaxed">
              As a leading employer-branding & recruitment social media agency,
              Velocitta transforms workplace culture into high-impact content
              that attracts top talent, strengthens trust, and makes candidates
              choose your brand before competitors.
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
