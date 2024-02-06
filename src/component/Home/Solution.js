import React from "react";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const handleClick = () => {
  window.scrollTo({ top: 0, behavior: "smooth"});
};

function Solution() {
  return (
    <section className="Solution pb-5">
      <div className="container">
        <div className="row py-2">
          <div className="offset-lg-1 col-lg-10  d-flex align-items-center justify-content-center">
            <div className="card " style={{ width: "100%" }}>
              <div className="solutionBackground">
                <div className="card-title p-4">
                  <p className="solutiionAct">Act Now for a Better World</p>
                  <div className="row ">
                    <div className="col-lg-9 col-md-9 col-12 d-flex align-items-center">
                      <p className="solutionText">
                        "We Raise By Lifting Others!"
                      </p>
                    </div>
                    <div className="col-lg-3 col-md-3 col-12 d-flex align-items-center justify-content-center">
                      <Link to="/donate">
                        <button type="button" className="btn solutionDonate" onClick={handleClick}>
                          Donate Now <FaHeart />
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Solution;
