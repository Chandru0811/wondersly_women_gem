import React from "react";
import MohamadNasir from "../../asset/MrMohamadNasirSawal.png";
import AlanChang from "../../asset/MrAlanChong.png";
import MariaAbdullah from "../../asset/MrsMariaAbdullah.png";
import CommonBoard from "../../asset/CommonBoard.png";

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
            <p>Hii</p>
          </div>
          <div className="col-lg-4 col-md-4 col-12 d-flex flex-column align-items-center justify-content-center">
            <img
              src={AlanChang}
              className="img-fluid"
              alt="Mdm_Anggun_Aida_AK"
            />
            <p>Hii</p>
          </div>
          <div className="col-lg-4 col-md-4 col-12 d-flex flex-column align-items-center justify-content-center">
            <img
              src={MohamadNasir}
              className="img-fluid"
              alt="Mdm_Anggun_Aida_AK"
            />
            <p>Hii</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurBoard;
