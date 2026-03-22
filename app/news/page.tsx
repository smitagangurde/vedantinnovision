import Image from "next/image";

export default function AwardWinningMilestones() {
  return (
    <section className="bg-[#f3f3f3] py-12 md:py-16">
      <div className="mx-auto max-w-[1350px] px-4 sm:px-6 md:px-8 lg:px-10">
        {/* Heading */}
        <h2 className="mb-8 text-3xl font-bold italic text-[#2447A5] sm:text-4xl md:mb-10 md:text-5xl">
          Award-Winning Milestones
        </h2>

        {/* Cards Row */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Card 1 */}
          <div className="grid overflow-hidden bg-[#f7f7f7] md:grid-cols-2">
            {/* Text */}
            <div className="p-8 sm:p-10">
              <h3 className="text-5xl font-bold text-[#2447A5] sm:text-6xl">
                2025
              </h3>

              <h4 className="mt-4 text-3xl font-semibold leading-tight text-[#233f7a]">
                Most Renowned
                <br />
                Employer Branding
                <br />
                Agency
              </h4>

              <div className="my-4 h-[2px] w-12 bg-[#2d3d63]" />

              <p className="text-xl leading-10 text-[#506080]">
                Recognised for delivering high-impact branding solutions that
                transform organisational reputations and drive elite talent
                engagement. This award celebrates our passion for creating
                authentic brand experiences that inspire and retain the world’s
                top professionals.
              </p>
            </div>

            {/* Image */}
            <div className="relative min-h-[420px] bg-[#efefef]">
              <Image
                src="/award-left.png"
                alt="2025 award"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Card 2 */}
          <div className="grid overflow-hidden bg-[#f7f7f7] md:grid-cols-2">
            {/* Text */}
            <div className="p-8 sm:p-10">
              <h3 className="text-5xl font-bold text-[#2447A5] sm:text-6xl">
                2024
              </h3>

              <h4 className="mt-4 text-3xl font-semibold leading-tight text-[#233f7a]">
                The afaqs! Marketers’
                <br />
                Excellence Award
              </h4>

              <div className="my-4 h-[2px] w-12 bg-[#2d3d63]" />

              <p className="text-xl leading-10 text-[#506080]">
                Recognised for excellence in shaping powerful employer brands
                that drive measurable organisational growth. This award
                highlights the agency’s leadership in crafting strategic
                narratives that strengthen our clientele’s position and
                presence in the industry.
              </p>
            </div>

            {/* Image */}
            <div className="relative min-h-[420px] bg-[#efefef]">
              <Image
                src="/award-right.png"
                alt="2024 award"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}