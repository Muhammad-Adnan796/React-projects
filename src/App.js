import "./App.css";
import Marks from "./components/styles/quizComponents/marks/Marks";
import QuizPage from "./components/styles/quizComponents/quizPage/QuizPage";
import RulesPage from "./components/styles/quizComponents/rulesPage/RulesPage";
import StartBtn from "./components/styles/quizComponents/startBtn/StartBtn";
import { useState } from "react";

function App() {
  const [showStart, setShowStart] = useState(true);
  const [showRules, setShowRules] = useState(false);
  const [showQuiz, setShowQuiz] = useState(false);
  const [showMarks, setShowMarks] = useState(false);
  const [quizMarks, setQuizMarks] = useState(0);

  const handleStartClick = (e) => {
    setShowStart(e);
    setShowRules(false);
  };

  const handleRulesClick = (e) => {
    setShowRules(e);
    setShowStart(false);
  };

  const handleQuizClick = (e) => {
    setShowQuiz(e);
    setShowRules(false);
  };
 
  const handleHideQuiz = (e) => {
    setShowMarks(e);
    setShowQuiz(false);
  };


  const quizMarksFunc =(marks)=>{
    setQuizMarks(marks)
  }
  const quitQuiz =(bool)=>{ 
    setShowStart(bool)
    setShowMarks(false)
  }
  const replayQuiz =(e)=>{ 
    setShowQuiz(e)
    setShowMarks(false)
  }

  return (
    <div className="App">
      {showStart && <StartBtn onStartClick={handleRulesClick} />}
      {showRules && (
        <RulesPage
          onStartClick={handleQuizClick}
          onHideClick={handleStartClick}
        />
      )}

      {showQuiz && <QuizPage onQuizHide={handleHideQuiz} quizMarks={quizMarksFunc}  />}
      {showMarks && <Marks onhandleMarks={quizMarks} quitQuiz={quitQuiz} replayQuiz={replayQuiz} />}
    </div>
  );
}

export default App;
