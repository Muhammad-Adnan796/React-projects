import React from "react";


let numb = 10;
let msg = "";

if (numb > 20) {
  msg = "Hello!";
} else {
  msg = "Bye.";
}

let User = (props) => {
  return (
    <>
      <div className="App">
        <h1>Name : {props.name} </h1>
        <h1>Age : {props.age} </h1>
        <h1>Faculty : {props.faculty} </h1>
        <h1> {5 + 5} </h1>
      </div>
      <h2>{msg}</h2>
      <h2> {numb < 20 ? "Hello Ternary!" : "Bye Ternary."} </h2>
      
    </>
  );
}



function User2(){
  return (
      <>
          <header> 
          <h1>This is User2 of Our Web</h1>
          </header>
      </>
  );
}


export {User,User2};
