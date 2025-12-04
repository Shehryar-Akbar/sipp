"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";

// Dynamically import ScrollTrigger if available
let ScrollTrigger = null;
if (typeof window !== "undefined") {
  try {
    ScrollTrigger = require("gsap/ScrollTrigger").ScrollTrigger;
    gsap.registerPlugin(ScrollTrigger);
  } catch (e) {
    console.log("ScrollTrigger not available, continuing without it");
  }
}

export default function SmoothScroll({ children }) {
  useEffect(() => {
    // Initialize Lenis with optimized settings
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom easing for smooth feel
      orientation: "vertical", // Vertical scrolling
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false, // Disable on touch devices for better performance
      touchMultiplier: 2,
      infinite: false,
      // Enable smooth scrolling even when dragging scrollbar
      syncTouch: false,
      // Support for scroll thumb dragging
      touchInertiaMultiplier: 50,
    });

    // Make Lenis instance globally available for horizontal scrolling
    if (typeof window !== "undefined") {
      window.lenis = lenis;
    }

    // Animation frame loop
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Handle anchor links with smooth scrolling
    const handleAnchorClick = (e) => {
      const anchor = e.target.closest('a[href^="#"]');
      if (anchor) {
        const href = anchor.getAttribute("href");
        if (href && href !== "#") {
          e.preventDefault();
          const target = document.querySelector(href);
          if (target) {
            lenis.scrollTo(target, {
              offset: -80, // Account for fixed header
              duration: 1.5,
              easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            });
          }
        }
      }
    };

    // Add click listener for anchor links
    document.addEventListener("click", handleAnchorClick);

    // Integrate Lenis with GSAP ScrollTrigger if available
    if (ScrollTrigger) {
      lenis.on("scroll", ScrollTrigger.update);

      // Sync ScrollTrigger with Lenis scroll
      ScrollTrigger.scrollerProxy(document.body, {
        scrollTop(value) {
          if (arguments.length) {
            lenis.scrollTo(value, { immediate: true });
          }
          return lenis.scroll;
        },
        getBoundingClientRect() {
          return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight,
          };
        },
        pinType: document.body.style.transform ? "transform" : "fixed",
      });

      // Refresh ScrollTrigger when Lenis is ready
      ScrollTrigger.addEventListener("refresh", () => {
        lenis.resize();
      });
    }

    // Handle window resize
    const handleResize = () => {
      lenis.resize();
      if (ScrollTrigger) {
        ScrollTrigger.refresh();
      }
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      lenis.destroy();
      // Remove global reference
      if (typeof window !== "undefined") {
        delete window.lenis;
      }
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("click", handleAnchorClick);
      if (ScrollTrigger) {
        ScrollTrigger.removeEventListener("refresh", handleResize);
      }
    };
  }, []);

  return <>{children}</>;
}

