"use client";
import React from 'react';
import ServiceSection from './ServiceSection';

const PackagingSection = () => {
  const services = [
    {
      name: "Custom Boxes",
      description: "Design and printing",
      image: "/images/services/custom-boxes.jpg"
    },
    {
      name: "Product Labels",
      description: "Custom labels and stickers",
      image: "/images/services/labels.jpg"
    },
    {
      name: "Hang Tags",
      description: "Product hang tags",
      image: "/images/services/hang-tags.jpg"
    },
    {
      name: "Gift Boxes",
      description: "Premium gift packaging",
      image: "/images/services/gift-boxes.jpg"
    },
    {
      name: "Carton Printing",
      description: "Shipping and storage",
      image: "/images/services/cartons.jpg"
    },
    {
      name: "Shrink Wrap",
      description: "Product protection",
      image: "/images/services/shrink-wrap.jpg"
    }
  ];

  return (
    <ServiceSection 
      title="Packaging & Label Printing"
      subtitle="Custom packaging solutions that protect and promote"
      services={services}
      bgColor="bg-gray-50"
    />
  );
};

export default PackagingSection;