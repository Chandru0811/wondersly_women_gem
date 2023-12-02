import React from "react";
import Qr_Code from "../../asset/Qr_Code.png";

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
              <b >BE A VOLUNTEER</b>
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
            <button className="my-button mt-3">Volunteer Now</button>
          </div>
          <div className="col-lg-2 col-12"></div>
          <div className="col-lg-3 col-12">
            <h3 className="text-lg-center mt-3">DONATE A CAUSE</h3>
            <img className="img-fluid" src={Qr_Code} alt="QR Code" />
            <p className="text-lg-center">Paynow to 82698169</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Volunteer;
