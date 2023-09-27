import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { fbSignIn } from "../../../firebaseConfige/FirebaseConfige";
import QAInputField from "../../../components/InputField/InputField";
import QAButtons from "../../../components/Buttons/Buttons";

const SignIn = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    fbSignIn(loginData.email, loginData.password)
      .then((response) => {
        if(response.email === `admin8123796@gmail.com`){
          navigate('/admin',{replace: true})
        }else{ 
          navigate("/quiz",{replace: true});
        }

        console.log("Succesfully logIn",response)
      })
      .catch((error) => {
        console.log("logIn Error",error)
      });
  };

  return (
    <>
      <form onSubmit={handleSignup}>
        <br />
        <br />
        <h1>Sign In</h1>
        <br />
        <br />
        <QAInputField
          label="Email"
          val={loginData.email}
          onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
        />
        <br />
        <QAInputField
          label="Password"
          val={loginData.password}
          onChange={(e) =>
            setLoginData({ ...loginData, password: e.target.value })
          }
        />
        <br />
        <QAButtons label="Sign In" type="submit" bgClr="brown" txtClr="white" /> <br />
        <Link to="/signup" >SignUp</Link>
      </form>
    </>
  );
};

export default SignIn;
