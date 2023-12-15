import React from "react";
import HeroImg from "../../asset/Hero_Img.png";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="Hero">
      <div className="container py-3">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-12 d-flex flex-column justify-content-center">
            <h1 className="HeroHeading">
              <b>
                BEHIND EVERY SUCCESSFUL WOMAN IS A TRIBE OF OTHER SUCCESSFUL
                WOMEN, WHO HAVE HER BACK
              </b>
            </h1>
            <p className="mt-2 mb-4">
              Women belong in all places where decisions are being made. It
              shouldn't be that women are the exception. And one day she
              discovered that she was fierce, and strong, and full of fire, and
              that not even she could hold herself back because her passion
              burned brighter than her fears.
            </p>
            <Link to="/about">
            <button className="herobtn">Know About Us</button>
            </Link>
            
          </div>
          <div className="col-lg-6 col-md-12 col-12 d-flex flex-column justify-content-center align-items-center">
            <img src={HeroImg} className="img-fluid" alt="Hero_Img"></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
