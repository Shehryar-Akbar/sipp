"use client";
import React from 'react';
import ServiceSection from './ServiceSection';

const BookPublicationSection = () => {
  const services = [
    {
      name: "Textbooks",
      description: "Educational materials and workbooks",
      image: "/images/services/textbooks.jpg"
    },
    {
      name: "Training Manuals",
      description: "Corporate training materials",
      image: "/images/services/training-manuals.jpg"
    },
    {
      name: "Magazines",
      description: "Periodicals and publications",
      image: "/images/services/magazines.jpg"
    },
    {
      name: "Annual Reports",
      description: "Corporate reports and publications",
      image: "/images/services/annual-reports.jpg"
    },
    {
      name: "Corporate Books",
      description: "Softcover and hardcover binding",
      image: "/images/services/corporate-books.jpg"
    },
    {
      name: "Academic",
      description: "Multi-language educational content",
      image: "/images/services/academic.jpg"
    }
  ];

  return (
    <ServiceSection 
      title="Book & Publication Printing"
      subtitle="Complete book production from concept to finished product"
      services={services}
      bgColor="bg-gray-50"
    />
  );
};

export default BookPublicationSection;
