import React from "react";
import MarksCSS from "./Marks.module.css";
import { FaCrown } from "react-icons/fa6";
import { questions } from "../../data/Questions";

const Marks = ({ onhandleMarks, quitQuiz, replayQuiz }) => {
  return (
    <div className={MarksCSS.marksPage}>
      <FaCrown className={MarksCSS.crownIcn} />
      <p>{`You've completed the Quiz! ${
        onhandleMarks > 3
          ? `and congrats🥇!, You got ${onhandleMarks} out of ${questions.length}`
          : onhandleMarks > 1
          ? `and nice🥰!, You got ${onhandleMarks} out of ${questions.length}`
          : `and sorry😥, You got ${onhandleMarks} out of ${questions.length}`
      }
      
      `}</p>
      <div className={MarksCSS.RQBtn}>
        <button onClick={() => replayQuiz(true)}>Replay Quiz</button>
        <button onClick={() => quitQuiz(true)}>Quit Quiz</button>
      </div>
    </div>
  );
};

export default Marks;
