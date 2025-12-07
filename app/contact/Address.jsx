import React from "react";
import { MapPin, PhoneCall, Mail, Hourglass } from "lucide-react";
const Address = () => {
  return (
    <section className="wpo-contact-pg-section section-padding">
      <div className="container">
        <div className="row">
          <div className="col col-lg-10 offset-lg-1">
            <div className="office-info">
              <div className="row">
                <div className="col col-xl-4 col-lg-6 col-md-6 col-12">
                  <div className="office-info-item">
                    <div className="office-info-icon flex justify-center items-center">
                      <div className="icon">
                        <MapPin size={50} />
                      </div>
                    </div>
                    <div className="office-info-text">
                      <h2 className=" text-4xl! max-sm:text-3xl!">Address</h2>
                      <p className="sm:text-xl! max-sm:text-lg! leading-none">
                        Shakardara District, Near Sufyan Bridge, Kabul
                        Afghanistan
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col col-xl-4 col-lg-6 col-md-6 col-12">
                  <div className="office-info-item">
                    <div className="office-info-icon  flex justify-center items-center">
                      <div className="icon">
                        <Mail size={50} />
                      </div>
                    </div>
                    <div className="office-info-text">
                      <h2 className=" text-4xl! max-sm:text-3xl!">Email Us</h2>
                      <p className="sm:text-xl! max-sm:text-lg! leading-none">
                        info@sipp.af
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col col-xl-4 col-lg-6 col-md-6 col-12">
                  <div className="office-info-item">
                    <div className="office-info-icon flex justify-center items-center">
                      <div className="icon">
                        <PhoneCall size={50} />
                      </div>
                    </div>
                    <div className="office-info-text">
                      <h2 className=" text-4xl! max-sm:text-3xl!">Call Now</h2>
                      <p className="sm:text-xl! max-sm:text-lg! leading-none">
                        +93 (0) 70 214 63 10
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Address;
