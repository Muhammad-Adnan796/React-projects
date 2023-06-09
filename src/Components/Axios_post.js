import Axios from "axios";
import React, { useState } from "react";

const baseURL = "https://jsonplaceholder.typicode.com/posts";

function Axios_post() {
  /* const [title, setTitle] = useState("");
  const [body, setBody] = useState(""); */
  const [mytitle, setTitle] = useState("");
  const [mybody, setBody] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.post(baseURL, {
      title: mytitle,
      body: mybody,
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="App">
        <form onSubmit={handleSubmit}>
          <label htmlFor="">Enter Title : </label>
          <input
            type="text"
            name="title"
            value={mytitle}
            onChange={(e) => setTitle(e.target.value)}
          />
          <br />
          <label htmlFor="">Enter Body : </label>
          <input
            type="text"
            name="body"
            value={mybody}
            onChange={(e) => setBody(e.target.value)}
          />
          <br />
          <br />

          <h1>{mytitle}</h1>
          <h1>{mybody}</h1>
          <button type="submit" value="post">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export { Axios_post };
