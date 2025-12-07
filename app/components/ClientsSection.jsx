"use client";
import React from "react";

const LogoMarquee = () => {
  // Generate 53 logo paths - distribute across 4 rows
  const allLogos = Array.from({ length: 53 }, (_, i) => `/colorful/${i + 1}.png`);

  // Split into 4 rows (13-13-13-14 distribution)
  const row1Logos = allLogos.slice(0, 13);
  const row2Logos = allLogos.slice(13, 26);
  const row3Logos = allLogos.slice(26, 39);
  const row4Logos = allLogos.slice(39, 53);

  const MarqueeRow = ({ logos, reverse = false }) => {
    return (
      <div className="relative w-full overflow-hidden my-24">
        {/* Left gradient fade */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-linear-to-r from-white to-transparent z-10 pointer-events-none" />

        {/* Right gradient fade */}
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-linear-to-l from-white to-transparent z-10 pointer-events-none" />

        {/* Scrolling track */}
        <div className={`marquee-track ${reverse ? "reverse" : ""}`}>
          {/* Original + Duplicate → seamless loop */}
          {[0, 1].map((n) => (
            <div key={n} className="flex items-center gap-16 shrink-0">
              {logos.map((logo, i) => (
                <div
                  key={`${n}-${i}`}
                  className="shrink-0 w-[140px] h-[150px] flex items-center justify-center group"
                >
                  <img
                    src={logo}
                    alt={`Logo ${i + 1}`}
                    className="max-w-full max-h-full object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>

        <style jsx>{`
          .marquee-track {
            display: flex;
            width: max-content;
            animation: marquee 35s linear infinite;
          }

          .marquee-track.reverse {
            animation: marqueeReverse 35s linear infinite;
          }

          .marquee-track:hover {
            animation-play-state: paused;
          }

          @keyframes marquee {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(-50%);
            }
          }

          @keyframes marqueeReverse {
            from {
              transform: translateX(-50%);
            }
            to {
              transform: translateX(0);
            }
          }
        `}</style>
      </div>
    );
  };

  return (
    <div className="w-full py-8 overflow-hidden">
      <MarqueeRow logos={row1Logos} reverse={false} />
      <MarqueeRow logos={row2Logos} reverse={true} />
      <MarqueeRow logos={row3Logos} reverse={false} />
      <MarqueeRow logos={row4Logos} reverse={true} />
    </div>
  );
};

export default LogoMarquee;
