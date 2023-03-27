import React from "react";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF, FaLinkedin } from "react-icons/fa";

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://www.linkedin.com/in/oshan-khan-16056945/">
        <FaLinkedin />
      </a>
    </div>
    <div>
      <a href="https://www.facebook.com/oshankhan07">
        <FaFacebookF />
      </a>
    </div>
    <div>
      <a href="https://www.instagram.com/___oshan____/">
        <BsInstagram />
      </a>
    </div>
  </div>
);

export default SocialMedia;
