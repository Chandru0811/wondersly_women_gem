import React from "react";
// import "../../style/Dummy.css";
import { FaArrowCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const handleClick = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

function OurEvents() {
  return (
    <section className="Eventlist">
      <div className="container py-2">
        <span className="d-flex align-items-center justify-content-center">
          <span className="ourEvents">Upcoming Events &nbsp;&nbsp;</span>
          <span style={{ width: "80%" }}>
            <hr />
          </span>
        </span>
        <div className="row mt-5 mb-3">
          {/* <div className="col-lg-6 col-md-6 col-12">
            <Link
              to="/events/youth"
              style={{ textDecoration: "none" }}
              onClick={handleClick}
            >
              <span
                className="goalVision h-100 d-flex align-items-center mb-3"
                style={{ backgroundColor: "rgba(120, 81, 169, 0.30)" }}
              >
                <span>
                  <p className="Eventdate" style={{ marginBottom: "0" }}>
                    10
                  </p>
                  <p className="text-center" style={{ color: "#374151" }}>
                    DEC
                  </p>
                </span>
                <span>
                  <p className="ourVisionText" style={{ marginBottom: "0" }}>
                    NEXT EVENTS
                  </p>
                  <p className="NextEvents">SYC Youth Club Introduction</p>
                </span>
                <span>
                  <span>
                    <FaArrowCircleRight className="eventIcon" />
                  </span>
                </span>
              </span>
            </Link>
          </div> */}
          <div className="col-lg-6 col-md-6 col-12">
            <Link
              to="/events/upcomming"
              style={{ textDecoration: "none" }}
              onClick={handleClick}
            >
              <span
                className="goalVision h-100 d-flex align-items-center mb-3"
                style={{ backgroundColor: "rgba(222, 49, 99, 0.30)" }}
              >
                <span>
                  <p className="Eventdate" style={{ marginBottom: "0" }}>
                    2
                  </p>
                  <p className="text-center" style={{ color: "#374151" }}>
                    Mar
                  </p>
                </span>
                <span>
                  <p className="ourVisionText" style={{ marginBottom: "0" }}>
                    NEXT EVENTS
                  </p>
                  <p className="NextEvents">
                    Wondrously Women Gem In cojunction with Women's Independence
                    Day
                  </p>
                </span>
                <span>
                  <span>
                    <FaArrowCircleRight className="eventIcon" />
                  </span>
                </span>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurEvents;
