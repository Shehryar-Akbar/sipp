"use client";
import React from 'react';
import ServiceSection from './ServiceSection';

const DesignServicesSection = () => {
  const services = [
    {
      name: "Logo Design",
      description: "Professional branding and identity",
      image: "/images/services/logo-design.jpg"
    },
    {
      name: "Brochure Design",
      description: "Marketing material layouts",
      image: "/images/services/brochure-design.jpg"
    },
    {
      name: "Magazine Layout",
      description: "Editorial and catalog design",
      image: "/images/services/magazine-layout.jpg"
    },
    {
      name: "Packaging Design",
      description: "Product packaging solutions",
      image: "/images/services/packaging-design.jpg"
    },
    {
      name: "Ad Design",
      description: "Advertisement and promotional",
      image: "/images/services/ad-design.jpg"
    },
    {
      name: "Social Graphics",
      description: "Social media visuals",
      image: "/images/services/social-graphics.jpg"
    },
    {
      name: "Pre-Press",
      description: "File prep and color separation",
      image: "/images/services/pre-press.jpg"
    },
    {
      name: "Proofing",
      description: "Quality checks and approvals",
      image: "/images/services/proofing.jpg"
    }
  ];

  return (
    <ServiceSection 
      title="Graphic Design & Pre-Press Services"
      subtitle="Professional design solutions with international expertise"
      services={services}
      bgColor="bg-gray-50"
    />
  );
};

export default DesignServicesSection;