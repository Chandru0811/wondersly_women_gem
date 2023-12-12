import React from "react";
import SunRise from "../../../asset/SunRise.png";
import Youth1 from "../../../asset/Youth1.png";
import Youth2 from "../../../asset/Youth2.png";
import Youth3 from "../../../asset/Youth3.png";
function YouthBody() {
  return (
    <section>
      <div className="container-fluid my-3">
        <div className="row">
          <h2 className="allUpcoming my-3">View All Upcoming Events</h2>
          <div className="col-lg-4 col-md-4 col-12 d-flex align-items-center justify-content-center sunriseImage py-4">
            <img className="img-fluid" src={SunRise} alt="SunRise" />
          </div>
          <div className="col-lg-8 col-md-8 col-12 d-flex flex-column justify-content-center  py-4 px-2">
            <h2 className="sunriseHeading">Welcome to the Youth Club</h2>
            <hr className="sunriseHr" />
            <p className="sunrisePara pb-4">
              At Wondrously Woman Gem, we believe in the potential of every
              young individual to make a positive impact. Our Youth Club is a
              dedicated space where young minds come together to learn, grow,
              and contribute to the community. We focus on providing support and
              opportunities for teenagers and young adults, creating a platform
              for them to thrive.
            </p>
            <p className="sunrisePara2 pb-4">
              Visit our events hub to see all upcoming virtual events,
              workshops, and more.
            </p>
          </div>
        </div>
      </div>
      <div className="container-fluid mt-3">
        <div className="row youthAdverdisement py-5">
          <div className="col-lg-4 col-md-4 col-12 d-flex align-items-center justify-content-center py-2">
            <img className="img-fluid" src={Youth1} alt="Youth1" />
          </div>
          <div className="col-lg-4 col-md-4 col-12 d-flex align-items-center justify-content-center py-2">
            <img className="img-fluid" src={Youth2} alt="Youth2" />
          </div>
          <div className="col-lg-4 col-md-4 col-12 d-flex align-items-center justify-content-center py-2">
            <img className="img-fluid" src={Youth3} alt="Youth3" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default YouthBody;
