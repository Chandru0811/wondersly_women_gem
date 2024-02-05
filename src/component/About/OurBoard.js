import React from "react";
import MohammedNasir from "../../asset/Mohammed_Nasir.png";
import AlanChang from "../../asset/MrAlanChong.png";
import Mdm_Anggun_A from "../../asset/Mdm_Anggun_A.png";
import Mr_Leong_YH from "../../asset/Mr_Leong_YH.png";
import Mr_Edwin_Koh from "../../asset/Mr_Edwin_Koh.png";
import Mr_Nagarajan from "../../asset/Mr_Nagarajan.png";
import Jackie_Wum from "../../asset/Jackie_Wum.png";
import RimaMcDonald from "../../asset/RimaMcDonald.png";

// import { FaFacebook, FaInstagram, FaWhatsapp  } from "react-icons/fa";
// import { FaXTwitter } from "react-icons/fa6";

function OurBoard() {
  return (
    <section className="ourBoard py-5">
      <div className="container d-flex flex-column align-items-center justify-content-center">
        <p className="ourBoardTeam">Team</p>
        <p className="ourBoardTeamText">Our Board</p>
        <div className="row mb-5">
          <div className="col-lg-4 col-md-4 col-12 d-flex flex-column align-items-center justify-content-center">
            <img
              src={Mdm_Anggun_A}
              className="img-fluid"
              alt="Mdm_Anggun_Aida_AK"
            />
            <h5>Mdm Anggun Aida AK</h5>
            <p>Founder & President</p>
            {/* <span >
              <FaInstagram style={{ marginRight: "10px"}}/>
              <FaFacebook style={{ marginRight: "10px"}}/>
              <FaXTwitter style={{ marginRight: "10px"}}/>
              <FaWhatsapp style={{ marginRight: "10px"}}/>
            </span> */}
          </div>
          <div className="col-lg-4 col-md-4 col-12 d-flex flex-column align-items-center justify-content-center">
            <img
              src={AlanChang}
              className="img-fluid"
              alt="Mdm_Anggun_Aida_AK"
            />
            <h5>Mr Alan Chong</h5>
            <p>Co-Founder & Vice President</p>
            {/* <span >
              <FaInstagram style={{ marginRight: "10px"}}/>
              <FaFacebook style={{ marginRight: "10px"}}/>
              <FaXTwitter style={{ marginRight: "10px"}}/>
              <FaWhatsapp style={{ marginRight: "10px"}}/>
            </span> */}
          </div>
          <div className="col-lg-4 col-md-4 col-12 d-flex flex-column align-items-center justify-content-center">
            <img
              src={MohammedNasir}
              className="img-fluid"
              alt="Mdm_Anggun_Aida_AK"
            />
            <h5>Mohammed Nasir</h5>
            <p>Honorary Secretary/ Treasurer</p>
            {/* <span >
              <FaInstagram style={{ marginRight: "10px"}}/>
              <FaFacebook style={{ marginRight: "10px"}}/>
              <FaXTwitter style={{ marginRight: "10px"}}/>
              <FaWhatsapp style={{ marginRight: "10px"}}/>
            </span> */}
          </div>
        </div>
        <div className="row ">
          <div className="col-lg-4 col-md-4 col-12 d-flex flex-column align-items-center justify-content-center">
            <img src={Mr_Nagarajan} className="img-fluid" alt="Mr_Edwin_Koh" />
            <h5>Mr Nagarajan</h5>
            <p>Board Committee Director</p>
            {/* <span >
              <FaInstagram style={{ marginRight: "10px"}}/>
              <FaFacebook style={{ marginRight: "10px"}}/>
              <FaXTwitter style={{ marginRight: "10px"}}/>
              <FaWhatsapp style={{ marginRight: "10px"}}/>
            </span> */}
          </div>
          <div className="col-lg-4 col-md-4 col-12 d-flex flex-column align-items-center justify-content-center">
            <img src={Jackie_Wum} className="img-fluid" alt="Mr_Edwin_Koh" />
            <h5>Mr Jackie Wum</h5>
            <p>Director (Public Relation)</p>
            {/* <span >
              <FaInstagram style={{ marginRight: "10px"}}/>
              <FaFacebook style={{ marginRight: "10px"}}/>
              <FaXTwitter style={{ marginRight: "10px"}}/>
              <FaWhatsapp style={{ marginRight: "10px"}}/>
            </span> */}
          </div>

          <div className="col-lg-4 col-md-4 col-12 d-flex flex-column align-items-center justify-content-center">
            <img src={Mr_Edwin_Koh} className="img-fluid" alt="Mr_Edwin_Koh" />
            <h5>Mr Edwin Koh</h5>
            <p>Board Committee Youth Advisor</p>
            {/* <span >
              <FaInstagram style={{ marginRight: "10px"}}/>
              <FaFacebook style={{ marginRight: "10px"}}/>
              <FaXTwitter style={{ marginRight: "10px"}}/>
              <FaWhatsapp style={{ marginRight: "10px"}}/>
            </span> */}
          </div>
        </div>

        <div className="row ">
          <div className="col-lg-4 col-md-4 col-12 d-flex flex-column align-items-center justify-content-center">
            <img src={Mr_Leong_YH} className="img-fluid" alt="Mr_Leong_YH" />
            <h5>Mr Leong YH</h5>
            <p>Board Committee Advisor</p>
            {/* <span >
              <FaInstagram style={{ marginRight: "10px"}}/>
              <FaFacebook style={{ marginRight: "10px"}}/>
              <FaXTwitter style={{ marginRight: "10px"}}/>
              <FaWhatsapp style={{ marginRight: "10px"}}/>
            </span> */}
          </div>
          <div className="col-lg-4 col-md-4 col-12 d-flex flex-column align-items-center justify-content-center">
            <img src={RimaMcDonald} className="img-fluid" alt="Mr_Leong_YH" />
            <h5>Mrs. Rima McDonald </h5>
            <p>Board Committee Advisor</p>
            {/* <span >
              <FaInstagram style={{ marginRight: "10px"}}/>
              <FaFacebook style={{ marginRight: "10px"}}/>
              <FaXTwitter style={{ marginRight: "10px"}}/>
              <FaWhatsapp style={{ marginRight: "10px"}}/>
            </span> */}
          </div>

          <div
            className="BoardCommitteehide col-lg-4 col-md-4 col-12 d-flex flex-column align-items-center justify-content-center"
            style={{ visibility: "hidden" }}
          >
            <img src={Mr_Edwin_Koh} className="img-fluid" alt="Mr_Edwin_Koh" />
            <h5>Mr Edwin Koh</h5>
            <p>Board Committee Youth Advisor</p>
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

export default OurBoard;
