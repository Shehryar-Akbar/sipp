"use client";
import { useEffect, useRef, useCallback } from "react";
import { FilePlus, Target, Loader, Printer } from "lucide-react";

export const ScrollStackItem = ({ children, itemClassName = "" }) => (
  <div
    className={`scroll-stack-card w-11/12 h-[700px] p-8 rounded-[40px] max-sm:w-full! max-sm:h-[300px] shadow-2xl ${itemClassName}`.trim()}
  >
    {children}
  </div>
);

const ScrollStack = ({ children, className = "", stackGap = 20 }) => {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);
  const lastScrollTop = useRef(0);

  const updateCardTransforms = useCallback(() => {
    if (!cardsRef.current.length) return;

    const scrollTop = window.scrollY;
    const viewportHeight = window.innerHeight;
    const stickyTop = viewportHeight * 0.1;

    cardsRef.current.forEach((card, index) => {
      if (!card) return;

      const cardOffsetTop = card.offsetTop;
      const container = containerRef.current;
      const containerTop = container.getBoundingClientRect().top + scrollTop;

      // Calculate the target sticky position including the gap for this card
      const targetStickyPosition = stickyTop + index * stackGap;

      // When should this card start being sticky?
      // Subtract the gap so it reaches its final position smoothly
      const stickyStart = containerTop + cardOffsetTop - targetStickyPosition;

      // When should this card stop being sticky (when last card arrives)?
      const lastCard = cardsRef.current[cardsRef.current.length - 1];
      const lastCardOffsetTop = lastCard.offsetTop;
      const lastTargetPosition =
        stickyTop + (cardsRef.current.length - 1) * stackGap;
      const stickyEnd = containerTop + lastCardOffsetTop - lastTargetPosition;

      let translateY = 0;
      const scale = 1; // All cards same size

      if (scrollTop >= stickyStart && scrollTop <= stickyEnd) {
        // Card is sticky - pin it at the exact target position
        translateY =
          scrollTop - (containerTop + cardOffsetTop) + targetStickyPosition;
      } else if (scrollTop > stickyEnd) {
        // All cards scroll away together
        translateY =
          stickyEnd - (containerTop + cardOffsetTop) + targetStickyPosition;
      }

      // Round to avoid sub-pixel jittering
      translateY = Math.round(translateY);

      card.style.transform = `translate3d(0, ${translateY}px, 0) scale(${scale})`;
      card.style.transformOrigin = "top center";
      card.style.position = "relative";
      card.style.zIndex = index + 1;
      card.style.willChange = "transform";
    });

    lastScrollTop.current = scrollTop;
  }, [stackGap]);

  const handleScroll = useCallback(() => {
    requestAnimationFrame(() => {
      updateCardTransforms();
    });
  }, [updateCardTransforms]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const cards = Array.from(container.querySelectorAll(".scroll-stack-card"));
    cardsRef.current = cards;

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", updateCardTransforms, { passive: true });

    // Initial update
    requestAnimationFrame(() => {
      updateCardTransforms();
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateCardTransforms);
    };
  }, [handleScroll, updateCardTransforms]);

  return (
    <div ref={containerRef} className={`relative w-full ${className}`.trim()}>
      <div className="w-11/12 mx-auto flex flex-col items-center max-sm:w-full! max-sm:pt-16! gap-10 px-4 md:px-20 p-8">
        {children}
      </div>
    </div>
  );
};

// Demo component
export default function ScrollStackDemo() {
  return (
    <div className="w-full bg-gray-100">
      <ScrollStack>
        <ScrollStackItem itemClassName="bg-blue-500 text-white">
          <div className="flex justify-center items-center h-full relative">
            <div className="md:w-1/2">
              <h2 className="text-5xl! max-sm:text-2xl! leading-none max-sm:w-[70%] text-white font-bold mb-6">
                Pre-press file preparation
              </h2>
              <p className="text-3xl! opacity-90 leading-none! max-sm:text-lg! text-white">
                Ensuring files are print-ready with correct resolution, color
                modes, bleeds, and fonts embedded. This prevents costly errors
                and production delays during printing.
              </p>
            </div>
            <FilePlus
              size={400}
              className="max-sm:absolute max-sm:w-22 max-sm:right-0 max-sm:-top-42"
            />
          </div>
        </ScrollStackItem>

        <ScrollStackItem itemClassName="bg-purple-500 text-white">
          <div className="flex justify-center items-center h-full relative">
            <div className="md:w-1/2">
              <h2 className="text-5xl! max-sm:text-2xl! text-white max-sm:w-[70%] leading-none font-bold mb-6">
                Color calibration accuracy
              </h2>
              <p className="text-3xl! opacity-90 leading-none! max-sm:text-lg! text-white">
                Calibrating equipment to maintain consistent, accurate colors
                across all prints and batches. Proper color management ensures
                the final product matches client expectations and brand
                standards.
              </p>
            </div>
            <Target
              size={400}
              className="max-sm:absolute max-sm:w-22 max-sm:right-0 max-sm:-top-42"
            />
          </div>
        </ScrollStackItem>

        <ScrollStackItem itemClassName="bg-pink-500 text-white">
          <div className="flex justify-center items-center h-full relative">
            <div className="md:w-1/2">
              <h2 className="text-5xl! max-sm:text-2xl! text-white leading-none max-sm:w-[60%] font-bold mb-6">
                Precision press operation
              </h2>
              <p className="text-3xl! opacity-90 leading-none! max-sm:text-lg! text-white">
                Operating printing presses with exact registration, ink density,
                and pressure settings throughout the run. Skilled press
                operators monitor quality continuously to maintain consistency
                from first to last sheet.
              </p>
            </div>
            <Loader
              size={400}
              className="max-sm:absolute max-sm:w-22 max-sm:right-0 max-sm:-top-42"
            />
          </div>
        </ScrollStackItem>

        <ScrollStackItem itemClassName="bg-purple-600 text-white">
          <div className="flex justify-center items-center h-full relative">
            <div className="md:w-1/2">
              <h2 className="text-5xl! max-sm:text-2xl! text-white max-sm:w-[60%] leading-none font-bold mb-6">
                Post-press finishing quality
              </h2>
              <p className="text-3xl! opacity-90 leading-none! max-sm:text-lg! text-white">
                Executing cutting, folding, binding, and coating with precision
                to deliver a polished final product. Professional finishing
                transforms printed sheets into refined, durable materials that
                enhance perceived value.
              </p>
            </div>
            <Printer
              size={400}
              className="max-sm:absolute max-sm:w-22 max-sm:right-0 max-sm:-top-42"
            />
          </div>
        </ScrollStackItem>
      </ScrollStack>
    </div>
  );
}
