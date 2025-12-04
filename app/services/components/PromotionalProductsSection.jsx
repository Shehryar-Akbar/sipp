"use client";
import React from 'react';
import ServiceSection from './ServiceSection';

const PromotionalProductsSection = () => {
  const services = [
    {
      name: "Apparel Printing",
      description: "T-shirts, uniforms, caps",
      image: "/images/services/apparel.jpg"
    },
    {
      name: "Mugs & Cups",
      description: "Custom branded drinkware",
      image: "/images/services/mugs.jpg"
    },
    {
      name: "Branded Items",
      description: "Keychains, USB drives, pens",
      image: "/images/services/branded-items.jpg"
    },
    {
      name: "Calendars",
      description: "Wall and desk calendars",
      image: "/images/services/calendars.jpg"
    },
    {
      name: "Notebooks",
      description: "Diaries and planners",
      image: "/images/services/notebooks.jpg"
    },
    {
      name: "Custom Bags",
      description: "Shopping, school, leather bags",
      image: "/images/services/bags.jpg"
    },
    {
      name: "Badges & Pins",
      description: "Name badges and promotional pins",
      image: "/images/services/badges.jpg"
    },
    {
      name: "Accessories",
      description: "Business accessories and more",
      image: "/images/services/accessories.jpg"
    }
  ];

  return (
    <ServiceSection 
      title="Promotional Products"
      subtitle="Custom branded merchandise to extend your brand reach"
      services={services}
      bgColor="bg-white"
    />
  );
};

export default PromotionalProductsSection;