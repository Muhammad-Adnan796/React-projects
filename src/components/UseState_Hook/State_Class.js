import React from "react";

class State_Class extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };
  }

  Increment = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };

  Decrement = () => {
    this.setState({
      counter: this.state.counter - 1,
    });
  };

  render() {
    return (
      <>
        <h1>{this.state.counter}</h1>
        <button onClick={this.Increment}>Increase</button>
        <button onClick={this.Decrement}>Decreas</button>
      </>
    );
  }
}

export { State_Class };
