import React from "react";
import LadybossBCImg1 from "../../../asset/LadybossBCImg_1.png";
import LadybossBCImg2 from "../../../asset/LadybossBCImg_2.png";
import LadybossBCImg3 from "../../../asset/LadybossBCImg_3.png";
import LadybossBCImg4 from "../../../asset/LadybossBCImg_4.png";

function LadyBossBC() {
  return (
    <section className="ladybossBC">
      <div className="container-fluid">
        <div className="row">
          <div  className="ladybossbcTitle d-flex flex-column align-items-center justify-content-center col-lg-5 col-md-5 col-12">
            <p>LadyBoss Business Connect</p>
            <h5 className="ladybossbcContent">
              “Everyone has a passion but some do not understand how it can be
              turn to passive income. Today thru some education tools, knowledge
              sharing and activities, we can turn our passion to have an income
              even from home and using the digitalisation.”
            </h5>
          </div>
          <div
            className="col-lg-7 col-md-7 col-12 py-3"
            style={{
              background: "linear-gradient(to left, #DE3163 80%, rgba(222, 49, 99, 0.2) 20%)",
            }}
          >
            <div className="row">
              <div className="LadybossBCImg2 d-flex align-items-center justify-content-center col-lg-6 col-md-6 col-12">
                <img
                  src={LadybossBCImg1}
                  className="img-fluid"
                  alt="ladybossbcImg_1"
                ></img>
              </div>
              <div className="LadybossBCImg1 d-flex align-items-center justify-content-center col-lg-6 col-md-6 col-12">
                <img
                  src={LadybossBCImg2}
                  className="img-fluid"
                  alt="ladybossbcImg_2"
                ></img>
              </div>
              <div className="LadybossBCImg2 d-flex align-items-center justify-content-center col-lg-6 col-md-6 col-12 mt-3">
                <img
                  src={LadybossBCImg3}
                  className="img-fluid"
                  alt="ladybossbcImg_3"
                ></img>
              </div>
              <div className="LadybossBCImg1 d-flex align-items-center justify-content-center col-lg-6 col-md-6 col-12 mt-3">
                <img
                  src={LadybossBCImg4}
                  className="img-fluid"
                  alt="ladybossbcImg_4"
                ></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LadyBossBC;
