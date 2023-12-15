import React from "react";
import SunRise from "../../../asset/SunRise.png";
import Youth1 from "../../../asset/Youth1.png";
import Youth2 from "../../../asset/Youth2.png";
import Youth3 from "../../../asset/Youth3.png";
import Pulau_Ubin_Trip_1 from "../../../asset/pulau_ubin_trip_1.png";
import Pulau_Ubin_Trip_2 from "../../../asset/pulau_ubin_trip_2.png";
import Pulau_Ubin_Trip_3 from "../../../asset/pulau_ubin_trip_3.png";
import Pulau_Ubin_Trip_4 from "../../../asset/pulau_ubin_trip_4.png";
import Pulau_Ubin_Trip_5 from "../../../asset/pulau_ubin_trip_5.png";
import Pulau_Ubin_Trip_6 from "../../../asset/pulau_ubin_trip_6.png";
import Football_Tournament from "../../../asset/videos/Football_Tournament.mp4.mp4";
import Football_1 from "../../../asset/Football_1.png";
import Football_2 from "../../../asset/Football_2.png";
import Football_3 from "../../../asset/Football_3.png";
import Latest_1 from "../../../asset/Latest_1.png";
import Latest_2 from "../../../asset/Latest_2.png";
import Latest_3 from "../../../asset/Latest_3.png";
import Latest_4 from "../../../asset/Latest_4.png";
// import FollowIG from "../../../asset/Follow_us_Ig.png";
import FollowIG1 from "../../../asset/Follow_IG.png";

