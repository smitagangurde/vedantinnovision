import Image from "next/image";
import { Portfolio } from "../data/Portfolio";

export default function PortfolioSection() {
  return (
    <section
      style={{
        background:
          "linear-gradient(to bottom, var(--color-bg-section-from), var(--color-bg-section-via), var(--color-bg-section-to))",
        color: "var(--color-text-body)",
        paddingTop: "var(--section-py-base)",
        paddingBottom: "var(--section-py-base)",
        paddingLeft: "var(--section-px-sm)",
        paddingRight: "var(--section-px-sm)",
      }}
      className="w-full lg:px-16"
    >
      <div style={{ maxWidth: "var(--content-max-width)" }} className="mx-auto">
        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Portfolio.map((item, index) => (
            <article
              key={index}
              className="relative group overflow-hidden rounded-lg border border-gray-300 bg-white hover:bg-gray-100 transition duration-300"
            >
              {/* Image */}
              <div className="relative w-full h-64">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-70 group-hover:opacity-80 transition duration-300" />

              {/* Label */}
              <div className="absolute bottom-0 left-0 w-full px-4 py-3">
                <p className="text-white text-sm md:text-base font-medium">
                  {item.title}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
