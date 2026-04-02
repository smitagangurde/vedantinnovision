import { ARCompilance, feature } from "../data/ARCompilance";

export default function ARCompilanceSection() {
  return (
    <section className="w-full bg-gradient-to-b from-gray-300 via-gray-100 to-white text-black py-12 md:py-16 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
        {/* ===== HEADING ===== */}
        <h2 className="text-center text-xl md:text-2xl font-semibold text-purple-700 mb-10">
          Range of Compliance Report Services for Every Business Need
        </h2>

        {/* ===== CARDS ===== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {ARCompilance.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-black/10 rounded-xl p-6 shadow-sm hover:shadow-md hover:border-purple-400 transition"
            >
              <div className="text-3xl mb-4 text-purple-700">{item.icon}</div>

              <h3 className="text-sm md:text-base font-semibold text-black mb-2">
                {item.title}
              </h3>

              <p className="text-sm text-black leading-relaxed mb-4">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* ===== WHY SECTION ===== */}
        <div className="max-w-6xl mx-auto text-left">
          <h3 className="text-lg md:text-xl text-center font-semibold text-purple-700 mb-6">
            Why Choose Vedant Innovision India as Your Integrated/ Annual Report
            Design Partner
          </h3>

          <p className="text-sm text-black mb-4 leading-relaxed">
            As a leading name in corporate communications, Vedant Innovision
            India transforms complex data into engaging, visually compelling
            narratives that truly resonate with stakeholders. We combine
            strategic storytelling, thoughtful design, and interactive elements
            to create reports that are not just informative, but memorable and
            impactful.
          </p>

          <p className="text-sm text-black mb-4 leading-relaxed">
            Our expertise spans integrated annual report design, corporate
            sustainability report design, and ESG compliance report design,
            enabling you to meet evolving disclosure standards and rising
            stakeholder expectations. Whether you require sustainability
            reporting, ESG reporting, or integrated reporting services, we craft
            every report to highlight your achievements while authentically
            reflecting your brand’s essence—and even help you SPSS Auswerten
            lassen for data-driven insights.
          </p>

          <p className="text-sm text-black mb-6 leading-relaxed">
            From eye-catching infographics to immersive digital experiences, we
            go beyond design to deliver powerful communication tools that
            elevate your message and strengthen your corporate reputation.
          </p>

          <p className="text-sm text-black mb-6 leading-relaxed">
            At Vedant Innovision India, we don’t just create reports—we curate a
            complete stakeholder experience. From engaging websites or
            microsites that provide seamless access, to professionally designed
            stakeholder presentations that deliver impact, we ensure every touch
            point reflects your brand’s excellence. Our comprehensive investor
            communication dockets support press releases and disclosures with
            clarity, while our achievement highlight videos bring your corporate
            journey to life. We bring your numbers to life, tell your story with
            purpose, and position your annual report as a benchmark for
            excellence in your industry.
          </p>

          {/* ===== SUB HEADING ===== */}
          <h4 className="text-sm md:text-base font-semibold text-yellow-500 mb-4">
            An Annual Report Design Agency That Crafts with Purpose
          </h4>

          <p className="text-sm text-black mb-8">
            We don’t just design reports; we go the extra mile by creating:
          </p>

          {/* ===== FEATURES ===== */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-left">
            {feature.map((item, i) => (
              <p key={i} className="text-sm text-purple-700">
                {item}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
