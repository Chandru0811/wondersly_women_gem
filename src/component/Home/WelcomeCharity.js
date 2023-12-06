import React from "react";
import welcomecharityImg from "../../asset/welcomecharityImg.png";

function WelcomeCharity() {
  return (
    <section className="welcomeCharity">
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-12">
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
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy tempor invidunt ut labore et dolore magna aliquyam erat,
              sed diam voluptua. At vero eos et accusam et justo.
            </p>
            <div className="row">
              <div className="col-lg-6 col-md-6 col-12">
                <div class="card" style={{width: "15rem"}}>
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-12">
                <div class="card" style={{width: "15rem"}}>
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-12">
            <img src={welcomecharityImg} className="img-fluid"></img>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WelcomeCharity;
