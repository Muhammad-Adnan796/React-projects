import React from 'react'
import { PropsChildM } from './ChildM';

class PropsParentM extends React.Component {

    PropParentMethod = (firstName,lastName)=>{
        document.write(`Props Parent Method Name : ${firstName} ${lastName} ...!`)
    }

  render() {
    return (
      <div>
        <PropsChildM callMethod={()=> this.PropParentMethod("Muhammad","Adnan")}/>
      </div>
    )
  }
}


export {PropsParentM};