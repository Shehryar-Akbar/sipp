import Link from "next/link";
import React from "react";
import Image from "next/image";
import Icon1 from "../../public/service/Icon1.svg";
import Icon2 from "../../public/service/Icon2.svg";
import Icon3 from "../../public/service/Icon3.svg";
import Icon4 from "../../public/service/Icon4.svg";

const ServicesSection = () => {
  return (
    <section className="technut-service-section section-padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-12">
            <div className="wpo-section-title">
              <span>
                <strong>//</strong> OUR SERVICES <strong>//</strong>
              </span>
              <h2>Perfection Starts Here</h2>
            </div>
          </div>
        </div>
        <div className="technut-service-wrapper">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-12">
              <div className="technut-service-card">
                <div className="image">
                  <Image src={Icon1} alt="service Image one" />
                </div>
                <div className="text">
                  <h2 className="leading-none!">Offset & Digital Printing</h2>
                  <p className="leading-none!">
                    Offset printing uses plates for cost-effective high-volume
                    production, while digital printing prints directly from
                    digital files for fast jobs.
                  </p>
                </div>
                <Link href="service-single.html" className="theme-btn-s3">
                  Explore
                </Link>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              <div className="technut-service-card">
                <div className="image">
                  <Image src={Icon2} alt="service Image one" />
                </div>
                <div className="text">
                  <h2 className="leading-none!">Book & Publication Printing</h2>
                  <p className="leading-none!">
                    It encompasses the entire process from prepress preparation
                    to binding and finishing the final printed product.
                  </p>
                </div>
                <Link href="service-single.html" className="theme-btn-s3">
                  Explore
                </Link>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              <div className="technut-service-card">
                <div className="image">
                  <Image src={Icon3} alt="service Image one" />
                </div>
                <div className="text">
                  <h2 className="leading-none!">Promotional Products</h2>
                  <p className="leading-none!">
                    Promotional products are branded giveaway items used by
                    businesses and NGOs to quickly boost brand visibility.
                  </p>
                </div>
                <Link href="service-single.html" className="theme-btn-s3">
                  Explore
                </Link>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              <div className="technut-service-card">
                <div className="image">
                  <Image src={Icon4} alt="service Image one" />
                </div>
                <div className="text">
                  <h2 className="leading-none!">Packaging & Label Printing</h2>
                  <p className="leading-none!">
                    This service focuses on printing high-quality **boxes, bags,
                    and labels** essential for product protection and market
                    appeal.
                  </p>
                </div>
                <Link href="service-single.html" className="theme-btn-s3">
                  Explore
                </Link>
              </div>
            </div>
          </div>
          <div className="service-view-more">
            <div className="row justify-content-center">
              <div className="col-lg-6 col-12">
                <Link href="service.html" className="theme-btn-s4">
                  View More<i className="fi flaticon-right-arrow-1"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="technut-service-shape-1"></div>
      <div className="technut-service-shape-2"></div>
      <div className="technut-service-shape-3">
        <svg width="101" height="84" viewBox="0 0 101 84" fill="none">
          <path d="M6.21538 35L65.2615 0L101 79.3333L0 84L6.21538 35Z" />
        </svg>
      </div>
    </section>
  );
};

export default ServicesSection;
