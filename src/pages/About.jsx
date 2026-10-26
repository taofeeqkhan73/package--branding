import React from 'react';
import aboutShowcase from '../assets/about-showcase.jpg';

const About = () => {
  const highlights = [
    '500K+ Packaging Units Produced Worldwide',
    'Awarded by Dieline & Pentawards Recognition',
    'Retail Ready for Sephora, Boutiques & Department Stores',
    '100% In-House 3D CAD & Structural Packaging Engineers',
    'Zero-Waste Sustainable Materials & FSC Substrates',
  ];

  const pillars = [
    {
      step: '01',
      title: 'Structural Engineering & 3D Dielines',
      desc: 'Custom-engineered CAD dielines calibrated down to the millimeter for structural strength, smooth folding, and automated or manual assembly line efficiency.',
      tag: 'Precision Fit',
      icon: (
        <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      ),
    },
    {
      step: '02',
      title: 'Sensory Finishes & Tactile Luxury',
      desc: 'Soft-touch matte laminations, hot-stamped gold & silver metallic foils, blind debossing, and spot UV textures that command immediate attention upon touch.',
      tag: 'Tactile Impact',
      icon: (
        <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
    },
    {
      step: '03',
      title: 'Sustainable & Eco-Forward Substrates',
      desc: 'FSC-certified rigid boards, post-consumer recycled kraft, soy and vegetable-based inks, and biodegradable internal molded pulp inserts.',
      tag: 'FSC Certified',
      icon: (
        <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      step: '04',
      title: 'Retail Shelf & E-Commerce Optimization',
      desc: 'Drop-tested and parcel-ready packaging systems engineered to survive international shipping while dominating retail shelf visibility.',
      tag: 'Drop-Tested',
      icon: (
        <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      ),
    },
  ];

  const processSteps = [
    {
      num: '01',
      title: 'Discovery & Packaging Audit',
      description: 'We audit your product dimensions, weight, fragile points, distribution channels, and retail environment to determine optimal packaging architecture.',
    },
    {
      num: '02',
      title: '3D Prototyping & Dieline Engineering',
      description: 'We engineer millimeter-accurate custom dielines and generate photorealistic 3D renders, allowing you to validate every angle and fold prior to tooling.',
    },
    {
      num: '03',
      title: 'Graphic Artwork & Sensory Specs',
      description: 'Our senior designers craft striking typography, CMYK & Pantone spot color palettes, luxury foil masks, and regulatory compliance labeling.',
    },
    {
      num: '04',
      title: 'Pre-Press & Manufacturer Liaison',
      description: 'We supply certified print-ready vector files and coordinate directly with your packaging manufacturer to ensure zero misprints or color drift.',
    },
  ];

  const values = [
    {
      title: 'Zero Printing Error Guarantee',
      desc: 'Every file is pre-flight tested and cross-checked against standard offset, flexographic, and digital press specifications.',
      icon: (
        <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: 'Photorealistic 3D Previews',
      desc: 'Inspect your finished box, bottle, label, or pouch in true-to-life 3D before committing a single rupee to factory die-cutting.',
      icon: (
        <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
    },
    {
      title: '100% Commercial IP Ownership',
      desc: 'Full intellectual property rights, open editable vector source files, and unrestricted manufacturing rights are handed directly to you.',
      icon: (
        <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      
      {/* ========================================================= */}
      {/* 1. TOP SECTION: ABOUT HERO & BRAND INTRO BANNER           */}
      {/* ========================================================= */}
      <section className="relative pt-10 pb-8 sm:pt-12 sm:pb-10 lg:pt-16 lg:pb-12 bg-gradient-to-b from-indigo-50/60 via-slate-50 to-white overflow-hidden border-b border-slate-100">
        {/* Ambient Glows */}
        <div className="absolute top-1/4 -right-24 w-96 h-96 bg-indigo-200/40 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-6 -left-24 w-96 h-96 bg-violet-200/40 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">


          {/* Badge */}
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-indigo-100 text-indigo-700 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse" />
              <span>Studio Heritage & Craftsmanship</span>
            </div>
          </div>

          {/* Main Title & Subtitle */}
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-black tracking-tight leading-[1.12] mb-6" style={{ color: '#000000' }}>
              We Architect Exceptional Packaging That Captivates, Protects & Sells.
            </h1>

            <p className="text-gray-600 text-base sm:text-xl leading-relaxed max-w-3xl mx-auto">
              At <strong className="text-gray-900 font-semibold">Package Branding</strong>, we turn ordinary packaging into your brand's most powerful tactile asset. We merge structural packaging engineering, luxury finishes, and strategic visual identity to transform everyday product unboxings into unforgettable customer experiences.
            </p>
          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* 2. CORE SECTION: BRAND STORY & VISUAL SHOWCASE CARD        */}
      {/* ========================================================= */}
      <section id="about" className="pt-6 pb-16 sm:pt-8 sm:pb-20 lg:pt-10 lg:pb-24 bg-white relative overflow-hidden">
        {/* Ambient background glows */}
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-indigo-100/40 via-purple-100/20 to-transparent rounded-full blur-3xl -z-10 pointer-events-none" />
        <div className="absolute bottom-10 -left-20 w-[450px] h-[450px] bg-gradient-to-tr from-violet-100/40 via-pink-100/20 to-transparent rounded-full blur-3xl -z-10 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Brand Story & Capabilities */}
            <div className="lg:col-span-6 text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-indigo-50 border border-indigo-100 text-indigo-700 mb-6 shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse" />
                <span>The Package Branding Story</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-black tracking-tight leading-tight mb-5" style={{ color: '#000000' }}>
                We create stunning packaging that makes your brand unforgettable.
              </h2>

              <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6">
                We believe product packaging is your brand’s single most intimate consumer touchpoint. Long before a customer smells, tastes, or wears your product, they touch and open the packaging.
              </p>

              <p className="text-gray-600 text-base leading-relaxed mb-8">
                From luxury rigid gift boxes with magnetic closures to eco-friendly corrugated mailers, custom cosmetics dropper bottles, and stand-up retail pouches—our multidisciplinary studio delivers factory-ready technical precision backed by world-class branding aesthetics.
              </p>

              {/* Proof Highlights */}
              <div className="space-y-3.5 pt-6 border-t border-gray-100">
                {highlights.map((item, index) => (
                  <div key={index} className="flex items-center gap-3.5">
                    <span className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shadow-xs">
                      <svg
                        className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    <span className="text-sm sm:text-base font-medium text-gray-800">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Visual Luxury Showcase Card */}
            <div className="lg:col-span-6 relative mt-6 lg:mt-0">
              {/* Soft decorative background glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 via-violet-500/20 to-pink-500/10 rounded-3xl blur-2xl transform rotate-1 scale-95 -z-10" />

              <div className="relative rounded-3xl overflow-hidden border border-slate-200/90 shadow-2xl shadow-indigo-950/15 bg-white group">
                {/* Product Image */}
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img
                    src={aboutShowcase || '/about-showcase.jpg'}
                    alt="Packaging Branding Strategy & Identity Showcase"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 select-none"
                  />
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-80" />
                  
                  {/* Floating Overlay Badge on Card */}
                  <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-white/40 shadow-lg flex items-center justify-between">
                    <div>
                      <div className="text-xs uppercase tracking-wider font-bold text-indigo-600">
                        Signature Studio Standards
                      </div>
                      <div className="text-sm font-extrabold text-gray-900">
                        Engineered for Shelf Dominance & Unboxing Joy
                      </div>
                    </div>
                    <span className="w-8 h-8 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold text-xs">
                      ★
                    </span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 3. MIDDLE SECTION: 4 PACKAGING DESIGN PILLARS             */}
      {/* ========================================================= */}
      <section className="py-20 bg-slate-50 relative border-y border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-indigo-50 border border-indigo-100 text-indigo-700 mb-4 shadow-2xs">
              <span>Our Structural Philosophy</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-black tracking-tight mb-4" style={{ color: '#000000' }}>
              Built on Precision. Crafted for Shelf Impact.
            </h2>
            <p className="text-gray-600 text-base sm:text-lg">
              We look beyond surface graphics. Every packaging blueprint we create balances structural integrity, tactile consumer psychology, and factory manufacturability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pillar, idx) => (
              <div 
                key={idx} 
                className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:border-indigo-300 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                      {pillar.icon}
                    </div>
                    <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                      {pillar.tag}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="text-sm text-gray-600 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-gray-400">
                  <span>Pillar {pillar.step}</span>
                  <span className="text-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity">Learn more &rarr;</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 4. BOTTOM SECTION: 4-STAGE PROCESS BLUEPRINT              */}
      {/* ========================================================= */}
      <section className="py-20 lg:py-28 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-indigo-50 border border-indigo-100 text-indigo-700 mb-4 shadow-2xs">
              <span>How We Work</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-black tracking-tight mb-4" style={{ color: '#000000' }}>
              From Blank Canvas to Retail Shelves
            </h2>
            <p className="text-gray-600 text-base sm:text-lg">
              Our seamless end-to-end packaging development process eliminates costly printing mistakes and delivers launch-ready packaging on schedule.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {processSteps.map((step, idx) => (
              <div 
                key={idx} 
                className="relative p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:bg-white hover:border-indigo-300 hover:shadow-lg transition-all duration-300"
              >
                <div className="text-4xl font-extrabold text-indigo-200 mb-3 font-mono">
                  {step.num}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 5. BOTTOM SECTION: CLIENT ASSURANCES & GUARANTEES         */}
      {/* ========================================================= */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((val, idx) => (
              <div 
                key={idx} 
                className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-start gap-4 hover:border-indigo-200 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center flex-shrink-0">
                  {val.icon}
                </div>
                <div>
                  <h4 className="text-base font-bold text-gray-900 mb-1">
                    {val.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
