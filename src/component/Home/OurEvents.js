import React from "react";
import "../../style/Dummy.css";
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
          <div className="col-lg-6 col-md-6 col-12"  >
            <span className="goalVision d-flex align-items-center mb-3" style={{backgroundColor: 'rgba(120, 81, 169, 0.30)'}}>
              <span>
                <p>13</p>
                <p>APR</p>
              </span>
              <span>
                <p className="ourVisionText mb-1">Vision</p>
                <p className="ourVision">A day with our wonderful children</p>
              </span>
              <span>
                <span>
                  <FaArrowRight />
                </span>
              </span>
            </span>
          </div>
          <div className="col-lg-6 col-md-6 col-12" >
            <span className="goalVision d-flex align-items-center mb-3" style={{backgroundColor: 'rgba(222, 49, 99, 0.30)'}}>
              <span>
                <p>13</p>
                <p>APR</p>
              </span>
              <span>
                <p className="ourVisionText mb-1">Vision</p>
                <p className="ourVision">
                  Seminar: Caring for children with autism
                </p>
              </span>
              <span>
                <span>
                  <FaArrowRight />
                </span>
              </span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurEvents;
