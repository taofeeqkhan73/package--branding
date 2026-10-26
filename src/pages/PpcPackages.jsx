import React from 'react';
import { Link } from 'react-router-dom';
import { useCurrency } from '../context/CurrencyContext';
import { useInquiryModal } from '../context/InquiryModalContext';
import CurrencyToggle from '../components/CurrencyToggle';
import Button from '../components/Button';
import PackageContactForm from '../components/PackageContactForm';

const PpcPackages = () => {
  const { currency } = useCurrency();
  const { openInquiryModal } = useInquiryModal();

  const tiers = [
    {
      name: 'Launch PPC Package',
      tagline: 'Precision validation & rapid sales for emerging brands',
      priceUSD: '$850',
      priceINR: '₹29,999',
      period: '/month + ad spend',
      popular: false,
      features: [
        'Up to $5,000 / month ad spend management',
        'Google Search OR Meta (IG/FB) Channel Setup',
        'High-converting ad copy & 4 creative variants',
        'Full GA4, Meta Pixel & Server-Side CAPI setup',
        'Search term harvesting & negative keyword pruning',
        'Competitor brand bidding protection',
        'Bi-weekly performance & ROAS review report',
      ],
      buttonText: 'Launch PPC Campaign',
      gradient: 'from-blue-600 to-indigo-600',
    },
    {
      name: 'Scale Accelerator PPC',
      tagline: 'Multi-channel scaling & aggressive revenue expansion',
      priceUSD: '$1,850',
      priceINR: '₹59,999',
      period: '/month + ad spend',
      popular: true,
      badge: 'Most Popular',
      features: [
        'Up to $25,000 / month ad spend management',
        'Dual Channel: Google (Search + Performance Max) & Meta',
        'Weekly A/B creative & headline split testing',
        'Landing page Conversion Rate Optimization (CRO) audit',
        'Custom Lookalike, Engaged & Retargeting funnels',
        'Dynamic Product Ads (DPA) catalog feed optimization',
        'Dedicated Senior Media Buyer on dedicated Slack channel',
        'Live 24/7 ROAS & attribution tracking dashboard',
      ],
      buttonText: 'Scale My Ads',
      gradient: 'from-indigo-600 via-violet-600 to-pink-600',
    },
    {
      name: 'Omnichannel Dominance PPC',
      tagline: 'High-velocity performance infrastructure for category leaders',
      priceUSD: '$3,750',
      priceINR: '₹1,19,999',
      period: '/month + ad spend',
      popular: false,
      features: [
        'Scalable management for $25k - $100k+ monthly spend',
        'Full Omnichannel: Google, Meta, TikTok, YouTube & LinkedIn',
        'High-frequency video & static creative iteration',
        'Multi-touch algorithmic attribution modeling',
        'Competitor ad conquesting & audience hijacking',
        'Pre-landing page quiz & advertorial funnel testing',
        'Senior Growth Director + Creative Strategist team',
        'Weekly executive growth sprints & live revenue calls',
      ],
      buttonText: 'Enterprise Performance',
      gradient: 'from-violet-600 to-purple-800',
    },
  ];

  const channels = [
    {
      title: 'Google Ads & Performance Max',
      desc: 'Capture high-intent buyers exactly when they search for your products. Dominate Google Search, Shopping, YouTube, and Gmail with precision bidding.',
      icon: (
        <svg className="w-6 h-6 text-indigo-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="6" />
          <circle cx="12" cy="12" r="2" fill="currentColor" />
          <path d="M12 2v3m0 14v3M2 12h3m14 0h3" />
        </svg>
      ),
    },
    {
      title: 'Meta Ads (Instagram & Facebook)',
      desc: 'Visual storytelling that interrupts the feed and drives impulse checkouts. Powered by advanced custom audiences, Lookalikes, and algorithmic Advantage+ campaigns.',
      icon: (
        <svg className="w-6 h-6 text-indigo-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18.178 8c5.096 0 5.096 8 0 8-5.095 0-7.133-8-12.739-8-4.585 0-4.585 8 0 8 5.606 0 7.644-8 12.74-8z" />
        </svg>
      ),
    },
    {
      title: 'TikTok & Short-Form Paid Ads',
      desc: 'Native, UGC-style creative ads that tap into hyper-engaged younger demographics, sparking viral purchasing momentum and high-volume sales.',
      icon: (
        <svg className="w-6 h-6 text-indigo-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="6" y="2" width="12" height="20" rx="3" />
          <polygon points="10 9 15 12 10 15 10 9" fill="currentColor" stroke="none" />
          <line x1="11" y1="18" x2="13" y2="18" />
        </svg>
      ),
    },
    {
      title: 'LinkedIn & B2B Paid Media',
      desc: 'Target high-net-worth enterprise decision-makers, retail buyers, and corporate partners with surgical job title, company size, and industry filters.',
      icon: (
        <svg className="w-6 h-6 text-indigo-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
          <line x1="12" y1="11" x2="12" y2="13" strokeWidth="2.5" />
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
              <span>Pay-Per-Click (PPC) & Paid Ads</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-black tracking-tight leading-[1.15] mb-5" style={{ color: '#000000' }}>
              High-ROAS PPC Packages That Scale Revenue Profitably
            </h1>

            <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-normal max-w-2xl mx-auto">
              Stop bleeding ad spend on unqualified clicks. We build high-converting paid acquisition funnels across Google, Meta, and TikTok optimized for real return on investment.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Tiers Section */}
      <section className="pt-2 pb-16 lg:pt-4 lg:pb-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-black tracking-tight mb-2.5" style={{ color: '#000000' }}>
              Performance-Driven Paid Ad Packages
            </h2>
            <p className="text-gray-600 text-base">
              Transparent management pricing tailored to your scale. Every dollar of ad spend tracked directly to profit.
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
                  onClick={() => openInquiryModal({ plan: tier, packageName: 'PPC Packages' })}
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

      {/* Channels Grid */}
      <section className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100">
              Omnichannel Specialization
            </span>
            <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight mt-3 mb-4">
              Where We Drive Your Customers
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              We deploy ad creative engineered specifically for the psychology of each advertising platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {channels.map((ch, idx) => (
              <div key={idx} className="bg-white p-7 rounded-3xl border border-slate-200/80 shadow-md flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center mb-5 shadow-2xs group-hover:scale-110 transition-transform">
                    {ch.icon}
                  </div>
                  <h4 className="text-base font-bold text-gray-900 mb-2">{ch.title}</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">{ch.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Package Direct Inquiry Form */}
      <PackageContactForm serviceName="PPC Packages" />
    </div>
  );
};

export default PpcPackages;
