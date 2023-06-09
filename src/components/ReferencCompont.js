import React from "react";
import { createRef } from "react";

class ReferencCompont extends React.Component {
  constructor(props) {
    super(props);

    this.myRef = createRef();
  }

  handleDiv = () => {
    this.myRef.current.align = "right";
  };

  render() {
    return (
      <div className="App">
        <h1 ref={this.myRef}>Muhammad Adnan Channel</h1>
        <button onClick={this.handleDiv}>Click</button>
      </div>
    );
  }
}

export { ReferencCompont };
