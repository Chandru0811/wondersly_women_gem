import React from "react";
import Qr_Code from "../../asset/Qr_Code.png";

function Volunterr() {
  return (
    <div className="volunterr py-5">
      <div className="container">
        <div className="row">
          <div className="col-1"></div>
          <div className="col-lg-6 col-12">
            <p><b>BE A VOLUNTEER</b></p>
            <p style={{ fontSize: "30px", color: "#2E4049" }}>
                <b>Become a Member and Empower Single Moms: Join Our Cause!</b>
              </p>
              <p>At Wondrously Woman Gem, we believe in the power of community and the strength that arises when individuals come together to make a difference. Our focus is on supporting single moms who navigate the challenges of parenthood solo. These incredible women demonstrate resilience, determination, and love every day.</p>
              <button className="my-button mt-3">Volunteer Now</button>
          </div>
          <div className="col-lg-5 col-12">
            <h3>DONATE A CAUSE</h3>
            <img
                src={Qr_Code}
                style={{ width: "300px", height: "300px" }}
                alt="member image 1"
              />
              <p>Paynow to 82698169</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Volunterr;
