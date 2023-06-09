import React from "react";
import "./ExternalStyle.css";

class ExternalStyle extends React.Component {
  render() {
    let x = this.props.check ? "style1" : "style2";

    return (
      <>
        <h1 className={`${x} style3`}>Muhammad Adnan</h1>
      </>
    );
  }
}

export { ExternalStyle };
