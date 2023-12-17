import React, { useEffect } from "react";
import welcomecharityImg from "../../asset/welcomecharityImg.png";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import { PiNotePencilBold } from "react-icons/pi";
import AOS from "aos";
import "aos/dist/aos.css";

function WelcomeCharity() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
    });
  }, []);


  return (
    <section className="welcomeCharity ">
      <div className="container py-5">
        <div className="row">
            <div data-aos="fade-up" className="col-lg-6 col-md-6 col-12 order-lg-1 order-md-1 order-2 d-flex flex-column justify-content-center">
              <span className="d-flex align-items-center ">
                <span className="aboutName">
                  <b>Welcome to Charity</b> &nbsp;&nbsp;
                </span>
                <span>
                  <hr className="aboutHr" />
                </span>
              </span>
              <h1>Let Us Come Together To Make a Difference</h1>
              <p>
                Welcome to Wondersly Women Gem, where compassion meets action.
                At Wondersly Women Gem, we believe in the power of unity and
                collective efforts to create positive change in the world. Our
                mission is to inspire individuals, communities, and
                organizations to come together and make a lasting impact on the
                lives of those in need.
              </p>
              <div className="row">
                <div className="col-lg-6 col-md-12 col-12">
                  <div class="card h-100 mb-2" style={{ width: "13rem" }}>
                    <div class="card-body">
                      <h5 class="card-title">
                        <IoShieldCheckmarkSharp /> Our mission
                      </h5>
                      <p class="card-text">
                        Inspire change in life, building a motivated and
                        progressive family.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 col-12">
                  <div class="card h-100 mb-2" style={{ width: "13rem" }}>
                    <div class="card-body">
                      <h5 class="card-title">
                        <PiNotePencilBold /> Our vission
                      </h5>
                      <p class="card-text">
                        A community of successful individual with pride and
                        dignity to achieve it's goals.
                      </p>
                    </div>
                  </div>
                </div>
                {/* <div
                className="d-flex align-items-center justify-content-between "
                style={{ width: "90%" }}
              >
                <span>
                  <p id="SkillsKnow">
                    <b>Donations</b>
                  </p>
                </span>
                <span>
                  <p id="SkillsKnow">75%</p>
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="100"
                value="75"
                id="RangeInput"
              /> */}
                {/* <div
                className="d-flex align-items-center justify-content-between"
                style={{ width: "90%" }}
              >
                <span>
                  <p id="SkillsKnow">
                    <b>Medical Help</b>
                  </p>
                </span>
                <span>
                  <p id="SkillsKnow">90%</p>
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="100"
                value="90"
                id="RangeInput"
              /> */}
              </div>
            </div>
          <div data-aos="fade-down" className="col-lg-6 col-md-6 col-12 order-lg-2 order-md-2 order-1">
            <img
              src={welcomecharityImg}
              className="img-fluid"
              alt="welcomecharityImg"
            ></img>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WelcomeCharity;
