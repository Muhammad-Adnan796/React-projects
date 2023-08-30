import React, { useEffect, useRef, useState } from "react";
import QuizPageCSS from "./QuizPage.module.css";
import { questions } from "../../data/Questions";
import { FaRegCheckCircle } from "react-icons/fa";
import { ImCancelCircle } from "react-icons/im";

const QuizPage = ({ onQuizHide, quizMarks }) => {
  const [currentQuesIndex, setCurrentQuesIndex] = useState(0);
  const [timeCount, setTimeCount] = useState(15);
  const [timerDivWidth, setTimerDivWidth] = useState(0);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(null);
  const [showNextBtn, setShowNextBtn] = useState(false);
  const [marks, setMarks] = useState(1);
  const [showTickIcon, setShowTickIcon] = useState(false);
  const [showWrongIcon, setShowWrongIcon] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      if (timeCount > 0) {
        setTimeCount((prevTime) => prevTime - 1);
        setTimerDivWidth((prevWidth) => prevWidth + 100 / 15);
      } else if (timeCount == 0) {
        clearInterval(intervalRef.current);
        setTimerDivWidth(100);
        setShowNextBtn(true);
      }
    }, 1000);
    if (selectedOptionIndex !== null) {
      clearInterval(intervalRef.current);
      setShowNextBtn(true);
      setShowTickIcon(
        selectedOptionIndex === questions[currentQuesIndex].answer
      );
      setShowWrongIcon(
        selectedOptionIndex !== questions[currentQuesIndex].answer &&
          selectedOptionIndex !== null
      );
      showWrongIcon && setShowTickIcon(true);
    }else if(selectedOptionIndex === null && timeCount === 0){
      setShowTickIcon(
        true
      );
    }
    return () => clearInterval(intervalRef.current);
  }, [timeCount, selectedOptionIndex, currentQuesIndex]);

  const handleNextQuestion = () => {
    setTimeCount(15);
    setTimerDivWidth(0);
    setSelectedOptionIndex(null);
    setShowNextBtn(false);
    setShowTickIcon(false);
    setShowWrongIcon(false);
    if (currentQuesIndex < questions.length - 1) {
      setCurrentQuesIndex(currentQuesIndex + 1);
    } else {
      onQuizHide(true);
    }
  };

  const currentQues = questions[currentQuesIndex];

  const handleOptionClick = (option) => {
    if (timeCount > 0 && selectedOptionIndex === null) {
      setSelectedOptionIndex(option);
      setShowNextBtn(true);

      if (option === currentQues.answer) {
        setMarks((prevMarks) => prevMarks + 1);
        quizMarks(marks);
      } else {
        setShowWrongIcon(true);
      }
    }
  };
  return (
    <div className={QuizPageCSS.quizPage}>
      <div className={QuizPageCSS.quizHeading}>
        <h1>Awesome Quiz Application</h1>
        <span className={QuizPageCSS.timer}>
          <p>
            {selectedOptionIndex !== null || timeCount === 0
              ? "Time Off"
              : "Time left"}
          </p>{" "}
          <span>
            {timeCount <= 9
              ? `0${timeCount}`
              : timeCount === 0
              ? "00"
              : timeCount}
          </span>
        </span>
      </div>
      <div
        className={
          timerDivWidth == 0
            ? QuizPageCSS.progressBarZ
            : QuizPageCSS.progressBar
        }
        style={{
          width: `${timerDivWidth}%`,
        }}
      ></div>
      <div className={QuizPageCSS.quiz}>
        <ul className={QuizPageCSS.quizList}>
          <h2>{`${currentQuesIndex + 1}. ${currentQues.question}`}</h2>
          {currentQues?.options?.map((option, i) => {
            return (
              <li
                key={i}
                className={
                  selectedOptionIndex &&
                  selectedOptionIndex === currentQues.answer &&
                  option === currentQues.answer
                    ? QuizPageCSS.correctOption
                    : selectedOptionIndex === option
                    ? QuizPageCSS.wrongOption
                    : selectedOptionIndex && currentQues.answer === option
                    ? QuizPageCSS.correctOption
                    : !selectedOptionIndex &&
                      timeCount === 0 &&
                      currentQues.answer === option
                    ? QuizPageCSS.correctOption
                    : ""
                }
                onClick={() => handleOptionClick(option)}
              >
                {option}
                {(selectedOptionIndex === option ||
                  selectedOptionIndex !== option) &&
                  showTickIcon &&
                  option === currentQues.answer && (
                    <FaRegCheckCircle className={QuizPageCSS.tickIcon} />
                  )}
                {selectedOptionIndex === option &&
                  showWrongIcon &&
                  option !== currentQues.answer && (
                    <ImCancelCircle className={QuizPageCSS.crossIcon} />
                  )}
              </li>
            );
          })}
        </ul>
      </div>

      <div className={QuizPageCSS.quizBtm}>
        <p>{`${currentQuesIndex + 1} of ${questions.length} Questions`}</p>
        {showNextBtn && <button onClick={handleNextQuestion}>Next Que</button>}
      </div>
    </div>
  );
};

export default QuizPage;
