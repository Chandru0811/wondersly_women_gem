import React from 'react'
import VolunteerForm from '../../component/common/VolunteerForm'
import { Link } from 'react-router-dom'
import member_1 from "../../asset/member_1.jpg";
import member_2 from "../../asset/member_2.jpg";
import member_3 from "../../asset/member_3.jpg";

const handleClick = () => {
  window.scrollTo({ top: 2080, behavior: "smooth" });
};

function Volunteer() {
  return (
    <div style={{ marginTop: '150px' }}>
        <VolunteerForm />
        <div className="member py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-1 d-none d-lg-block">
              <hr
                className="border-bottom border-2"
                style={{ borderColor: "#22495F" }}
              ></hr>
            </div>
            <div
              className="heading_word col-lg-6"
              style={{ fontSize: "15px", letterSpacing: "1.5px" }}
            >
              <p style={{ marginTop: "5px" }}>
                <b>Be A Member</b>
              </p>

              <p style={{ fontSize: "30px", color: "#2E4049" }}>
                <b>Become a Member and Empower Single Moms: Join Our Cause!</b>
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-1"></div>
            <div className="col-lg-5 col-12">
              <img className="img-fluid" src={member_1} alt="member img 1" />
            </div>
            <div className="col-lg-6 col-12 mt-5">
              <h3 style={{ color: "#22495F" }}>
                Associate Membership - $50 per year
              </h3>
              <p style={{ color: "#22495F" }}>
                The Associate Membership is open to all regardless of race,
                religion or gender. Opportunity for activities.
              </p>
              <Link to="/contact" onClick={handleClick}>
                <button className="my-button">Learn More</button>
              </Link>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-lg-1"></div>
            <div className="col-lg-6 col-12 order-md-2 order-lg-1 order-2 mt-3">
              <h3 style={{ color: "#22495F" }}>
                Leadership Membership - $100 per year
              </h3>
              <p style={{ color: "#22495F" }}>
                Who have attained the age of 18 and who are citizens or
                permanent residents of Singapore. An ordinary member shall have
                the right to stand for election; to nominate or second a
                candidate for election and to vote at the General Meetings of
                WWGEM. An ordinary member shall be eligible to participate in
                the activities of WWGEM and use the facilities of the
                organisation.
              </p>
              <Link to="/contact" onClick={handleClick}>
                <button className="my-button">Learn More</button>
              </Link>
            </div>
            <div className="col-lg-5 col-12 order-md-1 order-lg-2 order-1">
              <img className="img-fluid" src={member_2} alt="member img 2" />
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-lg-1"></div>
            <div className="col-lg-5 col-12 mt-3">
              <img className="img-fluid" src={member_3} alt="member img 3" />
            </div>
            <div className="col-lg-6 col-12 mt-4">
              <h3 style={{ color: "#22495F" }}>
                Directorship Membership - $150 per year
              </h3>
              <p style={{ color: "#22495F" }}>
                Who have attained the age of 18 and who are citizens or
                permanent residents of Singapore. An ordinary member shall have
                the right to stand for election; to nominate or second a
                candidate for election and to vote at the General Meetings of
                WWGEM. An ordinary member shall be eligible to participate in
                the activities of WWGEM and use the facilities of the
                organisation. Have more opportunities to WWGEM events,
                activities and connections.
              </p>
              <Link to="/contact" onClick={handleClick}>
                <button className="my-button">Learn More</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Volunteer