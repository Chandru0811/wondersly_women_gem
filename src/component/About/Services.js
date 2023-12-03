import React from "react";
import Logo from "../../asset/wwg.png";
import Serviceimg_2 from "../../asset/Serviceimg_2.png";
import Serviceimg_3 from "../../asset/Serviceimg_3.png";

function Services() {
  return (
    <section className="Services py-5">
      <div className="container d-flex flex-column align-items-center justify-content-center">
        <p className="ourBoardTeam">Our</p>
        <p className="ourBoardTeamText pb-5">Services</p>

        <div class="row ">
          <div class="col-lg-4 col-md-4 col-12 d-flex mb-3">
            <div className="card" style={{ width: "19rem" }}>
              <div class="serviceCard flex-fill d-flex flex-column align-items-center justify-content-center p-2">
                <img src={Logo} class="img-fluid" alt="Logo" />
                <h5 className="cardHeading pb-4">Wonderwoman</h5>
                <ul>
                  <li>LadyBoss Business Connect</li>
                  <li>HBBSG Mentoring</li>
                  <li>Holistic Healing</li>
                  <li>Back To Basic</li>
                  <li>3F Self Love</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-4 col-12 d-flex mb-3">
            <div className="card" style={{ width: "19rem" }}>
              <div class="serviceCard flex-fill d-flex flex-column align-items-center justify-content-center p-2">
                <img src={Serviceimg_2} class="img-fluid mb-2" alt="Logo" />
                <h5 className="mt-2 cardHeading pb-4">SunRise Youth Club</h5>
                <ul>
                  <li>Outdoor activities</li>
                  <li>Entrepreneurship</li>
                  <li>The Voices of the Youth</li>
                  <li>Back To Basic</li>
                  <li>MMM</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-4 col-12 d-flex mb-3">
            <div className="card" style={{ width: "19rem" }}>
              <div class="serviceCard flex-fill d-flex flex-column align-items-center p-2">
                <img src={Serviceimg_3} class="img-fluid my-3" alt="Logo" />
                <h5 className="cardHeading">Periwinkle Children Foundation</h5>
                <ul>
                  <li>LOVE Project</li>
                  <li>Giver Gain Groceries</li>
                  <li>Horse Riding</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
