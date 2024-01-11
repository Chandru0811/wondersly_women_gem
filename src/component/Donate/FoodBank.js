import React from "react";
import FoodBankImg from "../../asset/FoodBankImg.png";
import { Link } from "react-router-dom";

const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };


function FoodBank() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-md-6 col-12">
          <img src={FoodBankImg} className="img-fluid" alt="FoodBankImg"></img>
        </div>
        <div className="col-lg-6 col-md-6 col-12 order-lg-1 order-md-1 order-2 d-flex flex-column justify-content-center">
            <span className="d-flex align-items-center ">
              <span className="aboutName">
                <b> Food bank</b> &nbsp;&nbsp;
              </span>
              <span>
                <hr className="aboutHr" />
              </span>
            </span>
            <h1>Empower Single Moms with Your $10 Donation! </h1>
            <p>
            Join our mission to support 100 single moms and their families in need. Your $10 donation can provide essential groceries, personal care items, and school supplies, offering a lifeline to those facing challenges. Let's come together as a community, spread generosity, and make a meaningful impact. Visit our [Donation Link] to contribute and share the warmth of kindness. Together, we can make a difference in the lives of those who need it most. Thank you for being a source of hope and support! 
            </p>
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
      </div>
    </div>
  );
}

export default FoodBank;
