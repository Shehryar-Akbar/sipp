"use client";
import React from 'react';
import ServiceSection from './ServiceSection';

const CorporateIdentitySection = () => {
  const services = [
    {
      name: "Business Cards",
      description: "Premium cards with spot UV and embossing",
      image: "/images/services/business-cards.jpg"
    },
    {
      name: "Letterheads",
      description: "Custom branded stationery",
      image: "/images/services/letterheads.jpg"
    },
    {
      name: "Envelopes",
      description: "All standard sizes available",
      image: "/images/services/envelopes.jpg"
    },
    {
      name: "NCR Forms",
      description: "Carbonless forms and invoices",
      image: "/images/services/ncr-forms.jpg"
    },
    {
      name: "Folders",
      description: "Presentation kits and folders",
      image: "/images/services/folders.jpg"
    },
    {
      name: "Receipts",
      description: "Custom receipt books",
      image: "/images/services/receipts.jpg"
    }
  ];

  return (
    <ServiceSection 
      title="Corporate Identity & Business Materials"
      subtitle="Professional business printing for a powerful first impression"
      services={services}
      bgColor="bg-gray-50"
    />
  );
};

export default CorporateIdentitySection;