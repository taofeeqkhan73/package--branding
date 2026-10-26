import React from 'react';
import { Link } from 'react-router-dom';
import { useCurrency } from '../context/CurrencyContext';
import { useInquiryModal } from '../context/InquiryModalContext';
import CurrencyToggle from '../components/CurrencyToggle';
import Button from '../components/Button';
import PackageContactForm from '../components/PackageContactForm';

const SmoPackages = () => {
  const { currency } = useCurrency();
  const { openInquiryModal } = useInquiryModal();

  const tiers = [
    {
      name: 'Essential Presence SMO',
      tagline: 'Establish a credible, visually cohesive social footprint',
      priceUSD: '$650',
      priceINR: '₹19,999',
      period: '/month',
      popular: false,
      features: [
        '12 Custom Branded Posts & Carousels / month',
        'Profile Bio, Highlights & Visual Grid Architecture',
        'Niche Hashtag & Audio Trend Keyword Research',
        'Engaging Captions with Clear Conversion CTAs',
        'Daily Comment Moderation & Spam Filtering',
        'Cross-posting across Instagram, Facebook & LinkedIn',
        'Monthly Transparent Audience Growth Report',
      ],
      buttonText: 'Start Essential SMO',
      gradient: 'from-pink-600 to-rose-600',
    },
    {
      name: 'Viral Brand Momentum SMO',
      tagline: 'Aggressive organic growth, video velocity & social clout',
      priceUSD: '$1,450',
      priceINR: '₹44,999',
      period: '/month',
      popular: true,
      badge: 'Most Popular',
      features: [
        '24 High-Impact Assets (12 Reels/TikToks + 12 Carousels) / mo',
        'Viral Hook Scripting & Trendjacking Rapid Response',
        'Custom 2D/3D Motion Graphic Accents & Animated Stickers',
        'Active Daily Community Outreach & Strategic DM Networking',
        'Micro-Influencer Gifting & Outreach (10 Creators / mo)',
        'Interactive Story Sequences & Audience Poll Funnels',
        'Dedicated Content Strategist & Bi-weekly Planning Sync',
        'Live Notion Content Calendar with Real-Time Approvals',
      ],
      buttonText: 'Build Viral Momentum',
      gradient: 'from-rose-600 via-pink-600 to-violet-600',
    },
    {
      name: 'Category Dominance SMO',
      tagline: 'Cultural leadership, cult-brand loyalty & 360° social influence',
      priceUSD: '$2,950',
      priceINR: '₹89,999',
      period: '/month',
      popular: false,
      features: [
        '40+ Premium Short-Form Videos, Carousels & Motion Assets / mo',
        'Full Multi-Platform Takeover (IG, TikTok, LinkedIn, X, YouTube Shorts)',
        'VIP Influencer & Creator Co-Marketing Collaborations',
        '7-Days-a-Week Dedicated Community Manager & Customer Care',
        'Social PR Listening & Real-Time Trend War Room',
        'Branded AR Filters & Custom Digital Merchandise',
        'Creative Director + Video Editor + Community Lead Team',
        'Executive Monthly Review & Custom Brand Sentiment Tracking',
      ],
      buttonText: 'Command Category Dominance',
      gradient: 'from-violet-600 to-purple-800',
    },
  ];

  const pillars = [
    {
      title: 'Algorithmic Profile Architecture',
      desc: 'We optimize your social bios, highlights, link-in-bio funnels, and keywords so your profile naturally surfaces when users search for your niche.',
      icon: (
        <svg className="w-6 h-6 text-indigo-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
        </svg>
      ),
    },
    {
      title: 'High-Retention Video Editing',
      desc: 'Short-form Reels and TikToks edited with dynamic pacing, kinetic typography, and psychology-backed hooks that halt scrolling and boost watch time.',
      icon: (
        <svg className="w-6 h-6 text-indigo-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="3" />
          <path d="M7 2v20M17 2v20M2 12h20M2 7h5M2 17h5M17 17h5M17 7h5" />
        </svg>
      ),
    },
    {
      title: 'Proactive Community Fandom',
      desc: 'We don’t just post and ghost. We initiate witty, high-value conversations in relevant industry threads, turning cold users into loyal community advocates.',
      icon: (
        <svg className="w-6 h-6 text-indigo-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
        </svg>
      ),
    },
    {
      title: 'Creator & Influencer Seeding',
      desc: 'We identify and connect your brand with authentic content creators whose aesthetics and audience demographics align with your target consumers.',
      icon: (
        <svg className="w-6 h-6 text-indigo-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative pt-12 pb-10 lg:pt-16 lg:pb-12 bg-gradient-to-b from-indigo-50/50 via-slate-50 to-white overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-indigo-200/40 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 -left-20 w-96 h-96 bg-violet-200/30 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-indigo-100 text-indigo-700 mb-5">
              <span>Social Media Optimization (SMO)</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-black tracking-tight leading-[1.15] mb-5" style={{ color: '#000000' }}>
              Organic SMO Packages That Build Cult-Level Communities
            </h1>

            <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-normal max-w-2xl mx-auto">
              Transform passive social scrollers into obsessed brand advocates. We craft algorithmic profile architecture, viral-ready video storytelling, and active community engagement that drives organic momentum.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Tiers Section */}
      <section className="pt-2 pb-16 lg:pt-4 lg:pb-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-black tracking-tight mb-2.5" style={{ color: '#000000' }}>
              Social Growth & Optimization Packages
            </h2>
            <p className="text-gray-600 text-base">
              Predictable monthly social management with world-class design quality and strategic community acceleration.
            </p>
            <CurrencyToggle />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {tiers.map((tier, idx) => (
              <div
                key={idx}
                className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 ${
                  tier.popular
                    ? 'bg-gradient-to-b from-white via-indigo-50/20 to-white border-2 border-indigo-600 shadow-2xl shadow-indigo-500/15 lg:-translate-y-3'
                    : 'bg-white border border-slate-200/90 shadow-lg shadow-slate-100 hover:shadow-xl hover:border-indigo-200'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 text-white text-xs font-extrabold uppercase tracking-wider shadow-md">
                    {tier.badge}
                  </div>
                )}

                <div>
                  <div className="mb-6">
                    <h3 className="text-xl font-extrabold text-gray-900 mb-2">{tier.name}</h3>
                    <p className="text-xs text-gray-500 min-h-[32px]">{tier.tagline}</p>
                  </div>

                  <div className="pb-6 mb-6 border-b border-slate-100 flex items-baseline gap-1.5">
                    <span className="text-4xl font-black text-gray-900 tracking-tight transition-all">
                      {currency === 'USD' ? tier.priceUSD : tier.priceINR}
                    </span>
                    <span className="text-sm font-semibold text-gray-500">{tier.period}</span>
                  </div>

                  <div className="space-y-3.5 mb-8">
                    <div className="text-xs font-bold uppercase tracking-wider text-gray-400">
                      What's Included:
                    </div>
                    {tier.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-3 text-sm text-gray-700">
                        <svg className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Button
                  onClick={() => openInquiryModal({ plan: tier, packageName: 'SMO Packages' })}
                  variant={tier.popular ? 'primary' : 'secondary'}
                  size="lg"
                  rounded="xl"
                  fullWidth
                >
                  {tier.buttonText}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pillars Grid */}
      <section className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100">
              The Organic Growth Engine
            </span>
            <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight mt-3 mb-4">
              How We Turn Scrollers into Brand Advocates
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              A balanced ecosystem of visual prestige, algorithmic positioning, and human connection.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((p, idx) => (
              <div key={idx} className="bg-white p-7 rounded-3xl border border-slate-200/80 shadow-md flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center mb-5 shadow-2xs group-hover:scale-110 transition-transform">
                    {p.icon}
                  </div>
                  <h4 className="text-base font-bold text-gray-900 mb-2">{p.title}</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Package Direct Inquiry Form */}
      <PackageContactForm serviceName="SMO Packages" />
    </div>
  );
};

export default SmoPackages;
