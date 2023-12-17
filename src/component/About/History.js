import React from "react";
import HerStoryMission from "../../asset/HerStoryMission.png";

function History() {
  return (
    <section>
      <div className="container my-5">
        <div data-aos="fade-up" className="row">
          <div className="col-lg-1">
            <hr className="aboutHr"></hr>
          </div>
          <div className="col-lg-10 col-md-10 col-12 pt-1">
            <span className="aboutName">HER STORY</span>
            <h2 className="historyMission mt-3 mb-5">
              Mission Smile 1k: Outdoor charity outreach
            </h2>
            <p className="historyMissionText mb-5">
              In 2014, Mdm Anggun a mother of six then decided to give back to
              the community by speaking to single-moms and women on the
              importance of education enhancement and doing home based business
              as source of income while having to juggle raising our new
              generation children. She came across single-moms and women from
              all background and life experiences. It motivated her to open up a
              non-profit organization making it legit for her to support more
              single-moms and women thru holistic and self development programs.
              She gives up her MNC career and embark into entrepreneurship so
              she would be able to spend more time with the community and
              family. Challenges arise as she was running thru the
              transformation, many new profiles with different study case to
              support. Being a resilience and passionate individual, she seek
              friends, connection and raise funds to help provide aid and
              provision to these individuals.
            </p>
            <img
              src={HerStoryMission}
              alt="HerStoryMission"
              className="img-fluid mb-5"
              style={{ width: "100%" }}
            />
            <p className="historyMissionText mb-5">
              Today despite of having 1 special gifted daughter, Mdm Anggun a
              mother of seven continues her passion in infinite giving. She
              strongly believe in 'The 7 Principles of Giver Gain'. Her stories
              behind close door contribution, yearly she would baked cookies and
              sell them for needy children school pocket money funds, she cooked
              for the frontline workers during festive and Covid-19, she give
              away more than 1000 packed of home cooked food during fasting
              months for single-moms and muslims needy families. She visited
              single-moms with special needs children homes and bought groceries
              for them. She would speak to them at any point of her time to
              console or advice individual in need of a listening ears. Stories
              of successful single-moms transformation thru the programs she
              designed, has been featured in Malay Newspaper thru the years. Mdm
              Anggun encourage more individuals to come and support her movement
              for good cause, 'Giver Gain'.
            </p>
          </div>
          <div className="col-lg-1"></div>
        </div>
      </div>
    </section>
  );
}

export default History;
