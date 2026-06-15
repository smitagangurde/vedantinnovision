import Image from "next/image";
import Link from "next/link";
import { Portfolio } from "../data/Portfolio";

export default function PortfolioSection() {
  return (
    <section
      style={{
        background:
          "linear-gradient(to bottom, var(--color-bg-section-from), var(--color-bg-section-via), var(--color-bg-section-to))",
        paddingTop: "var(--section-py-base)",
        paddingBottom: "var(--section-py-base)",
        paddingLeft: "var(--section-px-sm)",
        paddingRight: "var(--section-px-sm)",
      }}
      className="w-full lg:px-16"
    >
      <div style={{ maxWidth: "var(--content-max-width)" }} className="mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Portfolio.map((item, index) => (
            <Link
              key={index}
              href={`/brand-communication/website-uiux/${item.slug}`}
              className="group block"
            >
              <div className="relative w-full aspect-[4/3] overflow-hidden rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                <Image
                  src={item.images[0]}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  priority
                />
                {/* Dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />

                {/* Title overlay */}
                <p
                  style={{
                    color: "var(--color-cpa-primary-text)",
                    fontSize: "var(--text-body-base)",
                    fontWeight: "var(--font-weight-heading)",
                  }}
                  className="absolute bottom-3 left-3 right-3 leading-snug z-20"
                >
                  {item.title}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}