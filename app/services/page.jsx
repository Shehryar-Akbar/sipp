import React from "react";
import HeroSection from "./components/HeroSection";
import PrintingSection from "./components/PrintingSection";
import CorporateIdentitySection from "./components/CorporateIdentitySection";
import MarketingSection from "./components/MarketingSection";
import BookPublicationSection from "./components/BookPublicationSection";
import PromotionalProductsSection from "./components/PromotionalProductsSection";
import DesignServicesSection from "./components/DesignServicesSection";
import FinishingServicesSection from "./components/FinishingServicesSection";
import PackagingSection from "./components/PackagingSection";
import WebServicesSection from "./components/WebServicesSection";
import { generateMetadata } from "../seo/seo";
import { seoConfig } from "../seo/seoConfig";

export const metadata = generateMetadata(seoConfig.services);

const ServicesPage = () => {
  return (
    <div>
      <HeroSection />
      <PrintingSection />
      <CorporateIdentitySection />
      <MarketingSection />
      <BookPublicationSection />
      <PromotionalProductsSection />
      <DesignServicesSection />
      <FinishingServicesSection />
      <PackagingSection />
      <WebServicesSection />
    </div>
  );
};

export default ServicesPage;
