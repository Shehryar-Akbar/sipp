import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import ServicesSection from "./sections/ServicesSection";
import ScrollStackDemo from "./components/ScrollStack";
import NumberCount from "./sections/NumberCount";
import ContactSection from "./sections/ContactSection";
import TestimonialSection from "./sections/TestimonialSection";
import Bubbles from "./components/Bubbles";
import { generateMetadata } from "./seo/seo";
import { seoConfig } from "./seo/seoConfig";

export const metadata = generateMetadata(seoConfig.home)

export default function App() {
  return (
    <div>
      <HeroSection />
      <NumberCount />
      <AboutSection />
      <ScrollStackDemo />
      <ServicesSection />
      <ContactSection />
      <TestimonialSection />
    </div>
  );
}
