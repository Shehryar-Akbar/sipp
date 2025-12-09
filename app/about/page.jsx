import React from "react";
import ContactSection from "../sections/ContactSection";
import VisualEffectsSlider from "./VisualEffectsSlider";
import CeoMessage from "./CeoMessage";
import TeamMembers from "./TeamMembers";
import VisionMisson from "./Accordion";
import LogoMarquee from "../components/ClientsSection";
import { generateMetadata } from "../seo/seo";
import { seoConfig } from "../seo/seoConfig";

export const metadata = generateMetadata(seoConfig.about)
const AboutHero = () => {
  return (
    <VisualEffectsSlider />
  );
};

const page = () => {
  return (
    <>
      <AboutHero />
      <CeoMessage />
      <VisionMisson />
      <TeamMembers />
      <LogoMarquee />
      <ContactSection />
    </>
  );
};

export default page;
