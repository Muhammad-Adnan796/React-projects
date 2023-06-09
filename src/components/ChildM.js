import React from 'react'

class PropsChildM extends React.Component {


  render() {
    return (
      <div>
        <button onClick={this.props.callMethod} >Click ME</button>
      </div>
    )
  }
}


export {PropsChildM};