function YouthBody() {
  return (
    <section>
      <div className="container-fluid my-3">
        <div className="row">
          <h2 className="allUpcoming my-3">Sunrise Youth Club</h2>
          <div className="col-lg-4 col-md-4 col-12 d-flex align-items-center justify-content-center sunriseImage py-4">
            <img className="img-fluid" src={SunRise} alt="SunRise" />
          </div>
          <div className="col-lg-8 col-md-8 col-12 d-flex flex-column justify-content-center  py-4 px-2">
            <h2 className="sunriseHeading">Welcome to the Youth Club</h2>
            <hr className="sunriseHr" />
            <p className="sunrisePara pb-4">
              At Wondrously Woman Gem, we believe in the potential of every
              young individual to make a positive impact. Our Youth Club is a
              dedicated space where young minds come together to learn, grow,
              and contribute to the community. We focus on providing support and
              opportunities for teenagers and young adults, creating a platform
              for them to thrive.
            </p>
            <p className="sunrisePara2 pb-4">
              Visit our events hub to see all upcoming virtual events,
              workshops, and more.
            </p>
          </div>
        </div>
      </div>

      <div className="Latest_Program">
        <div className="container-fluid">
          <div className="row">
            <div className="ladybossbcTitle d-flex flex-column align-items-center justify-content-center col-lg-5 col-md-5 col-12">
              <p className="our_latest">Our Latest Program</p>
              <h5 className="ladybossbcContent text-center">
                “Being part of a supportive community is essential for personal
                growth. Our youth programs encourage community engagement
                through volunteer opportunities, extracurricular activities, and
                events that foster a sense of belonging. We believe in the power
                of community to inspire and uplift.”
              </h5>
            </div>
            <div
              className="col-lg-7 col-md-7 col-12 py-4"
              style={{
                background:
                  "linear-gradient(to left, #DE3163 80%, rgba(222, 49, 99, 0.2) 20%)",
              }}
            >
              <div className="row">
                <div className="LadybossBCImg2 d-flex align-items-center justify-content-center col-lg-6 col-md-6 col-12">
                  <img
                    src={Latest_1}
                    className="img-fluid"
                    alt="ladybossbcImg_1"
                  ></img>
                </div>
                <div className="LadybossBCImg1 d-flex align-items-center justify-content-center col-lg-6 col-md-6 col-12">
                  <img
                    src={Latest_2}
                    className="img-fluid"
                    alt="ladybossbcImg_2"
                  ></img>
                </div>
                <div className="LadybossBCImg2 d-flex align-items-center justify-content-center col-lg-6 col-md-6 col-12 mt-3">
                  <img
                    src={Latest_3}
                    className="img-fluid"
                    alt="ladybossbcImg_3"
                  ></img>
                </div>
                <div className="LadybossBCImg1 d-flex align-items-center justify-content-center col-lg-6 col-md-6 col-12 mt-3">
                  <img
                    src={Latest_4}
                    className="img-fluid"
                    alt="ladybossbcImg_4"
                  ></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="tripcontent container-fluid py-3">
        <div className="container">
          <div className="row">
            <p className="ourBoardTeam">Trip</p>
            <p className="ourBoardTeamText mb-4">Pulau Ubin Adventure</p>
            <div className="col-lg-1 col-md-1 col-1"></div>
            <div className="col-lg-3 col-md-3 col-12">
              <img
                src={Pulau_Ubin_Trip_1}
                className="img-fluid"
                alt="pulau_ubin_trip"
              ></img>
            </div>
            <div className="col-lg-3 col-md-3 col-12">
              <img
                src={Pulau_Ubin_Trip_2}
                className="img-fluid"
                alt="pulau_ubin_trip"
              ></img>
            </div>
            <div className="col-lg-3 col-md-3 col-12">
              <img
                src={Pulau_Ubin_Trip_3}
                className="img-fluid"
                alt="pulau_ubin_trip"
              ></img>
            </div>
            <div className="col-lg-1 col-md-1"></div>
          </div>
          <div className="row my-4 ">
            <div className="col-lg-3 col-md-3 col-12 d-flex align-items-center justify-content-center">
              <img
                src={Pulau_Ubin_Trip_4}
                className="img-fluid"
                alt="pulau_ubin_trip"
              ></img>
            </div>
            <div className="col-lg-6 col-md-6 col-12 d-flex align-items-center justify-content-center">
              <img
                src={Pulau_Ubin_Trip_5}
                className="img-fluid"
                alt="pulau_ubin_trip"
              ></img>
            </div>
            <div className="col-lg-3 col-md-3 col-3 d-flex align-items-center justify-content-center">
              <img
                src={Pulau_Ubin_Trip_6}
                className="img-fluid"
                alt="pulau_ubin_trip"
              ></img>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-1 col-md-1 col-1"></div>
            <div className="col-lg-3 col-md-3 col-12">
              <img
                src={Pulau_Ubin_Trip_1}
                className="img-fluid"
                alt="pulau_ubin_trip"
              ></img>
            </div>
            <div className="col-lg-3 col-md-3 col-12">
              <img
                src={Pulau_Ubin_Trip_2}
                className="img-fluid"
                alt="pulau_ubin_trip"
              ></img>
            </div>
            <div className="col-lg-3 col-md-3 col-12">
              <img
                src={Pulau_Ubin_Trip_3}
                className="img-fluid"
                alt="pulau_ubin_trip"
              ></img>
            </div>
            <div className="col-lg-1 col-md-1"></div>
          </div>
        </div>
      </div>

      <div className="tournament container-fluid py-4">
        <div className="container">
          <div className="row">
            <p className="ourBoardTeam">Trip</p>
            <p className="ourBoardTeamText mb-4">Pulau Ubin Adventure</p>
            <div className="col-lg-6 col-md-6 col-12 d-flex align-items-center justify-content-center">
              <h5 className="Futsal text-center">
                "Futsal friendly match at Yishun in March 2023. Embraced by Prof
                Muhammad Faisal."
              </h5>
            </div>
            <div class="col-lg-6 col-md-6 col-12">
  <div class="embed-responsive embed-responsive-1by1">
    <video class="embed-responsive-item" controls style={{width: '100%'}}>
      <source src={Football_Tournament} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
</div>

          </div>
          <div className="row mt-4">
            <div className="col-lg-3 col-md-3 col-12">
              <img
                src={Football_1}
                className="img-fluid"
                alt="pulau_ubin_trip"
              ></img>
            </div>
            <div className="col-lg-3 col-md-3 col-12">
              <img
                src={Football_2}
                className="img-fluid"
                alt="pulau_ubin_trip"
              ></img>
            </div>
            <div className="col-lg-3 col-md-3 col-12">
              <img
                src={Football_3}
                className="img-fluid"
                alt="pulau_ubin_trip"
              ></img>
            </div>
            <div className="col-lg-3 col-md-3 col-12">
              <img
                src={FollowIG1}
                className="img-fluid"
                alt="pulau_ubin_trip"
              ></img>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid mt-3">
        <div className="row youthAdverdisement py-5">
          <div className="col-lg-4 col-md-4 col-12 d-flex align-items-center justify-content-center py-2">
            <img className="img-fluid" src={Youth1} alt="Youth1" />
          </div>
          <div className="col-lg-4 col-md-4 col-12 d-flex align-items-center justify-content-center py-2">
            <img className="img-fluid" src={Youth2} alt="Youth2" />
          </div>
          <div className="col-lg-4 col-md-4 col-12 d-flex align-items-center justify-content-center py-2">
            <img className="img-fluid" src={Youth3} alt="Youth3" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default YouthBody;
