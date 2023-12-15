import React from "react";
import "../style/custom.css";
import AboutImage from "../asset/wwg_about.png";
import WWGAbout from "../component/About/WWGAbout";
import Goal from "../component/About/Goal";
import History from "../component/About/History";
import OurBoard from "../component/About/OurBoard";
import BoardCommittee from "../component/About/BoardCommittee";
import Services from "../component/About/Services";
import Testimonial from "../component/About/Testimonial";
import { Link } from "react-router-dom";

function About() {
  return (
    <section style={{ marginTop: "118px" }}>
      <div className="container-fluid aboutSection">
        <div className="row d-flex align-items-center justify-content-center">
          <div className="col-lg-6 col-md-6 col-12 px-3 my-3">
            <div className="row">
              <div className="offset-lg-1 col-lg-10 col-12">
                <h2 className="aboutHeading mb-4">
                  Empowering single-moms and womens. Enriched lives.
                </h2>
                <p
                  className="aboutSubHeading mb-4"
                  style={{ paddingRight: "40px" }}
                >
                  Together, we make a difference in the lives of single women,
                  offering hope, support, and opportunities for a brighter
                  future.
                </p>
                <span className="d-flex">
                  <Link to="/donate">
                    <button className="btn donateBtn">Donate</button>
                  </Link>
                  <Link to="/contact">
                    <button className="btn volunteerBtn">Volunteer</button>
                  </Link>
                </span>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-12">
            <img src={AboutImage} alt="AboutImage" className="img-fluid" />
          </div>
        </div>
      </div>
      <WWGAbout />
      <Goal />
      <History />
      <OurBoard />
      <BoardCommittee />
      <Services />
      <Testimonial />
    </section>
  );
}

export default About;
