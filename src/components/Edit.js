import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Edit() {
  const [id, setId] = useState();
  const [name, setName] = useState("");
  const [age, setAge] = useState();
  const [email, setEmail] = useState("");

  useEffect(() => {
    setId(localStorage.getItem("id"));
    setName(localStorage.getItem("name"));
    setAge(localStorage.getItem("age"));
    setEmail(localStorage.getItem("email"));
  },[]);

  const navigate = useNavigate()

  const handleUpdate = (e) => {
    e.preventDefault();
    axios
      .put(`https://647f3435c246f166da90546a.mockapi.io/crud/${id}`, {
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
          <h1>Update Data</h1>
        </div>
        <form onSubmit={handleUpdate} className="form">
          <div className="inp-div">
            <label htmlFor="" className="name-lbl">
              Enter Name :
            </label>
            <input
              type="text"
              value={name}
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
              value={age}
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="text-field"
            />
          </div>
          <div className="btn-div">
            <button type="submit" value="Submit">
              Update
            </button>
            <Link to="/">
              <button>Read</button>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}

export { Edit };
