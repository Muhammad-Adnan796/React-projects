import React from "react";
import { useState } from "react";

function Controlled_function() {

  let [name, setName] = useState("Adnan");
  let handleOnSubmition = (a) => {
    a.preventDefault();
    console.log(a.target[0].value);
  }

  return (
    <div className="App">
      <form onSubmit={handleOnSubmition}>
        <label htmlFor="">Enter Name :</label>
        <input
          type="text"
          value={name}
          onChange={(a) =>
            setName(
              a.target.value.toUpperCase().substring(0, 20).replace(`$`, `_`)
            )
          }
        />
     
        <br />
        <br />
        <h1>{name}</h1>
        <br /><br />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
}

export { Controlled_function };
