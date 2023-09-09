import React from "react";
import bgimage from "../../assets/bg-main.png";
import contentCSS from "./Content.module.scss";
import Buttons from "../../components/Buttons/Buttons";

const Content = () => {
  return (
    <div className={contentCSS.contentpage}>
      <div>
        <h2>Discover and Find Your Own Things!</h2>
        <p>
          Explore our curated collection of stylish clothing and accessories
          tailored to your unique taste.
        </p>

        <Buttons label="EXPLORE NOW" clicked="" Clr="white" bgClr="orangered" />
      </div>
      <div>
        <img src={bgimage} />
      </div>
    </div>
  );
};

export default Content;
