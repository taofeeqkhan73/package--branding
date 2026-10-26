import React from 'react';
// Updated routes cache bust
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import SeoPackages from './pages/SeoPackages';
import PpcPackages from './pages/PpcPackages';
import SmoPackages from './pages/SmoPackages';
import BrandPackages from './pages/BrandPackages';
import DigitalMarketingPackages from './pages/DigitalMarketingPackages';
import SmmPackages from './pages/SmmPackages';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import CookiePolicy from './pages/CookiePolicy';
import { CurrencyProvider } from './context/CurrencyContext';
import { InquiryModalProvider } from './context/InquiryModalContext';
import PackageInquiryModal from './components/PackageInquiryModal';
import './App.css';

function App() {
  return (
    <CurrencyProvider>
      <InquiryModalProvider>
        <Router>
          <ScrollToTop />
          <div className="min-h-screen bg-slate-50 text-gray-900 flex flex-col justify-between">
            <div>
              <Header />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/brand-packages" element={<BrandPackages />} />
                <Route path="/digital-marketing-packages" element={<DigitalMarketingPackages />} />
                <Route path="/seo-packages" element={<SeoPackages />} />
                <Route path="/ppc-packages" element={<PpcPackages />} />
                <Route path="/smo-packages" element={<SmoPackages />} />
                <Route path="/smm-packages" element={<SmmPackages />} />
                
                {/* Legal & Compliance Routes */}
                <Route path="/privacy" element={<PrivacyPolicy />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/terms" element={<TermsOfService />} />
                <Route path="/terms-of-service" element={<TermsOfService />} />
                <Route path="/cookies" element={<CookiePolicy />} />
                <Route path="/cookie-policy" element={<CookiePolicy />} />

                {/* Fallback to Home */}
                <Route path="*" element={<Home />} />
              </Routes>
            </div>
            <Footer />
          </div>
          <PackageInquiryModal />
        </Router>
      </InquiryModalProvider>
    </CurrencyProvider>
  );
}

export default App;
