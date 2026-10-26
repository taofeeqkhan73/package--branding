import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
  const serviceList = [
    {
      id: '01',
      title: 'SEO Packages',
      link: '/seo-packages',
      desc: 'Data-driven search engine optimization engineered for first-page Google rankings, high-intent keyword dominance, and sustainable organic traffic growth.',
      tags: ['Keyword Strategy', 'Technical SEO', 'Quality Backlinks', 'Core Web Vitals'],
      gradient: 'from-blue-500 to-indigo-600',
      icon: (
        <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <circle cx="10.5" cy="10.5" r="7.5" strokeWidth="2" stroke="white" />
          <line x1="7.5" y1="13" x2="7.5" y2="10.5" strokeWidth="2" strokeLinecap="round" stroke="white" />
          <line x1="10.5" y1="13" x2="10.5" y2="8" strokeWidth="2" strokeLinecap="round" stroke="white" />
          <line x1="13.5" y1="13" x2="13.5" y2="6" strokeWidth="2" strokeLinecap="round" stroke="white" />
          <path d="M16 16L21 21" strokeWidth="2.4" strokeLinecap="round" stroke="white" />
          <circle cx="10.5" cy="10.5" r="1.2" fill="white" />
        </svg>
      ),
    },
    {
      id: '02',
      title: 'PPC Packages',
      link: '/ppc-packages',
      desc: 'High-ROAS pay-per-click ad campaigns across Google Ads, Meta, and LinkedIn with precision audience targeting and conversion rate optimization.',
      tags: ['Google & Meta Ads', 'High ROAS Funnels', 'Precision Targeting', 'A/B Creative Split'],
      gradient: 'from-blue-500 to-indigo-600',
      icon: (
        <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <circle cx="12" cy="12" r="9" strokeWidth="1.8" stroke="white" />
          <circle cx="12" cy="12" r="5.5" strokeWidth="1.8" stroke="white" />
          <circle cx="12" cy="12" r="2" fill="white" />
          <line x1="12" y1="1.5" x2="12" y2="4.5" strokeWidth="2" strokeLinecap="round" stroke="white" />
          <line x1="12" y1="19.5" x2="12" y2="22.5" strokeWidth="2" strokeLinecap="round" stroke="white" />
          <line x1="1.5" y1="12" x2="4.5" y2="12" strokeWidth="2" strokeLinecap="round" stroke="white" />
          <line x1="19.5" y1="12" x2="22.5" y2="12" strokeWidth="2" strokeLinecap="round" stroke="white" />
          <path d="M14.5 14.5L20 20M14.5 14.5V18.5M14.5 14.5H18.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" stroke="white" />
        </svg>
      ),
    },
    {
      id: '03',
      title: 'SMO Packages',
      link: '/smo-packages',
      desc: 'Complete social media optimization, aesthetic profile branding, hashtag research, and organic community engagement to build lasting brand loyalty.',
      tags: ['Profile Optimization', 'Aesthetic Grid', 'Organic Reach', 'Community Engagement'],
      gradient: 'from-blue-500 to-indigo-600',
      icon: (
        <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <rect x="4" y="2.5" width="16" height="19" rx="3.5" strokeWidth="1.8" stroke="white" />
          <line x1="10" y1="5.5" x2="14" y2="5.5" strokeWidth="2" strokeLinecap="round" stroke="white" />
          <circle cx="12" cy="10" r="3" strokeWidth="1.8" stroke="white" />
          <path d="M12 17.5C12 17.5 9 15.5 9 13.8C9 12.8 9.8 12 10.8 12C11.4 12 12 12.4 12 12.4C12 12.4 12.6 12 13.2 12C14.2 12 15 12.8 15 13.8C15 15.5 12 17.5 12 17.5Z" fill="white" stroke="white" strokeWidth="1" strokeLinejoin="round" />
          <path d="M18.5 7L19.2 8.5L20.7 8.7L19.6 9.8L19.9 11.3L18.5 10.5L17.1 11.3L17.4 9.8L16.3 8.7L17.8 8.5Z" fill="white" />
        </svg>
      ),
    },
    {
      id: '04',
      title: 'Brand Packages',
      link: '/brand-packages',
      desc: 'End-to-end brand identity systems, custom logo suites, typography hierarchies, comprehensive brand guidelines, and luxury packaging die-lines.',
      tags: ['Logo Identity Suite', 'Brand Guidelines', 'Typography & Colors', 'Packaging Design'],
      gradient: 'from-blue-500 to-indigo-600',
      icon: (
        <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M6 3H18L22 9L12 21L2 9L6 3Z" strokeWidth="1.8" strokeLinejoin="round" stroke="white" />
          <line x1="2" y1="9" x2="22" y2="9" strokeWidth="1.8" stroke="white" />
          <path d="M12 21L8 9L9.5 3" strokeWidth="1.6" strokeLinejoin="round" stroke="white" />
          <path d="M12 21L16 9L14.5 3" strokeWidth="1.6" strokeLinejoin="round" stroke="white" />
          <circle cx="12" cy="6" r="1" fill="white" />
        </svg>
      ),
    },
    {
      id: '05',
      title: 'Digital Marketing Packages',
      link: '/digital-marketing-packages',
      desc: 'Full-funnel 360° digital marketing combining omnichannel paid ads, SEO velocity, automated email retention, and conversion rate optimization (CRO).',
      tags: ['Omnichannel Strategy', 'Lead Generation', 'Email Automation', 'Analytics & CRO'],
      gradient: 'from-blue-500 to-indigo-600',
      icon: (
        <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <rect x="2" y="3" width="20" height="14" rx="2.5" strokeWidth="1.8" stroke="white" />
          <path d="M8 21H16M12 17V21" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" stroke="white" />
          <path d="M6 13L9.5 9.5L13 12L18 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" stroke="white" />
          <path d="M15 7H18V10" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" stroke="white" />
          <line x1="6" y1="13" x2="6" y2="13.01" strokeWidth="2.5" strokeLinecap="round" stroke="white" />
          <line x1="9.5" y1="13" x2="9.5" y2="11.5" strokeWidth="2" strokeLinecap="round" stroke="white" />
          <line x1="13" y1="13" x2="13" y2="13.01" strokeWidth="2.5" strokeLinecap="round" stroke="white" />
          <line x1="16.5" y1="13" x2="16.5" y2="10" strokeWidth="2" strokeLinecap="round" stroke="white" />
        </svg>
      ),
    },
    {
      id: '06',
      title: 'SMM Packages',
      link: '/smm-packages',
      desc: 'Viral short-form video reels, TikTok campaigns, paid social media scaling, and influencer collaborations that turn engaged viewers into paying buyers.',
      tags: ['Viral Reels & Shorts', 'Paid Social Ads', 'Influencer Outreach', 'Campaign Scaling'],
      gradient: 'from-blue-500 to-indigo-600',
      icon: (
        <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M3 11V14C3 14.55 3.45 15 4 15H7L12 19V6L7 10H4C3.45 10 3 10.45 3 11Z" strokeWidth="1.8" strokeLinejoin="round" stroke="white" fill="white" />
          <path d="M6 15V18.5C6 19.33 6.67 20 7.5 20C8.33 20 9 19.33 9 18.5V15" strokeWidth="1.8" strokeLinecap="round" stroke="white" />
          <path d="M16 8.5C17.2 9.5 18 11.2 18 12.5C18 13.8 17.2 15.5 16 16.5" strokeWidth="2" strokeLinecap="round" stroke="white" />
          <path d="M19 5.5C21 7.5 22 9.8 22 12.5C22 15.2 21 17.5 19 19.5" strokeWidth="2" strokeLinecap="round" stroke="white" />
          <circle cx="16.5" cy="5" r="1.5" fill="white" />
        </svg>
      ),
    },
  ];

  return (
    <section id="services" className="pt-10 pb-20 sm:pt-14 sm:pb-24 lg:pt-16 lg:pb-28 bg-slate-50 relative overflow-hidden">
      {/* Decorative ambient elements */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-indigo-200/20 blur-3xl rounded-full pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-violet-200/20 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-indigo-50 text-indigo-700 border border-indigo-100 mb-4">
            Our Capabilities
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-black tracking-tight leading-tight mb-6" style={{ color: '#000000' }}>
            Everything you need to elevate your brand
          </h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-normal">
            From strategic inception to physical and digital execution, we provide comprehensive creative capabilities designed for visionary companies.
          </p>
        </div>

        {/* Services 3x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceList.map((service) => (
            <Link
              key={service.id}
              to={service.link || '/#contact'}
              className="bg-white rounded-3xl p-8 border border-gray-200 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:border-gray-300 transition-all duration-300 flex flex-col justify-between group cursor-pointer block text-left"
            >
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${service.gradient} text-white flex items-center justify-center flex-shrink-0 shadow-lg shadow-indigo-500/25 group-hover:scale-105 group-hover:shadow-xl group-hover:shadow-indigo-500/35 transition-all duration-300 relative overflow-hidden border border-white/25`}
                  >
                    {/* Gloss Top Specular Reflection */}
                    <div className="absolute inset-x-0 top-0 h-1/2 bg-white/20 rounded-t-2xl pointer-events-none" />
                    <div className="relative z-10 flex items-center justify-center">
                      {service.icon}
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl font-bold text-gray-900">
                      {service.title}
                    </h3>
                  </div>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {service.desc}
                </p>
              </div>

              {/* Tags */}
              <div className="pt-6 border-t border-gray-200">
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs font-medium px-3 py-1 rounded-full bg-slate-100 text-gray-600 group-hover:bg-slate-200/70 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
