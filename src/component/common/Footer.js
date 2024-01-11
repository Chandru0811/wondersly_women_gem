import React from "react";
import "../../style/custom.css";
import Logo from "../../asset/wwg.png";
import { FaFacebook, FaInstagram, FaWhatsapp  } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Nav } from "react-bootstrap";

function Footer() {
  return (
    <section>
    <div className="d-flex flex-column align-items-center footerSection py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-4 col-12 mb-3 d-flex flex-column justify-content-center">
            <img
              src={Logo}
              alt="WWG"
              className="img-fluid"
              width={100}
              height={100}
            />
            <p className="footerText my-4" >
              Care about people to transforming their lives and exudes a
              positives Impressiono believe. fundraising NPO organizations.
            </p>
            <span className="d-flex">
                <Nav.Link 
                  href="https://www.instagram.com/thesunriseyc?igsh=MTUyanZwZmM2eXNrZw=="  style={{ border: "0px" }}
                  target="_blank"
                >
                  <FaInstagram className="footerIcon" />
                </Nav.Link>
                <Nav.Link
                  href="https://www.facebook.com/wwgem?mibextid=hIlR13" style={{ border: "0px" }}
                  target="_blank"
                >
                  <FaFacebook className="footerIcon" />
                </Nav.Link>
                <FaXTwitter className="footerIcon" />
                <FaWhatsapp className="footerIcon" />
              </span>
          </div>
          <div className="col-lg-8 col-md-9 col-12">
            <div className="row footerRow">
              <div className="col-md-6 col-12">
                <p className="footerHeading mt-3">Get Involved</p>
                <hr />
                <span className="d-flex flex-column">
                  <span className="footerContent">About Us</span>
                  <span className="footerContent">Join Us</span>
                  <span className="footerContent">Program</span>
                  <span className="footerContent">Contact</span>
                  <span className="footerContent">Career</span>
                  <span className="footerContent">Blogs</span>
                </span>
              </div>
              <div className="col-md-6 col-12">
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
                    admin@wwgemsyc.org <br />
                    management@wwgemsyc.org <br />
                    +65 8894 1306
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
