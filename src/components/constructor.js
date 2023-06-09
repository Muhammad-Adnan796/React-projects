import React from "react";

class StudentConstruc extends React.Component {
  constructor() {
    // super keyword helps to call the parent constructor in a child construcotr,
    /* like this => */ super();
    console.log("Muhammad Adnan")
  }

  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
      </div>
    );
  }
}

export { StudentConstruc };
