import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Create() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://647f3435c246f166da90546a.mockapi.io/crud", {
        name,
        age,
        email,
      })
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="main-form">
        <div className="create">
          <h1>Create Data</h1>
        </div>
        <form onSubmit={handleSubmit} className="form">
          <div className="inp-div">
            <label htmlFor="" className="name-lbl">
              Enter Name :
            </label>
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              className="text-field"
            />
          </div>
          <div className="inp-div">
            <label htmlFor="" className="name-lbl">
              Enter Age :
            </label>
            <input
              type="number"
              onChange={(e) => setAge(e.target.value)}
              placeholder="Age"
              className="text-field"
            />
          </div>
          <div className="inp-div">
            <label htmlFor="" className="name-lbl">
              Enter Email :
            </label>
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="text-field"
            />
          </div>
          <div className="btn-div">
            <button type="submit" value="Submit">
              Submit
            </button>
            <Link to="/" >
              <button>
                Read
              </button>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}

export { Create };
