"use client";

export default function CommunicationMegaMenu() {
  return (
    <div className="absolute left-1/2 -translate-x-1/2 top-full mt-6 w-[850px] bg-[#0f0f0f] border border-purple-900 rounded-xl shadow-xl p-10 grid grid-cols-2 gap-10">
      <div>
        <h3 className="text-2xl font-semibold text-purple-400 mb-4">
          Our Portfolio – Where ideas come to life!
        </h3>

        <p className="text-gray-400 text-sm">
          Every brand has unique goals and needs. Our services amplify your
          brand and ensure your message reaches the audience.
        </p>

        <a href="/contact" className="mt-6 inline-block text-yellow-400">
          Contact Us
        </a>
      </div>

      <div className="space-y-4">
        <div>
          <h4 className="font-semibold">Brand Identity</h4>
          <p className="text-sm text-gray-400">
            Craft compelling brand stories.
          </p>
        </div>

        <div>
          <h4 className="font-semibold">Marketing Communication</h4>
          <p className="text-sm text-gray-400">
            Shape narratives that drive success.
          </p>
        </div>

        <div>
          <h4 className="font-semibold">Annual Reporting</h4>
          <p className="text-sm text-gray-400">
            Build trust with impactful communication.
          </p>
        </div>

        <div>
          <h4 className="font-semibold">Website & UI/UX</h4>
          <p className="text-sm text-gray-400">Elevate digital experiences.</p>
        </div>
      </div>
    </div>
  );
}
