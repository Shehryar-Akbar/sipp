"use client";
import React from 'react';
import HorizontalScroller from './HorizontalScroller';

const ServiceSection = ({ title, subtitle, services, bgColor }) => {
  return (
    <section className={`py-12 md:py-20 px-4 ${bgColor} `}>
      <div className="max-w-7xl mx-auto ">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl! sm:text-4xl! md:text-5xl! font-extrabold leading-none mb-5!">
            {title}
          </h2>
          <p className="text-gray-600 mb-4 text-base sm:text-lg! lg:text-xl! leading-none! max-sm:leading-tight! xl:pr-4">
            {subtitle}
          </p>
        </div>

        <HorizontalScroller items={services} />
      </div>
    </section>
  );
};

export default ServiceSection;