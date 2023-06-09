import React from "react";

function ListMethods() {
  let names = ["Adnan", "Zeeshan", "Hasnain", "Ali"];
  let number = [22, 21, 18, 14];
  let studentsObj = [
    {
      name: names[0],
      age: number[0],
    },
    {
        name: names[1],
        age: number[1],
    },
    {
        name: names[2],
        age: number[2],
    },
    {
        name: names[3],
        age: number[3],
    },
  ];
  return (
    <>
      

      {studentsObj.map((std, index) => 
        <h1 key={index} >
          I am {std.name} and I am {std.age} years old.
        </h1>
      )}
    </>
  );
}

export { ListMethods };
