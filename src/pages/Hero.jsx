import React from 'react';
import heroBg from '../assets/hero-bg.png';
import Button from '../components/Button';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[90vh] flex flex-col justify-between pt-8 pb-32 sm:pt-10 sm:pb-36 lg:pt-14 lg:pb-40">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src={heroBg || '/hero-bg.png'}
          alt="Branding Workspace Showcase"
          className="w-full h-full object-cover object-right md:object-center select-none"
        />
        {/* Soft gradient overlay: keeps text readable while showing the full background image clearly */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/75 via-white/45 to-white/75 lg:bg-gradient-to-r lg:from-white/85 lg:via-white/40 lg:to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        {/* Main Hero Header */}
        <div className="text-center lg:text-left max-w-3xl lg:max-w-2xl">
          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-black leading-tight mb-6" style={{ color: '#000000' }}>
            Strategy, Creativity & Performance in One Package
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed mb-6 max-w-xl font-normal">
            Strategic branding, distinct visual identities, and bespoke digital experiences crafted to turn ambitious visions into unforgettable industry leaders.
          </p>

          {/* Feature Pills */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 max-w-xl mx-auto lg:mx-0">
            <div className="flex items-center gap-2.5 px-4 sm:px-5 py-2.5 rounded-full bg-white/95 border border-slate-200/90 shadow-sm text-xs sm:text-sm font-bold text-gray-900">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-500 flex-shrink-0" />
              <span>Creative Packaging Designs</span>
            </div>
            <div className="flex items-center gap-2.5 px-4 sm:px-5 py-2.5 rounded-full bg-white/95 border border-slate-200/90 shadow-sm text-xs sm:text-sm font-bold text-gray-900">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-500 flex-shrink-0" />
              <span>Premium Brand Identity</span>
            </div>
            <div className="flex items-center gap-2.5 px-4 sm:px-5 py-2.5 rounded-full bg-white/95 border border-slate-200/90 shadow-sm text-xs sm:text-sm font-bold text-gray-900">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-500 flex-shrink-0" />
              <span>Custom Packaging Solutions</span>
            </div>
            <div className="flex items-center gap-2.5 px-4 sm:px-5 py-2.5 rounded-full bg-white/95 border border-slate-200/90 shadow-sm text-xs sm:text-sm font-bold text-gray-900">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-500 flex-shrink-0" />
              <span>Personalized Brand Solutions</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <Button
              href="#contact"
              variant="primary"
              size="lg"
              className="w-full sm:w-auto"
              icon={
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              }
              iconPosition="right"
            >
              Get Started Free
            </Button>
            <Button
              href="#branding-packages"
              variant="outline"
              size="lg"
              className="w-full sm:w-auto"
              icon={
                <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              }
              iconPosition="left"
            >
              Explore Package
            </Button>
          </div>
        </div>
      </div>

      {/* Positioned Stats: bottom edge par overlap karte hue (5px aur neeche) */}
      <div className="absolute -bottom-[42px] sm:-bottom-[50px] lg:-bottom-[58px] left-0 right-0 z-30 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto bg-white border border-gray-200/90 rounded-2xl sm:rounded-3xl p-5 sm:p-6 shadow-xl shadow-slate-200/60">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-gray-100">
            <div className="pt-3 md:pt-0">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
                250+
              </div>
              <div className="text-xs sm:text-sm text-gray-500 mt-2 font-medium">
                Brands Transformed
              </div>
            </div>

            <div className="pt-3 md:pt-0">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-indigo-600 tracking-tight">
                18+
              </div>
              <div className="text-xs sm:text-sm text-gray-500 mt-2 font-medium">
                Design Awards
              </div>
            </div>

            <div className="pt-3 md:pt-0">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
                99%
              </div>
              <div className="text-xs sm:text-sm text-gray-500 mt-2 font-medium">
                Client Satisfaction
              </div>
            </div>

            <div className="pt-3 md:pt-0">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-violet-600 tracking-tight">
                10x
              </div>
              <div className="text-xs sm:text-sm text-gray-500 mt-2 font-medium">
                Average ROI
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
