import React from "react";
import aboutUs from "../../asset/aboutUs.png";
import { Link } from "react-router-dom";

const handleClick = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

function Aboutus() {
  return (
    <div className="Aboutus">
      <div className="container py-3">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-12  d-flex flex-column justify-content-center">
            <img src={aboutUs} className="img-fluid" alt="aboutusImg"></img>
          </div>
          <div
            className="col-lg-6 col-md-6 col-12 d-flex flex-column justify-content-center p-3"
          >
            <span className="d-flex align-items-center ">
              <span>
                <hr className="aboutHr" />
              </span>
              <span className="aboutName">&nbsp;&nbsp;&nbsp; About Us</span>
            </span>
            <h2 className="aboutWonder mb-4">
              Wondrously woman GEM <br />
              (Good Enough Me)
            </h2>
            <p className="aboutWonderPara">
              Wondrously woman GEM (Good Enough Me) was founded by Mdm Anggun
              Aida AK in 2015. It's a non-profit organization dedicating to
              empowerment and inspire change to single-moms and women's life. At
              Wondrously woman GEM, we believe in the strength and resilience of
              a single-mom and women, empowering them to rebuild lives as an
              independent individual. We have inspire more than 5000 women
              across the countries and Asean region in self development
              programs, holistic support, education enhancement,
              entrepreneurship and sports activities. We run 3 core of community
              services namely for single-moms & women family center, youth club
              and special needs children foundation.
            </p>
            <Link to="/about" onClick={handleClick}>
            <button className="my-button">Learn More</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutus;
