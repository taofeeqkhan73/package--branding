import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
  const [isDesktopServicesOpen, setIsDesktopServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDesktopServicesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const servicePackages = [
    { name: 'SEO Packages', to: '/seo-packages' },
    { name: 'Brand Packages', to: '/brand-packages' },
    { name: 'PPC Packages', to: '/ppc-packages' },
    { name: 'Digital Marketing Packages', to: '/digital-marketing-packages' },
    { name: 'SMO Packages', to: '/smo-packages' },
    { name: 'SMM Packages', to: '/smm-packages' },
  ];

  const handleNavClick = (href) => {
    setIsMobileMenuOpen(false);
    setIsDesktopServicesOpen(false);

    // Contact navigation: Always open the dedicated /contact page
    if (href === '#contact' || href === '/contact') {
      if (location.pathname === '/contact') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        navigate('/contact');
        window.scrollTo({ top: 0, behavior: 'instant' });
      }
      return;
    }

    // Home navigation:
    // If on Home page: scroll smoothly to top
    // If on any other page: navigate to '/' and scroll smoothly to top
    if (href === '#home' || href === '/') {
      if (location.pathname === '/') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        window.history.pushState(null, '', '/');
      } else {
        navigate('/');
        window.scrollTo({ top: 0, behavior: 'instant' });
      }
      return;
    }

    if (href.startsWith('#')) {
      if (location.pathname === '/') {
        const id = href.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        navigate(`/${href}`);
      }
    }
  };

  return (
    <nav className="sticky top-0 z-50 w-full backdrop-blur-lg bg-white/80 border-b border-gray-100 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            to="/"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex-shrink-0 flex items-center gap-2.5 cursor-pointer z-10"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-700 to-violet-600 flex items-center justify-center text-white shadow-lg shadow-indigo-500/25">
              <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                <line x1="12" y1="22.08" x2="12" y2="12" />
              </svg>
            </div>
            <span className="font-extrabold text-2xl tracking-tight bg-gradient-to-r from-gray-900 via-indigo-950 to-indigo-800 bg-clip-text text-transparent">
              Package <span className="text-indigo-600">Branding</span>
            </span>
          </Link>

          {/* Desktop Navigation Links (Centered) */}
          <div className="hidden md:flex items-center gap-8 absolute left-1/2 top-0 bottom-0 -translate-x-1/2 h-full z-10">
            <Link
              to="/"
              onClick={() => {
                setIsDesktopServicesOpen(false);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`text-sm font-bold transition-colors duration-200 py-2 cursor-pointer ${
                location.pathname === '/' && !location.hash
                  ? 'text-indigo-600'
                  : 'text-gray-700 hover:text-indigo-600'
              }`}
            >
              Home
            </Link>

            <Link
              to="/about"
              onClick={() => {
                setIsDesktopServicesOpen(false);
                window.scrollTo({ top: 0, behavior: 'instant' });
              }}
              className={`text-sm font-bold transition-colors duration-200 py-2 cursor-pointer ${
                location.pathname === '/about'
                  ? 'text-indigo-600'
                  : 'text-gray-700 hover:text-indigo-600'
              }`}
            >
              About
            </Link>

            {/* Services with Hover/Click Dropdown */}
            <div
              ref={dropdownRef}
              className="relative py-2"
              onMouseEnter={() => setIsDesktopServicesOpen(true)}
              onMouseLeave={() => setIsDesktopServicesOpen(false)}
            >
              <button
                type="button"
                onClick={() => setIsDesktopServicesOpen((prev) => !prev)}
                className="flex items-center gap-1.5 text-gray-700 hover:text-indigo-600 text-sm font-bold transition-colors duration-200 cursor-pointer"
              >
                <span>Services</span>
                <svg
                  className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
                    isDesktopServicesOpen ? 'rotate-180 text-indigo-600' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Dropdown Menu */}
              {isDesktopServicesOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-[480px] sm:w-[520px] z-50">
                  <div className="bg-white rounded-2xl shadow-2xl shadow-indigo-950/15 border border-slate-100 p-3 grid grid-cols-2 gap-2.5">
                    {servicePackages.map((item) => {
                      const isActive = location.pathname === item.to;
                      return (
                        <Link
                          key={item.name}
                          to={item.to}
                          onClick={() => {
                            setIsDesktopServicesOpen(false);
                            window.scrollTo({ top: 0, behavior: 'instant' });
                          }}
                          className={`w-full text-left px-4 py-3 rounded-xl font-bold text-sm transition-all border flex items-center justify-between group/item cursor-pointer ${
                            isActive
                              ? 'bg-gradient-to-r from-indigo-600 via-indigo-700 to-violet-700 text-white border-transparent shadow-md shadow-indigo-500/25'
                              : 'bg-slate-50 hover:bg-indigo-50/80 text-gray-900 hover:text-indigo-600 border-slate-100 hover:border-indigo-200 shadow-2xs hover:shadow-xs'
                          }`}
                        >
                          <span>{item.name}</span>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/contact"
              onClick={() => {
                setIsDesktopServicesOpen(false);
                window.scrollTo({ top: 0, behavior: 'instant' });
              }}
              className={`text-sm font-bold transition-colors duration-200 py-2 cursor-pointer ${
                location.pathname === '/contact'
                  ? 'text-indigo-600'
                  : 'text-gray-700 hover:text-indigo-600'
              }`}
            >
              Contact
            </Link>
          </div>


          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-gray-600 hover:text-indigo-600 hover:bg-gray-100 focus:outline-none transition-colors"
              aria-label="Toggle navigation menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white/95 backdrop-blur-md px-4 pt-4 pb-6 space-y-3">
          <Link
            to="/"
            onClick={() => {
              setIsMobileMenuOpen(false);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className={`w-full text-left px-3 py-2 rounded-md text-base font-bold transition-colors block ${
              location.pathname === '/' && !location.hash
                ? 'text-indigo-600 bg-indigo-50 font-extrabold'
                : 'text-gray-800 hover:text-indigo-600 hover:bg-indigo-50'
            }`}
          >
            Home
          </Link>

          <Link
            to="/about"
            onClick={() => {
              setIsMobileMenuOpen(false);
              window.scrollTo({ top: 0, behavior: 'instant' });
            }}
            className={`w-full text-left px-3 py-2 rounded-md text-base font-bold transition-colors block ${
              location.pathname === '/about'
                ? 'text-indigo-600 bg-indigo-50 font-extrabold'
                : 'text-gray-800 hover:text-indigo-600 hover:bg-indigo-50'
            }`}
          >
            About
          </Link>

          {/* Mobile Services Accordion */}
          <div>
            <div className="flex items-center justify-between px-3 py-2 rounded-md hover:bg-indigo-50">
              <button
                onClick={() => handleNavClick('#services')}
                className="text-base font-bold text-gray-800 hover:text-indigo-600 text-left"
              >
                Services
              </button>
              <button
                onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                className="p-1 text-gray-500 hover:text-indigo-600"
              >
                <svg
                  className={`w-5 h-5 transition-transform ${isMobileServicesOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>

            {isMobileServicesOpen && (
              <div className="pl-2 pt-2 pb-1 grid grid-cols-1 sm:grid-cols-2 gap-2">
                {servicePackages.map((item) => {
                  const isActive = location.pathname === item.to;
                  return (
                    <Link
                      key={item.name}
                      to={item.to}
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        setIsMobileServicesOpen(false);
                        window.scrollTo({ top: 0, behavior: 'instant' });
                      }}
                      className={`block px-4 py-2.5 rounded-xl text-sm font-bold border transition-colors ${
                        isActive
                          ? 'bg-gradient-to-r from-indigo-600 to-violet-700 text-white border-transparent'
                          : 'bg-slate-50 text-gray-800 hover:text-indigo-600 hover:bg-indigo-50 border-slate-100'
                      }`}
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </div>
            )}
          </div>

          <Link
            to="/contact"
            onClick={() => {
              setIsMobileMenuOpen(false);
              window.scrollTo({ top: 0, behavior: 'instant' });
            }}
            className={`w-full text-left px-3 py-2 rounded-md text-base font-bold transition-colors block ${
              location.pathname === '/contact'
                ? 'text-indigo-600 bg-indigo-50 font-extrabold'
                : 'text-gray-800 hover:text-indigo-600 hover:bg-indigo-50'
            }`}
          >
            Contact
          </Link>

        </div>
      )}
    </nav>
  );
};

export default Header;
