"use client";
import React from 'react';
import ServiceSection from './ServiceSection';

const FinishingServicesSection = () => {
  const services = [
    {
      name: "Gloss Lamination",
      description: "Vibrant, protective finish",
      image: "/images/services/gloss-lamination.jpg"
    },
    {
      name: "Matte Lamination",
      description: "Elegant, smooth finish",
      image: "/images/services/matte-lamination.jpg"
    },
    {
      name: "Spot UV",
      description: "High-gloss accents",
      image: "/images/services/spot-uv.jpg"
    },
    {
      name: "Foil Stamping",
      description: "Gold, silver, holographic",
      image: "/images/services/foil-stamping.jpg"
    },
    {
      name: "Embossing",
      description: "Raised tactile designs",
      image: "/images/services/embossing.jpg"
    },
    {
      name: "Perfect Binding",
      description: "Professional book binding",
      image: "/images/services/perfect-binding.jpg"
    },
    {
      name: "Die Cutting",
      description: "Custom shape cutting",
      image: "/images/services/die-cutting.jpg"
    },
    {
      name: "Folding",
      description: "Various folding options",
      image: "/images/services/folding.jpg"
    }
  ];

  return (
    <ServiceSection 
      title="Premium Finishing Options"
      subtitle="Add the perfect touch to make your materials stand out"
      services={services}
      bgColor="bg-white"
    />
  );
};

export default FinishingServicesSection;