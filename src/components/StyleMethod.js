import React from "react";

class StyleMethod extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      active: false,
    };
  }

  changeState = () => {
    this.setState({
      active: true,
    });
  };

  render() {
    let Styleobj1 = {
      color: "Blue",
      backgroundColor: "orange",
      fontsize: "50px",
    };
    let Styleobj2 = {
      fontFamily: "cooper",
    };

    if (this.state.active) {
        Styleobj1.backgroundColor="Green";
        Styleobj1.color = "white";

    }

    return (
      <div>
        <h1 onClick={this.changeState} className="App" style={{...Styleobj1,...Styleobj2}}>Muhammad Adnan</h1>
      </div>
    );
  }
}

export { StyleMethod };
