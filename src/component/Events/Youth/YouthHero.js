import React from "react";
import "../../../style/events.css";

function YouthHero() {
  return (
    <section className="youthHero py-5">
      <div  data-aos="fade-up" className="container">
        <h2 className="youthEvents">Events</h2>
        <hr className="youthHr" />
        <p className="youthEventsPara">
          Explore a range of empowering experiences tailored for single moms in
          our upcoming events. Join us for enlightening workshops where
          inspiring speakers and interactive sessions await to uplift and
          inspire you on your unique journey.
        </p>
      </div>
    </section>
  );
}

export default YouthHero;
