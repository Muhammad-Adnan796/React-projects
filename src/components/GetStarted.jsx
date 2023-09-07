import React from "react";
import {BiRightArrowAlt} from "react-icons/bi";
import "../styleComponents/sass/_GetStarted.scss";

const GetStarted = () => {
  return (
    <div className="getStarted">
      <div className="started-txt">
        <h1>Let's Get Started</h1>
        <p>
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts.{" "}
        </p>

        <button>Get Started <BiRightArrowAlt className="i" /></button>
      </div>
    </div>
  );
};

export default GetStarted;
