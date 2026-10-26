import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import heroBg from '../assets/hero-bg.png';
import aboutShowcase from '../assets/about-showcase.jpg';
import Button from '../components/Button';
import CurrencyToggle from '../components/CurrencyToggle';
import { useCurrency } from '../context/CurrencyContext';
import { useInquiryModal } from '../context/InquiryModalContext';

const Home = () => {
  const { currency } = useCurrency();
  const { openInquiryModal } = useInquiryModal();

  // --- Contact Section State & Handlers ---
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    servicePackage: 'Brand - Brand & Packaging',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const servicePackageOptions = [
    {
      group: 'Brand & Packaging',
      options: [
        'Brand - Starter Package',
        'Brand - Brand & Packaging',
        'Brand - Enterprise Brand Transformation',
      ],
    },
    {
      group: 'SEO Packages',
      options: [
        'SEO - Local SEO Acceleration',
        'SEO - National Rank Authority',
        'SEO - Enterprise Organic Dominance',
      ],
    },
    {
      group: 'PPC Packages',
      options: [
        'PPC - Launch ROAS Engine',
        'PPC - Scale Performance Engine',
        'PPC - Omnichannel Domination',
      ],
    },
    {
      group: 'SMO Packages',
      options: [
        'SMO - Aesthetic Grid & Profile Revamp',
        'SMO - Viral Growth & Algorithmic Scale',
        'SMO - Omnichannel Brand Authority',
      ],
    },
    {
      group: 'SMM Packages',
      options: [
        'SMM - Viral Organic Traction',
        'SMM - Paid Acquisition & Scale',
        'SMM - Omnichannel Domination',
      ],
    },
    {
      group: 'Digital Marketing Packages',
      options: [
        'Digital Marketing - Full-Funnel Starter',
        'Digital Marketing - Omnichannel Growth Engine',
        'Digital Marketing - Enterprise Scale Matrix',
      ],
    },
  ];

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('http://localhost:5000/api/contacts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok && data.success) {
        setIsSubmitted(true);
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({
            name: '',
            email: '',
            company: '',
            servicePackage: 'Brand - Brand & Packaging',
            message: '',
          });
        }, 4500);
      } else {
        throw new Error(data.message || 'Submission failed');
      }
    } catch (err) {
      console.warn('Backend server offline or response error, simulating submission:', err.message);
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          company: '',
          servicePackage: 'Brand - Brand & Packaging',
          message: '',
        });
      }, 4500);
    } finally {
      setIsSubmitting(false);
    }
  };

  // --- About Section Highlights ---
  const aboutHighlights = [
    '500K+ Packaging Units Produced',
    'Awarded by Dieline & Pentawards',
    'Retail Ready for Sephora & Boutiques',
    '100% In-House 3D Designers',
  ];

  // --- Services Section Capabilities List ---
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
          <line x1="13.5" y1="13" x2="13.5" y2="13.01" strokeWidth="2.5" strokeLinecap="round" stroke="white" />
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

  // --- Branding Packages Section Tiers (Silver, Gold, Platinum) ---
  const brandingTiers = [
    {
      id: 'silver',
      name: 'Silver',
      subtitle: 'Starter & Foundation Branding',
      tagline: 'Essential branding & smart web solutions for ambitious startups.',
      priceUSD: '$1,200',
      priceINR: '₹39,999',
      period: 'one-time investment',
      popular: false,
      badge: 'Starter Choice',
      colorTheme: 'silver',
      features: [
        { text: 'Up to 3-5 Website Pages', included: true },
        { text: 'Fully Responsive', included: true },
        { text: 'Free Logo Design With two revision', included: true },
        { text: 'Web Hosting', included: true },
        { text: '1 Email Account', included: true },
        { text: 'SEO Package', included: true },
        { text: 'PPC Package', included: true },
        { text: 'SMO Package', included: true },
      ],
      buttonText: 'Buy Now',
    },
    {
      id: 'gold',
      name: 'Gold',
      subtitle: 'Complete Packaging & Scale',
      tagline: '3D packaging, brand guidelines & growth solutions for scaling brands.',
      priceUSD: '$2,800',
      priceINR: '₹79,999',
      period: 'one-time investment',
      popular: true,
      badge: '★ MOST POPULAR • GOLD EXCELLENCE',
      colorTheme: 'gold',
      features: [
        { text: 'Up to 5-7 Website Pages', included: true },
        { text: 'Fully Responsive', included: true },
        { text: 'Free Logo Design With three revision', included: true },
        { text: 'Web Hosting', included: true },
        { text: '2 Email Account', included: true },
        { text: 'Admin Access', included: true },
        { text: 'Brand Package', included: true },
        { text: 'Digital Marketing Package', included: true },
        { text: 'SMM Package', included: true },
      ],
      buttonText: 'Buy Now',
    },
    {
      id: 'platinum',
      name: 'Platinum',
      subtitle: 'Enterprise Luxury & Flagship Ecosystem',
      tagline: 'Luxury branding, premium packaging & omnichannel growth solutions.',
      priceUSD: '$5,500',
      priceINR: '₹1,49,999',
      period: 'one-time investment',
      popular: false,
      badge: 'VIP Exclusive',
      colorTheme: 'platinum',
      features: [
        { text: 'Up to 10-15 Website Pages', included: true },
        { text: 'Fully Responsive', included: true },
        { text: 'Free Logo Design With five revision', included: true },
        { text: 'Web Hosting', included: true },
        { text: '2 Email Account', included: true },
        { text: 'Admin Access', included: true },
        { text: 'SEO Package', included: true },
        { text: 'PPC Package', included: true },
        { text: 'SMO Package', included: true },
        { text: 'Brand Package', included: true },
        { text: 'Digital Marketing Package', included: true },
        { text: 'SMM Package', included: true },
      ],
      buttonText: 'Buy Now',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-gray-900">
      {/* ========================================================= */}
      {/* 1. HERO SECTION (#home)                                    */}
      {/* ========================================================= */}
      <section id="home" className="relative min-h-[90vh] flex flex-col justify-between pt-8 pb-32 sm:pt-10 sm:pb-36 lg:pt-14 lg:pb-40">
        {/* Background Image Container */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <img
            src={heroBg || '/hero-bg.png'}
            alt="Branding Workspace Showcase"
            className="w-full h-full object-cover object-right md:object-center select-none"
          />
          {/* Soft gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/75 via-white/45 to-white/75 lg:bg-gradient-to-r lg:from-white/85 lg:via-white/40 lg:to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          {/* Main Hero Header */}
          <div className="text-center lg:text-left max-w-3xl lg:max-w-2xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-black leading-tight mb-6" style={{ color: '#000000' }}>
              Strategy, Creativity & Performance in One Package
            </h1>

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

        {/* Positioned Stats */}
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

      {/* ========================================================= */}
      {/* 2. ABOUT SECTION (#about)                                  */}
      {/* ========================================================= */}
      <section id="about" className="pt-20 pb-10 sm:pt-24 sm:pb-12 lg:pt-32 lg:pb-16 bg-white relative overflow-hidden">
        {/* Ambient background glows */}
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-indigo-100/50 via-purple-100/30 to-transparent rounded-full blur-3xl -z-10 pointer-events-none" />
        <div className="absolute bottom-10 -left-20 w-[450px] h-[450px] bg-gradient-to-tr from-violet-100/40 via-pink-100/20 to-transparent rounded-full blur-3xl -z-10 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Brand Story & Capabilities */}
            <div className="lg:col-span-6 text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-indigo-50 border border-indigo-100 text-indigo-700 mb-6 shadow-sm">
                <span>About Package Branding</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-black tracking-tight leading-snug mb-5" style={{ color: '#000000' }}>
                We create stunning packaging that makes your brand unforgettable.
              </h2>

              <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-8">
                <strong className="text-gray-900 font-semibold">Package Branding</strong>, we believe product packaging is your brand’s most intimate consumer touchpoint. We engineer luxury unboxing journeys, 3D structural forms, and iconic visual identities that turn shelf browsers into loyal brand advocates.
              </p>

              {/* Quick Proof Highlights */}
              <div className="space-y-4 pt-6 border-t border-gray-100">
                {aboutHighlights.map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <span className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shadow-sm">
                      <svg
                        className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-emerald-600"
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
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 via-violet-500/20 to-pink-500/10 rounded-3xl blur-2xl transform rotate-1 scale-95 -z-10" />

              <div className="relative rounded-3xl overflow-hidden border border-slate-200/90 shadow-2xl shadow-indigo-950/15 bg-white group">
                <div className="relative overflow-hidden aspect-[3/2]">
                  <img
                    src={aboutShowcase || '/about-showcase.jpg'}
                    alt="Brand Strategy & Identity Showcase"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 select-none"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 3. SERVICES SECTION (#services)                            */}
      {/* ========================================================= */}
      <section id="services" className="pt-8 pb-20 sm:pt-10 sm:pb-24 lg:pt-12 lg:pb-28 bg-slate-50 relative overflow-hidden">
        {/* Decorative ambient elements */}
        <div className="absolute top-1/2 left-0 w-80 h-80 bg-indigo-200/20 blur-3xl rounded-full pointer-events-none -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-violet-200/20 blur-3xl rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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

          {/* Desktop Connected Architecture Layout (lg+) */}
          <div className="hidden lg:flex items-stretch justify-center max-w-5xl mx-auto w-full">
            {/* Left 3 Cards Column */}
            <div className="w-[310px] flex-shrink-0 flex flex-col justify-between gap-5">
              {serviceList.slice(0, 3).map((service) => (
                <Link
                  key={service.id}
                  to={service.link || '/#contact'}
                  className="w-full bg-white rounded-2xl p-5 border border-slate-200/90 shadow-md shadow-slate-200/50 hover:shadow-xl hover:border-indigo-400 transition-all duration-300 flex flex-col justify-between group cursor-pointer block text-left flex-1"
                >
                  <div>
                    {/* Icon and Heading side by side */}
                    <div className="flex items-center gap-3 mb-2.5">
                      <div className="w-11 h-11 rounded-xl bg-blue-600 border border-blue-500/40 text-white flex-shrink-0 flex items-center justify-center shadow-md shadow-blue-600/25 group-hover:scale-105 transition-all [&>svg]:w-6 [&>svg]:h-6">
                        {service.icon}
                      </div>

                      <h3 className="text-base font-bold text-gray-900 leading-snug">
                        {service.title}
                      </h3>
                    </div>

                    <p className="text-gray-600 text-xs leading-relaxed mb-3">
                      {service.desc}
                    </p>
                  </div>

                  <div className="pt-2.5 border-t border-slate-100 flex flex-wrap gap-1">
                    {service.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-gray-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </Link>
              ))}
            </div>

            {/* Center Hub & Circuit Connecting Lines */}
            <div className="flex-1 relative flex items-center justify-center min-h-[560px]">
              {/* Circuit SVG Lines with Animated Lasers (Strictly 2px with non-scaling-stroke) */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none"
                preserveAspectRatio="none"
                viewBox="0 0 100 100"
              >
                {/* 1. Base Circuit Track Lines - Exactly 2px */}
                {/* Horizontal trunk lines from Hub through Junctions into Middle Cards */}
                <line x1="50" y1="50" x2="0" y2="50" stroke="#cbd5e1" strokeWidth="2" vectorEffect="non-scaling-stroke" />
                <line x1="50" y1="50" x2="100" y2="50" stroke="#cbd5e1" strokeWidth="2" vectorEffect="non-scaling-stroke" />

                {/* Left continuous C-shaped bus line (Top Card -> Curve -> Vertical -> Curve -> Bottom Card) */}
                <path
                  d="M 0 16.7 H 12 Q 16 16.7 16 20.7 V 79.3 Q 16 83.3 12 83.3 H 0"
                  fill="none"
                  stroke="#cbd5e1"
                  strokeWidth="2"
                  vectorEffect="non-scaling-stroke"
                />

                {/* Right continuous backward C-shaped bus line (Top Card -> Curve -> Vertical -> Curve -> Bottom Card) */}
                <path
                  d="M 100 16.7 H 88 Q 84 16.7 84 20.7 V 79.3 Q 84 83.3 88 83.3 H 100"
                  fill="none"
                  stroke="#cbd5e1"
                  strokeWidth="2"
                  vectorEffect="non-scaling-stroke"
                />

                {/* 2. Animated Laser Pulse Trails (Increased height & prominence) */}
                {/* Left Top Laser (Ends right at the upper bend) */}
                <path
                  d="M 50 50 H 16 V 20.7 Q 16 16.7 12 16.7"
                  fill="none"
                  stroke="#38bdf8"
                  strokeWidth="4.5"
                  vectorEffect="non-scaling-stroke"
                  strokeLinecap="round"
                  strokeDasharray="30 140"
                  opacity="0.35"
                >
                  <animate attributeName="stroke-dashoffset" values="30; -75; -75" keyTimes="0; 0.85; 1" dur="2.4s" repeatCount="indefinite" />
                </path>
                <path
                  d="M 50 50 H 16 V 20.7 Q 16 16.7 12 16.7"
                  fill="none"
                  stroke="#0284c7"
                  strokeWidth="2.8"
                  vectorEffect="non-scaling-stroke"
                  strokeLinecap="round"
                  strokeDasharray="30 140"
                >
                  <animate attributeName="stroke-dashoffset" values="30; -75; -75" keyTimes="0; 0.85; 1" dur="2.4s" repeatCount="indefinite" />
                </path>

                {/* Left Middle Card Laser (Towards front card) */}
                <path
                  d="M 50 50 H 0"
                  fill="none"
                  stroke="#38bdf8"
                  strokeWidth="4.5"
                  vectorEffect="non-scaling-stroke"
                  strokeLinecap="round"
                  strokeDasharray="30 140"
                  opacity="0.35"
                >
                  <animate attributeName="stroke-dashoffset" values="30; -55; -55" keyTimes="0; 0.85; 1" dur="2.4s" repeatCount="indefinite" />
                </path>
                <path
                  d="M 50 50 H 0"
                  fill="none"
                  stroke="#0284c7"
                  strokeWidth="2.8"
                  vectorEffect="non-scaling-stroke"
                  strokeLinecap="round"
                  strokeDasharray="30 140"
                >
                  <animate attributeName="stroke-dashoffset" values="30; -55; -55" keyTimes="0; 0.85; 1" dur="2.4s" repeatCount="indefinite" />
                </path>

                {/* Left Bottom Laser (Ends right at the lower bend) */}
                <path
                  d="M 50 50 H 16 V 79.3 Q 16 83.3 12 83.3"
                  fill="none"
                  stroke="#38bdf8"
                  strokeWidth="4.5"
                  vectorEffect="non-scaling-stroke"
                  strokeLinecap="round"
                  strokeDasharray="30 140"
                  opacity="0.35"
                >
                  <animate attributeName="stroke-dashoffset" values="30; -75; -75" keyTimes="0; 0.85; 1" dur="2.4s" repeatCount="indefinite" />
                </path>
                <path
                  d="M 50 50 H 16 V 79.3 Q 16 83.3 12 83.3"
                  fill="none"
                  stroke="#0284c7"
                  strokeWidth="2.8"
                  vectorEffect="non-scaling-stroke"
                  strokeLinecap="round"
                  strokeDasharray="30 140"
                >
                  <animate attributeName="stroke-dashoffset" values="30; -75; -75" keyTimes="0; 0.85; 1" dur="2.4s" repeatCount="indefinite" />
                </path>

                {/* Right Top Laser (Ends right at the upper bend) */}
                <path
                  d="M 50 50 H 84 V 20.7 Q 84 16.7 88 16.7"
                  fill="none"
                  stroke="#38bdf8"
                  strokeWidth="4.5"
                  vectorEffect="non-scaling-stroke"
                  strokeLinecap="round"
                  strokeDasharray="30 140"
                  opacity="0.35"
                >
                  <animate attributeName="stroke-dashoffset" values="30; -75; -75" keyTimes="0; 0.85; 1" dur="2.4s" repeatCount="indefinite" />
                </path>
                <path
                  d="M 50 50 H 84 V 20.7 Q 84 16.7 88 16.7"
                  fill="none"
                  stroke="#0284c7"
                  strokeWidth="2.8"
                  vectorEffect="non-scaling-stroke"
                  strokeLinecap="round"
                  strokeDasharray="30 140"
                >
                  <animate attributeName="stroke-dashoffset" values="30; -75; -75" keyTimes="0; 0.85; 1" dur="2.4s" repeatCount="indefinite" />
                </path>

                {/* Right Middle Card Laser (Towards front card) */}
                <path
                  d="M 50 50 H 100"
                  fill="none"
                  stroke="#38bdf8"
                  strokeWidth="4.5"
                  vectorEffect="non-scaling-stroke"
                  strokeLinecap="round"
                  strokeDasharray="30 140"
                  opacity="0.35"
                >
                  <animate attributeName="stroke-dashoffset" values="30; -55; -55" keyTimes="0; 0.85; 1" dur="2.4s" repeatCount="indefinite" />
                </path>
                <path
                  d="M 50 50 H 100"
                  fill="none"
                  stroke="#0284c7"
                  strokeWidth="2.8"
                  vectorEffect="non-scaling-stroke"
                  strokeLinecap="round"
                  strokeDasharray="30 140"
                >
                  <animate attributeName="stroke-dashoffset" values="30; -55; -55" keyTimes="0; 0.85; 1" dur="2.4s" repeatCount="indefinite" />
                </path>

                {/* Right Bottom Laser (Ends right at the lower bend) */}
                <path
                  d="M 50 50 H 84 V 79.3 Q 84 83.3 88 83.3"
                  fill="none"
                  stroke="#38bdf8"
                  strokeWidth="4.5"
                  vectorEffect="non-scaling-stroke"
                  strokeLinecap="round"
                  strokeDasharray="30 140"
                  opacity="0.35"
                >
                  <animate attributeName="stroke-dashoffset" values="30; -75; -75" keyTimes="0; 0.85; 1" dur="2.4s" repeatCount="indefinite" />
                </path>
                <path
                  d="M 50 50 H 84 V 79.3 Q 84 83.3 88 83.3"
                  fill="none"
                  stroke="#0284c7"
                  strokeWidth="2.8"
                  vectorEffect="non-scaling-stroke"
                  strokeLinecap="round"
                  strokeDasharray="30 140"
                >
                  <animate attributeName="stroke-dashoffset" values="30; -75; -75" keyTimes="0; 0.85; 1" dur="2.4s" repeatCount="indefinite" />
                </path>
              </svg>

              {/* Perfectly Round Junction Dots (Non-distorting HTML circles with pulse) */}
              <div className="absolute left-[16%] top-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-slate-400 z-10 pointer-events-none ring-2 ring-white shadow-sm flex items-center justify-center">
                <span className="w-1 h-1 rounded-full bg-white opacity-80" />
              </div>

              <div className="absolute left-[84%] top-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-slate-400 z-10 pointer-events-none ring-2 ring-white shadow-sm flex items-center justify-center">
                <span className="w-1 h-1 rounded-full bg-white opacity-80" />
              </div>

              {/* Central Core Ecosystem Hub Badge */}
              <div className="relative z-20 group">
                {/* Outer Glow Halo */}
                <div className="absolute inset-0 bg-blue-500/30 rounded-2xl blur-xl group-hover:bg-indigo-500/40 transition-colors" />

                {/* Energy Pulse Ring radiating from Package Branding hub */}
                <div className="absolute -inset-1.5 rounded-2xl border border-sky-400/40 animate-pulse pointer-events-none" />

                <div className="relative w-32 sm:w-36 h-24 sm:h-28 rounded-2xl bg-gradient-to-b from-sky-400 via-blue-600 to-blue-800 p-1 shadow-2xl shadow-blue-500/30 flex flex-col items-center justify-center text-center text-white border border-white/30 transform group-hover:scale-105 transition-transform duration-300">
                  <div className="w-8 h-8 rounded-lg bg-white/20 backdrop-blur-md flex items-center justify-center mb-1 shadow-inner">
                    <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                      <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                      <line x1="12" y1="22.08" x2="12" y2="12" />
                    </svg>
                  </div>
                  <span className="font-extrabold text-[11px] sm:text-xs tracking-tight leading-tight uppercase">
                    PACKAGE <span className="text-sky-200">BRANDING</span>
                  </span>
                  <span className="text-[8px] text-sky-100 font-bold tracking-widest uppercase mt-0.5">
                    Core Platform
                  </span>
                </div>
              </div>
            </div>

            {/* Right 3 Cards Column */}
            <div className="w-[310px] flex-shrink-0 flex flex-col justify-between gap-5">
              {serviceList.slice(3, 6).map((service) => (
                <Link
                  key={service.id}
                  to={service.link || '/#contact'}
                  className="w-full bg-white rounded-2xl p-5 border border-slate-200/90 shadow-md shadow-slate-200/50 hover:shadow-xl hover:border-indigo-400 transition-all duration-300 flex flex-col justify-between group cursor-pointer block text-left flex-1"
                >
                  <div>
                    {/* Icon and Heading side by side */}
                    <div className="flex items-center gap-3 mb-2.5">
                      <div className="w-11 h-11 rounded-xl bg-blue-600 border border-blue-500/40 text-white flex-shrink-0 flex items-center justify-center shadow-md shadow-blue-600/25 group-hover:scale-105 transition-all [&>svg]:w-6 [&>svg]:h-6">
                        {service.icon}
                      </div>

                      <h3 className="text-base font-bold text-gray-900 leading-snug">
                        {service.title}
                      </h3>
                    </div>

                    <p className="text-gray-600 text-xs leading-relaxed mb-3">
                      {service.desc}
                    </p>
                  </div>

                  <div className="pt-2.5 border-t border-slate-100 flex flex-wrap gap-1">
                    {service.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-gray-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile & Tablet Fallback View (< lg) */}
          <div className="lg:hidden flex flex-col gap-6 max-w-md mx-auto sm:max-w-2xl">
            {/* Central Badge for Mobile */}
            <div className="flex justify-center mb-2">
              <div className="w-36 h-20 rounded-2xl bg-gradient-to-br from-sky-500 via-blue-600 to-indigo-700 p-1 shadow-lg flex flex-col items-center justify-center text-center text-white">
                <span className="font-extrabold text-[11px] tracking-tight uppercase">
                  PACKAGE <span className="text-sky-200">BRANDING</span>
                </span>
                <span className="text-[8px] text-sky-100 font-bold tracking-widest uppercase mt-0.5">
                  Core Platform
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {serviceList.map((service) => (
                <Link
                  key={service.id}
                  to={service.link || '/#contact'}
                  className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group cursor-pointer block text-left"
                >
                  <div>
                    <div className="flex items-center gap-3 mb-2.5">
                      <div className="w-11 h-11 rounded-xl bg-blue-600 border border-blue-500/40 text-white flex-shrink-0 flex items-center justify-center shadow-sm shadow-blue-600/20 [&>svg]:w-6 [&>svg]:h-6">
                        {service.icon}
                      </div>
                      <h3 className="text-base font-bold text-gray-900 leading-snug">
                        {service.title}
                      </h3>
                    </div>

                    <p className="text-gray-600 text-xs leading-relaxed mb-3">
                      {service.desc}
                    </p>
                  </div>

                  <div className="pt-2.5 border-t border-slate-100 flex flex-wrap gap-1">
                    {service.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-gray-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 4. BRANDING PACKAGES SECTION (#branding-packages)          */}
      {/* ========================================================= */}
      <section id="branding-packages" className="pt-8 sm:pt-12 lg:pt-14 pb-20 sm:pb-24 lg:pb-32 bg-white relative overflow-hidden">
        {/* Ambient background glows */}
        <div className="absolute top-1/4 -right-20 w-[500px] h-[500px] bg-gradient-to-bl from-amber-100/40 via-indigo-100/30 to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 -left-20 w-[500px] h-[500px] bg-gradient-to-tr from-violet-100/40 via-amber-100/20 to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl lg:max-w-5xl mx-auto mb-10 sm:mb-14">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-indigo-50 text-indigo-700 border border-indigo-100 mb-4 shadow-xs">
              Luxury Brand Architecture
            </span>
            <h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-black text-black tracking-tight leading-tight mb-4 text-balance"
              style={{ textWrap: 'balance' }}
            >
              Silver, Gold & Platinum Design Suites
            </h2>
            <p
              className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal mb-6 max-w-3xl mx-auto text-balance"
              style={{ textWrap: 'balance' }}
            >
              Fixed-price, fully managed branding and 3D packaging systems engineered to give your brand an insurmountable competitive edge on retail shelves and online.
            </p>
            <CurrencyToggle />
          </div>

          {/* Pricing Tiers Grid - Compact and Sleek */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7 items-stretch pt-6 max-w-5xl mx-auto">
            {brandingTiers.map((tier) => {
              const isSilver = tier.id === 'silver';
              const isGold = tier.id === 'gold';
              const isPlatinum = tier.id === 'platinum';

              return (
                <div
                  key={tier.id}
                  className="bg-white rounded-[26px] sm:rounded-[28px] overflow-hidden shadow-2xl border border-slate-100/90 flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:shadow-3xl max-w-[340px] md:max-w-none mx-auto w-full"
                >
                  {/* Top Colored Header Block with Wave Curve */}
                  <div
                    className={`relative text-white text-center pt-7 px-5 sm:px-6 ${
                      isGold
                        ? 'bg-gradient-to-r from-[#b45309] via-[#d97706] to-[#f59e0b]'
                        : isPlatinum
                        ? 'bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#334155]'
                        : 'bg-gradient-to-r from-[#475569] via-[#64748b] to-[#94a3b8]'
                    }`}
                  >
                    {/* Gold Plan Featured Pill Badge */}
                    {isGold && (
                      <div className="mb-2.5">
                        <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-[10px] sm:text-[11px] font-black uppercase tracking-wider bg-white/20 backdrop-blur-xs border border-white/35 text-white shadow-xs">
                          <span>★</span> MOST POPULAR • GOLD EXCELLENCE
                        </span>
                      </div>
                    )}

                    {/* Tier Name */}
                    <h3 className="text-3xl sm:text-4xl font-black text-white tracking-wider uppercase mb-1">
                      {tier.name}
                    </h3>

                    {/* Tier Subtitle */}
                    <p className="text-[10px] sm:text-[11px] font-bold text-white/95 uppercase tracking-wider mb-2">
                      {tier.subtitle}
                    </p>

                    {/* Tier Tagline */}
                    <p className="text-xs text-white/90 font-medium max-w-[260px] mx-auto leading-relaxed mb-4">
                      {tier.tagline}
                    </p>

                    {/* Pricing Display */}
                    <div className="flex items-baseline justify-center gap-1.5 mb-4">
                      <span className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                        {currency === 'USD' ? tier.priceUSD : tier.priceINR}
                      </span>
                      <span className="text-[10px] sm:text-xs font-bold text-white/90 uppercase tracking-wider">
                        / {tier.period}
                      </span>
                    </div>

                    {/* Organic Wave Divider */}
                    <div className="relative -mb-[1px] -mx-5 sm:-mx-6 overflow-hidden leading-none pointer-events-none">
                      <svg
                        viewBox="0 0 500 45"
                        preserveAspectRatio="none"
                        className="w-full h-8 sm:h-9 text-white fill-current block"
                      >
                        <path d="M0,15 C150,45 350,-5 500,25 L500,45 L0,45 Z" />
                      </svg>
                    </div>
                  </div>

                  {/* White Card Body: Features List & Button */}
                  <div className="px-5 pb-6 pt-3 sm:px-6 sm:pb-7 flex flex-col justify-between flex-1 bg-white">
                    {/* Deliverables List with 1px top border and plan-specific heading */}
                    <div className="border-t border-slate-200/90 pt-4 mb-8">
                      <span className="text-[11px] sm:text-xs font-black uppercase tracking-wider text-slate-900 block mb-3">
                        What's Included in {tier.name} Plan:
                      </span>
                      <div className="space-y-2.5 sm:space-y-3">
                        {tier.features.map((feature, fIdx) => (
                          <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-[13px] leading-snug">
                            <svg
                              className={`w-4 h-4 flex-shrink-0 mt-0.5 ${
                                isGold
                                  ? 'text-[#d97706]'
                                  : isPlatinum
                                  ? 'text-[#1e293b]'
                                  : 'text-[#64748b]'
                              }`}
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              strokeWidth="2.8"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-slate-700 font-medium">
                              {feature.text}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CTA Button */}
                    <div className="mt-auto pt-2">
                      <button
                        type="button"
                        onClick={() => openInquiryModal(tier)}
                        className={`w-full py-3.5 px-6 rounded-full font-black text-xs sm:text-sm tracking-wider uppercase text-white shadow-lg active:scale-[0.98] transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 select-none hover:brightness-105 hover:shadow-xl ${
                          isGold
                            ? 'bg-gradient-to-r from-[#b45309] via-[#d97706] to-[#f59e0b] shadow-amber-500/30 hover:shadow-amber-500/40'
                            : isPlatinum
                            ? 'bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#334155] shadow-slate-900/30 hover:shadow-slate-900/45'
                            : 'bg-gradient-to-r from-[#475569] via-[#64748b] to-[#94a3b8] shadow-slate-500/25 hover:shadow-slate-500/35'
                        }`}
                      >
                        {tier.buttonText.toUpperCase()}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>


        </div>
      </section>

      {/* ========================================================= */}
      {/* 5. CONTACT SECTION (#contact)                              */}
      {/* ========================================================= */}
      <section id="contact" className="py-24 lg:py-32 bg-slate-50/70 relative overflow-hidden">
        {/* Background Ambient Glows */}
        <div className="absolute top-1/4 -right-24 w-[500px] h-[500px] bg-gradient-to-bl from-indigo-100/40 via-violet-100/30 to-transparent rounded-full blur-3xl -z-10 pointer-events-none" />
        <div className="absolute bottom-10 -left-24 w-[500px] h-[500px] bg-gradient-to-tr from-violet-100/40 via-pink-100/20 to-transparent rounded-full blur-3xl -z-10 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Contact Info & Package Value Proposition */}
            <div className="lg:col-span-5 text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-indigo-50 border border-indigo-100 text-indigo-700 mb-6 shadow-xs">
                <span>Accepting New Packaging Projects</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-black tracking-tight leading-[1.15] mb-6" style={{ color: '#000000' }}>
                Let’s build your signature packaging experience.
              </h2>

              <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-8">
                Whether you are launching a flagship consumer product or redesigning an established retail line, our packaging directors transform ambitious vision into iconic, unboxing-worthy reality.
              </p>

              {/* Packaging Guarantee Cards */}
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100/90 hover:border-indigo-200 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 text-indigo-600 flex items-center justify-center flex-shrink-0 shadow-xs">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                      <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                      <line x1="12" y1="22.08" x2="12" y2="12" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-900">Turnkey Production Delivery</h4>
                    <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">
                      Factory-ready vector die-lines, 3D CAD unboxing mockups, and exact Pantone spot-color guides.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100/90 hover:border-indigo-200 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 text-indigo-600 flex items-center justify-center flex-shrink-0 shadow-xs">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
                      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-900">Sustainable Materials Advisory</h4>
                    <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">
                      FSC-certified rigid boards, compostable barrier films, soy inks, and luxury embossed textures.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Package Inquiry Form */}
            <div className="lg:col-span-7">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 via-violet-500/10 to-pink-500/5 rounded-3xl blur-2xl transform scale-95 -z-10" />

                <div className="bg-white border border-slate-200/90 p-8 sm:p-10 rounded-3xl shadow-2xl shadow-indigo-950/5 relative">
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
                    <form onSubmit={handleContactSubmit} className="space-y-6">
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
                            Services & Packages *
                          </label>
                          <select
                            value={formData.servicePackage}
                            onChange={(e) => setFormData({ ...formData, servicePackage: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl bg-slate-50/60 border border-slate-200 text-gray-900 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all cursor-pointer"
                          >
                            {servicePackageOptions.map((grp) => (
                              <optgroup key={grp.group} label={grp.group}>
                                {grp.options.map((pkg) => (
                                  <option key={pkg} value={pkg}>
                                    {pkg}
                                  </option>
                                ))}
                              </optgroup>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-gray-800 uppercase tracking-wider mb-2">
                          Tell us about your packaging & branding goals *
                        </label>
                        <textarea
                          rows="4"
                          required
                          placeholder="Detail your product category, box/bottle specifications, target retail channels (D2C, retail stores), and any timeline milestones..."
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-slate-50/60 border border-slate-200 text-gray-900 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all resize-none placeholder:text-gray-400"
                        />
                      </div>

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

export default Home;
