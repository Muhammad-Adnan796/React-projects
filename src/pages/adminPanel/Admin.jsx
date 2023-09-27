import React, { useEffect, useState } from "react";
import AdminCSS from "./Admin.module.scss";
import QAButtons from "../../components/Buttons/Buttons";
import QAInputField from "../../components/InputField/InputField";
import {
  fbGetDataRTDB,
  fbPutDataRTDB,
  fbSignOut,
} from "../../firebaseConfige/FirebaseConfige";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const [quizData, setQuizData] = useState({
    quizname: "",
    quizduration: "",
    secretkey: "",
    quizopen: false,
    quizdescription: "",
  });
  const [quizLockedData, setQuizLockedData] = useState([]);
  const [questionData, setQuestionData] = useState({
    question: "",
    a: "",
    b: "",
    c: "",
    d: "",
  });
  const navigate = useNavigate();

  const logOut = () => {
    fbSignOut()
      .then((response) => {
        navigate("/signin");
      })
      .catch((error) => {
        console.log(`SignOut Error ${error}`);
      });
  };

  const capitlize = (word) => {
    const que1w = word.slice(0, 1).toUpperCase();
    const que = word.slice(1).toLowerCase();
    const queArr = [...que1w, que];
    const quest = queArr.join("");
    return quest;
  };

  const putquizName = () => {
    const description = capitlize(quizData.quizdescription);
    fbPutDataRTDB(`quizname`, {
      quizname: quizData.quizname.toUpperCase(),
      quizduration: parseInt(quizData.quizduration),
      secretkey: quizData.secretkey,
      quizopen: quizData.quizopen,
      quizdescription: description,
    })
      .then((response) => {
        console.log(`SuccesFully saved quiz lock data ${response}`);
        getQuizData();
      })
      .catch((error) => {
        console.log(`Quiz Lock Error ${error}`);
      });
  };
  const putQuestions = () => {
    const ques = capitlize(questionData.question);
    const opt1 = capitlize(questionData.a);
    const opt2 = capitlize(questionData.b);
    const opt3 = capitlize(questionData.c);
    const opt4 = capitlize(questionData.d);
    fbPutDataRTDB(`questions`, {
      question: ques,
      a: opt1,
      b: opt2,
      c: opt3,
      d: opt4,
      correct: opt4,
    })
      .then((response) => {
        console.log(`SuccesFully saved Questions ${response}`);
      })
      .catch((error) => {
        console.log(`Question Error ${error}`);
      });
  };

  const getQuizData = () => {
    fbGetDataRTDB(`quizname`)
      .then((response) => {
        console.log(`Data of locked quiz `);
        setQuizLockedData([...Object.values(response.val())]);
      })
      .catch((error) => {
        console.log(`Error of locked quiz ${error}`);
      });
  };

  useEffect(() => {
    getQuizData();
  }, []);

  return (
    <>
      <div className={AdminCSS.admin}>
        <div className={AdminCSS.left}>
          <div className={AdminCSS.avatar}></div>

          <div className={AdminCSS.quizlistLOt}>
            <div className={AdminCSS.quizList}>
              {quizLockedData &&
                quizLockedData.length > 0 &&
                quizLockedData.map((item,i) => {
                  return (
                    <>
                      <h5 key={i} >{item.quizname}</h5>
                    </>
                  );
                })}
            </div>

            <QAButtons
              label="Logout"
              click={logOut}
              bgClr="brown"
              txtClr="white"
            />
          </div>
        </div>
        <div className={AdminCSS.right}>
          <div className={AdminCSS.heading}>
            <h1>QUIZ App Admin</h1>
            <QAButtons label="Save" bgClr="brown" txtClr="white" />
          </div>

          <div className={AdminCSS.quizConfig}>
            <QAInputField
              required={true}
              label="Quiz Name"
              type="text"
              onChange={(e) =>
                setQuizData({ ...quizData, quizname: e.target.value })
              }
              val={quizData.quizname}
            />
            <QAInputField
              required={true}
              label="Quiz Duration in min"
              type="number"
              onChange={(e) =>
                setQuizData({ ...quizData, quizduration: e.target.value })
              }
              val={quizData.quizduration}
            />
            <QAInputField
              required={true}
              label="Secret Key"
              type="text"
              onChange={(e) =>
                setQuizData({ ...quizData, secretkey: e.target.value })
              }
              val={quizData.secretkey}
            />
            <br />
            <span>
              <input
                type="radio"
                onChange={(e) =>
                  setQuizData({ ...quizData, quizopen: e.target.checked })
                }
                checked={quizData.quizopen}
              />
              &nbsp; <label>Quiz Open</label>
            </span>
            <QAInputField
              required={true}
              label="Description"
              type="text"
              onChange={(e) =>
                setQuizData({ ...quizData, quizdescription: e.target.value })
              }
              val={quizData.quizdescription}
            />
            <br />
          </div>
          <QAButtons
            label="Lock Quiz"
            click={putquizName}
            bgClr="brown"
            txtClr="white"
          />

          <div className={AdminCSS.quizQuestions}>
            <QAInputField
              required={true}
              label="Question"
              type="text"
              onChange={(e) =>
                setQuestionData({ ...questionData, question: e.target.value })
              }
              val={questionData.question}
            />
            <br />
            <QAInputField
              required={true}
              label="Option 1"
              type="text"
              onChange={(e) =>
                setQuestionData({ ...questionData, a: e.target.value })
              }
              val={questionData.a}
            />
            <br />
            <QAInputField
              required={true}
              label="Option 2"
              type="text"
              onChange={(e) =>
                setQuestionData({ ...questionData, b: e.target.value })
              }
              val={questionData.b}
            />
            <br />
            <QAInputField
              required={true}
              label="Option 3"
              type="text"
              onChange={(e) =>
                setQuestionData({ ...questionData, c: e.target.value })
              }
              val={questionData.c}
            />
            <br />
            <QAInputField
              required={true}
              label="Correct: Option 4"
              type="text"
              onChange={(e) =>
                setQuestionData({ ...questionData, d: e.target.value })
              }
              val={questionData.d}
            />
            <br />
          </div>
          <QAButtons
            label="Add"
            click={putQuestions}
            bgClr="brown"
            txtClr="white"
          />
        </div>
      </div>
    </>
  );
};

export default Admin;


// Q : What does HTML stand for?

// a : Hyper Text Preprocessor
// b : Hyper Text Markup Language
// c : Hyper Text Multiple Language
// d : Hyper Tool Multi Language