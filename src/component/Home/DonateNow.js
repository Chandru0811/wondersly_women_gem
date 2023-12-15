import React from "react";
import Donate_now from "../../asset/Donate_now.png";
import { Link } from "react-router-dom";

function DonateNow() {
  return (
    <section className="Donate_now py-4">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-12 order-lg-1 order-md-1 order-2 d-flex flex-column justify-content-center">
            <span className="d-flex align-items-center ">
              <span className="aboutName">
                <b> Join Us</b> &nbsp;&nbsp;
              </span>
              <span>
                <hr className="aboutHr" />
              </span>
            </span>
            <h1>Join Hands in Empowering Single Moms</h1>
            <p>
              In the journey of life, single moms often face challenges that
              seem insurmountable. Imagine being the sole provider, caregiver,
              and emotional anchor for your children, all while navigating the
              complexities of life. These incredible women embody strength,
              resilience, and determination, but they can't do it alone.
            </p>
            <Link to="/donate">
              <button
                type="button"
                className="Donatebtn btn btn-danger my-3"
                style={{ width: "200px" }}
              >
                Donate Now&nbsp;
              </button>
            </Link>
          </div>
          <div className="col-lg-6 col-md-6 col-12 order-lg-2 order-md-2 order-1 d-flex align-items-center justify-content-center">
            <img
              src={Donate_now}
              className="img-fluid"
              alt="welcomecharityImg"
            ></img>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DonateNow;
