"use client";
import React from 'react';
import ServiceSection from './ServiceSection';

const WebServicesSection = () => {
  const services = [
    {
      name: "Website Design",
      description: "Custom responsive websites",
      image: "/images/services/website-design.jpg"
    },
    {
      name: "E-commerce",
      description: "Online store solutions",
      image: "/images/services/ecommerce.jpg"
    },
    {
      name: "CMS",
      description: "Content management systems",
      image: "/images/services/cms.jpg"
    },
    {
      name: "SEO",
      description: "Search optimization",
      image: "/images/services/seo.jpg"
    },
    {
      name: "Digital Marketing",
      description: "Online campaigns",
      image: "/images/services/digital-marketing.jpg"
    },
    {
      name: "Email Templates",
      description: "Marketing email design",
      image: "/images/services/email-templates.jpg"
    }
  ];

  return (
    <ServiceSection 
      title="Web Design & Development"
      subtitle="Digital solutions to complement your print materials"
      services={services}
      bgColor="bg-white"
    />
  );
};

export default WebServicesSection;