import React from "react";
import { useState, useEffect } from "react";

function Function_UseEffect() {
  let [count, setCount] = useState;

  useEffect(() => {
    console.log(`Hello I am UseEffect ${count}`);
  });

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Change Effect</button>
    </>
  );
}

export { Function_UseEffect };
