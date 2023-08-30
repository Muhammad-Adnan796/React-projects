import React from "react";
import RulesCSS from "./Rules.module.css";

const RulesPage = ({onStartClick,onHideClick}) => {


  return (
    <div className={RulesCSS.rulesPage}>
      <div className={RulesCSS.rulesHeading} >
        <h1>Some Rules of this Quiz</h1>
      </div>
      <div className={RulesCSS.rules} >
        <ol className={RulesCSS.rulesList} >
          <li>You will have only <span>15 seconds</span> per each question.</li>
          <li>Once you select your answer, you can't reselect.</li>
          <li>You can't select any option once time goes off.</li>
          <li>You can't exit from the Quiz while you're playing.</li>
          <li>you'll get points on the basis of your correct answers.</li>
        </ol>
      </div>
      <div className={RulesCSS.ECBtn} >
        <button onClick={()=>onHideClick(true)} >Exit Quiz</button>
        <button onClick={()=>onStartClick(true) } >Continue</button>
      </div>
    </div>
  );
};

export default RulesPage;
