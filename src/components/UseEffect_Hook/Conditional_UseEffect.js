import React from "react";
import { useState, useEffect } from "react";

function Conditional_UseEffect() {
  let [count, setCount] = useState(0);
  let [name, setName] = useState("Adnan");

  //   first time rendering
  /*
useEffect(() => {
    console.log(`Hello I am UseEffect ${count}`);
  }, []); */

  //    rendering after update of second parameter of useEffect

  useEffect(() => {
    console.log(`Hello I am UseEffect ${count}`);
  }, [count,name]);

  return (
    <>
      <h1>{count}</h1>
      <h1>{name}</h1>
      <button onClick={() => setCount(count + 1)}>Change Effect</button>
      <button onClick={() => setName(name="Zeeshan")}>Change Effect</button>
    </>
  );
}

export default Conditional_UseEffect;
