"use client";

import { useEffect, useRef } from "react";

/**
 * Hook to get Lenis instance for horizontal scrolling or custom scroll operations
 * This ensures compatibility with Lenis smooth scrolling
 * 
 * Usage:
 * const lenis = useLenis();
 * 
 * For horizontal scrolling:
 * lenis?.scrollTo(element, { horizontal: true, ...options });
 */
export function useLenis() {
  const lenisRef = useRef(null);

  useEffect(() => {
    // Get Lenis instance from window if available
    if (typeof window !== "undefined" && window.lenis) {
      lenisRef.current = window.lenis;
    }

    // Alternative: Try to get from document
    const checkLenis = () => {
      if (document.body && document.body.lenis) {
        lenisRef.current = document.body.lenis;
      }
    };

    // Check after a short delay to ensure Lenis is initialized
    const timeout = setTimeout(checkLenis, 100);

    return () => clearTimeout(timeout);
  }, []);

  return lenisRef.current;
}

// /**
//  * Hook for horizontal scrolling elements
//  * Prevents vertical scroll interference when scrolling horizontally
//  * 
//  * Usage:
//  * const horizontalScrollRef = useHorizontalScroll();
//  * 
//  * <div ref={horizontalScrollRef} className="overflow-x-auto">
//  *   {/* horizontal content */}
//  * </div>
//  */
export function useHorizontalScroll() {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    let isScrolling = false;
    let startX = 0;
    let scrollLeft = 0;

    const handleWheel = (e) => {
      // Check if horizontal scroll is intended
      const isHorizontalScroll = Math.abs(e.deltaX) > Math.abs(e.deltaY);
      
      if (isHorizontalScroll) {
        e.preventDefault();
        element.scrollLeft += e.deltaX;
      }
      // If vertical scroll, let Lenis handle it
    };

    const handleMouseDown = (e) => {
      isScrolling = true;
      startX = e.pageX - element.offsetLeft;
      scrollLeft = element.scrollLeft;
    };

    const handleMouseMove = (e) => {
      if (!isScrolling) return;
      e.preventDefault();
      const x = e.pageX - element.offsetLeft;
      const walk = (x - startX) * 2;
      element.scrollLeft = scrollLeft - walk;
    };

    const handleMouseUp = () => {
      isScrolling = false;
    };

    const handleMouseLeave = () => {
      isScrolling = false;
    };

    element.addEventListener("wheel", handleWheel, { passive: false });
    element.addEventListener("mousedown", handleMouseDown);
    element.addEventListener("mousemove", handleMouseMove);
    element.addEventListener("mouseup", handleMouseUp);
    element.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      element.removeEventListener("wheel", handleWheel);
      element.removeEventListener("mousedown", handleMouseDown);
      element.removeEventListener("mousemove", handleMouseMove);
      element.removeEventListener("mouseup", handleMouseUp);
      element.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return ref;
}

