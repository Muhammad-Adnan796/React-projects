import React from "react";
import Style from "./StyleFooter.module.css";

class Footer extends React.Component {
  render() {
    return (
      <div>
        <h1  className={Style.head1} >This is Footer of Our Web</h1>
      </div>
    );
  }
}

export { Footer };