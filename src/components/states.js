import React from 'react'

// Method 1 => With Constructor ,
 class StatesCompo extends React.Component {
    constructor() {
        super();
        // this.changeName = this.changeName.bind(this);
        this.state = {
            name : "Muhammad Adnan",
            age : 21,
            fatherName : "Muhammad Mumtaz",
        }
      }
    

      changeName(){
        this.setState({
            name : "Muhammad Hasnain",
            age : 18,
            fatherName : "Muhammad Ilyas",
        })
      }

      render() {
        return (
          <div>
            <h1>{this.state.name}</h1>
            <h1>{this.state.age}</h1>
            <h1>{this.state.fatherName}</h1>
            <input type="button" value="click" onClick={this.changeName.bind(this)} />
          </div>
        );
      }
}

export {StatesCompo};

// Method 2 => WithOut Constructor ,

/* 
class StatesCompo extends React.Component {
    state = {
        name : "Muhammad Adnan",
        age : 21,
        fatherName : "Muhammad Mumtaz",
    }
    

      changeName(){
        this.setState({
            name : "Muhammad Hasnain",
            age : 18,
            fatherName : "Muhammad Ilyas",
        })
      }

      render() {
        return (
          <div>
            <h1>{this.state.name}</h1>
            <h1>{this.state.age}</h1>
            <h1>{this.state.fatherName}</h1>
            <input type="button" value="click" onClick={() =>this.changeName()} />
          </div>
        );
      }
}

export {StatesCompo}; */