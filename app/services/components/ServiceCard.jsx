"use client";
import React from 'react';

const ServiceCard = ({ service }) => {
  return (
    <div className="group bg-white border-2 border-gray-200 rounded-xl overflow-hidden min-w-[280px] sm:min-w-[320px] md:min-w-[360px] transition-all duration-300 hover:border-blue-500 hover:shadow-xl hover:-translate-y-2 cursor-pointer">
      {/* Image Container */}
      <div className="w-full h-48 md:h-56 bg-gray-100 overflow-hidden">
        <img 
          src={service.image || "/api/placeholder/400/300"} 
          alt={service.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      
      {/* Content */}
      <div className="p-5 md:p-6">
        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
          {service.name}
        </h3>
        <p className="text-sm md:text-base text-gray-600 leading-relaxed">
          {service.description}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;