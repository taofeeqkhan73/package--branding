import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const services = [
    { name: 'Brand Packages', href: '/brand-packages', isRoute: true },
    { name: 'Digital Marketing Packages', href: '/digital-marketing-packages', isRoute: true },
    { name: 'SEO Packages', href: '/seo-packages', isRoute: true },
    { name: 'PPC Packages', href: '/ppc-packages', isRoute: true },
    { name: 'SMO Packages', href: '/smo-packages', isRoute: true },
    { name: 'SMM Packages', href: '/smm-packages', isRoute: true },
  ];

  const companyLinks = [
    { name: 'About Us', href: '/about', isRoute: true },
    { name: 'Services', href: '/#services', isRoute: false },
    { name: 'Contact Us', href: '/contact', isRoute: true },
  ];

  const socialLinks = [
    {
      name: 'Facebook',
      href: 'https://facebook.com',
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com',
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com',
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451c.979 0 1.778-.773 1.778-1.729V1.73C24 .774 23.205 0 22.225 0z" />
        </svg>
      ),
    },
    {
      name: 'Email',
      href: 'mailto:contact@packagebranding.com',
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-900 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-indigo-900/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        {/* Main 4-Column Grid with Expanded Column 4 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8 pb-16 border-b-[0.5px] border-slate-400" style={{ borderBottomWidth: '0.5px', borderBottomColor: '#94a3b8', borderBottomStyle: 'solid' }}>
          {/* Col 1: Brand Info (3/12) */}
          <div className="lg:col-span-3">
            <Link to="/" onClick={scrollToTop} className="flex items-center gap-2.5 cursor-pointer mb-4 inline-flex">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-700 to-violet-600 flex items-center justify-center text-white shadow-lg shadow-indigo-500/25">
                <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                  <line x1="12" y1="22.08" x2="12" y2="12" />
                </svg>
              </div>
              <span className="font-extrabold text-2xl tracking-tight text-white">
                Package <span className="text-indigo-500">Branding</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Empowering visionary businesses worldwide with iconic visual identities, packaging design, and strategic digital experiences.
            </p>

            {/* Social Media Links */}
            <div className="flex items-center gap-2.5">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:bg-indigo-600 hover:border-indigo-500 transition-all duration-300 flex items-center justify-center shadow-xs hover:shadow-md hover:shadow-indigo-500/25 cursor-pointer group"
                  aria-label={item.name}
                  title={item.name}
                >
                  <span className="transform group-hover:scale-110 transition-transform duration-200">
                    {item.icon}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Services (2/12) */}
          <div className="lg:col-span-2">
            <h5 className="text-white text-xs font-bold uppercase tracking-wider mb-4">
              Services
            </h5>
            <ul className="space-y-3">
              {services.map((item) => (
                <li key={item.name}>
                  {item.isRoute ? (
                    <Link
                      to={item.href}
                      className="text-sm text-slate-400 hover:text-white hover:underline transition-colors"
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <a
                      href={item.href}
                      className="text-sm text-slate-400 hover:text-white hover:underline transition-colors"
                    >
                      {item.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Company (2/12) */}
          <div className="lg:col-span-2">
            <h5 className="text-white text-xs font-bold uppercase tracking-wider mb-4">
              Company
            </h5>
            <ul className="space-y-3">
              {companyLinks.map((item) => (
                <li key={item.name}>
                  {item.isRoute ? (
                    <Link
                      to={item.href}
                      onClick={scrollToTop}
                      className="text-sm text-slate-400 hover:text-white hover:underline transition-colors"
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <a
                      href={item.href}
                      className="text-sm text-slate-400 hover:text-white hover:underline transition-colors"
                    >
                      {item.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Newsletter (Expanded - 5/12) */}
          <div className="lg:col-span-5">
            <h5 className="text-white text-xs font-bold uppercase tracking-wider mb-4">
              Stay Informed
            </h5>
            <p className="text-slate-400 text-sm mb-4">
              Subscribe for monthly branding trends, case studies, and design strategy.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
              />
              <Button
                type="submit"
                variant="primary"
                fullWidth
                size="md"
                rounded="xl"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-slate-500">
            © {new Date().getFullYear()} Package Branding Studio Inc. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4 text-xs text-slate-400">
              <Link to="/privacy" onClick={scrollToTop} className="hover:text-white cursor-pointer transition-colors">
                Privacy
              </Link>
              <span>•</span>
              <Link to="/terms" onClick={scrollToTop} className="hover:text-white cursor-pointer transition-colors">
                Terms
              </Link>
              <span>•</span>
              <Link to="/cookies" onClick={scrollToTop} className="hover:text-white cursor-pointer transition-colors">
                Cookies
              </Link>
            </div>

            {/* Back to top button */}
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-all cursor-pointer"
              title="Back to top"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
