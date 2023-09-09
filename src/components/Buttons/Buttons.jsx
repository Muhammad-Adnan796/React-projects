import React from "react";
import ButtonsCSS from "./Buttons.module.scss";

const Buttons = ({ label, clicked, Clr="white", bgClr="orangered"}) => {
  const btnStyle = {
    color: Clr,
    backgroundColor: bgClr,
  };

  return <button onClick={clicked} style={btnStyle} > {label} </button>
    
};

export default Buttons;
