import React from "react";
import Children1 from "../../../asset/Children1.png";
import Children2 from "../../../asset/Children2.png";
import Children3 from "../../../asset/Children3.png";

function ChildBody() {
  return (
    <section style={{ backgroundColor: "#E36B8633" }}>
      <div className="container-fluid pb-5">
        <div className="row">
          <div data-aos="fade-up">
            <p className="children pt-4">Childrens</p>
            <p className="childrenHeading">Youthful Explorers Zone</p>
          </div>
          <div className="row">
            <div data-aos="fade-down" className="col-lg-4 col-md-4 col-12 d-flex align-items-center justify-content-center ChildrenImage py-4">
              <img className="img-fluid" src={Children3} alt="SunRise" />
            </div>
            <div data-aos="fade-down" className="col-lg-8 col-md-8 col-12 d-flex flex-column justify-content-center  py-4 px-2">
              <h2 className="childHeading pb-4">
                Children's Corner: Where Dreams Take Flight
              </h2>
              <p className="childPara pb-4">
                Welcome to our Children's Corner, a magical space designed to
                nurture the dreams and aspirations of the youngest members of
                our community. At Wondrously Women Gem, we believe in creating a
                world where every child can thrive, learn, and dream big. Our
                programs and initiatives are tailored to support the well-being
                and development of children from all walks of life.
              </p>
            </div>
          </div>
        </div>


          <div className="row">
            <div data-aos="fade-up" className="col-lg-8 col-md-8 col-12 d-flex flex-column justify-content-center  py-4 px-2">
              <h2 className="childHeading pb-4">Recreational Activities</h2>
              <p className="childPara pb-4">
                Play is a fundamental part of childhood. Our recreational
                activities, including sports programs and arts and crafts,
                encourage physical activity and artistic expression.
              </p>
            </div>
            <div data-aos="fade-down" className="col-lg-4 col-md-4 col-12 d-flex align-items-center justify-content-center ChildrenImage1 py-4 mb-3">
              <img className="img-fluid" src={Children2} alt="SunRise" />
            </div>
          </div>


        <div className="row">
          <div className="row">
            <div data-aos="fade-up" className="col-lg-4 col-md-4 col-12 d-flex align-items-center justify-content-center ChildrenImage py-4">
              <img className="img-fluid" src={Children1} alt="SunRise" />
            </div>
            <div data-aos="fade-down" className="col-lg-8 col-md-8 col-12 d-flex flex-column justify-content-center  py-4 px-2">
              <h2 className="childHeading pb-4">Educational Enrichment</h2>
              <p className="childPara pb-4">
                Explore our engaging and educational activities designed to
                spark curiosity and creativity. From interactive workshops to
                storytelling sessions, we provide a platform for children to
                learn while having fun.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ChildBody;
