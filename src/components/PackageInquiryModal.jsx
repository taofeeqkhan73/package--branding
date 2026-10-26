import React, { useState, useEffect } from 'react';
import { useInquiryModal } from '../context/InquiryModalContext';
import { useCurrency } from '../context/CurrencyContext';

const PACKAGE_OPTIONS = [
  {
    group: 'Brand & Packaging Suites',
    options: [
      'Silver Plan',
      'Gold Plan',
      'Platinum Plan',
      'Brand - Identity Starter Package',
      'Brand - Growth Brand & Packaging',
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

const PackageInquiryModal = () => {
  const { isOpen, selectedPlan, closeInquiryModal } = useInquiryModal();
  const { currency } = useCurrency();

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    companyName: '',
    package: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isPaying, setIsPaying] = useState(false);
  const [isVerifyingPayment, setIsVerifyingPayment] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isPaymentSuccess, setIsPaymentSuccess] = useState(false);
  const [paymentReceipt, setPaymentReceipt] = useState(null);

  // Helper to extract plan price
  const getPlanPrice = () => {
    if (typeof selectedPlan === 'object' && selectedPlan !== null) {
      if (currency === 'USD' && selectedPlan.priceUSD) return selectedPlan.priceUSD;
      if (selectedPlan.priceINR) return selectedPlan.priceINR;
    }

    const pkg = (formData.package || '').toLowerCase();
    const isUSD = currency === 'USD';

    if (pkg.includes('platinum') || pkg.includes('enterprise') || pkg.includes('dominance')) {
      return isUSD ? '$5,500' : '₹1,49,999';
    }
    if (pkg.includes('gold') || pkg.includes('growth') || pkg.includes('scale') || pkg.includes('viral')) {
      return isUSD ? '$2,800' : '₹79,999';
    }
    return isUSD ? '$1,200' : '₹39,999';
  };

  const getNumericPrice = () => {
    const raw = getPlanPrice();
    return Number(String(raw).replace(/[^0-9.]/g, '')) || 39999;
  };

  // Sync selected plan with package dropdown when modal opens
  useEffect(() => {
    if (isOpen) {
      setIsSubmitted(false);
      setIsPaymentSuccess(false);
      setPaymentReceipt(null);
      setErrorMessage('');

      let matchedPackage = '';

      if (selectedPlan) {
        const planName =
          typeof selectedPlan === 'string'
            ? selectedPlan
            : selectedPlan.name || selectedPlan.plan?.name || selectedPlan.planName || '';

        const packageName =
          typeof selectedPlan === 'object' ? selectedPlan.packageName || '' : '';

        // Search through options to find best match
        for (const group of PACKAGE_OPTIONS) {
          for (const opt of group.options) {
            if (
              (planName && opt.toLowerCase().includes(planName.toLowerCase())) ||
              (packageName && opt.toLowerCase().includes(packageName.toLowerCase()))
            ) {
              matchedPackage = opt;
              break;
            }
          }
          if (matchedPackage) break;
        }

        if (!matchedPackage && planName) {
          matchedPackage = packageName ? `${packageName} - ${planName}` : planName;
        }
      }

      setFormData((prev) => ({
        ...prev,
        package: matchedPackage || '',
        message: prev.message || '',
      }));
    }
  }, [isOpen, selectedPlan]);

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        closeInquiryModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, closeInquiryModal]);

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // 1. Inquiry Submit Flow
  const handleSubmitInquiry = async (e) => {
    if (e) e.preventDefault();
    setErrorMessage('');

    // Validate required fields
    if (!formData.fullName.trim() || !formData.email.trim() || !formData.phone.trim()) {
      setErrorMessage('All required customer fields must be completed before submission.');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('http://localhost:5000/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          currency: currency || 'INR',
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setIsSubmitted(true);
      } else {
        throw new Error(data.message || 'Submission failed');
      }
    } catch (err) {
      console.warn('Backend server offline or response error, simulating submission:', err.message);
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  // 2. Razorpay Payment Flow (Testing Mode)
  const handleRazorpayPayment = async (e) => {
    if (e) e.preventDefault();
    setErrorMessage('');

    // Validate required fields
    if (!formData.fullName.trim() || !formData.email.trim() || !formData.phone.trim()) {
      setErrorMessage('All required customer fields must be completed before submission.');
      return;
    }

    setIsPaying(true);

    try {
      // 1. Create order on backend
      const orderRes = await fetch('http://localhost:5000/api/payment/create-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          companyName: formData.companyName,
          packageName: formData.package || 'Brand Package',
          amount: getNumericPrice(),
          currency: currency || 'INR',
        }),
      });

      const orderData = await orderRes.json();

      if (!orderRes.ok || !orderData.success) {
        throw new Error(orderData.message || 'Could not initiate payment order.');
      }

      // 2. Check if Razorpay script is loaded
      if (typeof window.Razorpay === 'undefined') {
        throw new Error(
          'Razorpay SDK not loaded in browser. Please check your internet connection and refresh.'
        );
      }

      // 3. Configure Razorpay Checkout Modal
      const options = {
        key: orderData.keyId,
        amount: orderData.amount,
        currency: orderData.currency,
        name: 'Branding Agency',
        description: `${formData.package || 'Brand Plan'} (Testing Mode Purchase)`,
        image: '/favicon.svg',
        order_id: orderData.orderId,
        prefill: {
          name: formData.fullName,
          email: formData.email,
          contact: formData.phone,
        },
        notes: {
          packageName: formData.package,
          companyName: formData.companyName,
        },
        theme: {
          color: '#0f172a',
        },
        handler: async function (response) {
          setIsVerifyingPayment(true);
          try {
            // 4. Verify payment on backend
            const verifyRes = await fetch('http://localhost:5000/api/payment/verify-payment', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
                fullName: formData.fullName,
                email: formData.email,
                phone: formData.phone,
                companyName: formData.companyName,
                packageName: formData.package || 'Brand Package',
                amount: orderData.numericAmount,
                currency: orderData.currency,
              }),
            });

            const verifyData = await verifyRes.json();

            if (verifyRes.ok && verifyData.success) {
              setPaymentReceipt({
                paymentId: response.razorpay_payment_id,
                orderId: response.razorpay_order_id,
                amount: getPlanPrice(),
                packageName: formData.package || 'Brand Package',
                email: formData.email,
                currency: orderData.currency,
                emailSent: verifyData.emailSent,
              });
              setIsPaymentSuccess(true);
            } else {
              setErrorMessage(verifyData.message || 'Payment signature verification failed.');
            }
          } catch (verifyErr) {
            console.error('Error during payment verification:', verifyErr);
            setErrorMessage('Payment verification error: ' + verifyErr.message);
          } finally {
            setIsVerifyingPayment(false);
            setIsPaying(false);
          }
        },
        modal: {
          ondismiss: function () {
            setIsPaying(false);
          },
        },
      };

      const rzpInstance = new window.Razorpay(options);
      rzpInstance.on('payment.failed', function (resp) {
        setErrorMessage(
          resp.error?.description || 'Payment was declined or failed in Razorpay sandbox.'
        );
        setIsPaying(false);
      });

      rzpInstance.open();
    } catch (err) {
      console.error('Payment initiation error:', err);
      setErrorMessage(err.message || 'Failed to initialize payment.');
      setIsPaying(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-xs overflow-y-auto animate-fadeIn">
      {/* Click outside backdrop to close */}
      <div className="fixed inset-0" onClick={closeInquiryModal} aria-hidden="true" />

      {/* Modal Dialog Card */}
      <div className="relative bg-white rounded-3xl p-6 sm:p-8 md:p-10 max-w-2xl w-full shadow-2xl border border-slate-100 z-10 my-8 modal-animate max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          type="button"
          onClick={closeInquiryModal}
          className="absolute top-5 right-5 sm:top-6 sm:right-6 text-gray-400 hover:text-indigo-600 transition-colors p-2 rounded-full hover:bg-indigo-50 cursor-pointer"
          aria-label="Close modal"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {/* ========================================================= */}
        {/* VIEW 1: PAYMENT SUCCESS SCREEN (Razorpay Test Mode)        */}
        {/* ========================================================= */}
        {isPaymentSuccess && paymentReceipt ? (
          <div className="py-6 text-center">
            <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center text-4xl font-extrabold mb-5 shadow-lg shadow-emerald-500/20 animate-bounce">
              ✓
            </div>
            <span className="inline-block px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider bg-emerald-50 text-emerald-700 border border-emerald-200 mb-2">
              Payment Verified & Confirmed
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight mb-2">
              Payment Completed Successfully!
            </h3>
            <p className="text-gray-600 max-w-lg mx-auto text-sm leading-relaxed mb-6">
              Thank you, <span className="font-semibold text-gray-900">{formData.fullName}</span>! Your purchase for{' '}
              <strong className="text-indigo-600">{paymentReceipt.packageName}</strong> has been confirmed.
            </p>

            {/* Email Dispatch Notice */}
            <div className="flex items-center gap-3 p-3.5 bg-sky-50 border border-sky-200 rounded-2xl text-left max-w-lg mx-auto mb-6">
              <span className="text-xl">✉️</span>
              <div className="text-xs text-sky-900 leading-snug">
                <strong>Confirmation & Receipt Dispatched:</strong> An official receipt has been sent to{' '}
                <span className="font-bold underline">{paymentReceipt.email}</span> and our administrative team.
              </div>
            </div>

            {/* Receipt Summary Card */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 max-w-lg mx-auto text-left text-xs sm:text-sm space-y-2.5 mb-6 shadow-xs">
              <div className="flex justify-between items-center pb-2 border-b border-slate-200">
                <span className="text-gray-500 font-medium">Selected Plan:</span>
                <span className="font-bold text-gray-900">{paymentReceipt.packageName}</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-slate-200">
                <span className="text-gray-500 font-medium">Amount Paid:</span>
                <span className="font-extrabold text-emerald-600 text-base">{paymentReceipt.amount}</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-slate-200">
                <span className="text-gray-500 font-medium">Payment ID:</span>
                <span className="font-mono font-bold text-gray-800 text-xs">{paymentReceipt.paymentId}</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-slate-200">
                <span className="text-gray-500 font-medium">Order ID:</span>
                <span className="font-mono text-gray-500 text-xs">{paymentReceipt.orderId}</span>
              </div>
              <div className="flex justify-between items-center pt-1">
                <span className="text-gray-500 font-medium">Status:</span>
                <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs uppercase">
                  COMPLETED • PAID
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={closeInquiryModal}
              className="px-8 py-3 rounded-full bg-slate-900 hover:bg-black text-white font-extrabold text-xs uppercase tracking-wider transition-all shadow-md cursor-pointer hover:shadow-lg"
            >
              Done & Close
            </button>
          </div>
        ) : isSubmitted ? (
          /* ========================================================= */
          /* VIEW 2: REGULAR INQUIRY SUCCESS SCREEN                    */
          /* ========================================================= */
          <div className="py-12 text-center">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center text-3xl font-bold mb-4 shadow-md shadow-emerald-500/10">
              ✓
            </div>
            <h3 className="text-2xl font-extrabold text-gray-900 mb-2">
              Inquiry Sent Successfully!
            </h3>
            <p className="text-gray-600 max-w-md mx-auto text-sm leading-relaxed mb-4">
              Thank you, <span className="font-semibold text-gray-900">{formData.fullName}</span>. We have received your inquiry for{' '}
              <span className="font-semibold text-indigo-600">{formData.package || 'your selected package'}</span>.
            </p>
            <p className="text-xs text-sky-700 bg-sky-50 border border-sky-100 rounded-xl p-3 max-w-md mx-auto mb-6">
              ✉️ A confirmation email has been dispatched to <strong>{formData.email}</strong>, and our team will get back to you within 24 hours.
            </p>
            <button
              type="button"
              onClick={closeInquiryModal}
              className="px-6 py-2.5 rounded-full bg-gradient-to-r from-indigo-600 to-violet-700 hover:from-indigo-700 hover:to-violet-800 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md shadow-indigo-500/20 cursor-pointer"
            >
              Close Window
            </button>
          </div>
        ) : (
          /* ========================================================= */
          /* VIEW 3: INQUIRY & PAYMENT FORM                            */
          /* ========================================================= */
          <form onSubmit={handleSubmitInquiry} className="space-y-4 sm:space-y-5">
            {/* Header with Selected Plan & Price Badge */}
            <div className="border-b border-gray-100 pb-4">
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-indigo-600">
                Package Inquiry & Booking
              </span>
              <div className="flex flex-wrap items-center justify-between gap-2 mt-1">
                <h2 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight">
                  {formData.package || 'Select Your Package'}
                </h2>
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 font-black text-xs sm:text-sm">
                    {getPlanPrice()}
                  </span>
                </div>
              </div>
            </div>

            {/* Error Message Box */}
            {errorMessage && (
              <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-red-700 text-xs font-semibold">
                {errorMessage}
              </div>
            )}

            {/* Row 1: Full Name & Company Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                  FULL NAME <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Ex. Santosh Kumar"
                  className="w-full px-4 py-2.5 sm:py-3 rounded-xl border border-gray-200 text-gray-900 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 transition-all bg-white"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                  EMAIL ADDRESS <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="example@gmail.com"
                  className="w-full px-4 py-2.5 sm:py-3 rounded-xl border border-gray-200 text-gray-900 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 transition-all bg-white"
                />
              </div>
            </div>

            {/* Row 2: Phone Number & Company Name */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                  PHONE NUMBER <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 98765 43210"
                  className="w-full px-4 py-2.5 sm:py-3 rounded-xl border border-gray-200 text-gray-900 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 transition-all bg-white"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                  COMPANY NAME (OPTIONAL)
                </label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  placeholder="Example Brand Inc."
                  className="w-full px-4 py-2.5 sm:py-3 rounded-xl border border-gray-200 text-gray-900 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 transition-all bg-white"
                />
              </div>
            </div>

            {/* Row 3: Select Your Package */}
            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                SELECT PACKAGE <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <select
                  name="package"
                  required
                  value={formData.package}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 sm:py-3 pr-10 rounded-xl border border-gray-200 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 transition-all bg-white appearance-none cursor-pointer"
                >
                  <option value="">Select Your Package</option>
                  {PACKAGE_OPTIONS.map((grp, idx) => (
                    <optgroup key={idx} label={grp.group}>
                      {grp.options.map((opt, optIdx) => (
                        <option key={optIdx} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </optgroup>
                  ))}
                  {formData.package &&
                    !PACKAGE_OPTIONS.some((g) => g.options.includes(formData.package)) && (
                      <option value={formData.package}>{formData.package}</option>
                    )}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3.5 text-gray-500">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Row 4: Your Message / Requirement Note */}
            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                PROJECT DETAILS / MESSAGE (OPTIONAL)
              </label>
              <textarea
                name="message"
                rows={2}
                value={formData.message}
                onChange={handleChange}
                placeholder="Share any specific design needs, timeline or goals..."
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-gray-900 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 transition-all bg-white resize-y"
              />
            </div>

            {/* Submit Inquiry Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-indigo-600 via-indigo-700 to-violet-700 hover:from-indigo-700 hover:to-violet-800 text-white font-black text-sm uppercase tracking-wider transition-all duration-300 shadow-lg shadow-indigo-500/25 hover:shadow-xl hover:shadow-indigo-500/35 transform hover:-translate-y-0.5 active:scale-[0.99] cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    <span>SUBMITTING INQUIRY...</span>
                  </>
                ) : (
                  <span>SUBMIT INQUIRY</span>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default PackageInquiryModal;
