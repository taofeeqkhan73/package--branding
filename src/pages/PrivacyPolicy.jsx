import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Header */}
      <section className="relative pt-12 pb-10 lg:pt-16 lg:pb-12 bg-gradient-to-b from-indigo-50/50 via-slate-50 to-white overflow-hidden border-b border-slate-100">
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-indigo-200/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 -left-20 w-96 h-96 bg-violet-200/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-indigo-100 text-indigo-700 mb-5">
            <span className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse" />
            <span>Legal & Data Privacy</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-black tracking-tight leading-[1.15] mb-4" style={{ color: '#000000' }}>
            Privacy Policy
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
            
            {/* Intro Card */}
            <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 sm:p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-3">1. Commitment to Your Privacy</h2>
              <p className="text-gray-600 mb-0">
                At <strong>Package Branding</strong> ("we," "our," or "us"), we respect your privacy and are committed to protecting the personal information you share with us through our website, design services, client portals, and payment gateways. This Privacy Policy details how we collect, use, disclose, and safeguard your data.
              </p>
            </div>

            {/* Section 2 */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-gray-900">2. Information We Collect</h2>
              <p>When you interact with our studio, request package quotes, or purchase design suites, we may collect:</p>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li><strong>Personal Identity Data:</strong> Full name, business email address, phone number, and physical billing address.</li>
                <li><strong>Company & Project Data:</strong> Brand names, industry sector, packaging specifications, logos, and custom project briefs.</li>
                <li><strong>Payment Transaction Data:</strong> Invoices, transaction identifiers, and amounts processed securely via our payment gateway (Razorpay). We do not store raw credit card numbers or banking passwords on our servers.</li>
                <li><strong>Technical & Usage Data:</strong> IP address, browser type, device information, operating system, and pages viewed.</li>
              </ul>
            </div>

            {/* Section 3 */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-gray-900">3. How We Use Your Information</h2>
              <p>We use your information strictly for legitimate commercial and design operational purposes, including:</p>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li>Designing, engineering, and manufacturing customized branding and packaging deliverables.</li>
                <li>Processing transactions, issuing official receipts, and verifying proof of purchase.</li>
                <li>Sending essential project kickoff emails, design revisions, and milestone updates.</li>
                <li>Complying with statutory tax, invoicing, and corporate legal obligations.</li>
                <li>Improving website performance, security, and client onboarding experience.</li>
              </ul>
            </div>

            {/* Section 4 */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-gray-900">4. Payment Security & Third-Party Processors</h2>
              <p className="text-gray-600">
                All online transactions and plan purchases are processed through PCI-DSS Level 1 certified payment partners (including Razorpay). Transactions utilize 256-bit SSL/TLS encryption. Your sensitive financial data is tokenized directly by the payment processor and never touches or resides on our local database.
              </p>
            </div>

            {/* Section 5 */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-gray-900">5. Data Retention & Client Rights</h2>
              <p className="text-gray-600">
                We retain client project assets and inquiry records for as long as necessary to provide ongoing support and copyright documentation. You maintain the right to access, update, or request the deletion of your personal contact data at any time by contacting our legal privacy team.
              </p>
            </div>



          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
