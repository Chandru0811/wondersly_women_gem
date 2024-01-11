import React from "react";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

function Solution() {
  return (
    <section className="Solution">
      <div className="container">
        <div className="row py-2">
          <div className="offset-lg-1 col-lg-10  d-flex align-items-center justify-content-center">
            <div className="card " style={{ width: "100%" }}>
              <div className="solutionBackground">
                <div className="card-title p-4">
                  <p className="solutiionAct">Act Now for a Better World</p>
                  <div className="row d-flex align-items-center justify-content-center">
                    <div className="col-lg-9 col-md-9 col-12">
                      <p className="solutionText">
                        Solutions to Help People in Need and Save the Planet
                      </p>
                    </div>
                    <div className="col-lg-3 col-md-3 col-12">
                      <Link to="/donate">
                      <button type="button" className="btn solutionDonate">
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
