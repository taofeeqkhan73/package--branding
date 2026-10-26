import React from 'react';
import { useCurrency } from '../context/CurrencyContext';
import { useInquiryModal } from '../context/InquiryModalContext';
import CurrencyToggle from '../components/CurrencyToggle';
import Button from '../components/Button';
import PackageContactForm from '../components/PackageContactForm';

const BrandPackages = () => {
  const { currency } = useCurrency();
  const { openInquiryModal } = useInquiryModal();

  const tiers = [
    {
      name: 'Identity Starter Package',
      tagline: 'Perfect for startups & new ventures seeking an unforgettable market entry',
      priceUSD: '$1,200',
      priceINR: '₹39,999',
      period: 'one-time',
      popular: false,
      features: [
        'Complete Logo Suite (Primary, Secondary, Submark, Favicon)',
        'Curated Brand Color Palette & Typography Hierarchy',
        'Comprehensive 25+ Page Brand Guidelines Manual',
        'Stationery Kit (Business Cards, Letterhead, Envelopes)',
        'Social Media Launch Kit (Avatars, Banner Covers)',
        'Print-Ready Vector Files (AI, EPS, SVG, PNG, PDF)',
        'Full Commercial Copyright Transfer',
      ],
      buttonText: 'Claim Starter Package',
    },
    {
      name: 'Growth Brand & Packaging',
      tagline: 'Engineered for consumer brands ready to dominate retail shelves & online unboxings',
      priceUSD: '$2,800',
      priceINR: '₹79,999',
      period: 'one-time',
      popular: true,
      badge: 'Most Popular',
      features: [
        'Everything in Identity Starter Package',
        'Custom 3D Structural Box & Bottle Die-Line Design',
        'Luxury Unboxing Experience & Interior Insert Design',
        'Label, Outer Carton & Foil/Emboss Finishing Specs',
        'Photorealistic 3D Renders for E-Commerce & Retail Pitch',
        'Print Production Liaison & Manufacturer Support',
        'Brand Messaging Framework & Tone of Voice Guide',
        'Custom Iconography Set (15+ Branded Icons)',
      ],
      buttonText: 'Scale with Growth Branding',
    },
    {
      name: 'Enterprise Brand Transformation',
      tagline: 'Comprehensive rebrand & multi-SKU product ecosystem for industry leaders',
      priceUSD: '$5,500',
      priceINR: '₹1,49,999',
      period: 'one-time',
      popular: false,
      features: [
        'Complete Multi-SKU Packaging System (Up to 8 SKUs)',
        '3D Animated Brand Mark & Kinetic Logo Showreel',
        'Retail Merchandising & Shelf-Display POS Guidelines',
        'Bespoke Product Photography & 3D Render Library',
        'Sustainable Packaging Materials Sourcing & Dielines',
        'Corporate Pitch Deck & Investor Presentation Design',
        'Dedicated Creative Director & Packaging Engineer',
        'Priority 24/7 Turnaround & Unlimited Revisions',
      ],
      buttonText: 'Build Enterprise Brand',
    },
  ];

  const deliverables = [
    {
      category: 'Strategic Identity',
      items: [
        'Target audience and competitive brand positioning audit',
        'Core logo suite engineered for digital screens and physical print',
        'Typography pairing, optical spacing, and font licensing guidance',
        'Pantone (PMS), CMYK, and digital HEX color formulation',
      ],
    },
    {
      category: 'Packaging Engineering',
      items: [
        'Precision factory-ready vector die-lines with bleed & trim marks',
        'Embossing, debossing, spot UV, and hot-foil stamp print finishes',
        'Custom structural unboxing journeys that create viral customer reels',
        'Direct consultation with packaging printers and box manufacturers',
      ],
    },
    {
      category: '3D Visuals & Assets',
      items: [
        '4K photorealistic 3D product modeling and realistic textures',
        'E-commerce white-background renders for Shopify & Amazon',
        'Social media design templates and marketing launch collateral',
        'Master brand style guide covering every real-world application',
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
              <span>Strategic Brand & Packaging Identity</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-black tracking-tight leading-[1.15] mb-5" style={{ color: '#000000' }}>
              Iconic Brand Packages Built for Luxury & Scale
            </h1>

            <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-normal max-w-2xl mx-auto">
              From strategic identity to tactile, retail-ready unboxing experiences. We build timeless visual identities and luxury packaging that make your brand impossible to scroll past or ignore on the shelf.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Tiers Section */}
      <section className="pt-2 pb-16 lg:pt-4 lg:pb-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-black tracking-tight mb-2.5" style={{ color: '#000000' }}>
              Transparent Brand Design Packages
            </h2>
            <p className="text-gray-600 text-base">
              Clear deliverables, fixed pricing, and full ownership transfer. Choose the package that matches your ambition.
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
                  onClick={() => openInquiryModal({ plan: tier, packageName: 'Brand Packages' })}
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
              Crafted To Perfection
            </span>
            <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight mt-3 mb-4">
              What Goes Into Every Single Brand Experience
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              Every detail is meticulously planned and engineered to make your brand recognizable, prestigious, and ready for global distribution.
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
      <PackageContactForm serviceName="Brand Packages" />
    </div>
  );
};

export default BrandPackages;
