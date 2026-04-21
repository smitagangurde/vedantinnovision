import Link from "next/link";
import { CONTACT } from "../const/routes.const";

export default function PrivacyPolicy() {
  return (
    <main>
      <section
        style={{
          background:
            "linear-gradient(to bottom, var(--color-bg-section-from), var(--color-bg-section-via), var(--color-bg-section-to))",
          color: "var(--color-text-body)",
        }}
        className="w-full py-12 sm:py-14 md:py-16 lg:py-20 px-4 sm:px-6 md:px-10 lg:px-16"
      >
        <div className="max-w-5xl mx-auto">
          {/* Heading */}
          <h1
            style={{ color: "var(--color-brand-primary)" }}
            className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6"
          >
            Privacy Policy
          </h1>

          {/* Intro */}
          <p
            style={{ color: "var(--color-text-body)" }}
            className="text-sm sm:text-base leading-relaxed mb-6 max-w-3xl"
          >
            We value the trust you place in us. That’s why we insist upon the
            highest standards for secure transactions and customer information
            privacy. Please read the following statement to learn about our
            information gathering and dissemination practices.
          </p>

          {/* Note */}
          <div className="mb-6">
            <p className="font-semibold mb-2">Note:</p>
            <p
              style={{ color: "var(--color-text-body)" }}
              className="text-sm sm:text-base leading-relaxed max-w-3xl"
            >
              Our privacy policy is subject to change at any time without
              notice. To make sure you are aware of any changes, please review
              this policy periodically.
            </p>
          </div>

          {/* Consent */}
          <div
            style={{ color: "var(--color-text-body)" }}
            className="space-y-4 text-sm sm:text-base leading-relaxed mb-10 max-w-3xl"
          >
            <p>
              By visiting this Website, you agree to be bound by the terms and
              conditions of this Privacy Policy. If you do not agree, please do
              not use or access our Website.
            </p>

            <p>
              By mere use of the Website, you specifically consent to our use
              and disclosure of your personal information in accordance with
              this Privacy Policy.
            </p>
          </div>

          {/* Section Title */}
          <h2
            style={{ color: "var(--color-brand-primary)" }}
            className="text-xl sm:text-2xl font-semibold mb-4"
          >
            1) Collection of Personally Identifiable Information
          </h2>

          {/* Content */}
          <p
            style={{ color: "var(--color-text-body)" }}
            className="text-sm sm:text-base leading-relaxed max-w-3xl mb-8"
          >
            When you use our Website, we collect and store your personal
            information which is provided by you from time to time. Our primary
            goal in doing so is to provide you a safe, efficient, smooth and
            customized experience. This allows us to provide services and
            features that most likely meet your needs, and to customize our
            Website to make your experience safer and easier. More importantly,
            while doing so we collect personal information from you that we
            consider necessary for achieving this purpose.
          </p>

          <p
            style={{ color: "var(--color-text-body)" }}
            className="text-sm sm:text-base leading-relaxed max-w-3xl mb-8"
          >
            In general, you can browse the Website without telling us who you
            are or revealing any personal information about yourself. Once you
            give us your personal information, you are not anonymous to us.
            Where possible, we indicate which fields are required and which
            fields are optional. You always have the option to not provide
            information by choosing not to use a particular service or feature
            on the Website. We may automatically track certain information about
            you based upon your behaviour on our Website. We use this
            information to do internal research on our users’ demographics,
            interests, and behaviour to better understand, protect and serve our
            users. This information is compiled and analysed on an aggregated
            basis. This information may include the URL that you just came from
            (whether this URL is on our Website or not), which URL you next go
            to (whether this URL is on our Website or not), your computer
            browser information, and your IP address
          </p>

          <p
            style={{ color: "var(--color-text-body)" }}
            className="text-sm sm:text-base leading-relaxed max-w-3xl mb-8"
          >
            We use data collection devices such as “cookies” on certain pages of
            the Website to help analyse our web page flow, measure promotional
            effectiveness, and promote trust and safety. “Cookies” are small
            files placed on your hard drive that assist us in providing our
            services. We offer certain features that are only available through
            the use of a “cookie”.
          </p>

          {/* Section Title */}
          <h2
            style={{ color: "var(--color-brand-primary)" }}
            className="text-xl sm:text-2xl font-semibold mb-4 mt-10"
          >
            2) Use of Demographic / Profile Data / Your Information
          </h2>

          <p
            style={{ color: "var(--color-text-body)" }}
            className="text-sm sm:text-base leading-relaxed max-w-3xl mb-8"
          >
            We use personal information to provide the services you request. To
            the extent we use your personal information to market to you, we
            will provide you the ability to opt-out of such uses. We use your
            personal information to resolve disputes; troubleshoot problems;
            help promote a safe service; collect money; measure consumer
            interest in our products and services, inform you about online and
            offline offers, products, services, and updates; customize your
            experience; detect and protect us against error, fraud and other
            criminal activity; enforce our terms and conditions; and as
            otherwise described to you at the time of collection.
          </p>

          <p
            style={{ color: "var(--color-text-body)" }}
            className="text-sm sm:text-base leading-relaxed max-w-3xl mb-8"
          >
            In our efforts to continually improve our product and service
            offerings, we collect and analyse demographic and profile data about
            our users’ activity on our Website.
          </p>

          <p
            style={{ color: "var(--color-text-body)" }}
            className="text-sm sm:text-base leading-relaxed max-w-3xl mb-8"
          >
            We identify and use your IP address to help diagnose problems with
            our server, and to administer our Website. Your IP address is also
            used to help identify you and to gather broad demographic
            information. We will occasionally ask you to complete optional
            online surveys. These surveys may ask you for contact information
            and demographic information (like zip code, age, or income level).
            We use this data to tailor your experience at our Website, providing
            you with content that we think you might be interested in and to
            display content according to your preferences.
          </p>

          {/* <p
            style={{ color: "var(--color-text-body)" }}
            className="text-sm sm:text-base leading-relaxed max-w-3xl"
          >
            We will occasionally ask you to complete optional online surveys...
          </p> */}
        </div>
      </section>

      {/* FIXED CONTACT BUTTON (unchanged) */}
      <div className="fixed right-0 top-2/4 -translate-y-1/2 z-50">
        <Link
          href={CONTACT}
          style={{
            background:
              "linear-gradient(to bottom, var(--color-contact-btn-from), var(--color-contact-btn-to))",
            color: "var(--color-contact-btn-text)",
            fontSize: "var(--text-contact-btn-base)",
            letterSpacing: "var(--tracking-contact-btn)",
          }}
          className="font-semibold md:text-sm px-2 py-3 rounded-l-md shadow-md hover:opacity-90 transition writing-mode-vertical"
        >
          CONTACT
        </Link>
      </div>
    </main>
  );
}
