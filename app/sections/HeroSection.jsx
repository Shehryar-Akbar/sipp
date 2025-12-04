"use client";
import React, { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import ImageTrail from "../components/ImageTrail";
import Link from "next/link";
import CircularText from "../components/CircularText";
import SplitMenu from "../components/SplitMenu";

// Hero Section
const HeroSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* Gradient Background for Mobile */}
      {isMobile && (
        <div className="absolute inset-0 bg-radial from-[#552DCC] via-[#402099] to-[#402099] z-1" />
      )}

      {/* Image Trail - Desktop Only */}
      {!isMobile && (
        <ImageTrail
          images={[
            "/portfolio/img1.jpg",
            "/portfolio/img2.jpg",
            "/portfolio/img3.jpg",
            "/portfolio/img4.jpg",
            "/portfolio/img5.jpg",
            "/portfolio/img6.jpg",
            "/portfolio/img7.jpg",
            "/portfolio/img8.jpg",
            "/portfolio/img9.jpg",
            "/portfolio/img10.jpg",
          ]}
        />
      )}

      {/* Dark Overlay for Text Readability - Desktop Only */}
      {!isMobile && (
        <div className="absolute inset-0 bg-radial from-[#552DCC] via-[#402099] to-[#612099] z-1" />
      )}

      {/* Hero Content - Always on top */}
      <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none max-sm:items-start max-sm:mt-16 max-xl:items-start! max-xl:mt-40">
        <div
          className="hero-heading-container pointer-events-auto mx-auto text-center
          lg:max-w-[90%] 2xl:max-w-[75%] max-sm:px-4 max-sm:pt-8"
        >
          <h1 className="font-bold text-white text-center leading-none drop-shadow-2xl mb-6 max-sm:text-5xl! sm:text-5xl! md:text-6xl! lg:text-8xl max-xl:text-7xl max-sm:text-left! xl:text-8xl!">
            Best Printing Services in Afghanistan. We Print What You Think
          </h1>

          <p className="text-lg! sm:text-xl! md:text-3xl! max-sm:text-2xl! max-sm:text-left! max-sm:leading-[0.9]! text-white/80! lg:w-11/12  my-8! mx-auto drop-shadow-xl leading-7">
            Your trusted partner for professional printing services in
            Afghanistan. From brochures to books, business cards to banners, we
            deliver excellence in every print.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center max-sm:mt-8 md:mt-20!">
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-20 py-4 max-sm:py-3! max-sm:w-[80%]! max-sm:px-16 rounded-full font-bold text-lg hover:bg-blue-50 transform hover:scale-105 transition-all inline-flex items-center justify-center shadow-xl"
            >
              Get a Quote <ArrowRight className="ml-2" />
            </Link>
            <Link
              href="/portfolio"
              className="border-2 border-white text-white px-20 py-4 max-sm:py-3! max-sm:w-[80%]! max-sm:px-16 rounded-full font-bold text-lg hover:bg-white hover:text-blue-600! transition-all inline-flex items-center justify-center shadow-xl backdrop-blur-sm bg-white/10"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </div>

      {/* Circular Text - Bottom Left */}
      <div className="absolute bottom-12 left-8 z-20 pointer-events-auto max-sm:hidden">
        <CircularText
          text="STRENGTH INNOVATION KABUL "
          onHover="speedUp"
          spinDuration={20}
          className="custom-class"
        />
      </div>
      <div className="absolute bottom-16 right-8 z-20 max-sm:hidden! pointer-events-auto border-[3px] border-orange-400 rounded-2xl p-4 max-sm:bottom-4 max-sm:right-4!">
        <SplitMenu />
      </div>
    </section>
  );
};

export default HeroSection;
