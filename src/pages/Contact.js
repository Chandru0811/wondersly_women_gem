import React from "react";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import member_1 from "../asset/member_1.jpg";
import member_2 from "../asset/member_2.jpg";
import member_3 from "../asset/member_3.jpg";
import Volunterr from "./Volunterr";

function Contact() {
  return (
    <section className="contact_us">
      <div className="address">
        <div className="container">
          <div className="row" style={{ padding: "100px 0px" }}>
            <div className="col-1">{/* <hr></hr> */}</div>
            <div
              className="contact_contain col-lg-6 col-12"
              style={{ paddingRight: "30px" }}
            >
              <p>
                <b
                  className="heading_word"
                  style={{ fontSize: "13px", letterSpacing: "1px" }}
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
                <div className="paragraph_word col-lg-3 col-12">
                  <p>82696181</p>
                </div>
                <div className="paragraph_word col-lg-9 col-12">
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
            <div className="col-1">{/* <hr></hr> */}</div>
            <div
              className="heading_word col-6 "
              style={{ fontSize: "15px", letterSpacing: "1.5px" }}
            >
              <p>
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
              <img
                src={member_1}
                style={{ width: "400px", height: "250px" }}
                alt="member image 1"
              />
            </div>
            <div className="col-lg-6 col-12 mt-5">
              <h3 style={{color:"#22495F"}}>Associate Membership - $50 per year</h3>
              <p style={{color:"#22495F"}}>The Associate Membership is open to all regardless of race, religion or gender. Opportunity for activities.</p>
              <button className="my-button">Learn More</button>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-lg-1"></div>
            <div className="col-lg-6 col-12">
            <h3 style={{color:"#22495F"}}>Leadership Membership - $100 per year</h3>
              <p style={{color:"#22495F"}}>Who have attained the age of 18 and who are citizens or permanent residents of Singapore. An ordinary member shall have the right to stand for election; to nominate or second a candidate for election and to vote at the General Meetings of WWGEM. An ordinary member shall be eligible to participate in the activities of WWGEM and use the facilities of the organisation.</p>
              <button className="my-button">Learn More</button>
            </div>
            <div className="col-lg-5 col-12">
            <img
                src={member_2}
                style={{ width: "400px", height: "250px" }}
                alt="member image 2"
              />
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-lg-1"></div>
            <div className="col-lg-5 col-12 mt-3">
              <img
                src={member_3}
                style={{ width: "400px", height: "250px" }}
                alt="member image 3"
              />
            </div>
            <div className="col-lg-6 col-12">
              <h3 style={{color:"#22495F"}}>Directorship Membership - $150 per year</h3>
              <p style={{color:"#22495F"}}>Who have attained the age of 18 and who are citizens or permanent residents of Singapore. An ordinary member shall have the right to stand for election; to nominate or second a candidate for election and to vote at the General Meetings of WWGEM. An ordinary member shall be eligible to participate in the activities of WWGEM and use the facilities of the organisation. Have more opportunities to WWGEM events, activities and connections.</p>
              <button className="my-button">Learn More</button>
            </div>
          </div>
        </div>
      </div>
      <div className="volunteer">
      <Volunterr />
      </div>
    </section>
  );
}

export default Contact;
