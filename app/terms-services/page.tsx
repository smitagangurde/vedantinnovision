import { Link } from "lucide-react";
import { CONTACT } from "../const/routes.const";

export default function Terms() {
  return (
    <main>
      <section className="bg-gradient-to-b from-gray-300 via-gray-100 to-white text-black py-12 sm:py-14 md:py-16 lg:py-20 px-4 sm:px-6 md:px-10 lg:px-16">
        <div className="max-w-5xl mx-auto">
          {/* Heading */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-purple-700 mb-6">
            Terms and Services
          </h1>

          {/* Intro */}
          <p className="text-black text-sm sm:text-base leading-relaxed mb-6 max-w-3xl">
            At Vedant Innnovision Brand Consultants, safeguarding the privacy of our
            website visitors and clients is our top priority. This Privacy
            Policy elucidates the types of personal information we collect and
            how we employ it.
          </p>

          {/* Section Title */}
          <h2 className="text-xl sm:text-2xl font-semibold text-purple-700 mb-4">
            Information Collection
          </h2>

          {/* Content */}
          <p className="text-black text-sm sm:text-base leading-relaxed max-w-3xl mb-8">
            During your visit to our website, you may willingly provide us with
            two forms of information: personal information that you consciously
            disclose on an individual basis, and website usage information,
            which is gathered on an aggregated basis as you and others navigate
            our site.
          </p>

          <h2 className="text-xl sm:text-2xl font-semibold text-purple-700 mb-4 mt-10">
            Voluntary Disclosure of Personal Information
          </h2>

          {/* Content */}
          <p className="text-black text-sm sm:text-base leading-relaxed max-w-3xl mb-8">
            We may gather personally identifiable information from you through
            various means, such as online forms for choosing our services, and
            other instances where you are invited to provide such details
            voluntarily.
          </p>

          <h2 className="text-xl sm:text-2xl font-semibold text-purple-700 mb-4 mt-10">
            Utilization of Information
          </h2>

          {/* Content */}
          <p className="text-black text-sm sm:text-base leading-relaxed max-w-3xl mb-2">
            We do not share this information with external parties, except as
            required to complete the form.
          </p>

          <p className="text-black text-sm sm:text-base leading-relaxed max-w-3xl mb-8">
            Non-identifying and aggregated information is utilized to refine the
            design of our website and to share insights with advertisers. For
            instance, we may inform an advertiser about the number of visitors
            to a specific section of our website, without revealing any
            information that could identify individuals.
          </p>

          <h2 className="text-xl sm:text-2xl font-semibold text-purple-700 mb-4 mt-10">
            Data Security Assurance
          </h2>

          {/* Content */}
          <p className="text-black text-sm sm:text-base leading-relaxed max-w-3xl mb-8">
            To thwart unauthorized access, maintain data accuracy, and ensure
            the appropriate use of information, we have implemented suitable
            physical, electronic, and managerial measures to safeguard and
            protect the information collected online.
          </p>
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
    </main>
  );
}
