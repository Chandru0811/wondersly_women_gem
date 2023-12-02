import React from 'react'
import MrsMariaAbdullah from "../../asset/MrsMariaAbdullah.png";
import CommonBoard from "../../asset/CommonBoard.png";
import { FaFacebook, FaInstagram, FaWhatsapp  } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function BoardCommittee() {
  return (
    <section className="BoardCommittee py-5">
      <div className="container d-flex flex-column align-items-center justify-content-center">
        <p className="ourBoardTeam">Team</p>
        <p className="ourBoardTeamText">Board Committee</p>
        <div className="row">
          <div className="col-lg-4 col-md-4 col-12 d-flex flex-column align-items-center justify-content-center">
            <img
              src={CommonBoard}
              className="img-fluid"
              alt="Common_Board"
            />
            <h5>Mdm Roszilah</h5>
            <p>Member</p>
            <span >
              <FaInstagram style={{ marginRight: "10px"}}/>
              <FaFacebook style={{ marginRight: "10px"}}/>
              <FaXTwitter style={{ marginRight: "10px"}}/>
              <FaWhatsapp style={{ marginRight: "10px"}}/>
            </span>
          </div>
          <div className="col-lg-4 col-md-4 col-12 d-flex flex-column align-items-center justify-content-center">
            <img
              src={MrsMariaAbdullah}
              className="img-fluid"
              alt="Mdm_Anggun_Aida_AK"
            />
            <h5>Mrs Maria Abdullah</h5>
            <p>Board of Director (Women wing)</p>
            <span >
              <FaInstagram style={{ marginRight: "10px"}}/>
              <FaFacebook style={{ marginRight: "10px"}}/>
              <FaXTwitter style={{ marginRight: "10px"}}/>
              <FaWhatsapp style={{ marginRight: "10px"}}/>
            </span>
          </div>
          <div className="col-lg-4 col-md-4 col-12 d-flex flex-column align-items-center justify-content-center">
            <img
              src={CommonBoard}
              className="img-fluid"
              alt="Mdm_Anggun_Aida_AK"
            />
            <h5>Ms Helen</h5>
            <p>Member</p>
            <span >
              <FaInstagram style={{ marginRight: "10px"}}/>
              <FaFacebook style={{ marginRight: "10px"}}/>
              <FaXTwitter style={{ marginRight: "10px"}}/>
              <FaWhatsapp style={{ marginRight: "10px"}}/>
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BoardCommittee