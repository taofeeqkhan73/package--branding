import React, { createContext, useContext, useState } from 'react';

const InquiryModalContext = createContext();

export const InquiryModalProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);

  const openInquiryModal = (planData = null) => {
    setSelectedPlan(planData);
    setIsOpen(true);
  };

  const closeInquiryModal = () => {
    setIsOpen(false);
    setSelectedPlan(null);
  };

  return (
    <InquiryModalContext.Provider
      value={{
        isOpen,
        selectedPlan,
        openInquiryModal,
        closeInquiryModal,
      }}
    >
      {children}
    </InquiryModalContext.Provider>
  );
};

export const useInquiryModal = () => {
  const context = useContext(InquiryModalContext);
  if (!context) {
    throw new Error('useInquiryModal must be used within an InquiryModalProvider');
  }
  return context;
};
