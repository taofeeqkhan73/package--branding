import React from 'react';

const TermsOfService = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Header */}
      <section className="relative pt-12 pb-10 lg:pt-16 lg:pb-12 bg-gradient-to-b from-indigo-50/50 via-slate-50 to-white overflow-hidden border-b border-slate-100">
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-indigo-200/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 -left-20 w-96 h-96 bg-violet-200/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-indigo-100 text-indigo-700 mb-5">
            <span className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse" />
            <span>Client Service Agreement</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-black tracking-tight leading-[1.15] mb-4" style={{ color: '#000000' }}>
            Terms of Service
          </h1>

          <p className="text-sm sm:text-base text-gray-500 font-medium">
            Effective Date: January 1, 2025 • Last Updated: October 2026
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-slate max-w-none space-y-10 text-gray-700 leading-relaxed text-sm sm:text-base">
            
            {/* Agreement Intro */}
            <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 sm:p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-3">1. Agreement to Terms</h2>
              <p className="text-gray-600 mb-0">
                These Terms of Service constitute a legally binding agreement between you (the "Client") and <strong>Package Branding Studio Inc.</strong> ("Agency"). By accessing our website, purchasing design packages, or commissioning branding projects, you agree to comply with and be bound by these Terms.
              </p>
            </div>

            {/* Section 2 */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-gray-900">2. Scope of Branding & Packaging Services</h2>
              <p>
                The Agency provides bespoke brand identity design, structural 3D packaging engineering, digital marketing suites, SEO optimization, and physical dieline specifications according to the features described in each purchased tier (Silver, Gold, Platinum, or custom service packages).
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li>All deliverables will be presented as digital proofing files (PDF, AI, 3D Renders, Dieline Blueprints) and vector master source files upon completion.</li>
                <li>Physical packaging sample mockups and industrial print production liaisons are provided in accordance with the specific package specifications selected.</li>
              </ul>
            </div>

            {/* Section 3 */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-gray-900">3. Intellectual Property & Commercial Rights</h2>
              <p className="text-gray-600">
                Upon final invoice settlement and project completion, the Agency transfers <strong>100% full commercial ownership and exclusive copyright</strong> of the final approved logo mark, packaging artwork, and brand guide to the Client. The Agency reserves the non-exclusive right to showcase completed works in our creative portfolio, awards submissions, and case studies unless a formal NDA is executed.
              </p>
            </div>

            {/* Section 4 */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-gray-900">4. Payment Terms & Invoicing</h2>
              <p className="text-gray-600">
                Plan purchases made online require payment initiation at checkout via our authorized payment partner (Razorpay). Prices listed on the website are exclusive of applicable local statutory taxes unless explicitly stated. All fees are earned upon commencement of work due to the customized nature of creative agency production.
              </p>
            </div>

            {/* Section 5 */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-gray-900">5. Revisions & Approval Milestones</h2>
              <p className="text-gray-600">
                Each package tier includes designated revision rounds as specified in the plan breakdown. Revisions allow modifications to design concepts within the agreed creative brief. Substantive scope changes or complete re-briefs outside the initial agreement will be quoted separately as supplementary add-ons.
              </p>
            </div>

            {/* Section 6 */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-gray-900">6. Limitation of Liability</h2>
              <p className="text-gray-600">
                While our technical studio verifies packaging dielines and bleed margins to industrial standards, the Client is responsible for final proofreading of all text, barcodes, ingredients, and regulatory compliance notices prior to bulk factory production.
              </p>
            </div>



          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsOfService;
