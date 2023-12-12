import React from "react";
import LadyBossLogo from "../../../asset/LadyBossLogo.png";

function AboutLadyBoss() {
  return (
    <section className="aboutladyBoss mb-3">
      <div className="container-fluid">
        <div className="row">
          <p className="ourBoardTeam mt-3">Events</p>
          <h1 className="ourBoardTeamText mb-5">LadyBoss Business Connect</h1>
          <div className="col-lg-3 col-md-1 col-1 d-flex flex-column align-items-center justify-content-center">
            <img
              src={LadyBossLogo}
              className="img-fluid half-image-top"
              alt="ladybossLogo"
            />
          </div>
          <div className="col-lg-9 col-md-11 col-11">
            <div className="aboutladybossContent row">
              <div className="col-lg-1 col-md-1 col-1"></div>
              <div className="col-lg-10 col-md-10 col-10">
                <div
                  className=" d-flex flex-column justify-content-center align-items-center"
                  style={{ minHeight: "56vh" }}
                >
                  <h1 className="ladybossHeading">
                    ABOUT LADYBOSS BUSINESS CONNECT
                  </h1>
                  <h5 className="ladybossQuotes">
                    “Turning your passion into profits”
                  </h5>
                  <p className="turningContent text-center mt-3">
                    Turning passion into profit is the idea of making money by
                    doing something you deeply enjoy. Its about creating ideas
                    out of your interest or hobbies. By turning your passion
                    into a business, you can do something you love everyday
                    while earning the income. It's a way to make work feel like
                    play.
                  </p>
                </div>
              </div>
              <div className="col-lg-1 col-md-1 col-1"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutLadyBoss;
