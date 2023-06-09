import React, { useState } from "react";

function HUSWithArray() {
  let arr = [11, 22, 33, 55];
  let [numb, setNumbers] = useState(arr);

  let changeList = () => {
    // setNumbers([44, 66, 77, 88]);

    setNumbers((previousState) => {
      return [...previousState, Math.floor((Math.random() + 10) * 5)];
    });
  };

  return (
    <>
      <ul>
        {numb.map((n, i) => (
          <li key={i}>{n}</li>
        ))}
      </ul>
      <button onClick={changeList}>Change List</button>
    </>
  );
}

export { HUSWithArray };
