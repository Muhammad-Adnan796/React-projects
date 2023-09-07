import React from "react";
import {BiRightArrowAlt} from "react-icons/bi";
import FeaturPic from "../assets/featur-pic.svg";
import "../styleComponents/sass/_Features.scss";

const Features = () => {
  return (
    <div className="features">
    <a id="features"></a>
    <div className="features-nested" >
      <div className="featur-txt" >
        <h1>
          A digital web design studio creating modern & engaging online
          experiences
        </h1>
        <p>
          Separated they live in Bookmarksgrove right at the coast of the
          Semantics, a large language ocean. A small river named Duden flows by
          their place and supplies it with the necessary regelialia.
        </p>
        <ul>
            <li>We put a lot of effort in design.</li>
            <li>The most important ingredient of successful website.</li>
            <li>Sed ut perspiciatis unde omnis iste natus error sit.</li>
            <li>Submit Your Organization.</li>
        </ul>

        <button>Learn More <BiRightArrowAlt className="i" /></button>
      </div>
      <div className="featur-img" >
        <img src={FeaturPic} alt="Features-img" />
      </div>
      </div>
    </div>
  );
};

export default Features;
