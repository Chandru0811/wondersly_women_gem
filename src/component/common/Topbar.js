// Topbar.js

import React from "react";
import { FaPhoneAlt  } from "react-icons/fa";
// import { FaXTwitter } from "react-icons/fa6";
import "../../style/custom.css";

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="mobileSection" style={{ visibility: 'hidden' }}>
        <FaPhoneAlt className="icon" />
        <span style={{ marginLeft: "5px" }}>+65 8894 1306</span>
      </div>

      <div className="socialIcons">
        {/* <FaInstagram className="icon" />
        <FaFacebook className="icon" />
        <FaXTwitter className="icon" />
        <FaWhatsapp className="icon" /> */}
      </div>
    </div>
  );
};

export default Topbar;
