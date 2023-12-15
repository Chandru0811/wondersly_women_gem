import React from "react";
import CharityImg from "../../asset/aboutCharity.png";

function WWGAbout() {
  return (
    <section>
      <div className="container my-4">
        <div className="row my-5">
          <div className="col-lg-6 col-md-6 col-12">
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
            {/* <button className="my-button">Learn More</button> */}
          </div>
          <div className="col-lg-6 col-md-6 col-12">
            <img src={CharityImg} alt="aboutImage" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default WWGAbout;
