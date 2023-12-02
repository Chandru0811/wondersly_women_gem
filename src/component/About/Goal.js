import React from "react";
import ourGoal from "../../asset/ourGoal.png";
import Mission from "../../asset/Mission.png";
import Vision from "../../asset/Vision.png";
import Value from "../../asset/Value.png";

function Goal() {
  return (
    <section className="Goal">
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-12">
            <span className="d-flex align-items-center ">
              <span>
                <hr className="aboutHr" />
              </span>
              <span className="aboutName">&nbsp;&nbsp;&nbsp; Our Goal</span>
            </span>
            <h2 className="aboutWonder mb-4 mt-2">
              Empowering Lives: Our Vision, Mission, and Values
            </h2>
            <span className="goalVision d-flex align-items-center mb-3">
              <span>
                <img
                  src={Vision}
                  alt="ourMission"
                  className="img-fluid"
                  width={100}
                />
              </span>
              <span>
                <p className="ourVision mb-1">Vision</p>
                <p className="ourVisionText">
                  A community of successful individual with pride and dignity to
                  achieve it's goals.
                </p>
              </span>
            </span>

            <span className="goalVision d-flex align-items-center mb-3">
              <span>
                <img
                  src={Mission}
                  alt="ourMission"
                  className="img-fluid"
                  width={80}
                />
              </span>
              <span>
                <p className="ourVision mb-1">Mission</p>
                <p className="ourVisionText">
                Inspire change in life, building a motivated and progressive family.
                </p>
              </span>
            </span>

            <span className="goalVision d-flex align-items-center mb-3">
              <span>
                <img
                  src={Value}
                  alt="ourMission"
                  className="img-fluid"
                  width={80}
                />
              </span>
              <span>
                <p className="ourVision mb-1">Value</p>
                <p className="ourVisionText">
                Honesty, Equality, Acceptance, Responsibility, Trust (HEART)
                </p>
              </span>
            </span>

          </div>
          <div className="col-lg-6 col-md-6 col-12 p-3 d-flex align-items-center justify-content-end">
            <img src={ourGoal} alt="OurGoal" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Goal;
