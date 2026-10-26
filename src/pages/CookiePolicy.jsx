import React from 'react';

const CookiePolicy = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Header */}
      <section className="relative pt-12 pb-10 lg:pt-16 lg:pb-12 bg-gradient-to-b from-indigo-50/50 via-slate-50 to-white overflow-hidden border-b border-slate-100">
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-indigo-200/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 -left-20 w-96 h-96 bg-violet-200/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-indigo-100 text-indigo-700 mb-5">
            <span className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse" />
            <span>Transparency & Compliance</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-black tracking-tight leading-[1.15] mb-4" style={{ color: '#000000' }}>
            Cookie Policy
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
              <h2 className="text-xl font-bold text-gray-900 mb-3">1. What Are Cookies?</h2>
              <p className="text-gray-600 mb-0">
                Cookies are compact text files stored on your computer, tablet, or smartphone when you visit a website. They enable the website to remember your actions, currency preferences, and design inquiries over time, enhancing your overall browsing speed and experience.
              </p>
            </div>

            {/* Section 2 */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-gray-900">2. Categories of Cookies We Use</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                
                <div className="border border-slate-200 rounded-xl p-5 bg-white shadow-2xs">
                  <h3 className="font-bold text-gray-900 text-base mb-2">Essential & Functional</h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-0">
                    Required for core website operations, navigation routing, security authentication, and remembering your currency selection (INR / USD).
                  </p>
                </div>

                <div className="border border-slate-200 rounded-xl p-5 bg-white shadow-2xs">
                  <h3 className="font-bold text-gray-900 text-base mb-2">Performance & Analytics</h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-0">
                    Helps us aggregate anonymous visitor traffic to optimize page speed, identify broken links, and refine our portfolio user experience.
                  </p>
                </div>

                <div className="border border-slate-200 rounded-xl p-5 bg-white shadow-2xs">
                  <h3 className="font-bold text-gray-900 text-base mb-2">Payment Security Cookies</h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-0">
                    Used by our secure checkout integration (Razorpay) to verify payment session integrity and prevent fraudulent checkout attempts.
                  </p>
                </div>

                <div className="border border-slate-200 rounded-xl p-5 bg-white shadow-2xs">
                  <h3 className="font-bold text-gray-900 text-base mb-2">Preference Memory</h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-0">
                    Remembers your recently inspected package tiers and inquiry preferences so you don't need to re-enter them during your visit.
                  </p>
                </div>

              </div>
            </div>

            {/* Section 3 */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-gray-900">3. Managing & Disabling Cookies</h2>
              <p className="text-gray-600">
                You can easily control, block, or delete cookies through your web browser's privacy settings (Chrome, Safari, Firefox, Edge). Please note that disabling essential cookies may impact certain interactive features such as the currency selector or payment modal.
              </p>
            </div>

            {/* Section 4 */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-gray-900">4. Updates to This Cookie Policy</h2>
              <p className="text-gray-600">
                We may periodically update this Cookie Policy to reflect changes in web technologies or legal standards. Any revisions will be published here with an updated "Last Updated" timestamp.
              </p>
            </div>



          </div>
        </div>
      </section>
    </div>
  );
};

export default CookiePolicy;
