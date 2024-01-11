import React from "react";
import Services from "../component/About/Services";
import Testimonial from "../component/About/Testimonial";
import Solution from "../component/Home/Solution";
import Count from "../component/Home/Count";

function Program() {
  return (
    <div style={{ marginTop: "118px" }}>
      <Services />
      <Testimonial />
      <Solution />
      <Count /> 
    </div>
  );
}

export default Program;
