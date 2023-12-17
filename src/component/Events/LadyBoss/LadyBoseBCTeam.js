import React from "react";
import Mdm_Anggun_A from "../../../asset/Mdm_Anggun_A.png";
import Mohammed_Nasir from "../../../asset/Mohammed_Nasir.png";
import Ms_Salyna from "../../../asset/Ms_Salyna.png";

function LadyBoseBCTeam() {
  return (
    <section className="ladybossbcTeam">
      <div className="container d-flex flex-column align-items-center justify-content-center py-4">
        <div data-aos="fade-up">
          <p className="ourBoardTeam">Team</p>
          <p className="ourBoardTeamText">LADYBOSS BC TEAM</p>
        </div>
        <div className="row">
          <div
            data-aos="fade-down"
            className="col-lg-4 col-md-4 col-12 d-flex flex-column align-items-center justify-content-center"
          >
            <img
              src={Mdm_Anggun_A}
              className="img-fluid"
              alt="Mdm_Anggun_Aida_AK"
            />
            <h5>MDM ANGGUN AK</h5>
            <p>Managing Director</p>
            {/* <span >
              <FaInstagram style={{ marginRight: "10px"}}/>
              <FaFacebook style={{ marginRight: "10px"}}/>
              <FaXTwitter style={{ marginRight: "10px"}}/>
              <FaWhatsapp style={{ marginRight: "10px"}}/>
            </span> */}
          </div>
          <div
            data-aos="fade-down"
            className="col-lg-4 col-md-4 col-12 d-flex flex-column align-items-center justify-content-center"
          >
            <img
              src={Mohammed_Nasir}
              className="img-fluid"
              alt="Mdm_Anggun_Aida_AK"
            />
            <h5>MR NASIR</h5>
            <p>Production Managing Director</p>
            {/* <span >
              <FaInstagram style={{ marginRight: "10px"}}/>
              <FaFacebook style={{ marginRight: "10px"}}/>
              <FaXTwitter style={{ marginRight: "10px"}}/>
              <FaWhatsapp style={{ marginRight: "10px"}}/>
            </span> */}
          </div>
          <div
            data-aos="fade-down"
            className="col-lg-4 col-md-4 col-12 d-flex flex-column align-items-center justify-content-center"
          >
            <img
              src={Ms_Salyna}
              className="img-fluid"
              alt="Mdm_Anggun_Aida_AK"
            />
            <h5>MS SALYNA</h5>
            <p>Manager</p>
            {/* <span >
              <FaInstagram style={{ marginRight: "10px"}}/>
              <FaFacebook style={{ marginRight: "10px"}}/>
              <FaXTwitter style={{ marginRight: "10px"}}/>
              <FaWhatsapp style={{ marginRight: "10px"}}/>
            </span> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default LadyBoseBCTeam;
