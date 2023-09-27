import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "../pages/authentication/signUp/SignUp";
import SignIn from "../pages/authentication/signIn/SignIn";
import Admin from "../pages/adminPanel/Admin";
import Quiz from "../pages/quiz/quiz";
import Protected from "../pages/protectedScreen/Protected";

const Routers = () => {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Protected Screen={SignIn}/>}/>
        <Route path="/signin" element={<SignIn/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/admin" element={<Admin/>}/>
        <Route path="/quiz" element={<Quiz/>}/>
      </Routes>
    </Router>
  );
};

export default Routers;
