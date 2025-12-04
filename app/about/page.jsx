import React from "react";
import ServicesSection from "../sections/ServicesSection";
import ContactSection from "../sections/ContactSection";
import VisualEffectsSlider from "./VisualEffectsSlider";
import CeoMessage from "./CeoMessage";
import TeamMembers from "./TeamMembers";
import VisionMisson from "./Accordion";

const AboutHero = () => {
  return (
    <VisualEffectsSlider />
  );
};

const page = () => {
  return (
    <>
      <AboutHero />
      <VisionMisson />
      <ServicesSection />
      <CeoMessage />
      <TeamMembers />
      <ContactSection />
    </>
  );
};

export default page;
