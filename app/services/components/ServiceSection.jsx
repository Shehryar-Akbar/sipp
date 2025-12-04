"use client";
import React from 'react';
import HorizontalScroller from './HorizontalScroller';

const ServiceSection = ({ title, subtitle, services, bgColor }) => {
  return (
    <section className={`py-12 md:py-20 px-4 ${bgColor}`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-5xl! md:text-5xl font-bold text-gray-900 mb-3 md:mb-4">
            {title}
          </h2>
          <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>

        <HorizontalScroller items={services} />
      </div>
    </section>
  );
};

export default ServiceSection;