// Topbar.js

import React from "react";
import { FaPhoneAlt, FaFacebook, FaTwitter, FaInstagram, FaWhatsapp  } from "react-icons/fa";
import "../../style/custom.css";

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="mobileSection">
        <FaPhoneAlt className="icon" />
        <span style={{ marginLeft: "5px" }}>+65 82696181</span>
      </div>

      <div className="socialIcons">
        <FaInstagram className="icon" />
        <FaFacebook className="icon" />
        <FaTwitter className="icon" />
        <FaWhatsapp className="icon" />
      </div>
    </div>
  );
};

export default Topbar;
