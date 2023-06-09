import React, { useState } from "react";

function State_Function() {
  let [counter, setCounter] = useState(0);

  let Increment = () => {
    setCounter(counter + 1);
  };

  let Decrement = () => {
    setCounter(counter - 1);
  };

  return (
    <>
      <h1>{counter}</h1>
      <button onClick={Increment}>Increase</button>
      <button onClick={Decrement}>Decreas</button>
    </>
  );
}

export { State_Function };
