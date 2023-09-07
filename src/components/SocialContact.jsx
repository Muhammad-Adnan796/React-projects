import React from "react";
import { BsFacebook, BsTwitter, BsLinkedin } from "react-icons/bs";
import { FaGooglePlusG } from "react-icons/fa6";
import { SiMicrosoftedge } from "react-icons/si";
import { IoCallOutline, IoMailOpenOutline } from "react-icons/io5";
import "../styleComponents/sass/_SocialContact.scss";

const SocialContact = () => {
  return (
    <div className="social-info">
      <div className="social icons">
        <span>
          <BsFacebook />
        </span>
        <span>
          <BsTwitter />
        </span>
        <span>
          <BsLinkedin />
        </span>
        <span>
          <FaGooglePlusG />
        </span>
        <span>  
          <SiMicrosoftedge />
        </span>
      </div>
      <div className="social numb">
        <span>
          <IoCallOutline className="i" />
          <p> +91 123 4556 789</p>
        </span>
        <span>
          <IoMailOpenOutline className="i" />
          <p> Support@info.com</p>
        </span>
      </div>
    </div>
  );
};

export default SocialContact;
