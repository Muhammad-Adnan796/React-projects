import React from "react";
import "../styleComponents/sass/_Team.scss";
import Man1 from "../assets/man-1.jpg";
import Man2 from "../assets/man-2.jpg";
import Man3 from "../assets/man-3.jpg";
import Man4 from "../assets/man-4.jpg";

const Team = () => {
  return (
    <div className="team">
     <a id="team"></a>
      <div className="team-txt">
        <h1>BEHIND THE PEOPLE</h1>
        <hr />
        <p>
          It is a long established fact that create category leading brand
          experiences a reader will be distracted by the readable content of a
          page when looking at its layout.
        </p>
      </div>
      <div className="employs">
        <div className="emp-pics">
          <img src={Man1} alt="Man pic" />
          <h2>Frank Johnson</h2>
          <h4>CEO</h4>
        </div>
        <div className="emp-pics">
          <img src={Man2} alt="Man pic" />
          <h2>Elaine Stclair</h2>
          <h4>DESIGNER</h4>
        </div>
        <div className="emp-pics">
          <img src={Man3} alt="Man pic" />
          <h2>Wanda Arthur</h2>
          <h4>DEVELOPER</h4>
        </div>
        <div className="emp-pics">
          <img src={Man4} alt="Girl pic" />
          <h2>Joshua Stemple</h2>
          <h4>MANAGER</h4>
        </div>
      </div>
    </div>
  );
};

export default Team;
