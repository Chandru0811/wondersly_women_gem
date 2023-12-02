import React from "react";
import MohamadNasir from "../../asset/MrMohamadNasirSawal.png";
import AlanChang from "../../asset/MrAlanChong.png";
import CommonBoard from "../../asset/CommonBoard.png";
import { FaFacebook, FaInstagram, FaWhatsapp  } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function OurBoard() {
  return (
    <section className="ourBoard py-5">
      <div className="container d-flex flex-column align-items-center justify-content-center">
        <p className="ourBoardTeam">Team</p>
        <p className="ourBoardTeamText">Our Board</p>
        <div className="row">
          <div className="col-lg-4 col-md-4 col-12 d-flex flex-column align-items-center justify-content-center">
            <img
              src={CommonBoard}
              className="img-fluid"
              alt="Mdm_Anggun_Aida_AK"
            />
            <h5>Mdm Anggun Aida AK</h5>
            <p>Founder & President</p>
            <span >
              <FaInstagram style={{ marginRight: "10px"}}/>
              <FaFacebook style={{ marginRight: "10px"}}/>
              <FaXTwitter style={{ marginRight: "10px"}}/>
              <FaWhatsapp style={{ marginRight: "10px"}}/>
            </span>
          </div>
          <div className="col-lg-4 col-md-4 col-12 d-flex flex-column align-items-center justify-content-center">
            <img
              src={AlanChang}
              className="img-fluid"
              alt="Mdm_Anggun_Aida_AK"
            />
            <h5>Mr Alan Chong</h5>
            <p>Co-Founder & Vice President</p>
            <span >
              <FaInstagram style={{ marginRight: "10px"}}/>
              <FaFacebook style={{ marginRight: "10px"}}/>
              <FaXTwitter style={{ marginRight: "10px"}}/>
              <FaWhatsapp style={{ marginRight: "10px"}}/>
            </span>
          </div>
          <div className="col-lg-4 col-md-4 col-12 d-flex flex-column align-items-center justify-content-center">
            <img
              src={MohamadNasir}
              className="img-fluid"
              alt="Mdm_Anggun_Aida_AK"
            />
            <h5>Mr Mohamad Nasir Sawal</h5>
            <p>Treasurer/ Secretary</p>
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
  );
}

export default OurBoard;
