import React from "react";
// import { CheckCircle } from "lucide-react";
import Link from "next/link";
// import Image from "next/image";
// import hero1 from "../../public/contact/hero1.jpg";
// import DarkVeil from "./DarkVeil";
// Hero Section Component
const HeroSection = () => {
  return (
    <section className="h-screen! w-screen! relative overflow-hidden! bg-linear-to-r from-[#FE9900] via-[#FF4900] to-[#FE9900] bg-size-[400%_100%] animate-gradient-x">
      {/* <DarkVeil /> */}
      <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none max-sm:items-start max-sm:mt-16 max-xl:items-start! max-xl:mt-40">
        <div
          className="hero-heading-container pointer-events-auto mx-auto text-center
          lg:max-w-[90%] 2xl:max-w-[75%] max-sm:px-4 max-sm:pt-8"
        >
          <h1 className="font-bold text-white text-center leading-none drop-shadow-2xl mb-6 max-sm:text-5xl! sm:text-5xl! md:text-6xl! lg:text-8xl max-xl:text-7xl max-sm:text-left! xl:text-8xl!">
            Let's Bring Your Ideas to Print
          </h1>

          <p className="text-lg! sm:text-xl! md:text-3xl! max-sm:text-2xl! max-sm:text-left! max-sm:leading-[0.9]! text-white/80! lg:w-11/12  my-8! mx-auto drop-shadow-xl leading-7">
            Your trusted partner for professional printing services in
            Afghanistan. From brochures to books, business cards to banners, we
            deliver excellence in every print.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 justify-center max-sm:mt-8 md:mt-20!">
            <Link
              href="/"
              className="border border-white text-white px-20 py-4 max-sm:py-3! max-sm:w-[80%]! max-sm:px-16 rounded-full font-bold text-lg hover:bg-white hover:text-blue-600! transition-all inline-flex items-center justify-center shadow-xl backdrop-blur-sm bg-white/10"
            >
              Go back to home
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

