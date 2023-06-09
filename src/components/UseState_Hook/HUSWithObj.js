import React, { useState } from "react";

function HUSWithObj() {
  let obj = {
    name: "Muhammad Adnan",
    fatherName: "Muhammad Mumtaz",
    age: 23,
    height: 5.4,
    isMarried: false,
  };

  const [person, setPerson] = useState(obj);

  let changeState = () => {
    // For change of one value.

    setPerson((previosState) => {
      return {
        ...previosState,
        name: "Muhammad Hasnain",
        fatherName: "Muhammad Ilyas",
      };
    });

    // For Change of multiple values.
    /* setPerson({
      name: "Muhammad Hasnain",
      fatherName: "Muhammad Ilyas",
      age: 18,
      height: 5.2,
      isMarried: true,
    }); */
  };

  return (
    <>
      <h1>name : {person.name}</h1>
      <h1>Father Name : {person.fatherName}</h1>
      <h1>Age : {person.age}</h1>
      <h1>Height : {person.height}</h1>
      <h1>Married : {person.isMarried.toString()}</h1>

      <button onClick={changeState}>Update</button>
    </>
  );
}

export { HUSWithObj };
