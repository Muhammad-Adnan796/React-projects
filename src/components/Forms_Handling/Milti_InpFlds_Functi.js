import React, { useState } from "react";

function Milti_InpFlds_Functi() {
  const [data, setData] = useState({
    name: "",
    email: "",
  });

  const handleChange = (a) => {
    const { name, value } = a.target;
    const new_value =
      name === "email" ? value.toLowerCase().replace("&", "@") : value;
    console.log(a.target);

    setData((prev) => {
      return {
        ...prev,
        [name]: new_value,
      };
    });
  };

  const handleSubmit = (a) => {
    a.preventDefault();
    console.log(data);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Enter Name : </label>
        <input
          type="text"
          value={data.name}
          onChange={handleChange}
          name="name"
          placeholder="Enter your name"
        />
        <br />
        <h1>Name : {data.name}</h1>
        <br />

        <label htmlFor="">Enter Email : </label>
        <input
          type="text"
          value={data.email}
          onChange={handleChange}
          name="email"
          placeholder="Enter your email"
        />
        <br />
        <h1>Email : {data.email}</h1>

        <br />

        <input type="submit" value="submit" />
      </form>
    </div>
  );
}

export { Milti_InpFlds_Functi };
