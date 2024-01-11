import React from "react";
import BigHeart from "../component/Donate/BigHeart";
import Volunteer from "../component/common/Volunterr";
import DonateNow from "../component/Home/DonateNow";
import ContactForm from "../component/common/ContactForm";

function Donate() {
  return (
    <div style={{ marginTop: '150px' }}>
      <Volunteer />
      <DonateNow />
      <BigHeart />
      <ContactForm />
    </div>
  );
}

export default Donate;
