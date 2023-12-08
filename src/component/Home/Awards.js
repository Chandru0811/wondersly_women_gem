import React from "react";
import Awardbadge from "../../asset/Award badge.png";
import Awardbadge1 from "../../asset/Award badge1.png";
import Awardbadge2 from "../../asset/Award badge2.png";
import Awardbadge3 from "../../asset/Award badge3.png";

function Awards() {
  return (
    <section className="awards py-4">
      <div className="container ">
        <div className="row ">
          <h1 className="awardstitle pb-4">Awards & Recognitions</h1>
          <div className="col-lg-3 col-md-3 col-12 d-flex flex-column justify-content-center align-items-center">
            <img src={Awardbadge} className="img-fluid" alt="Awardbadge"></img>
            <h5 className="mt-3">
              <b>2021</b>
            </h5>
            <h6>
              <b>Best NGO Award</b>
            </h6>
            <p className="awardCountry">Berlin, Germany</p>
          </div>
          <div className="col-lg-3 col-md-3 col-12 d-flex flex-column justify-content-center align-items-center">
            <img src={Awardbadge1} className="img-fluid" alt="Awardbadge"></img>
            <h5 className="mt-3">
              <b>2018</b>
            </h5>
            <h6>
              <b>Global Award</b>
            </h6>
            <p className="awardCountry">New York, USA</p>
          </div>
          <div className="col-lg-3 col-md-3 col-12 d-flex flex-column justify-content-center align-items-center">
            <img src={Awardbadge2} className="img-fluid" alt="Awardbadge"></img>
            <h5 className="mt-3">
              <b>2014</b>
            </h5>
            <h6>
              <b>CSN Award</b>
            </h6>
            <p className="awardCountry">New Delhi, India</p>
          </div>
          <div className="col-lg-3 col-md-3 col-12 d-flex flex-column justify-content-center align-items-center">
            <img src={Awardbadge3} className="img-fluid" alt="Awardbadge"></img>
            <h5 className="mt-3">
              <b>2010</b>
            </h5>
            <h6>
              <b>NGO of the year Award</b>
            </h6>
            <p className="awardCountry">Vienna, Austria</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Awards;
