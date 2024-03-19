import React from "react";
import IftharDonate from "../../asset/IftharDonate.jpg";
import { Link } from "react-router-dom";

const handleClick = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

function IftharsDonate() {
  return (
    <section className="Donate_now py-4">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-md-6 col-12 d-flex align-items-center justify-content-center">
            <img
              src={IftharDonate}
              className="img-fluid"
              alt="welcomecharityImg"
            ></img>
          </div>
          <div className="col-lg-7 col-md-6 col-12 d-flex flex-column justify-content-center">
            <span className="d-flex align-items-center ">
              <span className="aboutName">
                <b> Join Us</b> &nbsp;&nbsp;
              </span>
              <span>
                <hr className="aboutHr" />
              </span>
            </span>
            <h1>
              This Ramadhan, WWGEM -Wondrously Women Gem aims to distribute
              Iftar Bundle to 200 needy families.
            </h1>
            <p>
              This campaign is to ease this Ramadhan for those who are
              struggling to have a meal to break fast with. Our beneficiaries
              are single mums with more than 4 children or special needs, trying
              to make ends meet even with their monthly groceries.<br></br>
              Your small contribution will help them to be able to motivate them
              in their ibadah in Ramadhan.
              <div className="text-center">
                <br />
                <b>We need your support🫶</b>
                <br></br>
                <br />
                <b>No amount is too small. No dream is too big. ✨</b>
                <br />
                <br />
                <Link to="/donate" onClick={handleClick}>
                  <button
                    type="button"
                    className="Donatebtn btn btn-danger my-3"
                    style={{ width: "200px" }}
                  >
                    Donate Now&nbsp;
                  </button>
                </Link>
              </div>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default IftharsDonate;
