import Image from "next/image";
import { brands } from "../data/brands";

export default function BrandSection() {
  return (
    <section
      className="
        w-full
        bg-gradient-to-b
        from-[var(--color-bg-hero-from)]
        via-[var(--color-bg-hero-via)]
        to-[var(--color-bg-hero-to)]
        text-[var(--color-text-body)]
        py-16
        px-[var(--section-px-sm)]
        lg:px-16
      "
      aria-labelledby="brands-heading"
    >
      {/* Stats */}
      <div className="max-w-5xl mx-auto text-center mb-28">
        <p
          className="
            italic mb-8
            text-[var(--color-brand-primary)]
            text-[var(--text-body-base)]
          "
        >
          The numbers say it all!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 items-center">
          <div>
            <h3
              className="
                text-[var(--color-text-body)]
                text-[var(--text-heading-xl)]
                font-[var(--font-weight-heading)]
              "
            >
              4+
            </h3>
            <p className="text-[var(--text-body-sm)]">
              Years of experience
            </p>
          </div>

          <div className="sm:border-x border-[var(--color-border-image)]">
            <h3
              className="
                text-[var(--color-text-body)]
                text-[var(--text-heading-xl)]
                font-[var(--font-weight-heading)]
              "
            >
              800+
            </h3>
            <p className="text-[var(--text-body-sm)]">
              Projects delivered
            </p>
          </div>

          <div>
            <h3
              className="
                text-[var(--color-text-body)]
                text-[var(--text-heading-xl)]
                font-[var(--font-weight-heading)]
              "
            >
              40+
            </h3>
            <p className="text-[var(--text-body-sm)]">
              Satisfied clients
            </p>
          </div>
        </div>
      </div>

      {/* Brands */}
      <div className="mx-auto max-w-[var(--content-max-width)]">
        <h2
          id="brands-heading"
          className="
            mb-4
            text-[var(--color-brand-primary)]
            text-[var(--text-heading-xl)]
            font-[var(--font-weight-heading)]
            sm:text-3xl
            md:text-4xl
          "
        >
          Chosen by Brands That Build
        </h2>

        <p
          className="
            mb-12
            text-[var(--color-text-body)]
            text-[var(--text-body-sm)]
            sm:text-base
          "
        >
          Since 2021, Vedant Innovision has delivered 800+ projects for 40+
          brands across branding, performance marketing, visual content,
          material supply, and IT solutions — focused on scalable execution and
          measurable ROI.
        </p>

        <div
          className="
            grid
            grid-cols-2
            sm:grid-cols-3
            md:grid-cols-4
            lg:grid-cols-6
            border
            border-[var(--color-border-image)]
          "
        >
          {brands.map((brand) => (
            <div
              key={brand.id}
              className="
                brand-card
                flex
                items-center
                justify-center
                p-4
                sm:p-6
                border
                border-[var(--color-border-image)]
                bg-white
                transition
                duration-300
              "
            >
              <div className="relative w-[180px] h-[80px] sm:w-[200px] sm:h-[90px]">
                <Image
                  src={brand.logo}
                  alt={`${brand.name} logo`}
                  fill
                  className="object-contain scale-110 transition duration-300"
                  sizes="(max-width: 768px) 150px, 200px"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}