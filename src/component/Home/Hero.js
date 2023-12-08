import React from "react";
import HeroImg from "../../asset/Hero_Img.png";


function Hero() {
  return (
    <div className="Hero">
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-6 col-12 mt-5">
            <h1 style={{ fontSize: "38px" }}>
              <b>BEHIND EVERY SUCCESSFUL WOMAN IS A TRIBE OF OTHER SUCCESSFUL WOMEN, WHO HAVE HER BACK</b>
            </h1>
            <p className="my-4">
            Women belong in all places where decisions are being made. It shouldn't be that women are the exception. And one day she discovered that she was fierce, and strong, and full of fire, and that not even she could hold herself back because her passion burned brighter than her fears.
            </p>
            <button className="herobtn">Know About Us</button>
          </div>
          <div className="col-lg-6 col-12 mt-3">
            <img src={HeroImg} className="img-fluid" alt="Hero_Img"></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
