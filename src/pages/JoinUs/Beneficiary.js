import React from "react";
import { Link } from "react-router-dom";
import JoinVideo from "../../asset/videos/joinUsimg.mp4"

function Beneficiary() {
  return (
    <section style={{ marginTop: "150px" }}>
      <div className="container py-3 ">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-12 d-flex flex-column align-items-center">
          <div class="embed-responsive embed-responsive-1by1">
                <video
                  class="embed-responsive-item"
                  controls
                  style={{ width: "100%" }}
                >
                  <source src={JoinVideo} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
          </div>
          <div className="col-lg-6 col-md-6 col-12 d-flex flex-column justify-content-center">
            <h2 className="volunteerFormTitle">Be a Beneficiary!</h2>
            <p className="volunteerform_Embrace">
              Discover the advantages of being part of our community. As a
              beneficiary, you'll enjoy:
            </p>
            <hr className="volunteerform_Line" />
            <ul>
              <li>Exclusive access to valuable resources and insights</li>
              <li>Priority notification on upcoming events and promotions</li>
              <li>Special privileges designed just for you</li>
            </ul>
            <Link to="https://forms.gle/R1UrUpH16r3WcF178" target="_blank">
              <button className="my-button">Join Now</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Beneficiary;
