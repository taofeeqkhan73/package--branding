import React from 'react';
import { useCurrency } from '../context/CurrencyContext';

const CurrencyToggle = () => {
  const { currency, setCurrency } = useCurrency();

  const toggleCurrency = () => {
    setCurrency((prev) => (prev === 'USD' ? 'INR' : 'USD'));
  };

  return (
    <div className="flex items-center justify-center gap-3 mt-7 mb-14 select-none">
      {/* USD Label (Fixed width, right-aligned to avoid any layout shift) */}
      <button
        type="button"
        onClick={() => setCurrency('USD')}
        className={`w-20 text-right text-base font-bold transition-colors duration-200 cursor-pointer ${
          currency === 'USD' ? 'text-gray-900' : 'text-gray-400 hover:text-gray-600'
        }`}
      >
        USD ($)
      </button>

      {/* Switch Toggle Slider (Fixed dimensions, locked in center) */}
      <button
        type="button"
        role="switch"
        aria-checked={currency === 'INR'}
        aria-label="Toggle currency between USD and INR"
        onClick={toggleCurrency}
        className="w-14 h-8 flex-shrink-0 flex items-center p-1 rounded-full bg-gradient-to-r from-indigo-600 via-indigo-700 to-violet-700 shadow-md shadow-indigo-500/20 cursor-pointer transition-colors duration-200 focus:outline-none"
      >
        <span
          className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-200 ease-in-out ${
            currency === 'INR' ? 'translate-x-6' : 'translate-x-0'
          }`}
        />
      </button>

      {/* INR Label (Fixed width, left-aligned to avoid any layout shift) */}
      <button
        type="button"
        onClick={() => setCurrency('INR')}
        className={`w-20 text-left text-base font-bold transition-colors duration-200 cursor-pointer ${
          currency === 'INR' ? 'text-gray-900' : 'text-gray-400 hover:text-gray-600'
        }`}
      >
        INR (₹)
      </button>
    </div>
  );
};

export default CurrencyToggle;
