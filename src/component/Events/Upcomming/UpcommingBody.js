import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import RimaMcDonald from "../../../asset/RimaMcDonald.png";
import upComming16 from "../../../asset/upComming16.png";
import upComming17 from "../../../asset/upComming17.png";

function UpcommingBody() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 576 },
      items: 2,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 576, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  const images = [
    require("../../../asset/upComming1.png"),
    require("../../../asset/upComming2.png"),
    require("../../../asset/upComming3.png"),
    require("../../../asset/upComming4.png"),
    require("../../../asset/upComming5.png"),
    require("../../../asset/upComming6.png"),
    require("../../../asset/upComming7.png"),
    require("../../../asset/upComming8.png"),
    require("../../../asset/upComming9.png"),
    require("../../../asset/upComming10.png"),
    require("../../../asset/upComming11.png"),
    require("../../../asset/upComming12.png"),
    require("../../../asset/upComming13.png"),
    require("../../../asset/upComming14.png"),
    require("../../../asset/upComming15.png"),
  ];

  const CustomDot = ({ onClick, active }) => (
    <button
      style={{
        background: active ? "#DE3163" : "#c4c4c4", // Active dot color
        border: "none",
        borderRadius: "50%",
        width: "8px",
        height: "8px",
        marginBottom: "-20px !important",
        margin: "0 5px",
        cursor: "pointer",
      }}
      onClick={() => onClick()}
    />
  );

  return (
    <div className="tripcontent container-fluid py-3 " data-aos="zoom-in-up">
      <div className="row">
        <p className="ourBoardTeam">2nd March</p>
        <div className="container mb-5">
          <div className="row">
            <div className="col-md-3 col-12 d-flex justify-content-lg-end justify-content-center">
              <img src={upComming16} className="img-fluid" alt="Logo" />
            </div>
            <div className="col-md-6 col-12 d-flex align-items-center justify-content-center">
              <p className="ourBoardTeamTexts mb-5">
                Wondrously Women Gem In cojunction with
                <br /> Women's Independence Day
              </p>
            </div>
            <div className="col-md-3 col-12 d-flex justify-content-lg-start justify-content-center">
              <img src={upComming17} className="img-fluid" alt="Logo" />
            </div>
          </div>
        </div>

        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={2000}
          transitionDuration={500}
          removeArrowOnDeviceType={["tablet", "mobile"]}
          showDots={true}
          customDot={<CustomDot />}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="d-flex flex-column align-items-center justify-content-center"
            >
              <img
                src={image}
                alt={`slide ${index + 1}`}
                className="img-fluid"
              />
              <div style={{ visibility: "hidden" }}>Hii</div>
            </div>
          ))}
        </Carousel>
        <p className="ourBoardTeamtexts my-5">
          2th March 2024 (11am-4pm)<br></br>
          Istana The Venue
        </p>
      </div>
    </div>
  );
}

export default UpcommingBody;
