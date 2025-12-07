import Image from "next/image";
import image1 from "../../public/team/image1.png";
import image2 from "../../public/team/image2.png";
import image3 from "../../public/team/image3.png";
import image4 from "../../public/team/image4.png";

const TeamMembers = () => {
  return (
    <section className="technut-team-section-s2 section-padding">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-12 col-12">
            <div className="team-left-contant">
              <div className="wpo-section-title pr-0! mr-0! mb-8! text-center!">
                <h2>Awesome team members</h2>
              </div>
            </div>
          </div>
          <div className="col-lg-12 col-12">
            <div className="team-right-contant">
              <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                  <div className="team-meamber">
                    <Image src={image1} alt="" />
                    <div className="text">
                      <h2>
                        <a href="team-single.html">Ibrahim Heravi</a>
                      </h2>
                      <span>Press Operator</span>
                      <a href="#">
                        <i className="fi flaticon-linkedin"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                  <div className="team-meamber">
                    <Image src={image2} alt="" />
                    <div className="text">
                      <h2>
                        <a href="team-single.html">Arif Ullah Hakimi</a>
                      </h2>
                      <span>Feeder/Assistant Press Operator</span>
                      <a href="#">
                        <i className="fi flaticon-linkedin"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                  <div className="team-meamber">
                    <Image src={image3} alt=""/>
                    <div className="text">
                      <h2>
                        <a href="team-single.html">Sadeeq Ullah</a>
                      </h2>
                      <span>Finishing/Bindery Operator</span>
                      <a href="#">
                        <i className="fi flaticon-linkedin"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                  <div className="team-meamber">
                    <Image src={image4} alt="" />
                    <div className="text">
                      <h2>
                        <a href="team-single.html">Sher Afghan</a>
                      </h2>
                      <span>Cutter Operator</span>
                      <a href="#">
                        <i className="fi flaticon-linkedin"></i>
                      </a>
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

export default TeamMembers;