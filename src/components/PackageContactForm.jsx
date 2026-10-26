import React, { useState } from 'react';
import Button from './Button';

const PackageContactForm = ({ serviceName = 'Package' }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    address: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Inquiry submitted from ${serviceName}:`, formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        mobile: '',
        address: '',
        message: '',
      });
    }, 4500);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white via-slate-50/60 to-slate-100/80 border-t border-slate-200/80 relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/3 -right-24 w-80 h-80 bg-indigo-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-24 w-80 h-80 bg-violet-200/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-indigo-50 border border-indigo-100 text-indigo-700 mb-4 shadow-2xs">
            <span>Direct Inquiry • {serviceName}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-black tracking-tight mb-3" style={{ color: '#000000' }}>
            Request A Tailored Proposal For {serviceName}
          </h2>

          <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Need custom deliverables, special timeline milestones, or multi-SKU volume pricing? Share your project details below and our senior directors will reach out within 24 hours.
          </p>
        </div>

        {/* Form Card Container */}
        <div className="bg-white rounded-3xl border border-slate-200/90 p-7 sm:p-10 shadow-xl shadow-slate-200/50 relative">
          {isSubmitted ? (
            <div className="py-12 text-center">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center text-3xl font-bold mb-4 shadow-md shadow-emerald-500/10">
                ✓
              </div>
              <h3 className="text-2xl font-extrabold text-gray-900 mb-2">
                Thank You! Your Inquiry Has Been Received.
              </h3>
              <p className="text-gray-600 max-w-md mx-auto text-sm leading-relaxed mb-4">
                Our team is reviewing your project details. We will contact you via email or phone shortly with custom pricing and recommendations.
              </p>
              <span className="inline-block text-xs font-semibold text-indigo-600 bg-indigo-50 px-3 py-1.5 rounded-full border border-indigo-100">
                Guaranteed Response Within 24 Business Hours
              </span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Row 1: Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold text-gray-800 uppercase tracking-wider mb-2">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="e.g. Rahul Sharma"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50/70 border border-slate-200 text-gray-900 text-sm placeholder-gray-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-800 uppercase tracking-wider mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="e.g. rahul@company.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50/70 border border-slate-200 text-gray-900 text-sm placeholder-gray-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 transition-all"
                  />
                </div>
              </div>

              {/* Row 2: Mobile & Address */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold text-gray-800 uppercase tracking-wider mb-2">
                    Mobile <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="mobile"
                    required
                    placeholder="e.g. +91 98765 43210"
                    value={formData.mobile}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50/70 border border-slate-200 text-gray-900 text-sm placeholder-gray-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-800 uppercase tracking-wider mb-2">
                    Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="address"
                    required
                    placeholder="e.g. Sector 62, Noida, Uttar Pradesh"
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50/70 border border-slate-200 text-gray-900 text-sm placeholder-gray-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 transition-all"
                  />
                </div>
              </div>

              {/* Row 3: Message */}
              <div>
                <label className="block text-xs font-bold text-gray-800 uppercase tracking-wider mb-2">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  placeholder="Detail your requirements, product type, design specifications, or any questions you have regarding this package..."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50/70 border border-slate-200 text-gray-900 text-sm placeholder-gray-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 transition-all resize-y"
                />
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-700 to-violet-700 hover:from-indigo-700 hover:to-violet-800 text-white font-extrabold text-sm uppercase tracking-wider transition-all duration-300 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/35 transform hover:-translate-y-0.5 active:scale-[0.99] cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>Submit Inquiry</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>

            </form>
          )}
        </div>

      </div>
    </section>
  );
};

export default PackageContactForm;
