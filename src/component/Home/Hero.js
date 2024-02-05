import React from "react";
import HerStoryMission from "../../asset/HerStoryMission.png";
// import { Link } from "react-router-dom";

// const handleClick = () => {
//   window.scrollTo({ top: 0, behavior: "smooth" });
// };

function Hero() {
  return (
    <div className="Hero">
      <div className="container my-5">
        <div data-aos="fade-up" className="row">
          <div className="col-lg-1" style={{ visibility: "hidden" }}>
            <hr className="aboutHr"></hr>
          </div>
          <div className="col-lg-10 col-md-10 col-12 pt-1">
            <span className="aboutName" style={{ visibility: "hidden" }}>
              HER STORY
            </span>
            <h2 className="heroheading mb-3">
              BEHIND EVERY SUCCESSFUL WOMAN IS A TRIBE OF OTHER SUCCESSFUL
              WOMEN, WHO HAVE HER BACK
            </h2>
            <p className="historyMissionText mb-3">
              At WWGEM, we firmly believe in the strength and resilience of
              single mothers and women, empowering them to rebuild their lives
              as independent individuals.
            </p>
            <img
              src={HerStoryMission}
              alt="HerStoryMission"
              className="img-fluid mb-3"
              style={{ width: "100%" }}
            />
            <p className="historyMissionText mb-5">
              We have inspired over 5000 women across various countries and the
              ASEAN region through self-development programs, holistic support,
              education enhancement, entrepreneurship, and sports activities.
            </p>
          </div>
          <div className="col-lg-1"></div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
