import React from "react";

const QAButtons = ({ label, type,click, bgClr = "white", txtClr = "black" }) => {
  const style = {
    backgroundColor: bgClr,
    color: txtClr,
  };
  return (
    <button style={style} onClick={click} type={type}>
      {label}
    </button>
  );
};

export default QAButtons;
