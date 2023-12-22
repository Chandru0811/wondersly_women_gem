import React from "react";
import Qr_Code from "../../asset/Qr_Code.png";
import { Link } from "react-router-dom";

const handleClick = () => {
  window.scrollTo({ top: 0, behavior: 'smooth'});
};

function Volunteer() {
  return (
    <div className="volunteer py-5">
      <div className="container">
        <div className="row ">
          <div className="col-lg-1 col-12 d-none d-lg-block">
            <hr
              className="border-bottom border-2"
              style={{ borderColor: "#22495F" }}
            ></hr>
          </div>
          <div className="col-lg-6 col-12">
            <p style={{ marginTop: "5px" }}>
              <b
                className="heading_word"
                style={{
                  fontSize: "13px",
                  letterSpacing: "1px",
                  marginTop: "100px",
                }}
              >
                BE A VOLUNTEER
              </b>
            </p>
            <p style={{ fontSize: "30px", color: "#2E4049" }}>
              <b>Become a Member and Empower Single Moms: Join Our Cause!</b>
            </p>
            <p>
              At Wondrously Woman Gem, we believe in the power of community and
              the strength that arises when individuals come together to make a
              difference. Our focus is on supporting single moms who navigate
              the challenges of parenthood solo. These incredible women
              demonstrate resilience, determination, and love every day.
            </p>
            <Link to="/volunteer" onClick={handleClick}>
              <button className="my-button mt-3">Volunteer Now</button>
            </Link>
          </div>
          <div className="col-lg-2 col-12"></div>
          <div className="col-lg-3 col-12 d-flex flex-column align-items-center justify-content-center">
            <h3 className="mt-3">DONATE A CAUSE</h3>
            <img className="img-fluid" src={Qr_Code} alt="QR Code" />
            <p>Paynow to 82698169</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Volunteer;
