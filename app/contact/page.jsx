import React from "react";
import HeroSection from "./HeroSection";
import ContactForm from "./ContactForm"
import Address from "./Address";
import { generateMetadata } from "../seo/seo";
import { seoConfig } from "../seo/seoConfig";

export const metadata = generateMetadata(seoConfig.contact)

const page = () => {
  return (
    <>
      <HeroSection />
      <Address />
      <ContactForm />
    </>
  )
}

export default page


