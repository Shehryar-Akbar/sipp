"use client";
import React from 'react';
import ServiceSection from './ServiceSection';

const MarketingSection = () => {
  const services = [
    {
      name: "Brochures & Flyers",
      description: "Bi-fold, tri-fold, multi-page designs",
      image: "/images/services/brochures.jpg"
    },
    {
      name: "Posters & Banners",
      description: "Indoor/outdoor, vinyl, panaflex",
      image: "/images/services/posters.jpg"
    },
    {
      name: "Catalogs",
      description: "Product catalogs and directories",
      image: "/images/services/catalogs.jpg"
    },
    {
      name: "Direct Mail",
      description: "Marketing campaigns and mailers",
      image: "/images/services/direct-mail.jpg"
    },
    {
      name: "POS Materials",
      description: "Point-of-sale displays",
      image: "/images/services/pos-materials.jpg"
    },
    {
      name: "Promotional",
      description: "Marketing materials and signage",
      image: "/images/services/promotional.jpg"
    }
  ];

  return (
    <ServiceSection 
      title="Marketing & Promotional Materials"
      subtitle="Eye-catching marketing solutions to promote your business"
      services={services}
      bgColor="bg-white"
    />
  );
};

export default MarketingSection;