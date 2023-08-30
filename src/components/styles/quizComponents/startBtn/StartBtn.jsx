import React from "react";
import StartBtnCSS from './StartBtn.module.css';

const StartBtn = ({onStartClick}) => {
  return (
    <>
      <button onClick={()=>onStartClick(true)} className={StartBtnCSS.startBtn}>Start Quiz</button>
    </>
  );
};

export default StartBtn;
