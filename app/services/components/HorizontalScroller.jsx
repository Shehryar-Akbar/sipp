"use client";
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ServiceCard from './ServiceCard';

const HorizontalScroller = ({ items }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollContainerRef = React.useRef(null);

  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = 360;
      const newPosition = direction === 'left' 
        ? Math.max(0, scrollPosition - scrollAmount)
        : Math.min(container.scrollWidth - container.clientWidth, scrollPosition + scrollAmount);
      
      container.scrollTo({ left: newPosition, behavior: 'smooth' });
      setScrollPosition(newPosition);
    }
  };

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      setScrollPosition(scrollContainerRef.current.scrollLeft);
    }
  };

  React.useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      const handleResize = () => {
        setScrollPosition(container.scrollLeft);
      };
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  const canScrollLeft = scrollPosition > 5;
  const canScrollRight = scrollContainerRef.current 
    ? scrollPosition < scrollContainerRef.current.scrollWidth - scrollContainerRef.current.clientWidth - 5
    : true;

  return (
    <div className="relative py-4">
      {/* Left Arrow */}
      {canScrollLeft && (
        <button
          onClick={() => scroll('left')}
          className="hidden md:flex absolute -left-40 top-1/2 -translate-y-1/2 z-10 bg-white shadow-xl rounded-full! p-4 md:p-3 hover:bg-gray-50 transition-all duration-300 border-2 border-gray-200 hover:border-blue-500"
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-gray-700" />
        </button>
      )}

      {/* Scrollable Container */}
      <div
        ref={scrollContainerRef}
        onScroll={handleScroll}
        className="flex gap-4 md:gap-6 overflow-x-auto scroll-smooth px-4 md:px-8 pb-6 md:pt-8"
        style={{ 
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          WebkitOverflowScrolling: 'touch'
        }}
      >
        {items.map((item, index) => (
          <ServiceCard key={index} service={item} />
        ))}
      </div>

      {/* Right Arrow */}
      {canScrollRight && (
        <button
          onClick={() => scroll('right')}
          className="hidden md:flex absolute -right-40 top-1/2 -translate-y-1/2 z-10 bg-white shadow-xl rounded-full! p-4 md:p-3 hover:bg-gray-50 transition-all duration-300 border-2 border-gray-200 hover:border-blue-500"
          aria-label="Scroll right"
        >
          <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-gray-700" />
        </button>
      )}

      {/* Mobile Scroll Indicator */}
      <div className="md:hidden flex justify-center gap-2 mt-2">
        {canScrollLeft && (
          <button
            onClick={() => scroll('left')}
            className="bg-gray-200 rounded-full! p-2 hover:bg-gray-300 transition-colors"
          >
            <ChevronLeft className="w-5 h-5 text-gray-700" />
          </button>
        )}
        {canScrollRight && (
          <button
            onClick={() => scroll('right')}
            className="bg-gray-200 rounded-full! p-2 hover:bg-gray-300 transition-colors"
          >
            <ChevronRight className="w-5 h-5 text-gray-700" />
          </button>
        )}
      </div>

      {/* Hide scrollbar */}
      <style jsx>{`
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default HorizontalScroller; 