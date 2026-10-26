import React from 'react';
import { useCurrency } from '../context/CurrencyContext';
import { useInquiryModal } from '../context/InquiryModalContext';
import CurrencyToggle from '../components/CurrencyToggle';
import Button from '../components/Button';
import PackageContactForm from '../components/PackageContactForm';

const DigitalMarketingPackages = () => {
  const { currency } = useCurrency();
  const { openInquiryModal } = useInquiryModal();

  const tiers = [
    {
      name: 'Launch Marketing Suite',
      tagline: 'Multi-channel acquisition for startups & businesses seeking traction',
      priceUSD: '$950',
      priceINR: '₹29,999',
      period: '/month',
      popular: false,
      features: [
        'Google Ads & Meta (IG/FB) Campaign Setup & Audit',
        'Search Intent SEO & Core Web Vitals Optimization',
        '8 Custom High-Converting Ad Creatives / month',
        'Conversion Tracking, GA4 & Pixel Integration',
        'Weekly Ad Budget & Bid Management',
        'Audience Demographic & Interest Targeting',
        'Bi-Weekly ROI & Performance Report',
      ],
      buttonText: 'Get Launch Suite',
    },
    {
      name: 'Scale Omnichannel Package',
      tagline: 'Aggressive growth engine for scaling brands and e-commerce leaders',
      priceUSD: '$2,400',
      priceINR: '₹69,999',
      period: '/month',
      popular: true,
      badge: 'Most Popular',
      features: [
        'Everything in Launch Marketing Suite',
        'Multi-Platform Ads (Google PMax, Meta, TikTok & YouTube)',
        '16 Static & Dynamic Video Ad Creatives / month',
        'High-Converting Landing Page Design & CRO Optimization',
        'Automated Email Marketing & Retention Flows (Klaviyo/Mailchimp)',
        'Competitor Ad Hijacking & Creative Split Testing',
        'Real-Time Live Looker Studio Analytics Dashboard',
        'Dedicated Growth Marketing Director & Weekly Strategy Call',
      ],
      buttonText: 'Scale Omnichannel',
    },
    {
      name: 'Dominance Full-Funnel Package',
      tagline: 'End-to-end performance powerhouse for market leaders demanding high ROAS',
      priceUSD: '$4,800',
      priceINR: '₹1,39,999',
      period: '/month',
      popular: false,
      features: [
        'Full-Funnel Omnichannel Customer Acquisition & Retargeting',
        'Unlimited Ad Creative Variations & UGC Video Direction',
        'Advanced Attribution Modeling & Data Pipeline Setup',
        'Influencer Seeding & Strategic Brand Partnerships',
        'Programmatic Display & Native Advertising Management',
        'Continuous Landing Page A/B Testing & Funnel Engineering',
        'Dedicated 4-Person Growth Squad (Media Buyer, Copywriter, Designer, Strategist)',
        '24/7 Slack Channel Support & Direct Executive Access',
      ],
      buttonText: 'Claim Dominance Suite',
    },
  ];

  const deliverables = [
    {
      category: 'Performance Advertising',
      items: [
        'Multi-network media buying across Google Search, Performance Max, Meta & TikTok',
        'High-converting copywriting tailored to buyer psychology and pain points',
        'Audience segmentation, retargeting funnels, and lookalike audience scaling',
        'Rigorous A/B split-testing across headlines, thumbnails, and creative angles',
      ],
    },
    {
      category: 'Inbound SEO & Authority',
      items: [
        'Technical SEO foundations ensuring rapid search engine crawlability',
        'High-converting commercial keyword targeting and content cluster strategy',
        'High-authority backlink outreach and digital PR coverage',
        'Local SEO and Google Business Profile rank acceleration',
      ],
    },
    {
      category: 'Conversion & Retention',
      items: [
        'Conversion Rate Optimization (CRO) to maximize revenue per site visitor',
        'Abandoned cart, welcome series, and customer win-back automated email flows',
        'Customer lifetime value (LTV) enhancement and repeat purchase strategies',
        'Transparent weekly reporting with clear focus on CAC, ROAS, and net profits',
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
              <span>Full-Funnel Growth Engineering</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-black tracking-tight leading-[1.15] mb-5" style={{ color: '#000000' }}>
              High-ROAS Digital Marketing Packages
            </h1>

            <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-normal max-w-2xl mx-auto">
              We engineer predictable customer acquisition engines. Combining laser-focused performance ads, compounding organic SEO, and conversion-optimized funnels that consistently multiply your return on ad spend.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Tiers Section */}
      <section className="pt-2 pb-16 lg:pt-4 lg:pb-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-black tracking-tight mb-2.5" style={{ color: '#000000' }}>
              All-Inclusive Digital Marketing Plans
            </h2>
            <p className="text-gray-600 text-base">
              No hidden fees. Full campaign management, creative production, and tracking included.
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
                  onClick={() => openInquiryModal({ plan: tier, packageName: 'Digital Marketing Packages' })}
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
              The Growth Blueprint
            </span>
            <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight mt-3 mb-4">
              How We Scale Your Customer Pipeline
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              A scientific, battle-tested approach to performance marketing that leaves nothing to guesswork.
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
      <PackageContactForm serviceName="Digital Marketing Packages" />
    </div>
  );
};

export default DigitalMarketingPackages;
