import React, { createContext, useContext, useState, useEffect } from 'react';

const CurrencyContext = createContext();

export const CurrencyProvider = ({ children }) => {
  const [currency, setCurrency] = useState(() => {
    try {
      return localStorage.getItem('preferred_currency') || 'USD';
    } catch {
      return 'USD';
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('preferred_currency', currency);
    } catch (e) {
      console.error(e);
    }
  }, [currency]);

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency }}>
      {children}
    </CurrencyContext.Provider>
  );
};

export const useCurrency = () => {
  const context = useContext(CurrencyContext);
  if (!context) {
    throw new Error('useCurrency must be used within a CurrencyProvider');
  }
  return context;
};
