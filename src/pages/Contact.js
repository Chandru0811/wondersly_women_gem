import React from "react";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import member_1 from "../asset/member_1.jpg";
import member_2 from "../asset/member_2.jpg";
import member_3 from "../asset/member_3.jpg";
import Volunterr from "../component/common/Volunterr";
import ContactForm from "../component/common/ContactForm";
import { Link } from "react-router-dom";

const handleClick = () => {
  window.scrollTo({ top: 2080, behavior: "smooth" });
};

function Contact() {
  return (
    <section className="contact_us" style={{ marginTop: "118px" }}>
      <div className="address">
        <div className="container">
          <div className="row" style={{ padding: "100px 0px" }}>
            <div className="col-lg-1 d-none d-lg-block">
              <hr
                className="border-bottom border-2"
                style={{ borderColor: "#22495F" }}
              ></hr>
            </div>
            <div
              className="contact_contain col-lg-6 col-12"
              style={{ paddingRight: "30px" }}
            >
              <p style={{ marginTop: "5px" }}>
                <b
                  className="heading_word"
                  style={{
                    fontSize: "13px",
                    letterSpacing: "1px",
                    marginTop: "100px",
                  }}
                >
                  CONTACT US
                </b>
              </p>
              <h1>
                <b className="heading_word" style={{ fontSize: "50px" }}>
                  We'd love to hear <br></br> from you
                </b>
              </h1>
              <p className="paragraph_word">
                Have any question in mind or want to enquire?<br></br> Please
                feel free to contact us through the form or the following
                details.
              </p>
            </div>
            <div className="col-lg-5 col-12 pt-3">
              <h5 className="heading_word">
                <b>Let's talk! </b>
              </h5>
              <div className="row">
                <div className="paragraph_word col-lg-4 col-12">
                  <p>+65 82696181</p>
                </div>
                <div className="paragraph_word col-lg-8 col-12">
                  <p>
                    wwgem2015@gmail.com<br></br>hbbsgwwgem@gmail.com
                  </p>
                </div>
              </div>
              <h5 className="heading_word">
                <b>Headoffice</b>
              </h5>
              <p className="paragraph_word">
                1 Yishun Industrial Street 1, A'Posh <br></br>Bizhub 08-02A
              </p>
              <span className="d-flex">
                <FaFacebook className="contactIcon" />
                <FaXTwitter className="contactIcon" />
                <FaLinkedin className="contactIcon" />
              </span>
            </div>
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
      <div className="volunteer">
        <Volunterr />
        <ContactForm />
      </div>
    </section>
  );
}

export default Contact;
