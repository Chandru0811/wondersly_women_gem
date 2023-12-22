import React from "react";
import Donate_1 from "../../asset/Donate_1.png";
import Donate_2 from "../../asset/Donate_2.png";
import Donate_3 from "../../asset/Donate_3.png";
import Donate_4 from "../../asset/Donate_4.png";
import Donate_5 from "../../asset/Donate_5.png";
import { Link } from "react-router-dom";

const handleClick = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

function BigHeart() {

  return (
    <section className="bigHeart" >
      <div className="container py-3">
        <div className="row">
          <div data-aos="fade-up" className="col-lg-6 col-md-6 col-12 d-flex flex-column justify-content-center">
            <span className="d-flex align-items-center ">
              <span className="Open">
                <b>Open Donate</b> &nbsp;&nbsp;
              </span>
              <span>
                <hr className="aboutHr" />
              </span>
            </span>
            <h1 className="bigheart_heading">Safer Giving</h1>
            <p className="bigheart_content">
              It's the beautiful season for giving again in December. Wondrously
              woman GEM is having a campaign for "BIG HEART." Groceries give
              away. Each groceries worth $50 - $100 consist of dry and wet items
              as stated in the poster. We are giving it away to single moms,
              needy family, and old folks all living in rental flats. Let's
              bring joy to them before we start our new year
            </p>
            <p className="bigheart_quotes">"200 families will benefit from these packages."</p>
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
          <div data-aos="fade-down" className="col-lg-6 col-md-6 col-12 donateColumn" >
            <div className="row">
              <div className="col-lg-4 col-md-6 col-12 d-flex align-items-center justify-content-center">
                <img src={Donate_1} className="img-fluid" alt="Donate_1"></img>
              </div>
              <div className="col-lg-4 col-md-6 col-12 d-flex align-items-center justify-content-center">
                <img src={Donate_2} className="img-fluid" alt="Donate_2"></img>
              </div>
              <div className="col-lg-4 col-md-6 col-12 d-flex align-items-center justify-content-center mt-md-1">
                <img src={Donate_3} className="img-fluid" alt="Donate_3"></img>
              </div>
              <div className="col-lg-4 col-md-6 col-12 d-flex align-items-center justify-content-center mt-2 mt-lg-0 mt-md-1">
                <img src={Donate_4} className="img-fluid" alt="Donate_4"></img>
              </div>
              <div className="col-lg-4 col-md-6 col-12 d-flex align-items-center justify-content-center mt-2 mt-lg-0 mt-md-1">
                <img src={Donate_5} className="img-fluid" alt="Donate_5"></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BigHeart;
