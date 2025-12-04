"use client";
import React from "react";
import ServiceSection from "./ServiceSection";

// Import your images here
// import offset_printing from "../../public/services/offset-printing.jpg";
// import digital_printing from "../../public/services/digital-printing.jpg";
// etc...

const PrintingSection = () => {
  const services = [
    {
      name: "Offset Printing",
      description: "High-volume commercial printing with premium quality",
      image: "/images/services/offset-printing.jpg",
      // image: offset_printing  // Use imported image
    },
    {
      name: "Digital Printing",
      description: "Fast, flexible printing for short runs",
      image: "/images/services/digital-printing.jpg",
    },
    {
      name: "Large Format",
      description: "Posters, banners, and oversized prints",
      image: "/images/services/large-format.jpg",
    },
    {
      name: "Color Printing",
      description: "1-4 color printing with Pantone matching",
      image: "/images/services/color-printing.jpg",
    },
  ];

  return (
    <ServiceSection
      title="Offset & Digital Printing"
      subtitle="High-quality printing solutions for every project size"
      services={services}
      bgColor="bg-white"
    />
  );
};

export default PrintingSection;
