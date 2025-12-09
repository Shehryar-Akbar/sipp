"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const config = {
  radius: "rounded-[20px]",
  gap: "space-x-4",
  duration: 0.85,
  ease: [0.16, 1, 0.3, 1],
  accentMission: "#ff4757",
  accentVision: "#5352ed",
};

/* ===========================
   Animation Variants
   =========================== */

const desktopContentVariants = {
  closed: { opacity: 0, x: 40, pointerEvents: "none" },
  open: {
    opacity: 1,
    x: 0,
    pointerEvents: "auto",
    transition: {
      duration: config.duration * 0.55,
      ease: config.ease,
      delay: config.duration * 0.25,
    },
  },
};

const summaryVariants = {
  closed: { opacity: 1, pointerEvents: "auto" },
  open: {
    opacity: 0,
    pointerEvents: "none",
    transition: { duration: config.duration * 0.4, ease: config.ease },
  },
};

const mobileContentVariants = {
  initial: { height: 0, opacity: 0 },
  animate: {
    height: "auto",
    opacity: 1,
    transition: {
      height: { duration: 0.35, ease: "easeInOut" },
      opacity: { duration: 0.25, delay: 0.1 },
    },
  },
  exit: {
    height: 0,
    opacity: 0,
    transition: {
      height: { duration: 0.3, ease: "easeInOut" },
      opacity: { duration: 0.15 },
    },
  },
};

/* ===========================
   Accordion Item Component
   =========================== */

const AccordionItem = ({ title, content, color, isOpen, onClick }) => {
  const isSelected = isOpen === title;

  return (
    <>
      {/* DESKTOP PANEL */}
      <motion.div
        layout
        className={`
          ${config.radius} 
          hidden sm:flex
          bg-white shadow-xl overflow-hidden relative cursor-pointer
          transition-all 
          duration-[${config.duration}s] 
          ease-[${config.ease.join(",")}]
          ${
            isSelected
              ? "grow basis-[600px] min-w-[600px] shadow-2xl z-10 -translate-y-1"
              : "flex-none basis-[110px] min-w-[110px]"
          }
        `}
        style={{
          transitionDuration: `${config.duration}s`,
          transitionTimingFunction: `cubic-bezier(${config.ease.join(",")})`,
        }}
        onClick={onClick}
      >
        {/* Vertical Title */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center text-white"
          style={{
            backgroundColor: color,
            writingMode: "vertical-rl",
            textOrientation: "mixed",
          }}
          variants={summaryVariants}
          animate={isSelected ? "open" : "closed"}
        >
          <span className="text-5xl! font-extrabold tracking-widest">
            {title}
          </span>
        </motion.div>

        {/* Content */}
        <motion.div
          className="absolute inset-0 flex flex-col justify-center p-16"
          initial="closed"
          variants={desktopContentVariants}
          animate={isSelected ? "open" : "closed"}
        >
          <h3 className="text-5xl! font-black mb-10!" style={{ color: color }}>
            {title}
          </h3>
          <p className="text-gray-600 mb-4 text-base sm:text-lg! lg:text-xl! sm:leading-tight! max-sm:leading-none! max-w-xl">
            {content}
          </p>
        </motion.div>
      </motion.div>

      {/* MOBILE PANEL */}
      <div
        className={`sm:hidden w-full ${config.radius} bg-white overflow-hidden shadow-xl mb-4`}
      >
        <div
          className="p-6 flex items-center justify-between text-white text-xl font-extrabold cursor-pointer"
          style={{ backgroundColor: color }}
          onClick={onClick}
        >
          {title}
          <span
            className="text-3xl transition-transform duration-300"
            style={{ transform: isSelected ? "rotate(45deg)" : "rotate(0deg)" }}
          >
            +
          </span>
        </div>

        <AnimatePresence>
          {isSelected && (
            <motion.div
              variants={mobileContentVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="overflow-hidden"
            >
              <div className="p-8">
                <h3 className="text-3xl font-black mb-4" style={{ color }}>
                  {title}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {content}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

/* ===========================
   Main Component
   =========================== */

const Accordion = () => {
  const [openPanel, setOpenPanel] = useState("Mission");

  const panels = [
    {
      title: "Mission",
      content:
        "We ignite fearless creativity and empower builders, dreamers, and change-makers to turn bold ideas into reality — without compromise and with unrelenting passion. Our commitment is to foster a culture of innovation and collaboration.",
      color: config.accentMission,
    },
    {
      title: "Vision",
      content:
        "A world where imagination is the only boundary and every individual has the tools and freedom to shape the future they believe in. We aim to be the global platform connecting talent with opportunity and pushing the boundaries of what's possible.",
      color: config.accentVision,
    },
  ];

  return (
    <div className="min-h-full py-24 flex flex-col justify-center items-center p-8 font-inter">
      <h2 className="text-3xl! sm:text-4xl! md:text-5xl! lg:text-6xl! font-extrabold leading-none mb-5!">
        Our Mission & Vision
      </h2>

      <div
        className={`flex flex-col sm:flex-row ${config.gap} max-w-6xl w-full sm:h-[480px]`}
      >
        <AnimatePresence initial={false}>
          {panels.map((p) => (
            <AccordionItem
              key={p.title}
              {...p}
              isOpen={openPanel}
              onClick={() =>
                setOpenPanel((prev) => (prev === p.title ? null : p.title))
              }
            />
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Accordion;
