import React from "react";


function Hero() {
  return (
    <div className="Hero">
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-6 col-12">
            <h1 style={{ fontSize: "50px" }}>
              <b>Helping Each Other Can Make World Better</b>
            </h1>
            <p>
              We Seek out world changers and difference makers around the
              globe,and equip them to fulfill their unique purpose.
            </p>
            <button className="herobtn">Know About Us</button>
          </div>
          <div className="col-lg-6 col-12"></div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
