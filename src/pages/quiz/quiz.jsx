import React from "react";
import QAButtons from "../../components/Buttons/Buttons";
import { fbSignOut } from "../../firebaseConfige/FirebaseConfige";
import { useNavigate } from "react-router-dom";

const Quiz = () => {
  const navigate = useNavigate();

  const logOut = () => {
    fbSignOut().then(() => {
      navigate("/signin",{replace:true});
    });
  };
  return (
    <div>
      <h1>Quiz Page</h1>
      <QAButtons
        label="LogOut"
        type="submit"
        click={logOut}
        bgClr="brown"
        txtClr="white"
      />
    </div>
  );
};

export default Quiz;
