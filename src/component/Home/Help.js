import React from "react";
import VolunteerIcon from "../../asset/volunteerIcon.png";
import DonationIcon from "../../asset/DonationIcon.png";
import DonationIcon_1 from "../../asset/DonationIcon_1.png";

function Help() {

  return (
    <div className="Help">
      <div className="container pb-3">
        <div className="row">
          <div data-aos="fade-down">
            <h1 className="text-center mt-3 mb-5">How Could You Help?</h1>
          </div>
          <div className="col-lg-4 col-md-6 col-12 d-flex mb-3">
            <div data-aos="fade-up" className="card" style={{ width: "19rem" }}>
              <div className="serviceCard flex-fill d-flex flex-column align-items-center justify-content-center p-3">
                <img src={VolunteerIcon} className="img-fluid" alt="Logo" />
                <h5 className="cardHeading py-2">Become a Volunteer</h5>
                <p className="text-center">
                  You can contribute your time, skills, and knowledge through
                  volunteering with the UN.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-12 d-flex mb-3">
            <div data-aos="fade-up" className="card" style={{ width: "19rem" }}>
              <div className="serviceCard flex-fill d-flex flex-column align-items-center justify-content-center p-3">
                <img src={DonationIcon} className="img-fluid" alt="Logo" />
                <h5 className="cardHeading py-2">Call for Donation</h5>
                <p className="text-center">
                  You can contribute your time, skills, and knowledge through
                  volunteering with the UN.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-12 d-flex mb-3">
            <div data-aos="fade-up" className="card" style={{ width: "19rem" }}>
              <div className="serviceCard flex-fill d-flex flex-column align-items-center justify-content-center p-3">
                <img src={DonationIcon_1} className="img-fluid" alt="Logo" />
                <h5 className="cardHeading py-2">Send Donation</h5>
                <p className="text-center">
                  You can contribute your time, skills, and knowledge through
                  volunteering with the UN.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Help;
