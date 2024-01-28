import React from "react";
import Services from "../component/About/Services";
import Testimonial from "../component/About/Testimonial";
import Solution from "../component/Home/Solution";
import Count from "../component/Home/Count";
import UpcommingBody from "../component/Events/Upcomming/UpcommingBody";

function Program() {
  return (
    <div style={{ marginTop: "118px" }}>
      <Services />
      <UpcommingBody />
      <Testimonial />
      <Solution />
      <Count /> 
    </div>
  );
}

export default Program;
