import BrandSection from "@/app/component/BrandSection";
import ContactDiv from "@/app/component/ContactDiv";
import ICPortfolioSection from "@/app/component/InternalCommunication/ICPortfolioSection";
import Testimonial from "@/app/component/Testimonial";
import { CONTACT } from "@/app/const/routes.const";
import { ICPortfolio } from "@/app/data/InternalCommunication/ICPortfolio";
import Image from "next/image";
import Link from "next/link";

export default function InternalCommunication() {
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
              Corporate Communication Solutions
            </h1>

            <p className="text-sm sm:text-base text-black leading-relaxed">
              Effective communication is at the core of every successful
              organization. At Vedant Innovision, we help businesses streamline
              and strengthen their corporate communication—ensuring clarity,
              consistency, and alignment across all touchpoints.
            </p>

            <p className="mt-4 text-sm sm:text-base text-black leading-relaxed">
              We transform complex information into clear, engaging, and
              structured communication that supports your brand, improves
              internal alignment, and enhances overall organizational
              efficiency.
            </p>

            <p className="mt-4 text-sm sm:text-base text-black leading-relaxed">
              From internal communication systems to external brand messaging,
              we ensure your communication reflects your values, connects with
              your audience, and drives better understanding across teams and
              stakeholders.
            </p>
          </div>
        </div>
      </section>

      <ICPortfolioSection />

      <BrandSection />

      <Testimonial />

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
