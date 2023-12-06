import React from "react";
import { IoLogoCodepen, IoLogoVk, IoLogoXing, IoLogoBuffer, IoLogoFlickr, IoLogoIonitron } from "react-icons/io";

function Supporters() {
  return (
    <section className="Supporters">
      <div className="container py-5">
        <div className="row">
          <h3 style={{ whiteSpace: "nowrap"}}>OUR SUPPORTERS</h3>
          <hr style={{ color: "#fff" }}></hr>
          <div className="supportersName col-lg-2 col-md-2 col-12"><IoLogoCodepen className="supportersIcon" /> logoipsum</div>
          <div className="supportersName col-lg-2 col-md-2 col-12"><IoLogoVk className="supportersIcon" /> logoipsum</div>
          <div className="supportersName col-lg-2 col-md-2 col-12"><IoLogoXing className="supportersIcon" /> logoipsum</div>
          <div className="supportersName col-lg-2 col-md-2 col-12"><IoLogoBuffer className="supportersIcon" /> logoipsum</div>
          <div className="supportersName col-lg-2 col-md-2 col-12"><IoLogoFlickr className="supportersIcon" /> logoipsum</div>
          <div className="supportersName col-lg-2 col-md-2 col-12"><IoLogoIonitron className="supportersIcon" /> logoipsum</div>
        </div>
      </div>
    </section>
  );
}

export default Supporters;
