import React from 'react';
import Style from "./StyleHeader.module.css";



class Header extends React.Component {
  render() {
    return (
      <div>
        <h1  className={Style.head1} >This is Header of Our Web</h1>
      </div>
    )
  }
}


export { Header};