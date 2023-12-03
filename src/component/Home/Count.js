import React from "react";

function Count() {
  return (
    <section className="Count pb-3">
      <div className="container d-flex flex-column align-items-center justify-content-center">
        <div className="row">
          <div className="col-lg-3 col-md-3 col-12 p-3 d-flex flex-column align-items-center justify-content-center">
            <div className="d-flex flex-column align-items-center justify-content-center">
              <h5 className="supportersCount">20M</h5>
              <hr className="supportLine" />
            </div>
            <p className="supportersText pt-2">Number of Supporters</p>
          </div>

          <div className="col-lg-3 col-md-3 col-12 p-3 d-flex flex-column align-items-center justify-content-center">
            <div className="d-flex flex-column align-items-center justify-content-center">
              <h5 className="supportersCount">15K+</h5>
              <hr className="supportLine" />
            </div>
            <p className="supportersText pt-2">Volunteers Worldwide</p>
          </div>

          <div className="col-lg-3 col-md-3 col-12 p-3 d-flex flex-column align-items-center justify-content-center">
            <div className="d-flex flex-column align-items-center justify-content-center">
              <h5 className="supportersCount">68K+</h5>
              <hr className="supportLine" />
            </div>
            <p className="supportersText pt-2">We've Helped Raise</p>
          </div>

          <div className="col-lg-3 col-md-3 col-12 p-3 d-flex flex-column align-items-center justify-content-center">
            <div className="d-flex flex-column align-items-center justify-content-center">
              <h5 className="supportersCount">10M+</h5>
              <hr className="supportLine" />
            </div>
            <p className="supportersText pt-2">Projects Funded</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Count;
