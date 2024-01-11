import React from 'react';
import JoinMember from "../../asset/joinmember.jpeg"
import { Link } from "react-router-dom";
import member_1 from "../../asset/member_1.jpg";
import member_2 from "../../asset/member_2.jpg";
import member_3 from "../../asset/member_3.jpg";

const handleClick = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

function Member() {
  return (
    <section  style={{ marginTop: '150px', backgroundColor: "rgb(120, 81, 169, 15%)" }}>
      <div className="container py-3 ">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-12 d-flex flex-column align-items-center">
          {/* <h2 className="volunteerform_Heart">
              "Volunteers do not necessarily have the time, they just have the
              heart."
            </h2> */}
            <img
              src={JoinMember}
              className="img-fluid"
              alt="VolunteerForm_Img"
            />
            
          </div>
          <div className="col-lg-6 col-md-6 col-12 d-flex flex-column justify-content-center">
            <h2 className="volunteerFormTitle">Be a Member!</h2>
            <p className="volunteerform_Embrace">
              Embrace the Power of Giving: Membership with Us
            </p>
            <hr className="volunteerform_Line" />
            <p>Join our community today to access premium content, member-only events, and special discounts. Click "Join Now" to become a valued member and enjoy a personalized experience with us!</p>
            <Link to="https://forms.gle/mnHc56Ch3mCe2ScD6" target="_blank">
                <button className="my-button">Join Now</button>
              </Link>
          </div>
        </div>
      </div>
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
              <Link to="https://forms.gle/mnHc56Ch3mCe2ScD6" target="_blank">
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
              <Link to="https://forms.gle/mnHc56Ch3mCe2ScD6" target="_blank">
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
              <Link to="https://forms.gle/mnHc56Ch3mCe2ScD6" target="_blank">
                <button className="my-button">Learn More</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Member
