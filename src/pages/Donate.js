import React from "react";
import BigHeart from "../component/Donate/BigHeart";
import Volunteer from "../component/common/Volunterr";
import DonateNow from "../component/Home/DonateNow";
import ContactForm from "../component/common/ContactForm";
import FoodBank from "../component/Donate/FoodBank";
import IftharsDonate from "../component/Donate/IftharsDonate";

function Donate() {
  return (
    <div style={{ marginTop: "118px" }}>
      <Volunteer />
      <IftharsDonate />
      <DonateNow />
      <BigHeart />
      <FoodBank />
      <ContactForm />
    </div>
  );
}

export default Donate;
