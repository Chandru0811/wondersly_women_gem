import React from "react";
import aboutUs from "../../asset/aboutUs.png";

function Aboutus() {
  return (
    <div className="Aboutus">
      <div className="container" style={{ paddingTop: "100px"}}>
        <div className="row">
          <div className="col-lg-7 col-md-6 col-12">
            <img src={aboutUs} className="img-fluid"></img>
          </div>
          <div className="col-lg-5 col-md-6 col-12" style={{ marginTop: "150px"}}>
            <span className="d-flex align-items-center ">
              <span className="aboutName">
                <b>About Us</b> &nbsp;&nbsp;
              </span>
              <span>
                <hr className="aboutHr" />
              </span>
            </span>
            <h1>Your Support is Really Powerful.</h1>
            <p>
              The secret to happiness lies in helping others. Never
              underestimate the difference YOU can make in the lives of the
              poor, the abused and the helpless.
            </p>
            <button className="my-button">Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutus;
