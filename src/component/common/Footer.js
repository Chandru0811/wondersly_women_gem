import React from "react";
import "../../style/custom.css";
import Logo from "../../asset/wwg.png";
import { FaFacebook, FaInstagram, FaWhatsapp  } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <section>
    <div className="d-flex flex-column align-items-center footerSection py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-3 col-12 mb-3 d-flex flex-column justify-content-center">
            <img
              src={Logo}
              alt="WWG"
              className="img-fluid"
              width={80}
              height={80}
            />
            <p className="footerText my-4" >
              Care about people to transforming their lives and exudes a
              positives Impressiono believe. fundraising NGO organizations.
            </p>
            <span className="d-flex">
              <FaInstagram className="footerIcon" />
              <FaFacebook className="footerIcon" />
              <FaXTwitter className="footerIcon" />
              <FaWhatsapp  className="footerIcon" />
            </span>
          </div>
          <div className="col-lg-8 col-md-3 col-12">
            <div className="row footerRow">
              <div className="col-lg-3 col-md-3 col-12">
                <p className="footerHeading mt-3">Get Involved</p>
                <hr />
                <span className="d-flex flex-column">
                  <span className="footerContent">About Us</span>
                  <span className="footerContent">Volunteer</span>
                  <span className="footerContent">Causes</span>
                  <span className="footerContent">Projects</span>
                  <span className="footerContent">Team</span>
                </span>
              </div>
              <div className="col-lg-3 col-md-3 col-12">
                <p className="footerHeading mt-3">Utility</p>
                <hr />
                <span className="d-flex flex-column">
                  <span className="footerContent">Style Guide</span>
                  <span className="footerContent">Licences</span>
                  <span className="footerContent">Password</span>
                  <span className="footerContent">404 Page</span>
                  <span className="footerContent">Changelog</span>
                </span>
              </div>
              <div className="col-lg-6 col-md-6 col-12">
                <p className="footerHeading mt-3">Contact</p>
                <hr />
                <span className="d-flex flex-column">
                  <span
                    className="footerContent"
                    style={{ marginBottom: "20px" }}
                  >
                    1 Yishun Industrial Street 1, <br />
                    A'Posh Bizhub 08-02A
                  </span>
                  <span className="footerContent">
                    wwgem2015@gmail.com <br />
                    +65 82696181
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="d-flex flex-column align-items-center py-3" style={{ backgroundColor: '#2B1447',color: '#fff' }}>
      <span className="footerCopyrights">copyrights @ Wondrously Woman Gem 2023</span>
    </div>
    </section>
  );
}

export default Footer;
