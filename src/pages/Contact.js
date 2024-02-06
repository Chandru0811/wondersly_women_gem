import React from "react";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import ContactForm from "../component/common/ContactForm";

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
                  <p>+65 8269 6181</p>
                </div>
                <div className="paragraph_word col-lg-8 col-12">
                  <p>
                  admin@wwgemsyc.org<br></br>management@wwgemsyc.org
                  </p>
                </div>
              </div>
              <h5 className="heading_word">
                <b>Headoffice</b>
              </h5>
              <p className="paragraph_word">
                1 Yishun Industrial Street 1, A'Posh <br></br>Bizhub, 08-02A, Singapore 768160,
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
      <div className="volunteer">
        <ContactForm />
      </div>
    </section>
  );
}

export default Contact;
