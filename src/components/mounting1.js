import React  from 'react'

 class Mounting1 extends React.Component {

    constructor(props) {
      super(props)
    
      this.state = {
         name : "Muhammad Adnan"
      }
      console.log("Mounting 1 Constructor invoked...!");
    }
    

  render() {
    return (
      <div>

      <h1>{this.state.name}</h1>
      <h1>{this.props.city}</h1>
        
      </div>
    )
  }
}


export {Mounting1};