import React from "react";
import HerStoryMission from "../../asset/HerStoryMission.png";
import { Link } from "react-router-dom";

const handleClick = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

function Hero() {
  return (
    <div className="Hero">
      <div className="container py-3">
        <div className="row">
          <div className="col-lg-1"></div>
          <div
            data-aos="fade-up"
            className="col-lg-10 col-md-10 col-12 d-flex flex-column align-items-center justify-content-center"
          >
            <h1 className="HeroHeading">
              <b>
                BEHIND EVERY SUCCESSFUL WOMAN IS A TRIBE OF OTHER SUCCESSFUL
                WOMEN, WHO HAVE HER BACK
              </b>
            </h1>
            <p className="mt-2 text-center">
              At WWGEM, we firmly believe in the strength and resilience of
              single mothers and women, empowering them to rebuild their lives
              as independent individuals.
            </p>
            <div
              data-aos="fade-down"
              className="d-flex flex-column justify-content-center align-items-center"
            >
              <img
                src={HerStoryMission}
                className="img-fluid"
                alt="Hero_Img"
              ></img>
            </div>
            <p className="mt-2">
              We have inspired over 5000 women across various countries and the
              ASEAN region through self-development programs, holistic support,
              education enhancement, entrepreneurship, and sports activities.
            </p>
            <div className="d-flex justify-content-center">
              <Link to="/about" onClick={handleClick}>
                <button className="herobtn">Learn more</button>
              </Link>
            </div>
          </div>
          <div className="col-lg-1"></div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
