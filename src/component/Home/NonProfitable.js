import React from "react";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import NonProfitableImg from "../../asset/NonProfitableImg.png";

function NonProfitable() {
  return (
    <div className="NonProfitable py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-12">
            <img
              src={NonProfitableImg}
              className="img-fluid"
              alt="NonProfitableImg"
            ></img>
          </div>
          <div className="col-lg-6 col-md-6 col-12">
            <h1 className="mt-5 pt-5">
              Givest is The Non Profitable Organization
            </h1>
            <p className="mt-3">
              Welcome to Wondrously Woman Gem, a compassionate haven for widows
              seeking support and empowerment. At our core, we believe in
              fostering a community where widows not only find solace in their
              grief but also discover the strength to rebuild their lives with
              resilience and dignity. Our mission is to provide comprehensive
              assistance, encompassing emotional support, financial aid, and
              skill-building programs.
            </p>
            <div className="row mt-3">
              <div className="col-lg-5 col-md-5 col-11">
                <p>
                  <b>Need your simple helpfor save children.</b>
                </p>
              </div>
              <div className="col-lg-2 col-md-2 col-11">
              <hr
                className="dividedline border-bottom"
              ></hr>
              </div>
              <div className="col-lg-5 col-md-5 col-11">
                <p>
                  <b>Need your simple helpfor save children.</b>
                </p>
              </div>
            </div>
            <button type="button" className="Donatebtn btn btn-primary">Donate Now&nbsp;<MdOutlineArrowForwardIos /></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NonProfitable;
