import React from "react";
import Hero from "../component/Home/Hero";
import Help from "../component/Home/Help";
import NonProfitable from "../component/Home/NonProfitable";
import WWGAbout from "../component/About/WWGAbout";
import Supporters from "../component/Home/Supporters";

function Home() {
  return (
    <div>
      <Hero />
      <Help />
      <NonProfitable />
      <WWGAbout />
      <Supporters />
    </div>
  );
}

export default Home;

