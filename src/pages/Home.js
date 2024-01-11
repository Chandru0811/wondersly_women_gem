import React from "react";
import Hero from "../component/Home/Hero";
import Help from "../component/Home/Help";
import NonProfitable from "../component/Home/NonProfitable";
// import WWGAbout from "../component/About/WWGAbout";
// import Supporters from "../component/Home/Supporters";
import OurEvents from "../component/Home/OurEvents";
import Testimonial from "../component/About/Testimonial";
// import Solution from "../component/Home/Solution";
// import Count from "../component/Home/Count";
import Aboutus from "../component/Home/Aboutus";
import WelcomeCharity from "../component/Home/WelcomeCharity";
import DonateNow from "../component/Home/DonateNow";
import BigHeart from "../component/Donate/BigHeart";
import Solution from "../component/Home/Solution";
import Count from "../component/Home/Count";
import FoodBank from "../component/Donate/FoodBank";
// import Awards from "../component/Home/Awards";
// import OurVolunteers from "../component/Home/OurVolunteers";
// import LatestCauses from "../component/Home/LatestCauses";
// import Contribute from "../component/Home/Contribute";

function Home() {
  return (
    <div style={{ marginTop: '150px' }}>
      <Hero />
      <Help />
      <NonProfitable />
      {/* <WWGAbout /> */}
      {/* <Supporters /> */}
      <Aboutus />
      <WelcomeCharity />
      <DonateNow />
      <BigHeart />
      <FoodBank />
      {/* <LatestCauses /> */}
      {/* <Awards /> */}
      {/* <OurVolunteers /> */}
      {/* <Contribute /> */}
      <OurEvents />
      <Testimonial />
      <Solution />
      <Count /> 
      
    </div>
  );
}

export default Home;
