import React, { useState } from "react";
import { FaGear } from "react-icons/fa6";
import { BsPlayCircle } from "react-icons/bs";
import "../styleComponents/sass/_Home.scss";

const Home = () => {
  let [openColorBox, setopenColorBox] = useState(false);

  let changeColor = () => {
    setopenColorBox(!openColorBox);
  };

  return (
    <div className="container">
     <a id="home"></a>
      <div className="home-content">
        <h1>We help startups launch their products</h1>
        <p>Etiam sed.Interdum consequat proin vestibulum class at.</p>
        <a href="#">
          <i>
            <BsPlayCircle />
          </i>
        </a>
      </div>
      <div className="setting-main" onClick={changeColor}>
        {openColorBox && (
          <div className="all-colors">
            <h2>Select your color</h2>
            <div >
              <div className="clr red-div"></div>
              <div className="clr green-div"></div>
              <div className="clr pink-div"></div>
              <div className="clr cyan-div"></div>
              <div className="clr purple-div"></div>
              <div className="clr blue-div"></div>
              <div className="clr orange-div"></div>
              <div className="clr mango-div"></div>
            </div>
          </div>
        )}

        <div className="setting">
          <FaGear className="i" />
        </div>
      </div>
    </div>
  );
};

export default Home;
