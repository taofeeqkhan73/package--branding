import React, { useState } from 'react';
import Button from '../components/Button';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    budget: '$15k - $30k (Growth Package)',
    timeline: 'Standard (4-6 Weeks)',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const budgetOptions = [
    '$5k - $15k (Starter Package)',
    '$15k - $30k (Growth Package)',
    '$30k - $60k (Enterprise Package)',
    '$60k+ (Custom Bespoke Suite)',
  ];

  const timelineOptions = [
    'Fast Track (2-3 Weeks)',
    'Standard (4-6 Weeks)',
    'Strategic Launch (2-3 Months)',
    'Flexible / Planning Phase',
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        budget: '$15k - $30k (Growth Package)',
        timeline: 'Standard (4-6 Weeks)',
        message: '',
      });
    }, 4500);
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Contact Page Hero Header */}
      <section className="relative pt-12 pb-10 lg:pt-16 lg:pb-12 bg-gradient-to-b from-indigo-50/50 via-slate-50 to-white overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-indigo-200/40 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 -left-20 w-96 h-96 bg-violet-200/30 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-indigo-100 text-indigo-700 mb-5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Get In Touch</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-black tracking-tight leading-[1.15] mb-5" style={{ color: '#000000' }}>
            Contact Our Studio & Global Packaging Teams
          </h1>

          <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-normal max-w-2xl mx-auto">
            Ready to bring your packaging vision to life? Visit our design headquarters or send us your project requirements below.
          </p>
        </div>
      </section>

      {/* Main 2-Column Section: Left Map & Right Form */}
      <section className="pb-24 lg:pb-32 bg-white relative overflow-hidden">
        {/* Ambient Glows */}
        <div className="absolute top-1/3 -right-24 w-[450px] h-[450px] bg-gradient-to-bl from-indigo-100/40 via-violet-100/30 to-transparent rounded-full blur-3xl -z-10 pointer-events-none" />
        <div className="absolute bottom-10 -left-24 w-[450px] h-[450px] bg-gradient-to-tr from-violet-100/40 via-pink-100/20 to-transparent rounded-full blur-3xl -z-10 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            
            {/* ========================================================= */}
            {/* LEFT SIDE: GOOGLE MAP & STUDIO CONTACT INFO               */}
            {/* ========================================================= */}
            <div className="lg:col-span-6 flex flex-col gap-6">
              
              {/* Left Column Heading & Brand Story */}
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-indigo-50 border border-indigo-100 text-indigo-700 mb-5 shadow-xs">
                  <span>Accepting New Packaging Projects</span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-black tracking-tight leading-[1.15] mb-5" style={{ color: '#000000' }}>
                  Ready to craft an iconic packaging experience?
                </h2>

                <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6">
                  Whether you're developing a new product line, refreshing your retail packaging, or scaling bespoke eCommerce unboxings, our design directors collaborate with you from first sketch to finished production.
                </p>
              </div>

              {/* Studio Info Details (Grid) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Address Card */}
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 hover:border-indigo-200 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 text-indigo-600 flex items-center justify-center mb-3 shadow-2xs">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <h3 className="text-sm font-bold text-gray-900 mb-1">Studio Headquarters</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    Connaught Place, Level 4, Barakhamba Road, New Delhi 110001
                  </p>
                </div>

                {/* Direct Email Card */}
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 hover:border-indigo-200 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 text-indigo-600 flex items-center justify-center mb-3 shadow-2xs">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </div>
                  <h3 className="text-sm font-bold text-gray-900 mb-1">Official Inquiry Email</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    projects@packagebranding.com<br />
                    hello@packagebranding.com
                  </p>
                </div>

                {/* Direct Phone Card */}
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 hover:border-indigo-200 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 text-indigo-600 flex items-center justify-center mb-3 shadow-2xs">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <h3 className="text-sm font-bold text-gray-900 mb-1">Direct Phone Lines</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    +91 (011) 4567-8900<br />
                    +91 98765 43210 (Direct WhatsApp)
                  </p>
                </div>

                {/* Working Hours Card */}
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 hover:border-indigo-200 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 text-indigo-600 flex items-center justify-center mb-3 shadow-2xs">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                  </div>
                  <h3 className="text-sm font-bold text-gray-900 mb-1">Studio Working Hours</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    Mon – Fri: 9:30 AM – 7:00 PM IST<br />
                    <span className="text-emerald-600 font-semibold">24/7 Client Proposal Support</span>
                  </p>
                </div>
              </div>

            </div>

            {/* ========================================================= */}
            {/* RIGHT SIDE: INTERACTIVE CONTACT & INQUIRY FORM            */}
            {/* ========================================================= */}
            <div className="lg:col-span-6">
              <div className="relative">
                {/* Glow */}
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 via-violet-500/10 to-pink-500/5 rounded-3xl blur-2xl transform scale-95 -z-10" />

                <div className="bg-white border border-slate-200/90 p-8 sm:p-10 rounded-3xl shadow-2xl shadow-indigo-950/5 relative">
                  <div className="mb-6">
                    <h2 className="text-2xl font-bold text-gray-900 tracking-tight">
                      Send a Project Brief
                    </h2>
                    <p className="text-xs sm:text-sm text-gray-500 mt-1">
                      Fill out your packaging specifications and our senior strategist will reply within 24 hours.
                    </p>
                  </div>

                  {isSubmitted ? (
                    <div className="py-16 text-center">
                      <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center text-3xl font-bold mb-4 shadow-md shadow-emerald-500/10 animate-bounce">
                        ✓
                      </div>
                      <h3 className="text-2xl font-extrabold text-gray-900 mb-2">Package Inquiry Received!</h3>
                      <p className="text-gray-600 max-w-md mx-auto text-sm leading-relaxed mb-6">
                        Thank you for reaching out. Our Senior Packaging Strategist will review your project requirements and send a customized proposal within 24 hours.
                      </p>
                      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-200 text-xs font-semibold text-gray-700">
                        <svg className="w-3.5 h-3.5 text-indigo-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                        </svg>
                        <span>NDA Protected • Confidential Brief</span>
                      </div>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      {/* Name and Email */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-gray-800 uppercase tracking-wider mb-2">
                            Your Name *
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="e.g. Sophia Turner"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl bg-slate-50/60 border border-slate-200 text-gray-900 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all placeholder:text-gray-400"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-gray-800 uppercase tracking-wider mb-2">
                            Work Email *
                          </label>
                          <input
                            type="email"
                            required
                            placeholder="e.g. sophia@brand.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl bg-slate-50/60 border border-slate-200 text-gray-900 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all placeholder:text-gray-400"
                          />
                        </div>
                      </div>

                      {/* Company and Budget */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-gray-800 uppercase tracking-wider mb-2">
                            Company / Brand Name
                          </label>
                          <input
                            type="text"
                            placeholder="e.g. LUNAÈRE Cosmetics"
                            value={formData.company}
                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl bg-slate-50/60 border border-slate-200 text-gray-900 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all placeholder:text-gray-400"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-gray-800 uppercase tracking-wider mb-2">
                            Estimated Package Budget
                          </label>
                          <select
                            value={formData.budget}
                            onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl bg-slate-50/60 border border-slate-200 text-gray-900 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all cursor-pointer"
                          >
                            {budgetOptions.map((opt) => (
                              <option key={opt} value={opt}>
                                {opt}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      {/* Target Timeline */}
                      <div>
                        <label className="block text-xs font-bold text-gray-800 uppercase tracking-wider mb-2">
                          Target Launch Timeline
                        </label>
                        <select
                          value={formData.timeline}
                          onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-slate-50/60 border border-slate-200 text-gray-900 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all cursor-pointer"
                        >
                          {timelineOptions.map((opt) => (
                            <option key={opt} value={opt}>
                              {opt}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Message / Brief */}
                      <div>
                        <label className="block text-xs font-bold text-gray-800 uppercase tracking-wider mb-2">
                          Tell us about your packaging & branding goals *
                        </label>
                        <textarea
                          rows="4"
                          required
                          placeholder="Detail your product category, box/bottle specifications, target retail channels, and timeline milestones..."
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-slate-50/60 border border-slate-200 text-gray-900 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all resize-none placeholder:text-gray-400"
                        />
                      </div>

                      {/* Submit Button */}
                      <Button
                        type="submit"
                        variant="primary"
                        size="lg"
                        rounded="xl"
                        fullWidth
                        icon={
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        }
                        iconPosition="right"
                      >
                        Request Custom Packaging Proposal
                      </Button>
                    </form>
                  )}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
