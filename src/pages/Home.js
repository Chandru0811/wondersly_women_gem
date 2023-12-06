import React from "react";
import Hero from "../component/Home/Hero";
import Help from "../component/Home/Help";
import NonProfitable from "../component/Home/NonProfitable";
import WWGAbout from "../component/About/WWGAbout";
import Supporters from "../component/Home/Supporters";
import OurEvents from "../component/Home/OurEvents";
import Testimonial from "../component/About/Testimonial";
import Solution from "../component/Home/Solution";
import Count from "../component/Home/Count";
import Aboutus from "../component/Home/Aboutus";
import WelcomeCharity from "../component/Home/WelcomeCharity";

function Home() {
  return (
    <div>
      <Hero />
      <Help />
      <NonProfitable />
      <WWGAbout />
      <Supporters />
      <Aboutus />
      <WelcomeCharity />
      <OurEvents />
      <Testimonial />
      <Solution />
      <Count /> 
    </div>
  );
}

export default Home;
