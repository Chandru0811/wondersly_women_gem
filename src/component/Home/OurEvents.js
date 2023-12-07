import React from "react";
import "../../style/Dummy.css";
import Vision from "../../asset/Vision.png";
import { FaArrowRight } from "react-icons/fa";

function OurEvents() {
  return (
    <section>
      <div className="container py-5">
        <span className="d-flex align-items-center justify-content-center">
          <span className="ourEvents">Our Events &nbsp;&nbsp;</span>
          <span style={{ width: "80%" }}>
            <hr />
          </span>
        </span>
        <div className="row">
          <div className="col-lg-6 col-md-6 col-12">
            <span className="goalVision d-flex align-items-center mb-3">
              <span>
                <img
                  src={Vision}
                  alt="ourMission"
                  className="img-fluid"
                  width={100}
                />
              </span>
              <span>
                <p className="ourVision mb-1">Vision</p>
                <p className="ourVisionText">
                  A community of successful individual with pride and dignity to
                  achieve it's goals.
                </p>
              </span>
            </span>
          </div>
          <div className="col-lg-6 col-md-6 col-12">
            <span className="goalVision d-flex align-items-center mb-3">
              <span>
                <p>13</p>
                <p>APR</p>
              </span>
              <span>
                <p className="ourVision mb-1">Vision</p>
                <p className="ourVisionText">
                  A community of successful individual with pride and dignity to
                  achieve it's goals.
                </p>
              </span>
              <span>
                <span><FaArrowRight /></span>
              </span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurEvents;
