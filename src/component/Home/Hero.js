import React from "react";
import HeroImg from "../../asset/Hero_Img.png";


function Hero() {
  return (
    <div className="Hero">
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-6 col-12">
            <h1 style={{ fontSize: "60px" }}>
              <b>Helping Each Other Can Make World Better</b>
            </h1>
            <p className="my-4">
              We Seek out world changers and difference makers around the
              globe,and equip them to fulfill their unique purpose.
            </p>
            <button className="herobtn">Know About Us</button>
          </div>
          <div className="col-lg-6 col-12">
            <img src={HeroImg} className="img-fluid" alt="Hero_Img"></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
