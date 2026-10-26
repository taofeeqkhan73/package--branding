import React from 'react';
import { useCurrency } from '../context/CurrencyContext';
import { useInquiryModal } from '../context/InquiryModalContext';
import CurrencyToggle from '../components/CurrencyToggle';
import Button from '../components/Button';
import PackageContactForm from '../components/PackageContactForm';

const SmmPackages = () => {
  const { currency } = useCurrency();
  const { openInquiryModal } = useInquiryModal();

  const tiers = [
    {
      name: 'Essential SMM Package',
      tagline: 'Consistent, premium social presence for growing businesses & creators',
      priceUSD: '$850',
      priceINR: '₹27,999',
      period: '/month',
      popular: false,
      features: [
        '12 High-Impact Reels, Carousels & Static Posts / month',
        'Viral Trending Audio & Niche Hashtag Strategy',
        'Custom Branded Aesthetic Grid Curation',
        'Captions, Hooks & Call-To-Action Copywriting',
        'Active Community Engagement (Comments & DMs)',
        'Monthly Content Calendar & Advance Scheduling',
        'Monthly Growth, Reach & Follower Insights Report',
      ],
      buttonText: 'Launch SMM',
    },
    {
      name: 'Growth SMM & Paid Social',
      tagline: 'Aggressive viral content production & paid audience acceleration',
      priceUSD: '$1,850',
      priceINR: '₹54,999',
      period: '/month',
      popular: true,
      badge: 'Most Popular',
      features: [
        'Everything in Essential SMM Package',
        '24 Short-Form Viral Videos & Reels (TikTok, IG, YouTube Shorts)',
        'Meta Paid Social Ad Campaign Setup & Optimization',
        'Micro-Influencer Gifting & Collaboration Outreach (5 creators/mo)',
        'High-Converting Story Sequences & Interactive Polls',
        'Competitor Creative Breakdown & Trend Jacking',
        'Custom Branded Story Highlight Covers & Bio Revamp',
        'Bi-Weekly Video Review Call & Live Analytics Dashboard',
      ],
      buttonText: 'Scale SMM Growth',
    },
    {
      name: 'Brand Authority SMM Suite',
      tagline: 'Dedicated creative studio for brands aiming for cultural market leadership',
      priceUSD: '$3,600',
      priceINR: '₹1,09,999',
      period: '/month',
      popular: false,
      features: [
        'Daily High-Production Content Across 4 Key Platforms',
        'Dedicated Creative Squad (Video Editor, Scriptwriter, Designer)',
        'Tier-1 Influencer & Creator Ambassador Management',
        'Full UGC (User-Generated Content) Pipeline & Whitelisting',
        'Viral Script Hooks Tested Across Multi-Audience Angles',
        'Paid Social Ad Scaling Across Instagram, TikTok & LinkedIn',
        'VIP Crisis Management & Rapid Community Moderation',
        '24/7 Slack Channel Support & Direct Creative Director Access',
      ],
      buttonText: 'Dominate Social Media',
    },
  ];

  const deliverables = [
    {
      category: 'Viral Video Engineering',
      items: [
        'Hook-first video scripts engineered for high retention and algorithm push',
        'High-paced video editing with dynamic subtitles, sound effects & kinetic cuts',
        'Platform-specific format adaptation (9:16 vertical reels, shorts & TikTok)',
        'Continuous testing of viral formats, skits, tutorials, and behind-the-scenes',
      ],
    },
    {
      category: 'Community & Engagement',
      items: [
        'Proactive daily interaction with potential high-value customers and industry leaders',
        'Direct message (DM) sales funnels and automated lead qualification setup',
        'Hashtag architecture, SEO search-optimized captions, and location tagging',
        'Brand sentiment tracking and proactive customer advocacy development',
      ],
    },
    {
      category: 'Creator & Paid Amplification',
      items: [
        'Micro-influencer discovery, contract negotiation, and content briefing',
        'Whitelisting high-performing creator reels for paid ad amplification',
        'Retargeting social profile engagers into paying website customers',
        'Transparent weekly reporting with follower growth, reach velocity, and CAC data',
      ],
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
              <span>Social Media Marketing (SMM)</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-black tracking-tight leading-[1.15] mb-5" style={{ color: '#000000' }}>
              Viral SMM Packages That Convert Attention into Revenue
            </h1>

            <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-normal max-w-2xl mx-auto">
              Transform passive scrollers into obsessed brand ambassadors. We produce viral short-form video content, curate iconic aesthetic feeds, and scale paid social campaigns that drive measurable sales.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Tiers Section */}
      <section className="pt-2 pb-16 lg:pt-4 lg:pb-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-black tracking-tight mb-2.5" style={{ color: '#000000' }}>
              High-Impact Social Media Marketing Plans
            </h2>
            <p className="text-gray-600 text-base">
              Consistent production, viral scripting, and data-driven management designed to scale your reach.
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
                  onClick={() => openInquiryModal({ plan: tier, packageName: 'SMM Packages' })}
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

      {/* Deliverables Breakdown */}
      <section className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100">
              Complete Social Formula
            </span>
            <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight mt-3 mb-4">
              What Goes Into Every Single Social Campaign
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              From creative hook ideation to high-speed editing, algorithm optimization, and dedicated community management.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {deliverables.map((del, dIdx) => (
              <div key={dIdx} className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-md">
                <h4 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold text-sm">
                    0{dIdx + 1}
                  </span>
                  {del.category}
                </h4>
                <ul className="space-y-3.5">
                  {del.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start gap-2.5 text-sm text-gray-600 leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 mt-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Package Direct Inquiry Form */}
      <PackageContactForm serviceName="SMM Packages" />
    </div>
  );
};

export default SmmPackages;
