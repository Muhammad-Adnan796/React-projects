import React, { useState } from "react";

function React_form_Validation() {
  const [name, setName] = useState();
  const [email, setemail] = useState();
  const [nameError, setnameError] = useState(false);
  const [emailError, setemailError] = useState(false);
  const RegexExp =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  const handleName = (e) => {
    const name = e.target.value;
    if (name.length < 5) {
      setnameError(true);
    } else {
      setnameError(false);
    }
    setName(name);
  };

  const handleEmail = (e) => {
    const email = e.target.value;
    if (!email.match(RegexExp)) {
      setemailError(true);
    } else {
      setemailError(false);
    }
    setemail(email);
  };

  const handleValidations = (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    if (name.length < 5) {
      setnameError(true);
    } else {
      setnameError(false);
    }

    const email = e.target[1].value;
    if (!email.match(RegexExp)) {
      setemailError(true);
    } else {
      setemailError(false);
    }

    if((!name.length < 5) && (email.match(RegexExp))){
        alert("Form has been submitted...");
        alert(`Name : ${name} and  Email : ${email} `)
    }

  };

  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleValidations}>
        <label htmlFor="">Enter Name : </label>
        <input
          type="text"
          name="name"
          placeholder="name"
          onChange={handleName}
          value={name}
        />
        <br />
        {nameError ? (
          <span style={{ color: "red", fontSize: "13px" }}>
            Name Length must be greater then 5{" "}
          </span>
        ) : (
          ""
        )}
        <br />
        <br />
        <label htmlFor="">Enter Email : </label>
        <input
          type="text"
          name="email"
          placeholder="email"
          onChange={handleEmail}
          value={email}
        />
        <br />
        {emailError ? (
          <span style={{ color: "red", fontSize: "13px" }}>Invalid email</span>
        ) : (
          ""
        )}
        <br />
        <br />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
}

export { React_form_Validation };
