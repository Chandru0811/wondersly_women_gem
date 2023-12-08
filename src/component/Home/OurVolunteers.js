import React from "react";
import OurVolunteers1 from "../../asset/Our Volunteers.png";
import OurVolunteers2 from "../../asset/Our Volunteers_1.png";
import OurVolunteers3 from "../../asset/Our Volunteers_2.png";
import VolunteersIcon from "../../asset/VolunteersIcon.png";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function OurVolunteers() {
  return (
    <section className="ourVolunteers">
      <div className="container d-flex flex-column align-items-center justify-content-center py-3">
        <p className="ourBoardTeam">Team</p>
        <p className="ourVolunteersText">Meet Our Volunteers</p>
        <div className="row">
          <div className="col-lg-3 col-md-4 col-12 d-flex flex-column align-items-center justify-content-center pb-2">
            <img
              src={OurVolunteers1}
              className="img-fluid"
              alt="Mdm_Anggun_Aida_AK"
            />
            <h5>Diyaa Udeen</h5>
            <span>
              <FaInstagram style={{ marginRight: "10px" }} />
              <FaFacebook style={{ marginRight: "10px" }} />
              <FaXTwitter style={{ marginRight: "10px" }} />
              <FaWhatsapp style={{ marginRight: "10px" }} />
            </span>
          </div>
          <div className="col-lg-3 col-md-4 col-12 d-flex flex-column align-items-center justify-content-center  pb-2">
            <img
              src={OurVolunteers2}
              className="img-fluid"
              alt="Mdm_Anggun_Aida_AK"
            />
            <h5>Haleema</h5>
            <span>
              <FaInstagram style={{ marginRight: "10px" }} />
              <FaFacebook style={{ marginRight: "10px" }} />
              <FaXTwitter style={{ marginRight: "10px" }} />
              <FaWhatsapp style={{ marginRight: "10px" }} />
            </span>
          </div>
          <div className="col-lg-3 col-md-4 col-12 d-flex flex-column align-items-center justify-content-center  pb-2">
            <img
              src={OurVolunteers3}
              className="img-fluid"
              alt="Mdm_Anggun_Aida_AK"
            />
            <h5>Abdul-Aleem</h5>
            <span>
              <FaInstagram style={{ marginRight: "10px" }} />
              <FaFacebook style={{ marginRight: "10px" }} />
              <FaXTwitter style={{ marginRight: "10px" }} />
              <FaWhatsapp style={{ marginRight: "10px" }} />
            </span>
          </div>
          <div className="col-lg-3 col-md-4 col-12 d-flex flex-column align-items-center justify-content-center  pb-2">
            <div className="card text-center py-5" style={{ width: "15rem"}}>
              <img
                src={VolunteersIcon}
                className="img-fluid mx-auto"
                alt="VolunteersIcon"
                style={{ width: "50px", height: "50px" }}
              />
              <div className="card-body">
                <h5 className="card-title">Become a Volunteer</h5>
                <p className="card-text">
                  Centuries but also the leap electtypesetting, remaining
                </p>
                <a href="/" className="btn btn-primary volunteerbtn">
                  Join Us Today
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurVolunteers;
