"use client";

export default function EmployerMegaMenu() {
  return (
    <div className="absolute left-1/2 -translate-x-1/2 top-full mt-6 w-[850px] bg-[#0f0f0f] border border-purple-900 rounded-xl shadow-xl p-10 grid grid-cols-2 gap-10">

      <div>
        <h3 className="text-2xl font-semibold text-purple-400 mb-4">
          Want to Step Inside Our Creative Universe?
        </h3>

        <p className="text-gray-400 text-sm">
          Whether it’s our latest creations or innovative solutions,
          we’re ready to unveil it all for you.
        </p>

        <a href="/contact" className="mt-6 inline-block text-yellow-400">
          Contact Us
        </a>
      </div>

      <div className="space-y-4">

        <div>
          <h4 className="font-semibold">Employer Branding</h4>
          <p className="text-sm text-gray-400">
            Strengthening your brand image to attract talent.
          </p>
        </div>

        <div>
          <h4 className="font-semibold">Office Branding</h4>
          <p className="text-sm text-gray-400">
            Workspaces reflecting your brand values.
          </p>
        </div>

        <div>
          <h4 className="font-semibold">Internal Communication</h4>
          <p className="text-sm text-gray-400">
            Empower your workforce with impactful communication.
          </p>
        </div>

        <div>
          <h4 className="font-semibold">Employer Brand Social Media</h4>
          <p className="text-sm text-gray-400">
            Showcase your culture and attract the right talent.
          </p>
        </div>

      </div>

    </div>
  );
}