import React from "react";
import Logo from "../../asset/wwg.png";

function Services() {
  return (
    <section className="Services py-5">
      <div className="container d-flex flex-column align-items-center justify-content-center">
        <p className="ourBoardTeam">Our</p>
        <p className="ourBoardTeamText">Services</p>
        <div className="card" style={{ width: "18rem" }}>
          <img
            src={Logo}
            alt="WWG"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            className="img-fluid"
            width={80}
            height={80}
          />

          <div className="card-body">
            <h5
              className="card-title"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              Wonderwoman
            </h5>
            <p className="card-text">
              <ul>
                <li>LadyBoss Business Connect</li>
                <li>HBBSG Mentoring</li>
                <li>Holistic Healing</li>
                <li>Back To Basic</li>
                <li>3F Self Love</li>
              </ul>
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
