import React, { useState } from "react";

function HookComponents() {
  const [name, setName] = useState("Adnan");
  let changeState = () => {
    setName("Zeeshan");
  };

  return (
    <>
      <h1>{name}</h1>
      <button onClick={changeState}>Update</button>
    </>
  );
}

export { HookComponents };

/* import React, { useState } from "react";

function HookComponents() {
  const myArray = useState("Adnan");
  let changeState = () => {
    myArray[1]("Zeeshan");
  };

  return (
    <>
      <h1>{myArray[0]}</h1>
      <button onClick={changeState}>Update</button>
    </>
  );
}

export { HookComponents }; */
