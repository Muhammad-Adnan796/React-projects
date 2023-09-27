import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import QAInputField from "../../../components/InputField/InputField";
import QAButtons from "../../../components/Buttons/Buttons";
import {
  fbsignUp,fbPutDataRTDB
} from "../../../firebaseConfige/FirebaseConfige";

const SignUp = () => {
  const [signUpData, setSignUpData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    fbsignUp(signUpData.email, signUpData.password)
      .then((response) => {
        console.log("Succesfully SignUp",response)
        navigate("/signin");
      })
      .catch((error) => {
        console.log("SignUp Error" , error)
      });
      fbPutDataRTDB("users/", {
      name: signUpData.name,
      email: signUpData.email,
      passowrd: signUpData.password,
    }).then((response)=>{
      console.log("Data SuccessFully saved",response);
    }).catch((error)=>{
      console.log("Data Saved Error",error)
    });
  };

  return (
    <>
      <form onSubmit={handleSignup}>
        <br />
        <br />
        <h1>Sign Up</h1>
        <br />
        <br />
        <QAInputField
          label="Name"
          val={signUpData.name}
          onChange={(e) => setSignUpData({ ...signUpData, name: e.target.value })}
        />{" "}
        <br />
        <QAInputField
          label="Email"
          val={signUpData.email}
          onChange={(e) => setSignUpData({ ...signUpData, email: e.target.value })}
        />{" "}
        <br />
        <QAInputField
          label="Password"
          val={signUpData.password}
          onChange={(e) =>
            setSignUpData({ ...signUpData, password: e.target.value })
          }
        />{" "}
        <br />
        <QAButtons label="SignUp" type="submit" bgClr="brown" txtClr="white" />
      </form>
    </>
  );
};

export default SignUp;
