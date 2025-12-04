
import Link from "next/link";
import React from "react";

const ContactSection = () => {
  return (
    <section className="technut-cta-section section-padding">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-9 col-12">
            <div className="technut-cta-text">
              <h1>We Are Best Printing Service Providers in Afghanistan.</h1>
            </div>
          </div>
          <div className="col-lg-3 col-12">
            <div className="technut-cta-right">
              <Link href="#" className="theme-btn-s4">
                Contact Us<i className="fi flaticon-right-arrow-1"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
