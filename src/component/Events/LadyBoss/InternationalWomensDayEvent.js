import React from "react";
import Football_Tournament from "../../../asset/videos/InternationalWomensDayEvent.mp4";
import Thumbnail_Image from "../../../asset/ThumbLine.jpg"; // Replace "thumbnail_image.jpg" with your actual thumbnail image file path

function InternationalWomensDayEvent() {
  return (
    <section>
      <div className="tournament container-fluid py-4">
        <div className="container">
          <div className="row">
            <p className="ourBoardTeam">2nd March</p>
            <div className="offset-md-2 col-md-8 col-12">
              <p className="ourBoardTeamText mb-4">
                Wondrously Women Gem In conjunction with Women's Independence
                Day
              </p>
            </div>
            <div
              data-aos="fade-up"
              className="col-lg-6 col-md-6 col-12 d-flex flex-column align-items-center justify-content-center"
            >
              <h6 className="Futsals  text-center">
                "This is the article in Tamil.Murasu paper of our Fashion Runway
                Charity event"
              </h6>
              <br />
              <a
                href="https://www.tamilmurasu.com.sg/tabla/women-entrepreneurs-united-charity"
                target="blank"
                style={{ textDecoration: "none" }}
              >
                <button
                  className="btn btn-danger py-2 px-4"
                  style={{ borderRadius: "2px" }}
                >
                  Learn More
                </button>
              </a>
            </div>
            <div data-aos="fade-down" class="col-lg-6 col-md-6 col-12">
              <div class="embed-responsive embed-responsive-1by1">
                <video
                  class="embed-responsive-item"
                  controls
                  poster={Thumbnail_Image} // Set the thumbnail image as poster
                  style={{ width: "100%" }}
                >
                  <source src={Football_Tournament} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default InternationalWomensDayEvent;
